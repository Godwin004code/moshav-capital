import React from 'react'
import Data from '../Data'

const SlidesDot = ({active, switchSlide}) => {
    return (
        <div className="all-dot">
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

export default SlidesDot