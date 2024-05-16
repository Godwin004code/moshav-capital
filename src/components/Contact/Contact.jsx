import React from 'react'
import Nav from '../Global/AboutNav'
import img from "../../Assets/Group 41oscil.png"
import Footer from '../Global/Footer'
import Newsletter from "../Global/Newsletter"

const Contact = () => {
  return (
    <>
    <Nav />
    <section className='landing-page-about h-[40vh] sm:h-[30vh] w-full pt-36 sm:pt-10 pb-0' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
<section className='w-full'>
<h2 className='text-[#1E772C] font-semibold text-6xl text-center sm:text-2xl'>Contact us</h2>
<p className='w-[60%] mx-auto text-lg sm:text-base sm:w-[80%] font-medium text-center'>Should you have any questions, comments, or inquiries, rest assured that our committed team is available to offer the assistance and information you require</p>
</section>
    </section>
    <section className='flex sm:flex-col w-[90%] mx-auto gap-16 mb-32 mt-20'>
      <div style={{border: '1px solid #1E772C'}} className='flex rounded-[5px] flex-col justify-center w-full items-center py-7'>
      <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9987 16.1673C10.8936 16.1673 9.83382 15.7283 9.05242 14.9469C8.27102 14.1655 7.83203 13.1057 7.83203 12.0007C7.83203 10.8956 8.27102 9.83577 9.05242 9.05437C9.83382 8.27297 10.8936 7.83398 11.9987 7.83398C13.1038 7.83398 14.1636 8.27297 14.945 9.05437C15.7264 9.83577 16.1654 10.8956 16.1654 12.0007C16.1654 12.5478 16.0576 13.0896 15.8482 13.5952C15.6388 14.1007 15.3319 14.56 14.945 14.9469C14.5581 15.3338 14.0987 15.6408 13.5932 15.8501C13.0877 16.0595 12.5459 16.1673 11.9987 16.1673ZM11.9987 0.333984C8.90451 0.333984 5.93704 1.56315 3.74912 3.75107C1.56119 5.939 0.332031 8.90646 0.332031 12.0007C0.332031 20.7507 11.9987 33.6673 11.9987 33.6673C11.9987 33.6673 23.6654 20.7507 23.6654 12.0007C23.6654 8.90646 22.4362 5.939 20.2483 3.75107C18.0604 1.56315 15.0929 0.333984 11.9987 0.333984Z" fill="#1E772C"/>
</svg>
<h2 className='my-7 font-normal text-2xl sm:text-lg'>Office Location</h2>
<p className='font-semibold text-2xl sm:text-base'>68 Old Gloucester st, London</p>
      </div>
      <div style={{border: '1px solid #1E772C'}} className='flex rounded-[5px] flex-col justify-center w-full items-center py-7'>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.03333 12.9833C8.43333 17.7 12.3 21.55 17.0167 23.9667L20.6833 20.3C21.1333 19.85 21.8 19.7 22.3833 19.9C24.25 20.5167 26.2667 20.85 28.3333 20.85C29.25 20.85 30 21.6 30 22.5167V28.3333C30 29.25 29.25 30 28.3333 30C12.6833 30 0 17.3167 0 1.66667C0 0.75 0.75 0 1.66667 0H7.5C8.41667 0 9.16667 0.75 9.16667 1.66667C9.16667 3.75 9.5 5.75 10.1167 7.61667C10.3 8.2 10.1667 8.85 9.7 9.31667L6.03333 12.9833Z" fill="#1E772C"/>
</svg>

<h2 className='my-7 font-normal text-2xl sm:text-lg'>Phone number</h2>
<p className='font-semibold text-2xl sm:text-base'>+234 6790 979 000</p>
      </div>
      <div style={{border: '1px solid #1E772C'}} className='flex rounded-[5px] flex-col justify-center w-full items-center py-7'>
      <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.332 0.666016H3.66536C1.83203 0.666016 0.348698 2.16602 0.348698 3.99935L0.332031 23.9993C0.332031 25.8327 1.83203 27.3327 3.66536 27.3327H30.332C32.1654 27.3327 33.6654 25.8327 33.6654 23.9993V3.99935C33.6654 2.16602 32.1654 0.666016 30.332 0.666016ZM30.332 7.33268L16.9987 15.666L3.66536 7.33268V3.99935L16.9987 12.3327L30.332 3.99935V7.33268Z" fill="#1E772C"/>
</svg>

<h2 className='my-7 font-normal text-2xl sm:text-lg'>Email</h2>
<p className='font-semibold text-2xl sm:text-base'>Contact@moshavcapital.com</p>
      </div>
      
    </section>
    <section>
      <h2 className='text-[#1E772C] font-medium text-2xl sm:text-base text-center'>GET IN TOUCH</h2>
      <p className='font-medium text-3xl sm:text-2xl sm:w-[90%] sm:mx-auto text-black text-center'>Contact our support team to grow your business</p>
      <p className='font-medium text-lg sm:text-base w-[70%] sm:w-[90%] text-center mx-auto mt-12 mb-20 sm:mb-10'>
      Unlock the path to unprecedented business growth by reaching out to our dedicated support team at Moshav Capital. Whether you have inquiries, need guidance, or seek tailored solutions, our support experts are here to assist you.
      </p>
      <form className='bg-[#E9F1E1] w-[80%] sm:w-[90%] mx-auto py-16 sm:py-10 px-14 sm:px-3'>
        <div className='w-full flex gap-4 md:flex-col justify-between mb-12 sm:mb-[16px]'>
          <input type="text" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='First Name' />
          <input type="text"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Last Name' />
        </div>
        <div className='w-full flex gap-4 md:flex-col justify-between sm:mb-[16px] mb-12'>
          <input type="email" className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Email' />
          <input type="number"  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Phone Number' />
        </div>
        <div className='w-full flex justify-between mb-12 sm:mb-[16px]'>
         
          <select className='category-select pl-6 w-full h-[60px] rounded-[10px] pr-6 bg-[#FFFFFF] focus:outline-none' name="category" id="category">
            <option value="value 1" className='pl-6'>Value 1</option>
          </select>
        </div>
        <div>
          <textarea className='w-full pl-6 pt-5 pb-32 rounded-[10px] focus:outline-none' placeholder='Your Text'></textarea>
        </div>
        <button className='bg-[#1E772C] rounded-[10px] text-white w-full h-[80px] mt-12 sm:mt-[22px]'>Submit</button>
      </form>
    </section>
    <Newsletter />
    <Footer />
    </>
  )
}

export default Contact