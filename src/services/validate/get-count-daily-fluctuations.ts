import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { failure } from 'io-ts/lib/PathReporter'
import { GetCountDailyFluctuationsValidator } from '@domain/Contracts/GetCountDailyFluctuations'
import { ValidationError } from '@services/errors/validation-error'
import { CountDailyFluctuationsPropsCodec } from '@domain/requiredFields/count-daily-fluctuations'

export const getCountDailyFluctuationsValidator: GetCountDailyFluctuationsValidator = (data) => {
  return pipe(
    data,
    CountDailyFluctuationsPropsCodec.decode,
    E.mapLeft(errors => new ValidationError('Invalid ' + failure(errors).join(' ,')))
  )
}
