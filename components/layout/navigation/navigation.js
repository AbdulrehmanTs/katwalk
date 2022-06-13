import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/images/logo/logo.svg";
import styles from "./navigation.module.css";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import dress1 from "../../../assets/images/products/dress1.jpg";
<<<<<<< HEAD
=======
import { useRef } from "react";
import Link from "next/link";
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238

function Navigation() {
  const dropdown1 = useRef(null);
  const [togglerClasses, setTogglerClasses] = useState([]);
  const [cartToggleClasses, setCartToggleClasses] = useState([]);
  const [searchToggleClasses, setSearchToggleClasses] = useState([]);
  const [searchDesktopToggleClasses, setSearchDesktopToggleClasses] = useState(
    []
  );
<<<<<<< HEAD
  const [isCartEmpty, setIsCartEmpty] = useState(true);
=======
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  const navigationToggler = () => {
    if (!togglerClasses.includes("visibility-visible")) {
      setTogglerClasses(["visibility-visible"]);
    } else {
      setTogglerClasses([]);
    }
<<<<<<< HEAD
=======
    console.log(togglerClasses);
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  };
  const cartToggler = () => {
    if (!cartToggleClasses.includes("visibility-visible")) {
      setCartToggleClasses(["visibility-visible"]);
    } else {
      setCartToggleClasses([]);
    }
<<<<<<< HEAD
=======
    console.log(cartToggleClasses);
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  };
  const searchToggler = () => {
    if (!searchToggleClasses.includes("visibility-visible")) {
      setSearchToggleClasses(["visibility-visible"]);
    } else {
      setSearchToggleClasses([]);
    }
<<<<<<< HEAD
=======
    console.log(searchToggleClasses);
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  };

  const searchDesktopToggler = () => {
    if (!searchDesktopToggleClasses.includes("show-search-input")) {
      setSearchDesktopToggleClasses(["show-search-input"]);
    } else {
      setSearchDesktopToggleClasses([]);
    }
<<<<<<< HEAD
=======
    console.log(searchDesktopToggleClasses);
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
  };

  // var isOpenDropdown1 = false;
  const [styleClasses, setStyleClasses] = useState(["orange_dropdown"]);
  const [occasionsClasses, setOccasionsClasses] = useState(["orange_dropdown"]);
  const [shopAllClasses, setShopAllClasses] = useState(["orange_dropdown"]);

  const stylesDropdown = () => {
<<<<<<< HEAD
=======
    console.log("openDropdown called");
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
    if (!styleClasses.includes("show-dropdown")) {
      setStyleClasses([...styleClasses, "show-dropdown"]);
    } else {
      setStyleClasses(["orange_dropdown"]);
    }
  };

  const occasionsDropdown = () => {
<<<<<<< HEAD
    //  console.log("openDropdown called");
=======
    console.log("openDropdown called");
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
    if (!occasionsClasses.includes("show-dropdown")) {
      setOccasionsClasses([...occasionsClasses, "show-dropdown"]);
    } else {
      setOccasionsClasses(["orange_dropdown"]);
    }
  };
  const shopallDropdown = () => {
    if (!shopAllClasses.includes("show-dropdown")) {
      setShopAllClasses([...shopAllClasses, "show-dropdown"]);
    } else {
      setShopAllClasses(["orange_dropdown"]);
    }
  };
  return (
    <>
<<<<<<< HEAD
      <nav
        id="navbar"
        className="fixed top-0 w-[100%] h-[60px] bg-[#fff] px-[3%] flex justify-between items-center z-[3] drop-shadow-[0_0px_6px_rgba(0,0,0,0.08)]     lg:h-[80px]"
      >
=======
      <nav className="fixed top-0 w-[100%] h-[60px] bg-[#fff] px-[3%] flex justify-between items-center z-[3] drop-shadow-[0_3px_10px_rgba(0,0,0,0.1)]     lg:h-[80px]">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        <div className="max-w-[115px] pt-[8px]     sm:max-w-[125px] sm:pt-[0]">
          <Link href="/">
            <span className="image_container">
              <Image src={logo} className="cursor-pointer" alt="logo image" />
            </span>
          </Link>
        </div>
        <ul
<<<<<<< HEAD
          className={`${styles.middle_menu} flex justify-center flex-wrap px-[20px] pb-[4px] ml-[15px] relative hidden        lg:px-[0] lg:flex`}
=======
          className={`${styles.middle_menu} flex justify-center flex-wrap px-[20px] relative hidden        lg:px-[0] lg:flex`}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        >
          {/* <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] tracking-[0.5px] uppercase px-[8px]"
            >
              Ready for shipping
            </a>
          </li> */}
          <li className={`${styles.menu_with_dropdown}`}>
            <Link href="/shop">
<<<<<<< HEAD
              <a className="work-regular text-[#000] text-[13px] leading-[15px] tracking-[0.5px] uppercase px-[8px]">
=======
              <a className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                STYLES
              </a>
            </Link>
            <ul
              className={`${styles.dropdown_for_desktop} fadeDown w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute z-[1] top-[25px] flex flex-wrap left-0 hidden`}
            >
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    WHATS&#39;S NEW?
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    spring bloom
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    classic black
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    print
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    embroidery
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    sets
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    color block
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.menu_with_dropdown}`}>
            <Link href="/shop">
<<<<<<< HEAD
              <a className="work-regular text-[#000] text-[13px] leading-[15px] tracking-[0.5px] uppercase px-[8px]">
=======
              <a className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                OCCASIONS
              </a>
            </Link>
            <ul className="fadeDown w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute z-[1] top-[25px] flex flex-wrap left-0 hidden">
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    casual
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    evening
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    formal
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.menu_with_dropdown}`}>
            <Link href="/shop">
