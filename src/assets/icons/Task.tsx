import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const TaskIcon: FunctionComponent<Props> = ({
  stroke = "currentColor",
  fill = stroke,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
    fill={stroke}
    stroke={stroke}
  >
    <path
      fill={fill}
      stroke={stroke}
      d="M21.7 35.25 33.15 23.8l-1.95-1.95-9.5 9.5-5.15-5.15-1.95 1.95ZM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z"
    />
  </svg>
);

export default TaskIcon;
