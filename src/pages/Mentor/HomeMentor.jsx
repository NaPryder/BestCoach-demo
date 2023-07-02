import React from 'react'
import HeroSection from './HeroSection'
import HowToGetStart from './HowToGetStart'
import ThingYouCanOffer from './ThingYouCanOffer'
import OurMentor from './OurMentor'
import WhyJoinUs from './WhyJoinUs'
import HearFromOurMentor from './HearFromOurMentor'
import FAQSection from './FAQSection'

const HomeMentor = React.memo(props => {
  return (
    <>
      <HeroSection />
      <HowToGetStart />
      <ThingYouCanOffer />
      <OurMentor />
      <WhyJoinUs />
      <HearFromOurMentor />
      <FAQSection />
    </>
  )
})

export default HomeMentor
