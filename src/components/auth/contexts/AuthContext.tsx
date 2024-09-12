import * as React from "react";
import { AuthContextValue } from "./types";
import { noop } from "@/shared/utils";

export const AuthContext = React.createContext<AuthContextValue>({
  setUser: noop,
});
