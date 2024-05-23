import axios from 'axios'
import Movie from '../types/movie'
import movies from '../data/movies'

const getMovies = () => {
  if (import.meta.env.DEV)
    return new Promise((resolve) => resolve({ data: { results: movies } }))
  return axios.get<Movie[]>(`${import.meta.env.VITE_API_BASE_URL}/films`)
}

const newMovie = (data: Movie) =>
  axios.post(`${import.meta.env.VITE_API_BASE_URL}/films`, data)

const updateMovie = (data: Movie) =>
  axios.put(`${import.meta.env.VITE_API_BASE_URL}/films`, data)

const deleteMovie = (id: number) =>
  axios.delete(`${import.meta.env.VITE_API_BASE_URL}/films/${id}`)

export { getMovies, newMovie, updateMovie, deleteMovie }
