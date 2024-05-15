import React from 'react'
import img from "../../Assets/Group 41oscil.png"

const ServicesHero = () => {
  return (
    <section className='landing-page-about h-[80vh] w-full pt-36 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-[90%] mx-auto text-center'>
<h2 className='font-bold text-6xl text-[#1E772C] '><span className='font-semibold'>Empowering</span> Micro, Small & Medium </h2>
<h2 className='font-semibold text-6xl mt-3 text-[#1E772C]'>Enterprises (MSMEs) <span className='text-black'>by driving</span> innovation</h2>
<h2 className='font-semibold mt-3 text-6xl text-[#1E772C]'>and sustainability <span className='text-black'>in the Agribusiness Sector</span></h2>
<p className='font-medium text-2xl w-[70%] mx-auto mt-7'>Explore Moshav Capital's comprehensive suite of consulting services crafted to propel your agribusiness to new heights. From strategic planning and operational optimization to targeted marketing strategies and financial guidance, we provide tailored solutions designed to address your specific challenges and drive sustainable growth.</p>
<button className='bg-[#1E772C] w-[230px] mx-auto mt-14 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
</section>
    </section>
  )
}

export default ServicesHero