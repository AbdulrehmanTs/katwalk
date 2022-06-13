<<<<<<< HEAD
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
=======
import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import heroImage from "../../assets/images/hero-image.jpg";
import bottle from "../../assets/images/icons/bottle.png";
import freeDelivery from "../../assets/images/icons/free-delivery.png";
import measurementTap from "../../assets/images/icons/measurement-tap.png";
import tags from "../../assets/images/icons/tags.png";
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
import { data } from "autoprefixer";
import styles from "./productSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import allIcons from "../../assets/images/icons/all-icons.svg";
import ImgLazyLoad from "../img-lazy-load/img-lazy-load";
=======
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
<<<<<<< HEAD
      style={{ ...style, display: "block", width: "35px", height: "50px" }}
=======
      style={{ ...style, display: "block", width: "50px", height: "60px" }}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
<<<<<<< HEAD
      style={{ ...style, display: "block", width: "35px", height: "50px" }}
=======
      style={{ ...style, display: "block", width: "50px", height: "60px" }}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
      onClick={onClick}
    />
  );
}

function ProductSlider({ data }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
<<<<<<< HEAD
=======
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //   },
      // },
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
<<<<<<< HEAD
      <div className="relative">
        <div className="my-icon heart-for-product-detail w-[25px] h-[25px] cursor-pointer absolute right-[14px] top-[6px] z-[1] bgAllIcon bg-[left_-3px_top_-69px]"></div>
        <Slider {...settings}>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <span className="image_container">
                  {/* <Image src={value.image} alt="image" /> */}
                  <ImgLazyLoad src={value.image} alt={"image"} classes={""} />
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
=======
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <span className="image_container">
                <Image src={value.image} alt="image" />
              </span>
            </div>
          );
        })}
      </Slider>
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
    </>
  );
}

export default ProductSlider;