<<<<<<< HEAD
              <a className="work-regular text-[#000] text-[13px] leading-[15px] tracking-[0.5px] uppercase px-[8px]">
=======
              <a className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                SHOP ALL
              </a>
            </Link>
            <ul className="fadeDown w-[620px] bg-[#000000bf] px-[50px] py-[25px] absolute z-[1] top-[25px] flex flex-wrap left-0 hidden">
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    abayas
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    kaftans
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    dresses
                  </a>
                </Link>
              </li>
              <li className="w-[50%] my-[10px]">
                <Link href="/shop">
                  <a className="work-regular text-[13px] text-[#fff] uppercase">
                    kimonos
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/designers">
<<<<<<< HEAD
              <a className="work-regular text-[#000] text-[13px] leading-[15px] tracking-[0.5px] uppercase px-[8px]">
=======
              <a className="work-regular text-[#000] text-[13px] leading-[15px] uppercase px-[10px]">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                DESIGNERS
              </a>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="work-regular text-[#000] text-[13px] leading-[15px] tracking-[0.5px] uppercase px-[8px]"
            >
              JOIN KATWALK!
            </a>
          </li>
        </ul>
        <div
          className={`${styles.menu_right_div} flex items-center ml-[80px] pb-[0px]     sm:pb-[4px] sm:ml-[0]`}
        >
<<<<<<< HEAD
          <div className="pr-[6px] order-2 pb-[1px] border-r-[0px] border-[#e2e5ec]     sm:order-[unset] sm:border-r-[1px]">
            {/* search for for desktop */}
            <div className="relative hidden       lg:block">
=======
          <div className="pr-[10px] order-2     sm:order-[unset]">
            {/* search for for desktop */}
            <div
              className="relative hidden      lg:block"
              onClick={() => searchDesktopToggler()}
            >
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
              <input
                type="email"
                name="email"
                className={`${searchDesktopToggleClasses.join(
                  " "
                )} work-regular px-[10px] bg-white focus:outline-none block w-f ull transition-all duration-300 w-[0] absolute right-0 top-0      sm:text-[13px] show-search-inpu t`}
              />
