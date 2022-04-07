import { FastifyPluginCallback } from 'fastify'
import { erasingTradesController } from '@infra/http/controller/erasing-trades'
import { createTradesController } from '@infra/http/controller/create-trades'
import { getTradesController } from '@infra/http/controller/get-trades'
import { getTradesByUserIdController } from '@infra/http/controller/get-trades-by-user-id'
import { getHighestAndLowestPriceController } from '@infra/http/controller/get-highest-and-lowest-price'
import { getCountDailyFluctuationsController } from '@infra/http/controller/get-count-daily-fluctuations'

export const TradesRouter: FastifyPluginCallback = (app, _option, done) => {
  app.delete('/erase', erasingTradesController)
  app.post('/trades', createTradesController)
  app.get('/trades', getTradesController)
  app.get('/trades/users/:userId', getTradesByUserIdController)
  app.get('/stocks/:stockSymbol/price', getHighestAndLowestPriceController)
  app.get('/stocks/stats', getCountDailyFluctuationsController)

  done()
}
