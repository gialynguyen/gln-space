import '@app/config';

import { startHttpServer } from '@app/http.server';
import { connectPostgreSqlDataSources } from '@datasource/postgresql';
import { defaultLogger } from '@gln-libs/node-infrastructure';

global.logger = defaultLogger();

const start = async () => {
  await connectPostgreSqlDataSources();

  startHttpServer();
};

start();
