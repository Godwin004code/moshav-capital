
import React from 'react'
import img from "../../Assets/moshav-questions.jpeg"

const DoYouHaveAnyQuestions = () => {
  return (
    <section  className='w-full ' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <section className='w-full py-20 bg-[#000000B2] sm:bg-[#000000E5] justify-center  flex flex-col'>
<h2 className='text-white font-bold text-4xl sm:text-2xl text-center sm:px-10'>Do You Have Any Questions?</h2>
<p className='text-white w-[50%] sm:w-[80%] text-lg sm:text-base mx-auto text-center mt-8'>
let's embark on a transformative partnership that paves the way for unparalleled success. Discover how our exceptional team can elevate your business to new heights.
</p>
<button className='bg-[#1E772C] w-[230px] sm:w-[130px] sm:h-[50px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>contact us</button>
        </section>
    </section>
  )
}

export default DoYouHaveAnyQuestions