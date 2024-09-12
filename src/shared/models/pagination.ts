export type PaginationRequest = {
  page?: number;
  limit?: number;
};

export type PaginationResponse<T> = {
  data: T[];
  pagination: {
    limit: number;
    page: number;
    total: number;
  };
};
