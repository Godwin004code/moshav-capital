
import React from 'react'
import fraud from "../../Assets/moshav-ceo.jpeg"

const Fallback = () => {
  return (
    <section className="h-[100vh] fraud-body  justify-center items-center flex-col text-center">
    <img src={fraud} alt="fraud" />
    <h1 className="text-6xl text-white">Pay my money</h1>
  </section> 
  )
}

export default Fallback