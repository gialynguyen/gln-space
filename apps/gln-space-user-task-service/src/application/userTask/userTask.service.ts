import { UserTaskRepository } from '@datasource/postgresql';

import { UserTaskFromEntityDTO } from './dto/userTask.response.dto';
import { CreateUserTaskPayload, UserTask } from './interface/userTask';

export class UserTaskService {
  async createUserTask(payload: CreateUserTaskPayload): Promise<UserTask> {
    const userTask = UserTaskRepository.create(payload);

    const userTaskEntity = await UserTaskRepository.save(userTask);

    return UserTaskFromEntityDTO.toClass(userTaskEntity);
  }
}
