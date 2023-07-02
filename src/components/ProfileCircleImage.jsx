import React from 'react'

function ProfileCircleImage({ className, circle, image, borderColor, autoRezise, size, ...props }) {
  let s = '60px'
  if (size !== undefined) {
    s = size
  }
  let style = {
    width: s,
    height: s,
  }
  if (Object.keys(props).includes('style')) {
    style = { ...style, ...props.style }
  }

  const classList = [
    'profile-image-container',
    circle ? 'circle' : null,
    className ? className : null,
    borderColor ? borderColor : 'border-white',
    autoRezise ? 'auto-resize' : null,
  ]
    .filter(c => c)
    .join(' ')
  return (
    <div className={classList} style={style}>
      <img src={image} alt="profile" />
    </div>
  )
}

export default ProfileCircleImage
