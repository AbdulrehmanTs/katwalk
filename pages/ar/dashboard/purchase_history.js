import React, { useEffect } from "react";
import Image from "next/image";
import Layout from "../components/layout/layout";
import AdminPanelLayout from "../components/dashboard/admin-panel-layout/AdminPanelLayout";
import TitleAndTableCard from "../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../components/dashboard/table-header/TableHeader";
import TwoColTableWithHeading from "../components/dashboard/two-col-table-with-heading/TwoColTableWithHeading";
import CardBody from "../components/dashboard/card-body/CardBody";
import TwoColTable from "../components/dashboard/two-col-table/TwoColTable";
import HeadingBar from "../components/heading-bar/HeadingBar";
import verified from "../../../assets/images/icons/verified.png";

function PurchaseHistory() {
  useEffect(() => {
    document.querySelector("body").style.direction = 'rtl'
  }, [])
  return (
    <>
      <Layout>
        <div className="w-[100%] min-h-[100vh] h-[auto]">
          <AdminPanelLayout active={"PurchaseHistory"}>
            <TitleAndTableCard>
              <TableHeader>تاريخ شراء</TableHeader>
            </TitleAndTableCard>
          </AdminPanelLayout>
        </div>
      </Layout>
    </>
  );
}

export default PurchaseHistory;
