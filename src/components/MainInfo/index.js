import React from 'react'
import ReactMarkdown from 'react-markdown'
import { mainInfoContents } from 'Utils/data'
import PeriodBlock from './PeriodBlock'

const renderMainInfoContent = (mainInfoContent) => {
  const { title, data, icon, type } = mainInfoContent
  const Icon = icon
  const showBorderCircle = data.length > 1
  return (
    <div className="main-info-content" key={title}>
      <div className="title has-icon">
        <Icon />
        <span>{title}</span>
      </div>
      <div className="block">
        { type === 'TEXT' ?
          <ReactMarkdown source={data} className="block-text" /> :
          data.map(data => <PeriodBlock {...data} showBorderCircle={showBorderCircle} key={data.subtitle+data.start}/>)
        }
      </div>
    </div>
  )
}

const MainInfo = () => {
  return (
    <div className="main-info">
      {mainInfoContents.map(renderMainInfoContent)}
    </div>
  )
}

export default MainInfo
