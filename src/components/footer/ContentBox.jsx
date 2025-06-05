import React from 'react'

const ContentBox = (props) => {
  return (
    <div>
      <h6 className={`text-[3.5vw] sm:text-[1.3rem] md:text-[1.1rem] xl:text-[1.2rem] capitalize ${props.classAdd} cursor-pointer hover:text-[#0DA34E] transition-all duration-200 ease-in-out w-fit`}>{props.content}</h6>
    </div>
  )
}

export default ContentBox
