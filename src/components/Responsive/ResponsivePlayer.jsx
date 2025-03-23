import React from 'react'
import { Component } from 'react'
import ReactPlayer from 'react-player'
import './ResponsivePlayer.css'

class ResponsivePlayer extends Component {    
    render () {
      return (
        <div className="player-wrapper">
          <ReactPlayer className="react-player" width="100%" height="100%" controls={true} url={this.props.url}/>
        </div>
        )
    }
}

export default ResponsivePlayer