import React from 'react'

const Step = ({ image, stepNumber, title, description, ...props }) => {
  return (
    <div className="step">
      <div className="step-image-container">
        <img src={image} alt={`step-${title}`} />
      </div>
      <div className="step-number">
        <p> {stepNumber} </p>
      </div>
      <div className="step-title">
        <p className="title"> {title} </p>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default Step
