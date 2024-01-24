import React from 'react'
import { logoSet } from '../data'
import Image from 'next/image'

const SocialProof = () => {
  return (
    <div  className='mt-[4rem] md:mt-[7rem] max-md:ml-[2rem] lg:ml-[20%] max-[280px]:ml-0'>
      <p className='text-gray-600 text-md mb-[1.5rem] lg:ml-[5rem]'>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className='md:flex grid grid-cols-3 gap-[1rem] md:gap-[2rem]'>
        {
          logoSet.map((logo, index) => (
            <Image src={logo} alt='logo' className='max-lg:w-[70px]' width={90} height={90} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default SocialProof