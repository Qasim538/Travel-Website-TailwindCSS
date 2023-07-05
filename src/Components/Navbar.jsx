import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-green-600/50'>
    
    <div>
    <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Sneaky Travels.</h1>   

    </div>

    <ul className='hidden md:flex text-green-100 cursor-pointer'>
    <li className='hover:scale-110 transition-all'>Home</li>
    <li className='hover:scale-110 transition-all'>Destination</li>
    <li className='hover:scale-110 transition-all'>Contact Us</li>
    <li className='hover:scale-110 transition-all bg-white text-green-700 rounded-lg'>Book</li>
    </ul>

    <div className='hidden md:flex'>
    <BsPerson size={20} />
    </div>

    {/* HamBurger */} 
    <div onClick={handleNav} className='md:hidden z-10'>
    {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
    </div>
{/* Mobile Version */}
    <div onClick={handleNav} className={nav ? 'absolute left-0 text-black bg-gray-100/90 top-0 w-full bg-grey-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
    <ul>
    <h1>BEACHES.</h1>
    <li className='border-b'>Home</li>
    <li className='border-b'>Destination</li>
    <li className='border-b'>Contact Us</li>
    <li className='border-b bg-white'>Book</li>
    <div className='flex flex-col'>
    
    <button className='my-6'> Search </button>
    <button> Account </button>
    </div>

    <div className='flex justify-between my-6'>
      <FaTwitter className="icon" />    
      <FaFacebook  className="icon" />    
      <FaYoutube  className="icon" />    
      <FaInstagram  className="icon" />    
    </div>

    </ul>
    </div>

    </div>

  )
}

export default Navbar
