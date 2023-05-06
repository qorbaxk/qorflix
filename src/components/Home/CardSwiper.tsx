import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper'
import CardInner from './CardInner'

export interface SwiperMovieProps {
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
        {movies?.map((item, idx) => (
          <SwiperSlide
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              width: '300px',
              height: '300px',
            }}
            key={item.id}
          >
            <CardInner item={item} />
            <label
              aria-label="순위"
              className="absolute bottom-0 right-0 text-gray-400 text-4xl font-black"
            >
              {idx - 1 <= 0 ? movies.length + (idx - 1) : idx - 1}
            </label>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CardSwiper
