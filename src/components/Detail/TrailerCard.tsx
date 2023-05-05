import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import YouTube from 'react-youtube'

const TrailerCard = () => {
  let trailer = useSelector(
    (detailState: RootState) => detailState.dt.trailerMovieInfo,
  )

  trailer = trailer.filter(v => v.type === 'Trailer')

  return (
    <div>
      {trailer &&
        trailer.map(item => (
          <YouTube
            className="mb-8"
            key={item.id}
            videoId={item.key}
            opts={{
              width: '100%',
              height: '500',
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
