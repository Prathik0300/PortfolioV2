import AppContextProvider from "@/src/context/AppContext";
import "@/styles/globals.css";
import "@/src/lib/color.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: rubik.style.fontFamily,
    },
  });
  const cache = createCache({ key: "custom-css" });
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppContextProvider>
          <CacheProvider value={cache}>
            <AppCacheProvider {...pageProps}>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </AppCacheProvider>
          </CacheProvider>
        </AppContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
