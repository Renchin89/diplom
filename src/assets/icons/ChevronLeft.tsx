import { FunctionComponent } from "react";

interface Props {
  className?: string;
  stroke?: string;
}

const ChevronLeftIcon: FunctionComponent<Props> = ({
  stroke = "currentColor",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke={stroke}
  >
    <path d="M14.046 9.246L13.2 8.4L9.6 12L13.2 15.6L14.046 14.754L11.298 12L14.046 9.246Z" />
  </svg>
);

export default ChevronLeftIcon;
