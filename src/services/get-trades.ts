import * as TE from 'fp-ts/lib/TaskEither'
import { fail } from '@infra/middleware/http_error_response'
import { DatabaseFailError } from '@domain/entities/errors/db_error'
import { GetTradesService } from '@domain/Contracts/GetTrades'

export const getTradesService: GetTradesService = (getTradesDB) => {
  return TE.tryCatch(
    async () => await getTradesDB(),

    (err) => {
      console.log(err)
      return fail(new DatabaseFailError('Oops! Error. contact support'))
    }
  )
}
