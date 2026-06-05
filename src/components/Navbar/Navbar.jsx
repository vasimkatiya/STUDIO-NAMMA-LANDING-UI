import React, {} from 'react'
import "./navbar.css"

const Navbar = ({open, setopen}) => {


  return (
  <>
    <header>
        <div className="nav-1">
            <div className="logo">studio namma</div>
            <div className="light-mode">
                light mode
            </div>
        </div>
        <div className="nav-2">
            <div className="menu" onClick={()=>setopen(!open)} >
                {open ? "close" : "menu"}
            </div>
            <div className="contact-us">
                let's talk
            </div>
        </div>     
    </header>
    {open ? 
    <nav>
        <div className="n-1">
        <h1>Home</h1>
        <h1>work</h1>
        <h1>services</h1>
        </div>
        <div className="n-2">
        <h1>approach</h1>
        <h1>studio</h1>
        <h1>contact us</h1>
        </div>
    </nav> : ""}
  </>
  )
}

export default Navbar
