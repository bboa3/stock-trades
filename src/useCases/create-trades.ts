import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { Middleware } from '@infra/middleware/Middleware'
import { created } from '@infra/middleware/http_success_response'
import { createTradesDB } from '@domain/entities/create-trades'
import { createTradesService } from '@services/create-trades'
import { createTradesValidator } from '@services/validate/create-trades'
import { clientError } from '@infra/middleware/http_error_response'

export const createTradesUseCase: Middleware = (_httpRequest, httpBody) => {
  const {
    id,
    type,
    user,
    symbol,
    shares,
    price,
    timestamp
  } = httpBody

  const trade = {
    id,
    type,
    user,
    symbol,
    shares,
    price,
    timestamp
  }

  const httpResponse = pipe(
    trade,
    createTradesValidator,
    E.mapLeft(error => clientError(error)),
    TE.fromEither,
    TE.chain(trade => pipe(
      trade,
      createTradesService(createTradesDB),
      TE.map(trade => created(trade))
    ))
  )

  return httpResponse
}
