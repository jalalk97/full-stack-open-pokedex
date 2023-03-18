const express = require('express')
const path = require('path')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/health', (_req, res) => {
  throw 'Error'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
