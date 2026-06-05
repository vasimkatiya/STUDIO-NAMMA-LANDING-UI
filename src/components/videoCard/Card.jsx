import React, { useEffect, useRef } from 'react'
import './videocard.css'

const Card = ({cls,img,video,text}) => {

        const cursorRef = useRef(null);
        const pgRef = useRef(null);

        useEffect(()=>{
    
            const cursor = cursorRef.current;
            const area = pgRef.current;
    
           const cursorEffect = (e) =>{
            cursor.style.opacity=1;
            cursor.style.left=e.clientX+"px"
            cursor.style.top=e.clientY+"px"  
        }
    
        const removecursorEffect =  (e)=>{
            cursor.style.opacity =0;
        }
    
        area.addEventListener("mousemove",cursorEffect);
        area.addEventListener("mouseleave",removecursorEffect);
    
            return ()=>{
        area.removeEventListener("mousemove",cursorEffect);
        area.removeEventListener("mouseleave",removecursorEffect);
            }
    
        },[])

  return (
    <div className={cls ? `${cls} video-card` : "video-card"} ref={pgRef}>
        <div className="video-cursor" ref={cursorRef} >{text}</div>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted></video>
        <img src={img} alt="" />
    </div>
  )
}

export default Card
