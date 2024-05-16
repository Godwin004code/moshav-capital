import React from 'react'
import img from "../../Assets/Group 41oscil.png"


const AboutHero = () => {
  return (
    <section className='landing-page-about h-[80vh] w-full pt-36 sm:pt-7 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-[90%] mx-auto'>
<h2 className='font-semibold text-5xl sm:text-[32px] text-[#1E772C] '>We are an economic</h2>
<h2 className='font-semibold text-5xl sm:text-[32px] mt-3 text-[#1E772C]'>empowerment <span className='sm:hidden'>platform</span></h2>
<h2 className='font-semibold mt-3 sm:text-[32px] text-5xl hidden sm:block'><span className='text-[#1E772C]'>platform</span> providing</h2>
<h2 className='font-semibold mt-3 sm:text-[32px] text-5xl'><span className='sm:hidden'>providing</span> Agribusiness MSMEs</h2>
<h2 className='font-semibold mt-3 sm:text-[32px] text-5xl'>with innovative financial services.</h2>
<p className='font-medium text-xl sm:text-base sm:w-[90%] w-[60%] mt-7'>We offer financial intermediary solutions, commodity warehousing, collateral management, cluster marketing support, brokerage services, and infrastructure-as-a-service offerings tailored to enhance growth and sustainability in agribusinesses.</p>
<button className='bg-[#1E772C] w-[230px] mx-auto mt-14 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
</section>
    </section>
  )
}

export default AboutHero