import * as React from "react"
const CancelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#F03737"
      d="M11.75 2.5C6.365 2.5 2 6.865 2 12.25S6.365 22 11.75 22s9.75-4.365 9.75-9.75-4.365-9.75-9.75-9.75Zm0 2.566c1.495 0 2.882.457 4.032 1.238L5.804 16.28A7.183 7.183 0 0 1 11.75 5.066Zm0 14.368a7.154 7.154 0 0 1-4.032-1.238l9.978-9.977a7.183 7.183 0 0 1-5.946 11.215Z"
    />
  </svg>
)
    export default CancelIcon
