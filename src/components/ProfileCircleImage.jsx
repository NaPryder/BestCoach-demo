import React from 'react'
import PropTypes from 'prop-types'

function ProfileCircleImage({ className, circle, image, borderColor, autoRezise, ...props }) {
  const classList = [
    'profile-image-container',
    circle ? 'circle' : null,
    className ? className : null,
    borderColor ? borderColor : 'border-white',
    autoRezise ? 'auto-resize' : null,
  ]
    .filter(c => c)
    .join(' ')
  return (
    <div className={classList}>
      <img src={image} alt="profile-image" />
    </div>
  )
}

ProfileCircleImage.propTypes = {
  circle: PropTypes.bool,
  borderColor: PropTypes.oneOf(['border-white', 'border-yellow']),
  autoRezise: PropTypes.bool,
}

export default ProfileCircleImage
