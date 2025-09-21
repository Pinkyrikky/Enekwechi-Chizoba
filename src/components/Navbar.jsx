import {useState} from 'react'
import { Link } from "react-router-dom";

import menuIcon from '../assets/images/menuIcon.svg'
import close from '../assets/images/x-thin-svgrepo-com.svg'
import mediaMenuIcon from '../assets/images/icons8-menu.svg'
import mediaClose from '../assets/images/icons8-close.svg'
export default function Navbar() {

    const [open, setOpen] =useState (false)
    function dropdown(){
      if(open){
        setOpen(false)
      }else{
        setOpen(true)
      }
    }
  return (
    <>
    <div className='nav'>
    <div className="header">Pinky.</div>
        <div className="hamburg" onClick={dropdown}>
       {!open && <><img className="hamburger desktop" src={menuIcon} alt="hamburger icon" /><img className="hamburger tablet" src={mediaMenuIcon} alt="hamburger icon" /></>}
       {open && <><img className="hamburger desktop" src={close} alt="hamburger icon" /><img className="hamburger tablet" src={mediaClose} alt="hamburger icon" /></>}
        {open && <div  className="dropdown">
            <ul>
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to='/About' className="link">About</Link></li>
              <li><Link to='/Experiences' className="link">Experiences</Link></li>
              <li><Link to='/Contact' className="link">Contact</Link></li>
            </ul>
          </div>}
       </div>
    </div>
    </>
  )
}
