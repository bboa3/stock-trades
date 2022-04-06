import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'
import { ValidationError } from '@services/errors/validation-error'
import { Trade } from '@domain/requiredFields/trade'

interface User {
  id: number
  name: string
}

interface UnValidated {
  id: number
  type: 'buy' | 'sell'
  user: User
  symbol: string
  shares: number
  price: number
  timestamp: string
}

export type CreateTradesValidator = (data: UnValidated) => E.Either<ValidationError, Trade>

export type CreateTradesDB = (trade: Trade) => Promise<Trade>

export type CreateTradesService = (db: CreateTradesDB) => (trade: Trade) =>
TE.TaskEither<HttpErrorResponse, Trade>
