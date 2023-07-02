import React from 'react'

const StarRating = ({ score, size, id, starFrameColor, starFrameShade }) => {
  score = score || 4.8
  size = size || 24
  starFrameColor = starFrameColor || 'yellow'
  starFrameShade = starFrameShade || 'secondary'
  const starClassname = `star-frame-color-${starFrameColor}-${starFrameShade}`
  const containerSizeStyle = {
    height: `${size}px`,
    width: `${size * 5}px`,
  }
  const starSizeStyle = {
    height: `${size}px`,
    width: '100%',
  }
  id = `fivestars-rating-${id}`
  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <symbol id={id}>
            <g transform={`scale(${size / 24})`}>
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                fill="currentFill"
                fillRule="evenodd"
                transform={`translate(0)`}
              />
            </g>
            <g transform={`scale(${size / 24})`}>
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                fill="currentFill"
                fillRule="evenodd"
                transform={`translate(24)`}
              />
            </g>
            <g transform={`scale(${size / 24})`}>
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                fill="currentFill"
                fillRule="evenodd"
                transform={`translate(48)`}
              />
            </g>
            <g transform={`scale(${size / 24})`}>
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                fill="currentFill"
                fillRule="evenodd"
                transform={`translate(72)`}
              />
            </g>
            <g transform={`scale(${size / 24})`}>
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                fill="currentFill"
                fillRule="evenodd"
                transform={`translate(96)`}
              />
            </g>
          </symbol>
        </defs>
      </svg>
      <div class="progress-rating-star-container" style={containerSizeStyle}>
        <progress style={starSizeStyle} class="rating-bg" value={score} max="5"></progress>
        <svg className={starClassname}>
          <use xlinkHref={`#${id}`} />
        </svg>
      </div>
    </>
  )
}

export default StarRating
