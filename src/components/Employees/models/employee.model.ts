// export type EmployeeRequest = {
// name: string;
// birthDay: string;
// address: string;
// phoneNumber: string;
// workingDay: string;
// CCCD: string;
// salary: number;
// status: string;
// };

// export type EmployeeResponse = {
//   name: string;
//   birthDay: string;
//   address: string;
//   phoneNumber: string;
//   workingDay: string;
//   CCCD: string;
//   salary: number;
//   status: string;
// };

import { PaginationRequest, PaginationResponse } from "@/shared/models";

export type EmployeeEntity = {
  name: string;
  birthDay: string;
  address: string;
  phoneNumber: string;
  workingDay: string;
  CCCD: string;
  salary: number;
  status: string;
};

export type EmployeeView = Pick<
  EmployeeEntity,
  | "name"
  | "birthDay"
  | "address"
  | "phoneNumber"
  | "workingDay"
  | "CCCD"
  | "salary"
  | "status"
> & {
  id: string;
  action?: string;
};

export type EmployeesRequest = { order?: string } & PaginationRequest;

export type EmployeesResponse = PaginationResponse<EmployeeEntity>;

export type MemberFormModel = Pick<
  EmployeeEntity,
  | "name"
  | "birthDay"
  | "address"
  | "phoneNumber"
  | "workingDay"
  | "CCCD"
  | "salary"
  | "status"
>;

// export type CreateMemberRequest = {
//   payload: MemberFormModel;
// };

// export type UpdateMemberRequest = {
//   payload: MemberFormModel;
// };

// export type MemberInfoTimelineResponse = {
//   info: MemberFormModel;
//   timeline: WorkingTimelineEntity[];
//   skillTimeline: SkillTimelineEntity[];
//   salaryTimeline: SalaryOfMemberEntity[];
// };

// export type EditMemberRequest = {
//   id: string;
//   payload: MemberFormModel;
// };
