"use client"
import SpkActivityCard from "@/shared/@spk-reusable-components/dashboards/spk-recentacticvecard";
import SpkSchoolcard from "@/shared/@spk-reusable-components/dashboards/spk-schoolcard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Attoptions, Attseries, EventData, Examresult, Schoolactivity, SchoolCrad, Startdata, Stuoptions, Stuseries, Teacherdata } from "@/shared/data/dashboard/schoolsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface SchoolProps {}

const School : FC<SchoolProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
        <Seo title="Dashboards-School" />

        <Pageheader title="Dashboards" currentpage="School" activepage="School" />

        {/* <!-- End::page-header --> */}
           {/* <!-- Start::Row-1 --> */}
                <div className="grid xxl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-x-6">
                    {SchoolCrad.map((idx) => (
                        <div className="col" key={idx.id}>
                            <SpkSchoolcard cardClass="school-card" bodyClass="flex gap-2 justify-between" svgIcon={idx.icon} color={idx.colorClass} item={idx.title} price={idx.value} />
                        </div>
                    ))}
                </div>
                {/* <!-- End::Row-1 --> */}

                {/* <!-- Start::Row-2 --> */}
				<div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-7 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Attendance Report
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" Toggletext="Sort By"
                                      Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <div className="flex gap-[3rem] mb-3 items-center justify-center flex-wrap flex-xl-nowrap">
                                    <div className="flex items-center gap-2 me-5">
                                        <div className="leading-none">
                                            <span className="avatar avatar-md avatar-rounded bg-primarytint2color">
                                                <i className="ri-id-card-line text-[1rem]"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[14px]">3,875</div>
                                            <div className="text-textmuted  dark:text-textmuted/50">Staff</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 me-5">
                                        <div className="leading-none">
                                            <span className="avatar avatar-md avatar-rounded bg-secondary">
                                                <i className="ri-graduation-cap-line text-[1rem]"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[14px]">25,875</div>
                                            <div className="text-textmuted  dark:text-textmuted/50">Students</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 me-4">
                                        <div className="leading-none">
                                            <span className="avatar avatar-md avatar-rounded bg-primary">
                                                <i className="ri-presentation-line text-[1rem]"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-[14px]">1,687</div>
                                            <div className="text-textmuted  dark:text-textmuted/50">Teachers</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div id="attendance"><Spkapexcharts type="line" chartOptions={Attoptions} chartSeries={Attseries} width={'100%'} height={336}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-5 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Teachers List
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-light text-defaulttextcolor"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Teacher' }, { title: 'Qualification' }, { title: 'Subject' }, { title: 'Action' }]}>
                                    {Teacherdata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center gap-4">
                                                    <img src={idx.src} alt="" className="avatar avatar-sm" />
                                                    <Link scroll={false} href="#!" className="font-medium">{idx.name}</Link>
                                                </div>
                                            </td>
                                            <td><span className="text-xs text-textmuted  dark:text-textmuted/50 block">{idx.qualification}</span></td>
                                            <td><div className={`text-${idx.color} font-medium`}>{idx.subject}</div></td>
                                            <td>
                                                <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-light ti-btn-icon table-icon !m-0"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				{/* <!-- End::Row-2 --> */}

				{/* <!-- Start::Row-3 --> */}
				<div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between !pb-0">
                                <div className="box-title">
                                    Notice Board
                                </div>
                                <Link scroll={false} href="#!" className="text-xs text-textmuted  dark:text-textmuted/50 ti-btn ti-btn-sm bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" >
                                    {EventData.map((event, index) => (
                                        <tr key={index} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td className="!whitespace-normal">
                                                <div className="flex items-center gap-4">
                                                    <div className={event.iconClass}>
                                                        {event.svgIcon}
                                                    </div>
                                                    <div className="flex-auto">
                                                        <div>
                                                            <div className="font-medium block my-1 text-[14px]">{event.title}<span className="text-primarytint2color ms-1">{event.text}</span></div>
                                                            <p className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">{event.description} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="light" customClass={event.badgeClass}>
                                                    {event.badgeText}
                                                </SpkBadge>
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
                                    Students Overview
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle"
                                     Toggletext="Sort By" Arrowicon={true}>
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !pb-1">
                                <div id="students-applicants"><Spkapexcharts chartOptions={Stuoptions} chartSeries={Stuseries} type="line" width={"100%"} height={282} /> </div>
                            </div>
                            <div className="box-footer !p-0">
                                <div className="grid grid-cols-12 gap-x-6 mt-0">
                                    <div className="col-span-6 border-end border-inline-end-dashed text-center p-4">
                                        <p className="mb-1 font-medium">Boys</p>
                                        <h5 className="text-primary font-medium">12.34K</h5>
                                    </div>
                                    <div className="col-span-6 text-center p-4">
                                        <p className="mb-1 font-medium">Girls</p>
                                        <h5 className="text-secondary font-medium">10.19K</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Activity
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none school-activity-list">
                                    {Schoolactivity.map((activity, index) => (
                                       <SpkActivityCard key={index} showTime={true} activityCard={activity} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
				</div>
				{/* <!-- End::Row-3 --> */}

				{/* <!-- Start::Row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Star Students
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        <div>
                                            <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                        </div>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn bg-primary text-white ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle !m-0"
                                             Toggletext="Sort By" Arrowicon={true}>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                            </SpkDropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body p-0 pt-2">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'S.No' }, { title: 'ID' }, { title: 'Student' }, { title: 'Class' }, { title: 'Section' }, { title: 'Marks In %' }, { title: 'Marks In GPA' }, { title: 'Status' }, { title: 'Actions' }]}>
                                    {Startdata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className="">{idx.id}</td>
                                            <td className="">{idx.iddata}</td>
                                            <td className="">
                                                <div className="flex items-center">
                                                    <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                        <img src={idx.src} alt="img" />
                                                    </Link>
                                                    <Link scroll={false} href="#!">{idx.student}</Link>
                                                </div>
                                            </td>
                                            <td className="">{idx.class}</td>
                                            <td className="">{idx.section}</td>
                                            <td className="">{idx.marks}%</td>
                                            <td className="">{idx.marks1}</td>
                                            <td className="">
                                                <span className={`text-${idx.color} font-medium`}>{idx.status}</span>
                                            </td>
                                            <td className="">
                                                    <SpkDropdown Linktag={true} Customclass="inline-block" Linkclass="tx-inverse ti-dropdown-toggle hs-dropdown-toggle !p-0" Icon={true} IconClass="bi bi-three-dots">
                                                        <li><Link scroll={false} href="#!" className="ti-dropdown-item">Action</Link></li>
                                                        <li><Link scroll={false} href="#!" className="ti-dropdown-item">Another Action</Link></li>
                                                        <li><Link scroll={false} href="#!" className="ti-dropdown-item">Something Else Here</Link></li>
                                                    </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap bg-light p-4 py-1 rounded-md">
                                    <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i> </div>
                                    <div className="ms-auto py-2">
                                        <nav aria-label="" className="">
                                            <ul className="ti-pagination mb-0 !p-0 justify-end float-end">
                                                <li className="page-item disabled"> <Link scroll={false} href="#!"
                                                        className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link scroll={false}
                                                        className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                        href="#!">1</Link></li>
                                                <li className="page-item " aria-current="page"> <Link scroll={false}
                                                        className="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                        href="#!">2</Link> </li>
                                                <li className="page-item"> <Link scroll={false}
                                                        className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none !border-s-0"
                                                        href="#!">Next</Link> </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Exam Results
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-light text-textmuted  dark:text-textmuted/50"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head"  tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'ID' }, { title: 'Student' }, { title: 'Subject' }, { title: 'Score' }]}>
                                    {Examresult.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>{idx.iddata}</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <span className="avatar avatar-sm">
                                                            <img src={idx.src} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold leading-none mb-1">{idx.student}</span>
                                                        <span className="text-[13px] text-textmuted  dark:text-textmuted/50">{idx.sname}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.sname}</td>
                                            <td className={`text-${idx.color}`}>{idx.score}%</td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				{/* <!-- End::Row-4 --> */}
</Fragment>
);
};

export default School;