"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface BasicProps {}

const Basic : FC<BasicProps>  = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
return (
<Fragment>
<Seo title="Create-Basic" />
<div className="container">
        <div className="grid grid-cols-12 justify-center authentication authentication-basic items-center h-full">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                <div className="box my-4">
                    <div className="box-body !p-[3rem]">
                        <div className="mb-3 flex justify-center">
                            <Link scroll={false} href="/dashboard/sales">
                                <span className="desktop-logo text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                                <span className="desktop-white text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                            </Link>
                        </div>
                        <p className="h5 mb-2 text-center">Create Password</p>
                        <p className="mb-4 text-textmuted dark:text-textmuted/50 font-normal text-center text-[14px]">Hi Henry!</p>
                        <div className="grid grid-cols-12 gap-y-4">
                            <div className="xl:col-span-12 col-span-12">
                                <label className="form-label text-defaulttextcolor"  htmlFor="create-password">Password<sup className="text-xs text-danger">*</sup></label>
                                <div className="relative">
                                    <input className="form-control create-password-input" type={(passwordshow1) ? 'text' : "password"} id="create-password" placeholder="password"/> 
                                    <Link scroll={false} className="show-password-button text-textmuted dark:text-textmuted/50" href="#!" onClick={() => setpasswordshow1(!passwordshow1)}>
                                      <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12 mb-2">
                                <label className="form-label text-defaulttextcolor" htmlFor="create-confirmpassword">Confirm Password<sup className="text-xs text-danger">*</sup></label>
                                <div className="relative">
                                    <input className="form-control create-password-input" id="create-confirmpassword" placeholder="password" type={(passwordshow2) ? 'text' : "password"}  /> 
                                        <Link className="show-password-button text-textmuted dark:text-textmuted/50" href="#!" onClick={() => setpasswordshow2(!passwordshow2)}>
                                            <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                </div>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" id="defaultCheck1" type="checkbox" value=""/> <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal" htmlFor="defaultCheck1">Remember password ?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-4">
                            <SpkButton variant="primary" customClass="ti-btn">Save Password</SpkButton>
                        </div>
                        <div className="text-center">
                            <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Back to home ? <Link scroll={false} className="text-primary" href="/dashboard/sales">Click Here</Link></p>
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