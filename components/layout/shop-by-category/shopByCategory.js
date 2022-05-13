import React from "react";
import Image from "next/image";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import vat from "../../../assets/images/logo/vat.png";
import styles from "./shopByCategory.module.css";
import heroImage from "../../../assets/images/hero-image.jpg";
import springImg from "../../../assets/images/categories/print.jpg";
import printImg from "../../../assets/images/categories/print.jpg";
import blackImg from "../../../assets/images/categories/print.jpg";
import eveningImg from "../../../assets/images/categories/print.jpg";
import formalImg from "../../../assets/images/categories/print.jpg";
import casualImg from "../../../assets/images/categories/print.jpg";

import ShopByCategorySection from "../shop-by-category-section/shopByCategorySection";

function ShopByCategory() {
  const shopByStyle = {
    title: "SHOP BY STYLE",
    text: "Explore what's trending and shop by your favorite style.",
    subCategories: [
      {
        img: springImg,
        name: "spring",
      },
      {
        img: printImg,
        name: "print",
      },
      {
        img: blackImg,
        name: "black",
      },
    ],
  };
  const shopByOccasion = {
    title: "SHOP BY Occasion",
    text: "We've got your look for every occasion!",
    subCategories: [
      {
        img: eveningImg,
        name: "evening",
      },
      {
        img: formalImg,
        name: "formal",
      },
      {
        img: casualImg,
        name: "casual",
      },
    ],
  };
  return (
    <>
      <ShopByCategorySection data={shopByStyle} />
      <ShopByCategorySection data={shopByOccasion} />
    </>
  );
}

export default ShopByCategory;
