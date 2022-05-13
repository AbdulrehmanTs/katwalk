import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/logo/logo.svg";
import {
  IoBagOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoChevronDown,
} from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { BsList, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./navigation.module.css";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import { useRef, useState } from "react";

function Navigation() {
  const dropdown1 = useRef(null);
  
    // var isOpenDropdown1 = false;
    
    const openDropdown = () => {
      console.log("openDropdown called");
    //   console.log("bef",isOpenDropdown1);
    //   isOpenDropdown1 = !isOpenDropdown1;
    //   console.log("a",isOpenDropdown1);
    // dropdown1.classList.add("show-dropdown");
};
  return (
    <>
      <nav className="fixed top-0 w-[100%] h-[80px] bg-[#fff] px-[3%] flex justify-between items-center z-[3]">
        <div className="max-w-[125px]">
          <span className="image_container">
            <Image src={logo} className="cursor-pointer" alt="logo image" />
          </span>
        </div>
        <ul
          className={`${styles.middle_menu} flex justify-center flex-wrap px-[20px] hidden        lg:px-[0] lg:flex`}
        >
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              Ready for shipping
            </a>
          </li>
          <li className={`${styles.menu_with_dropdown} relative`}>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              STYLES
            </a>
            <ul className="w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute top-[25px] flex flex-wrap hidden">
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">WHATS&#39;S NEW?</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">spring bloom</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">classic black</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">print</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">embroidery</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">sets</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">color block</a></li>
            </ul>
          </li>
          <li className={`${styles.menu_with_dropdown} relative`}>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              OCCASIONS
            </a>
            <ul className="w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute top-[25px] flex flex-wrap hidden">
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">casual</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">evening</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">formal</a></li>
            </ul>
          </li>
          <li className={`${styles.menu_with_dropdown} relative`}>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              SHOP ALL
            </a>
            <ul className="w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute top-[25px] flex flex-wrap hidden">
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">abayas</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">kaftans</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">dresses</a></li>
              <li className="w-[50%] my-[10px]"><a href="#" className="work-regular text-[13px] text-[#fff] uppercase">kimonos</a></li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              DESIGNERS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]"
            >
              JOIN KATWALK!
            </a>
          </li>
        </ul>
        <div className={`${styles.menu_right_div} flex hidden       lg:flex`}>
          <div className="pr-[10px]">
            <IoSearchOutline className="text-[20px] cursor-pointer" />
          </div>
          <div className="px-[10px] flex items-center border-r-[1px] border-[#e2e5ec]">
            <IoBagOutline className="text-[20px] cursor-pointer" />
            <span className="work-regular text-[12px] ml-[7px]">0</span>
          </div>
          <div className="px-[8px] flex items-center border-r-[1px] border-[#e2e5ec]">
            <IoHeartOutline className="text-[20px] cursor-pointer" />
            <span className="work-regular text-[12px] ml-[7px]">0</span>
          </div>
          <div className="px-[7px] border-r-[1px] border-[#e2e5ec]">
            <IoPersonOutline className="text-[20px] cursor-pointer" />
          </div>
          <div className="pl-[5px] pr-[30px]">
            <a href="#" className="almarai-regular text-[13px] cursor-pointer">
              عربي
            </a>
          </div>
        </div>
        <div className="block       lg:hidden">
          <FaBars className="text-[20px]" />
        </div>
        <div className={`${styles.mob_menu} fixed top-0 left-0 w-[100%] h-[100%] visibility-visibl e`}>
          <div className={`menu_overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000080] opacity-0`}></div>
          <AiOutlineClose className="text-[30px] text-[#fff] absolute top-[15px] right-[20px]" />
          <div
            className={`mob_menu_black_div h-[100%] bg-[#000000bf] px-[20px] py-[20px] absolute translate-x-[-100%]`}
          >
            <div className="flex justify-end border-b-[1px] border-[#fff]">
              <IoSearchOutline className="text-[22px] text-[#fff] mx-[10px] mb-[15px]" />
              <IoHeartOutline className="text-[22px] text-[#fff] mx-[10px] mb-[15px]" />
              <IoPersonOutline className="text-[22px] text-[#fff] mx-[10px] mb-[15px]" />
            </div>
            <div className="flex flex-col justify-between h-[85vh]">
              <ul>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    Ready for shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    STYLES
                    <IoChevronDown
                      className="text-[#ffffff80] mr-[10px]  "
                      onClick={() => openDropdown(this)}
                    />
                  </a>
                  <ul
                     ref={dropdown1}
                    className={`${styles.orange_dropdown} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px] `}
                  >
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        What&#39;s new?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        Spring Bloom
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        classic black
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        print
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        embroidery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        sets
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        color block
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    OCCASIONS
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${styles.orange_dropdown} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px]`}
                  >
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        casual
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        evening
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        formal
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    SHOP ALL
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${styles.orange_dropdown} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px]`}
                  >
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        abayas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        kaftans
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        dresses
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase"
                      >
                        kimonos
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    DESIGNERS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    JOIN KATWALK!
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase"
                  >
                    about katwalk
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase"
                  >
                    faqs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase"
                  >
                    privacy policy, terms & conditions
                  </a>
                </li>
              </ul>
              <div className="flex justify-start">
                <BsInstagram className="text-[#ffffff] mr-[20px]" />
                <BsWhatsapp className="text-[#ffffff]" />
              </div>
            </div>
            <div className="absolute bottom-[20px] right-[20px] max-w-[55px]">
              <Image src={logoSquare} alt="logo image" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
