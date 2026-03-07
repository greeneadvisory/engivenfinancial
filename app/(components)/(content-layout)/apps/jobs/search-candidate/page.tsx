"use client"
import SpkSearchcandidate from "@/shared/@spk-reusable-components/apps/spk-searchcandidate";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import LabeledTwoThumbs1, { Data, Data2, Searchcandidate } from "@/shared/data/apps/jobs/searchcandidatedate";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";

interface SearchCandidateProps {}

const SearchCandidate : FC<SearchCandidateProps>  = () => {
const local_varaiable = useSelector((state: any) => state);
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Jobs-Searchcandidate" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Search Candidate" activepage="Search Candidate" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                <div className="box products-navigation-card">
                    <div className="box-body p-0">
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Categories</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="c-1"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="c-1">
                                        Software Development
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">3,200</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="c-2"/>
                                    <label className="form-check-label" htmlFor="c-2">
                                        Finance
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">780</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="c-3"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="c-3">
                                        Marketing
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">15,500</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="c-14"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="c-4">
                                        Customer Service
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">2,950</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="c-12"/>
                                    <label className="form-check-label" htmlFor="c-5">
                                        Operations
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">6,800</SpkBadge>
                                </div>
                                <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                                    id="hs-show-hide-categories-heading1"
                                    aria-labelledby="hs-show-hide-categories1">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" id="c4"
                                            defaultChecked/>
                                        <label className="form-check-label" htmlFor="c-4">
                                            Human Resources
                                        </label>
                                        <SpkBadge variant="light"
                                            customClass="text-defaulttextcolor  float-end">3,453</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" id="c5"/>
                                        <label className="form-check-label" htmlFor="c-5">
                                            Business Development
                                        </label>
                                        <SpkBadge variant="light"
                                            customClass="text-defaulttextcolor  float-end">7,165</SpkBadge>
                                    </div>
                                </div>
                                <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle" id="hs-show-hide-categories1"
                                    data-hs-collapse="#hs-show-hide-categories-heading1" href="#category-more"
                                    role="button">MORE</Link>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Availability</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="available-1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="available-1">
                                        Available Now
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">620</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="available-2"/>
                                    <label className="form-check-label" htmlFor="available-2">
                                        30 Days Notice
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">1,850</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Bond Agreement</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="bond-1"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="bond-1">
                                        1 Year
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">760</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="bond-2"/>
                                    <label className="form-check-label" htmlFor="bond-2">
                                        2 yrs
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">480</SpkBadge>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="bond-3"/>
                                    <label className="form-check-label" htmlFor="bond-3">
                                        3 yrs
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">240</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Languages</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="languages-1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="languages-1">
                                        English
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">1,250</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox"
                                        id="languages-2"/>
                                    <label className="form-check-label" htmlFor="languages-2">
                                        Hindi
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">350</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Job Type</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="j-1"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="j-1">
                                        Full Time
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">1,920</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="j-2"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="j-2">
                                        Part Time
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">3,100</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="j-3"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="j-3">
                                        Internship
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">860</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="j-4"/>
                                    <label className="form-check-label" htmlFor="j-4">
                                        Freelancer
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">75</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Salary Range</h6>
                            <div className="py-3 pb-0">
                                <div id="nonlinear"></div>
                                <div id="">
                                    <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b dark:border-defaultborder/10">
                            <h6 className="font-medium mb-0">Qualification</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="q-1"/>
                                    <label className="form-check-label" htmlFor="q-1">
                                        All Education Levels
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">22,457</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="q-2"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="q-2">
                                        10th Pass and Above
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">12,562</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="q-4"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="q-4">
                                        Diploma and Graduate
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">5,767</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h6 className="font-medium mb-0">Skills</h6>
                            <div className="py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" id="s-1"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="s-1">
                                        HTML5
                                    </label>
                                    <SpkBadge variant="light"
                                        customClass="text-defaulttextcolor fw-500 float-end">23,156</SpkBadge>
                                </div>
                                <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                                    id="hs-show-hide-categories-heading2"
                                    aria-labelledby="hs-show-hide-categories3">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" id="c-4"
                                            defaultChecked/>
                                        <label className="form-check-label" htmlFor="c-4">
                                            CSS3
                                        </label>
                                        <SpkBadge variant="light"
                                            customClass="text-defaulttextcolor  float-end">3,453</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" id="c-5"/>
                                        <label className="form-check-label" htmlFor="c-5">
                                            Bootstrap
                                        </label>
                                        <SpkBadge variant="light"
                                            customClass="text-defaulttextcolor  float-end">7,165</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" id="c-10"/>
                                        <label className="form-check-label" htmlFor="c-5">
                                            Angular
                                        </label>
                                        <SpkBadge variant="light"
                                            customClass="text-defaulttextcolor  float-end">7,165</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" id="c-11"/>
                                        <label className="form-check-label" htmlFor="c-5">
                                            React
                                        </label>
                                        <SpkBadge variant="light"
                                            customClass="text-defaulttextcolor  float-end">7,165</SpkBadge>
                                    </div>
                                </div>
                                <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle" id="hs-show-hide-categories3"
                                    data-hs-collapse="#hs-show-hide-categories-heading2" href="#category-more"
                                    role="button">MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                <div className="grid grid-cols-12 gap-x-6 items-center">
                    <div className="lg:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body md:!p-0">
                                <div
                                    className="input-group companies-search-input companies-search-input1 flex-lg-nowrap custom-products">
                                    <input type="text"
                                        className="form-control form-control-lg !w-[25%] custom-width-form !border-e-0 !border-s"
                                        aria-label="Text input with segmented dropdown button"
                                        placeholder="Enter your keyword here"/>
                                     <SpkSelect name="state" option={Data} mainClass="basic-multi-select" searchable
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data[0]]}
                                        />
                                    <input type="text" className="form-control form-control-lg !w-[25%] custom-width-form !border-e-0"
                                        aria-label="Text input with segmented dropdown button"
                                        placeholder="Search by location"/>
                                        <SpkSelect name="state" option={Data2} mainClass="basic-multi-select custom-select-searchcompany" searchable
                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                            />
                                    <SpkButton buttontype="button" variant="primary" customClass="ti-btn btn-lg !m-0"><i className="ri-search-line"></i></SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex flex-wrap gap-2 items-center">
                                    <h5 className="font-medium mb-0 grow">2468 <span
                                            className="font-normal text-lg">Candidates match your job search</span>
                                    </h5>
                                        <SpkDropdown Customclass="btn-group" CustomToggleclass="ti-btn ti-btn-outline-light border ti-dropdown-toggle hs-dropdown-toggle" Toggletext="Sort By"
                                          Icon={true} IconClass="ti ti-chevron-down">
                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                    href="#!">Premium</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                    href="#!">Newest</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Most
                                                    Relevant</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                    href="#!">Fresher</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                    href="#!">Experienced</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Bond
                                                    Agreement</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Flexible
                                                    Shift</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day
                                                    Shift</Link></li>
                                        </SpkDropdown>
                                </div>  
                            </div>
                        </div>
                    </div>
                    {Searchcandidate.map((candidateSearch) => (
                        <div className="xl:col-span-6 col-span-12" key={candidateSearch.id}>
                            <SpkSearchcandidate object={candidateSearch} badge2={candidateSearch.badge2} />
                        </div>
                    ))}
                </div>
                <nav aria-label="..." className="me-4 mb-6 flex justify-end">
                    <ul className="ti-pagination">
                        <li className="page-item disabled">
                            <Link scroll={false} href="#!" className="page-link bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0">Previous</Link>
                        </li>
                        <li className="page-item"><a className="page-link bg-white dark:!bg-bodybg active px-3 py-[0.375rem] !border-e-0"
                                href="#!">1</a></li>
                        <li className="page-item " aria-current="page">
                            <Link scroll={false} className="page-link bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0" href="#!">2</Link>
                        </li>
                        <li className="page-item " aria-current="page">
                            <Link scroll={false} className="page-link bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0" href="#!">3</Link>
                        </li>
                        <li className="page-item">
                            <Link scroll={false} className="page-link bg-white dark:!bg-bodybg px-3 py-[0.375rem]"
                                href="#!">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default SearchCandidate;