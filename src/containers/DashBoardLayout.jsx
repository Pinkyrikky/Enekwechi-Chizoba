import { Footer } from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function DashBoardLayout() {
  return (
    <div>
<Navbar />
<Outlet />
<div className='text-center pb-3'>
  <Footer/>
</div>
    </div>
  )
}

export default DashBoardLayout
