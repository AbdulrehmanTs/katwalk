import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import heroImage from "../../assets/images/hero-image.jpg";
import bottle from "../../assets/images/icons/bottle.png";
import freeDelivery from "../../assets/images/icons/free-delivery.png";
import measurementTap from "../../assets/images/icons/measurement-tap.png";
import tags from "../../assets/images/icons/tags.png";
import { data } from "autoprefixer";
import styles from "./productSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "60px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "60px" }}
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
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //   },
      // },
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
    </>
  );
}

export default ProductSlider;
