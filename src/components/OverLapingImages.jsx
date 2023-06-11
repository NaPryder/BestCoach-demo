import React from 'react'
import PropTypes from 'prop-types'
import ProfileCircleImage from './ProfileCircleImage'

const OverLapingImages = ({ images, max, borderColor, ...props }) => {
  max = max === undefined || max < 0 ? 3 : max < images.lenght ? max : images.lenght

  borderColor = borderColor === undefined ? 'border-white' : borderColor
  return (
    <div className="overlap-images">
      {images &&
        images.slice(0, max).map(img => (
          <ProfileCircleImage
            key={img.id}
            image={img.image}
            borderColor={borderColor}
            className="image-container"
            autoRezise
            circle
          />
          // <div className="image-container" key={img.id}>
          //   <img src={img.image} alt="img" />
          // </div>
        ))}
    </div>
  )
}

OverLapingImages.propTypes = {
  images: PropTypes.array,
  max: PropTypes.number,
  borderColor: PropTypes.oneOf(['border-white', 'border-yellow']),
}

export default OverLapingImages
