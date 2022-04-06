import app from '@infra/http/app'

const start = async () => {
  try {
    await app.listen(Number(process.env.HTTP_PORT) | 3002)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
