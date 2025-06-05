import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const Question = (props) => {

  let icon = useRef();
  let height =useRef();
  let no = useRef();
  let head = useRef();
  let border = useRef();

  const [Toggle, setToggle] = useState(false);
  function ClickHandler(){
    let TempToggle = !Toggle;
    setToggle(TempToggle);

    let tl = gsap.timeline();
    if(TempToggle){
    tl.to(icon.current,{
      rotate: 180,
      opacity: 1,
      duration:0.2,
    },"a")
    tl.to(height.current,{
      height:"auto",
      duration:0.4,
    },"a")  
    tl.to(head.current,{
      opacity: 1,
      duration:0.2,
    },"a")
    tl.to(no.current,{
      opacity: 1,
      duration:0.2,
    },"a")
    tl.to(border.current,{
      borderTopColor: "#e4e4e7",
      duration:0.2,
    },"a")
    }

    else{
      tl.to(icon.current,{
      rotate: 0,
      opacity: 0.6,
      duration:0.2,
    },"a")
    // yaaha condition lagaye hy height ky lie 
      if(window.innerWidth < 640){
        tl.to(height.current,{
          height:"22vw",
          duration:0.4,
        },"a")  
      }
      else if (window.innerWidth >= 640){
        tl.to(height.current,{
          height:"6rem",
          duration:0.4,
        },"a")  
      }
    //  yha condition end ho rhi height wali
    tl.to(head.current,{
      opacity: 0.6,
      duration:0.2,
    },"a")
    tl.to(no.current,{
      opacity: 0.6,
      duration:0.2,
    },"a")
    tl.to(border.current,{
      borderTopColor: "#3f3f46",
      duration:0.2,
    },"a")
    }

    
  }

  return (
    <div ref={border} className='w-full border-t-2 border-zinc-700 pt-[9vw] mt-[15vw] sm:mt-[6rem] md:mt-[4rem] lg:mt-[3rem] xl:mt-[2rem] sm:pt-[3.1rem] lg:pt-[2rem]  lg:flex '>
      <div className='hidden lg:inline-block pr-[12vw]'>
        <h6 ref={no} className='whitespace-nowrap opacity-60'>{props.no}</h6>
      </div>
      <div ref={height} className='wrapper w-full h-[22vw] sm:h-[6rem] overflow-hidden'>
        <div className='flex items-start justify-between '>
          <h5  ref={head} className='text-[5.6vw] sm:text-[2rem] md:text-[2rem] lg:text-[1.9rem] lg:w-[75%] leading-[7.4vw] sm:leading-[2.8rem] w-[80%] opacity-60'>{props.head}</h5>
          <i onClick={ClickHandler} ref={icon} className="ri-arrow-down-s-line mr-[2vw] sm:mr-[0.5rem] text-[6vw] sm:text-[2rem] md:text-[2.1rem] lg:text-[2rem] lg:mr-[0rem] cursor-pointer opacity-60"></i>
        </div>
        <div>
          <p className='text-[3.8vw] mt-[7.2vw] sm:text-[1.4rem] sm:mt-[2.5rem]'>{props.para}</p>
        </div> 
      </div>
    </div>
  )
}

export default Question
