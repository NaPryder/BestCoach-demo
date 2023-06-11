// import '@/styles/components/Button.scss'
import React from 'react'
import PropTypes from 'prop-types'

function Button({ className, children, onClick, primary, size, ...props }) {
  const classList = ['btn', primary ? 'primary' : 'secondary', size || 'default', className].filter(c => c).join(' ')
  return (
    <button className={classList} onClick={onClick} {...props}>
      {/* <button className={`btn ${primary ? 'primary' : 'secondary'} ${size || null}`} onClick={onClick} {...props}> */}
      {children}
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'default']),
}

export default Button
