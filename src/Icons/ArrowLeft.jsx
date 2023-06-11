import React from 'react'

function ArrowLeft({ className, width, height, ...props }) {
  const style = {
    height: height ? `${height + 2}px` : '20px',
    width: width ? `${width + 2}px` : '20px',
  }

  return (
    <div>
      <svg
        style={style}
        className={`${className} icon-arrow-default`}
        viewBox="0 0 24 24"
        fill="currentColor"
        height={height ? `${height + 2}px` : '20px'}
        width={width ? `${width + 2}px` : '20px'}
        {...props}
      >
        <path
          d="M5.41 11H21a1 1 0 010 2H5.41l5.3 5.3a1 1 0 01-1.42 1.4l-7-7a1 1 0 010-1.4l7-7a1 1 0 011.42 1.4L5.4 11z"
          stroke="currentColor"
        />
      </svg>
    </div>
  )
}

export default ArrowLeft
