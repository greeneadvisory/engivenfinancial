"use client"
import MasterCryptoTransDataTable from "@/shared/data/tables/master-crypto-trans-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface MasterCryptoTransProps {}

const MasterCryptoTrans: FC<MasterCryptoTransProps> = () => {
  return (
    <Fragment>
      <Seo />

      <Pageheader title="Crypto" currentpage="Master Crypto Trans" activepage="Master Crypto Trans" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <MasterCryptoTransDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MasterCryptoTrans;
