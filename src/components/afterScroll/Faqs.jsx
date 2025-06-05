import React from 'react'
import Question from './Question'
const Faqs = () => {
  return (
    <div> 
        <div className='lg:pl-[15vw] w-full  md:mb-[6rem] '> 
          <h1 className='text-[11vw] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.2rem] font-bold mt-[27vw] sm:mt-[10rem] lg:w-[50rem] leading-none'>Frequently Asked Questions</h1> 
        </div>
        <Question head='How can your digital product design agency help my startup?' no='/00-1' para='We are here to support startup at every stage ofi its journey from the inital pre seed phases to the later Series D and beyond. Whether its short term fast paced side prociding the guidance you need. Our product designers deliver custom tailored design services based on your business objectives.'/>
        <Question head='Do you offer only digital product design services?' no='/00-2' para='We are here to support startup at every stage ofi its journey from the inital pre seed phases to the later Series D and beyond. Whether its short term fast paced side prociding the guidance you need. Our product designers deliver custom tailored design services based on your business objectives.'/>
        <Question head='How long does the entire design process take?' no='/00-3' para='We are here to support startup at every stage ofi its journey from the inital pre seed phases to the later Series D and beyond. Whether its short term fast paced side prociding the guidance you need. Our product designers deliver custom tailored design services based on your business objectives.'/>
        <Question head='How much do you charge for digital product design services?' no='/00-4' para='We are here to support startup at every stage ofi its journey from the inital pre seed phases to the later Series D and beyond. Whether its short term fast paced side prociding the guidance you need. Our product designers deliver custom tailored design services based on your business objectives.'/>
    </div>
  )
}

export default Faqs
