import PropTypes from 'prop-types'

function ArrowRight({ className, width, height, ...props }) {
  return (
    <svg
      className={`${className} icon-arrow-default`}
      viewBox="0 0 24 24"
      fill="currentColor"
      height={height ? `${height + 2}px` : '20px'}
      width={width ? `${width + 2}px` : '20px'}
      {...props}
    >
      <path
        d="M18.59 13H3a1 1 0 010-2h15.59l-5.3-5.3a1 1 0 111.42-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-1.42-1.4l5.3-5.3z"
        stroke="currentColor"
      />
    </svg>
  )
}
ArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default ArrowRight
