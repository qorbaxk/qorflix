import React from 'react'
import SubOverview from './SubOverview'
import SubTrailer from './SubTrailer'
import SubReview from './SubReview'
import SubLikeMovie from './SubLikeMovie'

type SelectedAnchorProps = {
  menu: string
}

const SelectedAnchor: React.FC<SelectedAnchorProps> = ({ menu }) => {
  return (
    <>
      {menu === '개요' ? (
        <SubOverview />
      ) : menu === '트레일러' ? (
        <SubTrailer />
      ) : menu === '리뷰' ? (
        <SubReview />
      ) : (
        <SubLikeMovie />
      )}
    </>
  )
}

export default SelectedAnchor
