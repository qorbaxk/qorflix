import React, { useState } from 'react'
import SelectedAnchor from './SelectedAnchor'

const Anchor: React.FC = () => {
  const anchorList = ['개요', '트레일러', '리뷰', '비슷한 영화']
  const [clicked, setClicked] = useState('개요')

  return (
    <>
      <div className="flex flex-row justify-between text-xl ">
        {anchorList.map(a => (
          <button
            key={a}
            className={`${
              clicked === a ? 'active underBar' : 'unActive'
            } relative py-4 px-2`}
            onClick={() => setClicked(a)}
          >
            {a}
          </button>
        ))}
      </div>
      <SelectedAnchor menu={clicked} />
    </>
  )
}

export default Anchor
