import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const OverView: React.FC = () => {
  const detail = useSelector(
    (detailState: RootState) => detailState.dt.selectedMovieInfo,
  )

  console.log(detail)

  return (
    <div className="px-32 mx-auto pt-8">
      <h2 className="a11y-hidden">선택한 영화</h2>
      <figure className="flex flex-row basis-2/4 justify-center gap-16">
        <img
          src={`https://image.tmdb.org/t/p/original//${detail.poster_path}`}
          alt={`${detail.title} 포스터`}
          width={500}
          // className="grow"
        />
        <figcaption className="grow flex flex-col items-start justify-start gap-4">
          <p className="text-base italic">{detail.tagline}</p>
          <p className="text-5xl font-bold">{detail.title}</p>

          <table>
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
              <td className="flex flex-row">
                {detail.genres?.map(item => (
                  <label key={item.id} className="mr-3 w-fit" aria-label="장르">
                    {item.name}
                  </label>
                ))}
              </td>
            </tr>
          </table>
        </figcaption>
      </figure>
    </div>
  )
}

export default OverView
