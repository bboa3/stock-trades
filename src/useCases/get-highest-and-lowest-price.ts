import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { Middleware } from '@infra/middleware/Middleware'
import { ok } from '@infra/middleware/http_success_response'
import { getHighestAndLowestPriceDB } from '@domain/entities/get-highest-and-lowest-price'
import { getHighestAndLowestPriceService } from '@services/get-highest-and-lowest-price'
import { getHighestAndLowestPriceValidator } from '@services/validate/get-highest-and-lowest-price'
import { clientError } from '@infra/middleware/http_error_response'

export const getHighestAndLowestPriceUseCase: Middleware = (httpRequest, _httpBody) => {
  const { stockSymbol } = httpRequest.params
  const { start, end } = httpRequest.query

  const data = { stockSymbol, start, end }

  const httpResponse = pipe(
    data,
    getHighestAndLowestPriceValidator,
    E.mapLeft(error => clientError(error)),
    TE.fromEither,
    TE.chain(data => pipe(
      data,
      getHighestAndLowestPriceService(getHighestAndLowestPriceDB),
      TE.map(price => ok(price))
    ))
  )

  return httpResponse
}
