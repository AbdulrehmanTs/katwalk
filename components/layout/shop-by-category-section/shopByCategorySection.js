import React from "react";
import Image from "next/image";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import vat from "../../../assets/images/logo/vat.png";
import styles from "./shopByCategorySection.module.css";
import heroImage from "../../../assets/images/hero-image.jpg";
import springImg from "../../../assets/images/categories/print.jpg";
import printImg from "../../../assets/images/categories/print.jpg";
import blackImg from "../../../assets/images/categories/print.jpg";

function ShopByCategorySection({ data }) {
  return (
    <>
      <section className="h-[auto] pt-[50px] pb-[20px]      lg:py-[50px] lg:h-[450px]">
        <div className="container flex justify-start flex-col px-[0]     lg:flex-row lg:px-[40px]">
          <div className="w-[100%] pr-[20px]      lg:w-[44%]">
            <h2 className="fahkwang-light text-[#231F20] text-[28px] leading-[1.1] uppercase pb-[5px] mb-[10px]">
              {data.title}
            </h2>
            <p className="work-regular text-[16px] leading-[1.5]">
              {data.text}
            </p>
          </div>
          <div className="max-w-[100%] pt-[20px]      lg:pt-[0]">
            <div className="gap-x-[10px] flex">
              {data.subCategories.map((value, index) => {
                return (
                  <div
                    className="category-card w-[215px] cursor-pointer"
                    key={index}
                  >
                    <div className="w-[100%]">
                      <span className="image_container transition-all duration-300">
                        <Image src={value.img} alt="image" />
                      </span>
                    </div>
                    <h5 className="fahkwang-light text-[14px] uppercase text-center mt-[8px]">
                      {value.name}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopByCategorySection;
