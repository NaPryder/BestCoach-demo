import React from 'react'
import PropTypes from 'prop-types'
// import '../../styles/elements/Button.scss'

function Button({ className, children, onClick, primary, size, ...props }) {
  const classList = ['btn', primary ? 'primary' : 'secondary', size || 'default', className].filter(c => c).join(' ')
  return (
    <button className={classList} onClick={onClick} {...props}>
      <div>{children}</div>
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['m', 'lg', 'default']),
}

export default Button
