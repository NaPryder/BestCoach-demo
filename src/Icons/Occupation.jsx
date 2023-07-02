import React from 'react'
import IconWraper from './IconWraper'
import { MapIconStylingTemplate } from './iconOptions'

const Occupation = ({ className, ...props }) => {
  return (
    <IconWraper option={MapIconStylingTemplate.occupation} {...props}>
      <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.50708 1.56165H9.03357C9.3686 1.56165 9.68991 1.69474 9.92682 1.93164C10.1637 2.16855 10.2968 2.48986 10.2968 2.82489V4.08814H12.8233C13.1583 4.08814 13.4796 4.22123 13.7166 4.45813C13.9535 4.69504 14.0865 5.01635 14.0865 5.35138V12.2992C14.0865 12.6343 13.9535 12.9556 13.7166 13.1925C13.4796 13.4294 13.1583 13.5625 12.8233 13.5625H2.71735C2.38231 13.5625 2.061 13.4294 1.8241 13.1925C1.58719 12.9556 1.4541 12.6343 1.4541 12.2992V5.35138C1.4541 4.65028 2.01625 4.08814 2.71735 4.08814H5.24384V2.82489C5.24384 2.12379 5.80598 1.56165 6.50708 1.56165ZM9.03357 4.08814V2.82489H6.50708V4.08814H9.03357Z" />
      </svg>
    </IconWraper>
  )
}

export default Occupation
