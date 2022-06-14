import Head from "next/head";
// import "../styles/globals.css";
if (window.location.pathname.includes('/ar')) {
  import("../styles/globalArabic.css").then(() => console.log("arabic")).catch((error) => console.log(error))
} else {
  import("../styles/globals.css").then(() => console.log("english")).catch((error) => console.log(error))
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


export default MyApp;
