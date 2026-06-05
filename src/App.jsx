import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/heroPage/Hero'
import VideoPage from './components/page2/VideoPage';
import Page3 from './components/page3/Page3';
import PlayGround from './components/playground/PlayGround';
import Card from './components/videoCard/Card';
import VideoCard from './components/videoCard/VideoCard';
import HoverNav from './HoverNavigation/HoverNav';
import LetsWork from './letsWork/LetsWork';
import Footer from './footer/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {
  const [open, setopen] = useState(false);
  const [laoding, setlaoding] = useState(true);

  const areaRef = useRef(null)
  const cursorRef = useRef(null);

  useEffect(() => {


    setTimeout(() => {
      setlaoding(false)
   
    const area = areaRef.current;
    const cursor = cursorRef.current ;

    const cursorEffect = (e)=>{
    
      cursor.style.left=e.clientX+"px"
      cursor.style.top=e.clientY+"px"  
    }

    area.addEventListener("mousemove",cursorEffect);
    
    return () => {
      area.removeEventListener("mousemove",cursorEffect);
    }
  }, 2000);
  }, [])
  
  useGSAP(()=>{
    gsap.from("h3",{
      y:500,
      opacity:0,
      duration:1,
    })
  })


  return (
    laoding ? <div className='load'>
          <img src="../img/loading.png" alt="" />
          <h3>preparing smooth experience</h3>
    </div> : <div ref={areaRef}>
      {
        open ? <Navbar open={open} setopen={setopen} /> :
        <>
      <div className="cursor" ref={cursorRef}></div>
      <Navbar open={open} setopen={setopen} />
      <main>
        <Hero />
        <VideoPage />
        <Page3 />
        <PlayGround />
        <VideoCard />
        <HoverNav />
        <LetsWork />
        <Footer />
      </main>
        </>
      }

    </div>
  )
}

export default App
