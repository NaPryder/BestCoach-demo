import React from 'react'

function Menubar({ className, width, height, ...props }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.6806 7.5H1.31944C0.590735 7.5 0 7.92533 0 8.45V8.55C0 9.07467 0.590735 9.5 1.31944 9.5H23.6806C24.4093 9.5 25 9.07467 25 8.55V8.45C25 7.92533 24.4093 7.5 23.6806 7.5Z"
        fill="#18181B"
      />
      <path
        d="M23.6806 15H1.31944C0.590735 15 0 15.4253 0 15.95V16.05C0 16.5747 0.590735 17 1.31944 17H23.6806C24.4093 17 25 16.5747 25 16.05V15.95C25 15.4253 24.4093 15 23.6806 15Z"
        fill="#18181B"
      />
      <path
        d="M23.6806 0H1.31944C0.590735 0 0 0.425329 0 0.95V1.05C0 1.57467 0.590735 2 1.31944 2H23.6806C24.4093 2 25 1.57467 25 1.05V0.95C25 0.425329 24.4093 0 23.6806 0Z"
        fill="#18181B"
      />
    </svg>
  )
}

export default Menubar
