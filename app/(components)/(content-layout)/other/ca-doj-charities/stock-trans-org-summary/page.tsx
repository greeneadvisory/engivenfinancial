"use client"
import StockTransOrgSummaryDataTable from "@/shared/data/tables/stock-trans-org-summary-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface StockTransOrgSummaryProps {}

const StockTransOrgSummary: FC<StockTransOrgSummaryProps> = () => {
  return (
    <Fragment>
      <Seo />

      <Pageheader title="Other" currentpage="Stock Trans Org Summary" activepage="CA DOJ Charities" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <StockTransOrgSummaryDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StockTransOrgSummary;
