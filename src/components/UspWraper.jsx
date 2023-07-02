import React from 'react'

const UspWraper = ({ content, size, children, ...props }) => {
  let s = size ? size : 'lg'
  let topic = ''
  if (Object.keys(content).includes('topic')) {
    topic = content.topic
  }
  let description = ''
  if (Object.keys(content).includes('description')) {
    description = content.description
  }
  return (
    <div className={`usp ${s}`}>
      <span className="icon">{content.render}</span>
      <h3>{topic}</h3>
      <p>{description}</p>
    </div>
  )
}

export default UspWraper
