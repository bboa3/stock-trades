import * as t from 'io-ts'
import { NameCodec } from '@domain/requiredFields/name'

export const UserCodec = t.type({
  id: t.number,
  name: NameCodec
})

export type User = t.TypeOf<typeof UserCodec>

export const UserIdCodec = t.type({
  id: t.number
})
