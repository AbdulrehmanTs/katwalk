import React from "react";
import Image from "next/image";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import vat from "../../../assets/images/logo/vat.png";
import heroImage from "../../../assets/images/hero-image.jpg";
import bottle from "../../../assets/images/icons/bottle.png";
import freeDelivery from "../../../assets/images/icons/free-delivery.png";
import measurementTap from "../../../assets/images/icons/measurement-tap.png";
import tags from "../../../assets/images/icons/tags.png";
import FeaturesCard from "../features-card/features-card";
import styles from "./features.module.css";

function Features() {
  const features = [
    {
      img: freeDelivery,
      title: "Free Delivery",
      text: "Free delivery from our local designers",
    },
    {
      img: measurementTap,
      title: "Made to measure",
      text: "We offer wide collection of made to measure pieces",
    },
    {
      img: bottle,
      title: "Premium Package",
      text: "All products are packaged with premium cotton bags",
    },
    {
      img: tags,
      title: "VAT + Shipping inclusive",
      text: "All our prices includes VAT and shipping to your door",
    },
  ];
  return (
    <>
      <section className="my-[30px] px-[25px] py-[30px]">
        <div className={`${styles.features_container} container flex flex-wrap justify-center gap-y-[50px]     md:gap-y-[0]`}>
          {features.map((value, index) => {
            return <FeaturesCard key={index} data={value} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Features;
