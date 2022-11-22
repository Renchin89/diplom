import { FunctionComponent } from "react";
import ChevronLeftIcon from "../../assets/icons/ChevronRight";
import { MainTab, OrganizationTab, RecruitmentTab } from "../../misc/constants";

export const navigationTabItems: Array<{
  groupLabel: string;
  groupItems: Array<{
    label: string;
    link: string;
    icon: FunctionComponent<{
      className?: string;
      fill?: string;
      stroke?: string;
      onClick?: () => void;
    }>;
    value: string;
  }>;
}> = [
  {
    groupLabel: "Main",
    groupItems: [
      {
        label: "EMPLOYEE",
        value: MainTab.EMPLOYEE,
        link: `/${MainTab.EMPLOYEE}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Task",
        value: MainTab.TASK,
        link: `/${MainTab.TASK}`,
        icon: ChevronLeftIcon,
      },
    ],
  },
  {
    groupLabel: "Organization",
    groupItems: [
      {
        label: "Add Employee",
        value: OrganizationTab.ADDEMPLOYEE,
        link: `/${OrganizationTab.ADDEMPLOYEE}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Report",
        value: OrganizationTab.REPORT,
        link: `/${OrganizationTab.REPORT}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Risk",
        value: OrganizationTab.RISK,
        link: `/${OrganizationTab.RISK}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Settings",
        value: OrganizationTab.SETTINGS,
        link: `/${OrganizationTab.SETTINGS}`,
        icon: ChevronLeftIcon,
      },
    ],
  },
  {
    groupLabel: "Recruitment",
    groupItems: [
      {
        label: "Recruitment",
        value: RecruitmentTab.CANDIDATES,
        link: `/${RecruitmentTab.CANDIDATES}`,
        icon: ChevronLeftIcon,
      },
    ],
  },
];
