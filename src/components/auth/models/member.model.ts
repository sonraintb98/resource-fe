import { PaginationRequest, PaginationResponse } from "@/shared/models";

export type MemberEntity = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
  activated: boolean;
  role: number;
};

export type MembersRequest = { order?: string } & PaginationRequest;
export type MembersResponse = PaginationResponse<MemberEntity>;
