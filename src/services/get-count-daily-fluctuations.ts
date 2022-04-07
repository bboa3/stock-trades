import * as TE from 'fp-ts/lib/TaskEither'
import { fail, notFound } from '@infra/middleware/http_error_response'
import { DatabaseFailError } from '@domain/entities/errors/db_error'
import { GetCountDailyFluctuationsService, PriceFluctuation } from '@domain/Contracts/GetCountDailyFluctuations'
import { isBetweenDatesRange } from '@services/dates/is-between-date-range'
import { countDailyFluctuations } from '@services/prices/count-daily-fluctuations'
import { pipe } from 'fp-ts/lib/function'
import { NoTradeError } from '@services/errors/service-error'

export const getCountDailyFluctuationsService: GetCountDailyFluctuationsService = (getCountDailyFluctuationsDB) => (data) => {
  return pipe(
    TE.tryCatch(
      async () => {
        const trades = await getCountDailyFluctuationsDB(data)
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

        const prices = countDailyFluctuations(trades) as unknown as PriceFluctuation[]

        return prices
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
