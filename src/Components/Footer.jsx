import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
    <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
    <div className='sm:flex text-center justify-between items-center'> 
    <h1 className='text-green-600'> Sneaky Travels </h1>  
    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
    <FaTwitter className="icon hover:scale-110 transition-all" />    
    <FaFacebook  className="icon hover:scale-110 transition-all" />    
    <FaYoutube  className="icon hover:scale-110 transition-all" />    
    <FaInstagram  className="icon hover:scale-110 transition-all" />    
  </div>
    </div>
    <div className='flex justify-between'>
    <ul className='lg:flex cursor-pointer'>
    <li> About </li>
    <li> Careers </li>
    <li> News </li>
    <li> Contact Us </li>
    </ul>
    <ul className='text-right lg:flex cursor-pointer'>
    <li> Home </li>
    <li> Destination </li>
    <li> Travel </li>
    <li> Book </li>
    </ul>
    </div>

    </div>
      
    </div>
  )
}

export default Footer
