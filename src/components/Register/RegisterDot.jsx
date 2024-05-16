import React from 'react'
import bg from "../../Assets/afad8786512d39ebdfd7620ce7def7c5.jpeg"
import bg2 from "../../Assets/64d3e0194639eb0ba2a94c689cae43d7.jpeg"


const RegisterDot = ({active, switchSlide}) => {
    const Data = [
        {
          img: bg,
          text: "Grow Your Agribusiness with Us",
          paragraph: "Sign in to continue your journey. Access exclusive features and persinalized experiences"
        },
        {
          img: bg2,
          text: "Grow Your Agribusiness with Moshav",
          paragraph: "Sign in to continue your journey. Access exclusive features and persinalized experiences"
        },
    
      ]
    return (
        <div className="all-dot my-auto register lg:mb-[-30px] sm:mb-[-40px]">
            {
                Data.map((slide, index) => {
                    return (
                        <div 
                            key={index}
                            className={active === index ? "active-dot dot" : "dot"}
                            onClick={() => switchSlide(index)}

                        ></div>
                    )
                })
            }
        </div>
    )
}

export default RegisterDot