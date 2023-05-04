import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'

const Banner = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.popularMovies,
  )

  return (
    <>
      <h2 className="a11y-hidden">메인 배너</h2>
      <div
        className="bannerFilm"
        style={{
          backgroundImage:
            'url(' +
            `https://image.tmdb.org/t/p/original//${movie[0].backdrop_path}` +
            ')',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: '600px',
          objectFit: 'contain',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="flex flex-col items-start justify-end gap-4 z-[1] h-[600px] text-white w-full px-40">
          <p className="block w-full text-5xl">{movie[0].title}</p>
          <p className="text-justify">{movie[0].overview}</p>
        </div>
      </div>
    </>
  )
}

export default Banner
