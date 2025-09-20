import React from 'react'
import lastAni from '../../assets/last-ani.webp'
import lastAniImg from '../../assets/last-ani-img.webp'

const AniGreenBlock = () => {
  return (
    <div className='w-full relative h-[100vw] sm:h-[37rem] md:h-[28rem] lg:h-[35rem] xl:h-[38rem] px-[3vw] bg-gradient-to-bl from-[#192918] via-[#111111] to-[#192918] overflow-hidden mt-[22vw] sm:mt-[9rem] md:flex md:items-center md:justify-center'>
        <img src={lastAni} alt="Last Animated Block" className='h-[170vw] sm:h-[50rem] md:h-[40rem] lg:h-[47rem] object-cover absolute top-[-10%] sm:top-[-7%]  right-0 z-1 '/>
      <div className='relative z-3 md:flex md:items-start md:justify-between'>
        <div className='flex flex-col mt-[15vw] md:mt-[6px] md:w-[65%]  md:gap-[0.8rem]'>
            <h1  className='text-[14vw] sm:text-[5.3rem] flex items-center font-bold uppercase gap-[3vw] sm:gao-[1rem] md:gap-[0.7rem] md:text-[5.7rem] lg:text-[7.5rem] xl:text-[8.5rem] leading-none flex items-center '><img src={lastAniImg} alt='Founder Image' className='w-[11vw] h-[11vw] sm:w-[4.2rem] sm:h-[4.2rem] md:w-[4rem] md:h-[4rem] lg:w-[5.2rem] lg:h-[5.2rem] xl:w-[5.8rem] xl:h-[5.8rem] object-cover inline-block'/>Have</h1>
            <h1 className='text-[14vw] sm:text-[5.3rem] md:text-[5.7rem] lg:text-[7.5rem] xl:text-[8.5rem] whitespace-nowrap font-bold font-bold leading-none uppercase'>a project </h1>
            <h1 className='text-[14vw] sm:text-[5.3rem] md:text-[5.7rem] lg:text-[7.5rem] xl:text-[8.5rem] whitespace-nowrap font-bold font-bold leading-none uppercase'>in mind?</h1>
        </div>
        <div className='md:w-[35%] md:flex md:flex-col md:gap-[8vw] md:items-end lg:gap-[5rem]'>
          <i className="ri-arrow-right-up-line hidden md:flex text-[8rem] h-[6rem] w-[6.5rem] lg:w-[9rem] lg:h-[11rem] lg:text-[11rem] xl:w-[10rem] xl:h-[13rem] xl:text-[13rem]  leading-none "></i>
          <p className='text-[4vw] leading-[1.2] mt-[5vw]  sm:text-[1.45rem] sm:mt-[2rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]  md:text-right'>Share your project idea with us! Should the partnership vibe not align, we're glad to furnish you with valuable insights that could prove beneficial.</p>
        </div>
      </div>
    </div>
  )
}

export default AniGreenBlock
