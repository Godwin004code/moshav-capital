
import React from 'react'
import img from "../../Assets/moshav-who-we-are.jpeg"

const Whoweare = () => {
  return (
    <section className='w-full bg-[#FAFFF5] py-10'>
        <div className='flex justify-between w-[90%] mx-auto'>
            <div className='w-[45%] my-auto'>
                <h2 className='text-[#000000] text-4xl font-bold'>Who We Are</h2>
                <p className='text-2xl mt-8'>
                <span className='text-[#1E772C]'>Moshav Capital Ltd</span> is an economic empowerment platform, provisioning innovative financial intermediary, commodity warehousing, collateral management, cluster marketing support, brokerage and infrastructure-as-a-service offerings to micro, small, and medium enterprises (MSMEs) within the Agribusiness sector.
                </p>
                <button className='bg-[#1E772C] w-[230px] mx-auto mt-10 h-[65px] text-white text-xl rounded-xl'>Learn more</button>
            </div>
            <div className='w-[40%]'>
                <img src={img} className='w-full h-[600px] rounded-[5px] object-cover' alt="who we are" />
            </div>
        </div>
    </section>
  )
}

export default Whoweare