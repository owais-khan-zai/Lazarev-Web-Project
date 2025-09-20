import React from 'react'
import Review from './review'
import review1 from '../../assets/review1.webp'
import review2 from '../../assets/review2.webp'

const Client = () => {
  return (
    <div className='lg:flex lg:w-full lg:gap-[3rem]'>
      <div className='lg:w-[45%] lg:h-fit lg:sticky lg:top-1'>
        <h5 className='text-[3.4vw] uppercase sm:text-[1.4rem] md:text-[1.35rem] lg:text-[1rem] xl:text-[1.1rem]'>testimonials</h5>
        <h1 className='text-[11vw] font-bold leading-none mt-[10vw] sm:mt-[5rem] sm:text-[4rem] md:text-[4.2rem] lg:text-[2.6rem] xl:text-[3rem]'>Clients speak out: what they say about our AI design</h1>
        <p className='text-[4.3vw] leading-tight mt-[8vw] sm:mt-[3.5rem] sm:text-[1.55rem] lg:text-[1.3rem] lg:mt-[2.5rem] xl:text-[1.4rem] font-normal leading-tight'>Even though the world of the decentralized web is a next-level experiences, it has fundamental issues that hinder your project from growing. Having partnered with various Web3 startups, we develop key steps to address each with design.</p>
      </div>
      <div className='mt-[22vw] sm:mt-[8.5rem] md:mt-[8rem] lg:mt-0 lg:w-[55%]'>
        <Review no='/01' review='"I had the pleasure of working wih Owais Khan backed by the amazing design team at lazarev, and I cannot recommend them highly enough. From start to finsh, he is excellent communicator and made the entire process incredibly smooth"' pic={review1} name='Nick Chapman' Title='Chief Product Officer, Pika AI'/>

        <Review no='/02' review='"They care about the client and have a deep focus on solving problems efficiently"'pic={review2} name='Jens mathiasson' Title='Chief Product Officer, Pika AI'/>
      </div>
    </div>
  )
}

export default Client
