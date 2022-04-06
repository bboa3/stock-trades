import { FastifyRequest, FastifyReply } from 'fastify'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { getHighestAndLowestPriceUseCase } from '@useCases/get-highest-and-lowest-price'

export const getHighestAndLowestPriceController = (request: FastifyRequest, response: FastifyReply) => {
  return pipe(
    getHighestAndLowestPriceUseCase(request, request.body),
    TE.match(
      (httpErrorResponse) => {
        const { statusCode, body } = httpErrorResponse
        return response.status(statusCode).send(body)
      },
      (httpSuccessResponse) => {
        const { statusCode, body } = httpSuccessResponse
        return response.status(statusCode).send(body)
      }
    )
  )()
}
