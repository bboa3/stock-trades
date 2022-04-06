import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { isPrice } from '@domain/requiredFields/is/is-price'

type PriceBrand = {
  readonly Price: unique symbol
}

export const PriceCodec = withMessage(
  t.brand(
    t.number,
    (value): value is t.Branded<number, PriceBrand> => isPrice(value),
    'Price'
  ),
  () => 'Price'
)

const IntersectPrice = t.intersection([t.number, PriceCodec])

export type Price = t.TypeOf<typeof IntersectPrice>
