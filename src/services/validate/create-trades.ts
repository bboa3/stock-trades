import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { failure } from 'io-ts/lib/PathReporter'
import { CreateTradesValidator } from '@domain/Contracts/CreateTrades'
import { ValidationError } from '@services/errors/validation-error'
import { TradeCodec } from '@domain/requiredFields/trade'

export const createTradesValidator: CreateTradesValidator = (data) => {
  return pipe(
    data,
    TradeCodec.decode,
    E.mapLeft(errors => new ValidationError('Invalid ' + failure(errors).join(' ,')))
  )
}
