import React from 'react'
import img from "../../Assets/Group 41oscil.png"

const ServicesHero = () => {
  return (
    <section className='landing-page-about h-[70vh] w-full pt-36 sm:pt-10 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-[90%] mx-auto text-center'>
<h2 className='font-bold sm:font-semibold text-5xl sm:text-3xl text-[#1E772C] sm:hidden'><span className='font-semibold'>Empowering</span> Micro, Small & Medium </h2>
<h2 className='sm:hidden font-semibold text-5xl sm:text-3xl mt-3 text-[#1E772C]'>Enterprises (MSMEs) <span className='text-black'>by driving</span> innovation</h2>
<h2 className=' sm:hidden font-semibold mt-3 text-5xl sm:text-3xl text-[#1E772C]'>and sustainability <span className='text-black'>in the Agribusiness Sector</span></h2>
<h2 className='font-bold sm:font-semibold w-[90%] mx-auto text-5xl sm:text-3xl text-[#1E772C] hidden sm:block'>
Empowering Micro, Small & Medium Enterprises (MSMEs) <span className='text-black'>by driving</span> innovation and sustainability <span className='text-black'>in the Agribusiness Sector</span>
</h2>
<p className='font-medium text-lg w-[70%] sm:w-[95%] mx-auto mt-7'>Explore Moshav Capital's comprehensive suite of consulting services crafted to propel your agribusiness to new heights. From strategic planning and operational optimization to targeted marketing strategies and financial guidance, we provide tailored solutions designed to address your specific challenges and drive sustainable growth.</p>
</section>
    </section>
  )
}

export default ServicesHero