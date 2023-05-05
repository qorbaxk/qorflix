import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const CastCard: React.FC = () => {
  const credit = useSelector(
    (creditState: RootState) => creditState.cd.creditInfo,
  )

  const mainCastList = credit.cast.slice(0, 6)

  return (
    <div className="flex flex-row gap-3">
      {mainCastList.map(v => (
        <figure key={v.id}>
          <img
            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${v.profile_path}`}
            alt={v.name}
            width={138}
            height={175}
          />
          <figcaption>
            <p>{v.name}</p>
            <p className="text-xs text-neutral-400">{v.character}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default CastCard
