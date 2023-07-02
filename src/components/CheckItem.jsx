import React from 'react'
import Check from '@/icons/Check'

const CheckItem = ({
  topic,
  iconBoxClassname,
  iconClassname,
  backgroundColor,
  boxColor,
  size,
  iConColor,
  titleColor,
  ...props
}) => {
  const boxSizeTemplate = {
    sm: { width: 24, height: 24 },
    m: { width: 32, height: 32 },
  }
  const boxStyle = {
    width: `${boxSizeTemplate[size].width}px`,
    height: `${boxSizeTemplate[size].height}px`,
  }
  const containerClassNames = ['checking-item', backgroundColor || 'white']
  const boxClassNames = ['circle', iconBoxClassname || '', boxColor || 'pink']

  return (
    <div className={containerClassNames.join(' ')}>
      <div className={boxClassNames.join(' ')} style={boxStyle}>
        <Check size={size} color={iConColor} className={iconClassname} />
      </div>
      <p className={`${titleColor || 'default'}`}>{topic}</p>
    </div>
  )
}

export default CheckItem
