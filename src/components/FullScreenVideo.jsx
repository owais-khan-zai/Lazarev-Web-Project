import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";
import video from '../assets/back-video.mp4'

const FullScreenVideo = ({onClose}) => {
  let animate = useRef();

  useLayoutEffect(()=>{
    requestAnimationFrame(()=>{
      gsap.to(animate.current, {
        scaleX: 1,
        scaleY: 1,
        translateY: "0px",
        opacity: 1,
        ease: "slow(0.7,0.7,false)",
      });
    })

  },[])

  function Handler() {
    gsap.to(animate.current, {
      opacity: 0,
      scaleY: 0,
      translateY: "150px",  
      scaleX: 0.4,
      onComplete:()=>{
        onClose();
      },
    });
  }
  return (
    <div
      ref={animate}
      onClick={Handler}
      className="w-full h-full bg-[#111111] transform scale-x-[0.4] scale-y-[0] translate-y-[150px] flex justify-center items-center fixed top-0 left-0 z-50"
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full "
      />
    </div>
  );
};

export default FullScreenVideo;
