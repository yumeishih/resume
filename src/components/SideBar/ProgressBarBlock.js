import React from 'react'

const renderBlock = (data) => {
  const{ text, description, icon } = data
  const Icon = icon
  const textLeft = description && description.length > 40 ? 'text-left' : null
  const hasIcon = Icon ? "has-icon" : null
  return (
    <div key={text} className="progress-bar-block">
      <div className={hasIcon}>
        {Icon && <Icon />}
        <span>{text}</span>
      </div>
      <div className="progress-bar">
        <span></span>
      </div>
      <div className={`description ${textLeft}`}>{description}</div>
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
