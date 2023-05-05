import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Anchor from './Anchor'

const OverView: React.FC = () => {
  const detail = useSelector(
    (detailState: RootState) => detailState.dt.selectedMovieInfo,
  )

  return (
    <div className="px-32 mx-auto pt-8">
      <h2 className="a11y-hidden">선택한 영화</h2>
      <figure className="flex flex-row basis-2/4 justify-center gap-16">
        <img
          src={`https://image.tmdb.org/t/p/original//${detail.poster_path}`}
          alt={`${detail.title} 포스터`}
          width={500}
        />
        <figcaption className="grow flex flex-col justify-start gap-8 relative">
          <div className="flex flex-col items-start justify-start gap-4 w-[80%]">
            <p className="text-base italic">{detail.tagline}</p>
            <p className="text-5xl font-bold">{detail.title}</p>

            <div className="absolute top-10 right-0 flex flex-row items-center gap-2">
              <p className="text-4xl">{detail.vote_average.toFixed(1)}</p>
              <img width={35} src="/src/assets/Star.svg" alt="별점 이미지" />
            </div>

            <table>
              <tbody>
                <tr className="text-neutral-400 text-sm flex flex-row flex-nowrap items-center">
                  <td className="lineAfter">{`${detail.release_date.substring(
                    2,
                    4,
                  )}년 ${detail.release_date.substring(
                    5,
                    7,
                  )}월 ${detail.release_date.substring(8, 10)}일`}</td>
                  <td className="lineAfter">{`${Math.floor(
                    detail.runtime / 60,
                  )}시간 ${detail.runtime % 60}분`}</td>
                  <td className="lineAfter">
                    {detail.adult ? '청소년 관람불가' : '전체관람가'}
                  </td>
                  <td className="flex flex-row">
                    {detail.genres?.map(item => (
                      <label
                        key={item.id}
                        className="mr-3 w-fit"
                        aria-label="장르"
                      >
                        {item.name}
                      </label>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Anchor />
        </figcaption>
      </figure>
    </div>
  )
}

export default OverView
