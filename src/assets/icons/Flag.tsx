import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const FlagIcon: FunctionComponent<Props> = ({
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
      d="M10 42V8h17.15l.95 4.3H40v18.5H27.2l-.95-4.25H13V42Zm15-22.6Zm4.75 8.4H37V15.3H25.55L24.6 11H13v12.55h15.8Z"
    />
  </svg>
);

export default FlagIcon;
