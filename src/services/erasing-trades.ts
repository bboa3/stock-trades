import * as TE from 'fp-ts/lib/TaskEither'
import { fail } from '@infra/middleware/http_error_response'
import { DatabaseFailError } from '@domain/entities/errors/db_error'
import { ErasingTradesService } from '@domain/Contracts/ErasingTrades'

export const erasingTradesService: ErasingTradesService = (erasingTradesDB) => {
  return TE.tryCatch(
    async () => await erasingTradesDB(),

    (err) => {
      console.log(err)
      return fail(new DatabaseFailError('Oops! Erro. Por favor contacte suporte'))
    }
  )
}
