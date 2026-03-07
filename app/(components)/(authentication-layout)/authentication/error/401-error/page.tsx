"use client"
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface Error400Props {}

const Error400 : FC<Error400Props>  = () => {
return (
<Fragment>
<Seo title="401" />
<div className="page error-bg">
        {/* <!-- Start::error-page --> */}
        <div className="error-page">
            <div className="container">
                <div className="my-auto">
                    <div className="grid grid-cols-11 items-center justify-center h-full">
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-1 col-span-12"></div>
                        <div className="xl:col-span-7 lg:col-span-7 md:col-span-9 col-span-12 px-2">
                            <p className="error-text mb-4">401</p>
                            <p className="text-[1.5rem] font-normal mb-2">Oops, the page you are trying to access does not exist ?</p>
                            <p className="text-[15px] mb-[3rem] text-textmuted dark:text-textmuted/50">The requested page is not available. It might have been relocated, deleted, or never existed.</p>
                            <Link href="/dashboard/sales" className="ti-btn ti-btn-primary"><i className="ri-arrow-left-line align-middle me-1 inline-block"></i> BACK TO HOME PAGE</Link>
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-1 col-span-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
};

export default Error400;