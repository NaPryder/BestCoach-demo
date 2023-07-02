import React from 'react'
import PropTypes from 'prop-types'

const HighlightAction = ({
  id,
  topic,
  keywordComponent,
  actionComponent,
  backgroundColor,
  keywordClassname,
  actionClassname,
  topicColor,
  ...props
}) => {
  const containerClassNames = ['highlight-action-container', backgroundColor || 'maroon']
  const topicClassNames = ['topic', topicColor]
  return (
    <div id={id} className={containerClassNames.join(' ')}>
      <div className={topicClassNames.join(' ')}>
        <h2>{topic}</h2>
        <div className="keywords">{keywordComponent}</div>
      </div>
      <div className="actions">{actionComponent}</div>
    </div>
  )
}

HighlightAction.propTypes = {
  keywordComponent: PropTypes.element,
  backgroundColor: PropTypes.oneOf(['maroon', 'yellow']),
}

export default HighlightAction
