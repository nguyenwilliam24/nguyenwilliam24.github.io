import React from 'react'
import './PageLayout.css'

const PageLayout = ({title, children}) => {
  return (
    <div className="page-layout">
      <div className="page-title">
          <h1>{title}</h1>
      </div>
      {children}
    </div>
  )
}

export default PageLayout