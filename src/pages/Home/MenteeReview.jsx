import React from 'react'
import PropTypes from 'prop-types'
import ProfileCircleImage from '@/components/ProfileCircleImage'

const MenteeReview = ({ mapMenteeReview, ...props }) => {
  return (
    <div className="mentee-review">
      <ProfileCircleImage image={mapMenteeReview.image} circle />

      <p className="review">“{mapMenteeReview.review}”</p>
      <div>
        <p className="name">{mapMenteeReview.name}</p>
        <p className="occupation">{mapMenteeReview.occupation}</p>
      </div>
    </div>
  )
}

MenteeReview.propTypes = {}

export default MenteeReview
