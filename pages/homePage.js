import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import bestSellingProduct from "../assets/images/best-selling/best-selling-product.jpg";
import Features from "../components/features/features";
import allIcons from "../assets/images/icons/all-icons.svg";

function HomePage() {
  const designerData = {
    title: "designers",
    text: "Explore our talented and independent designers.",
    img: katwalkBag,
    type: "designer"
  }; 
  const bestSellingData = {
    title: "Best Selling",
    text: "Our customers' favorite picks",
    img: bestSellingProduct,
<<<<<<< HEAD
    type: "product"
=======
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  }


  
  const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand','North'];

const startsWithN = countries.filter((country) => country.startsWith("No"));
console.log(",startsWithN",startsWithN)
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
