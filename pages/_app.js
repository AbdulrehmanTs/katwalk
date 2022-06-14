import Head from "next/head";
// import "../styles/globals.css";

async function styles() {
  if (window.location.pathname.includes('/ar')) {
    await import("../styles/globalArabic.css").then(() => console.log("arabic"))
  } else {
    await import("../styles/globals.css").then(() => console.log("english"))
  }
}


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
styles()

export default MyApp;
