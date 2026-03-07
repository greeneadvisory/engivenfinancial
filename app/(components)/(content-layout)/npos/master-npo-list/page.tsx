"use client"
import MasterNpoDataTable from "@/shared/data/tables/master-npo-data-table";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface MasterNpoListProps {}

const MasterNpoList: FC<MasterNpoListProps> = () => {
  return (
    <Fragment>
      <Seo />

      <Pageheader title="NPOs" currentpage="Master NPO List" activepage="Master NPO List" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <MasterNpoDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MasterNpoList;
