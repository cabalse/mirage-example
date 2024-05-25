import { useEffect, useState } from 'react'
import MovieDialog from './components/movie-dialog'
import {
  deleteMovie,
  getMovies,
  newMovie,
  updateMovie,
} from './services/api.services'
import Movie from './types/movie'
import MovieList from './components/movie-list'

function App() {
  const [data, setData] = useState<Movie[]>([])
  const [dialogueOpen, setDialogueOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getMovies().then((response: any) => {
      setData(response.data.results)
      setLoading(false)
    })
  }, [])

  const handleAddMovie = (movie: Movie) => {
    newMovie(movie).then(() => {
      getMovies().then((response: any) => {
        setData(response.data.results)
      })
    })
  }

  const handleUpdateMovie = (movie: Movie) => {
    updateMovie(movie).then(() => {
      getMovies().then((response: any) => {
        setData(response.data.results)
      })
    })
  }

  const handleDeleteMovie = (id: number) => {
    deleteMovie(id).then(() => {
      getMovies().then((response: any) => {
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
          <MovieList
            movies={data}
            getMovieData={handleUpdateMovie}
            handleDeleteMovie={handleDeleteMovie}
            openAddMovieDialogue={openAddMovieDialogue}
            loading={loading}
          />
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
