import React from 'react'
import CardSwiper from './CardSwiper'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import { oneMovieProps } from './../../redux/slice/movieSlice'

const Popular: React.FC = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.popularMovies,
  )

  const voteSortedMovies = [...movie].sort(
    (a, b) => b.vote_count - a.vote_count,
  )

  voteSortedMovies.unshift(voteSortedMovies.pop() as oneMovieProps)
  voteSortedMovies.unshift(voteSortedMovies.pop() as oneMovieProps)

  return (
    <div className="px-32">
      <h2 className="text-3xl">인기 영화</h2>
      <CardSwiper movies={voteSortedMovies} />
    </div>
  )
}

export default Popular