<<<<<<< HEAD
              <div
                className="my-icon search w-[21px] h-[19px] cursor-pointer relative z-4 bgAllIcon bg-[left_-24px_top_-445px]"
                onClick={() => searchDesktopToggler()}
              ></div>
            </div>
            {/* search for for mob */}
            <div
              className="my-icon search w-[21px] h-[19px] cursor-pointer relative z-4 bgAllIcon bg-[left_-24px_top_-445px] block      lg:hidden"
              onClick={() => searchToggler()}
            ></div>
=======
              <IoSearchOutline className="text-[20px] cursor-pointer relative z-4" />
            </div>
            {/* search for for mob */}
            <IoSearchOutline
              onClick={() => searchToggler()}
              className="text-[20px] cursor-pointer block      lg:hidden"
            />
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
          </div>
          <div className="px-[10px] flex items-center border-r-[0px] border-[#e2e5ec] order-3     sm:order-[unset] sm:border-r-[1px]">
            {/* cart icon for desktop */}
            <div className="cart-icon-div relative hidden     lg:block">
<<<<<<< HEAD
              <div
                className="my-icon bag w-[21px] h-[19px] cursor-pointer relative z-[4] bgAllIcon bg-[left_-10px_top_-151px]"
                onClick={() => cartToggler()}
              ></div>

              <div
                className={`mt-[-20px] card-sm-box min-w-[110px] w-[322px] absolute top-[30px] left-[50%] translate-x-[-43%] hidden`}
              >
                <div
                  className={` mt-[20px] ${styles.card_sm_box} bg-[#fff]  p-[20px] border-[#fbf1e8] border-[1px] `}
                >
                  <div className="border-b-[1px] border-[#e2e5ec] w-[100%] text-center flex justify-end">
                    <p className="fwl text-[#1b1b28] leading-[1.5] tracking-[0.5px] text-[13px] mb-[10px] capitalize">
                      My Bag
                    </p>
                  </div>
                  <div>
                    <div className="text-cente r">
                      {isCartEmpty == false ? (
                        <p className="work-regular text-[#000000] text-[13px] mt-[10px] text-center">
                          Your Bag is empty
                        </p>
                      ) : (
                        <div className="flex flex-col justify-start relative">
                          <div className="flex justify-between pt-[20px] pb-[20px] ">
                            <div className="max-w-[22%] max-h-[70px] px-[5px ]">
                              <span className="image_container">
                                <Image src={dress1} alt="product image" />
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="flex">
                                <p className="work-regular text-[13px] leading-[1.5] tracking-[0.5px]">
                                  Floral Embroidery Tulle Sleeve Abaya
                                </p>
                                <div className="w-[26px] h-[19px] cursor-pointer bgAllIcon bg-[left_-22px_top_-37px] tScalePoint5 mr-[3px]"></div>
                              </div>
                              <p className="work-regular text-[13px] leading-[1.5] tracking-[0.5px] mt-[7px]">
                                Clue
                              </p>
                              <p className="work-regular text-[13px] leading-[1.5] mt-[10px] pl-[10px]">
                                1x SAR 1,030
                              </p>
                            </div>
                            {/* <div className="absolute right-[-5px]">
                            <div className="w-[21px] h-[19px] cursor-pointer bgAllIcon bg-[left_-22px_top_-37px] tScalePoint5"></div>
                          </div> */}
                          </div>

                          <div className="border-t-[1px] border-[#ededed] flex justify-end">
                            <p
                              href="#"
                              className="work-regular text-[#000] text-[13px] py-[13px] block capitalize pr-[10px]"
                            >
                              Subtotal
                            </p>
                            <p
                              href="#"
                              className="work-regular text-[#000] text-[13px] py-[13px] block uppercase"
                            >
                              SAR 1,030
                            </p>
                          </div>
                          <button className="add-to-bag-btn relative overflow-hidden ffr text-[0.875rem] text-[#fff] uppercase bg-[#111723] px-[10px] py-[10px]">
                            <Link href="/checkout">
                              <span className="relative z-[5]">checkout</span>
                            </Link>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
=======
              <IoBagOutline
                onClick={() => cartToggler()}
                className="text-[20px] cursor-pointer"
              />

              <div
                className={`${styles.card_sm_box} card-sm-box min-w-[110px] bg-[#fff] w-[322px] p-[20px] pb-[30px] border-[#fbf1e8] border-[1px] absolute top-[30px] left-[50%] translate-x-[-50%] hidden`}
              >
                <div className="border-b-[1px] border-[#e2e5ec] w-[100%] text-center flex justify-end">
                  <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] capitalize">
                    My Bag
                  </p>
                </div>
                <div>
                  <div className="text-center">
                    <p className="work-regular text-[#000000] text-[13px] mt-[10px]">
                      Your Bag is empty
                    </p>
                  </div>
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                </div>
              </div>
            </div>
            {/* cart icon for mob */}
<<<<<<< HEAD

            <div className="my-icon bag w-[21px] h-[19px] cursor-pointer relative z-4 bgAllIcon bg-[left_-10px_top_-151px] block     lg:hidden"></div>
            <span className="work-regular text-[12px] ml-[7px] pt-[3px]">
              1
            </span>
=======
            <IoBagOutline
              onClick={() => cartToggler()}
              className="text-[20px] cursor-pointer block     lg:hidden"
            />
            <span className="work-regular text-[12px] ml-[7px]">0</span>
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
          </div>
          <div className="px-[8px] flex items-center border-r-[1px] border-[#e2e5ec] hidden       lg:flex">
            <Link href="/dashboard/wishlists">
              <a className="flex items-center">
                <div className="my-icon heart w-[21px] h-[19px] cursor-pointer relative z-4 bgAllIcon bg-[left_-1px_top_-385px]"></div>
                <span className="work-regular text-[12px] ml-[7px] pt-[3px]">
                  0
                </span>
              </a>
            </Link>
          </div>
          <div className="px-[7px] border-r-[1px] border-[#e2e5ec] hidden       lg:flex">
            <Link href="/dashboard/home">
              <div className="my-icon user w-[21px] h-[19px] cursor-pointer relative z-4 bgAllIcon bg-[left_-4px_top_-121px]"></div>
            </Link>
          </div>
          <div className="pl-[0px] pr-[18px] pb-[9px] order-1      sm:order-[unset] sm:pl-[5px] sm:pr-[10px] sm:pb-[4px]">
            <a href="#" className="almarai-regular text-[13px] cursor-pointer">
              عربي
            </a>
          </div>
        </div>
        <div className="block       lg:hidden">
          <div onClick={() => navigationToggler()}>
            <div className="menu-icon-line2"></div>
            <div className="menu-icon-line2"></div>
            <div className="menu-icon-line2"></div>
          </div>
        </div>

        {/* to show */}
        {/* black menu for mobile */}
        <div
          className={`${styles.mob_menu} ${togglerClasses.join(
            " "
<<<<<<< HEAD
          )} fixed top-0 left-0 w-[100%] err h-[100vh]`}
=======
          )} fixed top-0 left-0 w-[100%] h-[100vh]`}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        >
          <div
            className={`menu_overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000080] opacity-0`}
          ></div>
<<<<<<< HEAD
          {/* <AiOutlineClose
            onClick={() => navigationToggler()}
            className="text-[26px] text-[#fff] absolute top-[15px] right-[20px]"
          /> */}
          <div
            className="w-[21px] h-[19px] cursor-pointer bgAllIcon  absolute top-[15px] right-[25px] bg-[left_-3px_top_-37px]"
            onClick={() => navigationToggler()}
          ></div>
=======
          <AiOutlineClose
            onClick={() => navigationToggler()}
            className="text-[26px] text-[#fff] absolute top-[15px] right-[20px]"
          />
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
          <div
            className={`mob_menu_black_div h-[100%] bg-[#000000bf] px-[20px] py-[20px] absolute translate-x-[-100%]`}
          >
            <div className="flex justify-end border-b-[1px] border-[#fff]">
              <div className="my-icon search w-[21px] h-[24px] cursor-pointer relative z-4 bgAllIcon bg-[left_-64px_top_-442px] mx-[3px] mb-[18px] mt-[-3px]"></div>
              <div
                className="my-icon heart w-[21px] h-[24px] cursor-pointer relative z-4 bgAllIcon bg-[left_-83px_top_-117px] mx-[3px] mb-[18px] mt-[-3px]"
                onClick={() => cartToggler()}
              ></div>
              <div>
                <Link href="/dashboard/home">
                  <div className="my-icon user w-[21px] h-[24px] cursor-pointer relative z-4 bgAllIcon bg-[left_-41px_top_-118px] mx-[3px] mb-[18px] mt-[-3px]"></div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[85vh]">
              <ul>
                {/* <li>
                  <a
                    className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    Ready for shipping
                  </a>
                </li> */}
                <li>
                  <a
                    onClick={() => stylesDropdown()}
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    STYLES
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${styleClasses.join(
                      " "
                    )} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px] `}
                  >
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          What&#39;s new?
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          Spring Bloom
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          classic black
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          print
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          embroidery
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          sets
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          color block
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    onClick={() => occasionsDropdown()}
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    OCCASIONS
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${occasionsClasses.join(
                      " "
                    )} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px]`}
                  >
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          casual
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          evening
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          formal
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    onClick={() => shopallDropdown()}
                    className="work-regular flex justify-between text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase"
                  >
                    SHOP ALL
                    <IoChevronDown className="text-[#ffffff80] mr-[10px]  " />
                  </a>
                  <ul
                    className={`${shopAllClasses.join(
                      " "
                    )} overflow-hidden bg-[#c53a19a6] mx-[-20px] mt-[-1px]`}
                  >
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          abayas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          kaftans
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          dresses
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <a className="work-regular text-[#ffffff] text-[13px] block pl-[20px] py-[13px] uppercase">
                          kimonos
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/designers">
                    <a className="work-regular text-[#ffffff80] text-[13px] py-[13px] block border-b-[1px] border-[#505050] uppercase">
                      DESIGNERS
                    </a>
                  </Link>
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
                  <Link href="/about-us">
                    <a className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase">
                      about katwalk
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <a className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase">
                      faqs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy">
                    <a className="work-regular text-[#ffffff80] text-[13px] py-[8px] block uppercase">
                      privacy policy, terms & conditions
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="flex justify-start">
                <BsInstagram className="text-[#ffffff] mr-[20px]" />
                <BsWhatsapp className="text-[#ffffff]" />
              </div>
            </div>
            <div className="absolute bottom-[20px] right-[20px] max-w-[55px]">
              <Link href="/">
                <Image src={logoSquare} alt="logo image" />
              </Link>
            </div>
          </div>
        </div>

        {/* to show */}
        {/* cart div */}
        <div
          className={`${styles.mob_menu} ${cartToggleClasses.join(
            " "
<<<<<<< HEAD
          )} cart-box fixed top-0 left-0 w-[100%] h-[100vh] z-[4]`}
