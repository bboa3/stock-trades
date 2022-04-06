import Fastify, { FastifyInstance } from 'fastify'
import { config } from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { TradesRouter } from '@infra/http/routes'

dotenvExpand(config())

const app: FastifyInstance = Fastify({})

app.register(TradesRouter)

export default app
