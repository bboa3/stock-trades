import { FastifyRequest, FastifyReply } from 'fastify'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { getTradesByUserIdUseCase } from '@useCases/get-trades-by-user-id'

export const getTradesByUserIdController = (request: FastifyRequest, response: FastifyReply) => {
  return pipe(
    getTradesByUserIdUseCase(request, request.body),
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
