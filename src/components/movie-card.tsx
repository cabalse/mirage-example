import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import MovieDialog from './movie-dialog'
import Movie from '../types/movie'
import Card from './card'
import TitleRow from './title-row'

type props = {
  movie: Movie
  getMovieData: (movie: Movie) => void
  handleDeleteMovie: (id: number) => void
}

const MovieCard = ({ movie, getMovieData, handleDeleteMovie }: props) => {
  const [displayDialog, setDisplayDialog] = useState<boolean>(false)

  const openDialog = () => {
    setDisplayDialog(true)
  }

  const closeDialog = () => {
    setDisplayDialog(false)
  }

  return (
    <>
      <Card>
        <TitleRow title={movie.title}>
          <AiOutlineEdit onClick={openDialog} />
        </TitleRow>
        <div>{movie.director}</div>
        <div>{movie.release_date}</div>
      </Card>
      {displayDialog ? (
        <MovieDialog
          title="Edit Movie"
          closeDialog={closeDialog}
          movieData={movie}
          getMovieData={getMovieData}
          submitLable="Save"
          deleteMovie={handleDeleteMovie}
          deleteLable="Delete"
        />
      ) : null}
    </>
  )
}

export default MovieCard
