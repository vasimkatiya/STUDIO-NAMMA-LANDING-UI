import React, { } from 'react'
import './videocard.css'

const Card = ({cls,img,video,text}) => {


  return (
    <div className={cls ? `${cls} video-card` : "video-card"} >
        <div className="video-cursor"  >{text}</div>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted></video>
        <img src={img} alt="" />
    </div>
  )
}

export default Card
