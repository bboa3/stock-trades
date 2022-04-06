import { GetTradesByUserIdDB } from '@domain/contracts/GetTradesByUserId'
import { Trade } from '@domain/requiredFields/trade'
import { prisma } from '@infra/prisma/client'
import { EntityNotFoundError } from './errors/db_error'

export const getTradesByUserIdDB: GetTradesByUserIdDB = async ({ id }) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      trades: {
        orderBy: {
          id: 'asc'
        }
      }
    }
  })

  if (!user) {
    throw new EntityNotFoundError('User not found')
  }

  const trades = user.trades.map(trade => {
    const { id, type, symbol, shares, price, timestamp } = trade

    return {
      id,
      type,
      symbol,
      shares,
      price,
      timestamp,
      user: {
        id: user.id,
        name: user.name
      }
    }
  }) as unknown as Trade[]

  return trades
}
