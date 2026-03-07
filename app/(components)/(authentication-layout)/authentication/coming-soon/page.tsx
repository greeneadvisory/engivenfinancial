"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { DayCounter } from "@/shared/data/authentication/comingsoondata";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment,  } from "react";

interface ComingSoonProps {}

const ComingSoon : FC<ComingSoonProps>  = () => {

    
return (
<Fragment>
    <Seo title="Coming-Soon" />
        <div className="flex authentication coming-soon justify-center g-0 my-auto">
                <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-7 col-span-11 my-auto px-2">
                    <div className="authentication-cover rounded-md overflow-hidden box border border-defaultborder dark:border-defaultborder/10 my-3">
                        <div className="aunthentication-cover-content text-center">
                            <div className="grid grid-cols-12 justify-center items-center mx-0 g-0">
                                <div className="col-span-12">
                                    <div>
                                        <div className="mb-4 flex justify-center"> <Link href="/dashboard/sales"> 
                                            <span className="authentication-brand text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span> </Link> 
                                        </div>
                                        <h4 className="mb-2">Coming Soon</h4>
                                        <p className="mb-5 text-textmuted dark:text-textmuted/50">Something incredible is on the horizon – stay tuned for the unveiling of a new experience!</p>
                                        <div className="input-group mb-5">
                                            <input type="email" className="form-control !border-s form-control-lg bg-light" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2"/>
                                            <SpkButton variant="primary" customClass="ti-btn !m-0 ti-btn-lg mb-0" buttontypetype="button" Id="button-addon2">Subscribe</SpkButton>
                                        </div>
                                     
                                            <DayCounter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>  
</Fragment>
);
};

export default ComingSoon;