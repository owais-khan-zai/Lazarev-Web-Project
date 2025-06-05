import React, { useRef } from 'react'
import gsap from 'gsap'

const ItemsMenu = (props) => {

  let animate = useRef();
  let padd = useRef();

  function EnterHandler(){
    animate.current.style.top ="-100%"
    gsap.to(animate.current,{
      top: 0,
      duration: 0.3,
    })
    gsap.to(padd.current,{
      paddingRight: "20px",
      paddingLeft: "20px",
    })
  }

  function LeaveHandler(){
    gsap.to(animate.current,{
      top: "100%",
      duration: 0.3,
    })
    gsap.to(padd.current,{
      paddingRight: "0px",
      paddingLeft: "0px",
    })
  }

  return (
    <div 
    onMouseEnter={EnterHandler}
    onMouseLeave={LeaveHandler}
    className='flex flex-col gap-[2.3vw] sm:gap-[1.3rem] border-t-1 border-zinc-700 pt-[4vw] sm:pt-[1.7rem] sm:pb-[3.8rem] lg:pb-[3.3rem] xl:pb-[3.7rem] pb-[11vw] cursor-pointer relative lg:overflow-hidden'>
      <div
      ref={animate}
      className='Animate-Div absolute top-[-100%] left-0 bg-zinc-800 w-full h-full hidden lg:inline'></div>
      <div 
      ref={padd}
      className='flex justify-between items-center lg:items-start relative z-10'>
        <h3 className='text-[5.9vw] sm:text-[2.1rem] md:text-[2.15rem] lg:text-[1.5rem] lg:w-[11rem] xl:text-[1.6rem] capitalize'>{props.head}</h3>
        <p className='text-[3.8vw] w-[90%] sm:text-[1.5rem] md:text-[1.55rem] leading-[1.6rem] lg:text-[1.1rem] lg:w-[28rem] xl:w-[35rem] hidden lg:inline'>{props.para}</p>
        <i className="ri-arrow-right-up-line text-[5.5vw] sm:text-[1.8rem] md:text-[1.9rem] lg:text-[1.3rem] xl:text-[1.35rem]"></i>
      </div>
        <p className='text-[3.8vw] w-[90%] sm:text-[1.5rem] md:w-[75%] md:text-[1.55rem] leading-[1.3rem] sm:leading-[1.8rem] md:leading-[1.9rem] lg:text-[1.3rem] lg:hidden'>{props.para}</p>
    </div>
  )
}

export default ItemsMenu
