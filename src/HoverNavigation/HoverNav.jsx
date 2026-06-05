import React from 'react'
import './hovernav.css'

const HoverNav = () => {

    const videos = [
        {
            video:"../public/assets/v1.mp4",
            text:"art direction",
            sub:'storytelling'
        },
        {
            video:"../public/assets/v2.mp4",
            text:"branding",
            sub:'identity'
        },
        {
            video:"../public/assets/v3.mp4",
            text:"webflow",
            sub:'integration'
        },
        {
            video:"../public/assets/v4.webm",
            text:"UI/UX design",
            sub:'wireframes'
        },
        {
            video:"../public/assets/v5.mp4",
            text:"gsap animations",
            sub:'transitions',
        },
        {
            video:"../public/assets/v6.mp4",
            text:"advertising",
            sub:'creative ads'
        },
        {
            video:"../public/assets/v7.mp4",
            text:"seo & content",
            sub:'ranking'
        }
    ]

  return (
    <div className='con'>
        {
            videos.map((e,i)=>{
                return <div className="items">
                        <h1>{e.text}</h1>
                        <p>{e.sub}</p>
                       </div>
            })
        }
    </div>
  )
}

export default HoverNav
