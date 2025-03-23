import React from 'react'
import './ResponsiveDrivePlayer.css'

const ResponsiveDrivePlayer = ({url}) => {
  return (
    <div className="player-wrapper">
      <iframe className="drive-player" src={url} allow="fullscreen"/>
    </div>
  )
}

export default ResponsiveDrivePlayer