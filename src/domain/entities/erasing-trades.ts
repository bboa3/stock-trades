import { ErasingTradesDB } from '@domain/contracts/ErasingTrades'
import { prisma } from '@infra/prisma/client'

export const erasingTradesDB: ErasingTradesDB = async () => {
  await prisma.trade.deleteMany({})
}
