import * as React from "react"
const RegisterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect width={32} height={32} fill="#E1E9FF" rx={16} />
    <path
      fill="#0078FF"
      d="M15.883 16.557a4.945 4.945 0 1 0-4.945-4.945 4.945 4.945 0 0 0 4.945 4.945Z"
    />
    <path
      fill="#0078FF"
      fillRule="evenodd"
      d="M15.656 25.108v-1.847c0-.418.166-.818.462-1.113l1.79-1.79a4.487 4.487 0 0 1 .816-2.791 17.002 17.002 0 0 0-2.843-.235c-2.987 0-5.632.747-7.274 1.866-1.252.854-1.943 1.94-1.943 3.078v1.304a1.526 1.526 0 0 0 1.529 1.528h7.463Z"
      clipRule="evenodd"
    />
    <path
      fill="#00B728"
      fillRule="evenodd"
      d="M21.862 23.716a3.598 3.598 0 1 0-3.021-3.02l-2.088 2.087a.675.675 0 0 0-.198.477v2.067c0 .372.302.674.674.674h2.068c.178 0 .35-.07.477-.198l2.088-2.087Zm-.153-2.868a.975.975 0 1 1 1.38-1.378.975.975 0 0 1-1.38 1.378Z"
      clipRule="evenodd"
    />
  </svg>
)
export default RegisterIcon
