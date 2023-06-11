import React from 'react'
import PropTypes from 'prop-types'

const Occupation = ({ className, width, height, ...props }) => {
  return (
    <svg
      className={className}
      width={width ? `${width + 2}px` : '18px'}
      height={height ? `${height + 2}px` : '17px'}
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33342 0.666626H10.6667C11.1088 0.666626 11.5327 0.842221 11.8453 1.15478C12.1578 1.46734 12.3334 1.89127 12.3334 2.33329V3.99996H15.6667C16.1088 3.99996 16.5327 4.17555 16.8453 4.48811C17.1578 4.80067 17.3334 5.2246 17.3334 5.66663V14.8333C17.3334 15.2753 17.1578 15.6992 16.8453 16.0118C16.5327 16.3244 16.1088 16.5 15.6667 16.5H2.33341C1.89139 16.5 1.46746 16.3244 1.1549 16.0118C0.842343 15.6992 0.666748 15.2753 0.666748 14.8333V5.66663C0.666748 4.74163 1.40841 3.99996 2.33341 3.99996H5.66675V2.33329C5.66675 1.40829 6.40841 0.666626 7.33342 0.666626ZM10.6667 3.99996V2.33329H7.33342V3.99996H10.6667Z"
        fill="#9CA3AF"
      />
    </svg>
  )
}

Occupation.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
export default Occupation
