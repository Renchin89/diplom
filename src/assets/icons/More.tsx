import { FunctionComponent } from "react";

interface Props {
  className?: string;
  stroke?: string;
}

const MoreIcon: FunctionComponent<Props> = ({
  stroke = "currentColor",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    width="24"
    height="24"
  >
    <rect fill={stroke} x='2.31' y='9.8' width='4.4' height='4.4' rx='1.45' />
    <rect fill={stroke} x='10' y='9.8' width='4.4' height='4.4' rx='1.45' />
    <rect fill={stroke} x='17.7' y='9.8' width='4.4' height='4.4' rx='1.45' />
  </svg>
);

export default MoreIcon;
