"use client"
import CryptoBatchesDataTable from "@/shared/data/tables/crypto-batches-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface CryptoBatchesProps {}

const CryptoBatches: FC<CryptoBatchesProps> = () => {
  return (
    <Fragment>
      <Seo />
      <Pageheader title="Crypto" currentpage="Crypto Batches" activepage="Crypto Batches" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <CryptoBatchesDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoBatches;
