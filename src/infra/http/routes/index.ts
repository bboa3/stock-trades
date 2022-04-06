import { FastifyPluginCallback } from 'fastify'
import { erasingTradesController } from '@infra/http/controller/erasing-trades'
import { createTradesController } from '@infra/http/controller/create-trades'
import { getTradesController } from '@infra/http/controller/get-trades'

export const TradesRouter: FastifyPluginCallback = (app, _option, done) => {
  app.delete('/erase', erasingTradesController)
  app.post('/trades', createTradesController)
  app.get('/trades', getTradesController)
  app.get('/trades/users/:userId', erasingTradesController)
  // start={startDate}&end={endDate}
  app.get('/stocks/:stockSymbol/price', erasingTradesController)
  // start={startDate}&end={endDate}
  app.get('/stocks/stats', erasingTradesController)

  done()
}
