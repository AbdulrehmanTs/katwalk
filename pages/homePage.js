import React from "react";
import Hero from "../components/layout/hero/hero";
import Layout from "../components/layout/layout/layout";
import ShopByCategory from "../components/layout/shop-by-category/shopByCategory";
import TextImgSection from "../components/layout/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import Features from "../components/layout/features/features";

function HomePage() {
  const designerData = {
    title: "DESIGNERS",
    text: "Explore our talented and independent designers.",
    img: katwalkBag,
  }; 
  const bestSellingData = {
    title: "Best Selling",
    text: "Our customers' favorite picks",
    img: katwalkBag,
  }
  return (
    <>
      <Layout>
        <Hero />
        <ShopByCategory />
        <TextImgSection data={designerData} />
        <TextImgSection data={bestSellingData} />
        <Features />
      </Layout>
    </>
  );
}

export default HomePage;
