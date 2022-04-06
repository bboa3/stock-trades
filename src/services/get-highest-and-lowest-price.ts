import * as TE from 'fp-ts/lib/TaskEither'
import { fail, notFound } from '@infra/middleware/http_error_response'
import { DatabaseFailError } from '@domain/entities/errors/db_error'
import { GetHighestAndLowestPriceService, HighestAndLowestPrice } from '@domain/Contracts/GetHighestAndLowestPrice'
import { isBetweenDatesRange } from '@services/dates/is-between-date-range'
import { highestAndLowestPrice } from '@services/prices/highest-and-lowest-price'
import { pipe } from 'fp-ts/lib/function'
import { NoTradeError } from '@services/errors/service-error'

export const getHighestAndLowestPriceService: GetHighestAndLowestPriceService = (getHighestAndLowestPriceDB) => (data) => {
  return pipe(
    TE.tryCatch(
      async () => {
        const trades = await getHighestAndLowestPriceDB(data)
        const { start, end } = data

        const inDateRangeTrades = trades.filter(trade => {
          const date = trade.timestamp.split(' ')[0]
          return isBetweenDatesRange({ start, end, date })
        })

        return inDateRangeTrades
      },

      (err: Error) => {
        if (err.name === 'EntityNotFound') {
          return notFound(err)
        }

        console.log(err)
        return fail(new DatabaseFailError('Oops! Error. contact support'))
      }
    ),
    TE.chain(trades => TE.tryCatch(
      async () => {
        if (!trades[0]) {
          throw new NoTradeError('There are no trades in the given date range')
        }

        const prices = highestAndLowestPrice(trades)

        return {
          symbol: data.stockSymbol,
          ...prices
        } as unknown as HighestAndLowestPrice
      },
      (err: Error) => {
        if (err.name === 'NoTrade') {
          return notFound(err)
        }

        console.log(err)
        return fail(new DatabaseFailError('Oops! Error. contact support'))
      }
    ))
  )
}
