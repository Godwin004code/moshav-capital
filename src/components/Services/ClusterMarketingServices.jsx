
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
<section className='landing-page-about h-[80vh] w-full pt-28 pb-0' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <section className='w-[90%] mx-auto h-[90%]' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <section className='bg-[#00000080] w-full h-full flex flex-col text-center'>
            <h2 className='text-white font-medium text-2xl mt-32'>SERVICE</h2>
            <h2 className='text-white font-bold text-5xl mt-10'>Cluster Marketing Support</h2>
            <h2 className='text-white font-bold text-5xl mt-2'>& Brokerage Services</h2>
            <h2 className='text-white font-bold text-2xl mt-10'>Empowering Agribusiness Marketing Through</h2>
            <h2 className='text-white font-bold text-2xl'>Collaborative Growth</h2>
        </section>
    </section>
<section>

</section>
</section>
    <section className='bg-[#FAFFF5] w-full py-20'>
        <section className='w-[90%] mx-auto justify-between flex'>
                <div className='w-[45%]'>
                    <h2  className='text-[#000000] text-5xl font-bold mb-6'>About</h2>
                    <p className='text-2xl text-[#000000] leading-8'>
                    MCL's approach to enhancing the marketing capabilities of Micro, Small, and Medium Enterprises (MSMEs) in agribusiness involves creating networks of collaboration and shared resources among businesses operating within the same geographic areas or industry clusters. By fostering partnerships and alliances, MCL enables MSMEs to collectively access new markets, leverage economies of scale, and enhance their competitiveness in the agribusiness sector. This collaborative model promotes sustainable growth by encouraging responsible resource management and knowledge exchange among participating enterprises. Through these initiatives, MCL empowers agribusinesses to navigate market challenges more effectively and achieve long-term success in their respective industries.

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
    <ClusterAc  />
    </section>
    <DoYouHaveAnyQuestions />
    <Newsletter />
    <Footer />
    </>
  )
}

export default ClusterMarketingServices