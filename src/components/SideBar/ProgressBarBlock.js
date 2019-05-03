import React from 'react'

const renderBlock = (data) => {
  const{ text, rate } = data
  const Icon = data.icon
  return (
    <div key={text} className="progress-bar-block">
      <div className="has-icon">
        {Icon && <Icon />}
        <span>{text}</span>
      </div>
      <div className={`progress-bar progress-bar-${rate}`}>
        <span></span>
      </div>
    </div>
  )
}

const ProgressBarBlock = ({ data }) => {
  return (
    <>
      {data.map(renderBlock)}
    </>
  )
}

export default ProgressBarBlock
