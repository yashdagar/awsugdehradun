import React from 'react'
import '../app.css'


const Header = () => {
  return (
    <div className='h-28 fixed top-0 left-0 z-50 backdrop-blur-sm w-full flex justify-between items-center border-b border-white'>
      <img src='/logos/AWS UG DDN logo.png' className='p-4 w-28 h-28 ml-20' />

      <div className='w-3/5'>
        <ul className='ulList flex justify-between items-center mr-10 text-[16px]'>
          <li><a href="#">About</a></li>
          <li><a href="#">Speakers</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Venue</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Sponsors</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><button className=' px-4 py-2 rounded-full bg-[#FF9901]'><a href="#">Buy Tickets</a></button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
