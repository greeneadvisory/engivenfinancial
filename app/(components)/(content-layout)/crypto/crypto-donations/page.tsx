"use client"
import CryptoDonationsDataTable from "@/shared/data/tables/crypto-donations-data-table";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface CryptoDonationsProps {}

const CryptoDonations: FC<CryptoDonationsProps> = () => {
  return (
    <Fragment>
      <Seo />
      <div className="grid grid-cols-12 gap-3 pt-5">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <CryptoDonationsDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoDonations;
