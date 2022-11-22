import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import {
  Button,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@material-ui/core";
import {
  MainTab,
  OrganizationTab,
  RecruitmentTab,
} from "../../../misc/constants";

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}
function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SideMenu: FunctionComponent<Props> = ({ className }) => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  console.log(MainTab);
  return (
    <div
      className={cn(
        className,
        "flex flex-col text-left w-full px-6 py-10 sidebar"
      )}
    >
      <Tabs
        // onChange={(event: React.SyntheticEvent, newValue: number) => {
        //   setValue(newValue);
        // }}
        orientation="vertical"
        className="w-full"
      >
        <a href="/Dashboard">
          <Tab label={MainTab.DASHBOARD} />
        </a>
        <a href="/">
          <Tab label={MainTab.CALENDAR} />
        </a>
      </Tabs>
      <Tabs
        // onChange={(event: React.SyntheticEvent, newValue: number) => {
        //   setValue(newValue);
        // }}
        orientation="vertical"
        className="w-full"
      >
        <Tab label={OrganizationTab.EMPLOYEE} />
        <Tab label={OrganizationTab.REPORT} />
        <Tab label={OrganizationTab.SETTINGS} />
        <Tab label={OrganizationTab.STRUCTURE} />
      </Tabs>
      <Tabs
        // onChange={(event: React.SyntheticEvent, newValue: number) => {
        //   setValue(newValue);
        // }}
        orientation="vertical"
        className="w-full"
      >
        <Tab label={RecruitmentTab.CANDIDATES} />
      </Tabs>
    </div>
  );
};

export default SideMenu;
