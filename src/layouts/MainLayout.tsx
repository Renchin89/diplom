import { ThemeProvider } from "@material-ui/core/styles";
import { FunctionComponent, useEffect, useState } from "react";
import theme from "../site-settings/theme/mui-theme";
import cn from "classnames";
import Head from "next/head";
import Header from "../components/page-components/Header";

const MainLayout: FunctionComponent<{ children?: any }> = ({ children }) => {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <title>HR system</title>
      </Head>
      <div
        id="main-container"
        className="flex flex-col items-center min-h-full relative"
      >
        <div className="w-full">
          <Header
            extended={isExtended}
            onClick={() => {
              setIsExtended(!isExtended);
            }}
          />
        </div>
        <div className="flex-1 justify-center items-center w-full bg-wallpaper-light">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
