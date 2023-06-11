import React from 'react'
import PropTypes from 'prop-types'

function Check({ className, width, height, ...props }) {
  return (
    <svg
      className={className}
      width={width ? `${(width * 1) / 10}rem` : '1.4rem'}
      height={height ? `${(height * 1) / 10}rem` : '1.1rem'}
      viewBox="0 0 17 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="currentColor"
        clipRule="currentColor"
        d="M16.5546 0.461221C17.0117 0.918304 17.0117 1.65938 16.5546 2.11647L7.1911 11.4799C6.73402 11.937 5.99294 11.937 5.53586 11.4799L0.854117 6.7982C0.397034 6.34112 0.397034 5.60004 0.854117 5.14296C1.3112 4.68588 2.05228 4.68588 2.50936 5.14296L6.36348 8.99708L14.8993 0.461221C15.3564 0.00413738 16.0975 0.00413738 16.5546 0.461221Z"
      />
    </svg>
    // <svg
    //   className={className}
    //   width={width ? `${(width * 1.5) / 10}rem` : '1.4rem'}
    //   height={height ? `${(height * 1.5) / 10}rem` : '1.1rem'}
    //   fill="currentColor"
    //   viewBox="0 0 16 16"
    //   {...props}
    // >
    //   <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
    // </svg>
  )
}
Check.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Check
