"use client"
import SpkAccordions from "@/shared/@spk-reusable-components/advanced-ui/spk-accordions";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Generaldata, Securitydata, Themedata, Troubledata, Userdata } from "@/shared/data/pages/faqsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface FaqsProps {}

const Faqs : FC<FaqsProps>  = () => {
return (
<Fragment>
    {/* { <!-- Page Header -->  */}
      <Seo title="Pages-Faq's" />

      <Pageheader title="Pages" currentpage="Faq's" activepage="Faq's" />

    {/* { <!-- Page Header Close --> */} 
    {/* { <!-- Start:: row-2 --> */} 
      <div className="grid grid-cols-12 gap-x-6 justify-center">
          <div className="xl:col-span-1 col-span-12"></div>
          <div className="xl:col-span-10 col-span-12">
              <div className="box">
                  <div className="box-body !p-0">
                      <div className="grid grid-cols-12 gap-x-6 justify-center border-b border-dashed mb-4 border-defaultborder dark:border-defaultborder/10">
                          <div className="xl:col-span-2 col-span-12"></div>
                          <div className="xl:col-span-8 col-span-12">
                              <div className="py-2">
                                  <div className="text-center">
                                      <h3 className="text-primarytint1color mb-3">FAQs</h3>
                                      <h5 className="block">Require assistance? Here are some of our commonly asked questions!</h5>
                                      <p className="text-textmuted dark:text-textmuted/50 mb-2 px-4">Discover answers to common queries and find solutions to your concerns with our comprehensive list of frequently asked questions.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="xl:col-span-2 col-span-12"></div>
                      </div>
                      <nav aria-label="Tabs" className="nav nav-tabs nav-tabs-header mb-4 flex justify-center faq-nav gap-2 flex-wrap" role="tablist">
                          <Link scroll={false} href="#!" className="m-1 text-wrap hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer bg-light text-defaulttextcolor dark:text-defaulttextcolor/80 py-2 px-3  text-[0.8rem] font-medium rounded-sm hover:text-primary active"
                            id="tab-1" role="tab" data-hs-tab="#tab1" >
                            <i className="ti ti-settings me-1 d-inline-block"></i> General Settings
                          </Link>
                          <Link scroll={false} href="#!" className="m-1 text-wrap hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer bg-light text-defaulttextcolor dark:text-defaulttextcolor/80 py-2 px-3 text-[0.8rem] font-medium rounded-sm hover:text-primary "
                            id="tab-2" data-hs-tab="#tab2">
                            <i className="ti ti-palette me-1 d-inline-block"></i> Theme Customization
                          </Link>
                          <Link scroll={false} href="#!" className="m-1 text-wrap hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer bg-light text-defaulttextcolor dark:text-defaulttextcolor/80 py-2 px-3 text-[0.8rem] font-medium rounded-sm hover:text-primary "
                            id="tab-3" data-hs-tab="#tab3">
                            <i className="ti ti-user-cog me-1 d-inline-block"></i> User Management
                          </Link>
                          <Link scroll={false} href="#!" className="m-1 text-wrap hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer bg-light text-defaulttextcolor dark:text-defaulttextcolor/80 py-2 px-3 text-[0.8rem] font-medium rounded-sm hover:text-primary "
                            id="tab-4" data-hs-tab="#tab4">
                            <i className="ti ti-shield-lock me-1 d-inline-block"></i> Security and Authentication
                          </Link>
                          <Link scroll={false} href="#!" className="m-1 text-wrap hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer bg-light text-defaulttextcolor dark:text-defaulttextcolor/80 py-2 px-3 text-[0.8rem] font-medium rounded-sm hover:text-primary "
                            id="tab-6" data-hs-tab="#tab6">
                            <i className="ti ti-headset me-1 d-inline-block"></i> Troubleshooting and Support
                          </Link>
                        </nav>
                      <div className="tab-content mb-3 p-4 !pt-0">
                          <div className="tab-pane show active border-0 p-0" id="tab1" aria-labelledby="tab-1" role="tabpanel">
                              <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                id="accordionFAQ1">
                                   <SpkAccordions  items={Generaldata} key={1}  Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border  hs-accordion-active:border-transparent dark:border-defaultborder/10 hs-accordion-active:bg-primary/10   dark:hs-accordion-active:border  justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                              </div>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="tab2" aria-labelledby="tab-2" role="tabpanel">
                              <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                id="accordionFAQ2">
                                <SpkAccordions items={Themedata} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border  hs-accordion-active:border-transparent dark:border-defaultborder/10 hs-accordion-active:bg-primary/10   dark:hs-accordion-active:border  justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                              </div>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="tab3" aria-labelledby="tab-3" role="tabpanel">
                              <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                id="accordionFAQ3">
                                    <SpkAccordions items={Userdata} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border  hs-accordion-active:border-transparent dark:border-defaultborder/10 hs-accordion-active:bg-primary/10   dark:hs-accordion-active:border  justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                              </div>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="tab4" aria-labelledby="tab-4" role="tabpanel">
                              <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                id="accordionFAQ4">
                                    <SpkAccordions items={Securitydata} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border  hs-accordion-active:border-transparent dark:border-defaultborder/10 hs-accordion-active:bg-primary/10   dark:hs-accordion-active:border  justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                              </div>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="tab6" aria-labelledby="tab-6" role="tabpanel">
                              <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                 id="accordionFAQ6">
                                    <SpkAccordions items={Troubledata} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:border  hs-accordion-active:border-transparent dark:border-defaultborder/10 hs-accordion-active:bg-primary/10   dark:hs-accordion-active:border  justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                              </div>
                            </div>
                      </div>
                      <div className="grid grid-cols-12 sm:gap-x-6 bg-light m-4 mt-0 justify-between items-center rounded-md">
                          <div className="sm:col-span-3 col-span-12 md:block hidden px-0">
                              <img src="../../assets/images/media/media-65.png" alt="" className="img-fluid ps-3"/>
                          </div>
                          <div className="md:col-span-1 col-span-12"></div>
                          <div className="md:col-span-8 col-span-12 px-0">
                              <div className="p-4">
                                  <div>
                                      <h5 className="font-semibold mb-2">Still Have Questions? We're Here to Help!</h5>
                                      <span className="block text-xs text-textmuted dark:text-textmuted/50">
                                          Contact our support team for personalized assistance. Your satisfaction is our priority!
                                          Write your question below and we'll get back to you shortly.
                                      </span>
                                      <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4 mt-3"> 
                                          <div className="xl:col-span-6 col-span-12"> 
                                              <label htmlFor="user-name" className="form-label">Your Name</label> 
                                              <input type="text" className="form-control" id="user-name" placeholder="Enter Your Name"/> 
                                          </div> 
                                          <div className="xl:col-span-6 col-span-12"> 
                                              <label htmlFor="user-email" className="form-label">Email Id</label> 
                                              <input type="text" className="form-control" id="user-email" placeholder="Enter Email"/> 
                                          </div> 
                                          <div className="xl:col-span-12 col-span-12"> 
                                              <label htmlFor="text-area" className="form-label">Textarea</label>
                                              <textarea className="form-control" placeholder="Enter your query here" id="text-area" rows={10}></textarea>
                                          </div>
                                          <div className="xl:col-span-12 col-span-12">
                                              <SpkButton variant="primary" customClass="ti-btn btn-wave waves-effect waves-light" buttontype="button" Id="send">Send your question</SpkButton>
                                          </div> 
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="xl:col-span-1 col-span-12"></div>
      </div>
    {/* { <!-- End:: row-2 --> */}
</Fragment>
);
};

export default Faqs;