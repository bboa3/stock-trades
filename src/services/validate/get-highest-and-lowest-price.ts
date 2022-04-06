import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { failure } from 'io-ts/lib/PathReporter'
import { GetHighestAndLowestPriceValidator } from '@domain/Contracts/GetHighestAndLowestPrice'
import { ValidationError } from '@services/errors/validation-error'
import { HighestAndLowestPricePropsCodec } from '@domain/requiredFields/highest-and-lowests-price'

export const getHighestAndLowestPriceValidator: GetHighestAndLowestPriceValidator = (data) => {
  return pipe(
    data,
    HighestAndLowestPricePropsCodec.decode,
    E.mapLeft(errors => new ValidationError('Invalid ' + failure(errors).join(' ,')))
  )
}
