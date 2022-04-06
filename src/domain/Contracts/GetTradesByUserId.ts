import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'
import { Trade } from '@domain/requiredFields/trade'
import { ValidationError } from '@services/errors/validation-error'

interface User {
  id: number
}

export type GetTradesByUserIdValidator = (user: User) => E.Either<ValidationError, User>

export type GetTradesByUserIdDB = (user: User) => Promise<Trade[]>

export type GetTradesByUserIdService = (db: GetTradesByUserIdDB) =>
(user: User) => TE.TaskEither<HttpErrorResponse, Trade[]>
