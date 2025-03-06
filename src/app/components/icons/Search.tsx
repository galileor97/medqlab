import * as React from "react"
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#9AA4B2"
      fillRule="evenodd"
      d="M8.583 1.292a7.292 7.292 0 1 0 0 14.583 7.292 7.292 0 0 0 0-14.583ZM.042 8.583a8.542 8.542 0 1 1 15.007 5.582l2.726 2.726a.625.625 0 1 1-.884.884l-2.726-2.726A8.542 8.542 0 0 1 .041 8.583Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SearchIcon
