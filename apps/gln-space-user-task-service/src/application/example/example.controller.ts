import {
  Controller,
  HttpController,
  Request,
  Response,
  Route,
} from '@gln-libs/node-infrastructure';

@Controller('/example')
export class ExampleController extends HttpController {
  @Route('get', '/ping')
  async ping(_: Request, res: Response): Promise<void> {
    res.write('pong');
    res.end();
  }
}
