import React from 'react'
import BoxHead from './BoxHead'
import SocialBox from './SocialBox'
const Social = () => {
  return (
    <div className='w-full mt-[15vw] sm:mt-[7rem] md:mt-[5rem] md:pt-[3.4rem] md:border-t-2 md:border-zinc-700 md:'> 
      <BoxHead head='our social:'/>
      <div className='flex w-full flex-wrap gap-[1vw] mt-[3vw] sm:mt-[1.5rem]'>
        <SocialBox value='linkedin'/>
        <SocialBox value='twitter'/>
        <SocialBox value='instagram'/>
        <SocialBox value='facebook'/>
        <SocialBox value='behance'/>
      </div>
    </div>
  )
}

export default Social
