import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { isTimestamp } from '@domain/requiredFields/is/is-timestamp'

type TimestampBrand = {
  readonly Timestamp: unique symbol
}

export const TimestampCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, TimestampBrand> => isTimestamp(value),
    'Timestamp'
  ),
  () => 'timestamp'
)

const IntersectTimestamp = t.intersection([t.string, TimestampCodec])

export type Timestamp = t.TypeOf<typeof IntersectTimestamp>
