import React from 'react'
import CardSwiper from './CardSwiper'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import { oneMovieProps } from './../../redux/slice/movieSlice'

const NowPlaying: React.FC = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.nowPlayingMovies,
  )
  const now = new Date()
  const current = `${now.getFullYear()}-${
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  }-${now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`}`

  const filteringMovies = movie.filter(item => item.release_date <= current)

  const rateSortedMovies = [...filteringMovies].sort(
    (a, b) => b.vote_average - a.vote_average,
  )

  rateSortedMovies.unshift(rateSortedMovies.pop() as oneMovieProps)
  rateSortedMovies.unshift(rateSortedMovies.pop() as oneMovieProps)

  return (
    <div className="px-32">
      <h2 className="text-3xl">상영중인 영화</h2>
      <CardSwiper movies={rateSortedMovies} />
    </div>
  )
}

export default NowPlaying
