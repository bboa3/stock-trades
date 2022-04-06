import Fastify, { FastifyInstance } from 'fastify'
import { config } from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { Router } from '@infra/http/routes'

dotenvExpand(config())

const app: FastifyInstance = Fastify({})

app.register(Router)

export default app
