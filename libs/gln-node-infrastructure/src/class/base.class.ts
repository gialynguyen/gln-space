import { DefaultLogger, defaultLogger } from '../logger';

export class BaseClass {
  logger: DefaultLogger;

  constructor() {
    this.logger = defaultLogger;
  }
}
