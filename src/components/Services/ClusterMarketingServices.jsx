
import React from 'react'
import Nav from '../Global/AboutNav'
import Footer from '../Global/Footer'
import Newsletter from '../Global/Newsletter'
import DoYouHaveAnyQuestions from '../Global/DoYouHaveAnyQuestions'
import img from "../../Assets/594e9c763d33c5cf3459b8a7053b28f6.jpeg"
import bg from "../../Assets/Group 41oscil.png"
import bg2 from "../../Assets/81f0aea139632ce59ecd0ed44aaf6b4f.jpeg"
import ClusterAc from '../Global/ClusterAc'

const ClusterMarketingServices = () => {
   
  return (

    <>
    <Nav />
<section className='landing-page-about sm:h-[50vh] h-[80vh] w-full pt-28 md:pt-14 pb-0' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <section className='w-[90%] mx-auto h-[90%] sm:h-[100%]' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '5px'}}>
        <section className='bg-[#00000080] w-full h-full flex flex-col text-center rounded-md'>
            <h2 className='text-white font-medium text-2xl mt-32 sm:mt-10  sm:text-sm '>SERVICE</h2>
            <h2 className='text-white font-bold text-5xl sm:hidden mt-10'>Cluster Marketing Support</h2>
            <h2 className='text-white font-bold text-5xl mt-2 sm:hidden'>& Brokerage Services</h2>
            <h2 className='hidden sm:block text-white text-[32px] font-medium mt-0'>
            Cluster marketing support & brokerage Services 
            </h2>
            <h2 className='text-white font-bold text-2xl mt-10 sm:hidden'>Empowering Agribusiness Marketing Through</h2>
            <h2 className='text-white font-bold text-2xl sm:hidden'>Collaborative Growth</h2>
            <h2 className='hidden sm:block text-white text-base mt-5 px-4'>Empowering Agribusiness Marketing Through bggCollaborative Growth</h2>
        </section>
    </section>
<section>

</section>
</section>
    <section className='bg-[#FAFFF5] w-full sm:pt-8 py-20'>
        <section className='w-[90%] mx-auto justify-between flex sm:flex-col '>
                <div className='w-[45%] sm:text-2xl  sm:w-[100%]'>
                    <h2  className='text-[#000000] text-5xl sm:text-2xl font-bold mb-6'>About</h2>
                    <p className='text-lg sm:text-base text-[#000000] leading-[35px]'>
                    MCL's approach to enhancing the marketing capabilities of Micro, Small, and Medium Enterprises (MSMEs) in agribusiness involves creating networks of collaboration and shared resources among businesses operating within the same geographic areas or industry clusters. By fostering partnerships and alliances, MCL enables MSMEs to collectively access new markets, leverage economies of scale, and enhance their competitiveness in the agribusiness sector. This collaborative model promotes sustainable growth by encouraging responsible resource management and knowledge exchange among participating enterprises. Through these initiatives, MCL empowers agribusinesses to navigate market challenges more effectively and achieve long-term success in their respective industries.

                    </p>
                    
                    
                    <button className='bg-[#1E772C] w-[230px] mx-auto sm:hidden mt-12 h-[65px] text-white text-xl rounded-xl'>Register</button>
                </div>
                <div className='w-[45%] sm:my-8 sm:w-[100%]'>
                    <img className='w-full sm:h-[330px] h-[800px] rounded-[5px] object-cover' src={img} alt="About Financial services" />
                </div>
        </section>
        <button className='bg-[#1E772C] w-[147px] hidden sm:block ml-[5%] mr-auto mt-0 h-[50px] text-white text-base rounded-md'>Register</button>
    </section>

    <section className='flex md:flex-col w-[90%] mx-auto justify-between py-16'>
        <div className='sm:text-center'>
            <h2 className='text-[#1E772C] font-medium text-[20px]'>Support</h2>
            <h2 className='font-bold text-5xl  sm:text-[40px] my-6'>FAQ</h2>
            <h2 className='text-[#000] font-medium text-[20px] sm:text-base'>Have a question and don’t see an answer below?</h2>
            <h2 className='text-[#000] font-medium text-[20px] sm:text-base'>Feel free to reach out to us at </h2>
            <h2 className='text-[#1E772C] font-medium text-[20px] sm:text-base'>contact@moshavcapital.com</h2>
        </div>
    <ClusterAc  />
    </section>
    <DoYouHaveAnyQuestions />
    <Newsletter />
    <Footer />
    </>
  )
}

export default ClusterMarketingServices