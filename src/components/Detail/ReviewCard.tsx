import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { reviewProps } from '../../redux/slice/detailSlice'

import moment from 'moment'
import 'moment/locale/ko'

const ReviewCard: React.FC = () => {
  const [selected, setSelected] = useState<reviewProps>()
  let reviews = useSelector(
    (detailState: RootState) => detailState.dt.reviewMovieInfo,
  )

  moment.locale('ko')
  const recentReview = [...reviews].reverse()

  const moreReviewHandler = (id: string) => {
    setSelected(recentReview.find(v => v.id === id))
  }

  return (
    <>
      {selected !== undefined ? (
        <div className="bg-white text-black rounded p-4 mb-6 w-full h-fit relative">
          <div className="flex flex-row items-center gap-2 mb-4">
            {selected.author_details.avatar_path ? (
              <img
                src={
                  selected.author_details.avatar_path.includes('https')
                    ? `${selected.author_details.avatar_path.slice(1)}`
                    : `https://image.tmdb.org/t/p/w32_and_h32_face/${selected.author_details.avatar_path}`
                }
                alt={`${selected.author_details.username} 프로필 사진`}
                className="rounded-full"
                width={25}
                height={25}
              />
            ) : (
              <img
                width={25}
                height={25}
                src="/Person.svg"
                alt="기본 인물 이미지"
              />
            )}
            <p role="text" aria-label="리뷰 글쓴이" className="font-bold">
              {selected.author}
            </p>
          </div>
          <p
            role="text"
            aria-label="리뷰 전체 내용"
            className="mb-2 text-justify text-sm"
          >
            {selected.content}
          </p>
          <p
            role="text"
            aria-label="리뷰 작성 시간"
            className="text-right text-xs"
          >
            {moment(selected.created_at).format('LLL')}
          </p>
          <button
            onClick={() => setSelected(undefined)}
            type="button"
            className="border border-1 border-black p-2 m-2 absolute top-0 right-0 hover:bg-black hover:text-white"
          >
            닫기
          </button>
        </div>
      ) : (
        <div className="mb-6 grid grid-cols-2 place-items-center gap-2 cursor-pointer">
          {recentReview.map(item => (
            <div
              key={item.id}
              onClick={() => moreReviewHandler(item.id)}
              className="bg-zinc-400 text-black rounded p-4 w-full h-full"
            >
              <div className="flex flex-row items-center gap-2">
                {item.author_details.avatar_path ? (
                  <img
                    src={
                      item.author_details.avatar_path.includes('https')
                        ? `${item.author_details.avatar_path.slice(1)}`
                        : `https://image.tmdb.org/t/p/w32_and_h32_face/${item.author_details.avatar_path}`
                    }
                    alt={`${item.author_details.username} 프로필 사진`}
                    className="rounded-full"
                    width={25}
                    height={25}
                  />
                ) : (
                  <img
                    width={25}
                    height={25}
                    src="/Person.svg"
                    alt="기본 인물 이미지"
                  />
                )}
                <p role="text" aria-label="리뷰 글쓴이" className="font-bold">
                  {item.author}
                </p>
              </div>
              <p
                role="text"
                aria-label="리뷰 일부 내용"
                className={`mb-2 text-justify text-sm ${
                  item.content.length > 65 ? 'line-clamp-2' : ''
                }`}
              >
                {item.content}
              </p>
              <p
                role="text"
                aria-label="리뷰 작성 시간"
                className="text-right text-xs"
              >
                {moment(item.created_at).format('LLL')}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ReviewCard
