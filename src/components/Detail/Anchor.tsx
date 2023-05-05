import React, { useState } from 'react'

const Anchor: React.FC = () => {
  const anchorList = ['개요', '트레일러', '리뷰', '비슷한 영화']
  const [clicked, setClicked] = useState('개요')

  const activeAnchor = (e: string) => {
    setClicked(e)
  }

  return (
    <div className="flex flex-row justify-between text-xl ">
      {anchorList.map(a => (
        <button
          key={a}
          className={`${clicked === a ? 'active underBar' : 'unActive'} relative py-4 px-2`}
          onClick={() => activeAnchor(a)}
        >
          {a}
        </button>
      ))}
    </div>
  )
}

export default Anchor
