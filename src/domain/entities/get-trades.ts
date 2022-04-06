import { GetTradesDB } from '@domain/contracts/GetTrades'
import { Trade } from '@domain/requiredFields/trade'
import { prisma } from '@infra/prisma/client'

export const getTradesDB: GetTradesDB = async () => {
  const trades = await prisma.trade.findMany({
    include: {
      user: true
    },
    orderBy: {
      id: 'asc'
    }
  }) as unknown as Trade[]

  return trades
}
