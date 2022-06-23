import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/rtl/layout/Layout";
import HeadingBar from "../../../components/rtl/heading-bar/HeadingBar";
import AdminPanelLayout from "../../../components/rtl/dashboard/admin-panel-layout/AdminPanelLayout";
import ManageProfileBasicInfo from "../../../components/rtl/dashboard/manage-profile-basic-info/ManageProfileBasicInfo";
import ManageProfileAddress from "../../../components/rtl/dashboard/manage-profile-address/ManageProfileAddress";
import ManageProfilePaymentSetting from "../../../components/rtl/dashboard/manage-profile-payment-setting/ManageProfilePaymentSetting";
import ManageProfileDesigner_VAT_and_CR_No from "../../../components/rtl/dashboard/manage-profile-designer-vat-and-cr-no/ManageProfileDesigner_VAT_and_CR_No";
import ManageProfileChangeYourEmail from "../../../components/rtl/dashboard/manage-profile-change-your-email/ManageProfileChangeYourEmail";

function Profiles() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])

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
            <HeadingBar heading={"إدارة الملف الشخصي"} />
            <div className="w-[100%]">
              <ManageProfileBasicInfo data={profileData.basicInfo} title={"معلومات أساسية"} showModal={showModal} />
              <ManageProfileAddress data={profileData.address} title={"عنوان"} />
              <ManageProfilePaymentSetting data={profileData.paymentSetting} title={"إعداد الدفع"} />
              <ManageProfileDesigner_VAT_and_CR_No data={profileData.designer_VAT_and_CR_No} title={"ضريبة القيمة المضافة والسجل التجاري للمصمم"} />
              <ManageProfileChangeYourEmail data={profileData.changeYourEmail} title={"قم بتغيير بريدك الإلكتروني"} />
            </div>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

export default Profiles;
