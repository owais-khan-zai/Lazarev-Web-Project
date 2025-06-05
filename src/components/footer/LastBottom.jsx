import React from 'react'

const LastBottom = () => {
  return (
    <div className='w-full flex flex-col justify-between mt-[15vw] sm:mt-[6rem] border-t-2 border-zinc-700 gap-[8vw] pt-[7vw] sm:pt-[2.2rem] pb-[2vw] sm:pb-[1.2rem] md:flex-row'>
      <div>
        <h5 className='text-[3.6vw] sm:text-[1.5rem]  sm:text-[21px] capitalize '>Lazarev. Al+ Product design agency.</h5>
      </div>
      <div className='flex justify-between md:gap-[8vw] lg:gap-[7vw] items-center capitalize text-[3.5vw] sm:text-[1.1rem] sm:text-[21px]'>
        <h6 className='whitespace-nowrap'>all rights reserved</h6>
        <h6 className='whitespace-nowrap'>&copy; 2025</h6>
      </div>
    </div>
  )
}

export default LastBottom
