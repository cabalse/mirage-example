import { createServer } from 'miragejs'
import movies from '../data/movies'

const mirageServer = ({ environment = 'test' }) => {
  createServer({
    environment,

    routes() {
      this.urlPrefix = 'https://swapi.dev/api'

      this.get('/films', () => {
        return {
          results: movies,
        }
      })
    },
  })
}

export default mirageServer
