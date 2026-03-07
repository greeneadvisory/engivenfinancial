"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface CoverProps {}

const Cover : FC<CoverProps>  = () => {

    const [passwordshow2, setpasswordshow2] = useState(false);

return (
<Fragment>
<Seo title="Signin Cover" />
<div className="grid grid-cols-12 authentication authentication-cover-main mx-0">
        <div className="xxl:col-span-6 xl:col-span-7 col-span-12">
            <div className="grid grid-cols-12 justify-center items-center h-full">
                <div className="xxl:col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-6 xl:col-span-8 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                    <div className="box my-auto border border-defaultborder dark:border-defaultborder/10">
                        <div className="box-body !p-[3rem]">
                            <p className="h5 mb-2 text-center">Sign In</p>
                            <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">Welcome back Henry !</p>
                            <div className="flex mb-3 justify-between gap-2 flex-wrap flex-lg-nowrap">
                                <SpkButton Size="lg" customClass="ti-btn border border-defaultborder dark:border-defaultborder/10 flex items-center justify-center flex-auto bg-light">
                                    <span className="avatar avatar-xs flex-shrink-0">
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
                                    <label htmlFor="signin-username" className="form-label text-defaulttextcolor">User Name</label>
                                    <input type="text" className="form-control" id="signin-username" placeholder="user name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <label htmlFor="signin-password" className="form-label text-defaulttextcolor block">Password<Link scroll={false} href="/authentication/reset-password/basic" className="float-end font-normal text-textmuted dark:text-textmuted/50">Forget password ?</Link></label>
                                    <div className="relative">
                                        <input  type={(passwordshow2) ? 'text' : "password"} className="form-control create-password-input" id="signin-password" placeholder="password"/>
                                        <Link href="#!"  onClick={() => setpasswordshow2(!passwordshow2)} className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon2">
                                          <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
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
                            </div>
                            <div className="grid mt-4">
                                <Link href="/dashboard/sales" className="ti-btn ti-btn-primary">Sign In</Link>
                            </div>
                            <div className="text-center">
                                <p className="text-textmuted dark:text-textmuted/50 mt-3 mb-0">Dont have an account? <Link href="/authentication/sign-up/basic" className="text-primary">Sign Up</Link></p>
                            </div>
                            <div className="btn-list text-center mt-3">
                                <SpkButton variant="soft-primary" customClass="ti-btn ti-btn-icon">
                                    <i className="ri-facebook-line leading-none align-center text-[17px]"></i>
                                </SpkButton>
                                <SpkButton variant="soft-primary1" customClass="ti-btn ti-btn-icon">
                                    <i className="ri-twitter-x-line leading-none align-center text-[17px]"></i>
                                </SpkButton>
                                <SpkButton variant="soft-primary2" customClass="ti-btn ti-btn-icon">
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