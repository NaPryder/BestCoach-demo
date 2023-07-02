import React from 'react'
import { meteeReviews } from './data'
import CommonReviewContainer from '@/components/CommonReviewContainer'

const HearFromMentee = props => {
  return (
    <section id="section-hear-from-our-mentee">
      <div className="section-content-container">
        <h2 className="review-title"> Hear from happy mentees </h2>
        <CommonReviewContainer reviewData={meteeReviews} />
      </div>
    </section>
  )
}

export default HearFromMentee
