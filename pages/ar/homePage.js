import React from "react";
import Hero from "./components/hero/hero";
import Layout from "./components/layout/layout";
import ShopByCategory from "./components/shop-by-category/shopByCategory";
import TextImgSection from "./components/text-img-section/textImgSection";
import katwalkBag from "../../assets/images/designers/katwalk-bag.jpg";
import bestSellingProduct from "../../assets/images/best-selling/best-selling-product.jpg";
import Features from "./components/features/features";
import allIcons from "../../assets/images/icons/all-icons.svg";
import { useEffect } from "react";
function HomePage() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  const designerData = {
    title: "المصممات",
    text: "تسوقي مصمماتنا المبدعات",
    img: katwalkBag,
    type: "designer"
  };
  const bestSellingData = {
    title: "الأكثر مبيعًا",
    text: "اختيارات متسوقاتنا المفضلة",
    img: bestSellingProduct,
    type: "product"
  }



  const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand', 'North'];

  const startsWithN = countries.filter((country) => country.startsWith("No"));
  console.log(",startsWithN", startsWithN)
  return (
    <div className="far">
      <Layout>
        <Hero />
        <ShopByCategory />
        <TextImgSection data={designerData} />
        <TextImgSection data={bestSellingData} />
        <Features />
      </Layout>
    </div>
  );
}

export default HomePage;
