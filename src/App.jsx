import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Card from "./components/Card";
import Mid from "./components/Mid";
import DataNav from "./components/DataNav";
import MainData from "./components/MainData";
import Button from "./components/button/button";
import DigitalProduct from "./components/DigitalProduct";
import UIUX from "./components/UIUX";
import ProductDesign from "./components/ProductDesign";
import ScrollEffect from "./components/scrollTrigger/ScrollEffect";
import AfterScroll from "./components/afterScroll/AfterScroll";
import AniGreenBlock from "./components/afterScroll/AniGreenBlock";
import Faqs from "./components/afterScroll/Faqs";
import Foot1 from "./components/footer/Foot1";
import LastBottom from "./components/footer/LastBottom";
import MainDataNavi from "./components/MainDataNavi";
const App = () => {
  // ye sra code become a client walay button ka hy
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
    let Head1 = content1.current.querySelector("h4");
    let Head2 = content2.current.querySelector("h4");

    splitText(Head1);
    splitText(Head2);
  }, []);

  function MouseEnter() {
    if (window.innerWidth >= 768) {
      let conIcon1 = content1.current.querySelector("i");
      let conSpan1 = content1.current.querySelectorAll("h4 span");
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

      let conSpan2 = content2.current.querySelectorAll("h4 span");
      let conIcon2 = content2.current.querySelector("i");

      // because of opacity zero which i give in content2 thats why my i am witing this animaition here to visible it
      gsap.to(content2.current, {
        opacity: 1,
      });
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
  }

  function MouseLeave() {
    let conIcon1 = content1.current.querySelector("i");
    let conSpan1 = content1.current.querySelectorAll("h4 span");
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

    let conSpan2 = content2.current.querySelectorAll("h4 span");
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
  // yaha buttoon wala code end hoagya



  return (
      <div >
        <Header />
        <main className="w-full h-full px-3 lg:px-10 ">
          <div className="w-full flex flex-col gap-[10vw] sm:gap-[0rem]">
            <Hero />
            <Video />
          </div>
          <div className=" w-full mt-[5rem] px-2 grid justify-center gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-[25rem_21rem]">
            <Card
              className="lg:col-span-2 lg:row-span-1 "
              head="$500M+"
              para="In funding secured for our clients"
              no="/01"
              video="./assests/card1.webm"
            />
            <Card
              className="lg:col-span-2"
              head="120+"
              para="Awards backing our excellence"
              no="/02"
              video="./assests/card2.webm"
            />
            <Card
              className="lg:col-span-2"
              head="2015"
              para="Founded, 9 years of experience"
              no="/03"
              video="./assests/card1.webm"
            />
            <Card
              className=" lg:col-span-3 "
              head="San Francisco"
              para="Based in heart of AI"
              no="/04"
            />
            <Card
              className="md:col-span-2 lg:col-span-3 "
              head="All-in-One Solution"
              para="From user-research to scalable design systmes we've got you covered "
              no="/05"
            />
          </div>
        </main>
        <Mid />
        {/* yaha sara sticky button wala kam hua wa hy  */}
        <div className="w-full h-full px-3 lg:px-10 bg-[#111111]">
          <DataNav />
          <div className="w-full flex flex-col lg:border-t-2 lg:border-zinc-800 lg:flex-row lg:gap-[1.4rem] mt-15 ">
            <MainDataNavi />
            <div className="w-full flex flex-col lg:flex-row lg:gap-[1rem] xl:gap-[2rem] ">
              <MainData
                head="Accern.Rhea design case study"
                para="Founded by accern a front runner in no code nlp rhea stand as a personalized AI Associate designed to streamline FinTech workflows."
                video="./assests/data1.mp4"
              />
              {/* ye button mobile sy ly kr md tk ki screens mn show hoga  */}
              <div className="buttonWraper w-full bg-[#111111] sticky top-[73%] mt-[-4rem] left-[0%] py-[3.5vw] sm:py-[1.5rem] md:py-[1.4rem] z-10 lg:hidden">
                <div className="flex justify-center items-center w-full bg-[#4F5BFF] rounded-full py-[3.5vw] sm:py-[1.5rem] md:py-[1.4rem]">
                  <h2 className="text-[3vw] sm:text-[1.3rem]  uppercase font-medium">
                    see all case study{" "}
                  </h2>
                  <i className="ri-arrow-right-up-line -1"></i>
                </div>
              </div>
              {/* yaha button end hogaya  */}
              <MainData
                head="Pika AI Design Case Study"
                para="Pika Ai is a new and better search engine that harnesses AI technology and hekos people find the most relevant and interesting information from across the web."
                video="./assests/data2.mp4"
              />
            </div>
          </div>

          {/*  yaha ye sra sticky wala kam end hogaya hy */}
          <div className="lg:flex gap-[1rem] relative ">
            <div className="sidebar w-[25%]">
              {/* ye hy wo become a client waala button jis ka code upper likha hy  */}
              <div
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                className="bg-[#0DA34E] sticky top-[25vw] mb-[3rem] w-full mt-[7.5rem] flex justify-center items-center rounded-full cursor-pointer hidden lg:flex lg:flex-col py-[0.8rem] overflow-hidden"
              >
                <div ref={content1} className="flex items-center gap-[0.5rem]">
                  <h4 className="text-[1.1rem]  font-medium uppercase ">
                    become a client{" "}
                  </h4>
                  <i className="pl-1 ri-arrow-right-up-line"></i>
                </div>
                <div
                  ref={content2}
                  className="flex items-center gap-[0.5rem] absolute bottom-[-18px] opacity-0"
                >
                  <h4 className="text-[1.1rem] font-medium uppercase ">
                    become a client{" "}
                  </h4>
                  <i className="pl-1 ri-arrow-right-up-line"></i>
                </div>
              </div>
              {/* yaha button end hogaya hy  */}
            </div>
            <div className="lg:w-full">
              <DigitalProduct />
              {/* ye sara ui effect wala section hy */}
              <div className="w-full flex flex-col items-center justify-center">
                <UIUX />
                <ProductDesign />
                {/* button hy ye  */}
                <div className="w-[85%] mt-[7vw] sm:mt-[2.6rem] md:mt-[3rem] bg-[#0DA34E] flex justify-center items-center py-[4vw] sm:py-[1.4rem] md:py-[1.3rem] rounded-full cursor-pointer lg:hidden">
                  <h4 className="text-[3.3vw] sm:text-[1.4rem] md:text-[1.3rem] font-medium uppercase ">
                    become a client{" "}
                    <i className="pl-1 ri-arrow-right-up-line"></i>
                  </h4>
                </div>
              </div>
            </div>
            {/* yha button end hogaya hy  */}
          </div>
          {/* Yaha sy scroll trigger walay part ka kam shuru ho rha hy  */}
        </div>
        <div className="w-full bg-white px-3 lg:px-10 mt-[9vw] sm:mt-[4rem] pt-[15vw] sm:pt-[5rem] pb-[24vw] sm:pb-[10rem] lg:pb-[5rem]">
          <ScrollEffect />
        </div>

        <div className="w-full px-3 lg:px-10 pt-[25vw] sm:pt-[9rem] ">
          <AfterScroll />
        </div>

        {/* ye hy green animated block wala section  */}
        <AniGreenBlock />
        <div className="w-full px-3 lg:px-10 ">
          <Faqs />
          <footer>
            <Foot1 />
            <LastBottom />
          </footer>
        </div>
      </div>
  );
};

export default App;
