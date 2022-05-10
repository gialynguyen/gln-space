import '@app/config';

import { startHttpServer } from '@app/http.server';
import { defaultLogger } from '@gln-libs/node-infrastructure';

global.logger = defaultLogger();

const start = async () => {
  startHttpServer();
};

start();
