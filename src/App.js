import React from 'react'
import Avartar from 'Components/Avatar'
import Info from 'Components/Info'
import SideBar from 'Components/SideBar'
import MainInfo from 'Components/MainInfo'

const App = () => {
  return (
    <div className="container">
      <Avartar />
      <div className="sub-container">
        <Info />
        <div className='main'>
          <SideBar />
          <MainInfo />
        </div>
      </div>
    </div>
  )
}

export default App
