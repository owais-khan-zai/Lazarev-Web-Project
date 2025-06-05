import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// scroll trigger wali line likhni hy bs
const BlackScrollBox = (props) => {
  let box = useRef();

  let transVal = props.trans;

  let transValNumber = Number(props.trans.replace("%", ""));

  useEffect(() => {
    gsap.to(box.current, {
      translateX: `${transValNumber + 10}%`,
      scrollTrigger: {
        trigger: box.current,
        start: "top 70%",
        end: "top 10%",
        scrub: true,
      },
    });
  }, [props.trans]);

  return (
    <div
      ref={box}
      className={`bg-[#111111] text-white w-[65%] sm:w-[25rem] md:w-[30rem] lg:w-[17.5rem] xl:w-[85%] flex items-center gap-[2vw] sm:gap-[0.9rem] sm:py-[0.8rem] lg:py-[0.9rem] lg:px-[0.8rem] lg:gap-[0.5rem] xl:gap-[0.8rem] xl:py-[0.9rem] sm:px-[0.5rem] py-[2vw] px-[2vw] rounded-full cursor-pointer translate-x-[${transVal}]`}
    >
      <div className="w-[6.5vw] h-[6.5vw] bg-zinc-700 rounded-full flex items-center justify-center sm:w-[2.5rem] sm:h-[2.5rem] lg:w-[2rem] lg:h-[2rem]">
        <h4 className="text-[3.2vw] sm:text-[1.2rem] capitalize lg:text-[1rem] xl:text-[1.1rem]">
          {props.no}
        </h4>
      </div>
      <h4 className="text-[3.3vw] sm:text-[1.4rem] capitalize lg:text-[1.15rem] xl:text-[1.2rem]">
        {props.value}
      </h4>
    </div>
  );
};

export default BlackScrollBox;
