import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Hero = () => {

  useGSAP(()=>{
    
    let tl =gsap.timeline();
    tl.from(".MiniHead",{
      y: -20,
      opacity: 0,
      delay: 0.3,
    },"a")
    tl.from(".MiniPara",{
      y: 20,
      opacity: 0,
      delay:0.3,
    },"a")
  
  },[])

  function SplitText(Text) {
  let tempText = Text.innerText;
  Text.innerHTML = "";

  tempText.split("").forEach(char => {
    let span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.style.display = "inline-block";
    } else {
      span.innerText = char;
      span.style.display = "inline-block"; 
    }

    Text.appendChild(span);
  });
}
  
  let MainText1= useRef();
  let MainText2 = useRef();
  useLayoutEffect(()=>{
    SplitText(MainText1.current);
    SplitText(MainText2.current);

    let MainSpan1 = MainText1.current.querySelectorAll("span");
    let MainSpan2 = MainText2.current.querySelectorAll("span");

    let tl2 = gsap.timeline();
    tl2.from(MainSpan1,{
      y:50,
      delay:0.4,
      opacity:0,
      stagger: 0.02,
    },"b")
    tl2.from(MainSpan2,{
      y:50,
      opacity:0,
      delay:0.4,
      stagger: 0.02,
    },"b")
  },[])

 
  return (
    <div className='w-full mt-[28vw] sm:h-[90vh] sm:mt-[5rem] flex flex-col justify-center gap-4 md:items-center md:text-center'>
      <div>
        <h2 className='MiniHead text-[3.8vw] font-medium uppercase sm:text-[1.5rem] lg:text-[1.6rem]'>AI + Product Design Agency / San Francisco</h2>
      </div>
      <div>
        <h1 className='text-[10vw] font-bold uppercase leading-tight sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.5rem]'> <span ref={MainText1} >UX-First Design Agency</span><br className='hidden lg:block'/> <span ref={MainText2} >for B2B + AI Companies</span></h1>
      </div>
      <div>
        <p className='MiniPara text-[3.8vw] sm:text-[1.5rem] lg:text-[1.8rem]'>We launch <span className='text-[#0DA34E]'>MVPs</span> redefine <span className='text-[#0DA34E]'>existing products</span> & continously dive into <span className='text-[#0DA34E]'><br className='hidden lg:block'/>new technologies</span> to deliver <span className='text-[#0DA34E]'>customer development</span></p>
      </div>
    </div>
  )
}

export default Hero
