import React from 'react'
import { me } from 'Utils/data'
import { TiLocation, TiPhoneOutline } from "react-icons/ti";

const Info = () => {
  const { name, jobTitle, local, phoneNumber } = me
  return (
    <div className='info'>
      <p className='info-name'>{name}</p>
      <div className='info-detail'>
        <span>{jobTitle}</span>
        <TiLocation />
        <span>{local}</span>
        <TiPhoneOutline />
        <span>{phoneNumber}</span>
      </div>
    </div>
  )
}

export default Info