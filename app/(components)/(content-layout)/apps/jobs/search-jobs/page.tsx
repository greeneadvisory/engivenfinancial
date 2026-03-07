"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import LabeledTwoThumbs1 from "@/shared/data/apps/jobs/searchcandidatedate";
import { Searchjob } from "@/shared/data/apps/jobs/searchjobdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";

interface SearchJobsProps {}

const SearchJobs : FC<SearchJobsProps>  = () => {
const local_varaiable = useSelector((state: any) => state);
return (
<Fragment>
    {/* <!-- Page Header --> */}
        <Seo title="Jobs-Searchjobs" />

        <Pageheader title="Apps" subtitle="Jobs" currentpage="Job Search" activepage="Job Search" />

    {/* <!-- Page Header Close --> */}
    {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                <div className="box products-navigation-card">
                    <div className="box-body p-0">
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Categories</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check !flex mb-2">
                                    <input className="form-check-input" type="checkbox" id="c-1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="c-1">
                                        Research & Developement
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor ms-auto  float-end">2,712</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="c-2"/>
                                    <label className="form-check-label" htmlFor="c-2">
                                        Accounting 
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">536</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="c-3" defaultChecked/>
                                    <label className="form-check-label" htmlFor="c-3">
                                        Business Process
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">18,289</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="c-4" defaultChecked/>
                                    <label className="form-check-label" htmlFor="c-4">
                                        Consulting
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">3,453</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="c-5"/>
                                    <label className="form-check-label" htmlFor="c-5">
                                        Administrative Support
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">7,165</SpkBadge>
                                </div>
                                <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden" id="hs-show-hide-categories-heading"
                                aria-labelledby="hs-show-hide-categories2">
                                <div className="form-check !mb-3 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="c-61"/>
                                    <label className="form-check-label" htmlFor="c-61">
                                        Human Resources
                                    </label>
                                    <SpkBadge
                                       variant="light" customClass="!text-defaulttextcolor dark:text-defaulttextcolor/10 font-medium float-end ms-auto">5,964</SpkBadge>
                                </div>
                                <div className="form-check !mb-3 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="c-71"/>
                                    <label className="form-check-label" htmlFor="c-71">
                                        Marketing
                                    </label>
                                    <SpkBadge
                                       variant="light" customClass="!text-defaulttextcolor dark:text-defaulttextcolor/10 font-medium float-end ms-auto">2,123</SpkBadge>
                                </div>
                            </div>
                            <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle"
                                id="hs-show-hide-categories2"
                                data-hs-collapse="#hs-show-hide-categories-heading"
                                href="#category-more" role="button">MORE</Link>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Job Type</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="j-1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="j-1">
                                        Full Time
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">512</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="j-2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="j-2">
                                        Part Time
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">2,186</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="j-3" defaultChecked/>
                                    <label className="form-check-label" htmlFor="j-3">
                                        Internship
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">734</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="j-4"/>
                                    <label className="form-check-label" htmlFor="j-4">
                                        Freelancer
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">16</SpkBadge>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="j-5"/>
                                    <label className="form-check-label" htmlFor="j-5">
                                        Remote Job
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">1,432</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Qualification</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="q-1"/>
                                    <label className="form-check-label" htmlFor="q-1">
                                        All Education Levels
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">22,457</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="q-2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="q-2">
                                        10th Pass and Above
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">12,562</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="q-3"/>
                                    <label className="form-check-label" htmlFor="q-3">
                                        12th Pass and Above
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">7,155</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="q-4" defaultChecked/>
                                    <label className="form-check-label" htmlFor="q-4">
                                        Diploma and Graduate
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">5,767</SpkBadge>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="q-5"/>
                                    <label className="form-check-label" htmlFor="q-5">
                                        Post Graduate
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">3,651</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Experience</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="e-1" defaultChecked />
                                    <label className="form-check-label" htmlFor="e-1">
                                        Fresher
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">23,156</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="e-2"/>
                                    <label className="form-check-label" htmlFor="e-2">
                                        Less than 1 year
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">15,632</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="e-3" defaultChecked/>
                                    <label className="form-check-label" htmlFor="e-3">
                                        Less than 2 year
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">15,032</SpkBadge>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="e-4" defaultChecked/>
                                    <label className="form-check-label" htmlFor="e-4">
                                        More than 3 years
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">7,154</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Salary Range</h6>
                            <div className="py-3 pb-0">
                                <div id="nonlinear"></div>
                                    <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                            </div>
                        </div>
                        <div className="p-4">
                            <h6 className="font-medium mb-0">Skills</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="s-1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="s-1">
                                        HTML5
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">23,156</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="s-2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="s-2">
                                        Javascript
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">15,632</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="s-3"/>
                                    <label className="form-check-label" htmlFor="s-3">
                                        PHP
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">15,032</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="s-4" defaultChecked/>
                                    <label className="form-check-label" htmlFor="s-4">
                                        CSS3
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end">7,154</SpkBadge>
                                </div>
                            <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                            id="hs-show-hide-categories-heading2" aria-labelledby="hs-show-hide-categories1">
                                <div className="form-check !mb-3 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="c-6"/>
                                    <label className="form-check-label" htmlFor="c-6">
                                        Bootstrap
                                    </label>
                                    <SpkBadge
                                       variant="light" customClass="!text-defaulttextcolor dark:text-defaulttextcolor/10 font-medium float-end ms-auto">5,964</SpkBadge>
                                </div>
                                <div className="form-check !mb-3 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="c-7"/>
                                    <label className="form-check-label" htmlFor="c-7">
                                        Angular
                                    </label>
                                    <SpkBadge
                                       variant="light" customClass="!text-defaulttextcolor dark:text-defaulttextcolor/10 font-medium float-end ms-auto">2,123</SpkBadge>
                                </div>
                                <div className="form-check !mb-3 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="c-72"/>
                                    <label className="form-check-label" htmlFor="c-72">
                                        React
                                    </label>
                                    <SpkBadge
                                       variant="light" customClass="!text-defaulttextcolor dark:text-defaulttextcolor/10 font-medium float-end ms-auto">2,123</SpkBadge>
                                </div>
                            </div>
                            <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle"
                                id="hs-show-hide-categories1"
                                data-hs-collapse="#hs-show-hide-categories-heading2"
                                href="#category-more" role="button">MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                <div className="box p-4">
                    <div className="grid grid-cols-12 gap-x-5 items-center py-4 px-[1.5rem] bg-primary/10 rounded-md mx-0 mb-3">
                        <div className="sm:col-span-7 col-span-12">
                            <div className="flex">
                                <h5 className="font-medium mb-0"><span className="fw-normal">Showing</span> 6678 Jobs</h5>
                            </div>
                        </div>
                        <div className="sm:col-span-5 col-span-12 sm:text-end mt-3 sm:mt-0">
                                <SpkDropdown Toggletext="Sort By" Arrowicon={true} Customclass="btn-group" CustomToggleclass="ti-btn-primary border">
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Featured</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Most Relevant</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Best Rated</Link></li>
                                </SpkDropdown>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 sm:gap-x-6">
                        {Searchjob.map((idx, index) => (
                            <div className="xl:col-span-6 col-span-12" key={index}>
                                <div className="box featured-jobs shadow-none border dark:border-defaultborder/10 border-defaultborder">
                                    <div className="box-body">
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-white ti-btn-icon ti-btn-sm text-textmuted dark:text-textmuted/50 !rounded-full ti-dropdown-toggle hs-dropdown-toggle border border-defaultborder dark:border-defaultborder/10" 
                                                 Icon={true} IconClass="fe fe-more-vertical align-middle" Customclass="float-end ms-auto">
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Add To Favourite</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Save</Link></li>
                                            </SpkDropdown>
                                        <div className="flex mb-3 flex-wrap gap-2 items-center">
                                            <span className="avatar avatar-md border dark:border-defaultborder/10 border-defaultborder p-1">
                                                <img src={idx.imgSrc} alt=""/>
                                            </span>
                                            <div>
                                                <h5 className="font-medium mb-0 flex items-center"><Link scroll={false} href="#!">{idx.title}</Link></h5>
                                                <Link scroll={false} href="#!" className="text-textmuted dark:text-textmuted/50">{idx.company}</Link>
                                            </div>
                                        </div> 
                                        <div className="popular-tags mb-3 flex gap-2 flex-wrap">
                                        <SpkBadge customClass="rounded-full text-[11px] border border-primary/10 text-primary"><i className="ri-map-pin-line me-1"></i> San Francisco</SpkBadge>
                                        <SpkBadge customClass="rounded-full text-[11px] border border-primarytint1color/10 text-primarytint1color"><i className="ri-briefcase-line me-1"></i> 5 Openings</SpkBadge>
                                        <SpkBadge customClass="rounded-full text-[11px] border border-info/10 text-info"><i className="ri-graduation-cap-line me-1"></i> Graduate</SpkBadge>
                                        <SpkBadge customClass="rounded-full text-[11px] border border-primarytint3color/10 text-primarytint3color"><i className="ri-time-line me-1"></i> Min - 1 Year</SpkBadge>
                                        <SpkBadge customClass="rounded-full text-[11px] border border-secondary/10 text-secondary"><i className="ri-sun-line me-1"></i> Full-time</SpkBadge>
                                        </div>
                                        <div className="flex justify-between items-center flex-wrap">
                                            <h6 className="font-medium mb-0">{idx.salary}</h6>
                                            <Link scroll={false} href="#!" className="ti-btn ti-btn-primary ti-btn-sm d-inline-flex">
                                                Apply Now <i className="fe fe-arrow-right transform-arrow ms-2 lh-base"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                          <div className="xl:col-span-12 col-span-12">
                            <div className="box shadow-none bg-primary/10 mb-0">
                                <div className="box-body">
                                    <div className="">
                                        <h5 className="font-medium mb-3">Subscribe to Latest Job Alerts</h5>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control !border-s" placeholder="Enter your email" aria-label="job-email" aria-describedby="job-subscribe"/>
                                            <SpkButton customClass="ti-btn ti-btn-primary !m-0" buttontype="button" Id="job-subscribe">Subscribe</SpkButton>
                                        </div>
                                        <label className="form-check-label">
                                            By subscribing, you accept our <Link scroll={false} href="#!" className="text-success"><u>privacy policy</u></Link>.
                                        </label>
                                    </div>
                                </div>                                        
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="..." className="me-4 mb-4 justify-end flex">
                    <ul className="ti-pagination">
                        <li className="page-item disabled">
                            <Link href="#!" scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem]">Previous</Link>
                        </li>
                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg active px-3 py-[0.375rem]"
                                href="#!">1</Link></li>
                        <li className="page-item " aria-current="page">
                            <Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem]"
                                href="#!">2</Link>
                        </li>
                        <li className="page-item " aria-current="page">
                            <Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem]"
                                href="#!">3</Link>
                        </li>
                        <li className="page-item">
                            <Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem]" href="#!">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    {/* <!-- End::row-1 --> */}
</Fragment>
);
};

export default SearchJobs;