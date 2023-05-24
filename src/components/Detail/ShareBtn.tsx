import React from 'react'

const ShareBtn: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <button type="button" aria-label="공유하기 버튼">
          <img
            width={35}
            src="/src/assets/ShareBtn.svg"
            alt="공유하기 버튼 아이콘"
          />
        </button>
        <p className="text-sm text-neutral-400">공유하기</p>
      </div>
    </>
  )
}

export default ShareBtn
