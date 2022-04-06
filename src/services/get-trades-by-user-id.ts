import * as TE from 'fp-ts/lib/TaskEither'
import { fail, notFound } from '@infra/middleware/http_error_response'
import { DatabaseFailError } from '@domain/entities/errors/db_error'
import { GetTradesByUserIdService } from '@domain/Contracts/GetTradesByUserId'

export const getTradesByUserIdService: GetTradesByUserIdService = (getTradesByUserIdDB) => (user) => {
  return TE.tryCatch(
    async () => await getTradesByUserIdDB(user),

    (err: Error) => {
      if (err.name === 'EntityNotFound') {
        return notFound(err)
      }

      console.log(err)
      return fail(new DatabaseFailError('Oops! Error. contact support'))
    }
  )
}
