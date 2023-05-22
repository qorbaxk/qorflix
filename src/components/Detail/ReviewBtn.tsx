import React from 'react'

const ReviewBtn:React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <button>
          <img width={35} src="/src/assets/ReviewBtn.svg" alt="리뷰작성 버튼" />
        </button>
        <p className="text-sm text-neutral-400 ">리뷰작성</p>
      </div>
    </>
  )
}

export default ReviewBtn
