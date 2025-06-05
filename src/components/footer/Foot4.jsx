import React from 'react'
import BoxHead from './BoxHead'
import ContentBox from './ContentBox'
const Foot1 = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-y-[15vw] gap-[2.5vw] border-t-1 border-zinc-700 pt-[10vw]  mt-[15vw] sm:gap-y-[3.8rem] sm:gap-[2rem] sm:pt-[3.5rem] sm:mt-[5rem] md:hidden'> 
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='services:'/>
        <ContentBox content='website redesign'/>
        <ContentBox content='UX design team'/>
        <ContentBox content='Digital product design'/>
        <ContentBox content='Digital product '/>
        <ContentBox content='design system'/>
        <ContentBox content='Startup web design'/>
      </div>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead hide='invisible' head='-'/>
        <ContentBox content='Ux/UI design'/>
        <ContentBox content='B2B design agency'/>
        <ContentBox content='UX research consultancy'/>
        <ContentBox content='UX strategy agency'/>
        <ContentBox content='product redesign'/>
        <ContentBox content='responsive web design'/>
      </div>
    </div>
  )
}

export default Foot1
