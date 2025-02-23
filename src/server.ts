import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello world!'
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server listening on port 3000')
  })
