import type { Meta, StoryObj } from '@storybook/react'

import './../index.css'
import MovieDialog from './movie-dialog'

const meta: Meta<typeof MovieDialog> = {
  component: MovieDialog,
}

export default meta
type Story = StoryObj<typeof MovieDialog>

export const Normal: Story = {
  args: {
    title: 'Title',
    submitLable: 'Submit',
  },
}

export const Delete: Story = {
  args: {
    title: 'Title',
    submitLable: 'Submit',
    deleteLable: 'Delete',
    deleteMovie: () => {},
  },
}
