import { User } from '../models';
import React from 'react';

export type AuthContextValue = {
  isFetchingPermissions?: boolean;
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};
