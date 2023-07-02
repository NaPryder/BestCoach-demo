import IconWraper from "./IconWraper";
import { MapIconStylingTemplate } from "./iconOptions";
import React from "react"

function MinusCircle({ className, ...props }) {
  return (
    <IconWraper option={MapIconStylingTemplate.minusCircle} {...props}>
      <svg 
        className={className} 
        style={props.style}
        viewBox="0 0 20 20" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="minus" clipPath="url(#clip0_233_848)">
          <path 
            id="Vector" 
            d="M10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM15 9H5V11H15V9Z" 
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_233_848">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </IconWraper>
  );
}

export default MinusCircle;
