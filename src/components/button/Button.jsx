import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Button = ({ content, color, textColor }) => {
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
    let Head1 = content1.current.querySelector("h3");
    let Head2 = content2.current.querySelector("h3");

    splitText(Head1);
    splitText(Head2);
  }, []);

  function MouseEnter() {
    if (window.innerWidth >= 768) {
      let conIcon1 = content1.current.querySelector("i");
      let conSpan1 = content1.current.querySelectorAll("h3 span");
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

      let conSpan2 = content2.current.querySelectorAll("h3 span");
      let conIcon2 = content2.current.querySelector("i");


      // because of opacity zero which i give in content2 thats why my i am witing this animaition here to visible it
      gsap.to(content2.current,{
        opacity:1,
      })
      let tl2 = gsap.timeline();
      tl2.to(
        conSpan2,
        {
          opacity: 1,
          y: "-38px",
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
          y: "-38px",
          duration: 0.3,
          scale: 1,
          ease: "power2.out",
        },
        "together2"
      );
    }
  }

  function MouseLeave() {
    let conIcon1 = content1.current.querySelector("i");
    let conSpan1 = content1.current.querySelectorAll("h3 span");
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

    let conSpan2 = content2.current.querySelectorAll("h3 span");
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
    <div
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
      className={`flex flex-col gap-[1.5vw] sm:gap-[0.9rem] items-center justify-center bg-${color} text-${textColor} uppercase font-bold w-[98%] py-[4.5vw] sm:py-[1.3rem] sm:w-[85%] md:w-[30rem] md:py-[18px] lg:w-[32rem] overflow-hidden xl:w-[32rem] lg:py-[21px] rounded-full cursor-pointer relative`}
    >
      <div
        ref={content1}
        className="flex gap-[1.5vw] sm:gap-[0.9rem] "
      >
        <h3 className="text-[3.3vw] sm:text-[1.3rem] whitespace-nowrap md:text-[1.2rem] lg:text-[1.2rem]">
          {content}
        </h3>
        <i className="ri-arrow-right-up-line text-[3.3vw] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.2rem]"></i>
      </div>

      <div
        ref={content2}
        className="flex gap-[1.5vw] sm:gap-[0.9rem] absolute bottom-[-7%] opacity-0 md:bottom-[-20px]  lg:bottom-[-15px]"
      >
        <h3 className="text-[3.3vw] relative  sm:text-[1.3rem] whitespace-nowrap md:text-[1.2rem] lg:text-[1.2rem]">
          {content}
        </h3>
        <i className="ri-arrow-right-up-line opacity-0 relative text-[3.3vw] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.2rem]"></i>
      </div>
    </div>
  );
};

export default Button;
