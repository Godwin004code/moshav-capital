
import React from 'react'
import img from "../../Assets/whythree.jpeg"

const Team = () => {
  return (
    <section className='w-full py-20 bg-[#FAFFF5]'>
        <h2 className='text-center text-4xl font-semibold mb-20'>Meet the team</h2>
        <section className='flex sm:flex-col gap-28 justify-between w-[90%] mx-auto'>
            <div>
                <img className='rounded-[10px]' src={img} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>John Doe</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
            <div>
                <img className='rounded-[10px]'  src={img} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>John Doe</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
            <div>
                <img className='rounded-[10px]' src={img} alt="Team member one" />
                <div className='mt-6 flex justify-between'>
                    <h2 className='text-2xl'>John Doe</h2>
                    <h2 className='text-[20px]'>CEO</h2>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Team