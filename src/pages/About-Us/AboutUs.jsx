import React, { memo } from 'react'
import OurBackground from './OurBackground'
import OurMission from './OurMission'
import CoreValue from './CoreValue'
import OurTeam from './OurTeam'
// import AboutUsSection2CoreValue from './AboutUsSection2_CoreValue'
// import AboutUsSection3Team from './AboutUsSection3_Team'

const AboutUs = memo(() => {
  return (
    <>
      <OurBackground />
      <OurMission />
      <CoreValue />
      <OurTeam />
    </>
  )
})

export default AboutUs
