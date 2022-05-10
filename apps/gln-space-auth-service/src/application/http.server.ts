import {
  httpLogger,
  Response,
  ResponseUtils,
} from '@gln-libs/node-infrastructure';
import express from 'express';

import { AppConfig } from './config';
import { corsMiddleware } from './middleware';

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

export const startHttpServer = (): void => {
  const { port } = AppConfig.HttpServer;

  const app = express();

  setupAppMiddlewares(app);

  app.listen(port, () => {
    global.logger.info(`HttpServer started on port ${port}`);
  });
};
