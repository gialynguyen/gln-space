import {
  Controller,
  HttpBodyValidate,
  HttpController,
  Request,
  Response,
  Route,
  Router,
} from '@gln-libs/node-infrastructure';

import {
  CreateUserTaskRequestBodySchema,
  UpdateUserTaskRequestBodySchema,
} from './dto/userTask.request.dto';
import { UpdateUserTaskPayload, UserTask } from './interface/userTask';
import { UserTaskService } from './userTask.service';

@Controller('/task')
export class UserTaskController extends HttpController {
  userTaskService: UserTaskService;

  constructor(router: Router) {
    super(router);

    this.userTaskService = new UserTaskService();
  }

  @Route('post')
  @HttpBodyValidate(CreateUserTaskRequestBodySchema)
  async create(req: Request, response: Response): Promise<void> {
    const payload: UserTask = {
      ...req.body,
      customerId: req.headers['customer-id'],
    };

    const createUserTaskresult = await this.userTaskService.createUserTask(
      payload
    );

    if (createUserTaskresult.data)
      response.resSuccess(createUserTaskresult.data);
    else response.resError(createUserTaskresult.errorMessage);
  }

  @Route('post', '/:id')
  @HttpBodyValidate(UpdateUserTaskRequestBodySchema)
  async update(req: Request, response: Response): Promise<void> {
    const payload: UpdateUserTaskPayload = {
      ...req.body,
    };

    const updateUserTaskresult = await this.userTaskService.updateUserTask(
      payload,
      req.params.id
    );

    if (updateUserTaskresult.data)
      response.resSuccess(updateUserTaskresult.data);
    else response.resError(updateUserTaskresult.errorMessage);
  }
}
