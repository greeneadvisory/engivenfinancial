"use client";

import CryptoBatchesDataTable from "@/shared/data/tables/crypto-batches-data-table";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface ManageBatchesProps {}

const ManageBatches: FC<ManageBatchesProps> = () => {
  return (
    <Fragment>
      <Seo />
      <div className="grid grid-cols-12 gap-3 pt-5">
        <div className="col-span-12">
          <div id="basic-table" className="overflow-auto table-responsive">
            <CryptoBatchesDataTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ManageBatches;