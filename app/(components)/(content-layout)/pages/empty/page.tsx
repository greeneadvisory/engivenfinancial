"use client"
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface EmptyProps {}

const Empty : FC<EmptyProps>  = () => {
return (
<Fragment>
    {/* { <!-- Page Header --> */}
        <Seo title="Pages-Empty" />

        <Pageheader title="Pages" currentpage="Empty" activepage="Empty" />

    {/* { <!-- Page Header Close --> */}
    {/* { <!-- Start::row-1 --> */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="box">
                                <div className="box-body">
                                    <h6 className="mb-0">EMPTY CARD</h6>
                                </div>
                            </div>
                        </div>
                    </div>
    {/* { <!--End::row-1 --> */}
</Fragment>
);
};

export default Empty;