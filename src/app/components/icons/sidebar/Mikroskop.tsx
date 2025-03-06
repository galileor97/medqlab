import * as React from "react"
const MikroskopIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#626F84" d="M4 21.5h16H4Z" />
    <path
      stroke="#626F84"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 21.5h16M12.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <path
      stroke="#626F84"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 18.5h-5.5m-3-9a4.5 4.5 0 1 0 0 9h.5"
    />
    <path
      stroke="#626F84"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.5 21.5-1.272-3.816a1 1 0 0 0-.949-.684h-.058a1 1 0 0 0-.949.684L9 21.5M15.802 15.5 18 14.228m-7.614-6.097L9.34 6.316a2.547 2.547 0 0 1 .93-3.475 2.534 2.534 0 0 1 3.466.931L16.78 9.06c.474.824.712 1.236.712 1.645 0 .267-.07.53-.204.763-.205.354-.615.591-1.437 1.067-.822.475-1.232.713-1.64.713-.268 0-.53-.07-.762-.204-.353-.205-.59-.616-1.064-1.44l-.51-.885"
    />
  </svg>
)
export default MikroskopIcon
