import React from 'react'
import { trailerProps } from '../../redux/slice/detailSlice'
import YouTube from 'react-youtube'

type trailerCardProps = {
  trailer: trailerProps[]
}

const TrailerCard: React.FC<trailerCardProps> = ({ trailer }) => {
  return (
    <div>
      {trailer &&
        trailer.map(item => (
          <YouTube
            key={item.id}
            className="mb-8"
            videoId={item.key}
            opts={{
              width: '700',
              height: '400',
              playerVars: {
                autoplay: 0,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={e => {
              e.target.stopVideo(0)
            }}
          />
        ))}
    </div>
  )
}

export default TrailerCard
