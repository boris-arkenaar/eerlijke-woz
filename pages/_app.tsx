import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppState } from "../components/app-state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  );
}

export default MyApp;
