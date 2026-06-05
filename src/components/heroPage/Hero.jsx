import React from 'react'
import './hero.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Hero = () => {

  useGSAP(()=>{
    gsap.from(".hero h1",{
      opacity:0,
      duration:1,
      y:40,
      transform:"rotate(10deg)"
    })
  })

  return (
    <div className="hero">
        <h1>we Think</h1>
        <h1>craft and</h1>
        <h1>design</h1>
    </div>
  )
}

export default Hero
