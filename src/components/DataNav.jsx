import React from 'react'

const DataNav = () => {
  return (
    <div className='w-full flex flex-col gap-10 mt-35'>
      <h1 className='text-[11vw] sm:text-[4rem] md:w-[70vw] lg:w-[60vw] lg:text-[4.6rem]  xl:text-[5.5rem] font-bold leading-none'>Featured digital design projects</h1>
      <p className='text-[5.5vw] sm:text-[1.5rem] md:text-[1.5rem] md:w-[80vw] lg:text-[1.5rem] lg:w-[80vw] xl:w-[60vw] xl:text-[1.6rem] font-normal leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quia placeat necessitatibus eius veritatis ullam amet eligendi, dolorem, provident omnis non voluptatum, veniam architecto repellat vel? Aliquid, quibusdam maxime! Soluta!</p>
      <div className='flex items-center justify-between w-[95%] mt-12 px-8 py-6 bg-[#1F1F1F] gap-2 rounded-full self-center lg:hidden'>
        <h3 className='text-[3.3vw] uppercase font-bold sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.3rem]'>inductry filter</h3>
        <i className='ri-filter-line text-[3.6vw] sm:text-[1.3rem] md:text-[1.2rem]'></i>
      </div>
    </div>
  )
}

export default DataNav
