import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button, useMediaQuery } from "@material-ui/core";
import theme from "../../../site-settings/theme/mui-theme";
import { ChevronRightIcon, ChevronLeftIcon } from "../../../assets/icons";

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
    <header className={cn(className, "w-full h-18 flex border-b-2")}>
      <div
        className={cn(
          extended ? "w-96 px-12" : "w-24 px-8",
          "w-96 bg-wallpaper-dark text-lg text-white py-6 "
        )}
      >
        {extended ? <>HR SYSTEM</> : <>HR</>}
      </div>
      <div className="flex divide-x-2">
        <div
          className="p-4 h-18 w-18 flex justify-center items-center"
          onClick={onClick}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            
          {extended ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </div>
        </div>
        <span className="p-4">header</span>
      </div>
    </header>
  );
};

export default Header;
