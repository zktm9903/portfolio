import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <div className='flex justify-center w-screen bg-neutral-200'>
        <div className='flex flex-col justify-center items-center w-[70rem] h-64'>
            <a href='https://github.com/zktm9903' target='_blank' rel="noopener noreferrer">
                <AiFillGithub size='3rem' className='mb-5 mt-10 hover:opacity-70'/>
            </a>
            <div className='w-full h-px bg-neutral-400 my-2'/>
            <div className='flex w-full justify-between'>
                <p className='text-neutral-800'>© 2021. Lee Sang Cheol. All rights reserved.</p>
                <p className='text-neutral-800'>zktm9903@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer