import * as React from "react"
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#FCC969"
      d="M2 12.5c0-4.714 0-7.071 1.464-8.536C4.93 2.5 7.286 2.5 12 2.5c4.714 0 7.071 0 8.535 1.464C22 5.43 22 7.786 22 12.5c0 4.714 0 7.071-1.465 8.535C19.072 22.5 16.714 22.5 12 22.5s-7.071 0-8.536-1.465C2 19.572 2 17.214 2 12.5Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12 7.75a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53v-4a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ClockIcon
