import { useEffect, useState } from 'react'
import MovieDialog from './components/movie-dialog'
import MovieCard from './components/movie-card'
import {
  deleteMovie,
  getMovies,
  newMovie,
  updateMovie,
} from './services/api.services'
import Movie from './types/movie'
import AddMovieButton from './components/add-movie-button'

function App() {
  const [data, setData] = useState<Movie[]>([])
  const [dialogueOpen, setDialogueOpen] = useState<boolean>(false)

  useEffect(() => {
    getMovies().then((response) => {
      setData(response.data.results)
    })
  }, [])

  const handleAddMovie = (movie: Movie) => {
    newMovie(movie).then(() => {
      getMovies().then((response) => {
        setData(response.data.results)
      })
    })
  }

  const handleUpdateMovie = (movie: Movie) => {
    newMovie(movie).then(() => {
      updateMovie(movie).then((response) => {
        setData(response.data.results)
      })
    })
  }

  const handleDeleteMovie = (id: number) => {
    deleteMovie(id).then(() => {
      getMovies().then((response) => {
        setData(response.data.results)
      })
    })
  }

  const openAddMovieDialogue = () => {
    setDialogueOpen(true)
  }

  const closeDialogue = () => {
    setDialogueOpen(false)
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center m-10">
          <div className="text-xl font-bold">SW MOVIES</div>
          <div>
            {data.map((movie: Movie) => (
              <MovieCard
                key={movie.episode_id}
                movie={movie}
                getMovieData={handleUpdateMovie}
                handleDeleteMovie={handleDeleteMovie}
              />
            ))}
            <AddMovieButton onClick={openAddMovieDialogue} />
          </div>
        </div>
      </div>
      {dialogueOpen ? (
        <MovieDialog
          title="Add Movie"
          closeDialog={closeDialogue}
          getMovieData={handleAddMovie}
          submitLable="Save"
        />
      ) : null}
    </>
  )
}

export default App
