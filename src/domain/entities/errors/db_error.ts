import { DomainError } from '@domain/errors/domain_error'

export class DatabaseFailError extends Error implements DomainError {
  constructor (message: string) {
    super(message)
    this.name = 'DatabaseFailed'
  }
}

export class ExtractDataFailError extends Error implements DomainError {
  constructor (message: string) {
    super(message)
    this.name = 'ExtractDataFailed'
  }
}

export class EntityNotFoundError extends Error implements DomainError {
  constructor (message: string) {
    super(message)
    this.name = 'EntityNotFound'
  }
}

export class EntityAlreadyExistError extends Error implements DomainError {
  constructor (message: string) {
    super(message)
    this.name = 'EntityAlreadyExist'
  }
}
