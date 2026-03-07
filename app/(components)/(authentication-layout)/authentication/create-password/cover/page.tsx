"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface CoverProps {}

const Cover : FC<CoverProps>  = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
return (
<Fragment>
<Seo title="Create-Cover" />
<div className="grid grid-cols-12 authentication authentication-cover-main mx-0">
        <div className="xxl:col-span-6 xl:col-span-7 col-span-12">
            <div className="grid grid-cols-12 justify-center items-center h-full">
                <div className="xxl:col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-6 xl:col-span-8 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                    <div className="box my-auto border border-defaultborder dark:border-defaultborder/10">
                        <div className="box-body !p-[3rem]">
                            <p className="h5 mb-2 text-center">Create Password</p>
                            <p className="mb-4 text-textmuted dark:text-textmuted/50 font-normal text-center text-[14px]">Hi Henry!</p>
                            <div className="grid grid-cols-12 gap-y-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label text-defaulttextcolor" htmlFor="create-password">Password<sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input className="form-control create-password-input" id="create-password" placeholder="password"  type={(passwordshow1) ? 'text' : "password"} inputMode="numeric" pattern="[0-9]*" /> 
                                        <Link className="show-password-button text-textmuted dark:text-textmuted/50" href="#!" onClick={() => setpasswordshow1(!passwordshow1)}>
                                            <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label className="form-label text-defaulttextcolor" htmlFor="create-confirmpassword">Confirm Password<sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input className="form-control create-password-input" id="create-confirmpassword" placeholder="password" type={(passwordshow2) ? 'text' : "password"} inputMode="numeric" pattern="[0-9]*" /> 
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
                                <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Back to home ? <Link className="text-primary" href="/dashboard/sales">Click Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
            </div>
        </div>
        <div className="xxl:col-span-6 xl:col-span-5 lg:col-span-12 xl:block hidden px-0">
            <div className="authentication-cover overflow-hidden">
                <div className="authentication-cover-logo"> 
                    <Link href="/dashboard/sales"> 
                        <span className="authentication-brand desktop-white text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span> 
                    </Link> 
                </div>
                <div className="aunthentication-cover-content flex items-center justify-center">
                    <div>
                        <h3 className="text-white mb-1 font-medium">Welcome Henry!</h3>
                        <h6 className="text-white mb-3 font-medium">Login to Your Account</h6>
                        <p className="text-white mb-1 op-6">Welcome to the Admin Dashboard. Please log in to securely manage your administrative tools and oversee platform activities. Your credentials ensure system integrity and functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
);
};

export default Cover;