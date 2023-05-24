import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import { SwiperMovieProps } from './CardSwiper'
import { useNavigate } from 'react-router-dom'

type CardInnerProps = {
  item: SwiperMovieProps
}

const CardInner: React.FC<CardInnerProps> = ({ item }) => {
  const now = new Date()
  const current = `${now.getFullYear()}-${
    now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  }-${now.getDate() > 9 ? now.getDate() : `0${now.getDate()}`}`
  const genre = useSelector((movieState: RootState) => movieState.mv.genreList)

  const navigate = useNavigate()

  const gotoDetail = () => {
    navigate(`/movies/${item.id}`)
  }

  return (
    <div
      role="button"
      aria-label="영화 세부 정보 보러가기"
      onClick={gotoDetail}
      className="rounded-xl bg-black cursor-pointer"
    >
      <figure>
        <img
          aria-hidden
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
          className="rounded-t-xl"
        />
        <figcaption className="flex flex-col gap-1 justify-center px-2 pb-4">
          <h3 className="a11y-hidden">영화 제목</h3>
          <p role="text" aria-label="제목" className="text-lg font-bold">
            {item.title}
          </p>
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
                {item.vote_average.toFixed(1)}
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
    </div>
  )
}

export default CardInner
