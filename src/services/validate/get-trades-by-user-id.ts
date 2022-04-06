import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { failure } from 'io-ts/lib/PathReporter'
import { GetTradesByUserIdValidator } from '@domain/Contracts/GetTradesByUserId'
import { ValidationError } from '@services/errors/validation_error'
import { UserIdCodec } from '@domain/requiredFields/user'

export const getTradesByUserIdValidator: GetTradesByUserIdValidator = (data) => {
  return pipe(
    data,
    UserIdCodec.decode,
    E.mapLeft(errors => new ValidationError('Invalid ' + failure(errors).join(' ,')))
  )
}
