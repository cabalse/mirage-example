import type { Meta, StoryObj } from '@storybook/react'

import MovieList from './movie-list'
import mirageServer from '../mirage-server'
import { getMovies } from '../services/api.services'

import './../index.css'

const server = mirageServer({ environment: 'test' })

server.create('result', {
  episode_id: 4,
  title: 'Rogue One',
  director: 'Gareth Edwards',
  release_date: '2016-12-16',
})

const meta: Meta<typeof MovieList> = {
  component: MovieList,
  render: (args, { loaded: { movies } }) => (
    <MovieList {...args} movies={movies} />
  ),
}

export default meta
type Story = StoryObj<typeof MovieList>

export const Primary: Story = {
  args: {
    getMovieData: () => {},
    handleDeleteMovie: () => {},
    openAddMovieDialogue: () => {},
  },
  loaders: [
    async () => {
      const response = await getMovies()
      return { movies: response.data.results }
    },
  ],
}
