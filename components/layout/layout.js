import React, { useState, useRef, useEffect } from "react";
import GoToTop from "../go-to-top/go-to-top";
import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

const Layout = ({ children, footer }) => {
<<<<<<< HEAD
  const [scrollTop, setScrollTop] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

=======
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  return (
    <>
      {footer == "none" ? (
        <>
          <Navigation />
          {children}
        </>
      ) : (
        <>
          <Navigation />
          {children}
<<<<<<< HEAD
          {scrollTop == true ? <GoToTop /> : ""}
=======
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
