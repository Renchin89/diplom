import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import { FunctionComponent } from "react";
import MainLayout from "../layouts/MainLayout";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps}/>
    </MainLayout>
  );
};

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default MyApp;
