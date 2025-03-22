import React from 'react'
import './Resume.css'
import PageLayout from '../layout/PageLayout'

const Resume = () => {
  const PDF_URL = "https://drive.google.com/file/d/1841ztFEeW0p9WkRt8uKApAg6TKRELpWO/preview";

  return (
    <PageLayout title="Resume">
      <iframe className="resume-pdf" src={PDF_URL}/>
    </PageLayout>
  )
}

export default Resume