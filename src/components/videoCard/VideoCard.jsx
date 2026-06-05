import React from 'react'
import Card from './Card'
import './videocard.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const VideoCard = () => {

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.video-container',
                start:"top 100%",
                end:"top -40%",
                scrub:2,
            }
        })

        gsap.from(".card-1",{
            x:-500,
            opacity:0,
             scrollTrigger:{
                trigger:'.video-container .card-1',
                start:"top 150%",
                end:"top 0%",
                scrub:2,
            }
        })
        gsap.from(".card-2",{
            x:500,
            opacity:0,
             scrollTrigger:{
                trigger:'.video-container .card-2',
                start:"top 150%",
                end:"top 0%",
                scrub:2,
            }
        })

         gsap.from(".card-3",{
            x:-500,
            opacity:0,
             scrollTrigger:{
                trigger:'.video-container .card-3',
                start:"top 150%",
                end:"top 0%",
                scrub:2,
            }
        })

         gsap.from(".card-4",{
            x:500,
            opacity:0,
             scrollTrigger:{
                trigger:'.video-container .card-4',
                start:"top 150%",
                end:"top 0%",
                scrub:2,
            }
        })

    })

    const sources = [
        {
            className:'card-1',
            text:"matera",
            img:"../public/img/img1.webp",
            video:"../public/assets/v6.mp4"
        },
        {
            className:'card-2',
            text:"chance",
            img:"../public/img/img2.webp",
            video:"../public/assets/v1.mp4"
        },
        {
            className:'card-3',
            text:"intramuros",
            img:"../public/img/img3.webp",
            video:"../public/assets/v3.mp4"
        },
        {
            className:'card-4',
            text:"silvr",
            img:"../public/img/img4.webp",
            video:"../public/assets/v4.webm"
        }

    ]

  return (
    <>
    <div className="video-container">
        {sources.map((ele,idx)=>{
            return <Card key={idx} cls={ele.className} text={ele.text} video={ele.video} img={ele.img} />
        })}
    </div>
    </>
  )
}

export default VideoCard
