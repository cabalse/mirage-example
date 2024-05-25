import { createServer } from 'miragejs'
import movies from '../data/movies'

const mirageServer = () => {
  createServer({
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
