import { UserTaskRepository } from '@datasource/postgresql';

import { UserTaskFromEntityDTO } from './dto/userTask.response.dto';
import { UserTask } from './interface/userTask';

export class UserTaskService {
  async createUserTask(payload: UserTask): Promise<UserTask> {
    const userTask = UserTaskRepository.create(payload);

    const userTaskEntity = await UserTaskRepository.save(userTask);

    return UserTaskFromEntityDTO.toClass(userTaskEntity);
  }
}
