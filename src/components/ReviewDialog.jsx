import React from 'react'
import PropTypes from 'prop-types'
import ProfileCircleImage from './ProfileCircleImage'

const ReviewDialog = ({ mapReview, ...props }) => {
  return (
    <div className="review-dialog-frame">
      <div className="profile">
        <ProfileCircleImage image={mapReview.image} circle />
      </div>

      <p className="review">“{mapReview.review}”</p>
      <div>
        <p className="name">{mapReview.name}</p>
        <p className="occupation">{mapReview.occupation}</p>
      </div>
    </div>
  )
}

ReviewDialog.propTypes = {
  mapReview: PropTypes.object,
}

export default ReviewDialog
