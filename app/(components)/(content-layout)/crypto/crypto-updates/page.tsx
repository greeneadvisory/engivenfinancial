"use client"
import CryptoUpdatesDataTable from "@/shared/data/tables/crypto-updates-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface CryptoUpdatesProps {}

const CryptoUpdates: FC<CryptoUpdatesProps> = () => {
  return (
    <Fragment>
      <Seo />
      <Pageheader title="Crypto" currentpage="Crypto Updates" activepage="Crypto Updates" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <CryptoUpdatesDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoUpdates;
