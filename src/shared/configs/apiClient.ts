import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { convertBufferToStringUtf8, statusCodes } from "../utils";
import getConfig from "next/config";
import {
  ArrayBufferError,
  CommonServerError,
  ErrorResponse,
  MaintenanceServerError,
  NetworkError,
  RequestAbortedError,
  ServerTimeoutError,
  SessionTimeOutError,
  envVariables,
} from "./";
import {
  refreshTokenFn,
  revokeRefreshToken,
  tokensManager,
} from "@/components/auth";

export interface AxiosRequestConfigExt extends AxiosRequestConfig {
  isRetryRequest: boolean | undefined;
}

function isArrayBufferError(request: unknown): request is ArrayBufferError {
  return ["arraybuffer", "blob"].includes(
    (request as ArrayBufferError)?.responseType,
  );
}

// Got an error response from the server
function handleResponseError(response: AxiosResponse<ErrorResponse>) {
  if (isArrayBufferError(response?.request)) {
    const responseBufferToString = JSON.parse(
      convertBufferToStringUtf8(response.data as unknown as ArrayBuffer),
    ) as CommonServerError;
    throw new CommonServerError(responseBufferToString);
  }

  if (
    [statusCodes.NOT_FOUND, statusCodes.BAD_REQUEST].includes(response.status)
  ) {
    throw new ErrorResponse(response.data);
  }
  if (statusCodes.UNAUTHORIZED === response.status) {
    tokensManager.removeAll();
    throw new SessionTimeOutError();
  }

  if (response.status === statusCodes.MAINTENANCE) {
    throw new MaintenanceServerError();
  }

  if (response.status === statusCodes.SERVER_TIMEOUT) {
    throw new ServerTimeoutError();
  }

  if (statusCodes.FORBIDDEN === response.status) {
    tokensManager.removeAll();
  }

  throw new CommonServerError(response.data);
}

function handleAxiosError(error: AxiosError<ErrorResponse>) {
  if (error.response) {
    return handleResponseError(error.response);
  }

  return handleCommonServerError(error);
}

// Unexpected error happened
function handleCommonServerError(error: AxiosError<ErrorResponse>) {
  throw new CommonServerError({
    code: error.code,
    name: error.name,
    message: error.message,
  });
}

export interface RequestOptions {
  isHandleError?: boolean;
  baseURL?: string;
  isCurrentEcom?: boolean;
  isPublic?: boolean;
  isSigned?: boolean;
}

const nextConfig = getConfig() as
  | undefined
  | { publicRuntimeConfig: { requestDate?: string } };

export class Request {
  public readonly axiosClient: AxiosInstance;
  private readonly isHandleError: boolean;
  private readonly isCurrentEcom: boolean;
  private readonly isPublic: boolean;
  public static refreshTokenFn: Promise<void> | null;

  constructor(
    {
      isHandleError = false,
      baseURL,
      isCurrentEcom = false,
      isPublic = false,
    }: RequestOptions = {
      isHandleError: false,
      isCurrentEcom: false,
      isPublic: false,
    },
  ) {
    this.isHandleError = isHandleError;
    this.axiosClient = axios.create({
      baseURL: baseURL ?? envVariables.API_ENDPOINT,
      timeout: 300000,
    });
    this.isCurrentEcom = isCurrentEcom;
    this.isPublic = isPublic;

    this.axiosClient.interceptors.request.use((config) => {
      const accessToken = tokensManager.get("accessToken");
      const headers = config.headers as Record<string, string>;
      if (accessToken && !this.isPublic) {
        headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    });

    this.axiosClient.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfigExt;
        if (
          error.response?.status !== statusCodes.UNAUTHORIZED ||
          !originalRequest
        ) {
          throw error;
        }
        const reToken = tokensManager.get("refreshToken");
        const expiresRefreshAt = tokensManager.get("expiresRefreshAt");
        if (
          !reToken ||
          !expiresRefreshAt ||
          tokensManager.hasTokenExpired(expiresRefreshAt, 0)
        ) {
          throw error;
        }
        if (!Request.refreshTokenFn) {
          Request.refreshTokenFn = refreshTokenFn(reToken);
        }

        await Request.refreshTokenFn
          .catch(() => revokeRefreshToken())
          .finally(() => {
            Request.refreshTokenFn = null;
          });
      },
    );
  }

  handleError<T = never>(
    error: AxiosError<ErrorResponse>,
  ): Promise<AxiosResponse<T>> {
    if (!this.isHandleError) {
      throw error;
    }

    if (error.code === "ABORTED") {
      if (error.message === "Request aborted") {
        throw new RequestAbortedError();
      }
      throw new ServerTimeoutError();
    }

    if (!error.response?.data && this.isCurrentEcom) {
      throw new SessionTimeOutError();
    }

    // Request aborted error on Safari
    if (error.code === "ERR_NETWORK" && error.message === "Network Error") {
      throw new NetworkError();
    }

    if (axios.isAxiosError(error)) {
      // handleAxiosError(error);
      throw error;
    } else {
      handleCommonServerError(error);
    }

    /* Since typescript doesn't have Throwable type (yet) so we need to add this but
     * this code is unreachable as the error has already been thrown up there.
     */
    return Promise.resolve(undefined as unknown as AxiosResponse<T>);
  }

  async get<T = never>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .get<T>(url, config)
      .catch((error: AxiosError<ErrorResponse>) => this.handleError<T>(error));
  }

  async post<T = never>(
    url: string,
    data?: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .post<T>(url, data, config)
      .catch((error: AxiosError<ErrorResponse>) => this.handleError(error));
  }

  async put<T = never>(
    url: string,
    data?: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .put<T>(url, data, config)
      .catch((error: AxiosError<ErrorResponse>) => this.handleError(error));
  }

  async patch<T = never>(
    url: string,
    data?: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .patch<T>(url, data, config)
      .catch((error: AxiosError<ErrorResponse>) => this.handleError(error));
  }

  async delete<T = never>(
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return this.axiosClient
      .delete<T>(url, config)
      .catch((error: AxiosError<ErrorResponse>) => this.handleError(error));
  }
}

export const safeApiClient = new Request({ isHandleError: true });

export const apiClient = new Request({
  baseURL: envVariables.API_ENDPOINT,
});
