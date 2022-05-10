import {
  httpLogger,
  Response,
  ResponseUtils,
} from '@gln-libs/node-infrastructure';
import express from 'express';

import { AppConfig } from './config';
import { ExampleController } from './example/example.controller';
import { corsMiddleware, erroHandlerMiddleware } from './middleware';

const setupAppMiddlewares = (app: express.Express) => {
  app.use(httpLogger());
  app.use((_, res, next) => {
    Object.assign(res, ResponseUtils(res as Response));
    next();
  });

  app.use(corsMiddleware(AppConfig.HttpServer.CORS));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
};

const initializeControllers = (router: express.Router): void => {
  new ExampleController(router);
};

const setupBackgroundAppMiddlewares = (app: express.Express) => {
  app.use(erroHandlerMiddleware);
};

export const startHttpServer = (): void => {
  const { port } = AppConfig.HttpServer;

  const app = express();
  setupAppMiddlewares(app);

  const apiRouter = express.Router();
  initializeControllers(apiRouter);

  app.use('/api/v1', apiRouter);

  setupBackgroundAppMiddlewares(app);

  app.listen(port, () => {
    global.logger.info(`HttpServer started on port ${port}`);
  });
};
