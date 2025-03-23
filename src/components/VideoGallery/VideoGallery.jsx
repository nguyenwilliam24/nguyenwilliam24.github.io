import React from 'react'
import ImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import './VideoGallery.css'

export const renderVideo = (video) => {
    return (
        <div className="gallery-video">
        {
            video.type === "video" ? (<ReactPlayer width="100%" height="100%" url={video.original} controls={true}/>) : (<ReactPlayer width="100%" height="100%" url={video.embedUrl} controls={true}/>)
        }
        {
            video.description && (<span className="image-gallery-description">{video.description}</span>)
        }
        </div>
    )
}

const VideoGallery = ({items}) => {
  return (
    <div className="gallery-wrapper">
        {
            items.forEach((item, i) => {
                if (item.type === "video" || item.type === "youtube") {
                    items[i].renderItem = renderVideo.bind(items[i])
                }
            })
        }
        <ImageGallery items={items} showPlayButton={false} showIndex={true} showBullets={true} showFullscreenButton={false}/>
    </div>
  )
}

export default VideoGallery