import { add, isPast, parseISO, sub } from "date-fns";

const ACCESS_TOKEN_ITEM = "accessToken" as const;
const EXPIRES_ACCESS_TOKEN_IN_MINUTES = 15;
const REFRESH_TOKEN_ITEM = "refreshToken" as const;
const ID_TOKEN_ITEM = "idToken" as const;
const EXPIRES_AT_ITEM = "expiresAt" as const;
const EXPIRES_REFRESH_AT_ITEM = "expiresRefreshAt" as const;
const EXPIRES_REFRESH_IN_HOURS = 2;

export type TokenType =
  | typeof ACCESS_TOKEN_ITEM
  | typeof REFRESH_TOKEN_ITEM
  | typeof ID_TOKEN_ITEM
  | typeof EXPIRES_AT_ITEM
  | typeof EXPIRES_REFRESH_AT_ITEM;

type SetTokensParams = {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  accessTokenTimeout?: number;
};

function set({
  accessToken,
  idToken,
  refreshToken,
  accessTokenTimeout,
}: SetTokensParams): void {
  localStorage.setItem(ACCESS_TOKEN_ITEM, accessToken);
  localStorage.setItem(ID_TOKEN_ITEM, idToken);
  localStorage.setItem(REFRESH_TOKEN_ITEM, refreshToken);

  const now = new Date();
  const expireAt = add(now, {
    minutes: accessTokenTimeout ?? EXPIRES_ACCESS_TOKEN_IN_MINUTES,
  }).toISOString();
  localStorage.setItem(EXPIRES_AT_ITEM, expireAt);
  const expireRefreshAt = add(now, {
    hours: EXPIRES_REFRESH_IN_HOURS,
  }).toISOString();
  localStorage.setItem(EXPIRES_REFRESH_AT_ITEM, expireRefreshAt);
}

function get(tokenType: TokenType): string | undefined {
  return localStorage.getItem(tokenType) ?? undefined;
}

function remove(tokenType: TokenType): void {
  localStorage.removeItem(tokenType);
}

function removeAll(): void {
  remove(ACCESS_TOKEN_ITEM);
  remove(REFRESH_TOKEN_ITEM);
  remove(ID_TOKEN_ITEM);
  remove(EXPIRES_AT_ITEM);
  remove(EXPIRES_REFRESH_AT_ITEM);
}

/**
 * @param offset In minutes
 */
function hasTokenExpired(expiresAt: string, offset: number): boolean {
  const expiresAtTime = sub(parseISO(expiresAt), { minutes: offset });
  return isPast(expiresAtTime);
}

export const tokensManager = {
  set,
  get,
  remove,
  removeAll,
  hasTokenExpired,
};
