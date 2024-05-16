import React from 'react'
import Nav from '../Global/AboutNav'
import Footer from '../Global/Footer'
import Newsletter from '../Global/Newsletter'
import DoYouHaveAnyQuestions from '../Global/DoYouHaveAnyQuestions'
import img from "../../Assets/e0537cd4e0b826c7bd79cede64fbf36c.png"
import bg from "../../Assets/Group 41oscil.png"
import bg2 from "../../Assets/64d3e0194639eb0ba2a94c689cae43d7.jpeg"
import IAc from '../Global/IAc'


const IAAS = () => {
  return (
    <>
    <Nav />
<section className='landing-page-about h-[80vh] sm:h-[50vh]  w-full pt-28  md:pt-14  pb-0' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <section className='w-[90%] mx-auto h-[90%]' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '5px'}}>
        <section className='bg-[#00000080] w-full h-full flex flex-col text-center rounded-md'>
            <h2 className='text-white font-medium text-2xl mt-32 sm:mt-10  sm:text-sm'>SERVICE</h2>
            <h2 className='text-white font-bold text-5xl mt-10 sm:text-[32px] sm:font-medium '>Infrastructure-As-A-service </h2>
            
            <h2 className='text-white font-bold text-2xl mt-10 sm:text-base sm:font-normal'>Enhancing Efficiency and Operations in Agribusiness </h2>
           
        </section>
    </section>
<section>

</section>
</section>
    <section className='bg-[#FAFFF5] sm:pt-8 w-full py-20'>
        <section className='w-[90%] sm:flex-col mx-auto justify-between flex'>
                <div className='w-[45%] sm:w-[100%]'>
                    <h2  className='text-[#000000] text-5xl sm:text-2xl font-bold mb-6'>About</h2>
                    <p className='text-lg  sm:text-base   leading-[35px] text-[#000000]'>
                    Moshav Capital offers Infrastructure-as-a-Service (IaaS) solutions tailored for agribusiness enterprises. Our IaaS offerings provide essential infrastructure support, including technology, equipment, and facilities, to optimize operations and enhance efficiency within the agribusiness sector. By leveraging our IaaS solutions, businesses can reduce costs, improve productivity, and focus on core activities while benefiting from reliable and scalable infrastructure services. 

                    </p>
                    
                    
                    
                    <button className='bg-[#1E772C] w-[230px] sm:hidden mx-auto mt-12 h-[65px] text-white text-xl rounded-xl'>Register</button>
                </div>
                <div className='w-[45%] sm:my-8 sm:w-[100%]'>
                    <img className='w-full  sm:h-[330px] h-[800px] rounded-[5px] object-cover' src={img} alt="About Financial services" />
                </div>
        </section>
        <button className='bg-[#1E772C] w-[147px] hidden sm:block ml-[5%] mr-auto mt-0 h-[50px] text-white text-base rounded-md'>Register</button>
    </section>

    <section className='flex md:flex-col w-[90%] mx-auto justify-between py-16'>
        <div className='sm:text-center'>
            <h2 className='text-[#1E772C] font-medium text-[20px]'>Support</h2>
            <h2 className='font-bold text-5xl my-6  sm:text-[40px]'>FAQ</h2>
            <h2 className='text-[#000] font-medium text-[20px] sm:text-base'>Have a question and don’t see an answer below?</h2>
            <h2 className='text-[#000] font-medium text-[20px] sm:text-base'>Feel free to reach out to us at </h2>
            <h2 className='text-[#1E772C] font-medium text-[20px] sm:text-base'>contact@moshavcapital.com</h2>
        </div>
    <IAc />
    </section>
    <DoYouHaveAnyQuestions />
    <Newsletter />
    <Footer />
    </>
  )
}

export default IAAS