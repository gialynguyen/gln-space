export type UserTask = {
  customerId: string;
  title: string;
  description?: string;
  startTime: string;
  endTime?: string;
};

export type UserTaskServiceRes = {
  data?: UserTask;
  errorMessage?: string;
};

export type UpdateUserTaskPayload = {
  title?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
};
