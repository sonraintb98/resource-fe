import * as React from "react";
import { AuthContext, AuthContextValue } from "@/components/auth/contexts";

// import { AuthContext, AuthContextValue } from '../';

export function useAuthContext(): AuthContextValue {
  const value = React.useContext(AuthContext);
  if (typeof value === "undefined") {
    throw new Error("useAuth must be used inside AuthContextProvider");
  }

  return value;
}
