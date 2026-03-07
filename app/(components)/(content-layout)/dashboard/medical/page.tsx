"use client"
import SpkMedicalcard from "@/shared/@spk-reusable-components/dashboards/spk-medicalcard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Doctorlist, Marketcapcard, Patientoptions, Patientseries, Patientslist, ScheduleData, ScheduleData1, ScheduleData2, ScheduleData3, ScheduleData4, ScheduleData5, ScheduleData6, Staffoptions, Staffseries, Statoptions, Statseries, Statsoptions, Statsseries } from "@/shared/data/dashboard/medicaldata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface MedicalProps {}

const Medical : FC<MedicalProps>  = () => {
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Dashboards-Medical" />

                <Pageheader title="Dashboards" currentpage="Medical" activepage="Medical" />

            {/* <!-- End::page-header --> */}
          {/* <!-- Start::Row-1 --> */}
				<div className="grid grid-cols-12 gap-x-6">
					<div className="xxl:col-span-7 col-span-12">
                        <div className="box med-banner-card flex items-center justify-between flex-row">
                            <div className="box-body !p-6">
                                <div className="grid grid-cols-12 sm:gap-x-6 mx-0 pe-[2rem]">
                                    <div className="md:col-span-8 col-span-12">
                                        <h4 className="font-semibold text-white">Welcome to your Medical Dashboard!</h4>
                                        <span className="block text-white opacity-70 mt-2 pt-1">Simplify medical practice management with streamlined patient profiles, appointment scheduling, and comprehensive record-keeping—all in one platform.</span> 
                                        <div className="mt-3"> 
                                            <SpkButton customClass="ti-btn bg-primarytint1color text-white btn-wave waves-effect waves-light ti-btn-lg">Get Started <i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="../../assets/images/media/media-71.png" alt="" className="img-fluid med-banner-img"/>
                        </div>
					</div>
					<div className="xxl:col-span-5 col-span-12">
						<div className="grid grid-cols-12 gap-x-6">
                            {Marketcapcard.map((idx) => (
                                <div className="sm:col-span-6 col-span-12" key={idx.id}>
                                     <SpkMedicalcard cardClass="relative rounded-md overflow-hidden" title={idx.title} price={idx.value} percent={idx.percent} svgIcon={idx.icon} icon={idx.icon1} color={idx.changeType} />
                                </div>
                            ))}
						</div>
					</div>
				</div>
				{/* <!-- End::Row-1 --> */}

				{/* <!-- Start::Row-2 --> */}
				<div className="grid grid-cols-12 gap-x-6">
					<div className="xxl:col-span-4 col-span-12">
						<div className="box">
							<div className="box-header justify-between">
								<div className="box-title">Patients Survey</div>
								<div className="flex gap-2">
                                    <div className="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm">Today</div>
                                    <div className="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm">Weakly</div>
                                    <div className="ti-btn bg-light border ti-btn-full ti-btn-sm">Yearly</div>
                                </div>
							</div>
							<div className="box-body">
								<div id="statistics">
                                    <Spkapexcharts chartOptions={Statoptions} chartSeries={Statseries} type="bar" width={"100%"} height={361} />
                                </div>
							</div>
						</div>
					</div>
					<div className="xxl:col-span-5 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Doctors List
                                </div>
                                <SpkButton buttontype="button" Size="sm" customClass="ti-btn bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                            </div>
                            <div className="box-body !p-0">
								<div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Doctor' }, { title: 'Qualification' }, { title: 'Experience' }, { title: 'Action' }]}>
                                    {Doctorlist.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <img src={idx.src} alt="" className="avatar avatar-sm avatar-rounded" />
                                                    <div className="">
                                                        <span className="block font-medium leading-none">
                                                            {idx.dname}
                                                        </span>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">{idx.designation}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.qualification}</td>
                                            <td>{idx.exp} yrs Exp</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkOverlay customClass="[--placement:top]">
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-2 ti-btn-soft-primary !mb-0">
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
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-2 ti-btn-soft-secondary !mb-0">
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
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-2 ti-btn-soft-danger !mb-0">
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
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
						<div className="box">
							<div className="box-header justify-between">
								<div className="box-title"> Revenue Statistics</div>
                                <SpkButton buttontype="button" Size="sm" customClass="ti-btn bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
							</div>
							<div className="box-body">
								<div id="revenue-stats" className="mx-auto text-center"><Spkapexcharts chartOptions={Statsoptions} chartSeries={Statsseries} type="polarArea" width={"100%"} height={265} /></div>
                                <div className="p-4 bg-light flex gap-2 rounded-md mt-4 items-center flex-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="flex-shrink-0 text-primary bg-primary/10 !rounded-full" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>
                                    <div>
                                        <h5 className="mb-0ld">$87,847.00</h5>
                                        <div className="font-medium text-textmuted dark:text-textmuted/50">Total Revenue
                                        </div>
                                    </div>
                                    <span className="font-normal ms-auto badge leading-none bg-success"> + 5.03% 
                                        <i className="ri-arrow-up-s-fill"></i>
                                    </span>
                                </div>
							</div>
						</div>
                    </div>
				</div>
				{/* <!-- End::Row-2 --> */}

				{/* <!-- Start::Row-3 --> */}
				<div className="grid grid-cols-12 gap-x-6">
					<div className="xxl:col-span-3 xl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Patients Overview
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50" Toggletext="This Week" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body border-b border-t border-defaultborder p-0 dark:border-defaultborder/10">
                                <div className="grid grid-cols-12">
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6 border-e border-defaultborder dark:border-defaultborder/10 p-4">
                                        <div className="flex justify-center flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-primary/10 !text-primary">
                                                    <i className="ri-men-line text-[17px]"></i>
                                                </span>
                                            </div>
                                            <div  className="ms-2">
                                                <h6 className="mb-1 font-medium">Male</h6>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50 flex">567
                                                    <span className="font-normal badge leading-none bg-success/10 text-success ms-2"> -2.15% 
                                                        <i className="ri-arrow-up-s-fill"></i>
                                                    </span>
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6 p-4">
                                        <div className="flex justify-center flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-secondary/10 !text-secondary">
                                                    <i className="ri-women-line text-[17px]"></i>
                                                </span>
                                            </div>
                                            <div className="ms-2">
                                                <h6 className="mb-1 font-medium">Female</h6>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50 flex">208
                                                    <span className="font-normal badge leading-none bg-danger/10 text-danger ms-2"> -2.15% 
                                                        <i className="ri-arrow-down-s-fill"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="patients-chart">
                                    <Spkapexcharts chartOptions={Patientoptions} chartSeries={Patientseries} type="donut" width={"100%"} height={220} />
                                </div>
                            </div>
                        </div>
					</div>
					<div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Upcoming Appointments</div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light border ti-btn-full ti-btn-sm" Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                    </SpkDropdown>
                            </div>
							<div className="box-body">
                                <div className="upcoming-shedule">
                                    <ul className="nav nav-pills mb-2 justify-between flex flex-wrap gap-1" role="tablist">
                                        <li className="nav-item font-medium mb-3" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#sun_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">24</p>
                                                <span className="sh-day">Sun</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item font-medium mb-3" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#mon_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">25</p>
                                                <span className="sh-day">Mon</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item font-medium mb-3" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#tue_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">26</p>
                                                <span className="sh-day">Tue</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item font-medium mb-3" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#wed_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">27</p>
                                                <span className="sh-day">Wed</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item font-medium mb-3" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#thu_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">28</p>
                                                <span className="sh-day">Thu</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item font-medium mb-3" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#fri_tab" className="nav-link sh-link text-center b active" data-bs-toggle="tab" aria-selected="true" role="tab">
                                                <p className="sh-dt mb-0">29</p>
                                                <span className="sh-day">Fri</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item font-medium" role="presentation">
                                            <Link scroll={false} href="#!" data-hs-tab="#sat_tab" className="nav-link sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                                                <p className="sh-dt mb-0">30</p>
                                                <span className="sh-day">Sat</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="">
                                        <div className="tab-pane p-0 border-0 hidden" id="sun_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                            {ScheduleData.map((item, index) => (
                                                <li className="list-item" key={index}>
                                                    <div className="sh-shedule sm:flex items-start gap-2">
                                                        <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                            <i className={`${item.iconClass} text-[1rem]`}></i>
                                                        </span>
                                                        <div className="ms-sm-2 mb-1 mb-sm-0">
                                                            <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                            <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                        </div>
                                                        <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                            <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                            <span>{item.startTime}</span>
                                                            <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                            <span>{item.endTime}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane p-0 border-0 hidden" id="mon_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                                {ScheduleData1.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule sm:flex items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                                <i className={`${item.iconClass} text-[1rem]`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                                <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                                <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane p-0 border-0 hidden" id="tue_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                                {ScheduleData2.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule sm:flex items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                                <i className={`${item.iconClass} text-[1rem]`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                                <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                                <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane p-0 border-0 hidden" id="wed_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                                {ScheduleData3.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule sm:flex items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                                <i className={`${item.iconClass} text-[1rem]`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                                <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                                <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane p-0 border-0 hidden" id="thu_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                                {ScheduleData4.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule sm:flex items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                                <i className={`${item.iconClass} text-[1rem]`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                                <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                                <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane p-0 border-0 active show" id="fri_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                                {ScheduleData5.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule sm:flex items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                                <i className={`${item.iconClass} text-[1rem]`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                                <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                                <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tab-pane !p-0 border-0 hidden" id="sat_tab" role="tabpanel">
                                            <ul className="list-none mb-0 sh-shedule-container">
                                                {ScheduleData6.map((item, index) => (
                                                    <li className="list-item" key={index}>
                                                        <div className="sh-shedule sm:flex items-start gap-2">
                                                            <span className="avatar avatar-rounded avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                                <i className={`${item.iconClass} text-[1rem]`}></i>
                                                            </span>
                                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                                <p className="mb-sm-1 mb-0 font-medium">{item.title}</p>
                                                                <span className="text-textmuted dark:text-textmuted/50">{item.subtitle}</span>
                                                            </div>
                                                            <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 ms-auto">
                                                                <span><i className="fe fe-clock me-1 text-[13px]"></i></span>
                                                                <span>{item.startTime}</span>
                                                                <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                                <span>{item.endTime}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 lg:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Staff Attendance</div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm bg-light text-textmuted dark:text-textmuted/50" Toggletext="This week"
                                     Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today </Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body py-0">
                                <div id="staff-work">
                                    <Spkapexcharts chartOptions={Staffoptions} chartSeries={Staffseries} type="line" width={"100%"} height={335} />
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				{/* <!-- End::Row-3 --> */}

				{/* <!-- Start::Row-4 --> */}
				<div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Patients List
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="me-3 my-1">
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn bg-primary !mb-0 !mt-0 text-white ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle" 
                                             Customclass="my-1"  Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'S.No', headerClassname:"text-center"}, { title: 'Patient ID' }, { title: 'Name' }, { title: 'Gender' }, { title: 'Age' }, { title: 'Assgined Doctor' }, { title: 'Disease' }, { title: 'Contact Number' }, { title: 'Appointmented Date' }, { title: 'Room No' }, { title: 'Action' }]}>
                                    {Patientslist.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td className="text-center">0{idx.id}</td>
                                            <td>{idx.patientid}</td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded"><img src={idx.src} className="" alt="..." /></span>
                                                    <div>
                                                        <span className="font-medium mb-0 flex items-center">{idx.pname}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.gender}
                                            </td>
                                            <td>{idx.age}</td>
                                            <td>{idx.doctor}</td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}`} customClass={`leading-none text-${idx.textcolor}`}>{idx.disease}</SpkBadge>
                                            </td>
                                            <td>{idx.num}</td>
                                            <td>
                                                {idx.apt}
                                            </td>
                                            <td>{idx.roomno}</td>
                                            <td>
                                                <div className="ti-btn-list">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" variant="soft-primary" customClass="ti-btn ti-btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Label="button" buttontype="button" Size="sm" variant="soft-primary1" customClass="ti-btn ti-btn-icon">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap">
                                    <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2ld"></i> </div>
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
				{/* <!-- End::Row-4 --> */}
</Fragment>
);
};

export default Medical;