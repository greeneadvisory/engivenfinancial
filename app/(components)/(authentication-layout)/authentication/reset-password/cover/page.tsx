"use client"
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface CoverProps {}

const Cover : FC<CoverProps>  = () => {
    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
return (
<Fragment>
<Seo title="ResetPassword Cover" />
<div className="grid grid-cols-12 authentication authentication-cover-main mx-0">
        <div className="xxl:col-span-6 xl:col-span-7 col-span-12">
            <div className="grid grid-cols-12 justify-center items-center h-full">
                <div className="xxl:col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-6 xl:col-span-8 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                    <div className="box my-auto border border-defaultborder dark:border-defaultborder/10">
                        <div className="box-body !p-[3rem]">
                            <p className="h5 mb-2 text-center">Reset Password</p>
                            <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center text-[14px]">Hi Henry!</p>
                            <div className="grid grid-cols-12 gap-y-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="reset-password" className="form-label text-defaulttextcolor">Current Password <sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow) ? 'text' : "password"} className="form-control create-password-input" id="reset-password" placeholder="current password"/>
                                        <Link href="#!" onClick={() => setpasswordshow(!passwordshow)}  className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon2">
                                          <i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="reset-newpassword" className="form-label text-defaulttextcolor">New Password <sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow1) ? 'text' : "password"} className="form-control create-password-input" id="reset-newpassword" placeholder="new password"/>
                                        <Link href="#!" onClick={() => setpasswordshow1(!passwordshow1)}  className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon21">
                                          <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label htmlFor="reset-confirmpassword" className="form-label text-defaulttextcolor">Confirm Password <sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow2) ? 'text' : "password"}  className="form-control create-password-input" id="reset-confirmpassword" placeholder="confirm password"/>
                                        <Link href="#!" onClick={() => setpasswordshow2(!passwordshow2)} className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon22">
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