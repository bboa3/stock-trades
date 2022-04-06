import { DomainError } from '@domain/errors/domain_error'

export class ValidationError extends Error implements DomainError {
  constructor (message: string) {
    super(message)
    this.name = 'InvalidField'
  }
}
