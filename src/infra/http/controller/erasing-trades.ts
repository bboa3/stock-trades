import { FastifyRequest, FastifyReply } from 'fastify'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { erasingTradesUseCase } from '@useCases/erasing-trades'

export const erasingTradesController = (request: FastifyRequest, response: FastifyReply) => {
  return pipe(
    erasingTradesUseCase(request, request.body),
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
