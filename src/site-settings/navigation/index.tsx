import { FunctionComponent } from "react";
import { EmployeeIcon, ReportIcon, RiskIcon, SettingsIcon, TaskIcon } from "../../assets/icons";
import ChevronLeftIcon from "../../assets/icons/ChevronRight";
import { MainTab, OrganizationTab, SettingsTab } from "../../misc/constants";

const tasks: Array<{
  type: string;
  label: string;
}> = [
  {
    type: "inProgress",
    label: "In Progress",
  },
  {
    type: "inProgress",
    label: "In Progress",
  },
  {
    type: "inProgress",
    label: "In Progress",
  },
  {
    type: "inProgress",
    label: "In Progress",
  },
];

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
        label: "Task",
        value: MainTab.TASK,
        link: `/${MainTab.TASK}`,
        icon: TaskIcon,
      },
    ],
  },
  {
    groupLabel: "Organization",
    groupItems: [
      {
        label: "Employee",
        value: OrganizationTab.EMPLOYEE,
        link: `/`,
        icon: EmployeeIcon,
      },
      {
        label: "Risk",
        value: OrganizationTab.RISK,
        link: `/${OrganizationTab.RISK}`,
        icon: RiskIcon,
      },
      {
        label: "Report",
        value: OrganizationTab.REPORT,
        link: `/${OrganizationTab.REPORT}`,
        icon: ReportIcon,
      },
    ],
  },
  {
    groupLabel: "Settings",
    groupItems: [
      {
        label: "Settings",
        value: SettingsTab.SETTINGS,
        link: `/${SettingsTab.SETTINGS}`,
        icon: SettingsIcon,
      },
    ],
  },
];
