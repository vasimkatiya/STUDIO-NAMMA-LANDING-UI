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
  }, 7000);
  }, [])
  

  return (
    laoding ? <div className='load'>
      <video className='load-vid' src="../public/assets/light-loading.mp4" autoPlay loop ></video>
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
