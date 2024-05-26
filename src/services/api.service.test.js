import { describe, test, expect } from 'vitest'

import { getMovies } from './api.services'

describe('Api.Services', () => {
  test('Api call getMovies shall return six movies', async () => {
    const response = await getMovies()
    expect(response.data.results).toHaveLength(6)
  })
})
