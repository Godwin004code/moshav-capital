
import React, {useState} from 'react'
import Nav from '../Global/Nav'
import SlidesDot from './SlidesDot'
import SlidesArrow from "./SlidesArrow"
import Data from '../Data'


const Hero = () => {
    const [active, setActive] = useState(0)
    const { text, img, paragraph} = Data[active]

    

    const nextSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex > Data.length - 1) {
                return 0
            }  else if(newIndex < 0) {
                return Data.length - 1
            }

            return newIndex
        })
    }

    

    const prevSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex < 0) {
                return Data.length - 1
            } else if(newIndex > Data.length - 1) {
                return 0
            }

            return newIndex
        })
    }

  return ( <>
    <section className='landing-page h-[90vh]' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

<div className="landing-page-overlay h-full" >
<Nav />
<div className='flex justify-center flex-col mt-48 w-full'>

<h1 className='text-white text-6xl w-[70%] mx-auto text-center '>{text}</h1>
<p className='text-white text-3xl text-center mt-5'>
    {paragraph}
</p>
<button className='bg-[#1E772C] w-[240px] mx-auto mt-10 h-[65px] text-white text-2xl rounded-xl'>Learn more</button>
</div>
                <SlidesArrow next={nextSlide} prev={prevSlide} />
                <SlidesDot active={active} switchSlide={(active) => setActive(active)} />
</div>
  
    </section>
    
    </>
  )
}

export default Hero