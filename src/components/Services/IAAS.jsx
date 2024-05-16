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
<section className='landing-page-about h-[80vh] w-full pt-28 pb-0' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <section className='w-[90%] mx-auto h-[90%]' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <section className='bg-[#00000080] w-full h-full flex flex-col text-center'>
            <h2 className='text-white font-medium text-2xl mt-32'>SERVICE</h2>
            <h2 className='text-white font-bold text-5xl mt-10'>Infrastructure-as-a-service </h2>
            
            <h2 className='text-white font-bold text-2xl mt-10'>Enhancing Efficiency and Operations in Agribusiness </h2>
           
        </section>
    </section>
<section>

</section>
</section>
    <section className='bg-[#FAFFF5] w-full py-20'>
        <section className='w-[90%] mx-auto justify-between flex'>
                <div className='w-[45%]'>
                    <h2  className='text-[#000000] text-5xl font-bold mb-6'>About</h2>
                    <p className='text-lg leading-[35px] text-[#000000]'>
                    Moshav Capital offers Infrastructure-as-a-Service (IaaS) solutions tailored for agribusiness enterprises. Our IaaS offerings provide essential infrastructure support, including technology, equipment, and facilities, to optimize operations and enhance efficiency within the agribusiness sector. By leveraging our IaaS solutions, businesses can reduce costs, improve productivity, and focus on core activities while benefiting from reliable and scalable infrastructure services. 

                    </p>
                    
                    
                    
                    <button className='bg-[#1E772C] w-[230px] mx-auto mt-12 h-[65px] text-white text-xl rounded-xl'>Register</button>
                </div>
                <div className='w-[45%]'>
                    <img className='w-full h-[800px] rounded-[5px] object-cover' src={img} alt="About Financial services" />
                </div>
        </section>
    </section>

    <section className='flex w-[90%] mx-auto justify-between py-16'>
        <div>
            <h2 className='text-[#1E772C] font-medium text-[20px]'>Support</h2>
            <h2 className='font-bold text-5xl my-6'>FAQ</h2>
            <h2 className='text-[#000] font-medium text-[20px]'>Have a question and don’t see an answer below?</h2>
            <h2 className='text-[#000] font-medium text-[20px]'>Feel free to reach out to us at </h2>
            <h2 className='text-[#1E772C] font-medium text-[20px]'>contact@moshavcapital.com</h2>
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