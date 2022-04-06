import { Trade } from '@domain/requiredFields/trade'

export const highestAndLowestPrice = (trades: Trade[]) => {
  let highest = 0
  let lowest = 0

  for (const trade of trades) {
    const price = trade.price

    if (highest < price) {
      highest = price
    }

    if (lowest > price || lowest === 0) {
      lowest = price
    }
  }

  return { highest, lowest }
}
