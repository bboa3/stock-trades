import { CreateTradesDB } from '@domain/Contracts/CreateTrades'
import { prisma } from '@infra/prisma/client'
import { EntityAlreadyExistError } from '@domain/entities/errors/db_error'
import { findOrCreateUserDB } from './find-or-create-user'

export const createTradesDB: CreateTradesDB = async (trade) => {
  const {
    id,
    type,
    user,
    symbol,
    shares,
    price,
    timestamp
  } = trade

  const existingTrade = await prisma.trade.findUnique({ where: { id } })

  if (existingTrade) {
    throw new EntityAlreadyExistError(`The trade with id ${id} already exists`)
  }

  const newUser = await findOrCreateUserDB(user)

  await prisma.trade.create({
    data: {
      id,
      type,
      symbol,
      shares,
      price,
      timestamp,
      userId: newUser.id
    }
  })

  return trade
}
