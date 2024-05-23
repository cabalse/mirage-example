/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('API Mock Server is running')
})

app.listen(port, () => {
  console.log(`API Mock server listening on port ${port}`)
})
