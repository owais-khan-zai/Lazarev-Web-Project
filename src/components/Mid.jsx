import React from 'react'
import Button from './button/button'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
const Mid = () => {

  
  return (
    <div className='mt-[6rem] w-full h-[95vw] sm:h-[37rem] md:h-[45rem] py-3 px-4  bg-gradient-to-br from-[#0F124A] to-[#4954EE] flex flex-col  justify-center relative gap-[12vw] sm:gap-[3rem] overflow-hidden'>
        <img src='./assests/mid2.webp' alt='mid' className='w-[60%] sm:w-[22rem] md:w-[28rem] lg:w-[33rem] absolute top-[-2%] left-[-15%] z-1 mix-blend-hard-light'/>
        <img  src='./assests/mid1.webp' alt='mid' className=' h-[100%] w-[100%] object-cover md:objext-none absolute top-[0%] right-[0%] z-1 mix-blend-hard-light'/>
      <div className='flex flex-col md:items-center gap-[3vw] relatve z-2'>
        <h1 className='text-[10vw] tracking-tighter font-bold leading-tight sm:text-[3.9rem] md:text-[3.9rem] lg:text-[4.9rem] xl:text-[6rem]'>Golden Standard In UX + AI</h1>
        <p className='text-[3.8vw] leading-tight sm:text-[1.35rem] md:text-center md:text-[1.4rem] lg:text-[1.6rem] md:w-[85%] lg:w-[86%] xl:text-[1.6rem]'>Look, we have been designing AI experiences since 2017, and we are not just dabbling in it we are dominating. We have tackled adtech, salestech, Fintech, legaltec, Media and more. </p>
        <p className='text-[3.8vw] leading-tight sm:text-[1.35rem] md:text-[1.43rem] lg:text-[1.rem] xl:text-[1.6rem]'>Want tot see hwo we do it?</p>
      </div>
      <div className='w-full flex justify-center relative z-2'>
        <Button color="white" textColor="black" content="Check our UX + AI innovations here"/>
      </div>
    </div>
  )
}

export default Mid
