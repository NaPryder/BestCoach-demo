import React from 'react'

const OverLapingImages = ({ images, ...props }) => {
  return (
    <div className="overlap-images">
      {images &&
        images.map(img => (
          <span className="image-container">
            <img key={img} src={img.image} alt="img" />
          </span>
        ))}
    </div>
  )
}

export default OverLapingImages
