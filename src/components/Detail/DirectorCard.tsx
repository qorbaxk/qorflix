import React from 'react'
import { crewProps } from '../../redux/slice/creditSlice'

type DirectorProps = {
  director: crewProps
}

const DirectorCard: React.FC<DirectorProps> = ({ director }) => {
  return (
    <>
      <figure>
        {director?.profile_path ? (
          <div className="w-[138px] h-[175px]">
            <img
              src={`https://image.tmdb.org/t/p/w138_and_h175_face/${director?.profile_path}`}
              alt={director?.name}
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
          <p role="text" aria-label="감독 이름">
            {director?.name}
          </p>
          <p className="text-xs text-neutral-400">{director?.job}</p>
        </figcaption>
      </figure>
    </>
  )
}

export default DirectorCard
