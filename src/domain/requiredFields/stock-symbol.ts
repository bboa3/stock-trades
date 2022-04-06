import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { isStockSymbol } from '@domain/requiredFields/is/is-stock-symbol'

type StockSymbolBrand = {
  readonly StockSymbol: unique symbol
}

export const StockSymbolCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, StockSymbolBrand> => isStockSymbol(value),
    'StockSymbol'
  ),
  () => 'StockSymbol'
)

const IntersectStockSymbol = t.intersection([t.string, StockSymbolCodec])

export type StockSymbol = t.TypeOf<typeof IntersectStockSymbol>
