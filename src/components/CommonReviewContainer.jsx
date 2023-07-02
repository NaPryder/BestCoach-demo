import React from 'react'
import ReviewDialog from '@/components/ReviewDialog'

const CommonReviewContainer = ({ reviewData, ...props }) => {
  return (
    <div className="review-container">
      {reviewData
        .slice(0, 3)
        .map(review => <ReviewDialog key={review.id} mapReview={review} />)
        .reduce((prev, curr, i) => [prev, <hr key={i + 100} />, curr])}
    </div>
  )
}

export default CommonReviewContainer
