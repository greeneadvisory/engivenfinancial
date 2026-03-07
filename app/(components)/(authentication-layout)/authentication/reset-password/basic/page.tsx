"use client"
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface BasicProps {}

const Basic : FC<BasicProps>  = () => {

    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
return (
<Fragment>
<Seo title="ResetPassword Basic" />
<div className="container">
            <div className="grid grid-cols-12 justify-center items-center authentication authentication-basic h-full">
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                    <div className="box my-4">
                        <div className="box-body !p-[3rem]">
                            <div className="mb-3 flex justify-center">
                                <Link href="/dashboard/sales">
                                    <span className="desktop-logo text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                                    <span className="desktop-white text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                                </Link>
                            </div>
                            <p className="h5 mb-2 text-center">Reset Password</p>
                            <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center text-[14px]">Hi Henry!</p>
                            <div className="grid grid-cols-12 gap-y-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="reset-password" className="form-label text-defaulttextcolor">Current Password <sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow) ? 'text' : "password"} className="form-control create-password-input" id="reset-password" placeholder="current password"/>
                                        <Link href="#!" onClick={() => setpasswordshow(!passwordshow)}   className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon2">
                                           <i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="reset-newpassword" className="form-label text-defaulttextcolor">New Password <sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input  type={(passwordshow1) ? 'text' : "password"} className="form-control create-password-input" id="reset-newpassword" placeholder="new password"/>
                                        <Link href="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon21">
                                           <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label htmlFor="reset-confirmpassword" className="form-label text-defaulttextcolor">Confirm Password <sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow2) ? 'text' : "password"} className="form-control create-password-input" id="reset-confirmpassword" placeholder="confirm password"/>
                                        <Link href="#!" onClick={() => setpasswordshow2(!passwordshow2)} className="show-password-button text-textmuted dark:text-textmuted/50"   id="button-addon22">
                                           <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal" htmlFor="defaultCheck1">
                                                Remember Me ?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-4">
                                <Link href="/authentication/sign-in/basic" className="ti-btn ti-btn-primary">Create</Link>
                            </div>
                            <div className="text-center">
                                <p className="text-textmuted dark:text-textmuted/50 mt-3">Remembered your password? <Link href="/authentication/sign-in/basic" className="text-primary">Sign In</Link></p>
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