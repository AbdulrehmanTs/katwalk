import React from "react";
import Image from "next/image";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import vat from "../../../assets/images/logo/vat.png";
import styles from "./footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="w-[100%] h-[94px] bg-[#c53a19] py-[15px] flex justify-between px-[3%]">
        <div className="flex  items-center">
          <div className={`${styles.image_div} max-w-[80px] mr-[0px] mt-[5px]       sm:max-w-[65px] sm:mr-[10px] md:mr-[50px]`}>
            <span className="image_container">
              <Image src={logoSquare} alt="image" />
            </span>
          </div>
          <ul
            className={`${styles.footer_menu} flex justify-start gap-x-[20px] pr-[20px] hidden    md:flex lg:pr-[0] `}
          >
            <li>
              <Link href="/about-us">
<<<<<<< HEAD
                <a className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer">
=======
                <a className="work-regular whitespace-nowrap text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                  About us
                </a>
              </Link>
            </li>
            <li className="relative">
              <a
                href="#"
                className="work-regular text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                Contact us
              </a>
              <div
                className={`${styles.dropdown_menu_div} contact-box bg-[#fff] w-[402px] p-[20px] border-[#fbf1e8] border-[1px] absolute bottom-[30px] left-[50%] translate-x-[-50%] hidden`}
              >
                <div className="flex justify-between">
                  <div className="border-r-[1px] border-[#e2e5ec] w-[48%] text-center">
                    <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase">
                      click and chat
                    </p>
                    <a
                      href="#"
                      className="work-regular text-[13px] text-[#c53a19]"
                    >
                      Whatsapp
                    </a>
                  </div>
                  <div className="w-[50%] text-center">
                    <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase">
                      email
                    </p>
                    <a
                      href="#"
                      className="work-regular text-[13px] text-[#c53a19]"
                    >
                      customercare@katwalk.sa
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase pt-[30px]">
                      partnership and pr
                    </p>
                    <a
                      href="#"
                      className="work-regular text-[13px] text-[#c53a19]"
                    >
                      info@katwalk.sa
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="work-regular text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                Join katwalk!
              </a>
            </li>
            <li>
              <Link href="/faqs">
<<<<<<< HEAD
                <a className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer">
=======
                <a className="work-regular text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                  FAQS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy">
<<<<<<< HEAD
                <a className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer">
=======
                <a className="work-regular text-[#fff] whitespace-nowrap text-[12px] tracking-[0.05em] uppercase cursor-pointer">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
                  PRIVACY POLICY, TERMS & CONDITIONS
                </a>
              </Link>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <div className="flex justify-end  items-end sm:items-center">
          <p className={`${styles.footer_right_div} work-regular text-[#fff] text-[10px] tracking-[0.05em] uppercase cursor-pointer pr-[20px] pb-[4px] text-right     sm:text-left sm:text-[12px] sm:pb-[0]`}>
=======
        <div className="flex justify-end overflow-hidden items-end sm:items-center">
          <p className="work-regular text-[#fff] md:whitespace-nowrap text-[10px] tracking-[0.05em] uppercase cursor-pointer pr-[20px] pb-[4px] text-right     sm:text-left sm:text-[12px] sm:pb-[0]">
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
            © KATWALK 2021 CR No. 2062617591 VAT No. 310401691200003
          </p>
          <div className={`${styles.right_img_div} max-w-[40px] mt-[5px] mr-[10px]     sm:mr-[25px] sm:max-w-[45px]`}>
            <span className="image_container">
              <Image src={vat} className="cursor-pointer" alt="image" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
