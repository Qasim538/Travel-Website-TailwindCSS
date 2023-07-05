import React from 'react'
import beachVid from './assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
    <h1> Explore hundreds of holiday deals
    </h1>
    <h3 className='p-6'>“A vacation is what you take when you can no longer take what you've been taking.” <br />
    —Earl Wilson.
    </h3>

    <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border pl-8
    rounded-full text-black bg-gray-100/90'>
    <div>
    <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' type='text' placeholder='Search Destinations'></input>
    </div>
    <div>
    <button className='rounded-full hover:scale-105'> <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}} />  </button></div>
    
    </form>
    </div>
      
    </div>
  )
}

export default Hero
