import * as TE from 'fp-ts/lib/TaskEither'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'

export type ErasingTradesDB = () => Promise<void>

export type ErasingTradesService = (db: ErasingTradesDB) =>
TE.TaskEither<HttpErrorResponse, void>
