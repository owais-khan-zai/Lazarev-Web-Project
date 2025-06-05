import React, { useRef  , useEffect} from 'react'
import gsap from 'gsap'
const MainDataNavi = () => {


  let content1 = useRef();
  let content2 = useRef();
  
  function splitText(ref) {
    let sampleHead = ref.innerText;
    ref.innerHTML = "";
    sampleHead.split("").forEach((char) => {
      let span = document.createElement("span");
      span.innerText = char;
      span.style.display = "inline-block";
      span.innerHTML = char === " " ? "&nbsp;" : char; 
      ref.appendChild(span);
    });
  }

  useEffect(() => {
      let Head1 = content1.current.querySelector("h2");
      let Head2 = content2.current.querySelector("h2");
  
      splitText(Head1);
      splitText(Head2);
    }, []);


    function MouseEnter() {
      let conIcon1 = content1.current.querySelector("i");
      let conSpan1 = content1.current.querySelectorAll("h2 span");
      let tl = gsap.timeline();

      tl.to(
        conSpan1,
        {
          y: "-30px",
          opacity: 0,
          duration: 0.3,
          stagger: 0.01,
          ease: "power2.out",
        },
        "together"
      );

      tl.to(
        conIcon1,
        {
          y: "-30px",
          opacity: 0,
          duration: 0.3,
          scale: 0,
          ease: "power2.out",
        },
        "together"
      );

      let conSpan2 = content2.current.querySelectorAll("h2 span");
      let conIcon2 = content2.current.querySelector("i");

      gsap.to(content2.current,{
        opacity:1,
      })
      let tl2 = gsap.timeline();
      tl2.to(
        conSpan2,
        {
          opacity: 1,
          y: "-30px",
          duration: 0.3,
          stagger: 0.01,
          ease: "power2.out",
        },
        "together2"
      );

      tl2.to(
        conIcon2,
        {
          opacity: 1,
          y: "-30px",
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        },
        "together2"
      );
    }

  function MouseLeave() {
    let conIcon1 = content1.current.querySelector("i");
    let conSpan1 = content1.current.querySelectorAll("h2 span");
    let tl = gsap.timeline();

    tl.to(
      conSpan1,
      {
        y: "0px",
        opacity: 1,
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      },
      "together"
    );

    tl.to(
      conIcon1,
      {
        y: "0px",
        opacity: 1,
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      },
      "together"
    );

    let conSpan2 = content2.current.querySelectorAll("h2 span");
    let conIcon2 = content2.current.querySelector("i");

    let tl2 = gsap.timeline();

    tl2.to(
      conSpan2,
      {
        opacity: 0,
        y: "-20px",
        duration: 0.3,
        stagger: 0.01,
        ease: "power2.out",
      },
      "together2"
    );

    tl2.to(
      conIcon2,
      {
        opacity: 0,
        y: "-20px",
        duration: 0.3,
        scale: 0,
        ease: "power2.out",
      },
      "together2"
    );
  }

  return (
    <div className='hidden lg:flex flex-col gap-[0.8rem] w-[25%] mt-[3rem] relative'>
      <div className='text-[1rem]  xl:text-[1.2rem] flex justify-between cursor-pointer border-b-2 border-zinc-700 pb-1 text-[#0DA34E]'>
        <h6>AI</h6>
        <h6>2</h6>
      </div>
      <div className='text-[1rem] xl:text-[1.2rem]  flex justify-between cursor-pointer border-b-2 border-zinc-700 pb-1'>
        <h6>Web3</h6>
        <h6>3</h6>
      </div>
      <div className='text-[1rem] xl:text-[1.2rem]  flex justify-between cursor-pointer border-b-2 border-zinc-700 pb-1'>
        <h6>FinTech</h6>
        <h6>4</h6>
      </div>
      {/* yaha button hy blue wala  */}
              <div onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave} className='flex justify-center items-center w-full bg-[#4F5BFF] rounded-full py-[0.8rem] mt-[0.5rem] flex flex-col sticky top-[30%] overflow-hidden cursor-pointer'>
                <div ref={content1} className='flex gap-[0.5rem]'>
                  <h2 className='text-[1rem] uppercase font-medium xl:text-[1.1rem]'>see all case study </h2>
                  <i className="ri-arrow-right-up-line -1"></i>
                </div>
                <div ref={content2} className='absolute bottom-[-16px] flex gap-[0.5rem] opacity-0'>
                  <h2 className='text-[1rem] uppercase font-medium xl:text-[1.1rem]'>see all case study </h2>
                  <i className="ri-arrow-right-up-line -1"></i>
                </div>
              </div>
    </div>
  )
}

export default MainDataNavi
