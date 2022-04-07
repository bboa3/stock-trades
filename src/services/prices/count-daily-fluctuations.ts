import { Trade } from '@domain/requiredFields/trade'

export const countDailyFluctuations = (trades: Trade[]) => {
  const stocks = {}

  for (const trade of trades) {
    const { symbol } = trade

    if (!stocks[symbol]) {
      stocks[symbol] = []
    }

    stocks[symbol].push(trade)
  }

  const stocksValue: Trade[][] = Object.values(stocks)

  const fluctuationsCounted = stocksValue.map((stock) => {
    const fluctuation = {
      symbol: '',
      fluctuations: 0,
      max_rise: 0,
      max_fall: 0
    }

    for (const trade of stock) {
      const price = trade.price

      fluctuation.symbol = trade.symbol
      fluctuation.fluctuations += 1

      if (fluctuation.max_rise < price) {
        fluctuation.max_rise = price
      }

      if (fluctuation.max_fall > price || fluctuation.max_fall === 0) {
        fluctuation.max_fall = price
      }
    }

    return fluctuation
  })

  return fluctuationsCounted
}
