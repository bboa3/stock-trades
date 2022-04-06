import { User } from '@domain/requiredFields/user'

export type FindOrCreateUserDB = (user: User) => Promise<User>
