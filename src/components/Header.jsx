import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MenuItems from "./Menu/MenuItems";
import { useGSAP } from "@gsap/react";
const Header = () => {
  let ItemsBox = useRef();
// yaha sy sra lg screen ky lie code hy jo items list open krta hy
  function EnterHandler(e) {
    let spans = e.currentTarget.querySelectorAll(".Inner-Span");
    let tl = gsap.timeline();


    tl.to(ItemsBox.current, {
      height: "auto",
      opacity: 1,
      duration: 0.3,
    } ,"a");
    tl.from(spans,{
      y: "100%",
      duration: 0.5,
    },"a")

  }
  function LeaveHandler() {

    let tl = gsap.timeline();
    tl.to(ItemsBox.current, {
      height: "0px",
      opacity: 0,
      duration: 0.3,
    });

  }
//  yaha items list wala sara code end hogaya hy 


// yaha sy menu walay elemnt ka code likha hua hy 
  let menuBtn = useRef();
  let Menu = useRef();

  const [Switch , setSwitch] = useState(false);
  function menuClick(){
    let SwitchBtn = !Switch;
    setSwitch(SwitchBtn);
    if(SwitchBtn){
      gsap.to(Menu.current,{
        top: "0%",
        display: "block",
      })
    }
    else{
      gsap.to(Menu.current,{
        top: "100%",
        display: "hidden",
      })
      WhatItem.current.style.display ="flex";
    WhatMenu.current.style.display ="none"; 
    }
  }


  let WhatItem = useRef();
  let WhatMenu = useRef();
  function FirstMenuBtn(){
     WhatItem.current.style.display ="none";
     WhatMenu.current.style.display ="flex"; 
  }

  function SecondMenuBtn(){
    WhatItem.current.style.display ="flex";
    WhatMenu.current.style.display ="none"; 
  }

  let head = useRef();


  useGSAP(()=>{
    gsap.from(head.current,{
      opacity: 0,
      ease: "power3.in",
    })

    gsap.to(head.current,{
      borderColor: "rgba(255, 255, 255, 0.3)",
      paddingTop: "8px",
      paddingBottom: "8px",
      duration: 0.1,
      scrollTrigger:{
        trigger: head.current,
        start: "top top",
        end:"+=10",
        scrub:0.1,
        toggleActions: "play reverse play reverse",
      }
    })
  },[])

  return (
    <>
    <header ref={head} className="transform -translate-x-1/2 max-w-[1500px] flex bg-[#111111] border-b-2 border-transparent justify-between items-center w-full py-[15px] px-3 lg:px-10 fixed top-0 left-1/2  z-900">
      <div id="logo">
        <h3 className="text-[6.3vw] font-bold uppercase sm:text-[2rem] lg:text-[2.2rem]">
          Lazarev.
        </h3>
      </div>
      <nav className="flex gap-2">
        <div
          id="icons "
          className="cursor-pointer bg-[#0DA34E] h-[9vw] w-[9vw] rounded-full flex justify-center items-center sm:h-[2.4rem] sm:w-[2.4rem] lg:hidden"
        >
          <i className="ri-arrow-right-up-line cursor-pointer text-[0px] scale-0 transform transition-transform duration-500 "></i>
          <i className="ri-pencil-fill cursor-pointer text-[4.5vw] sm:text-[1.4rem] "></i>
        </div>
        <div onClick={menuClick} ref={menuBtn} className="menu lg:hidden cursor-pointer bg-[#3D3D3D] h-[9vw] w-[9vw] rounded-full flex justify-center items-center sm:h-[2.4rem] sm:w-[2.4rem]">
          <i className="ri-menu-line text-[4.5vw] cursor-pointer sm:text-[1.4rem]"></i>
        </div>
        <div className="Second-nav hidden lg:flex  gap-10">
          <ul className="flex items-center gap-10  text-[1.1rem] font-medium uppercase">
            <li
              onMouseEnter={EnterHandler}
              onMouseLeave={LeaveHandler}
              className="cursor-pointer relative"
            >
              What we do{" "}
              <i className=" ml-2 text-[1.2rem] ri-arrow-down-s-line"></i>
              <div
                ref={ItemsBox}
                className="absolute top-[100%] left-0 w-full h-[0px] opacity-0 overflow-hidden bg-[#FFFFFF] rounded-lg text-[0.92rem] text-black px-4 pt-1 pb-1 cursor-default hidden lg:block"
              >
                <ul className="flex flex-col lg:py-[0.5rem] lg:gap-[0.3rem]  border-b border-zinc-400  capitalize">
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Al & ML
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Fintech
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Web3
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      EdTEch
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Logistics
                    </span>
                  </li>
                </ul>
                <ul className="flex flex-col lg:py-[0.5rem] lg:gap-[0.3rem] border-b border-zinc-400  capitalize">
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Heathcare
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block absolute top-[100%] left-0">
                      Enterprices
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Real Estate
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Ad.Maritech
                    </span>
                  </li>
                </ul>
                <ul className="flex flex-col lg:py-[0.5rem] lg:gap-[0.3rem] capitalize">
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Media.Content
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Travel & Event
                    </span>
                  </li>
                  <li className="cursor-pointer relative w-fit hover:text-[#0DA34E] transition-all duration-150 overflow-hidden lg:text-[1rem]">
                    <span className="Inner-Span inline-block">
                      Websites
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer">cases</li>
            <li className="cursor-pointer">Out comes</li>
            <li className="cursor-pointer">news</li>
          </ul>
          <div className="cursor-pointer flex items-center gap-4 rounded-full px-[0.9rem] py-[0.5rem] relative group ">
            <div className="background absolute top-0 right-0 bg-[#0DA34E] w-full h-full rounded-full group-hover:w-[44px] transition-all duration-200 ease-in-out"></div>
            <h3 className="cursor-pointer relative z-2 text-[1.1rem] font-medium uppercase group-hover:text-[#0DA34E] group-hover:pr-[8px] transition-all duration-300 flex gap-4">
              Let's Talk
            </h3>
            <i className="ri-pencil-fill cursor-pointer relative z-2 text-[1.1rem]"></i>
          </div>
        </div>
      </nav>
    </header>

    {/* ye hy menu */}
        <div ref={Menu} className="w-full h-screen flex flex-col justify-between pt-[3vw] sm:pt-[3rem] pb-3 sm:pb-[0.1rem] bg-[#111111] px-3 fixed top-[100%] hidden z-99">
          <div className="Wrapper-Div mt-[10vw] sm:mt-[2rem] h-[80%] flex items-center"> 
            <div ref={WhatItem} className="flex flex-col w-full gap-[5vw] sm:gap-[3rem]">
              <h4 onClick={FirstMenuBtn} className="text-[7vw] sm:text-[2.5rem] font-bold uppercase cursor-pointer border-b-2 border-zinc-600  flex justify-between">what we do <i className="ri-arrow-right-s-line"></i></h4>
              <h4 className="text-[7vw] sm:text-[2.5rem] font-bold uppercase cursor-pointer border-b-2 border-zinc-600 ">cases</h4>
              <h4 className="text-[7vw] sm:text-[2.5rem] font-bold uppercase cursor-pointer border-b-2 border-zinc-600 ">outcomes</h4>
              <h4 className="text-[7vw] sm:text-[2.5rem] font-bold uppercase cursor-pointer border-b-2 border-zinc-600 ">news</h4>
            </div>

            <div ref={WhatMenu} className="hidden  flex-col gap-[2vw] sm:gap-[0rem] w-full">
              <h4 onClick={SecondMenuBtn} className="uppercase text-[6.5vw] sm:text-[2.5rem] font-bold gap-[0.5rem] flex cursor-pointer"> <i className="ri-arrow-left-s-line"></i>What we do</h4>
              <ul className="w-full sm:mt-[2rem]">
                <MenuItems val={"AI & ML"} />
                <MenuItems val={"Fintech"} />
                <MenuItems val={"Web3"} />
                <MenuItems val={"editech"} />
                <MenuItems val={"Logistics"} />
                <MenuItems val={"Healthcare"} />
                <MenuItems val={"Enterprise"} />
                <MenuItems val={"Real Estate"} />
                <MenuItems val={"Legal Tech"} />

              </ul>
            </div>
          </div>
          <div className="Button cursor-pointer w-full bg-[#0DA34E] flex justify-center items-center rounded-full py-[2.7vw] sm:mt-[0rem] sm:py-[1rem]">
            <h5 className="text-[3.3vw] sm:text-[1.2rem] font-bold uppercase ">Let's talk </h5>
          </div>
        </div>
    {/* yaha menu end hogaya hy  */}
    </>
  );
};

export default Header;
