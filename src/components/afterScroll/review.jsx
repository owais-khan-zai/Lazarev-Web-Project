import React from 'react'

const review = ({no, review, pic, name, Title}) => {
  return (
    <div className='w-full border-t-[1px] border-white/10 pt-[5vw] mt-[6vw] lg:pt-[2.3rem] sm:mt-[3.3rem] sm:pt-[3rem] lg:mt-0'> 
      <h5 className='text-[3.1vw] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] font-medium uppercase'>{no}</h5>
      <p className='text-[5.4vw] sm:text-[2.1rem] leading-tight mt-[10vw] sm:mt-[3rem] md:mt-[3.6rem] lg:mt-[2.5rem] lg:text-[1.6rem] xl:text-[1.8rem]'>{review}</p>
        <div className='flex items-center  gap-[4vw] sm:gap-[1.1rem] mt-[9vw] sm:mt-[3.5rem] lg:mt-[3rem] lg:pb-[2rem]'>
            <img className='w-[20vw] h-[20vw] sm:w-[7rem] sm:h-[7rem] object-cover rounded-full lg:w-[6rem] lg:h-[6rem]' src={pic} alt="Client Image" />
            <div className='flex flex-col gap-[0.8vw] sm:gap-[0.3rem]'>
                <h5 className='text-[4.2vw] sm:text-[1.6rem] font-medium lg:text-[1.3rem] xl:text-[1.5rem]'>{name}</h5>
                <h5 className='text-[3.9vw] sm:text-[1.4rem] lg:text-[1.1rem] xl:text-[1.2rem]'>{Title}</h5>
            </div>
        </div>
      
    </div>
  )
}

export default review
