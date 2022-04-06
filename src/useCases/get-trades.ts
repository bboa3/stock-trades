import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { Middleware } from '@infra/middleware/Middleware'
import { ok } from '@infra/middleware/http_success_response'
import { getTradesDB } from '@domain/entities/get-trades'
import { getTradesService } from '@services/get-trades'

export const getTradesUseCase: Middleware = (_httpRequest, _httpBody) => {
  const httpResponse = pipe(
    getTradesDB,
    getTradesService,
    TE.map((trades) => {
      return ok(trades)
    })
  )

  return httpResponse
}
