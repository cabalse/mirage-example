import { createServer } from 'miragejs'

const mirageServer = () => {
  createServer({
    routes() {
      this.urlPrefix = 'https://swapi.dev/api'
    },
  })
}

export default mirageServer
