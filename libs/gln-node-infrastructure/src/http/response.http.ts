import { Response as ResponseBase } from 'express';

export type ResponseUtils = {
  resSuccess(data?: unknown): ResponseUtils;
  resError(
    message: string,
    otherPayload?: Record<string, unknown>
  ): ResponseUtils;
};

export type Response = ResponseBase & ResponseUtils;

export const ResponseUtils = (response: ResponseBase): ResponseUtils => {
  const utils: ResponseUtils = {
    resSuccess(data) {
      response.json({
        success: true,
        data,
        error: null,
      });

      return this;
    },
    resError(message, detail) {
      response.json({
        success: false,
        data: null,
        error: {
          message,
          detail,
        },
      });

      return this;
    },
  };

  return utils;
};
