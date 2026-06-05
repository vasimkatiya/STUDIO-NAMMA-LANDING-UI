import React from 'react'
import "./videopage.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const VideoPage = () => {

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".v-page",
        start:'top 70%',
        end:"top -30%",
        scrub:2
      }
    })

    tl.to(".main-vid",{
      width:"90vw"
    })

  })

  return (
    <div className='v-page'>
      <video className='main-vid' src="../assets/main.mp4" autoPlay muted loop ></video>
    </div>
  )
}

export default VideoPage
