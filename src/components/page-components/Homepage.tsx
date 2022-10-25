import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button } from "@material-ui/core";

interface Props {
  className?: string;
}

const MainPage: FunctionComponent<Props> = ({ className }) => {
  return <div className={cn(className, "flex")}>a</div>;
};

export default MainPage;
