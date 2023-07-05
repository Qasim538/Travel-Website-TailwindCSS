import React from 'react'

function SelectCard(props) {
  return (
        <div className='relative rounded-md cursor-pointer hover:scale-105 transition-all '>
        <img className='w-full h-full object-cover' src={props.bg} alt='/' />
        <div className=' bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className=' left-4 bottom-4 text-2xl font-bold text-white absolute '>
        {props.text}
        </p>
        </div>
    </div>
  )
}

export default SelectCard
