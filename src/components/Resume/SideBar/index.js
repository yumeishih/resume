import React from 'react'
import { FiCircle } from "react-icons/fi";
import { sideBarContents } from 'Utils/data'
import TextBlock from './TextBlock'
import ProgressBarBlock from './ProgressBarBlock'

const blockMap = {
  TEXT: TextBlock,
  PROGRESS_BAR: ProgressBarBlock
}

const renderSideBarContent = (sideBarContent) => {
  const { title, type, data } = sideBarContent
  const BlockComponent = blockMap[type]

  return (
    <div className="side-bar-content" key={title}>
      <div className="title has-icon">
        <FiCircle size={6}/>
          <span>{title}</span>
        <FiCircle size={6}/>
      </div>
      <BlockComponent data={data} />
    </div>
  )
}

const SideBar = () => {
  return (
    <div className="side-bar">
      {sideBarContents.map(renderSideBarContent)}
    </div>
  )
}

export default SideBar
