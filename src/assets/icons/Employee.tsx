import { FunctionComponent } from "react";

interface Props {
  className?: string;
  fill?: string;
  stroke?: string;
}

const EmployeeIcon: FunctionComponent<Props> = ({
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
      d="M0 36v-2.65q0-1.95 2.1-3.15T7.5 29q.65 0 1.2.025.55.025 1.1.125-.4.85-.6 1.725-.2.875-.2 1.875V36Zm12 0v-3.25q0-3.25 3.325-5.25t8.675-2q5.4 0 8.7 2 3.3 2 3.3 5.25V36Zm27 0v-3.25q0-1-.175-1.875t-.575-1.725q.55-.1 1.1-.125Q39.9 29 40.5 29q3.4 0 5.45 1.2Q48 31.4 48 33.35V36Zm-15-7.5q-4 0-6.5 1.2T15 32.75V33h18v-.3q0-1.8-2.475-3T24 28.5Zm-16.5-1q-1.45 0-2.475-1.025Q4 25.45 4 24q0-1.45 1.025-2.475Q6.05 20.5 7.5 20.5q1.45 0 2.475 1.025Q11 22.55 11 24q0 1.45-1.025 2.475Q8.95 27.5 7.5 27.5Zm33 0q-1.45 0-2.475-1.025Q37 25.45 37 24q0-1.45 1.025-2.475Q39.05 20.5 40.5 20.5q1.45 0 2.475 1.025Q44 22.55 44 24q0 1.45-1.025 2.475Q41.95 27.5 40.5 27.5ZM24 24q-2.5 0-4.25-1.75T18 18q0-2.55 1.75-4.275Q21.5 12 24 12q2.55 0 4.275 1.725Q30 15.45 30 18q0 2.5-1.725 4.25T24 24Zm0-9q-1.25 0-2.125.85T21 18q0 1.25.875 2.125T24 21q1.3 0 2.15-.875Q27 19.25 27 18q0-1.3-.85-2.15Q25.3 15 24 15Zm0 18Zm0-15Z"
    />
  </svg>
);

export default EmployeeIcon;
