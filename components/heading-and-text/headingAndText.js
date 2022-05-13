import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./headingAndText.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function HeadingAndText() {
  return (
    <>
      <h3>1. introduction</h3>
      <p>
        Welcome to Katwalk, an online shopping marketplace that connects sellers
        with buyers and provides marketing services to create added value for
        designers in Saudi Arabia particular and in wider GCC. Katwalk provides
        an unmatched shopping experience for modern Arab women through its
        {/* website (&quot;Platform&quot;, "katwalk", &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) */}
      </p>
      <p>
        &quot;Katwalk&quot; is a registered trademark owned by Fashion Platform Est.,
        commercial registration number: 2062617591, and VAT registration number:
        310401691200003
      </p>
    </>
  );
}

export default HeadingAndText;
