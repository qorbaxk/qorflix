import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from './../../redux/store'

type SwiperMovieProps = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
type SwiperState = {
  movies: SwiperMovieProps[]
}

const CardSwiper: React.FC<SwiperState> = ({ movies }) => {
  const now = new Date()
  const current = `${now.getFullYear()}-${
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  }-${now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`}`
  const genre = useSelector((movieState: RootState) => movieState.mv.genreList)
  const navigate = useNavigate()

  const gotoDetail = (id: number) => {
    navigate(`/movies/${id}`)
  }

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={2}
        centeredSlidesBounds={true}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        style={{
          width: '100%',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        {movies?.map(item => (
          <SwiperSlide
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '300px',
              height: '300px',
            }}
            key={item.id}
            onClick={() => gotoDetail(item.id)}
          >
            <figure>
              <img
                style={{
                  width: '100%',
                  height: '168.75px',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  marginBottom: '4px',
                }}
                src={
                  item.backdrop_path
                    ? `https://image.tmdb.org/t/p/original//${item.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original//${item.poster_path}`
                }
              />
              <figcaption className="flex flex-col gap-1 justify-center">
                <h3 className="a11y-hidden">영화 제목</h3>
                <p className="text-lg font-bold">{item.title}</p>
                {current < item.release_date ? (
                  <p className="flex flex-row gap-2">
                    <span className="text-xs font-bold p-1 rounded-lg bg-gray-500">
                      개봉일
                    </span>
                    <span className="text-sm">{item.release_date}</span>
                  </p>
                ) : (
                  <p className="flex flex-row gap-1">
                    <span aria-hidden>⭐</span>
                    <span role="text" aria-label="별점">
                      {item.vote_average}
                    </span>
                  </p>
                )}
                <div className="flex flex-row">
                  {item.genre_ids?.map((id, idx) =>
                    idx < 5 ? (
                      <label
                        key={id}
                        className="flex flex-row flex-nowrap text-xs font-bold p-1 w-fit dotAfter"
                        aria-label="장르"
                      >
                        {genre.find(item => item.id === id)?.name}
                      </label>
                    ) : null,
                  )}
                </div>

                <span
                  className={`text-xs font-bold p-1 rounded-lg w-fit ${
                    item.adult ? 'bg-red-700' : 'bg-green-700'
                  }`}
                  role="text"
                  aria-label="관람등급"
                >
                  {item.adult ? '청소년 관람불가' : '전체관람가'}
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CardSwiper
