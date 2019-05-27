import React from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Avartar from 'Components/Resume/Avatar'
import Info from 'Components/Resume/Info'
import SideBar from 'Components/Resume/SideBar'
import MainInfo from 'Components/Resume/MainInfo'

const Resume = () => {
  const handleExportOnClick = () => {
    Array.from(document.getElementsByClassName('progress-bar')).forEach( progressBar => {
      progressBar.children[0].className = "for-pdf"
    })
    html2canvas(document.getElementById('resume')).then(
      function(canvas) {
        let width
        let height
        const img = canvas.toDataURL("image/png", width = canvas.width, height = canvas.height)
        const doc = new jsPDF({
          unit: 'px',
          format: [height*0.4, width*0.4]
        });
        const adjustedHeight = doc.internal.pageSize.height
        const adjustedWidth = adjustedHeight * width / height
        doc.addImage(img,'JPEG',0,0, adjustedWidth, adjustedHeight);
        doc.save('resume_ShihYumei.pdf');
    });
  }

  return (
    <>
      <div className="container" id="resume">
        <Avartar />
        <Info />
        <div className='main'>
          <SideBar />
          <MainInfo />
        </div>
      </div>
      <div className="export-pdf"><button onClick={handleExportOnClick}>Export to PDF</button></div>
    </>
  )
}

export default Resume
