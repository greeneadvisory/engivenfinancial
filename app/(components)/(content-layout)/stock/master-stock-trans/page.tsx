"use client"
import MasterStockTransDataTable from "@/shared/data/tables/master-stock-trans-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface MasterStockTransProps {}

const MasterStockTrans: FC<MasterStockTransProps> = () => {
  return (
    <Fragment>
      <Seo />

      <Pageheader title="Stock" currentpage="Master Stock Trans" activepage="Master Stock Trans" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <MasterStockTransDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MasterStockTrans;
