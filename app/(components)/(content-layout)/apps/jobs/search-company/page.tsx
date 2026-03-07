"use client"
import SpkJobcompany from "@/shared/@spk-reusable-components/apps/spk-jobcompany";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Data, jobData } from "@/shared/data/apps/jobs/searchcompanydata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface SearchCompanyProps {}

const SearchCompany : FC<SearchCompanyProps>  = () => {
return (
<Fragment>
    {/* <!-- Page Header --> */}
        <Seo title="Jobs-Searchcompany" />

        <Pageheader title="Apps" subtitle="Jobs" currentpage="Company Search" activepage="Company Search" />

    {/* <!-- Page Header Close --> */}
    {/* <!-- Start:: row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-3 lg:col-span-5 col-span-12">
                <div className="box products-navigation-card">
                    <div className="box-body p-0">
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Industry Type</h6>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="c-1">
                                        Research & Developement
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">2,712</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-2"/>
                                    <label className="form-check-label !ps-0" htmlFor="c-2">
                                        Accounting 
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">536</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="c-3">
                                        Business Process
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">18,289</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-41" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="c-41">
                                        Consulting
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">3,453</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-5"/>
                                    <label className="form-check-label !ps-0" htmlFor="c-5">
                                        Administrative Support
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">7,165</SpkBadge>
                                </div>
                                <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                                        id="hs-show-hide-categories-heading"
                                        aria-labelledby="hs-show-hide-categories2">
                                        <div className="form-check mb-2 !flex items-center">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="c4" defaultChecked/>
                                            <label className="form-check-label !ps-0" htmlFor="c4">
                                                Human Resources
                                            </label>
                                            <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">3,453</SpkBadge>
                                        </div>
                                        <div className="form-check mb-2 !flex items-center">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="c-10"/>
                                            <label className="form-check-label !ps-0" htmlFor="c-10">
                                                Marketing
                                            </label>
                                            <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">7,165</SpkBadge>
                                        </div>
                                    </div>
                                    <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle"
                                        id="hs-show-hide-categories2"
                                        data-hs-collapse="#hs-show-hide-categories-heading"
                                        href="#category-more" role="button">MORE</Link>
                        </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Location</h6>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="available-1">
                                        Hyderabad
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">512</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="available-2"/>
                                    <label className="form-check-label !ps-0" htmlFor="available-2">
                                        Banglore
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">2,186</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="available-3"/>
                                    <label className="form-check-label !ps-0" htmlFor="available-3">
                                        Chennai
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">734</SpkBadge>
                                </div>
                                <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                                id="hs-show-hide-categories-heading1"
                                aria-labelledby="hs-show-hide-categories1">
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="c-4">
                                        Pune
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">3,453</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-11"/>
                                    <label className="form-check-label !ps-0" htmlFor="c-11">
                                        USA
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">7,165</SpkBadge>
                                </div>
                            </div>
                            <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle"
                                id="hs-show-hide-categories1"
                                data-hs-collapse="#hs-show-hide-categories-heading1"
                                href="#category-more" role="button">MORE</Link>
                                
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Recruiter Type</h6>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-1" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="Recruiter-1">
                                        Direct Company
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">13</SpkBadge>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-2"/>
                                    <label className="form-check-label !ps-0" htmlFor="Recruiter-2">
                                        Agency
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">67</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Job Vacancies</h6>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-1" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="vacancies-1">
                                        0 -10
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">13</SpkBadge>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-3"/>
                                    <label className="form-check-label !ps-0" htmlFor="vacancies-3">
                                        20 +above 
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">67</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Type of Employement</h6>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="j-1">
                                        Full Time
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">512</SpkBadge>
                                </div>
                                <div className="form-check mb-2 !flex items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="j-2"/>
                                    <label className="form-check-label !ps-0" htmlFor="j-2">
                                        Part Time
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor  float-end ms-auto">2,186</SpkBadge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-9 lg:col-span-7 col-span-12">
                <div className="grid grid-cols-12 gap-x-6 items-center mb-4">
                    <div className="lg:col-span-12 col-span-12">
                        <div className="input-group companies-search-input">
                            <input type="text" className="form-control form-control-lg !border-s border-defaultborder dark:border-defaultborder/10 flex-auto" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here"/>
                            <input type="text" className="form-control form-control-lg flex-auto crm-search-custom" aria-label="Text input with segmented dropdown button" placeholder="Search by location"/>
                            <SpkSelect classNameprefix="Select2" mainClass='rounded-0 custom-select custom-products' name="form-field-name" option={Data} placeholder="All categories" />
                            <SpkButton variant="" buttontype="button" customClass="ti-btn bg-primary text-white !m-0 sm:!rounded-tl-none sm:!rounded-bl-none !rounded-md custom-btn"><i className="ri-search-line"></i></SpkButton>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex items-center flex-wrap gap-2">
                                    <h5 className="font-medium mb-0 grow">5473 <span className="font-normal text-lg">Companies match for your search</span> </h5>
                                        <SpkDropdown Toggletext="Sort By" Icon={true} IconClass="ti ti-chevron-down"  Customclass   ="btn-group"
                                           CustomToggleclass="ti-btn ti-btn-outline-light border ti-dropdown-toggle hs-dropdown-toggle">
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Premium</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Most Relevant</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Fresher</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Experienced</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Bond Agreement</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Flexible Shift</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day Shift</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    {jobData.map((job) => (
                        <div className="xl:col-span-6 col-span-12" key={job.id}>
                            <SpkJobcompany obj={job} />
                        </div>
                    ))}
                </div>
                <nav aria-label="..." className="me-4 mb-4">
                    <ul className="ti-pagination justify-end">
                        <li className="page-item disabled">
                            <Link scroll={false} href="#!" className="page-link bg-white dark:bg-bodybg px-3 py-[0.375rem]">Previous</Link>
                        </li>
                        <li className="page-item"><Link scroll={false} className="page-link bg-white dark:bg-bodybg active px-3 py-[0.375rem]"
                                href="#!">1</Link></li>
                        <li className="page-item " aria-current="page">
                            <Link scroll={false} className="page-link bg-white dark:bg-bodybg px-3 py-[0.375rem]"
                                href="#!">2</Link>
                        </li>
                        <li className="page-item " aria-current="page">
                            <Link scroll={false} className="page-link bg-white dark:bg-bodybg px-3 py-[0.375rem]"
                                href="#!">3</Link>
                        </li>
                        <li className="page-item">
                            <Link scroll={false} className="page-link bg-white dark:bg-bodybg px-3 py-[0.375rem]" href="#!">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    {/* <!-- End:: row-1 --> */}
                
</Fragment>
);
};

export default SearchCompany;