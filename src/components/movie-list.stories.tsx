import type { Meta, StoryObj } from '@storybook/react'
import MovieList from './movie-list'
import './../index.css'

const meta: Meta<typeof MovieList> = {
  component: MovieList,
}

export default meta
type Story = StoryObj<typeof MovieList>

export const Primary: Story = {
  args: {
    movies: [],
    getMovieData: () => {},
    handleDeleteMovie: () => {},
    openAddMovieDialogue: () => {},
  },
}
