import {
  NextFunction,
  Request,
  Response,
  ValidateError,
} from '@gln-libs/node-infrastructure';

export const errorHandlerMiddleware = async (
  error: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  __: NextFunction
): Promise<void> => {
  global.logger.error(error);

  if (!res.headersSent) {
    let message = error?.message;
    const detail: Record<string, unknown> = {};

    if (error instanceof ValidateError) {
      message = error.firstErrorMessage;
      Object.assign(detail, error.toJson());
    }

    res.resError(message, detail);
  }
};
