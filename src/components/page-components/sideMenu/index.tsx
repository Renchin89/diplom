import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Tabs, Tab } from "@material-ui/core";
import {
  MainTab,
  OrganizationTab,
  RecruitmentTab,
} from "../../../misc/constants";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}
const SideMenu: FunctionComponent<Props> = ({ className }) => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  return (
    <div
      className={cn(
        className,
        "flex flex-col text-left w-full px-6 py-10 sidebar"
      )}
    >
      <Tabs orientation="vertical" className="w-full">
        <Tab label={MainTab.EMPLOYEE} onClick={() => router.push("/")} />
        <Tab label={MainTab.TASK} onClick={() => router.push("/Work")} />
        {/* </Tabs>
      <h1 className="p-4">Organization</h1>
      <Tabs orientation="vertical" className="w-full"> */}
        <Tab
          label={cn(OrganizationTab.ADDEMPLOYEE)}
          onClick={() => router.push("/AddEmployee")}
        />
        <Tab
          label={OrganizationTab.RISK}
          onClick={() => router.push("/Risk")}
        />
        <Tab
          label={OrganizationTab.SETTINGS}
          onClick={() => router.push("/Settings")}
        />
        <Tab
          label={OrganizationTab.REPORT}
          onClick={() => router.push("/Report")}
        />
        {/* </Tabs>
      <h1 className="p-4">Recruitment</h1>
      <Tabs orientation="vertical" className="w-full"> */}
        <Tab
          label={RecruitmentTab.CANDIDATES}
          onClick={() => router.push("/Candidates")}
        />
      </Tabs>
    </div>
  );
};

export default SideMenu;
