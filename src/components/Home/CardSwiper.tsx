import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper'

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
          >
            <figure>
              <img
                style={{
                  width: '100%',
                  display: 'block',
                }}
                src={`https://image.tmdb.org/t/p/original//${item.backdrop_path}`}
              />
              <figcaption className="flex flex-col gap-1 justify-center">
                <h3 className="a11y-hidden">영화 제목</h3>
                <p className="text-lg font-bold">{item.title}</p>
                <p className='flex flex-row gap-1'>
                  <span aria-hidden>⭐</span>
                  <span role="text" aria-label="별점">
                    {item.vote_average}
                  </span>
                </p>
                <span
                  className={`text-xs font-bold p-1 rounded-lg w-fit ${
                    item.adult ? 'bg-red-700' : 'bg-green-700'
                  }`}
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
