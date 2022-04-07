import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { Middleware } from '@infra/middleware/Middleware'
import { ok } from '@infra/middleware/http_success_response'
import { getCountDailyFluctuationsDB } from '@domain/entities/get-count-daily-fluctuations'
import { getCountDailyFluctuationsService } from '@services/get-count-daily-fluctuations'
import { getCountDailyFluctuationsValidator } from '@services/validate/get-count-daily-fluctuations'
import { clientError } from '@infra/middleware/http_error_response'

export const getCountDailyFluctuationsUseCase: Middleware = (httpRequest, _httpBody) => {
  const { start, end } = httpRequest.query

  const data = { start, end }

  const httpResponse = pipe(
    data,
    getCountDailyFluctuationsValidator,
    E.mapLeft(error => clientError(error)),
    TE.fromEither,
    TE.chain(data => pipe(
      data,
      getCountDailyFluctuationsService(getCountDailyFluctuationsDB),
      TE.map(price => ok(price))
    ))
  )

  return httpResponse
}
