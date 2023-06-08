import React from 'react'
import PropTypes from 'prop-types'

const OverLapingImages = ({ images, max, ...props }) => {
  max = max === undefined || max < 0 ? 3 : max < images.lenght ? max : images.lenght

  return (
    <div className="overlap-images">
      {images &&
        images.slice(0, max).map(img => (
          <span className="image-container" key={img.id}>
            <img src={img.image} alt="img" />
          </span>
        ))}
    </div>
  )
}

OverLapingImages.propTypes = {
  images: PropTypes.array,
  max: PropTypes.number,
}

export default OverLapingImages
