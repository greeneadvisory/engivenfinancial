"use client"
import CryptoTransOrgSummaryDataTable from "@/shared/data/tables/crypto-trans-org-summary-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface CryptoTransOrgSummaryProps {}

const CryptoTransOrgSummary: FC<CryptoTransOrgSummaryProps> = () => {
  return (
    <Fragment>
      <Seo />

      <Pageheader title="Other" currentpage="Crypto Trans Org Summary" activepage="CA DOJ Charities" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <CryptoTransOrgSummaryDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoTransOrgSummary;
