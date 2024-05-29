import Movie from '../types/movie'
import AddMovieButton from './add-movie-button'
import LoadSpinner from './load-spinner'
import MovieCard from './movie-card'

type Props = {
  movies: Movie[]
  getMovieData: (movie: Movie) => void
  handleDeleteMovie: (id: number) => void
  openAddMovieDialogue: () => void
  loading?: boolean
}

const MovieList = ({
  movies,
  getMovieData,
  handleDeleteMovie,
  openAddMovieDialogue,
  loading = false,
}: Props) => {
  console.log('Movies', movies)
  return (
    <div>
      {loading ? (
        <LoadSpinner />
      ) : (
        <>
          {movies.map((movie: Movie) => (
            <MovieCard
              key={movie.episode_id}
              movie={movie}
              getMovieData={getMovieData}
              handleDeleteMovie={handleDeleteMovie}
            />
          ))}
          <AddMovieButton onClick={openAddMovieDialogue} />
        </>
      )}
    </div>
  )
}

export default MovieList
