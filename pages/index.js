import Head from "next/head";
import Image from "next/image";
import AllUsedIcons from "../components/allUsedIcons";
import styles from "../styles/Home.module.css";
import About from "./about-us";
import Checkout from "./checkout";
import FAQ from "./faqs";
import HomePage from "./homePage";
import Login from "./users/login";
import PrivacyPolicy from "./privacypolicy";
import ProductDetail from "./product-detail";
import Shop from "./shop.js";
import Designers from "./designers";
import DesignerDetail from "./shop/designer";
<<<<<<< HEAD
import AdminPanel from "./dashboard/home";
=======
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <PrivacyPolicy /> */}
      {/* <FAQ /> */}
      {/* <About /> */}
      {/* <ProductDetail /> */}
      {/* <Checkout /> */}
      {/* <AllUsedIcons /> */}
      {/* <Login /> */}
      {/* <Shop /> */}
      {/* <Designers /> */}
      {/* <DesignerDetail /> */}
<<<<<<< HEAD

      {/* admin panel */}
      {/* <AdminPanel /> */}
=======
>>>>>>> 6e4b02b2d51ced4251cf0c4534fe00d77855d238
    </>
  );
}
