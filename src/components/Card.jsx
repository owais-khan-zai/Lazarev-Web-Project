import React, { useRef } from 'react'
import gsap from 'gsap'

const Card = (prop) => {

  let video= useRef();

  const EnterHandler = ()=>{
    gsap.to(video.current,{
      opacity: 1,
    })
    video.current.currentTime = 0;
    video.current.play();
  }
  const LeaveHandler = ()=>{
    gsap.to(video.current,{
      opacity: 0,
    })
    video.current.currentTime = 0;
    video.current.pause();
  }
  return (
  <div 
  onMouseEnter={EnterHandler}
  onMouseLeave={LeaveHandler}
  className={`cursor-pointer  relative bg-[#1F1F1F] rounded-2xl py-8 px-6 flex flex-col justify-between gap-16 ${prop.className}`}>
    {prop.video && <video ref={video} src={prop.video} muted loop className='absolute top-0 left-0 w-full h-full object-cover' />}
      <div className='relative z-2'>
        <p className='text-[1.2rem] opacity-50 leading-none hidden lg:inline'>{prop.no}</p>
        <h3 className='text-[9.5vw] font-bold uppercase leading-none sm:text-[3.4rem] md:text-[3.4rem] lg:text-[3.5rem] lg:hidden'>{prop.head}</h3>
      </div>
      <div className='flex justify-between items-center relative z-2 lg:flex-col lg:items-start lg:gap-4'> 
        <h3 className='hidden lg:inline text-[3.5rem] uppercase font-bold leading-none'>{prop.head}</h3>
        <h4 className='text-[3.6vw] sm:text-[1.4rem] opacity-50 md:text-[1.4rem] w-[70%] lg:w-[95%] lg:text-[1.4rem]'>{prop.para}</h4>
        <p className='text-[3.3vw] sm:text-[1.4rem] opacity-30 md:text-[1.3rem] lg:hidden'>{prop.no}</p>
      </div>
    </div>
  )
}

export default Card
