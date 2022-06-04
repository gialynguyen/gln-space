import { UserTaskRepository } from '@datasource/postgresql';

import { UserTaskFromEntityDTO } from './dto/userTask.response.dto';
import {
  UpdateUserTaskPayload,
  UserTask,
  UserTaskServiceRes,
} from './interface/userTask';

export class UserTaskService {
  async createUserTask(payload: UserTask): Promise<UserTaskServiceRes> {
    const { startTime, endTime } = payload;

    if (endTime && !(new Date(startTime) < new Date(endTime)))
      return { errorMessage: 'endTime must be grater than startTime' };

    const userTask = UserTaskRepository.create(payload);

    const userTaskEntity = await UserTaskRepository.save(userTask);

    return { data: UserTaskFromEntityDTO.toClass(userTaskEntity) };
  }

  async updateUserTask(
    payload: UpdateUserTaskPayload,
    id: string
  ): Promise<UserTaskServiceRes> {
    // Validate empty
    if (Object.keys(payload).length === 0)
      return { errorMessage: 'data for update is empty' };

    // Validate startTime-endTime
    const { startTime, endTime } = payload;

    if (endTime) {
      if (startTime) {
        if (!(new Date(startTime) < new Date(endTime)))
          return { errorMessage: 'endTime must be grater than startTime' };
      } else {
        const { startTime: currentStartTime } =
          await UserTaskRepository.findOneByOrFail({
            id,
          });

        if (!(new Date(currentStartTime) < new Date(endTime)))
          return { errorMessage: 'endTime must be grater than startTime' };
      }
    }

    // Update entity
    const userTaskResult = await UserTaskRepository.update(id, payload);

    // Return
    if (userTaskResult.affected === 0) {
      return { errorMessage: 'update user task fail' };
    } else {
      const updatedUserTask = await UserTaskRepository.findOneByOrFail({
        id,
      });
      return { data: UserTaskFromEntityDTO.toClass(updatedUserTask) };
    }
  }
}
