import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'
import { Trade } from '@domain/requiredFields/trade'
import { ValidationError } from '@services/errors/validation-error'
import { CountDailyFluctuationsProps } from '@domain/requiredFields/count-daily-fluctuations'
import { StockSymbol } from '@domain/requiredFields/stock-symbol'
import { Price } from '@domain/requiredFields/price'

interface UnValidatedData {
  stockSymbol: string
  start: string
  end: string
}

export interface PriceFluctuation {
  symbol: StockSymbol
  fluctuations: number
  'max_rise': Price
  'max_fall': Price
}

export type GetCountDailyFluctuationsValidator = (data: UnValidatedData) => E.Either<ValidationError, CountDailyFluctuationsProps>

export type GetCountDailyFluctuationsDB = (data: CountDailyFluctuationsProps) => Promise<Trade[]>

export type GetCountDailyFluctuationsService = (db: GetCountDailyFluctuationsDB) =>
(data: CountDailyFluctuationsProps) => TE.TaskEither<HttpErrorResponse, PriceFluctuation[]>
