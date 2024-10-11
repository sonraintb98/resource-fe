import { safeApiClient } from "@/shared/configs";
import { MembersResponse } from "../models";

export async function getAllMembers(): Promise<MembersResponse> {
  const response =
    await safeApiClient.get<MembersResponse>(`/users/getAllUsers`);
  return response.data;
}
