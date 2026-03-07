"use client"
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useRef, useState } from "react";

interface CoverProps {}

const Cover : FC<CoverProps>  = () => {
    const [inputValues, setInputValues] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
      });
    
      const inputRefs = {
        one: useRef<HTMLInputElement | null>(null),
        two: useRef<HTMLInputElement | null>(null),
        three: useRef<HTMLInputElement | null>(null),
        four: useRef<HTMLInputElement | null>(null),
      };
    
      const handleChange = (
        currentId: keyof typeof inputValues,
        nextRef: React.RefObject<HTMLInputElement | null>,  // Allow null here
        value: string
      ) => {
        setInputValues((prevValues) => ({
          ...prevValues,
          [currentId]: value,
        }));
    
        // Only focus the next input if it's not null
        if (nextRef && nextRef.current) {
          nextRef.current.focus();
        }
      };
return (
<Fragment>
<Seo title="Twostep Cover" />
<div className="grid grid-cols-12 authentication two-step-verification authentication-cover-main mx-0">
        <div className="xxl:col-span-6 xl:col-span-7 col-span-12">
            <div className="grid grid-cols-12 justify-center items-center h-full">
                <div className="xxl:col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
                <div className="xxl:col-span-6 xl:col-span-8 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 px-3">
                    <div className="box my-auto border border-defaultborder dark:border-defaultborder/10">
                        <div className="box-body !p-[3rem]">
                            <p className="h5 mb-2 text-center">Verification Code</p>
                            <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center text-xs">Enter the 4 digit code sent to the moble number ******850.</p>
                            <div className="grid grid-cols-12 gy-3">
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                    <div className="grid grid-cols-12 gap-x-2">
                                        <div className="col-span-3">
                                            <input type="text" className="form-control text-center" id="one" value={inputValues.one}
                                               onChange={(e) =>
                                                handleChange("one", inputRefs.two, e.target.value)
                                              }
                                              maxLength={1}
                                              ref={inputRefs.one} />
                                        </div>
                                        <div className="col-span-3">
                                            <input type="text" className="form-control text-center" id="two" value={inputValues.two}
                                                onChange={(e) =>
                                                    handleChange("two", inputRefs.three, e.target.value)
                                                  }
                                                  maxLength={1}
                                                  ref={inputRefs.two}/>
                                        </div>
                                        <div className="col-span-3">
                                            <input type="text" className="form-control text-center" id="three" value={inputValues.three}
                                                onChange={(e) =>
                                                    handleChange("three", inputRefs.four, e.target.value)
                                                   }
                                                   maxLength={1}
                                                   ref={inputRefs.three}/>
                                        </div>
                                        <div className="col-span-3">
                                            <input type="text" className="form-control text-center" id="four" value={inputValues.four}
                                               onChange={(e) =>
                                                handleChange("four", inputRefs.one, e.target.value) // No next input
                                              }
                                              maxLength={1}
                                              ref={inputRefs.four} />
                                        </div>
                                    </div>
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label text-[14px]" htmlFor="defaultCheck1">
                                            Didn't recieve a code ?<Link scroll={false} href="/pages/email/mail-app" className="text-primary ms-2 inline-block">Resend</Link>
                                        </label>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 grid mt-2">
                                    <Link href="/dashboard/sales" className="ti-btn ti-btn-primary">Verify</Link>
                                </div>
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