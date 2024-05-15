
import React from 'react'
import whyOne from "../../Assets/whyone.jpeg"
import whyTwo from "../../Assets/whytwo.jpeg"
import whyThree from "../../Assets/whythree.jpeg"
import whyFour from "../../Assets/whyfour.jpeg"

const Why = () => {
  return (
    <section className='py-12'>
        <h1 className='text-[#000000] text-4xl font-bold text-center'>Why Choose Moshav Capital</h1>
        <p className='text-[#000000] text-2xl text-center mt-4'>We offer exceptional services ranging from</p>
        <div className='flex justify-between w-[90%] mt-10 mb-32 mx-auto'>
            <h2 className='font-extrabold text-[32px]'>01</h2>
            <div className=' ml-16 mr-7 mt-10'>
                <h2 className='text-[#1E772C] font-semibold text-3xl'>Financial intermediary services</h2>
                <p className='font-medium text-lg mt-6 '>Moshav Capital facilitates access to innovative financial products and services designed specifically for micro, small, and medium enterprises (MSMEs) in the agribusiness sector. This includes loans, credit facilities, and investment opportunities tailored to the unique needs of agribusiness entrepreneurs.</p>
                <button className='bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
            </div>
            <div className=''>
                <img className='w-full' src={whyOne} alt="why one" />
            </div>
        </div>
        <div className='flex justify-between w-[90%] mt-10 mb-32 mx-auto'>
            
            <div className=''>
                <img className='w-full' src={whyTwo} alt="why one" />
            </div>
            <div className='ml-32 mr-7  mt-10'>
                <h2 className='text-[#1E772C] font-semibold text-3xl'>Commodity warehousing & collateral Management</h2>
                <p className='font-medium text-lg mt-6'>We offers secure commodity warehousing facilities and collateral management services, enabling MSMEs to leverage their produce and assets to access financing and mitigate risks.</p>
                <button className='bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
            </div>
            <h2 className='font-extrabold text-[32px]'>02</h2>
        </div>
        <div className='flex justify-between w-[90%] mt-10 mb-32 mx-auto'>
            <h2 className='font-extrabold text-[32px]'>03</h2>
            <div className=' ml-16 mr-7 mt-10'>
                <h2 className='text-[#1E772C] font-semibold text-3xl'>Cluster marketing support & Brokerage Services</h2>
                <p className='font-medium text-lg mt-6'>By fostering collaboration among enterprises in specific geographic areas or sectors, we facilitate joint promotion, distribution, and market penetration strategies. This approach boosts visibility, expands customer reach, and drives sales growth for participating businesses, ultimately strengthening the agribusiness ecosystem.</p>
                <button className='bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
            </div>
            <div className=''>
                <img className='w-full' src={whyThree} alt="why one" />
            </div>
        </div>
        <div className='flex justify-between w-[90%] mt-10 mb-32 mx-auto'>
            
            <div className=''>
                <img className='w-full' src={whyFour} alt="why one" />
            </div>
            <div className='ml-32 mr-7  mt-10'>
                <h2 className='text-[#1E772C] font-semibold text-3xl'>Infrastructure as-a-service</h2>
                <p className='font-medium text-lg mt-6'>Infrastructure-as-a-Service (IaaS) by Moshav Capital offers agribusinesses scalable computing resources, cloud-based applications, and digital tools to optimize operations and enhance efficiency without upfront infrastructure investments. Leverage modern technology to streamline processes and adapt to market demands effectively.</p>
                <button className='bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
            </div>
            <h2 className='font-extrabold text-[32px]'>04</h2>
        </div>
    </section>
  )
}

export default Why