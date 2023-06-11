import Check from '@/Icons/Check'
import React from 'react'
const CheckItem = ({ topic, iconBoxClassname, iconClassname, width, height, ...props }) => {
  return (
    <div className="checking-item">
      <div className={iconBoxClassname !== undefined ? iconBoxClassname : null}>
        <Check width={width} height={height} className={iconClassname !== undefined ? iconClassname : null} />
      </div>
      <p>{topic}</p>
    </div>
  )
}

export default CheckItem
