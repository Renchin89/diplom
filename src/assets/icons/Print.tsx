import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  strokeWidth?: string;
  stroke?: string;
}

const PrintIcon: FunctionComponent<Props> = ({
  fill = "none",
  stroke = "currentColor",
  className,
  strokeWidth = "1.5px",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    width="24"
    height="24"
  >
    <rect
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      x="2.8"
      y="8.11"
      width="18.4"
      height="9.28"
      rx="2.75"
    />
    <path
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.84,3.25h6.33A2.87,2.87,0,0,1,18,6.13v2a0,0,0,0,1,0,0H6a0,0,0,0,1,0,0v-2A2.87,2.87,0,0,1,8.84,3.25Z"
    />
    <path
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.84,13.48h6.33A2.87,2.87,0,0,1,18,16.36v4.47a0,0,0,0,1,0,0H6a0,0,0,0,1,0,0V16.36A2.87,2.87,0,0,1,8.84,13.48Z"
      transform="translate(24 34.31) rotate(180)"
    />
    <line
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      x1="11.3"
      y1="16.78"
      x2="15.88"
      y2="16.78"
    />
    <circle fill={stroke} cx="8.85" cy="16.78" r="0.73" />
    <circle fill={stroke} cx="18.09" cy="10.91" r="0.73" />
  </svg>
);

export default PrintIcon;
