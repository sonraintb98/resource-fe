import * as React from "react";
import { useRouter } from "next/router";
import { useMsal } from "@azure/msal-react";
import { tokensManager } from "../services";
import { isBrowser } from "@/shared/utils";
import { useGetUserInfoQuery } from "../hooks";
import { PUBLIC_PAGES } from "@/shared/configs";
import { AuthContext, AuthContextValue } from ".";
import { User } from "../models";

type Props = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: Props): React.ReactElement {
  const router = useRouter();
  const isClient = isBrowser();
  const { instance } = useMsal();

  const { data: authUser, error } = useGetUserInfoQuery({
    isEnable: isClient && !!tokensManager.get("accessToken"),
  });
  const [user, setUser] = React.useState<User | undefined>(undefined);
  React.useEffect(() => {
    const accessToken = tokensManager.get("accessToken");
    if ((error || !accessToken) && !PUBLIC_PAGES.includes(router.pathname)) {
      const handleLogOutMSAL = async () => {
        const accountsAfterLogin = instance.getAllAccounts();
        if (accountsAfterLogin?.length > 0) {
          try {
            await instance.initialize();
            await instance.logoutRedirect();
            tokensManager.removeAll();
          } catch (error) {}
        }
      };
      handleLogOutMSAL();
      return;
    }
    setUser(authUser);
  }, [authUser, user, error, router]);

  const contextValue = React.useMemo(
    (): AuthContextValue => ({
      user,
      setUser,
    }),
    [user, setUser],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
