import IconWraper from './IconWraper'
import { MapIconStylingTemplate } from './iconOptions'
import React from 'react'

function Flag({ className, ...props }) {
  return (
    <IconWraper option={MapIconStylingTemplate.flag} {...props}>
      <svg className={className} viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg" style={props.style}>
        <path
          id="Vector"
          d="M10.2857 3.5H6.85714V0H10.2857V3.5ZM17.1429 0H13.7143V3.5H17.1429V0ZM6.85714 17.5H10.2857V14H6.85714V17.5ZM24 10.5V7H20.5714V10.5H24ZM24 17.5V14H20.5714V17.5H24ZM13.7143 17.5H17.1429V14H13.7143V17.5ZM24 0H20.5714V3.5H24V0ZM13.7143 7V3.5H10.2857V7H13.7143ZM3.42857 10.5V7H6.85714V3.5H3.42857V0H0V28H3.42857V14H6.85714V10.5H3.42857ZM17.1429 14H20.5714V10.5H17.1429V14ZM10.2857 10.5V14H13.7143V10.5H10.2857ZM6.85714 7V10.5H10.2857V7H6.85714ZM13.7143 10.5H17.1429V7H13.7143V10.5ZM17.1429 3.5V7H20.5714V3.5H17.1429Z"
        />
      </svg>
    </IconWraper>
  )
}

export default Flag
