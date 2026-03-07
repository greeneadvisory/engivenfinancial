"use client"
import Spkcardscomponent from "@/shared/@spk-reusable-components/dashboards/spk-cards";
import SpkActivityCard from "@/shared/@spk-reusable-components/dashboards/spk-ecommerceactivity";
// import SpkActivityCard from "@/shared/@spk-reusable-components/dashboards/spk-recentacticvecard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Acceptoptions, Acceptseries, Activedata, Hiredata, Jobscard, Jobsoptions, Jobsseries, Recentdata, ReJobs } from "@/shared/data/dashboard/jobsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface JobsProps {}

const Jobs : FC<JobsProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-Jobs" />

            <Pageheader title="Dashboards" currentpage="Jobs" activepage="Jobs" />

        {/* <!-- End::page-header --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid xxl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6">
                    {Jobscard.map((idx) => (
                        <div className="col" key={idx.id}>
                                <Spkcardscomponent parentClass="flex-auto" dataClass="mb-1" mainClass="flex gap-4 items-center" headingClass="font-medium mb-2 block"  textbefore={true} textafter={false} card={idx}
                                   badgeClass={`lg svg-${idx.badgeColor} avatar avatar-lg bg-${idx.badgeColor}/10 avatar-rounded border-[3px] flex-shrink-0 border-${idx.badgeColor}/50`} svgIcon={idx.svgIcon} />
                        </div>
                    ))}
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Job Statistics</div>
                                <div className="flex gap-2">
                                    <div className="ti-btn ti-btn-sm ti-btn-outline-light">Today</div>
                                    <div className="ti-btn ti-btn-sm ti-btn-outline-light">Weakly</div>
                                    <div className="ti-btn ti-btn-sm ti-btn-light">Yearly</div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="jobs-statistics">
                                     <Spkapexcharts chartOptions={Jobsoptions} chartSeries={Jobsseries} type="bar" width={"100%"} height={325} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="mb-4 flex items-center justify-between">
                            <h6 className="mb-0">Need To Hire:</h6>
                            <div>
                                <SpkButton buttontype="button" Size="sm" variant="soft-primary" customClass="ti-btn">View All</SpkButton>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <ul className="mb-0 list-none hire-list">
                                    {Hiredata.map((idx) => (
                                        <li key={idx.id} className={idx.class}>
                                            <div className="flex items-center">
                                                <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                    <span className={`avatar avatar-lg bg-${idx.color}/10 !text-${idx.color}`}>{idx.data}</span>
                                                </Link>
                                                <div className="flex-auto truncate">
                                                    <Link scroll={false} href="#!" className="font-medium text-[14px] w-75 truncate block">  {idx.data1}</Link>
                                                    <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs w-75 truncate">Status: 
                                                     <span className={`text-${idx.color1}`}>{idx.data2}</span></p>
                                                </div>
                                                <div className=" text-end ms-auto">
                                                    <div className="text-textmuted dark:text-textmuted/50 opacity-70 text-xs">Candidates</div>
                                                    <div className="font-medium">{idx.candidate}</div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title w-95 truncate">
                                    Candidates By Gender
                                </div>
                            </div>
                            <div className="box-body m-3 pb-4 px-0 bg-light rounded-sm">
                                <div id="job-acceptance"><Spkapexcharts chartOptions={Acceptoptions} chartSeries={Acceptseries} type="donut" width={"100%"} height={200} /></div>
                            </div>
                            <div className="box-footer">    
                                <div className="grid grid-cols-12 gap-y-4">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-end gap-4 flex-wrap justify-between">
                                            <div>
                                                <h5 className="mb-0">15,754</h5>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs op-8">Male Candidates</span>
                                            </div>
                                            <div className="text-textmuted dark:text-textmuted/50 text-[13px]">
                                                <span className="text-success"><i className="ri-arrow-up-s-fill"></i>1.6%<i className="ri-bar-chart-fill ms-2 text-textmuted dark:text-textmuted/50"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-end gap-4 flex-wrap justify-between">
                                            <div>
                                                <h5 className="mb-0">4,872</h5>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs op-8">Female Candidates</span>
                                            </div>
                                            <div className="text-textmuted dark:text-textmuted/50 text-[13px]">
                                                <span className="text-danger"><i className="ri-arrow-down-s-fill"></i>1.3%<i className="ri-bar-chart-fill ms-2 text-textmuted dark:text-textmuted/50"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-end gap-4 flex-wrap justify-between">
                                            <div>
                                                <h5 className="mb-0">2.5k</h5>
                                                <span className="text-textmuted dark:text-textmuted/50 text-[11px] opacity-70">Total Candidates</span>
                                            </div>
                                            <div className="text-textmuted dark:text-textmuted/50 text-[13px]">
                                                <span className="text-success"><i className="ri-arrow-up-s-fill"></i>0.6%<i className="ri-bar-chart-fill ms-2 text-textmuted dark:text-textmuted/50"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-2 --> */}

                {/* <!-- Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 md:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    New Applicants
                                </div>
                                    <SpkDropdown CustomToggleclass="ti-btn-outline-light border ti-btn-full ti-btn-sm" Toggletext="View All" 
                                       Icon={true} IconClass="ti ti-chevron-down">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <ul className="mb-0 list-none">
                                    <li className="mb-[1.5rem]">
                                        <div className="flex items-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                <span className="avatar avatar-md bg-primary/10 text-primary">
                                                    <img src="../../assets/images/faces/1.jpg" alt=""/>
                                                </span>
                                            </Link>
                                            <div className="grow">
                                                <Link scroll={false} href="#!" className="text-[13px] font-medium"> Mona Cruzis</Link>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 font-normal text-xs"><span className="font-medium">React Developer</span></p>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info me-2">
                                                        <i className="ti ti-phone align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Call
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1">
                                                        <i className="ti ti-at align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Mail
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-[1.5rem]">
                                        <div className="flex items-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                <span className="avatar avatar-md bg-primary/10 text-primary">
                                                    <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                </span>
                                            </Link>
                                            <div className="grow">
                                                <Link scroll={false} href="#!" className="text-[13px] font-medium"> Soyab Khan</Link>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 font-normal text-xs"><span className="font-medium">Java Developer</span></p>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info me-2">
                                                        <i className="ti ti-phone align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Call
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1">
                                                        <i className="ti ti-at align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Mail
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-[1.5rem]">
                                        <div className="flex items-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                <span className="avatar avatar-md bg-primarytint2color text-white">
                                                    KM
                                                </span>
                                            </Link>
                                            <div className="grow">
                                                <Link scroll={false} href="#!" className="text-[13px] font-medium"> Katherine Myn </Link>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 font-normal text-xs"><span className="font-medium">UI Developer</span></p>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info me-2">
                                                        <i className="ti ti-phone align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Call
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1">
                                                        <i className="ti ti-at align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Mail
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-[1.5rem]">
                                        <div className="flex items-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                <span className="avatar avatar-md bg-primary/10 text-primary">
                                                    <img src="../../assets/images/faces/13.jpg" alt=""/>
                                                </span>
                                            </Link>
                                            <div className="grow">
                                                <Link scroll={false} href="#!" className="text-[13px] font-medium"> James Roy</Link>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 font-normal text-xs"><span className="font-medium">React Developer</span></p>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info me-2">
                                                        <i className="ti ti-phone align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Call
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1">
                                                        <i className="ti ti-at align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Mail
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-[1.5rem]">
                                        <div className="flex items-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                <span className="avatar avatar-md bg-primary/10 text-primary">
                                                    <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                </span>
                                            </Link>
                                            <div className="grow">
                                                <Link scroll={false} href="#!" className="text-[13px] font-medium"> Cayathe Dore </Link>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 font-normal text-xs"><span className="font-medium">Vue.js Developer</span></p>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info me-2">
                                                        <i className="ti ti-phone align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Call
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1">
                                                        <i className="ti ti-at align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Mail
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-1">
                                        <div className="flex items-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="me-2">
                                                <span className="avatar avatar-md bg-primarytint3color text-white">
                                                    SP
                                                </span>
                                            </Link>
                                            <div className="grow">
                                                <Link scroll={false} href="#!" className="text-[13px] font-medium"> Surjith Pandey</Link>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 font-normal text-xs"><span className="font-medium">UX Developer</span></p>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info me-2">
                                                        <i className="ti ti-phone align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Call
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1">
                                                        <i className="ti ti-at align-middle"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                         Mail
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 md:col-span-12 col-span-12">
                        <div className="mb-3 flex items-center justify-between">
                            <h6 className="mb-0">Recent Jobs:</h6>
                            <div>
                                <SpkButton buttontype="button" variant="soft-primary" Size="sm" customClass="ti-btn">View All</SpkButton>
                            </div>
                        </div>
                        <div className="box overflow-hidden">
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head recent-job" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Job Title' }, { title: 'Applicants' }, { title: 'Openings End' }, { title: 'Location' }, { title: 'Action' }]}>
                                    {ReJobs.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-3">
                                                        <span className={`avatar avatar-sm bg-${idx.color}/10 !text-${idx.color}`}>
                                                            <i className={`ri-${idx.icon} text-xl`}></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 font-medium">{idx.title}</p>
                                                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-[11px]">posted: {idx.post}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0">{idx.applicant} Applicants</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 font-medium">{idx.open}</p>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-xs text-textmuted dark:text-textmuted/50"><i className="ri-map-pin-fill text-xs me-1"></i>{idx.location}</p>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary me-2"><i className="ti ti-edit"></i></Link>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary1"><i className="ti ti-trash"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 md:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Activity Feed
                                </div>
                                    <SpkDropdown CustomToggleclass="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle" 
                                        Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1" >
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <ul className="ti-list-group list-group-flush list-none !border-0 activity-feed">
                                    {Activedata.map((idx) => (
                                        <li className={`flex gap-2 items-start ${idx.liclass}`} key={idx.Id}>
                                            <div className={`avatar avatar-sm bg-${idx.Iconclass}/10 !text-${idx.Iconclass} flex-shrink-0 avatar-rounded border border-${idx.Iconclass}/10`}>
                                                <i className={idx.Icon}></i>
                                            </div>
                                            <div className="truncate">
                                                <span className="font-medium">{idx.Title}</span>
                                                {idx.Desc}
                                            </div>
                                            <span className="text-textmuted dark:text-textmuted/50 ms-auto text-xs flex-shrink-0">{idx.Duration}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-3 --> */}

                {/* <!-- Start::row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Applicants
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="">
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linkclass="ti-btn bg-primary !mb-0 !m-0 text-white ti-btn-sm" Linktag={true}
                                           Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto">
                                    <div className="ti-custom-table text-nowrap ti-custom-table-hover">
                                        <Spktables tableClass="table text-nowrap table-hover border table-bordered"  tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                        header={[{ title: 'S.No' }, { title: 'Candidate' }, { title: 'Category' }, { title: 'Designation' }, { title: 'Mail' }, { title: 'Location' }, { title: 'Date' }, { title: 'Type' }, { title: 'Action' }]}>
                                            {Recentdata.map((idx) => (
                                                <tr key={idx.id} className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row">0{idx.id}</th>
                                                    <td>
                                                        <div className="flex items-center font-medium">
                                                            <span className="avatar avatar-sm me-2 avatar-rounded">
                                                                <img src={idx.src} alt="img" />
                                                            </span>{idx.candidate}
                                                        </div>
                                                    </td>
                                                    <td>{idx.category}</td>
                                                    <td><span className={`text-${idx.color1}`}>{idx.designation}</span></td>
                                                    <td>{idx.mail}</td>
                                                    <td>
                                                        <div className="d-inline-flex items-center">
                                                            <i className="ri-map-pin-line text-textmuted dark:text-textmuted/50"></i>
                                                            <span className="ms-1">{idx.location}</span>
                                                        </div>
                                                    </td>
                                                    <td>{idx.date}</td>
                                                    <td><SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.type}</SpkBadge></td>
                                                    <td>
                                                        <div className="hstack gap-2 text-[15px]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-success"><i className="ri-download-2-line"></i></Link>
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary"><i className="ri-edit-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </Spktables>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="ti-pagination mb-0 flex-wrap">
                                                <li className="page-item disabled">
                                                    <Link scroll={false} className="page-link" href="#!">
                                                        Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item "><Link scroll={false} className="page-link active"
                                                        href="#!">1</Link></li>
                                                <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                                
                                                <li className="page-item">
                                                    <Link scroll={false} className="page-link !text-primary" href="#!">
                                                        next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-4 --> */}
</Fragment>
);
};

export default Jobs;