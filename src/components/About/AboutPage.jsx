
import React from 'react'
import AboutNav from '../Global/AboutNav'
import AboutHero from './AboutHero'
import Footer from "../Global/Footer"
import Newsletter from '../Global/Newsletter'
import DoYouHaveAnyQuestions from '../Global/DoYouHaveAnyQuestions'
import OurStrongSides from '../Home/OurStrongSides'
import Team from './Team'
import AboutWhy from './AboutWhy'
import Vision from './Vision'

const AboutPage = () => {
  return (
    <>
  
      <AboutNav />
    <AboutHero />
    <Vision />
    <OurStrongSides />
    <AboutWhy />
    <Team />
    <DoYouHaveAnyQuestions />
    <Newsletter />
    <Footer />
    </>
  )
}

export default AboutPage
