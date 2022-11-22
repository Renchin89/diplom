import { FunctionComponent } from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

const AddEmployee: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={cn(className, "w-full")}>
      <h1 className="text-5xl m-auto w-1/4">Coming Soon</h1>
    </div>
  );
};
export default AddEmployee;
