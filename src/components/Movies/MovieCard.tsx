import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { oneMovieProps } from '../../redux/slice/movieSlice'
import { useNavigate } from 'react-router-dom'

type movieCardProps = {
  movie: oneMovieProps[]
}

const MovieCard: React.FC<movieCardProps> = ({ movie }) => {
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
    <div className="grid grid-cols-2 place-items-center gap-8">
      {movie.map(item => (
        <div
          key={item.id}
          style={{
            backgroundImage: `url(${
              item.backdrop_path
                ? `https://image.tmdb.org/t/p/original//${item.backdrop_path}`
                : `https://image.tmdb.org/t/p/original//${item.poster_path}`
            })`,
            width: '360px',
            height: '500px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            cursor: 'pointer',
          }}
          className="rounded-xl"
          onClick={() => gotoDetail(item.id)}
        >
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 50%, transparent)',
              height: '100%',
            }}
            className="rounded-xl p-6 flex flex-col justify-center"
          >
            <div className="flex flex-row gap-2 items-center">
              {item.poster_path ? (
                <img
                  aria-hidden
                  src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
                  alt={`${item.title} 포스터`}
                  width={80}
                  height={100}
                />
              ) : (
                <div
                  aria-hidden
                  style={{
                    backgroundImage: 'url(/src/assets/Poster.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '80px',
                    height: '100px',
                  }}
                ></div>
              )}
              <div>
                <p className="text-2xl">{item.title}</p>
                <p className="ml-1 text-[#9ac7fa]">
                  {item.release_date.slice(0, 4)}
                </p>
                <div className="flex flex-row">
                  {item.genre_ids?.map((id, idx) =>
                    idx < 4 ? (
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
              </div>
            </div>
            <p className="text-sm text-justify w-4/6 h-[40%] overflow-hidden my-4 text-zinc-400 line-clamp-[9]">
              {item.overview}
            </p>
            <div className="flex flex-col gap-3">
              {current < item.release_date ? (
                <p className="flex flex-row gap-2 items-center">
                  <span className="w-fit text-xs font-bold p-1 rounded-lg bg-gray-500">
                    개봉일
                  </span>
                  <span className="text-lg">{item.release_date}</span>
                </p>
              ) : (
                <p className="flex flex-row gap-2">
                  <img
                    aria-hidden
                    width={25}
                    src="/src/assets/Star.svg"
                    alt="별점 이미지"
                  />
                  <span className="text-lg" role="text" aria-label="별점">
                    {item.vote_average.toFixed(1)}
                  </span>
                </p>
              )}

              <p className="flex flex-row gap-2">
                <img
                  aria-hidden
                  width={25}
                  src="/src/assets/User.svg"
                  alt="유저 이미지"
                />
                <span className="text-lg" role="text">
                  {item.vote_count.toLocaleString()}
                </span>
              </p>
              <span
                className={`text-xs font-bold p-1 rounded-lg w-fit ${
                  item.adult ? 'bg-red-700' : 'bg-green-700'
                }`}
                role="text"
                aria-label="관람등급"
              >
                {item.adult ? '청소년 관람불가' : '전체관람가'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieCard
