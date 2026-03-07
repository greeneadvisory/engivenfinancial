"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { DayCounter } from "@/shared/data/authentication/comingsoondata";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, } from "react";

interface UnderMaintainanceProps {}

const UnderMaintainance : FC<UnderMaintainanceProps>  = () => {
return (
<Fragment>
<Seo title="Undermaintenance" />
<div className="grid grid-cols-12 authentication coming-soon justify-center g-0 my-auto">
        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12 my-auto"></div>
        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12 my-auto px-3">
            <div className="authentication-cover rounded-3 overflow-hidden box border border-defaultborder dark:border-defaultborder/10 my-3">
                <div className="aunthentication-cover-content text-center">
                    <div className="grid grid-cols-12 justify-center items-center mx-0 g-0">
                        <div className="col-span-12">
                            <div>
                                <div className="mb-4 flex justify-center"> <Link scroll={false} href="/dashboard/sales"> 
                                    <span className="authentication-brand text-lg font-semibold leading-none whitespace-nowrap text-white">Engiven Financial</span> </Link> 
                                </div>
                                <h4 className="mb-2">Under Maintenance</h4>
                                <p className="mb-5 text-textmuted dark:text-textmuted/50">Excuse our digital dust - we're sprucing up our site to bring you an even better bgrid grid-cols-12sing adventure soon!</p>
                                <div className="input-group mb-5">
                                    <input type="email" className="form-control form-control-lg bg-light !border-s" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2"/>
                                    <SpkButton customClass="ti-btn ti-btn-primary ti-btn-lg !m-0" type="button" id="button-addon2">Subscribe</SpkButton>
                                </div>
                                <DayCounter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12 my-auto"></div>

    </div>
</Fragment>
);
};

export default UnderMaintainance;