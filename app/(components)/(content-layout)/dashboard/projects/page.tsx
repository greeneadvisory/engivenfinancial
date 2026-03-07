"use client"
import SpkProjectscardcomponent from "@/shared/@spk-reusable-components/dashboards/spk-projectscard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Projectdata, projects, Runningavatar, Staticoptions, Staticseries, statusColors, Targetoptions, Targetseries, Tasksoptions, Tasksseries, Teamdata } from "@/shared/data/dashboard/projectsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface ProjectsProps {}

const Projects : FC<ProjectsProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-projects" />

            <Pageheader title="Dashboards" currentpage="Projects" activepage="Projects" />

        {/* <!-- End::page-header --> */}
        {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box main-dashboard-banner project-dashboard-banner overflow-hidden">
                            <div className="box-body p-[1.5rem]">
                                <div className="grid grid-cols-12 gap-x-6 justify-between">
                                    <div className="xxl:col-span-8 xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-5 col-span-12">
                                        <h4 className="mb-1 font-medium text-white">Manage Projects</h4>
                                        <p className="mb-3 text-white opacity-70">Manage projects effortlessly with our one-click solution, streamlining your workflow.</p>
                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-primarytint1color text-white">Manage Now<i className="ti ti-arrow-narrow-right"></i></Link>
                                    </div>
                                    <div className="xxl:col-span-4 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-12 sm:block hidden text-end my-auto">
                                        <img src="../../assets/images/media/media-85.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Team 
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-light">View All</Link>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tBodyClass="top-selling" tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                   header={[{ title: 'Name' }, { title: 'Works' }, { title: 'Status' }, { title: 'Tasks' }, { title: 'Actions' }]} >
                                    {Teamdata.map((idx) => (
                                        <tr key={idx.id}  className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={idx.src} className="" alt="" />
                                                    </span>
                                                    <div className="flex-1 ms-2">
                                                        <span className="block font-semibold">{idx.name}</span>
                                                        <Link scroll={false} href="#!" className="text-textmuted dark:text-textmuted/50 text-xs2">{idx.data}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-medium">{idx.work}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`leading-none text-${idx.color}`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <span className="">{idx.task} <span className="text-textmuted dark:text-textmuted/50">{idx.task1}</span></span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                            <SpkOverlay customClass="[--placement:top]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full !me-1 ti-btn-soft-primary !my-0">
                                                                <i className="ti ti-user-plus align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                Assign
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="[--placement:top]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full !me-1 ti-btn-soft-info !my-0">
                                                                <i className="ti ti-at align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                Mail
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="[--placement:top]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary2 !m-0">
                                                                <i className="ti ti-eye align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                View
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-7 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {Projectdata.map((idx) => (
                                <div className="xxl:col-span-3 md:col-span-6 col-span-12" key={idx.id}>
                                     <SpkProjectscardcomponent project={idx} cardClass="overflow-hidden" width={70} height={40} />
                                </div>
                            ))}
                        </div>
                        <div className="box">
                            <div className="box-header justify-between">    
                                <div className="box-title">Project Statistics</div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm bg-light" Toggletext="Last Week" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Month</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Year</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <div className="flex gap-5 items-center p-4 justify-around bg-light mx-2 flex-wrap flex-xl-nowrap rounded-md">
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <div className="avatar avatar-lg flex-shrink-0 bg-primary/10 avatar-rounded svg-primary shadow-sm border border-primary border-opacity-25">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path></svg>
                                        </div>
                                        <div>
                                            <span className="mb-1 block">Total Revenue</span> 
                                            <div className="flex align-items-end gap-2">
                                                <h4 className="mb-0">$475,896</h4> 
                                                <div className="text-[13px]"> 
                                                    <span className="opacity-70"> Increased By </span>  
                                                    <SpkBadge variant="success" customClass="leading-none align-middle opacity-90">5.6%<i className="ti ti-trending-up"></i></SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <div className="avatar avatar-lg flex-shrink-0 bg-primarytint1color/10 avatar-rounded svg-primarytint1color shadow-sm border border-primarytint1color border-opacity-25">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>
                                        </div>
                                        <div>
                                            <span className="mb-1 block">Total Projects</span> 
                                            <div className="flex align-items-end gap-2">
                                                <h4 className="mb-0">75,896</h4> 
                                                <div className="text-[13px]"> 
                                                    <span className="opacity-70"> Decreased By </span>  
                                                    <SpkBadge variant="danger" customClass="leading-none align-middle opacity-90">1.6%<i className="ti ti-trending-down"></i></SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="project-statistics">
                                     <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="area" width={"100%"} height={365} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Running Projects List
                                </div>
                                <SpkButton variant="primary/10" buttontype="button" Size="sm" customClass="ti-btn text-primary">View All</SpkButton>
                            </div>
                            <div className="p-4 3">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="grow">
                                      <div className="flex items-center gap-1">
                                        <p className="font-medium mb-1 text-[14px]">Web application design
                                        </p>
                                        <SpkOverlay>
                                            <Link scroll={false} href="#!" className="text-info">
                                                <i className="ri-information-2-line text-[13px] opacity-70 leading-none align-middle mb-1"></i>
                                                <span
                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                    role="tooltip">
                                                    Get Info
                                                </span>
                                            </Link>
                                        </SpkOverlay>
                                      </div>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-1 font-normal text-xs">At vero eos et accusamus et iusto odio.</p>
                                        <div>Status: <span className="text-success font-normal text-xs">75% completed</span></div>
                                    </div>
                                    <div className="flex-shrink-0 text-end ms-auto">
                                        <p className="mb-3 text-[11px] text-textmuted dark:text-textmuted/50"><i className="ri-time-line  text-textmuted dark:text-textmuted/50 text-[11px] align-middle leading-none me-1 inline-block"></i>2mins ago</p>
                                        <div className="avatar-list-stacked">
                                            {Runningavatar.map((idx) => (
                                                <span className="avatar avatar-sm avatar-rounded" key={idx.id}>
                                                    <img src={idx.src} alt="img"/>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="progress progress-lg !rounded-full p-1 ms-auto bg-primary/10" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated !rounded-full" style={{width: "90%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 3">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="grow">
                                        <div className="flex items-center gap-1">
                                            <p className="font-medium mb-1 text-[14px]">Designing New Template
                                            </p>
                                            <SpkOverlay>
                                                <Link scroll={false} href="#!" className="text-info">
                                                    <i className="ri-information-2-line text-[13px] opacity-70 leading-none align-middle mb-1"></i>
                                                    <span
                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                        role="tooltip">
                                                        Get Info
                                                    </span>
                                                </Link>
                                            </SpkOverlay>
                                          </div>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-1 font-normal text-xs">At vero eos et accusamus et iusto odio.</p>
                                        <div>Status: <span className="text-warning font-medium text-xs">45% completed</span></div>
                                    </div>
                                    <div className="flex-shrink-0 text-end ms-auto">
                                        <p className="mb-3 text-[11px] text-textmuted dark:text-textmuted/50"><i className="ri-time-line  text-textmuted dark:text-textmuted/50 text-[11px] align-middle leading-none me-1 inline-block"></i>15mins ago</p>
                                        <div className="avatar-list-stacked">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../assets/images/faces/11.jpg" alt="img"/>
                                            </span>
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                            </span>
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="progress progress-lg !rounded-full p-1 ms-auto flex-auto bg-primarytint1color/10" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-primarytint1color progress-bar-striped progress-bar-animated !rounded-full" style={{width: "45%"}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="grow">
                                        <div className="flex items-center gap-1">
                                            <p className="font-medium mb-1 text-[14px]">Web application design
                                            </p>
                                            <SpkOverlay>
                                                <Link scroll={false} href="#!" className="text-info">
                                                    <i className="ri-information-2-line text-[13px] opacity-70 leading-none align-middle mb-1"></i>
                                                    <span
                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                        role="tooltip">
                                                        Get Info
                                                    </span>
                                                </Link>
                                            </SpkOverlay>
                                          </div>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-1 text-xs">At vero eos et accusamus et iusto odio.</p>
                                        <div>Status: <span className="text-success font-medium text-xs">65% completed</span></div>
                                    </div>
                                    <div className="flex-shrink-0 text-end ms-auto">
                                        <p className="mb-3 text-[11px] text-textmuted dark:text-textmuted/50"><i className="ri-time-line  text-textmuted dark:text-textmuted/50 text-[11px] align-middle leading-none me-1 inline-block"></i>20mins ago</p>
                                        <div className="avatar-list-stacked">
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/3.jpg" alt="img"/>
                                                </span>
                                                <Link scroll={false} className="avatar avatar-sm bg-primary border-2  avatar-rounded text-white" href="#!"> 2+ </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="progress progress-lg !rounded-full p-1 ms-auto flex-auto bg-primarytint2color/10" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-primarytint2color progress-bar-striped progress-bar-animated !rounded-full" style={{width: "65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 lg:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Monthly Targets</div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-light">View All</Link>
                            </div>
                            <div className="box-body">
                                <div id="monthly-target">
                                     <Spkapexcharts chartOptions={Targetoptions} chartSeries={Targetseries} type="radialBar" width={"100%"} height={265} />
                                </div>
                                <div className="flex gap-4 items-center justify-between text-center p-4 bg-light rounded-md">
                                    <div>
                                        <span className="mb-1 block"><i className="ri-circle-fill text-[8px] align-middle leading-none text-primary"></i> New Projects</span> 
                                        <h6 className="mb-1">4,896</h6> 
                                        <span className="text-success font-medium"><i className="ri-arrow-up-s-fill"></i> 3.5%</span>
                                    </div>
                                    <div>
                                        <span className="mb-1 block"><i className="ri-circle-fill text-[8px] align-middle leading-none text-primarytint1color"></i> Completed</span> 
                                        <h6 className="mb-1">2,475</h6> 
                                        <span className="text-danger font-medium"><i className="ri-arrow-down-s-fill"></i> 1.5%</span>
                                    </div>
                                    <div>
                                        <span className="mb-1 block"><i className="ri-circle-fill text-[8px] align-middle leading-none text-primarytint2color"></i> Pending</span> 
                                        <h6 className="mb-1">456</h6> 
                                        <span className="text-success font-medium"><i className="ri-arrow-up-s-fill"></i> 0.1%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-5 lg:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Daily Tasks
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm bg-light" Toggletext="View All" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <ul className="ti-list-group ti-list-group-flush list-none">
                                    <li className="ti-list-group-item !border-b-0 flex gap-4 !p-0 items-start mb-2">
                                        <div className="flex-shrink-0 daily-tasks-time">
                                            <span className="text-textmuted dark:text-textmuted/50 ms-auto text-[11px] flex-shrink-0 flex-auto">09:15 AM</span>
                                        </div>
                                        <div className="box border border-primary/25 shadow-none mb-0 bg-primary/10 w-full">
                                            <div className="box-body">
                                                <div className="flex items-center gap-2 justify-between">
                                                    <p className="font-medium mb-2 leading-none">Home Page Design
                                                    </p>
                                                    <SpkOverlay>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="float-end text-[1rem] text-primary">
                                                            <i className="ri-add-circle-fill"></i>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                              View Details
                                                            </span>
                                                        </Link>
                                                    </SpkOverlay>
                                                </div>
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <SpkBadge variant="primary/10" customClass="leading-none text-primary">Framework</SpkBadge>
                                                    <SpkBadge variant="secondary/10" customClass="leading-none text-secondary">Angular</SpkBadge>
                                                    <SpkBadge variant="info/10" customClass="leading-none text-info">Php</SpkBadge>
                                                    <div className="avatar-list-stacked ms-auto">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !border-b-0 flex gap-4 !p-0 items-start pt-1 mb-2">
                                        <div className="flex-shrink-0 daily-tasks-time">
                                            <span className="text-textmuted dark:text-textmuted/50 ms-auto text-[11px] flex-shrink-0 flex-auto">10:15 AM</span>
                                        </div>
                                        <div className="box border border-primarytint1color/25 shadow-none mb-0 bg-primarytint1color/10 w-full">
                                            <div className="box-body">
                                                <div className="flex items-center gap-2 justify-between">
                                                    <p className="font-medium mb-2 leading-none">Meeting Hour
                                                    </p>
                                                    <SpkOverlay>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="float-end text-[1rem] text-primarytint1color">
                                                            <i className="ri-add-circle-fill"></i>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                              View Details
                                                            </span>
                                                        </Link>
                                                    </SpkOverlay>
                                                </div>
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <SpkBadge variant="primary/10" customClass="leading-none text-primary">Framework</SpkBadge>
                                                    <SpkBadge variant="secondary/10" customClass="leading-none text-secondary">Angular</SpkBadge>
                                                    <SpkBadge variant="info/10" customClass="leading-none text-info">Php</SpkBadge>
                                                    <SpkBadge variant="danger/10" customClass="leading-none text-danger">Html</SpkBadge>
                                                    <SpkBadge variant="success/10" customClass="leading-none text-success">Laravel</SpkBadge>
                                                    <div className="avatar-list-stacked ms-auto">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>  
                                    <li className="ti-list-group-item !border-b-0 flex gap-4 !p-0 items-start pt-1 mb-2">
                                        <div className="flex-shrink-0 daily-tasks-time">
                                            <span className="text-textmuted dark:text-textmuted/50 ms-auto text-[11px] flex-shrink-0 flex-auto">04:30 AM</span>
                                        </div>
                                        <div className="box border border-primarytint2color/25 shadow-none mb-0 bg-primarytint2color/10 w-full">
                                            <div className="box-body">
                                                <div className="flex items-center gap-2 justify-between">
                                                    <p className="font-medium mb-2 leading-none">Projects Work Progress
                                                    </p>
                                                    <SpkOverlay>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="float-end text-[1rem] text-primarytint2color">
                                                            <i className="ri-add-circle-fill"></i>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                              View Details
                                                            </span>
                                                        </Link>
                                                    </SpkOverlay>
                                                </div>
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <SpkBadge variant="info/10" customClass="leading-none text-info">Php</SpkBadge>
                                                    <SpkBadge variant="danger/10" customClass="leading-none text-danger">Html</SpkBadge>
                                                    <SpkBadge variant="primary/10" customClass="leading-none text-primary">Framework</SpkBadge>
                                                    <div className="avatar-list-stacked ms-auto">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !border-b-0 flex gap-4 !p-0 items-start pt-1 mb-0">
                                        <div className="flex-shrink-0 daily-tasks-time">
                                            <span className="text-textmuted dark:text-textmuted/50 ms-auto text-[11px] flex-shrink-0 flex-auto">05:45 PM</span>
                                        </div>
                                        <div className="box border border-primarytint3color/25 shadow-none mb-0 bg-primarytint3color/10 w-full">
                                            <div className="box-body">
                                                <div className="flex items-center gap-2 justify-between">
                                                    <p className="font-medium mb-2 leading-none">Status Updation by Team Leads
                                                    </p>
                                                    <SpkOverlay>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="float-end text-[1rem] text-primarytint3color">
                                                            <i className="ri-add-circle-fill"></i>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                              View Details
                                                            </span>
                                                        </Link>
                                                    </SpkOverlay>
                                                </div>
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <SpkBadge variant="primary/10" customClass="leading-none text-primary">Framework</SpkBadge>
                                                    <SpkBadge variant="secondary/10" customClass="leading-none text-secondary">Angular</SpkBadge>
                                                    <SpkBadge variant="info/10" customClass="leading-none bg- text-info">Php</SpkBadge>
                                                    <div className="avatar-list-stacked ms-auto">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Projects Summary
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="me-3 my-1">
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Customclass="my-1" Linktag={true} Linkclass="ti-btn bg-primary !m-0 text-white ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle"  
                                           Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap"  tableRowclass="border-b border-defaultborder dark:border-defaultborder/10" 
                                  header={[{ title: 'S.No' }, { title: 'Poject Title' }, { title: 'Tasks' }, { title: 'Progress' }, { title: 'Assigned Team' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Actions' }]}>
                                    {projects.map((project) => (
                                        <tr key={project.id}>
                                            <td>{project.id}</td>
                                            <td><span className="font-medium">{project.title}</span></td>
                                            <td>{project.tasks} <span className="opacity-70">/{project.total}</span></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="progress progress-sm w-full" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar  bg-primary" style={{width: `${project.progress}%`}}></div>
                                                    </div>
                                                    <div className="ms-2">{project.progress}%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {project.avatars.map((avatar, index) => (
                                                        <span key={index} className="avatar avatar-xs avatar-rounded">
                                                            <img src={avatar} alt="img" />
                                                        </span>
                                                    ))}
                                                    {project.extraAvatars && (
                                                        <Link scroll={false} className="avatar avatar-xs bg-light !text-defaulttextcolor dark:!text-defaulttextcolor/80 border-2 avatar-rounded" href="#!">
                                                            +{project.extraAvatars}
                                                       </Link>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary/10" customClass={`${statusColors[project.status]}`}>{project.status}</SpkBadge>
                                            </td>
                                            <td>{project.date}</td>
                                            <td>
                                                    <div className="btn-list">
                                                        <SpkOverlay customClass="[--placement:top]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full !me-1 ti-btn-soft-primary !my-0">
                                                                <i
                                                                    className="ti ti-eye"></i>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                    View
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="[--placement:top]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full !me-1 ti-btn-soft-secondary !my-0">
                                                                <i
                                                                    className="ti ti-pencil"></i>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                    Edit
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="[--placement:top]">
                                                            <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-1 ti-btn-soft-danger !m-0">
                                                                <i
                                                                className="ti ti-trash"></i>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                    Delete
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        Showing 6 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
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
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                   Task Summary
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-light">View All</Link>
                            </div>
                            <div className="box-body">
                                <div className="flex gap-4 items-center justify-between p-4 bg-light mb-4 rounded-md">
                                    <div>
                                        <h6 className="mb-1">Tasks Completed Rate</h6>
                                        <p className="mb-0 text-textmuted dark:text-textmuted/50">Within the Deadline</p>
                                    </div>
                                    <div>
                                        <h5 className="mb-0">85%<SpkBadge variant="success" customClass="leading-none text-white font-medium text-[8px] ms-2"><i className="ri-arrow-up-s-fill"></i> 1.5%</SpkBadge></h5> 
                                    </div>
                                </div>
                                <div id="tasks-report">
                                    <Spkapexcharts chartOptions={Tasksoptions} chartSeries={Tasksseries} type="line" width={"100%"} height={335} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}
</Fragment>
);
};

export default Projects;