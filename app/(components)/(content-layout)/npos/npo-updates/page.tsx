"use client"
import NpoUpdatesDataTable from "@/shared/data/tables/npo-updates-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface NpoUpdatesPageProps {}

const NpoUpdatesPage: FC<NpoUpdatesPageProps> = () => {
  return (
    <Fragment>
      <Seo />

      <Pageheader title="NPOs" currentpage="NPO Updates" activepage="NPO Updates" hideActions={true} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="npo-updates" className="overflow-auto table-responsive">
            <NpoUpdatesDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NpoUpdatesPage;
