import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { Middleware } from '@infra/middleware/Middleware'
import { ok } from '@infra/middleware/http_success_response'
import { getTradesByUserIdDB } from '@domain/entities/get-trades-by-user-id'
import { getTradesByUserIdService } from '@services/get-trades-by-user-id'
import { getTradesByUserIdValidator } from '@services/validate/get-trades-by-user-id'
import { clientError } from '@infra/middleware/http_error_response'

export const getTradesByUserIdUseCase: Middleware = (httpRequest, _httpBody) => {
  const { userId } = httpRequest.params

  const user = { id: Number(userId) }

  const httpResponse = pipe(
    user,
    getTradesByUserIdValidator,
    E.mapLeft(error => clientError(error)),
    TE.fromEither,
    TE.chain(trades => pipe(
      trades,
      getTradesByUserIdService(getTradesByUserIdDB),
      TE.map(trades => ok(trades))
    ))
  )

  return httpResponse
}
