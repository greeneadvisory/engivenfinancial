"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface BasicProps {}

const Basic : FC<BasicProps>  = () => {

    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);
return (
<Fragment>
<Seo title="SignUp Basic" />
<div className="container">
        <div className="flex justify-center items-center authentication authentication-basic h-full">
            <div className="xl:max-w-[41.66666667%] md:max-w-[60%]">
                <div className="box my-4">
                    <div className="box-body !p-[3rem]">
                        <div className="mb-4 flex justify-center">
                            <Link href="/dashboard/sales">
                                <span className="desktop-logo text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                                <span className="desktop-white text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span>
                            </Link>
                        </div>
                        <p className="h5 mb-2 text-center">Sign Up</p>
                        <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">Welcome! Begin by creating your account.</p>
                        <div className="flex mb-3 justify-between gap-2 flex-wrap flex-lg-nowrap">
                            <SpkButton variant="light" Size="lg" customClass="ti-btn border border-defaultborder dark:border-defaultborder/10 flex items-center justify-center flex-auto">
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
                                    <Link scroll={false} href="#!" onClick={() => setpasswordshow(!passwordshow)} className="show-password-button text-textmuted dark:text-textmuted/50"  id="button-addon2">
                                      <i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <label htmlFor="signup-confirmpassword" className="form-label text-defaulttextcolor">Confirm Password<sup className="text-xs text-danger">*</sup></label>
                                <div className="relative">
                                    <input type={(passwordshow1) ? 'text' : "password"} className="form-control create-password-input" id="signup-confirmpassword" placeholder="confirm password"/>
                                    <Link scroll={false} href="#!" onClick={() => setpasswordshow1(!passwordshow1)}  className="show-password-button text-textmuted dark:text-textmuted/50"   id="button-addon21">
                                        <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                    </Link>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label text-textmuted dark:text-textmuted/50 font-normal text-[14px]" htmlFor="defaultCheck1">
                                    </label>
                                    By creating a account you agree to our <Link scroll={false} href="/pages/terms-conditions" className="text-success"><u>Terms & Conditions</u></Link> and <a className="text-success"><u>Privacy Policy</u></a>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-4">
                            <Link className="ti-btn ti-btn-primary" href="/dashboard/sales">Create Account</Link>
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
        </div>
    </div>
</Fragment>
);
};

export default Basic;