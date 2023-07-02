import React from 'react'
import { IconTypeOption } from './iconOptions'

const getProperty = (props, iconStylingTemplateOption) => {
  let size = IconTypeOption.SIZE.m
  if (Object.keys(props).includes('size')) {
    size = props.size
  }
  let shade = IconTypeOption.SHADE.primary
  if (Object.keys(props).includes('shade')) {
    shade = props.shade
  }
  let color = ''
  if (Object.keys(props).includes('color')) {
    color = props.color
  }
  return {
    size: size,
    color: color,
    shade: shade,
    styles: {
      width: `${iconStylingTemplateOption.width[size]}px`,
      height: `${iconStylingTemplateOption.height[size]}px`,
    },
  }
}

const getClassNames = (size, color, shade) => {
  let classes = []

  if (size) {
    classes.push(`icon-size-${size}`)
  }
  if (color && shade) {
    classes.push(`icon-color ${color}-${shade}`)
  }
  return classes
}

// Component
const IconWraper = ({ children, option, ...props }) => {
  const { color, size, shade, styles } = getProperty(props, option)
  let classNames = getClassNames(size, color, shade)

  return React.Children.map(children, child => {
    let newClassnames = []
    let newStyle = { ...styles }
    for (const c of classNames) {
      newClassnames.push(c)
    }
    if (child !== undefined) {
      if (Object.keys(child).includes('props')) {
        if (Object.keys(child.props).includes('className') && Array.isArray(child.props.className)) {
          for (const c of child.props.className) {
            newClassnames.push(c)
          }
        }
        if (Object.keys(child.props).includes('style')) {
          newStyle = { ...newStyle, ...child.props.style }
        }
      }
    }

    return React.cloneElement(child, {
      style: newStyle,
      className: newClassnames.filter(c => c).join(' '),
    })
  })
}
export default IconWraper
