import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RootLayout } from "@/components/layouts/root_layout";
import { theme } from "@/config/theme";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
          }

          html {
            overflow-x: hidden;
            overflow-y: scroll;
          }

          body,
          #__next {
            overflow-x: visible;
            overflow-y: visible;
          }

          #__next {
            position: relative;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            min-height: 100vh;
          }
        `}
      </style>

      <ChakraProvider theme={theme}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Head>
            <title>
              プログラム異常動作の自動検出技術の創出プロジェクト | さきがけ
            </title>
          </Head>

          <RootLayout key={router.asPath} currentPathname={router.pathname}>
            {getLayout(<Component {...pageProps} />)}
          </RootLayout>
        </AnimatePresence>
      </ChakraProvider>
    </>
  );
}
