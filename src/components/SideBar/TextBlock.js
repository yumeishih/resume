import React from 'react'

const renderBlock = (data) => {
  const { iconLink, icon } = data
  if(!iconLink) return(<p key={data}>{data}</p>)
  const Icon = icon
  return (
    <a href={iconLink} key={iconLink}><Icon size={32}/></a>
  )
}
const TextBlock = ({ data }) => {
  return (
    <div className="text-block">
      {data.map(renderBlock)}
    </div>
  )
}

export default TextBlock
