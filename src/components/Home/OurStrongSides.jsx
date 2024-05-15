import React from 'react'

const OurStrongSides = () => {
  return (
    <section className='bg-[#FFFAF3] w-full py-14'>
        <h2 className='text-center font-semibold text-4xl'>Our strong sides</h2>
        <section className='flex w-[80%] mx-auto justify-between mt-20'>
            <div className='w-full text-center py-6'>
                <h2 className='font-bold text-4xl'>3+</h2>
                <p className='text-[#00000080] font-medium text-lg mt-4'>Years of experience</p>
            </div>
            <div className='w-full text-center py-6' style={{borderRight: '1px solid black', borderLeft: '1px solid black'}}>
                <h2 className='font-bold text-4xl'>99.9%</h2>
                <p className='text-[#00000080] font-medium text-lg mt-4'>Customer’s satisfaction</p>
            </div>
            <div className='w-full text-center py-6' style={{borderRight: '1px solid black'}}>
                <h1 className='font-bold text-4xl'>60+</h1>
                <p className='text-[#00000080] font-medium text-lg mt-4'>Enterprise empowered</p>
            </div>
            <div className='w-full text-center py-6'>
                <h2 className='font-bold text-4xl'>120+</h2>
                <p className='text-[#00000080] font-medium text-lg mt-4'>Happy clients</p>
            </div>
        </section>
    </section>
  )
}

export default OurStrongSides