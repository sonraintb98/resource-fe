import { statusCodes } from "@/shared/utils";
import { ApiErrors, ErrorResponse } from "@/shared/configs";

type OptionalApiError = ApiErrors | null | undefined;

function isErrorResponse(err: OptionalApiError): err is ErrorResponse {
  return !!err;
}
function isNotFound(err: OptionalApiError): boolean {
  return isErrorResponse(err) && err?.status === statusCodes.NOT_FOUND;
}

export const userErrorHandling = { isNotFound };
