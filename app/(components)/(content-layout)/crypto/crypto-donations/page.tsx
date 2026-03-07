"use client"
import CryptoDonationsDataTable from "@/shared/data/tables/crypto-donations-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface CryptoDonationsProps {}

const CryptoDonations: FC<CryptoDonationsProps> = () => {
  return (
    <Fragment>
      <Seo />
      <Pageheader title="Crypto" currentpage="Crypto Donations" activepage="Crypto Donations" />
      <div className="grid grid-cols-12 gap-6">
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
