import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const ReportIcon: FunctionComponent<Props> = ({
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
      d="M16 23.5v-3h16v3Zm0-8v-3h16v3Zm-5 13h16q1.3 0 2.45.6 1.15.6 1.95 1.6L37 38V7H11ZM11 41h24.5l-6.45-8.45q-.4-.5-.925-.775T27 31.5H11V41Zm26 3H11q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h26q1.2 0 2.1.9.9.9.9 2.1v34q0 1.2-.9 2.1-.9.9-2.1.9Zm-26-3V7v34Zm0-9.5v-3 3Z"
    />
  </svg>
);

export default ReportIcon;
