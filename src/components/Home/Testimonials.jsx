import React from 'react'
import quote from "../../Assets/Group 47.svg"

export default function Testimonials() {
  return (
    <section className='flex flex-col gap-4 py-[100px] bg-[#FAFFF5]'>
    {/* Title */}
        <h2 className='text-4xl font-semibold text-center'>Testimonials</h2>

        {/* div for icon on the left and arrow buttons */}
        <div>
                <img src={quote} alt="" />

                <span>
                    <p></p>
                    <p></p>
                </span>
        </div>

        {/* div for testimonial content and cards */}
        <div className='w-[80%] mx-auto'>

            {/* testimonial content */}
            <div className='flex flex-col gap-3 max-w-[600px]'>
                <h3 className='text-3xl font-semibold mb-3'>Achieving Growth with Moshav Capital</h3>

                <p className='mb-4 leading-8'>Moshav Capital's services transformed our business, driving growth with tailored financing, secure warehousing, and effective marketing support. Highly recommended for agribusiness scaling and success.</p>

                <span className='flex flex-col gap-2'>
                    <p className='text-2xl font-medium'>Jessica Davis</p>
                    <p>Farmer</p>
                </span>
            </div>

            {/* testimonial cards. */}
            <div>

            </div>
        </div>
    </section>
  )
}
