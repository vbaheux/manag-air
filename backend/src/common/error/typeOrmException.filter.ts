import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { QueryFailedError, TypeORMError } from 'typeorm';
import { GlobalResponseErrorDto } from './globalResponseError.dto';

@Catch(TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let message = (exception as any).message.message;
    let code = 'DatabaseException';
    let status: number;

    switch (exception.constructor) {
      case QueryFailedError:
        code = (exception as any).code;
        if (code === 'ER_DUP_ENTRY') {
          status = HttpStatus.CONFLICT;
          message = 'A record with this id already exists in database';
        } else {
          status = HttpStatus.UNPROCESSABLE_ENTITY;
          message = (exception as QueryFailedError).message;
        }
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    Logger.error(
      `${message} - ${(exception as any).message}`,
      `${request.method} ${request.url} ${status}`,
    );

    response
      .status(status)
      .json(new GlobalResponseErrorDto(status, message, code, request));
  }
}
