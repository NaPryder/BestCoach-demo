import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ color, title, ...props }) => {
  color = color || 'blue' // default
  return (
    <div className={`tag-${color}`} {...props}>
      <p>{title}</p>
    </div>
  )
}
Tag.propTypes = {
  color: PropTypes.oneOf(['green', 'blue']),
  title: PropTypes.string,
}

export default Tag
