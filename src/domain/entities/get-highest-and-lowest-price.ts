import { GetHighestAndLowestPriceDB } from '@domain/contracts/GetHighestAndLowestPrice'
import { Trade } from '@domain/requiredFields/trade'
import { prisma } from '@infra/prisma/client'
import { EntityNotFoundError } from '@domain/entities/errors/db_error'

export const getHighestAndLowestPriceDB: GetHighestAndLowestPriceDB = async ({ stockSymbol }) => {
  const trades = await prisma.trade.findMany({
    where: { symbol: stockSymbol }
  })

  if (!trades) {
    throw new EntityNotFoundError(`No stock found with the symbol ${stockSymbol}`)
  }

  return trades as unknown as Trade[]
}
