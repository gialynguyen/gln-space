export type UserTask = {
  customerId: string;
  title: string;
  description?: string;
  startTime: string;
  endTime?: string;
};

export type CreateUserTaskPayload = Omit<UserTask, 'customerId'>;
