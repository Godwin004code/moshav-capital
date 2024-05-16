
import React from 'react'

const Newsletter = () => {
  return (
    <section className='flex sm:flex-col justify-between w-[90%] mx-auto py-28 sm:pt-10 sm:pb-10'>
        <div className='w-[35%] sm:w-[100%] sm:text-center'>
            <h2 className='text-[#141414] font-semibold sm:font-normal sm:hidden text-[25px]'>You Can Also Subscribe To Our Newsletter To</h2>
            <h2 className='text-[#141414] hidden sm:block font-semibold sm:font-normal text-[25px]'>
            You can also subscribe to our newsletter to get monthly updates
            </h2>
            <h2 className='text-[#141414] font-semibold sm:font-normal sm:hidden text-[25px]'> Get Monthly Updates</h2>
        </div>
        <div className='flex sm:flex-col w-[50%] sm:mt-7 sm:w-[100%] my-auto'>
            <div className='bg-[#E4F8D1] w-[70%] sm:w-[90%] sm:mx-auto rounded-[10px] pl-5 mr-5  flex'>
            <svg className='my-auto' width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.25 0.625H2.75C2.25272 0.625 1.77581 0.822544 1.42417 1.17417C1.07254 1.52581 0.875 2.00272 0.875 2.5V17.5C0.875 17.9973 1.07254 18.4742 1.42417 18.8258C1.77581 19.1775 2.25272 19.375 2.75 19.375H25.25C25.7473 19.375 26.2242 19.1775 26.5758 18.8258C26.9275 18.4742 27.125 17.9973 27.125 17.5V2.5C27.125 2.00272 26.9275 1.52581 26.5758 1.17417C26.2242 0.822544 25.7473 0.625 25.25 0.625ZM23.1875 2.5L14 8.85625L4.8125 2.5H23.1875ZM2.75 17.5V3.35312L13.4656 10.7687C13.6226 10.8776 13.809 10.936 14 10.936C14.191 10.936 14.3774 10.8776 14.5344 10.7687L25.25 3.35312V17.5H2.75Z" fill="#898989"/>
</svg>
<input type='email' placeholder='Enter email' className='bg-transparent py-4  pl-4 w-full h-full focus:outline-none' />
            </div>
            <button className='bg-[#1E772C] w-[200px] sm:w-[165px]  sm:mx-auto sm:mt-7 sm:py-3 py-4 text-white text-xl rounded-[10px]'>Subscribe</button>
        </div>
    </section>
  )
}

export default Newsletter