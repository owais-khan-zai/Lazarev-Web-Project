import React from 'react'

const BlockData = (props) => {
  return (
    <div className='w-fit border-2 border-zinc-700 rounded-full px-[5vw] sm:px-[1.9rem] sm:py-[0.8rem] md:py-[0.8rem] md:px-[1.9rem] py-[2vw] cursor-pointer lg:px-[1.3rem] lg:py-[0.7rem] xl:px-[1.35rem]'>
      <h3 className='text-[3.3vw] sm:text-[1.15rem] md:text-[1.18rem] lg:text-[1rem] xl:text-[1.03rem] font-medium uppercase'>{props.value}</h3>
    </div>
  )
}

export default BlockData
