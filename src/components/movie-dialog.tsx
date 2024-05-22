import { useEffect, useState } from 'react'
import InputField from './input-field'
import Movie from '../types/movie'
import { IoMdClose } from 'react-icons/io'

type Props = {
  title: string
  submitLable: string
  closeDialog: () => void
  getMovieData: (movie: Movie) => void
  movieData?: Movie
  deleteMovie?: (id: number) => void
  deleteLable?: string
}

const initMovieData: Movie = {
  episode_id: 0,
  title: '',
  director: '',
  release_date: '',
}

const MovieDialog = ({
  title,
  submitLable,
  closeDialog,
  getMovieData,
  deleteLable,
  deleteMovie,
  movieData = initMovieData,
}: Props) => {
  const [formData, setFormData] = useState<Movie>(movieData)

  useEffect(() => {
    setFormData(movieData)
  }, [movieData])

  const handleSubmit = () => {
    getMovieData(formData)
    closeDialog()
  }

  const handleDelete = () => {
    if (deleteMovie) deleteMovie(formData.episode_id ?? 0)
    closeDialog()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <IoMdClose onClick={closeDialog} />
        </div>
        <div className="mb-4">
          <div className="mb-3">
            <InputField
              label="Title"
              onValueChange={(title) =>
                setFormData((prev) => {
                  return { ...prev, title: title }
                })
              }
              value={formData.title}
            />
          </div>
          <div className="mb-3">
            <InputField
              label="Director"
              onValueChange={(director) =>
                setFormData((prev) => {
                  return { ...prev, director: director }
                })
              }
              value={formData.director}
            />
          </div>
          <div className="mb-3">
            <InputField
              label="Year"
              onValueChange={(release_date) =>
                setFormData((prev) => {
                  return { ...prev, release_date: release_date }
                })
              }
              value={formData.release_date}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {submitLable}
          </button>
          {deleteMovie && deleteLable ? (
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              {deleteLable}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default MovieDialog
