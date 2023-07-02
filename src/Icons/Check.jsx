import IconWraper from './IconWraper'
import { MapIconStylingTemplate } from './iconOptions'
import React from 'react'

function Check({ className, ...props }) {
  return (
    <IconWraper option={MapIconStylingTemplate.check} {...props}>
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon/Solid/check">
          <path
            id="Icon"
            fillRule="currentColor"
            clipRule="currentColor"
            d="M19.5545 6.46128C20.0116 6.91836 20.0116 7.65944 19.5545 8.11653L10.191 17.48C9.73394 17.9371 8.99287 17.9371 8.53578 17.48L3.85404 12.7983C3.39696 12.3412 3.39696 11.6001 3.85404 11.143C4.31113 10.6859 5.0522 10.6859 5.50929 11.143L9.3634 14.9971L17.8993 6.46128C18.3563 6.0042 19.0974 6.0042 19.5545 6.46128Z"
          />
        </g>
      </svg>
    </IconWraper>
  )
}

export default Check
