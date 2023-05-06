import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const CastCard: React.FC = () => {
  const credit = useSelector(
    (creditState: RootState) => creditState.cd.creditInfo,
  )

  const mainCastList = credit.cast.slice(0, 6)

  return (
    <div className="flex flex-row flex-wrap gap-3 w-full">
      {mainCastList.map(v => (
        <figure key={v.id}>
          {v?.profile_path ? (
            <div className="w-[138px] h-[175px]">
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${v.profile_path}`}
                alt={v.name}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ) : (
            <div className=" w-[138px] h-[175px] flex items-center justify-center">
              <img
                style={{
                  objectFit: 'cover',
                }}
                src="/src/assets/Person.svg"
                alt="기본 인물 이미지"
              />
            </div>
          )}
          <figcaption>
            <p>{v.name}</p>
            <p className="text-xs text-neutral-400">
              {v.character.includes('/') ? (
                <div>
                  <p>{v.character.substring(0, v.character.indexOf('/'))} /</p>
                  <p>{v.character.substring(v.character.indexOf('/') + 1)}</p>
                </div>
              ) : (
                v.character
              )}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default CastCard
