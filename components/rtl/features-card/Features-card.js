import React from "react";
import Image from "next/image";
import styles from "./featuresCard.module.css";
import ImgLazyLoad from "../img-lazy-load/Img-lazy-load";

function FeaturesCard({ data }) {
  return (
    <>
      <div
        className={`${styles.features_car_div} text-center px-[20px] w-[100%] md:w-[auto]`}
      >
        <div className="max-w-[80px] mx-auto">
          <span className="image_container">
            <ImgLazyLoad src={data.img} alt={"image"} classes={""} />
          </span>
        </div>
        <h6 className=" text-[#111111] text-[15px] leading-[1.5] tracking-[0.5px] font-[600] mt-[10px]">
          {data.title}
        </h6>
        <p className=" text-[#656565] mx-auto text-[12px] leading-[1.333] tracking-[0.5px] max-w-[280px] mt-[8px]">
          {data.text}
        </p>
      </div>
    </>
  );
}

export default FeaturesCard;
