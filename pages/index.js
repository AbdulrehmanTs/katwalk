import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./homePage";
import PrivacyPolicy from "./privacy-policy";

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <PrivacyPolicy /> */}
    </>
  );
}
