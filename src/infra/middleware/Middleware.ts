import { TaskEither } from 'fp-ts/lib/TaskEither'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'
import { HttpSuccessResponse } from '@infra/middleware/http_success_response'

export type Middleware<T = any, U = any> = (httpRequest: T, httpBody?: U)
=> TaskEither<HttpErrorResponse, HttpSuccessResponse>
