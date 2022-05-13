import React from "react";
import Image from "next/image";
import vat from "../../../assets/images/logo/vat.png";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import katwalkBag from "../../../assets/images/designers/katwalk-bag.jpg";
import styles from "./textImgSection.module.css";

function TextImgSection({ data }) {
  return (
    <>
      <section className="pt-[50px]">
        <div className="container flex justify-start pb-[50px] px-[0]      lg:px-[40px]">
          <div className="w-[100%] pr-[20px]      lg:w-[44%]">
            <h2 className="fahkwang-light text-[#231F20] text-[28px] leading-[1.1] uppercase pb-[5px] mb-[10px]">
              {data.title}
            </h2>
            <p className="work-regular text-[16px] leading-[1.5] mb-[24px]">
              {data.text}
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <span className="image_container">
            <Image src={katwalkBag} alt="image" />
          </span>
        </div>
      </section>
    </>
  );
}

export default TextImgSection;
