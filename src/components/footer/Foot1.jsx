import React from 'react'
import Foot2 from './Foot2'
import Foot3 from './Foot3'
import Foot4 from './Foot4'
import Social from './Social'
const Foot1 = () => {
  return (
    <div className='w-full flex flex-col mt-[28vw] sm:mt-[10rem] gap-[20vw] sm:gap-[9rem]'>
      <div className='w-full flex flex-col gap-[40vw] sm:gap-[15rem] md:flex-row md:gap-[2rem] md:justify-between'>

        <div className='md:w-[55%] lg:w-[30rem] xl:w-[32rem]'>
          <h1 className='text-[11.2vw] sm:text-[4.5rem] md:text-[3.5rem] xl:text-[3.8rem] font-bold leading-none'>Have a project in mind?</h1>
          <h1 className='text-[11.2vw] sm:text-[4.5rem] md:text-[3.5rem] font-bold leading-none'>Contact Us!</h1>
        </div>
          <div className='flex flex-col gap-[7vw] sm:gap-[4.3rem] md:gap-[3.5rem] md:w-[45%] lg:w-[25rem]'>
            <div className='first-wrapper flex flex-col gap-[3.5vw] sm:gap-[1.5rem md:gap-[1.3rem]'>
              <h5 className='text-[3.5vw] sm:text-[1.2rem] md:text-[1.1rem]  font-medium opacity-40  uppercase leading-none'>lets's connect:</h5>
              <div className='border-2 w-fit px-[2.5vw] py-[2.3vw] sm:py-[0.9rem] sm:px-[1.2rem] md:py-[0.7rem] md:px-[1.2rem] rounded-full cursor-pointer '>
                <h5 className='text-[3.5vw] sm:text-[1.3rem] md:text-[1.1rem] font-bold leading-none uppercase'>Check our latest deck</h5>
              </div>
            </div>
            <div className='second-wrapper flex flex-col gap-[3.5vw] sm:gap-[1.5rem] md:gap-[1.3rem]'>
              <h5 className='text-[3.5vw] sm:text-[1.2rem] font-medium opacity-40  uppercase leading-none'>our location:</h5>
              <h5 className='text-[8vw] leading-[8vw] sm:text-[3.2rem] md:text-[2.3rem] md:leading-[3rem]  sm:leading-[3.5rem] capitalize'>630 mason st. <br/>san francisco, CA 94108</h5>
            </div>
        </div>

      </div>
      <div >
        <Foot2/>
        <Foot3/>
        <Foot4/>
        <Social/>
      </div>
    </div>
  )
}

export default Foot1
