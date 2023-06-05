import React from 'react'

const CountingReview = ({ focusText, children, onClick, ...props }) => {
  return (
    <div className="counting-review" onClick={onClick}>
      <strong className="title">{focusText}</strong>
      {children}
    </div>
  )
}

export default CountingReview
