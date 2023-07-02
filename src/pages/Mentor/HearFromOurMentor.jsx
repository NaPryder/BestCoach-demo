import React from 'react'
import { mentorReviews } from './data'
import CommonReviewContainer from '@/components/CommonReviewContainer'

const HearFromOurMentor = ({ title, ...props }) => {
  title = title || 'Hear from our mentors'
  return (
    <section id="section-hear-from-our-mentor">
      <div className="section-content-container">
        <h2>{title}</h2>
        <CommonReviewContainer reviewData={mentorReviews} />
      </div>
    </section>
  )
}

export default HearFromOurMentor
