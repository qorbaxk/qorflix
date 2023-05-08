import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import MovieCard from './MovieCard'

const MovieView: React.FC = () => {
  let movie = useSelector(
    (movieState: RootState) => movieState.mv.allTimeMovies,
  )

  movie = movie.filter(
    v => v.vote_average > 0 && v.vote_count > 100 && v.overview !== '',
  )

  return (
    <>
      <MovieCard movie={movie} />
    </>
  )
}

export default MovieView
