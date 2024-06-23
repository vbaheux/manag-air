export class GlobalResponseErrorDto {
  statusCode: number;
  message: string | string[];
  code: string;
  timestamp: string;
  path: string;
  method: string;

  constructor(
    statusCode: number,
    message: string,
    code: string,
    request: Request,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.code = code;
    this.timestamp = new Date().toISOString();
    this.path = request.url;
    this.method = request.method;
  }
}
