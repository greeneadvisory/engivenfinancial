"use client"
import SpkPricingcards from "@/shared/@spk-reusable-components/spk-pages/spk-pricingcards";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { pricingsdata } from "@/shared/data/pages/pricingdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useState } from "react";

interface PricingProps {}

const Pricing : FC<PricingProps>  = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
return (
<Fragment>
                {/* <!-- Page Header --> */}
                    <Seo title="Pages-Pricing" />

                    <Pageheader title="Pages" currentpage="Pricing" activepage="Pricing" />

                {/* <!-- Page Header Close --> */}
               {/* <!-- Start:: row-1 --> */}
                    <div className="flex justify-center">
                        <div className="max-w-[75%]" id="convertable-pricing">
                            <div className="p-4 pt-0">
                                <div className="text-center">
                                    <h3 className="text-primarytint1color">Pricing</h3>
                                    <h5 className="block mb-3">Plans that flex with your needs.</h5>
                                    <p className="text-textmuted dark:text-textmuted/50 mb-4">Stay agile with plans that seamlessly adjust to your changing requirements, ensuring you always have the flexibility you need.</p>
                                </div>
                            </div>
                            <div className="flex justify-center mb-4">
                                <div className="switcher-box">
                                    <span className="pricing-time-span">Monthly</span>
                                    <div className="switcher-pricing text-center">
                                      <input type="checkbox" className="pricing-toggle"  defaultChecked={!isMonthly}
                                    onChange={handleToggle}/>
                                    </div>
                                    <span className="pricing-time-span">Annually <SpkBadge variant="primarytint2color" customClass="ms-1 rounded-full leading-none">20% off</SpkBadge></span>
                                </div>
                            </div>
                            <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                                <div className="grid grid-cols-12 gap-x-6 items-center justify-center mb-5">
                                        {pricingsdata.map((idx) => (
                                            <div className="lg:col-span-12 xl:col-span-12 xxl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12" key={idx.id}>
                                                <SpkPricingcards card={idx} planType="monthly" />
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                                <div className="grid grid-cols-12 gap-x-6 items-center justify-center mb-5">
                                        {pricingsdata.map((idx) => (
                                                <div className="lg:col-span-12 xl:col-span-12 xxl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12" key={idx.id}>
                                                    <SpkPricingcards card={idx} />
                                                </div>
                                        ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End:: row-1 --> */}

                    {/* <!-- Start:: row-2 --> */}
                    <div className="flex justify-center">
                        <div className="max-w-[75%]">
                            <div className="text-center mb-5 mt-4 flex justify-center">
                                <nav className="-mb-0.5 flex justify-center bg-white dark:bg-bodybg p-2 rounded-full !m-0 border border-defaultborder dark:border-defaultborder/10 shadow-sm space-x-6 rtl:space-x-reverse" aria-label="Tabs" role="tablist">
                                    <SpkButton buttontype="button" customClass="hs-tab-active:font-semibold hs-tab-active:bg-primary hs-tab-active:text-white py-1 px-4 !rounded-full inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50 active" Id="pills-monthly" Tab="#pills-monthly1" Controls="pills-monthly1">
                                        Monthly
                                    </SpkButton>
                                    <SpkButton buttontype="button" customClass="hs-tab-active:font-semibold !m-0 hs-tab-active:bg-primary hs-tab-active:text-white py-1 px-4 !rounded-full inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" Id="pills-yearly" Tab="#pills-yearly1" Controls="pills-yearly1">
                                        Annually <SpkBadge variant="primarytint2color" customClass="ms-1 rounded-full leading-none">Save 10%</SpkBadge>
                                    </SpkButton>
                                  </nav>
                            </div>
                            <div className="tab-content mb-6">
                                <div className="tab-pane show active p-0 border-0" id="pills-monthly1" role="tabpanel" aria-labelledby="pills-monthly">
                                    <div className="box shadow-none overflow-hidden border-0">
                                        <div className="box-body p-0">
                                            <div className="table-responsive">
                                                <table className="table table-bordered pricing-table mb-0">
                                                    <thead>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <th scope="row" className="">
                                                                <div className="grow text-start">
                                                                    <div className="mb-0 font-medium text-[1rem]">Plans with tailored features.</div>
                                                                    <span className="opacity-80 text-[11px]">Unlock personalized features within your plans, designed specifically to suit your needs.</span>
                                                                </div>
                                                            </th>
                                                            <th scope="row" className="">
                                                                <div className="mb-0 font-medium text-[1rem]">Basic</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$3<span className="text-[13px] opacity-50 ms-1">/ month</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-primary3 grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                            <th scope="row" className="">
                                                                <div className="mb-0 font-medium text-[1rem]">Growth</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$19<span className="text-[13px] opacity-50 ms-1">/ month</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-primary3 grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                            <th scope="row" className="relative bg-primary/10 !text-primary">
                                                                <p className="badge badge-lg bg-primarytint1color rounded font-semibold absolute end-0 me-2 mb-0">Popular</p>
                                                                <div className="mb-0 font-medium text-[1rem]">Pro</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$25<span className="text-[13px] opacity-50 ms-1">/ month</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-primary grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                            <th scope="row" className="">
                                                                <div className="mb-0 font-medium text-[1rem]">Professional</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$39<span className="text-[13px] opacity-50 ms-1">/ month</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-primary3 grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border !border-defaultborder dark:!border-defaultborder/10">
                                                            <td colSpan={5} className="pricing-feature !font-semibold !text-primarytint2color">Offered Features :</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Storage Space</td>
                                                            <td>5 GB</td>
                                                            <td>20 GB</td>
                                                            <td className="bg-primary/10 !text-primary">Unlimited</td>
                                                            <td>30GB</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Number of Users</td>
                                                            <td>Up to 5</td>
                                                            <td>Up to 5</td>
                                                            <td className="bg-primary/10 !text-primary">Unlimited</td>
                                                            <td>Customizable</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Customer Support</td>
                                                            <td>Email Support</td>
                                                            <td>Email and Phone Support</td>
                                                            <td className="bg-primary/10 !text-primary">Priority Email, Phone, and On-site Support</td>
                                                            <td>Email and Phone Support</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Advanced Analytics</td>
                                                            <td>Basic Analytics</td>
                                                            <td>Enhanced Analytics</td>
                                                            <td className="bg-primary/10 !text-primary">Custom Analytics Solutions</td>
                                                            <td>Enhanced Analytics</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Integrations</td>
                                                            <td>Limited Integrations</td>
                                                            <td>Custom Integrations</td>
                                                            <td className="bg-primary/10 !text-primary">More Integrations</td>
                                                            <td>None</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Security Features</td>
                                                            <td>Basic Security Measures	</td>
                                                            <td>Enterprise-level Security Measures</td>
                                                            <td className="bg-primary/10 !text-primary">Advanced Security Features</td>
                                                            <td>Enterprise-level Security Measures</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Customization</td>
                                                            <td>Limited Customization Options</td>
                                                            <td>Limited Customization Options</td>
                                                            <td className="bg-primary/10 !text-primary">More Customization Options</td>
                                                            <td>Tailored Solutions</td>
                                                        </tr>
                                                        <tr className="border !border-defaultborder dark:!border-defaultborder/10">
                                                            <td colSpan={5} className="pricing-feature !font-semibold !text-primarytint2color">Functionality :</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">User Management</td>
                                                            <td>Basic User Management</td>
                                                            <td>Comprehensive User Management</td>
                                                            <td className="bg-primary/10 !text-primary">Advanced User Management</td>
                                                            <td>Comprehensive User Management</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Reporting Tools</td>
                                                            <td>Standard Reporting Tools</td>
                                                            <td>-</td>
                                                            <td className="bg-primary/10 !text-primary">Advanced Reporting Tools</td>
                                                            <td>Customized Reporting Solutions</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">API Access</td>
                                                            <td>Limited API Access</td>
                                                            <td>Limited API Access</td>
                                                            <td className="bg-primary/10 !text-primary">Full API Access</td>
                                                            <td>Extended API Access</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="pills-yearly1"  role="tabpanel" aria-labelledby="pills-yearly">
                                    <div className="card shadow-none border-0 reveal">
                                        <div className="box-body p-0">
                                            <div className="table-responsive">
                                                <table className="table table-bordered pricing-table mb-0">
                                                    <thead>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <th scope="row" className="">
                                                                <div className="grow text-start">
                                                                    <div className="mb-0 font-medium text-[1rem]">Plans with tailored features.</div>
                                                                    <span className="opacity-80 text-[11px]">Unlock personalized features within your plans, designed specifically to suit your needs.</span>
                                                                </div>
                                                            </th>
                                                            <th scope="row" className="">
                                                                <div className="mb-0 font-medium text-[1rem]">Basic</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$50<span className="text-[13px] opacity-50 ms-1">/ Annum</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-primary3 grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                            <th scope="row" className="">
                                                                <div className="mb-0 font-medium text-[1rem]">Growth</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$239<span className="text-[13px] opacity-50 ms-1">/ Annum</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-primary3 grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                            <th scope="row" className="relative bg-primary/10 !text-primary">
                                                                <p className="badge badge-lg bg-primarytint1color rounded font-semibold absolute end-0 me-2 mb-0">Popular</p>
                                                                <div className="mb-0 font-medium text-[1rem]">Pro</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$899<span className="text-[13px] opacity-50 ms-1">/ Annum</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-primary grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                            <th scope="row" className="">
                                                                <div className="mb-0 font-medium text-[1rem]">Professional</div>
                                                                <div className="mb-4 text-[1.75rem] font-medium">$799<span className="text-[13px] opacity-50 ms-1">/ Annum</span></div>
                                                                <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-primary3 grid w-full btn-wave waves-effect waves-light">
                                                                    <span className="ms-4 me-4">Sign Up</span>
                                                                </SpkButton>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border !border-defaultborder dark:!border-defaultborder/10">
                                                            <td colSpan={5} className="pricing-feature !font-semibold !text-primarytint2color">Offered Features :</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Storage Space</td>
                                                            <td>15 GB</td>
                                                            <td>30 GB</td>
                                                            <td className="bg-primary/10 !text-primary">Unlimited</td>
                                                            <td>50GB</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Number of Users</td>
                                                            <td>Up to 10</td>
                                                            <td>Up to 10</td>
                                                            <td className="bg-primary/10 !text-primary">Unlimited</td>
                                                            <td>Unlimited</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Customer Support</td>
                                                            <td>Email Support</td>
                                                            <td>Email and Phone Support</td>
                                                            <td className="bg-primary/10 !text-primary">Priority Email, Phone, and On-site Support</td>
                                                            <td>Email and Phone Support</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Advanced Analytics</td>
                                                            <td>Basic Analytics</td>
                                                            <td>Enhanced Analytics</td>
                                                            <td className="bg-primary/10 !text-primary">Custom Analytics Solutions</td>
                                                            <td>Enhanced Analytics</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Integrations</td>
                                                            <td>Limited Integrations</td>
                                                            <td>-</td>
                                                            <td className="bg-primary/10 !text-primary">More Integrations</td>
                                                            <td>More Integrations</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Security Features</td>
                                                            <td>Basic Security Measures	</td>
                                                            <td>Enterprise-level Security Measures</td>
                                                            <td className="bg-primary/10 !text-primary">Advanced Security Features</td>
                                                            <td>Enterprise-level Security Measures</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Customization</td>
                                                            <td>Unlimited Customization Options</td>
                                                            <td>Unlimited Customization Options</td>
                                                            <td className="bg-primary/10 !text-primary">More Customization Options</td>
                                                            <td>Tailored Solutions</td>
                                                        </tr>
                                                        <tr className="border !border-defaultborder dark:!border-defaultborder/10">
                                                            <td colSpan={5} className="pricing-feature !font-semibold !text-primarytint2color">Functionality :</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">User Management</td>
                                                            <td>Basic User Management</td>
                                                            <td>Comprehensive User Management</td>
                                                            <td className="bg-primary/10 !text-primary">Advanced User Management</td>
                                                            <td>Comprehensive User Management</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">Reporting Tools</td>
                                                            <td>Standard Reporting Tools</td>
                                                            <td>-</td>
                                                            <td className="bg-primary/10 !text-primary">Advanced Reporting Tools</td>
                                                            <td>Customized Reporting Solutions</td>
                                                        </tr>
                                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                            <td className="pricing-feature font-semibold">API Access</td>
                                                            <td>Limited API Access</td>
                                                            <td>Limited API Access</td>
                                                            <td className="bg-primary/10 !text-primary">Full API Access</td>
                                                            <td>Extended API Access</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End:: row-2 --> */}
</Fragment>
);
};

export default Pricing;