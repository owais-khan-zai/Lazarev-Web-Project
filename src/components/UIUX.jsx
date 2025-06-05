import React, { useRef, useState } from "react";
import BlockData from "./Blocks/BlockData";
import ItemsMenu from "./itemsMenu/ItemsMenu";
import gsap from "gsap";

const UIUX = () => {
  let slide = useRef();
  let btnIcon = useRef();
  let Border = useRef();

  const [Toggle, setToggle] = useState(false);
  const rotation = Toggle ? 0 : 180;

  function ClickHandler() {
    gsap.to(btnIcon.current, {
      rotate: rotation,
    });

    if (Toggle) {
      gsap.to(slide.current, {
        height: "0px",
        duration: 0.3,
      });
      gsap.to(Border.current, {
        borderTopColor: "#3f3f46",
        duration: 0.2,
      });
      Border.current.style.borderTopColor = "";
    } else {
      gsap.to(slide.current, {
        height: "auto",
      });
      gsap.to(Border.current, {
        borderTopColor: "#d4d4d8",
        duration: 0.2,
      });
    }

    setToggle(!Toggle);
  }

  return (
    <div className="w-full mt-[22vw] sm:mt-[8.5rem] md:mt-[8rem] lg:mt-[6rem]">
      <div
        ref={Border}
        className="w-full flex justify-between items-center border-t-2 border-zinc-700 pt-[5vw] sm:pt-[1.8rem]"
      >
        <h2 className="text-[8vw] font-bold sm:text-[3.3rem] md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.4rem]">
          UI/UX Design
        </h2>
        <div
          onClick={ClickHandler}
          className="cursor-pointer flex justify-center items-center w-[8vw] h-[8vw] md:w-[3.2rem] md:h-[3.2rem] lg:w-[2.7rem] lg:h-[2.7rem] sm:w-[3rem] sm:h-[3rem] bg-transparent border-2 border-zinc-700 rounded-full "
        >
          <i
            ref={btnIcon}
            className="ri-arrow-down-s-line text-[4vw] sm:text-[1.5rem] md:text-[1.55rem] lg:text-[1.4rem] text-zinc-300"
          ></i>
        </div>
      </div>
      <div className="flex  flex-wrap mt-[6vw] sm:mt-[2.5rem]">
        <BlockData value="webflow design agency" />
        <BlockData value="branding agency" />
        <BlockData value="logo design agency" />
        <BlockData value="ai consulting services" />
        <BlockData value="hire ai designers" />
        <BlockData value="web design consultance" />
        <BlockData value="startuo web design" />
        <BlockData value="b2b design agency" />
        <BlockData value="website redesign" />
        <BlockData value="ui design team" />
        <BlockData value="ux audit" />
      </div>
      <div
        ref={slide}
        className="mt-[12vw] sm:mt-[4rem] w-full  h-[0px] overflow-hidden"
      >
        <ItemsMenu
          head="AI consulting Services"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="Hire AI designers"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="Web Design Consultancy"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="responsive web design"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="startup web design"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="B2B design agency"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="UX design Team"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="UX/UI Design"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="Webflow Design "
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="Branding Agency"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
        <ItemsMenu
          head="Logo Design"
          para="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We have helped clients increase traffic and drive conversions by 50% and beyond."
        />
      </div>
    </div>
  );
};

export default UIUX;
