import {
  Controller,
  HttpBodyValidate,
  HttpController,
  Request,
  Response,
  Route,
  Router,
} from '@gln-libs/node-infrastructure';

import { CreateUserTaskRequestBodySchema } from './dto/userTask.request.dto';
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
    const payload = { ...req.body, customerId: req.headers['customer-id'] };

    const userTask = await this.userTaskService.createUserTask(payload);

    response.resSuccess(userTask);
  }
}
