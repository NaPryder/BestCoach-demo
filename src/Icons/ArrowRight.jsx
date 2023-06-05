function ArrowRight({ className, width, height, ...props }) {
  return (
    <>
      {/* <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" {...props}>
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
        />
      </svg> */}

      <svg
        className={className}
        width={width ? width : '17px'}
        height={height ? height : '14px'}
        viewBox="0 0 17 14"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Icon"
          d="M10 1.75L15.25 7M15.25 7L10 12.25M15.25 7L1.75 7"
          stroke="#F9FAFB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  )
}

export default ArrowRight
