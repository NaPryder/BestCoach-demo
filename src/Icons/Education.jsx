import React from 'react'
import IconWraper from './IconWraper'
import { MapIconStylingTemplate } from './iconOptions'

const Education = ({ className, ...props }) => {
  return (
    <IconWraper option={MapIconStylingTemplate.education} {...props}>
      <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.34914 9.01185V10.7867C3.34914 11.2478 3.60179 11.6773 4.00602 11.8984L7.16414 13.6227C7.54311 13.8311 7.99788 13.8311 8.37685 13.6227L11.535 11.8984C11.9392 11.6773 12.1918 11.2478 12.1918 10.7867V9.01185L8.37685 11.0962C7.99788 11.3046 7.54311 11.3046 7.16414 11.0962L3.34914 9.01185ZM7.16414 2.91038L1.83956 5.81584C1.40374 6.05586 1.40374 6.68748 1.83956 6.9275L7.16414 9.83296C7.54311 10.0414 7.99788 10.0414 8.37685 9.83296L13.4551 7.06014V10.793C13.4551 11.1404 13.7393 11.4246 14.0867 11.4246C14.4341 11.4246 14.7183 11.1404 14.7183 10.793V6.74433C14.7183 6.51063 14.592 6.30219 14.3899 6.1885L8.37685 2.91038C8.19024 2.81085 7.98199 2.75879 7.77049 2.75879C7.559 2.75879 7.35075 2.81085 7.16414 2.91038Z" />
      </svg>
    </IconWraper>
  )
}

export default Education
