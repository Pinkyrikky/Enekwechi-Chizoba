import '../assets/css/Buttons.css'
import { Link } from "react-router-dom";

function Buttonwhite() {
  return (
    <button className='white'>Hire Me &#8594;</button>

  )
}

export default Buttonwhite;



export function ButtonBlack() {

  return (
    <Link to="/About"><button className='black whitespace-nowrap'>More About Me &#8594;</button></Link>
  )
}

