import {
  Controller,
  HttpBodyValidate,
  HttpController,
  Request,
  Response,
  Route,
} from '@gln-libs/node-infrastructure';

import { CreateExampleRequestBodySchema } from './dto/example.request.dto';

@Controller('/example')
export class ExampleController extends HttpController {
  // @Route('get', '/ping')
  // async ping(_: Request, res: Response): Promise<void> {
  //   res.write('pong');
  //   res.end();
  // }

  @Route('post')
  @HttpBodyValidate(CreateExampleRequestBodySchema)
  async create(req: Request, response: Response): Promise<void> {
    const { name }: CreateExampleRequestBodySchema = req.body;
    // call the service later

    response.resSuccess({
      name,
    });
  }
}
