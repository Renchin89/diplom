import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Tabs, Tab } from "@material-ui/core";
import { MainTab, OrganizationTab, SettingsTab } from "../../../misc/constants";
import { navigationTabItems } from "../../../site-settings/navigation";

interface Props {
  className?: string;
  isExtended?: boolean;
}
const SideMenu: FunctionComponent<Props> = ({
  className,
  isExtended = true,
}) => {
  const router = useRouter();
  const { pathname } = useRouter();
  const [main, org, settings] = navigationTabItems;
  const [mainTabState, setMainTabState] = useState<MainTab>();
  const [orgTabState, setOrgTabState] = useState<OrganizationTab>();
  const [settingsTabState, setSettingsTabState] = useState<SettingsTab>();

  useEffect(() => {
    const path = pathname.replace("/", "");
    if (path == "") {
      setOrgTabState(OrganizationTab.EMPLOYEE);
    } else {
      Object.values(OrganizationTab).includes(path as OrganizationTab)
        ? setOrgTabState(path as OrganizationTab)
        : setOrgTabState(undefined);
      Object.values(MainTab).includes(path as MainTab)
        ? setMainTabState(path as MainTab)
        : setMainTabState(undefined);
      Object.values(SettingsTab).includes(path as SettingsTab)
        ? setSettingsTabState(path as SettingsTab)
        : setSettingsTabState(undefined);
    }
  }, [pathname]);

  return (
    <div
      className={cn(
        className,
        "flex flex-col text-left w-full px-6 py-10 sidebar"
      )}
    >
      <Tabs
        value={mainTabState ?? false}
        orientation="vertical"
        className="w-full rounded-2xl"
        classes={{
          indicator: "bg-inherit",
        }}
        onChange={async (_e, value: MainTab) => {
          if (Object.values(MainTab).includes(value)) {
            await router.push(value);
          }
        }}
      >
        {main.groupItems.map((item, idx) => (
          <Tab
            classes={{
              root: "pt-2 text-[#DEDEED] font-bold opacity-100 max-w-full hover:bg-secondary hover:text-primary",
              selected: "bg-secondary text-primary",
            }}
            className={cn(
              "rounded-2xl mt-2 capitalize text-base",
              isExtended ? "px-4" : "px-2"
            )}
            label={isExtended ? item.label : ""}
            value={item.value}
            key={idx}
            icon={<item.icon className="h-8 w-8 mr-2" />}
          />
        ))}
      </Tabs>
      <div
        className={cn(
          "flex flex-row items-center h-10 mt-2",
          isExtended ? "px-6" : "p-0"
        )}
      >
        {isExtended ? (
          <h1 className="text-base text-[#DEDEED]">{org.groupLabel}</h1>
        ) : (
          <hr className="w-full" />
        )}
      </div>
      <Tabs
        value={orgTabState ?? false}
        orientation="vertical"
        className="w-full rounded-2xl"
        classes={{
          indicator: "bg-inherit",
        }}
        onChange={async (_e, value: OrganizationTab) => {
          if (Object.values(OrganizationTab).includes(value)) {
            await router.push(value);
          }
        }}
      >
        {org.groupItems.map((item, idx) => (
          <Tab
            classes={{
              root: "pt-2 text-[#DEDEED] font-bold opacity-100 max-w-full hover:bg-secondary hover:text-primary",
              selected: "bg-secondary text-primary",
            }}
            className={cn(
              "rounded-2xl mt-2 capitalize text-base",
              isExtended ? "px-4" : "px-2"
            )}
            label={isExtended ? item.label : ""}
            value={item.value}
            key={idx}
            icon={<item.icon className="h-8 w-8 mr-2" />}
          />
        ))}
      </Tabs>
      <div
        className={cn(
          "flex flex-row items-center h-10 mt-2",
          isExtended ? "px-6" : "p-0"
        )}
      >
        {isExtended ? (
          <h1 className="text-base text-[#DEDEED]">{settings.groupLabel}</h1>
        ) : (
          <hr className="w-full" />
        )}
      </div>
      <Tabs
        value={settingsTabState ?? false}
        orientation="vertical"
        className="w-full rounded-2xl"
        classes={{
          indicator: "bg-inherit",
        }}
        onChange={async (_e, value: SettingsTab) => {
          if (Object.values(SettingsTab).includes(value)) {
            await router.push(value);
          }
        }}
      >
        {settings.groupItems.map((item, idx) => (
          <Tab
            classes={{
              root: "pt-2 text-[#DEDEED] font-bold opacity-100 max-w-full hover:bg-secondary hover:text-primary",
              selected: "bg-secondary text-primary",
            }}
            className={cn(
              "rounded-2xl mt-2 capitalize text-base",
              isExtended ? "px-4" : "px-2"
            )}
            label={isExtended ? item.label : ""}
            value={item.value}
            key={idx}
            onClick={async () =>
              await router.push(item.link).catch((e) => console.error(e))
            }
            icon={<item.icon className="h-8 w-8 mr-2" />}
          />
        ))}
      </Tabs>
    </div>
  );
};

// const SideMenu: FunctionComponent<Props> = ({ className, isExtended }) => {
//   const { isReady, pathname } = useRouter();
//   const path = pathname.replace("/", "");

//   if (isReady) {
//     const currentTab: MainTab | OrganizationTab | SettingsTab | undefined =
//       Object.values(MainTab).includes(path as MainTab)
//         ? (path as MainTab)
//         : Object.values(OrganizationTab).includes(path as OrganizationTab)
//         ? (path as OrganizationTab)
//         : Object.values(SettingsTab).includes(path as SettingsTab)
//         ? (path as SettingsTab)
//         : undefined;

//     return (
//       <NoSsr>
//         <SideMenuContent currentTab={currentTab} />
//       </NoSsr>
//     );
//   }
//   return null;
// };

export default SideMenu;
