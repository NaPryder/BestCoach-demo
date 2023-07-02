import React from 'react'

const CountingReview = ({ focusText, children, onClick, alignFocusText, ...props }) => {
  const style =
    alignFocusText !== undefined
      ? {
          textAlign: alignFocusText,
        }
      : {}
  return (
    <div className="counting-review" onClick={onClick}>
      <strong className="title" style={style}>
        {focusText}
      </strong>
      {children}
    </div>
  )
}

export default CountingReview
