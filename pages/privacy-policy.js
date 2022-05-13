import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import Features from "../components/features/features";
import HeadingAndText from "../components/heading-and-text/headingAndText";

function PrivacyPolicy() {
  return (
    <>
      <Layout>
        
        <h1 className="mt-[80px]">Privacy Policy, Terms and Conditions</h1>
        <HeadingAndText />
      </Layout>
    </>
  );
}

export default PrivacyPolicy;
