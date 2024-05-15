
import React from 'react'
import img from "../../Assets/moshav-questions.jpeg"

const DoYouHaveAnyQuestions = () => {
  return (
    <section  className='w-full ' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <section className='w-full py-20 bg-[#000000B2] justify-center  flex flex-col'>
<h2 className='text-white font-bold text-6xl text-center'>Do you have any questions?</h2>
<p className='text-white w-[50%] text-2xl mx-auto text-center mt-5'>
let's embark on a transformative partnership that paves the way for unparalleled success. Discover how our exceptional team can elevate your business to new heights.
</p>
<button className='bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>contact us</button>
        </section>
    </section>
  )
}

export default DoYouHaveAnyQuestions