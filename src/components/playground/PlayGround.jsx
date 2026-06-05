import React, { useEffect, useRef } from 'react'
import './playground.css'

const PlayGround = () => {

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
    <div className='pg'>
        <p>selected work</p>
        <div className="cursor-pg" ref={cursorRef}>
            PORTFOLIO
        </div>
      <h1 ref={pgRef}>PLAYGROUND</h1>
    </div>
  )
}

export default PlayGround
