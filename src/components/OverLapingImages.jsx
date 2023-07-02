import React from 'react'
import PropTypes from 'prop-types'
import ProfileCircleImage from './ProfileCircleImage'

const OverLapingImages = ({ images, max, borderColor, size, overlapSize, ...props }) => {
  max = max === undefined || max < 0 ? 3 : max < images.lenght ? max : images.lenght

  borderColor = borderColor === undefined ? 'border-white' : borderColor

  const overlapingStyle = {
    marginLeft: overlapSize !== undefined ? `${-overlapSize}px` : `${-(size !== undefined ? size : 61) * 0.28}px`,
  }

  return (
    <div className="overlap-images">
      {images &&
        images
          .slice(0, max)
          .map((img, i) => (
            <ProfileCircleImage
              key={img.id}
              image={img.image}
              borderColor={borderColor}
              className="image-container"
              size={size}
              autoRezise
              circle
              style={i === max - 1 ? {} : overlapingStyle}
            />
          ))}
    </div>
  )
}

OverLapingImages.propTypes = {
  images: PropTypes.array,
  max: PropTypes.number,
  borderColor: PropTypes.oneOf(['border-white', 'border-yellow']),
  size: PropTypes.number,
}

export default OverLapingImages
