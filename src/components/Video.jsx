import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FullScreenVideo from "./FullScreenVideo";

const Video = () => {
  let img = useRef();
  let video = useRef();
  let cursor = useRef();

  function mouseEnter() {
    img.current.style.opacity = "0";
    img.current.style.display = "none";
    video.current.currentTime = 0;
    video.current.play();
  }
  
  function mouseLeave() {
    img.current.style.display = "block";
    img.current.style.opacity = "1";
  }

  function mouseMove(dets) {
    if (window.innerWidth >= 1024) {
      gsap.to(cursor.current, {
        x: dets.clientX - 200,
        y: dets.clientY - 120,
      });
    }
  }

  const [ShowVideo, setShowVideo] = useState(false);
  function ClickHandler() {
    console.log(ShowVideo);
    setShowVideo(!ShowVideo);
  }
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
      className="relative  w-full  max-h-[90vh] h-[95vw]  mt-[5vw] lg:w-[90%] md:rounded-[2.8rem] overflow-hidden mx-auto"
    >
      {ShowVideo && <FullScreenVideo onClose={() => setShowVideo(false)}/>}
      <div
        ref={cursor}
        className="pointer-events-none absolute top-0  left-0 h-[32vw] w-[32vw] sm:w-[11rem] sm:h-[11rem] sm:px-[2.7rem] sm:py-[1rem] md:w-[12rem]  md:h-[12rem] flex flex-col items-start px-[7vw] gap-[3vw] md:gap-[1rem] justify-center rounded-full bg-[#0DA34E] z-3 "
      >
        <i className="ri-arrow-right-up-line text-[4vw] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem]"></i>
        <h4 className=" text-white text-[3vw] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] font-bold  uppercase whitespace-nowrap">
          Watch our <br /> showreel
        </h4>
      </div>
      <img
        ref={img}
        src="./assests/main-thumbnail.webp"
        alt="main-thumbnail"
        className="h-full w-full cursor-pointer  object-cover absolute top-0 left-0 z-4"
      />
      <video
        ref={video}
        onClick={ClickHandler}
        src="./assests/front-video.mp4"
        autoPlay
        muted
        loop
        className="h-full sm:w-full  object-cover relative z-2 cursor-pointer"
      />
    </div>
  );
};

export default Video;
