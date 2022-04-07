import { GetCountDailyFluctuationsDB } from '@domain/Contracts/GetCountDailyFluctuations'
import { Trade } from '@domain/requiredFields/trade'
import { prisma } from '@infra/prisma/client'
import { EntityNotFoundError } from '@domain/entities/errors/db_error'

export const getCountDailyFluctuationsDB: GetCountDailyFluctuationsDB = async (_data) => {
  const trades = await prisma.trade.findMany({
    orderBy: {
      symbol: 'asc'
    }
  })

  if (!trades) {
    throw new EntityNotFoundError('No stock found')
  }

  return trades as unknown as Trade[]
}
