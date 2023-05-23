import React from 'react'

type alertProps = {
  text: string
}

const Alert: React.FC<alertProps> = ({ text }) => {

  let textDum = text.split('.')

  return (
    <>
      <div className="fixed w-1/4 top-8 right-0 p-4 font-bold bg-primary-100 text-center z-30">
        {textDum.map((txt)=>(
          <p key={text[0]}>{txt}</p>
        ))}
      </div>
    </>
  )
}

export default Alert
