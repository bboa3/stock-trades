import { FastifyRequest, FastifyReply } from 'fastify'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { getCountDailyFluctuationsUseCase } from '@useCases/get-count-daily-fluctuations'

export const getCountDailyFluctuationsController = (request: FastifyRequest, response: FastifyReply) => {
  return pipe(
    getCountDailyFluctuationsUseCase(request, request.body),
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
