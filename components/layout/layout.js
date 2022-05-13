import React from "react";
import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

const Layout = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
