import React from "react";
import styles from "./colorBox.module.css";

<<<<<<< HEAD
function ColorBox({ data, settingColor, settingBasicColor,settingSheilaColor, currectSelectedColor, colorType }) {
  return (
    <>
      {/* <div
        className={`${styles.color_main_div} `}
        onClick={() => settingColor(data)}
      >
        <div
          className={`w-[83px] m-[2px] border-[1px] border-[#fff] border-b-[2px] ${
            currectSelectedColor?.colorCode == data.colorCode
              ? "color-selected"
              : ""
          }`}
        >
          <div className={`w-[75px] h-[75px] ${data.colorCode} m-[3px]`}></div>
          <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
            {data.name}
          </p>
        </div>
      </div> */}
      {colorType == "basicColor" ? (
        <div
          className={`${styles.color_main_div} `}
          onClick={() => settingBasicColor(data)}
        >
          <div
            className={`w-[83px] m-[2px] border-[1px] border-[#fff] border-b-[2px] ${
              currectSelectedColor?.colorCode == data.colorCode
                ? "color-selected"
                : ""
            }`}
          >
            <div
              className={`w-[75px] h-[75px] ${data.colorCode} m-[3px]`}
            ></div>
            <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
              {data.name}
            </p>
          </div>
        </div>
      ) : (
        <>
          {colorType == "sheilaColor" ? (
            <div
              className={`${styles.color_main_div} `}
              onClick={() => settingSheilaColor(data)}
            >
              <div
                className={`w-[83px] m-[2px] border-[1px] border-[#fff] border-b-[2px] ${
                  currectSelectedColor?.colorCode == data.colorCode
                    ? "color-selected"
                    : ""
                }`}
              >
                <div
                  className={`w-[75px] h-[75px] ${data.colorCode} m-[3px]`}
                ></div>
                <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
                  {data.name}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
=======
function ColorBox({ data }) {
  return (
    <>
      <div className={`${styles.color_main_div} `}>
      <div  className={` "w-[83px] m-[2px] color-selected "`}
        // onClick={(event) => {
        //   handleToggleClassListRef(ref);
        //   event.stopPropagation();
        //   ref.current = event.target;
        //   handleToggleClassListRef(ref);
        // }}
        >
        <div className={`w-[75px] h-[75px] ${data.colorCode} m-[3px]`}></div>
        <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
          {data.name}
        </p>
      </div>
       </div>
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
    </>
  );
}

export default ColorBox;
