"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface CoverProps {}

const Cover : FC<CoverProps>  = () => {
    
    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);

return (
<Fragment>
<Seo title="Signup Cover" />
<div className="grid grid-cols-12 authentication authentication-cover-main mx-0 dark:bg-bodybg2">
        <div className="xxl:col-span-6 xl:col-span-7 col-span-12">
            <div className="grid grid-cols-12 justify-center items-center h-full">
                <div className="xxl:col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-6 xl:col-span-8 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                    <div className="box my-5 border border-defaultborder dark:border-defaultborder/10">
                       <div className="box-body !p-[3rem]">
                            <p className="h5 mb-2 text-center">Sign Up</p>
                            <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">Welcome! Begin by creating your account.</p>
                            <div className="flex mb-3 justify-between gap-2 flex-wrap flex-lg-nowrap">
                                <SpkButton customClass="ti-btn ti-btn-lg border border-defaultborder dark:border-defaultborder/10 flex items-center justify-center flex-auto ti-btn-light">
                                    <span className="avatar avatar-xs">
                                        <img src="../../../assets/images/media/apps/google.png" alt=""/>
                                    </span>
                                    <span className="leading-[1.2rem] ms-2 text-[13px] text-defaulttextcolor">Signup with Google</span>
                                </SpkButton>
                            </div>
                            <div className="text-center my-3 authentication-barrier">
                                <span>OR</span>
                            </div>
                            <div className="grid grid-cols-12 gap-y-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-defaulttextcolor">Full Name<sup className="text-xs text-danger">*</sup></label>
                                    <input type="text" className="form-control" id="signup-firstname" placeholder="full name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-password" className="form-label text-defaulttextcolor">Password<sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow) ? 'text' : "password"}  className="form-control create-password-input" id="signup-password" placeholder="password"/>
                                        <Link href="#!" onClick={() => setpasswordshow(!passwordshow)} className="show-password-button text-textmuted dark:text-textmuted/50"   id="button-addon2">
                                          <i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-confirmpassword" className="form-label text-defaulttextcolor">Confirm Password<sup className="text-xs text-danger">*</sup></label>
                                    <div className="relative">
                                        <input type={(passwordshow1) ? 'text' : "password"} className="form-control create-password-input" id="signup-confirmpassword" placeholder="confirm password"/>
                                        <Link href="#!" onClick={() => setpasswordshow1(!passwordshow1)} className="show-password-button text-textmuted dark:text-textmuted/50"   id="button-addon21">
                                          <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                        </Link>
                                    </div>
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal text-[14px]" htmlFor="defaultCheck1">
                                        </label>
                                        By creating a account you agree to our <Link href="/pages/terms-conditions" className="text-success"><u>Terms & Conditions</u></Link> and <a className="text-success"><u>Privacy Policy</u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-4">
                                <SpkButton variant="primary" customClass="ti-btn">Create Account</SpkButton>
                            </div>
                            <div className="text-center">
                                <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Already have an account? <Link scroll={false} href="/authentication/sign-in/basic" className="text-primary">Sign In</Link></p>
                            </div>
                            <div className="btn-list text-center mt-3">
                                <SpkButton variant="soft-primary" customClass="ti-btn ti-btn-icon btn-wave">
                                    <i className="ri-facebook-line leading-none align-center text-[17px]"></i>
                                </SpkButton>
                                <SpkButton variant="soft-primary1" customClass="ti-btn ti-btn-icon btn-wave">
                                    <i className="ri-twitter-x-line leading-none align-center text-[17px]"></i>
                                </SpkButton>
                                <SpkButton variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave">
                                    <i className="ri-instagram-line leading-none align-center text-[17px]"></i>
                                </SpkButton>
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