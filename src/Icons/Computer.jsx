import IconWraper from './IconWraper'
import { MapIconStylingTemplate } from './iconOptions'
import React from 'react'

function Computer({ className, ...props }) {
  return (
    <IconWraper option={MapIconStylingTemplate.computer} {...props}>
      <svg className={className} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'none' }}>
        <path
          d="M14 4.00049H6C4.89543 4.00049 4 4.89592 4 6.00049V20.6672C4 21.7718 4.89543 22.6672 6 22.6672H26C27.1046 22.6672 28 21.7718 28 20.6672V14.0005"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22.6671V28.0004"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3332 4.00049L18.6665 6.66716L21.3332 9.33382"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.3333 4.00049L27.9999 6.66716L25.3333 9.33382"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.3335 28.0005H22.6668"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWraper>
  )
}

export default Computer
