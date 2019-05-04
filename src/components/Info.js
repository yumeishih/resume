import React from 'react'
import { me } from 'Utils/data'
import { TiLocation, TiMail } from "react-icons/ti";

const Info = () => {
  const { name, jobTitle, local, email } = me
  return (
    <div className='info'>
      <p className='info-name'>{name}</p>
      <div className='info-detail has-icon'>
        <span>{jobTitle}</span>
        <TiLocation />
        <span>{local}</span>
        <TiMail />
        <span>{email}</span>
      </div>
    </div>
  )
}

export default Info