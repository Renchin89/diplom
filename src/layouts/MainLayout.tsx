import { ThemeProvider } from "@material-ui/core";
import { FunctionComponent } from "react";
import theme from "../site-settings/theme/mui-theme";
import cn from "classnames";
import Head from "next/head";

const MainLayout: FunctionComponent<{children?: any}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <title>HR system</title>
      </Head>
      <div>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default MainLayout