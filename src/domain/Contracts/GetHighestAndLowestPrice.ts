import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import { HttpErrorResponse } from '@infra/middleware/http_error_response'
import { Trade } from '@domain/requiredFields/trade'
import { ValidationError } from '@services/errors/validation-error'
import { HighestAndLowestPriceProps } from '@domain/requiredFields/highest-and-lowests-price'
import { StockSymbol } from '@domain/requiredFields/stock-symbol'
import { Price } from '@domain/requiredFields/price'

interface UnValidatedData {
  stockSymbol: string
  start: string
  end: string
}

export interface HighestAndLowestPrice {
  symbol: StockSymbol
  highest: Price
  lowest: Price
}

export type GetHighestAndLowestPriceValidator = (data: UnValidatedData) => E.Either<ValidationError, HighestAndLowestPriceProps>

export type GetHighestAndLowestPriceDB = (data: HighestAndLowestPriceProps) => Promise<Trade[]>

export type GetHighestAndLowestPriceService = (db: GetHighestAndLowestPriceDB) =>
(data: HighestAndLowestPriceProps) => TE.TaskEither<HttpErrorResponse, HighestAndLowestPrice>
