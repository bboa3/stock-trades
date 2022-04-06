import { FastifyPluginCallback } from 'fastify'
import { erasingTradesOpts } from '@infra/http/routes/opts/erasing-trades-opts'

export const Router: FastifyPluginCallback = (app, _option, done) => {
  app.get('/', erasingTradesOpts, async (request, response) => {
    return { pong: 'it worked!' }
  })

  done()
}
