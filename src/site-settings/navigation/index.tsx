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
        label: "Dashboard",
        value: MainTab.DASHBOARD,
        link: `/${MainTab.DASHBOARD}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Calendar",
        value: MainTab.CALENDAR,
        link: `/${MainTab.DASHBOARD}`,
        icon: ChevronLeftIcon,
      },
    ],
  },
  {
    groupLabel: "Organization",
    groupItems: [
      {
        label: "Employee",
        value: OrganizationTab.EMPLOYEE,
        link: `/${OrganizationTab.EMPLOYEE}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Employee",
        value: OrganizationTab.STRUCTURE,
        link: `/${OrganizationTab.STRUCTURE}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Employee",
        value: OrganizationTab.SETTINGS,
        link: `/${OrganizationTab.SETTINGS}`,
        icon: ChevronLeftIcon,
      },
      {
        label: "Employee",
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
