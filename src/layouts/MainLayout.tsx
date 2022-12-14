import { ThemeProvider } from "@material-ui/core/styles";
import { FunctionComponent, useEffect, useState } from "react";
import theme from "../site-settings/theme/mui-theme";
import cn from "classnames";
import Head from "next/head";
import Header from "../components/page-components/Header";
import SideMenu from "../components/page-components/sideMenu";

const MainLayout: FunctionComponent<{ children?: any }> = ({ children }) => {
  const [isExtended, setIsExtended] = useState<boolean>(true);

  useEffect(() => {}, []);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <title>Хүний нөөцийн систем</title>
      </Head>
      <div
        id="main-container"
        className={cn("flex-row justify-center min-h-full relative transition-all duration-500", isExtended ? "grid grid-cols-5" : "flex")}
      >
        <div
          className={cn(
            isExtended ? "grid-cols-1" : "w-24",
            "bg-wallpaper-dark text-lg text-white"
          )}
        >
          <div
            className={cn(
              isExtended ? "px-12 py-6" : "px-8 py-6",
              "h-18 border-b border-gray-500 font-bold"
            )}
          >
            {isExtended ? <span>Хүний нөөцийн систем</span> : <span>HR</span>}
          </div>
          <SideMenu isExtended={isExtended} />
        </div>
        <div
          className={cn(
            "w-full bg-wallpaper-light",
            isExtended ? "col-span-4" : "w-full"
          )}
        >
          <Header
            extended={isExtended}
            onClick={() => {
              setIsExtended(!isExtended);
            }}
          />
          <div className="flex-1 justify-center items-center w-full p-8">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
