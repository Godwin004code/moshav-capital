import React from 'react'
import Hero from './Hero'
import Whoweare from './Whoweare'
import Why from './Why'
import OurPartners from './OurPartners'
import DoYouHaveAnyQuestions from '../Global/DoYouHaveAnyQuestions'
import Newsletter from '../Global/Newsletter'
import Footer from '../Global/Footer'
import OurStrongSides from './OurStrongSides'


const HomePage = () => {
  return (
    <>
  <Hero />
  <OurPartners />
<Whoweare />   
<Why />   
<OurStrongSides />
<DoYouHaveAnyQuestions />

<Newsletter />
<Footer />
    </>
  )
}

export default HomePage
