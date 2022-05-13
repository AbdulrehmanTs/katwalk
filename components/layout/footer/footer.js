import React from "react";
import Image from "next/image";
import logoSquare from "../../../assets/images/logo/logo-square.png";
import vat from "../../../assets/images/logo/vat.png";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className="w-[100%] h-[90px] bg-[#c53a19] py-[15px] flex justify-between px-[3%]">
        <div className="flex  items-center">
          <div className="max-w-[65px] mr-[10px]       md:mr-[50px]">
            <span className="image_container">
              <Image src={logoSquare} alt="image" />
            </span>
          </div>
          <ul
            className={`${styles.footer_menu} flex justify-start flex-wrap gap-x-[40px] pr-[20px] hidden       md:flex lg:pr-[0] lg:gap-x-[15px] xl:gap-x-[40px]`}
          >
            <li>
              <a
                href="#"
                className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                About us
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                Contact us
              </a>
              <div className={`${styles.dropdown_menu_div} contact-box bg-[#fff] w-[402px] p-[20px] border-[#fbf1e8] border-[1px] absolute bottom-[30px] left-[50%] translate-x-[-50%] hidden`}>
                <div className="flex justify-between">
                  <div className="border-r-[1px] border-[#e2e5ec] w-[48%] text-center">
                    <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase">
                      click and chat
                    </p>
                    <a href="#" className="work-regular text-[13px] text-[#c53a19]">Whatsapp</a>
                  </div>
                  <div className="w-[50%] text-center">
                    <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase">
                      email
                    </p>
                    <a href="#" className="work-regular text-[13px] text-[#c53a19]">customercare@katwalk.sa</a>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <p className="work-regular text-[#000000b8] text-[12px] mb-[10px] uppercase pt-[30px]">
                      partnership and pr
                    </p>
                    <a href="#" className="work-regular text-[13px] text-[#c53a19]">info@katwalk.sa</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                Join katwalk!
              </a>
            </li>
            <li>
              <a
                href="#"
                className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                FAQS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer"
              >
                PRIVACY POLICY, TERMS & CONDITIONS
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end  items-center">
          <p className="work-regular text-[#fff] text-[12px] tracking-[0.05em] uppercase cursor-pointer pr-[20px]">
            © KATWALK 2021 CR No. 2062617591 VAT No. 310401691200003
          </p>
          <div className="max-w-[45px] mt-[5px] mr-[25px]">
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
