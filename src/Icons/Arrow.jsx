import React from 'react'

const Arrow = ({ className, width, height, direction, ...props }) => {
  const deg = direction => {
    if (direction === 'up') return '-90deg'
    else if (direction === 'right') return '0deg'
    else if (direction === 'down') return '90deg'
    else if (direction === 'left') return '180deg'
    else return '0deg'
  }
  const style = {
    transform: `rotate(${deg(direction)})`,
  }
  return (
    <svg
      style={style}
      className={className}
      width={width ? `${width + 2}px` : '20px'}
      height={height ? `${height + 2}px` : '20px'}
      viewBox="0 0 17 14"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Icon"
        d="M10 1.75L15.25 7M15.25 7L10 12.25M15.25 7L1.75 7"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default Arrow
