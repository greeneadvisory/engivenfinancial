"use client"
import SpkHrmcards from "@/shared/@spk-reusable-components/dashboards/spk-hrmcards";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Analysisoptions, Analysisseries, Directorydata, Employeedata, Eventsdata, Genderoptions, Genderseries, Hrmcard, Interviewsdata } from "@/shared/data/dashboard/hrmdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface HrmProps {}

const Hrm : FC<HrmProps>  = () => {
    const [allData, setAllData] = useState(Directorydata)
    const handleRemove = (id: number) => {
        const List = allData.filter((idx) => idx.id !== id);
        setAllData(List)
    }
    return (
        <Fragment>
                {/* <!-- Start::page-header --> */}
                    <Seo title="Dashboards-Hrm" />

                    <Pageheader title="Dashboards" currentpage="HRM" activepage="HRM" />

                {/* <!-- End::page-header --> */}

                {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {Hrmcard.map((idx) => (
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12" key={idx.id}>
                                <SpkHrmcards cardClass="overflow-hidden" chartOptions={idx.chartOptions} color={idx.color} chartSeries={idx.chartSeries} icon={idx.direction} price={idx.value} title={idx.title} percent={idx.percentage} data={idx.description} type="area" height={70} />
                        </div>
                    ))}
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6 col-span-12">
                    <div className="xxl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Project Analysis</div>
                                <div className="flex gap-2">
                                    <div className="ti-btn ti-btn-sm ti-btn-outline-light">Today</div>
                                    <div className="ti-btn ti-btn-sm ti-btn-outline-light">Weakly</div>
                                    <div className="ti-btn ti-btn-sm ti-btn-light">Yearly</div>
                                </div>
                            </div>
                            <div className="box-body pb-1">
                                <ul className="flex flex-wrap mb-0 list-none gap-5 justify-around p-4 border rounded-sm border-dashed dark:border-defaultborder/10">
                                    <li>
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="leading-none me-1">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary/10 !text-primary">
                                                    <i className="ri-stack-line text-xl"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 font-medium text-textmuted dark:text-textmuted/50">New</span>
                                                <h4 className="font-medium mb-0">64,241</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="leading-none me-1">
                                                <span className="avatar avatar-lg avatar-rounded bg-primarytint1color/10 !text-primarytint1color">
                                                    <i className="ri-rocket-line text-xl"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 font-medium text-textmuted dark:text-textmuted/50">Inprogress</span>
                                                <h4 className="font-medium mb-0">1,543</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="leading-none me-1">
                                                <span className="avatar avatar-lg avatar-rounded bg-primarytint2color/10 !text-primarytint2color">
                                                    <i className="ri-check-line text-xl"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 font-medium text-textmuted dark:text-textmuted/50">Completed</span>
                                                <h4 className="font-medium mb-0">3,848</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="leading-none me-1">
                                                <span className="avatar avatar-lg avatar-rounded bg-primarytint3color/10 !text-primarytint3color">
                                                    <i className="ri-time-line text-xl"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 font-medium text-textmuted dark:text-textmuted/50">Onhold</span>
                                                <h4 className="font-medium mb-0">938</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div id="project-analysis"><Spkapexcharts chartOptions={Analysisoptions} chartSeries={Analysisseries} type="bar" width={"100%"} height={336} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Upcoming Events</div>
                                <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-sm bg-primary/10 !text-primary">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none timeline-widget1 mb-0">
                                    {Eventsdata.map((event) => (
                                        <li className="timeline-widget-list" key={event.id}>
                                            <div className="flex items-center flex-wrap">
                                                <div className={`avatar avatar-xl bg-${event.badge1}/10 !text-${event.badge1} me-2 flex-shrink-0`}> 
                                                    <div className="text-center">
                                                        <div className=" font-medium leading-none mb-1">{event.date}</div>
                                                        <div className="text-xs text-defaulttextcolor font-medium leading-none">{event.day}</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap flex-auto items-top justify-between flex-xl-nowrap">
                                                    <div className="events-width">
                                                        <p className="mb-1 timeline-widget-content">{event.content}</p>
                                                        <p className="mb-0 text-xs leading-none text-textmuted dark:text-textmuted/50"> {event.time}
                                                        {event.category &&  <SpkBadge variant={`${event.badge}/10`} customClass={`ms-2 !text-${event.badge}`}>{event.category}</SpkBadge>}</p>
                                                    </div>
                                                        <SpkDropdown  Icon={true} IconClass="fe fe-more-vertical" CustomToggleclass="ti-btn ti-btn-light ti-btn-icon">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Action</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Another action</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Something else here</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">Employee's Leave</div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm ti-btn-light">View All</Link>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b border-defaultborder dark:!border-defaultborder/10"
                                    header={[{ title: 'Employee' }, { title: 'Type' }, { title: 'Days' }, { title: 'Status' }, { title: 'Start Date' }, { title: 'Actions' }]}>
                                    {Employeedata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar avatar-sm">
                                                        <img src={idx.src} className="" alt="" />
                                                    </span>
                                                    <div className="flex-1 ms-2">
                                                        <p className="mb-0 text-xs font-medium">{idx.data}</p>
                                                        <Link scroll={false}  href="#!" className="text-[11px] text-textmuted dark:text-textmuted/50">{idx.data1}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.type}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.days}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <span className="text-xs">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkOverlay>
                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-info !mb-0">
                                                            <i className="ti ti-pencil"></i>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                role="tooltip">
                                                            Edit
                                                            </span>
                                                        </Link>
                                                    </SpkOverlay>
                                                    <SpkOverlay>
                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary2 !m-0">
                                                            <i className="ti ti-trash"></i>
                                                            <span
                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
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
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Today's Interviews 
                                </div>
                                <div>
                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-light ti-btn-sm">View All</Link>
                                </div>
                            </div>
                            <div className="box-body py-3">
                                <ul className="list-none mb-0 schedule-list">
                                    {Interviewsdata.map((idx) => (
                                        <li key={idx.id}>
                                            <div className="flex items-center flex-wrap flex-xl-nowrap gap-1">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded p-1 bg-danger/10">
                                                        <img src={idx.src} alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto ms-2">
                                                    <p className="font-medium mb-0">{idx.data}</p>
                                                    <p className="text-[11px] text-textmuted dark:text-textmuted/50 mb-0 text-nowrap truncate w-75">
                                                    <i className="ri-time-line me-1"></i>{idx.data1}(9.00am-10.00am)</p>
                                                </div>
                                                <div className="ms-auto">
                                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary ti-btn-sm text-nowrap text-white">Call Now</SpkButton>
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
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Gender Distribution
                                </div>
                                <div>
                                    <Link scroll={false } href="#!" className="ti-btn ti-btn-light ti-btn-sm">View All</Link>
                                </div>
                            </div>
                            <div className="box-body text-center mx-auto">
                                <div id="gender-chart"><Spkapexcharts chartOptions={Genderoptions} chartSeries={Genderseries} type="polarArea" width={"100%"} height={248} /></div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <ul className="flex flex-wrap mb-0 list-none justify-around text-center gap-2">
                                    <li>
                                        <div>
                                            <div className="leading-none me-1 mb-2">
                                                <span className="avatar avatar-md bg-primary/10 !text-primary border-primary/25 border-[3px] avatar-rounded">
                                                    <i className="ri-stack-line text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 text-textmuted dark:text-textmuted/50 text-xs">Attendance</span>
                                                <h5 className="font-medium mb-0">4,241</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="leading-none me-1 mb-2">
                                                <span className="avatar avatar-md bg-primarytint1color/10 !text-primarytint1color border-primarytint1color/25 border-[3px] avatar-rounded">
                                                    <i className="ri-calendar-todo-line text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 text-textmuted dark:text-textmuted/50 text-xs">Absent</span>
                                                <h5 className="font-medium mb-0">485</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className="leading-none me-1 mb-2">
                                                <span className="avatar avatar-md bg-primarytint2color/10 !text-primarytint2color border-primarytint2color/25 border-[3px] avatar-rounded">
                                                    <i className="ri-time-line text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block mb-0 text-textmuted dark:text-textmuted/50 text-xs">Late</span>
                                                <h5 className="font-medium mb-0">08</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}

                {/* <!-- Start:: row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Employee Directory
                                </div>
                                <div className="flex flex-wrap gap-1 items-center">
                                    <div className="me-3">
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example"/>
                                    </div>
                                        <SpkDropdown customClass="my-1" Linktag={true} Linkclass="ti-btn ti-btn-sm ti-btn-primary ti-dropdown-toggle hs-dropdown-toggle !m-0"
                                            Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap ti-custom-table-hover" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                    header={[{ title: 'S.NO' }, { title: 'Employee Id' }, { title: 'Employee Name' }, { title: 'Position' }, { title: 'Department' }, { title: 'Email ' }, { title: 'Status' }, { title: 'Contact' }, { title: 'Salary' }, { title: 'Action' }]}>
                                    {allData.map((idx) => (
                                        <tr key={idx.id} className="border-b border-defaultborder dark:border-defaultborder/10">
                                            <td className="text-center">
                                                0{idx.id}
                                            </td>
                                            <td>
                                                <span className="text-primary text-[14px]">{idx.emplyid}</span>
                                            </td>
                                            <td>
                                                <div className="flex items-center">
                                                    <img src={idx.src} className="avatar avatar-sm" alt="" />
                                                    <div className="flex-1 flex-between pos-relative ms-2">
                                                        <div className="">
                                                            <Link scroll={false} href="#!" className="text-[13px] font-medium">{idx.emplyname}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.position}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.depart}</span>
                                            </td>
                                            <td>
                                                <Link scroll={false} href="#!">{idx.mail}</Link>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color} leading-none`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <span className="">{idx.contacts}</span>
                                            </td>
                                            <td>
                                                <span className="font-medium">{idx.salary}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                            <SpkOverlay customClass="[--placement:top]">
                                                            <a aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-soft-primary !mb-0">
                                                                <span className="ri-pencil-line text-[14px]"></span>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                Edit
                                                                </span>
                                                            </a>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="[--placement:top]">
                                                            <a aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-soft-danger !mb-0">
                                                                <span className="ri-delete-bin-7-line text-[14px]"></span>
                                                                <span
                                                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                                    role="tooltip">
                                                                Delete
                                                                </span>
                                                            </a>
                                                        </SpkOverlay>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex flex-wrap items-center">
                                    <div>
                                        Showing 7 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
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
                {/* <!-- End:: row-4 --> */}
                
        </Fragment>
    );
};

export default Hrm;