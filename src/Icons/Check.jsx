import React from 'react'

function Check({ className, width, height, ...props }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5546 0.461221C17.0117 0.918304 17.0117 1.65938 16.5546 2.11647L7.1911 11.4799C6.73402 11.937 5.99294 11.937 5.53586 11.4799L0.854117 6.7982C0.397034 6.34112 0.397034 5.60004 0.854117 5.14296C1.3112 4.68588 2.05228 4.68588 2.50936 5.14296L6.36348 8.99708L14.8993 0.461221C15.3564 0.00413738 16.0975 0.00413738 16.5546 0.461221Z"
      />
    </svg>
  )
}

export default Check
