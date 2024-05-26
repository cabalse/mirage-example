import { describe, test, expect } from 'vitest'

import { getMovies } from './api.services'

describe('Api.Services', () => {
  test('Api call getMovies shall return six movies', async () => {
    getMovies().then((response: any) => {
      expect(response.data.results).toHaveLength(6)
    })
  })
})
