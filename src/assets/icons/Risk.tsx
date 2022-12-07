import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const RiskIcon: FunctionComponent<Props> = ({
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
      d="M21.3 41.2V28.7l-10.8 6.25-2.75-4.65L18.6 24 7.8 17.75l2.7-4.65 10.8 6.25V6.8h5.4v12.55l10.8-6.25 2.7 4.65L29.4 24l10.85 6.3-2.75 4.65-10.8-6.25v12.5Z"
    />
  </svg>
);

export default RiskIcon;
