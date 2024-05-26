import { describe, test, expect, beforeEach, afterEach } from 'vitest'

import { getMovies } from './api.services'
import mirageServer from '../mirage-server'

let server

describe('Api.Services', () => {
  beforeEach(() => {
    server = mirageServer({ environment: 'test' })
  })

  afterEach(() => {
    server.shutdown()
  })

  test('Api call getMovies shall return one movie', async () => {
    // Arrange
    server.create('result', {
      episode_id: 4,
      title: 'A New Hope',
      director: 'George Lucas',
      release_date: '1977-05-25',
    })
    // Act
    const response = await getMovies()
    // Assert
    expect(response.data.results).toHaveLength(1)
  })
})
