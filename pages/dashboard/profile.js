import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import HeadingBar from "../../components/heading-bar/HeadingBar";
import AdminPanelLayout from "../../components/dashboard/admin-panel-layout/AdminPanelLayout";
import ManageProfileBasicInfo from "../../components/dashboard/manage-profile-basic-info/ManageProfileBasicInfo";
import ManageProfileAddress from "../../components/dashboard/manage-profile-address/ManageProfileAddress";
import ManageProfilePaymentSetting from "../../components/dashboard/manage-profile-payment-setting/ManageProfilePaymentSetting";
import ManageProfileDesigner_VAT_and_CR_No from "../../components/dashboard/manage-profile-designer-vat-and-cr-no/ManageProfileDesigner_VAT_and_CR_No";
import ManageProfileChangeYourEmail from "../../components/dashboard/manage-profile-change-your-email/ManageProfileChangeYourEmail";
import ChooseImageModal from "../../components/dashboard/choose-image-modal/ChooseImageModal";

function Profiles() {
  const [profileData, setProfileData] = useState({
    basicInfo: [
      { name: "Your name", value: "Aliya Almusawi" },
      { name: "Your Phone", value: "+966508011144" },
      { name: "Photo", value: "" },
      { name: "New Password", placeHolder: "New Password" },
      { name: "Confirm Password", placeHolder: "Confirm Password" },
    ],
    address: [
      { name: "Address", value: "Prince Nayef St." },
      { name: "Postal Code", value: "32424" },
      { name: "City", value: "Dammam" },
      { name: "Area", value: "Al Aziziyah" },
      { name: "Country", value: "SA" },
      { name: "Phone", value: "+966508011144" },
    ],
    paymentSetting: [
      { name: "Cash Payment", value: "", status: true },
      { name: "Bank Payment", value: "", status: false },
      { name: "Bank Name", placeHolder: "Bank Name" },
      { name: "Bank Account Name", placeHolder: "Bank Account Name" },
      { name: "Bank Account Number", placeHolder: "Bank Account Number" },
      { name: "Bank Routing Number", placeHolder: "Bank Routing Number" },
    ],
    designer_VAT_and_CR_No: [
      { name: "VAT Number", placeHolder: "Enter Vat Number", status: false },
      { name: "CR Number", value: "123456789", status: true },
    ],
    changeYourEmail: [
      { name: "Your Email", placeHolder: "azaamam@hotmail.com" },
    ],
  });

  const showModal = () => {
    document.getElementById("upload_overlay").classList.add("dblock");
  };

  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"Profiles"}>
            <HeadingBar heading={"Manage Profile"} />
            <div className="w-[100%]">
              <ManageProfileBasicInfo data={profileData.basicInfo} title={"Basic Info"} showModal={showModal} />
              <ManageProfileAddress data={profileData.address} title={"Address"} />
              <ManageProfilePaymentSetting data={profileData.paymentSetting} title={"Payment Setting"} />
              <ManageProfileDesigner_VAT_and_CR_No data={profileData.designer_VAT_and_CR_No} title={"Designer VAT & CR No."} />
              <ManageProfileChangeYourEmail data={profileData.changeYourEmail} title={"Change your email"} />
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
      <div id="upload_overlay" className="dnone">
        <ChooseImageModal />
      </div>
    </>
  );
}

export default Profiles;
