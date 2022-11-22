import { FunctionComponent } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  // fill?: string;
  stroke?: string;
}

const Dot: FunctionComponent<Props> = ({
  stroke = "currentColor",
  className,
}) => (
  <div className={cn(className, "")}>
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <path d="M24 33.3q3.9 0 6.6-2.7 2.7-2.7 2.7-6.6 0-3.9-2.7-6.6-2.7-2.7-6.6-2.7-3.9 0-6.6 2.7-2.7 2.7-2.7 6.6 0 3.9 2.7 6.6 2.7 2.7 6.6 2.7ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Z" />
    </svg>
  </div>
);

export default Dot;
