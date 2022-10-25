import { FunctionComponent } from "react";

interface Props {
  className?: string;
  // fill?: string;
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
    <path d="M9.954 14.754L10.8 15.6L14.4 12L10.8 8.4L9.954 9.246L12.702 12L9.954 14.754Z" />
  </svg>
);

export default ChevronLeftIcon;
