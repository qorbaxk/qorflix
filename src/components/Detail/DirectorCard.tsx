import React from 'react'
import { crewProps } from '../../redux/slice/creditSlice'

type DirectorProps = {
  director: crewProps
}

const DirectorCard: React.FC<DirectorProps> = ({ director }) => {
  return (
    <>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w138_and_h175_face/${director?.profile_path}`}
          alt={director?.name}
          width={110}
        />
        <figcaption>
          <p>{director?.name}</p>
          <p className="text-xs text-neutral-400">{director?.job}</p>
        </figcaption>
      </figure>
    </>
  )
}

export default DirectorCard
