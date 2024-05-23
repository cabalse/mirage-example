import axios from 'axios'
import Movie from '../types/movie'

const getMovies = () =>
  axios.get<Movie[]>(`${import.meta.env.VITE_API_BASE_URL}/films`)

const newMovie = (data: Movie) =>
  axios.post(`${import.meta.env.VITE_API_BASE_URL}/films`, data)

const updateMovie = (data: Movie) =>
  axios.put(`${import.meta.env.VITE_API_BASE_URL}/films`, data)

const deleteMovie = (id: number) =>
  axios.delete(`${import.meta.env.VITE_API_BASE_URL}/films/${id}`)

export { getMovies, newMovie, updateMovie, deleteMovie }
