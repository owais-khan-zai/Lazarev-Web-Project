import React from 'react'
import BoxHead from './BoxHead'
import ContentBox from './ContentBox'
const Foot1 = () => {
  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-y-[15vw] gap-[2.5vw] sm:gap-y-[3.8rem] sm:gap-[2rem] md:mt-[-1.7rem] md:gap-[2.5rem] '>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem] '>
        <BoxHead head='Shaping Experiences:'/>
        <ContentBox content="UX Audit"/>
        <ContentBox content="UI Design"/>
        <ContentBox content="UX Design"/>
        <ContentBox content="UX Research"/>
      </div>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='where we shine:'/>
        <ContentBox content="SaaS"/>
        <ContentBox content="Web App"/>
        <ContentBox content="mobile app"/>
        <ContentBox content="website design"/>
      </div>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='behind the screens:'/>
        <ContentBox classAdd='text-[3.6vw] uppercase font-medium' content="our story"/>
        <ContentBox classAdd='text-[3.6vw] uppercase font-medium' content="careers"/>
      </div>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead hide='invisible' head='-'/>
        <ContentBox classAdd='text-[3.6vw] uppercase font-medium' content="terms of services"/>
        <ContentBox classAdd='text-[3.6vw] uppercase font-medium' content="privacy policy"/>
      </div>
    </div>
  )
}

export default Foot1
