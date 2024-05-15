import React from 'react'
import img from "../../Assets/Group 41oscil.png"

const AboutHero = () => {
  return (
    <section className='landing-page-about h-[80vh] w-full pt-36 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-[90%] mx-auto'>
<h2 className='font-semibold text-6xl text-[#1E772C] '>We are an economic</h2>
<h2 className='font-semibold text-6xl mt-3 text-[#1E772C]'>empowerment platform</h2>
<h2 className='font-semibold mt-3 text-6xl'>providing Agribusiness MSMEs</h2>
<h2 className='font-semibold mt-3 text-6xl'>with innovative financial services.</h2>
<p className='font-medium text-2xl w-[60%] mt-7'>We offer financial intermediary solutions, commodity warehousing, collateral management, cluster marketing support, brokerage services, and infrastructure-as-a-service offerings tailored to enhance growth and sustainability in agribusinesses.</p>
<button className='bg-[#1E772C] w-[230px] mx-auto mt-14 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
</section>
    </section>
  )
}

export default AboutHero