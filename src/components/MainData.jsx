import React, { useRef } from "react";
import gsap from "gsap";

const MainData = (props) => {
  let video = useRef();

  function EnterHandler() {
    video.current.play();
    video.current.currentTime = 0;
    
    if(window.innerWidth >=1024 && window.innerWidth <1280){
      gsap.to(video.current,{
        scaleY: 1.6,
        duration: 0.3,
      })
    }
    else if(window.innerWidth >= 1280){
      gsap.to(video.current,{
        scaleY: 1.4,
        duration: 0.3,
      })
    }
    else if (window.innerWidth <=1024 && window.innerWidth >= 700){
      gsap.to(video.current,{
        scaleY: 1.2,
        duration: 0.3,
      })
    }
    else if (window.innerWidth <700 && window.innerWidth >=250){
      gsap.to(video.current,{
        scaleY: 1.3,
        duration: 0.3,
      })
    }
    else if (window.innerWidth < 250){
      gsap.to(video.current,{
        scaleY: 1.32,
        duration: 0.3,
      })
    }
  }
  function LeaveHandler() {
    video.current.pause();
    video.current.currentTime = 0;
    gsap.to(video.current,{
      scaleY: 1,
      duration: 0.3,
    })
  }
  return (
    <div className="w-full py-[7vw] sm:py-[2.4rem] flex flex-col gap-[3vw] lg:gap-[0rem] lg:pt-[2.4rem] lg:pb-0 sm:gap-[0.8rem] border-t-2 border-zinc-700 lg:border-none">
      <div className="flex flex-col gap-[6vw] sm:gap-[3rem] lg:justify-between lg:h-[15rem] lg:gap-[0rem] xl:h-[16rem] ">
        <h2 className="text-[6.2vw] font-bold capitalize sm:text-[2.5rem] md:text-[2.6rem lg:text-[2rem] xl:text-[2.5rem] ">
          {props.head}
        </h2>
        <p className="text-[4.5vw] font-normal leading-tight mt-2 sm:text-[1.4rem] md:text-[1.47rem] lg:text-[1.15rem] xl:text-[1.3rem]">
          {props.para}
        </p>
      </div>
      <video
        ref={video}
        onMouseEnter={EnterHandler}
        onMouseLeave={LeaveHandler}
        loop
        muted
        className="h-[80vw] cursor-pointer origin-bottom lg:h-[13rem] xl:h-[19rem] sm:h-[25rem] w-[100%] object-cover lg:mt-[1.2rem]"
        src={props.video}
      />
    </div>
  );
};

export default MainData;
