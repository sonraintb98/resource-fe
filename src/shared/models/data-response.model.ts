export type DataResponse = {
  errorCode: number;
  errorMsg: string;
  data: Data;
};

export type Data = {
  id?: string[];
};

export type ApiResponse = {
  code: string;
  message: string[];
  data: any;
};
