import { safeApiClient } from "@/shared/configs";
import { User } from "../models";

export async function getUser(): Promise<User> {
  const { data: user } = await safeApiClient.get<User>(`/auth/me`);
  return user;
}
