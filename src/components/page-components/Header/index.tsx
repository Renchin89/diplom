import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button, useMediaQuery } from "@material-ui/core";
import theme from "../../../site-settings/theme/mui-theme";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  NotificationIcon,
} from "../../../assets/icons";

interface Props {
  className?: string;
  extended: boolean;
  onClick: () => void;
}

const Header: FunctionComponent<Props> = ({
  className,
  extended = false,
  onClick,
}) => {
  const mobileLayout = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className={cn(className, "w-full h-18 flex border-b-2 bg-white")}>
      <div
        className="p-4 h-18 w-18 flex border-x-2 justify-center items-center"
        onClick={onClick}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          {extended ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </div>
      </div>
      <span className="p-4 border-r-2">
        <p>Your organization</p>
        <h1 className="font-bold">NUM</h1>
      </span>
      <span className="absolute right-10 top-4 flex space-x-4">
        <NotificationIcon />
        <NotificationIcon />
      </span>
    </header>
  );
};

export default Header;
