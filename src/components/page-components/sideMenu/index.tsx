import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button, useMediaQuery, useTheme, Tabs } from "@material-ui/core";
import { MainTab } from "../../../misc/constants";

interface Props {
  className?: string;
}

const SideMenu: FunctionComponent<Props> = ({ className }) => {
  const router = useRouter();
  console.log("🚀 ~ file: index.tsx ~ line 13 ~ router", router);

  return (
    <div className={cn(className, "flex")}>
      <Tabs></Tabs>
    </div>
  );
};

export default SideMenu;
