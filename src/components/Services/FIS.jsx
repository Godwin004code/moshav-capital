import React from 'react'
import Nav from '../Global/AboutNav'
import Footer from '../Global/Footer'
import Newsletter from '../Global/Newsletter'
import DoYouHaveAnyQuestions from '../Global/DoYouHaveAnyQuestions'
import img from "../../Assets/fe99e9cc61e7f41d4397d033d5adf6eb.jpeg"
import bg from "../../Assets/Group 41oscil.png"
import bg2 from "../../Assets/c1d32d8db7877084280df9fa816cc1ba.jpeg"
import Accordion from '../Global/Accordion'
import exportedData from '../Global/AccordionData'
const FIS = () => {
    
  return (
    <>
    <Nav />
<section className='landing-page-about h-[80vh] sm:h-[40vh] w-full pt-28 md:pt-14 pb-0' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <section className='w-[90%] mx-auto h-[90%] sm:h-[100%]' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '5px'}}>
        <section className='bg-[#00000080] w-full h-full flex flex-col text-center rounded-[5px]'>
            <h2 className='text-white font-medium text-2xl sm:text-sm mt-32 sm:mt-10'>SERVICE</h2>
            <h2 className='text-white font-bold text-5xl sm:text-[32px] sm:font-medium mt-10'>Financial Intermediary Service</h2>
            <h2 className='text-white font-bold text-2xl mt-10 sm:hidden'>Empowering Agribusiness Growth through Financial </h2>
            <h2 className='text-white font-bold text-2xl sm:hidden'>Innovation</h2>
            <h2 className='hidden sm:block text-white text-base mt-10'>Empowering Agribusiness Growth through Financial Innovation</h2>
        </section>
    </section>
<section>

</section>
</section>
    <section className='bg-[#FAFFF5] sm:bg-white w-full py-20 sm:pt-8'>
        <section className='w-[90%] mx-auto justify-between sm:flex-col flex'>
                <div className='w-[45%] sm:w-[100%]'>
                    <h2  className='text-[#000000] text-5xl sm:text-2xl font-bold mb-6'>About</h2>
                    <p className='text-lg sm:text-base leading-[35px] text-[#000000]'>
                        <span className='font-bold text-[#72AA7B]'>Moshav Microfinance Bank (MMBL)</span>—an MCL subsidiary—has you covered if you're a small business owner, entrepreneur, or member of a cooperative in the agribusiness sector. We will provide easy access to customized financial products and services to help you achieve your business goals and successes.
                    </p>
                    <p className='text-lg sm:text-base leading-[35px] text-[#000000] my-5'>
                    We will support agro commodities focused out-growers scheme programs, provide credit facilities for inputs, equipment, and working capital needs, especially to marginalized communities, deposit platforms to encourage savings among the target market, Micro Insurance partnerships with insurance providers to offer tailored insurance products covering crop, livestock, and equipment risks, Micro Leasing support for productive assets to nano, micro and small - scale enterprises or financially underserved customers.
                    </p>
                    <p className='text-lg sm:text-base leading-[35px] text-[#000000]'>
                    MMBL is dedicated to delivering more efficient, innovative, and customer-focused services while adhering strictly to the regulations set by the Central Bank of Nigeria. We plan to establish a strong presence in 516 local government areas with significant agricultural activity to cater to our target market.
                    </p>
                    <button className='bg-[#1E772C] w-[230px] mx-auto sm:hidden mt-12 h-[65px] text-white text-xl rounded-xl'>Register</button>
                </div>
                <div className='w-[45%] sm:my-8 sm:w-[100%]'>
                    <img className='w-full h-[800px] sm:h-[330px] rounded-md object-cover' src={img} alt="About Financial services" />
                </div>
        </section>
        <button className='bg-[#1E772C] w-[147px] hidden sm:block ml-[5%] mr-auto mt-0 h-[50px] text-white text-base rounded-md'>Register</button>
    </section>

    <section className='flex md:flex-col w-[90%] mx-auto justify-between py-16'>
        <div className='sm:text-center'>
            <h2 className='text-[#1E772C] font-medium text-[20px]'>Support</h2>
            <h2 className='font-bold text-5xl sm:text-[40px] my-6'>FAQ</h2>
            <h2 className='text-[#000] font-medium text-[20px] sm:text-base'>Have a question and don’t see an answer below?</h2>
            <h2 className='text-[#000] font-medium text-[20px] sm:text-base'>Feel free to reach out to us at </h2>
            <h2 className='text-[#1E772C] font-medium text-[20px] sm:text-base'>contact@moshavcapital.com</h2>
        </div>
    <Accordion acc={exportedData.FisData}  />
    </section>
    <DoYouHaveAnyQuestions />
    <Newsletter />
    <Footer />
    </>
  )
}

export default FIS