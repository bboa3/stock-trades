import * as t from 'io-ts'
import { DateFromISOString } from 'io-ts-types'
import { TradeTypeCodec } from '@domain/requiredFields/trade-type'
import { StockSymbolCodec } from '@domain/requiredFields/stock-symbol'
import { PriceCodec } from '@domain/requiredFields/price'
import { SharesNumberCodec } from '@domain/requiredFields/shares-number'
import { UserCodec } from '@domain/requiredFields/user'

export const TradeCodec = t.type({
  id: t.number,
  type: TradeTypeCodec,
  symbol: StockSymbolCodec,
  shares: SharesNumberCodec,
  price: PriceCodec,
  timestamp: DateFromISOString,
  user: UserCodec
})

export type Trade = t.TypeOf<typeof TradeCodec>