=======
          )} cart-box fixed top-0 left-0 w-[100%] h-[100vh]`}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        >
          <div
            className={`menu-overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#00000080] opacity-0`}
          ></div>
          <AiOutlineClose className="text-[26px] text-[#fff] absolute top-[15px] right-[20px]" />
          <div
<<<<<<< HEAD
            className={`mob-menu-white-div h-[100vh] bg-[#fff] px-[20px] pt-[15px] pb-[20px] absolute translate-x-[140%] border-l-[1px] border-[#fbf1e8]`}
=======
            className={`mob-menu-white-div h-[100vh] bg-[#fff] px-[20px] py-[20px] absolute translate-x-[140%] border-l-[1px] border-[#fbf1e8]`}
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
          >
            <div className="flex justify-between border-b-[1px] border-[#ededed]">
              <h6 className="fwl text-[13px] text-[#1b1b28] tracking-[0.5px] capitalize pb-[15px]">
                your bag
                {/* your bag is empty */}
              </h6>
              <div className="flex justify-end">
<<<<<<< HEAD
                <div
                  className="w-[21px] h-[19px] cursor-pointer bgAllIcon  absolute top-[15px] right-[20px] bg-[left_-22px_top_-37px] tScalePoint8"
                  onClick={() => cartToggler()}
                ></div>
