import React from 'react'
import ArrowRightOld from './ArrowRightOld'

function ArrowLeftOld({ className, width, height, ...props }) {
  const style = {
    transform: 'rotate(180deg)',
  }
  return (
    <svg style={style} width={width} height={height} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Icon"
        d="M10 1.75L15.25 7M15.25 7L10 12.25M15.25 7L1.75 7"
        stroke="currentColor"
        // stroke="#F9FAFB"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeftOld
