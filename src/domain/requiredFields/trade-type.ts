import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { isTradeType } from '@domain/requiredFields/is/is-trade-type'

type TradeTypeBrand = {
  readonly TradeType: unique symbol
}

export const TradeTypeCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, TradeTypeBrand> => isTradeType(value),
    'TradeType'
  ),
  () => 'TradeType'
)

const IntersectTradeType = t.intersection([t.string, TradeTypeCodec])

export type TradeType = t.TypeOf<typeof IntersectTradeType>
