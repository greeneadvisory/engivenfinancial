"use client"
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface BasicProps {}

const Basic : FC<BasicProps>  = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
return (
<Fragment>
<Seo title="Lock-Screen" />
<div className="container">
        <div className="grid grid-cols-12 justify-center authentication authentication-basic items-center h-full">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                <div className="box">
                    <div className="box-body !p-[3rem]">
                        <div className="mb-3 flex justify-center">
                            <Link href="/dashboard/sales">
                                <span className="desktop-logo text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                                <span className="desktop-white text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                            </Link>
                        </div>
                        <p className="h5 mb-3 text-center">Lock Screen</p>
                        <div className="grid grid-cols-12 gap-y-4">
                            <div className="xl:col-span-12 col-span-12 mb-2">
                                <label htmlFor="lockscreen-password" className="form-label text-defaulttextcolor">Password<sup className="text-xs text-danger">*</sup></label>
                                <div className="relative">
                                    <input type={(passwordshow1) ? 'text' : "password"} className="form-control create-password-input" id="lockscreen-password" placeholder="password"/>
                                    <Link href="#!"  onClick={() => setpasswordshow1(!passwordshow1)}  className="show-password-button text-textmuted dark:text-textmuted/50"   id="button-addon2">
                                       <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                    </Link>
                                </div>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal" htmlFor="defaultCheck1">
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12 grid mt-2">
                                <Link href="/dashboard/sales" className="ti-btn ti-btn-primary">Unlock</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Back to home ? <Link className="text-primary" href="/dashboard/sales">Click Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
        </div>
    </div>
</Fragment>
);
};

export default Basic;