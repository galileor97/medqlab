import * as React from "react"
const AlarmIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#F03737"
      fillRule="evenodd"
      d="M12 22.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h6ZM8.136 2.103a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.238Zm7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 0 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.034Z"
      clipRule="evenodd"
    />
  </svg>
)
export default AlarmIcon
