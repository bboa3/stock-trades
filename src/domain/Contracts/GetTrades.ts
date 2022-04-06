import * as TE from 'fp-ts/lib/TaskEither'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'
import { Trade } from '@domain/requiredFields/trade'

export type GetTradesDB = () => Promise<Trade[]>

export type GetTradesService = (db: GetTradesDB) =>
TE.TaskEither<HttpErrorResponse, Trade[]>
