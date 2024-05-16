import React from 'react'
import img from "../../Assets/about-us-vision.jpeg"

const Vision = () => {
  return (
    <section className='w-full' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <section className='w-full py-20 h-full bg-[#000000B2] flex flex-col justify-center items-center'>
<h2 className='font-semibold text-2xl sm:text-sm text-white text-center'>Our Vision</h2>
<p className='text-white text-lg sm:text-base sm:w-[80%] w-[70%] mx-auto text-center mt-8'>
Transforming financial barriers into bridges of opportunity. Our vision is a world where every individual and enterprise has access to the knowledge, tools and resources needed to uplift themselves and their communities seamlessly, irrespective of their financial standing.
</p>
<div className='w-[2px] h-[150px] sm:w-[1px] sm:h-[47px] bg-white mt-5'></div>
<div className='w-[15px] h-[15px] bg-white rounded-full my-7'></div>
<div className='w-[2px] h-[150px] sm:w-[1px] sm:h-[47px] bg-white mb-5'></div>
<h2 className='font-semibold text-2xl sm:text-sm text-white text-center'>Our Mission</h2>
<p className='text-white text-lg sm:text-base sm:w-[80%] w-[70%] mx-auto text-center mt-8'>
We are steadfastly committed to being the beacon of hope for the underserved, ensuring that every dream, big or small, is nurtured into thriving businesses that shape our collective future.
</p>
        </section>
    </section>
  )
}

export default Vision