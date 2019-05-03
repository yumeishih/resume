import React from 'react'

const TextBlock = ({ data }) => {
  return (
    <div className="text-block">
      {data.map(text => (<p key={text}>{text}</p>))}
    </div>
  )
}

export default TextBlock
