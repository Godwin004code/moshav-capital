import React from 'react'
import Nav from '../Global/AboutNav'
import Footer from '../Global/Footer'
import Newsletter from '../Global/Newsletter'
import DoYouHaveAnyQuestions from '../Global/DoYouHaveAnyQuestions'
import img from "../../Assets/d2f2b14405fa97c66513d778c96621c5.jpeg"
import bg from "../../Assets/Group 41oscil.png"
import bg2 from "../../Assets/e2ed0ec88cd91d084d71622760072c6d.jpeg"
import CwAc from "../Global/CwAc"


const CollateralWarehousing = () => {
  return (
    <>
    <Nav />
<section className='landing-page-about h-[80vh]  sm:h-[50vh] w-full pt-28 md:pt-14 pb-0' style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <section className='w-[90%] mx-auto h-[90%] sm:h-[100%]' style={{backgroundImage: `url(${bg2})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '5px'}}>
        <section className='bg-[#00000080] w-full h-full flex flex-col text-center rounded-md'>
            <h2 className='text-white font-medium text-2xl mt-32 sm:mt-10  sm:text-sm '>SERVICE</h2>
            <h2 className='text-white font-bold text-5xl mt-10 sm:hidden'>Commodities Warehousing & Collateral </h2>
            <h2 className='text-white font-bold text-5xl mt-2 sm:hidden'>Management</h2>
            <h2 className='hidden sm:block text-white text-[32px] font-medium mt-0'>
            Commodities warehousing & Collateral management
            </h2>
            <h2 className='hidden sm:block text-white text-base mt-10 px-4'>Secure Storage and Financing Solutions for Your Commodities</h2>
            <h2 className='text-white font-bold text-2xl sm:hidden sm:text-base mt-10'>Secure Storage and Financing Solutions for Your </h2>
            <h2 className='text-white font-bold text-2xl sm:hidden'>Commodities</h2>
           
        </section>
    </section>
<section>

</section>
</section>
    <section className='bg-[#FAFFF5] sm:pt-8 w-full py-20'>
        <section className='w-[90%] mx-auto sm:flex-col justify-between flex'>
                <div className='w-[45%] sm:text-2xl  sm:w-[100%]'>
                    <h2  className='text-[#000000] text-5xl sm:text-2xl font-bold mb-6'>About</h2>
                    <p className='text-lg  sm:text-base  leading-[35px] text-[#000000]'>
                    As a Securities Exchange Commission-licensed Commodities Warehousing and Collateral Management service provider, MCL operates specialized warehouses with advanced facilities designed to maintain optimal storage conditions for various commodities and eliminate post-harvest losses. We take great pride in our ability to deliver exceptional services to our esteemed clients and continuously strive to exceed their expectations

                    </p>
                    <p className='text-lg leading-[35px] text-[#000000]  sm:text-base   mt-10'>
                    Our clients who store commodities with us receive warehouse receipts that they can use as collateral for financing from banks and other financial institutions. At MCL warehouses, we conduct quality checks and inspections to ensure that the stored commodities meet the specified standards and maintain their quality during storage. This guarantees that our clients can rely on our services to keep their valuable commodities safe and secure.
                    </p>
                    
                    
                    <button className='bg-[#1E772C] w-[230px]  sm:hidden mx-auto mt-12 h-[65px] text-white text-xl rounded-xl'>Register</button>
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
            <h2 className='font-bold text-5xl my-6 sm:text-[40px]'>FAQ</h2>
            <h2 className='text-[#000] font-medium text-[20px]  sm:text-base'>Have a question and don’t see an answer below?</h2>
            <h2 className='text-[#000] font-medium text-[20px]  sm:text-base'>Feel free to reach out to us at </h2>
            <h2 className='text-[#1E772C] font-medium text-[20px]  sm:text-base'>contact@moshavcapital.com</h2>
        </div>
    <CwAc  />
    </section>
    <DoYouHaveAnyQuestions />
    <Newsletter />
    <Footer />
    </>
  )
}

export default CollateralWarehousing