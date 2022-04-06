import * as t from 'io-ts'
import { StockSymbolCodec } from '@domain/requiredFields/stock-symbol'
import { DateCodec } from '@domain/requiredFields/date'

export const HighestAndLowestPricePropsCodec = t.type({
  stockSymbol: StockSymbolCodec,
  start: DateCodec,
  end: DateCodec
})

export type HighestAndLowestPriceProps = t.TypeOf<typeof HighestAndLowestPricePropsCodec>
