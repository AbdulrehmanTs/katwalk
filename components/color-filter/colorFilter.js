import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./colorFilter.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

<<<<<<< HEAD
function ColorFilter({ data, color_dropdown,choosingFilterOption,
  currectSelected,
  filterName, }) {
  return (
    <>
      <div
        className={`w-[100%] lg:w-[320px] border-[#fbf1e8] border-[1px] relative lg:absolute 
 pt-[20px] lg:pt-0 z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
=======
function ColorFilter({ data, color_dropdown }) {
  return (
    <>
      <div
        className={`w-[100%] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        ref={color_dropdown}
      >
        <div className="w-[100%] px-[20px] py-[20px]">
          <div className="mt-[10px]">
            {data.group1 ? (
              <>
                {data.group1.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={`${value.colorCode} w-[100%] h-[48px] p-[10px]`}
                    >
                      <p className="fwl text-[#fff] text-[11px] capitalize">
                        {value.name}
                      </p>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}

            {data.group2 ? <div className="w-[100%] mt-[40px]"></div> : ""}

            {data.group2 ? (
              <>
                {data.group2.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={`${value.colorCode} w-[100%] h-[48px] p-[10px]`}
                    >
                      <p className="fwl text-[#fff] text-[11px] capitalize">
                        {value.name}
                      </p>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorFilter;
