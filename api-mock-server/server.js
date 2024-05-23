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

app.get('/api/films/', (req, res) => {
  res.send({
    results: [
      {
        episode_id: 4,
        title: 'A New Hope',
        director: 'George Lucas',
        release_date: '1977-05-25',
      },
      {
        episode_id: 5,
        title: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        release_date: '1980-05-17',
      },
      {
        episode_id: 6,
        title: 'Return of the Jedi',
        director: 'Richard Marquand',
        release_date: '1983-05-25',
      },
    ],
  })
})

app.listen(port, () => {
  console.log(`API Mock server listening on port ${port}`)
})
