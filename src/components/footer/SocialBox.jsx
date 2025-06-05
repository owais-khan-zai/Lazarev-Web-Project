import React from 'react'

const SocialBox = ({value}) => {
  return (
    <div className='px-[5vw] py-[2vw] sm:px-[2.1rem] sm:py-[0.8rem] md:px-[1.7rem] md:py-[0.8rem] xl:py-[0.9rem] cursor-pointer rounded-full border-2 border-zinc-300 flex items-center justify-center'>
      <h5 className='text-[3.5vw] sm:text-[1.35rem] md:text-[1.1rem] xl:text-[1.2rem] font-medium uppercase leading-none'>{value}</h5>
    </div>
  )
}

export default SocialBox
