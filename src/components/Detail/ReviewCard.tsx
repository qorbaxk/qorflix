import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ko'

const ReviewCard: React.FC = () => {
  let reviews = useSelector(
    (detailState: RootState) => detailState.dt.reviewMovieInfo,
  )

  moment.locale('ko')
  const recentReview = [...reviews].reverse()

  console.log(recentReview)

  return (
    <div className='mb-4'>
      {recentReview.map(item => (
        <div key={item.id} className="bg-zinc-400 text-black rounded p-4 mb-4">
          <div className="flex flex-row items-center gap-2">
            {item.author_details.avatar_path ? (
              <img
                src={
                  item.author_details.avatar_path.includes('https')
                    ? `${item.author_details.avatar_path.slice(1,)}`
                    : `https://image.tmdb.org/t/p/w32_and_h32_face/${item.author_details.avatar_path}`
                }
                alt={`${item.author_details.username} 프로필 사진`}
                className="rounded-full"
                width={32}
                height={32}
              />
            ) : (
              <img
                width={32}
                height={32}
                src="/src/assets/Person.svg"
                alt="기본 인물 이미지"
              />
            )}
            <p className="text-lg font-bold">{item.author}</p>
          </div>
          <p className='my-1 text-justify text-sm'>{item.content}</p>
          <p className="text-right">{moment(item.created_at).format('LLL')}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewCard
