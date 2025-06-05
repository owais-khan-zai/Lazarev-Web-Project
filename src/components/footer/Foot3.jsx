import React from 'react'
import ContentBox from './ContentBox'
import BoxHead from './BoxHead'
const Foot1 = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-y-[15vw] gap-[2.5vw] border-t-1 border-zinc-700 pt-[10vw] mt-[15vw] sm:gap-y-[3.8rem] sm:gap-[2rem] sm:pt-[3.5rem] sm:mt-[5rem] md:mt-[4.2rem] md:gap-[2.5rem] md:grid-cols-4'>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem]'>
        <BoxHead head='industries:'/>
        <ContentBox content='AI & ML'/>
        <ContentBox content='FinTech'/>
        <ContentBox content='Real estate'/>
        <ContentBox content='web3'/>
        <ContentBox content='E-commerce'/>
      </div>
      <div className='flex flex-col gap-[3vw] sm:gap-[1.1rem] '>
        <BoxHead head='process:'/>
        <ContentBox content='MVP'/>
        <ContentBox content='Relaunch'/>
      </div>
      <div className='hidden md:flex md:flex-col gap-[1.1rem]'>
        <BoxHead head='services:'/>
        <ContentBox content='website redesign'/>
        <ContentBox content='UX design team'/>
        <ContentBox content='Digital product design'/>
        <ContentBox content='Digital product '/>
        <ContentBox content='design system'/>
        <ContentBox content='Startup web design'/>
      </div>
      <div className='hidden md:flex md:flex-col gap-[1.1rem]'>
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
