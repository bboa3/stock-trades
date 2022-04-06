import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { isSharesNumber } from '@domain/requiredFields/is/is-shares-number'

type SharesNumberBrand = {
  readonly SharesNumber: unique symbol
}

export const SharesNumberCodec = withMessage(
  t.brand(
    t.number,
    (value): value is t.Branded<number, SharesNumberBrand> => isSharesNumber(value),
    'SharesNumber'
  ),
  () => 'SharesNumber'
)

const IntersectSharesNumber = t.intersection([t.number, SharesNumberCodec])

export type SharesNumber = t.TypeOf<typeof IntersectSharesNumber>
