import React from 'react'

const Header = () => {
  return (
    <div className='h-24 w-full flex justify-between items-center border-b border-white'>
      <img src='/logos/AWS UG DDN logo.png' className='p-4 w-24 h-24 ml-20' />

      <div className='w-3/5'>
        <ul className='flex justify-between mr-10 text-[18px]'>
          <li>About</li>
          <li>Speakers</li>
          <li>Schedule</li>
          <li>Venue</li>
          <li>Gallery</li>
          <li>Sponsors</li>
          <li>Team</li>
          <li>FAQ</li>
          <li>Contact Us</li>
          <li>TICKETS</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
