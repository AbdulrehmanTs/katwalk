import React from "react";
<<<<<<< HEAD
import styles from "./priceFilter.module.css";

function PriceFilter({
  data,
  price_dropdown,
  choosingFilterOption,
  currectSelected,
  filterName,
}) {
  return (
    <>
      <div
        className={`w-[100%] lg:w-[320px] border-[#fbf1e8] border-[1px] relative lg:absolute 
 pt-[20px] lg:pt-0 z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
        ref={price_dropdown}
      >
=======
import styles from './priceFilter.module.css'

function PriceFilter({data,price_dropdown}) {
 
  return (
    <>
      <div
        className={`w-[320px] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
        ref={price_dropdown}
        >
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        <div className="w-[100%] px-[20px] py-[15px]">
          <p className="fwl text-[11px] text-[#1b1b28] capitalize pb-[10px]">
            size:
          </p>
          <div className="flex flex-wrap gap-x-[9px] gap-y-[9px]">
            {data.map((value, index) => {
<<<<<<< HEAD
              return (
                <PriceFilterItem
                  key={index}
                  data={value}
                  filterName={filterName}
                  choosingFilterOption={choosingFilterOption}
                  currectSelected={currectSelected}
                />
              );
=======
              return <PriceFilterItem key={index} data={value} />;
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;

<<<<<<< HEAD
function PriceFilterItem({
  data,
  choosingFilterOption,
  currectSelected,
  filterName,
}) {
  
  return (
    <>
      {/* ${styles.active} */}
      <p
        className={`${
          currectSelected == data ? styles.active : ""
        } size-box taPoint3 cursor-pointer fwl w-[48%] h-[48px] border-[#fbf1e8] border-[1px] flex justify-center items-center text-[#1b1b28] text-[13px] leading-[13px] p-[5px] pr-[8px]`}
        onClick={() => choosingFilterOption(data, filterName)}
      >
=======
function PriceFilterItem({ data }) {
  return (
    <>
    {/* ${styles.active} */}
      <p className={` size-box taPoint3 cursor-pointer fwl w-[48%] h-[48px] border-[#fbf1e8] border-[1px] flex justify-center items-center text-[#1b1b28] text-[13px] leading-[13px] p-[5px] pr-[8px]`}>
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        {data}
      </p>
    </>
  );
}
