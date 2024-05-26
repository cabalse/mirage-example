import { Model, createServer } from 'miragejs'

const mirageServer = ({ environment = 'test' }) => {
  createServer({
    environment,

    models: {
      results: Model,
    },

    seeds(server) {
      server.schema.results.create({
        episode_id: 4,
        title: 'A New Hope',
        director: 'George Lucas',
        release_date: '1977-05-25',
      })
      server.schema.results.create({
        episode_id: 5,
        title: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        release_date: '1980-05-17',
      })
      server.schema.results.create({
        episode_id: 6,
        title: 'Return of the Jedi',
        director: 'Richard Marquand',
        release_date: '1983-05-25',
      })
    },

    routes() {
      this.urlPrefix = 'https://swapi.dev/api'

      this.get('/films', (schema) => {
        return schema.results.all()
      })

      this.post('/films', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        schema.results.create(attrs)
      })
    },
  })
}

export default mirageServer
