import React from "react";

import { AppProps } from "next/app";

import "@/env/client";

import { Page } from "@/types/Page";

type MyAppProps = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: MyAppProps) {
  const Layout = Component.layout ?? React.Fragment;
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}

export default App;
