import React, { memo } from 'react'
import SellingPoint from './SellingPoint'
import USP from './USP'
import ExpertTips from './ExpertTips'
import HowToStart from './HowToStart'
import ProgramCategory from './ProgramCategory'
import DiscoverMentor from './DiscoverMentor'
import HearFromMentee from './HearFromMentee'
import WolrdClassCompany from './WolrdClassCompany'
import WantToBeMentor from './WantToBeMentor'

const HomeMentee = memo(() => {
  return (
    <>
      <SellingPoint />
      <USP />
      <ExpertTips />
      <HowToStart />
      <ProgramCategory />
      <DiscoverMentor />
      <HearFromMentee />
      <WolrdClassCompany />
      <WantToBeMentor />
    </>
  )
})

export default HomeMentee
