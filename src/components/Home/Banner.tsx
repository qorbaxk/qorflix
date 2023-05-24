import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'

const Banner: React.FC = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.popularMovies,
  )

  return (
    <div className="mb-32">
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
        <div className="flex flex-col items-start justify-end gap-4 z-[1] h-[600px] text-white w-full px-32 pb-16">
          <p
            className="block w-full text-5xl font-bold"
            role="text"
            aria-label="오늘의 영화 제목"
          >
            {movie[0].title}
          </p>
          <p
            className="text-justify"
            role="text"
            aria-label="오늘의 영화 줄거리 요약"
          >
            {movie[0].overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
