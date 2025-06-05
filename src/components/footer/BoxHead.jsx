import React from 'react'

const BoxHead = (props) => {
  return (
    <div className={`${props.hide}`}>
      <h5 className='text-[3.5vw] sm:text-[1.4rem] md:text-[1.1rem] xl:text-[1.22rem] md:whitespace-nowrap font-medium opacity-40  uppercase leading-none'>{props.head}</h5>
    </div>
  )
}

export default BoxHead
