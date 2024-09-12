import { getRandomV4 } from "@/shared/utils";

export const STATE_COOKIE_ITEM = "state";

function generate(redirectUrl: string): string {
  return JSON.stringify({
    state: getRandomV4(),
    redirectUrl,
  });
}

function save(state: string): void {
  sessionStorage.setItem(STATE_COOKIE_ITEM, state);
}

function remove(): void {
  sessionStorage.removeItem(STATE_COOKIE_ITEM);
}

function get(): string | undefined {
  return sessionStorage.getItem(STATE_COOKIE_ITEM) ?? undefined;
}

function getRedirectUrl(code: string): string | undefined {
  try {
    const { redirectUrl } = JSON.parse(code) as Record<string, string>;
    return redirectUrl ?? undefined;
  } catch {
    return undefined;
  }
}

const KEY = "PL_logout";

function triggerLogoutAllTabs() {
  window.localStorage.setItem(KEY, new Date().getTime().toString());
}

function watchLogoutAllTabsEvent(onCall: () => void): () => void {
  function handler(event: StorageEvent) {
    if (
      (event.key === KEY && event.newValue) ||
      (event.key === "accessToken" && !event.newValue)
    ) {
      onCall();
      window.localStorage.removeItem(KEY);
    }
  }

  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener("storage", handler);
  };
}

export const stateCodeManager = {
  generate,
  save,
  get,
  remove,
  getRedirectUrl,
  triggerLogoutAllTabs,
  watchLogoutAllTabsEvent,
};
