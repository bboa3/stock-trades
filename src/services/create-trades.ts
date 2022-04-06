import * as TE from 'fp-ts/lib/TaskEither'
import { fail, clientError } from '@infra/middleware/http_error_response'
import { DatabaseFailError } from '@domain/entities/errors/db_error'
import { CreateTradesService } from '@domain/Contracts/CreateTrades'

export const createTradesService: CreateTradesService = (createTradesDB) => (data) => {
  return TE.tryCatch(
    async () => await createTradesDB(data),

    (err: Error) => {
      if (err.name === 'EntityAlreadyExist') {
        return clientError(err as Error)
      }

      console.log(err)
      return fail(new DatabaseFailError('Oops! Error. contact support'))
    }
  )
}
