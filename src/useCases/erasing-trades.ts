import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { Middleware } from '@infra/middleware/Middleware'
import { ok } from '@infra/middleware/http_success_response'
import { erasingTradesDB } from '@domain/entities/erasing-trades'
import { erasingTradesService } from '@services/erasing-trades'

export const erasingTradesUseCase: Middleware = (_httpRequest, _httpBody) => {
  const httpResponse = pipe(
    erasingTradesDB,
    erasingTradesService,
    TE.map(() => {
      return ok()
    })
  )

  return httpResponse
}
