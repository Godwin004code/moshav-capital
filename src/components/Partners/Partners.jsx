import React from 'react'
import Nav from '../Global/AboutNav'
import img from "../../Assets/Group 41oscil.png"
import bg from "../../Assets/a28b265d41d60fdf0b977554fccb7787.jpeg"
import Footer from '../Global/Footer'
import Newsletter from '../Global/Newsletter'
import bg2 from "../../Assets/c252da38ffbed1e97cf3f8cc6da7fe07.jpeg"
import partOne from "../../Assets/Afreximbank-logo 1.svg"
import partTwo from "../../Assets/african-development-bank-group-logo-vector_c91e91ee77e8009313ee809ab792c4e9 1.svg"
import partThree from "../../Assets/bank-of-agriculture-BOA 2.svg"
import partFour from "../../Assets/boi-header 1.svg"
import partFive from "../../Assets/nbcc 1.svg"
import partSix from "../../Assets/logo-NEPC-left-res2-1 1.svg"

const Partners = () => {
  return (
    <>
    <Nav />
    <section className='landing-page-about h-[70vh] w-full pt-28 sm:pt-10 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-[90%] mx-auto h-[100%]' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='bg-[#00000080] w-full h-full flex flex-col text-center'>
<h2 className='text-[#fff] font-semibold text-6xl sm:text-4xl sm:font-medium text-center mt-28 sm:mt-20'>Partners</h2>
<p className='w-[60%] mx-auto text-white text-lg sm:text-base sm:w-[80%] font-medium text-center mt-10'>Discover the power of collaboration with Moshav Capital's partner program. Join us to leverage synergies, access new markets, and drive sustainable growth in the agribusiness sector. Together, we can innovate, compete, and thrive in a dynamic marketplace. Partner with Moshav Capital and unlock new possibilities for your business journey</p>
</section>
</section>
    </section>
    <section className='w-[90%] mx-auto py-20'>
<h2 className='text-center font-medium text-4xl sm:text-2xl sm:w-[70%] sm:mx-auto mb-10'>
  Meet Our Current Partners
</h2>
<section className='flex sm:flex-col  w-full'>
<div className='w-full  flex justify-center items-center py-10 h-[334px]' style={{border: '1px solid #0000004D'}}><img src={partThree} className='w-[240px]' alt="" /></div>
<div className='w-full flex justify-center items-center py-10 h-[334px]' style={{border: '1px solid #0000004D'}}><img src={partTwo} className='w-[240px]' alt="" /></div>
<div className='w-full  flex justify-center items-center py-10 h-[334px]' style={{border: '1px solid #0000004D'}}><img src={partOne} className='w-[240px]' alt="" /></div>
</section>
<section className='flex sm:flex-col w-full'>
<div className='w-full  flex justify-center items-center py-10 h-[334px]' style={{border: '1px solid #0000004D'}}><img className='w-[250px]' src={partSix} alt="" /></div>
<div className='w-full  flex justify-center items-center py-10 h-[334px]' style={{border: '1px solid #0000004D'}}><img className='w-[240px]' src={partFour} alt="" /></div>
<div className='w-full  flex justify-center items-center py-10 h-[334px]' style={{border: '1px solid #0000004D'}}><img className='w-[240px]' src={partFive} alt="" /></div>
</section>
    </section>
    <section  className='w-full ' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <section className='w-full py-20 bg-[#000000E5] justify-center  flex flex-col'>
<h2 className='text-white font-bold text-5xl sm:text-2xl text-center'>Become a Partner</h2>
<p className='text-white w-[50%] sm:w-[80%] text-lg sm:text-base mx-auto text-center mt-5'>
let's embark on a transformative partnership that paves the way for unparalleled success. Discover how our exceptional team can elevate your business to new heights.
</p>
<button className='bg-[#1E772C] w-[230px] sm:w-[130px] sm:h-[50px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>contact us</button>
        </section>
    </section>
    <Newsletter />
    <Footer />
    </>
  )
}

export default Partners