import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const ChevronLeftIcon: FunctionComponent<Props> = ({
  stroke = "currentColor",
  className,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M14.046 9.246L13.2 8.4L9.6 12L13.2 15.6L14.046 14.754L11.298 12L14.046 9.246Z"
        fill={stroke}
        stroke={stroke}
      />
    </g>
    <defs>
      <clipPath id="clip0_12_1266">
        <rect width="24" height="24" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ChevronLeftIcon;
