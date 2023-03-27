import createApp from './src/app'
const SERVER_PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

const app = createApp()

app.listen(SERVER_PORT, () => {
  console.log(`🌿 NODE_ENV: ${NODE_ENV}`)
  console.log(`🚀 Server started on http://localhost:${SERVER_PORT}`)
})
