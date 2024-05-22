import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import MovieDialog from './movie-dialog'
import Movie from '../types/movie'

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
      <div className="p-4 bg-gray-200 my-2 rounded">
        <div className="flex flex-row justify-between">
          <div className="text-lg font-bold">{movie.title}</div>
          <div className="ml-3">
            <AiOutlineEdit onClick={openDialog} />
          </div>
        </div>
        <div>{movie.director}</div>
        <div>{movie.release_date}</div>
      </div>
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
