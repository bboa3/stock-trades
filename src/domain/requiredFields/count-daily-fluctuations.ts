import * as t from 'io-ts'
import { DateCodec } from '@domain/requiredFields/date'

export const CountDailyFluctuationsPropsCodec = t.type({
  start: DateCodec,
  end: DateCodec
})

export type CountDailyFluctuationsProps = t.TypeOf<typeof CountDailyFluctuationsPropsCodec>
