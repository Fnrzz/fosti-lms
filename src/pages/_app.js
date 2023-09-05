import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppShell from "@/components/layouts/appShell";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <AppShell>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fosti LMS</title>
      </Head>
      <Component {...pageProps} />
      <Script src="/js/bootstrap.min.js" />
    </AppShell>
  );
}