=======
                <IoCloseOutline
                  onClick={() => cartToggler()}
                  className="text-[28px] text-[#000] mx-[0px] mb-[15px] mt-[-5px] cursor-pointer"
                />
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
              </div>
            </div>

            <div className="flex flex-col flex-col justify-between h-[89vh]    hidd en">
              <div className="flex justify-between pt-[20px] pb-[20px] mb-[45px] border-b-[1px] border-[#ededed]">
                <div className="max-w-[21%] max-h-[70px] px-[5px ] mt-[2px] mr-[16px]">
                  <span className="image_container">
                    <Image src={dress1} alt="product image" />
                  </span>
                </div>
                <div className="flex">
                  <div className="text-[#1b1b28]">
                    <p className="work-regular text-[13px] leading-[1.5] tracking-[0.5px]">
                      Floral Embroidery Tulle Sleeve Abaya
                    </p>
                    <p className="work-regular text-[13px] leading-[1.5] tracking-[0.5px] mt-[5px]">
                      Clue
                    </p>
                    <p className="work-regular text-[13px] leading-[1.5] mt-[13px] pl-[10px ]">
                      1x SAR 1,030
                    </p>
                  </div>
                  <div>
                    <div className="w-[20px] h-[18px] cursor-pointer bgAllIcon mr-[-2px] bg-[left_-22px_top_-37px] tScalePoint5 mt-[-1px]"></div>
                  </div>
                </div>
              </div>

              <div className="w-[100%]">
                <div className="border-t-[1px] border-[#ededed] flex justify-between">
                  <p
                    href="#"
                    className="work-regular text-[#000] text-[13px] py-[13px] block uppercase"
                  >
                    Subtotal
                  </p>
                  <p
                    href="#"
                    className="work-regular text-[#000] text-[13px] py-[13px] block uppercase"
                  >
                    SAR 1,030
                  </p>
                </div>
                <button className="w-[100%] text-[14px] text-[#fff] uppercase bg-[#000] px-[10px] py-[10px]">
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* to show */}
        {/* search div for mobile */}
        <div
          className={`${styles.mob_menu} ${searchToggleClasses.join(
            " "
          )} fixed top-0 left-0 w-[100%] h-[100vh]`}
        >
          <div
            className={`menu_overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[#fff] px-[20px] pt-[110px] opacity-0`}
          >
            {/* <h1>dsaf</h1> */}
            <label className="block">
              <input
                type="email"
                name="email"
                className="work-regular mt-1 px-[10px] py-[5px] bg-white border-b-[1px]  placeholder-slate-400 focus:outline-none block w-full sm:text-[13px]"
                placeholder="Search"
              />
            </label>
          </div>
<<<<<<< HEAD
          {/* <AiOutlineClose
            onClick={() => searchToggler()}
            className="text-[26px] text-[#000] absolute top-[15px] right-[20px]"
          /> */}
          <div
            className="w-[21px] h-[19px] cursor-pointer bgAllIcon  absolute top-[15px] right-[25px] bg-[left_-22px_top_-37px]"
            onClick={() => searchToggler()}
          ></div>
=======
          <AiOutlineClose
            onClick={() => searchToggler()}
            className="text-[26px] text-[#000] absolute top-[15px] right-[20px]"
          />
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
        </div>
      </nav>
    </>
  );
}

export default Navigation;
