"use client"
import SpkCrmcard from "@/shared/@spk-reusable-components/dashboards/spk-crmcard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Crmcard, Crmoptions, Crmseries, Leadoptions, Leadsdata, Leadsseries, Profitoptions, Profitseries, Reoptions, Reseries, Salesdata, Todolist, Todolist1 } from "@/shared/data/dashboard/crmdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface CrmProps {}

const Crm : FC<CrmProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-Crm" />

            <Pageheader title="Dashboards" currentpage="CRM" activepage="CRM" />

        {/* <!-- End::page-header --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6">
                    {Crmcard.map((idx) => (
                        <div className="" key={idx.id}>
                             <SpkCrmcard cardClass="crm-card" color={idx.borderColorClass} color1={idx.color} title={idx.title} price={idx.price} percent={idx.percent} svgIcon={idx.icon} />
                        </div>
                    ))}
                </div>
                {/* <!-- End::row-1 --> */}
                
                {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="md:col-span-12 xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden earnings-card box-bg-primary shadow-sm">
                            <div className="box-body p-0 text-white">
                                <div className="p-4 absolute total-earnings-content w-full">
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <span className="mb-1 block">Total Revenue</span> 
                                            <h4 className="mb-1 text-white">$578,784</h4> 
                                            <div className="text-white text-[13px]"> 
                                                <span className="opacity-70"> Increased By </span>  
                                                <SpkBadge variant="primarytint1color" customClass="align-middle opacity-90">7.66%<i className="ti ti-arrow-narrow-up"></i></SpkBadge>
                                            </div>
                                        </div><div className="avatar avatar-lg bg-white/10 svg-white ms-auto shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div id="profit-report"><Spkapexcharts chartOptions={Profitoptions} chartSeries={Profitseries} type="area" width={"100%"} height={130} />
                                </div>
                                <div id="revenue-report"><Spkapexcharts chartOptions={Reoptions} chartSeries={Reseries} type="bar" width={"100%"} height={145} />
                                </div>
                            </div>
                        </div>
                        <div className="box border border-primarytint2color border-opacity-25">
                            <div className="box-body">
                                <div className="flex gap-2 items-center my-1">
                                    <div>
                                        <span className="mb-1 block">Total Profit</span> 
                                        <h4 className="mb-1">$37,566</h4> 
                                        <div className="text-textmuted dark:text-textmuted/50 text-[13px]"> 
                                            <span className=""> Increased By </span>  
                                            <SpkBadge variant="primarytint3color" customClass="align-middle">5.66%<i className="ti ti-arrow-narrow-up"></i></SpkBadge>
                                        </div>
                                    </div>
                                    <div className="avatar avatar-lg bg-primarytint2color/10 svg-primarytint2color ms-auto shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-12 xxl:col-span-6 col-span-12">
                        <div className="box ">
                            <div className="box-header justify-between">
                                <div className="box-title">Sales Overview</div>
                                <div className="flex gap-2">
                                    <SpkButton variant="outline-light" Size="sm" customClass="ti-btn">Today</SpkButton>
                                    <SpkButton variant="outline-light" Size="sm" customClass="ti-btn">Weakly</SpkButton>
                                    <SpkButton variant="light" Size="sm" customClass="ti-btn">Yearly</SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="sales-overview-crm">
                                        <Spkapexcharts chartOptions={Crmoptions} chartSeries={Crmseries} type="area" width={"100%"} height={270} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-12 xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between pb-3">
                                <div className="box-title">Profit By Sale</div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm ti-btn-light text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle"
                                      Toggletext="Sort By" Arrowicon="ri-arrow-down-s-line align-middle d-inline-block"> 
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li> 
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li> 
                                    </SpkDropdown> 
                            </div>
                            <div className="box-body">
                                <ul className="list-none mb-0">
                                    <li className="ti-list-group-item border-0 p-0 mb-5">
                                        <div className="flex justify-between items-top">
                                            <div className="flex">
                                                <span className="avatar avatar-rounded avatar-md bg-primary/10 !text-primary"><i
                                                        className='bx bx-wallet-alt text-lg'></i></span>
                                                <div className="flex flex-col ms-2">
                                                    <p className="font-medium mb-0">Total Sales</p>
                                                    <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">10% Increases</p>
                                                </div>
                                            </div>
                                            <h6 className="font-medium mb-0">$12,345</h6>
                                        </div>
                                        <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"}}></div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item border-0 p-0 mb-5">
                                        <div className="flex justify-between items-top">
                                            <div className="flex">
                                                <span
                                                    className="avatar avatar-md avatar-rounded bg-secondary/10 !text-secondary"><i
                                                        className='bx bx-money-withdraw text-lg'></i></span>
                                                <div className="flex flex-col ms-2">
                                                    <p className="font-medium mb-0">Total Profit</p>
                                                    <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">12% Increases</p>
                                                </div>
                                            </div>
                                            <h6 className="font-medium mb-0">$9,345</h6>
                                        </div>
                                        <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{width: "75%"}}></div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item border-0 p-0 mb-5">
                                        <div className="flex justify-between items-top">
                                            <div className="flex">
                                                <span className="avatar avatar-md avatar-rounded bg-primarytint1color/10 !text-primarytint1color"><i
                                                        className='bx bx-money-withdraw text-lg'></i></span>
                                                <div className="flex flex-col ms-2">
                                                    <p className="font-medium mb-0">Total Revenue</p>
                                                    <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">11% Decrease</p>
                                                </div>
                                            </div>
                                            <h6 className="font-medium mb-0">$9,345</h6>
                                        </div>
                                        <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primarytint1color" style={{width: "78%"}}></div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item border-0 p-0 mb-2">
                                        <div className="flex justify-between items-top">
                                            <div className="flex">
                                                <span className="avatar avatar-md avatar-rounded bg-primarytint2color/10 !text-primarytint2color"><i
                                                        className='bx bx-money-withdraw text-lg'></i></span>
                                                <div className="flex flex-col ms-2">
                                                    <p className="font-medium mb-0">Total loss</p>
                                                    <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">11% Decrease</p>
                                                </div>
                                            </div>
                                            <h6 className="font-medium mb-0">$11,345</h6>
                                        </div>
                                        <div className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primarytint2color" style={{width: "68%"}}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-2 --> */}

                {/* <!-- Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Tasks List
                                </div>
                                <div>
                                    <ul className="nav nav-tabs justify-end nav-tabs-header box-headertabs flex" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active bg-light" data-hs-tab="#today">Today</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link bg-light" data-hs-tab="#Upcoming">Upcoming</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box-body todo-tab p-0">
                                <div className="">
                                    <div className="border-0 p-5" id="today" role="tabpanel">
                                        <ul className="list-none task-list-tab mb-0">
                                            {Todolist.map((todo) => (
                                                <li key={todo.id}>
                                                    <div className="todolist flex">
                                                        <div className="mb-3 form-check  me-2">
                                                            <input type="checkbox" className="form-check-input" defaultChecked={todo.completed} />
                                                        </div>
                                                        <div className="flex-auto w-full">
                                                            <div className="flex items-start justify-between">
                                                                <div>
                                                                    <span className="block font-medium">{todo.title}
                                                                        <SpkOverlay>
                                                                            <span className={`bg-${todo.color}/10 text-${todo.color} px-1 py-[0.1rem] align-middle text-[10px] leading-none  rounded-full ms-1`}>
                                                                                <i className={todo.icon}></i>
                                                                                <span
                                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                                    role="tooltip">
                                                                                   {todo.status}
                                                                                </span>
                                                                            </span>
                                                                        </SpkOverlay>
                                                                    </span>
                                                                    <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs">{todo.description}</p>
                                                                </div>
                                                                <div>
                                                                    <SpkOverlay>
                                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-info/10 ti-btn-icon text-info me-2">
                                                                            <i className="ti ti-edit"></i>
                                                                            <span
                                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                                role="tooltip">
                                                                            Edit
                                                                            </span>
                                                                        </Link>
                                                                    </SpkOverlay>
                                                                    <SpkOverlay>
                                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-danger/10 ti-btn-icon text-danger">
                                                                            <i className="ti ti-trash"></i>
                                                                            <span
                                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                                role="tooltip">
                                                                            Delete
                                                                            </span>
                                                                        </Link>
                                                                    </SpkOverlay>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-0 hidden p-5" id="Upcoming" role="tabpanel">
                                        <ul className="list-none task-list-tab mb-0">
                                            {Todolist1.map(task => (
                                                <li key={task.id}>
                                                    <div className="todolist flex">
                                                        <div className="mb-3 form-check  me-2">
                                                            <input type="checkbox" className="form-check-input"/>
                                                        </div>
                                                        <div className="flex-auto w-full">
                                                            <div className="flex items-start justify-between">
                                                                <div>
                                                                    <span className="block font-medium"> {task.title}
                                                                        <SpkOverlay>
                                                                            <span className="bg-primarytint3color/10 !text-primarytint3color px-1 py-[0.1rem] align-middle text-[10px] leading-none  rounded-full ms-1">
                                                                                <i className="ri-time-line"></i>
                                                                                <span
                                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                                    role="tooltip">
                                                                                {task.status}
                                                                                </span>
                                                                            </span>
                                                                        </SpkOverlay>
                                                                    </span>
                                                                    <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs">{task.description}</p>
                                                                </div>
                                                                <div>
                                                                    <SpkOverlay>
                                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-info/10 ti-btn-icon text-info">
                                                                            <i className="ti ti-edit"></i>
                                                                            <span
                                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                                role="tooltip">
                                                                            Edit
                                                                            </span>
                                                                        </Link>
                                                                    </SpkOverlay>
                                                                    <SpkOverlay>
                                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-danger/10 ti-btn-icon text-danger">
                                                                            <i className="ti ti-trash"></i>
                                                                            <span
                                                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                                role="tooltip">
                                                                            Delete
                                                                            </span>
                                                                        </Link>
                                                                    </SpkOverlay>
                                                                </div>
                                                            </div>
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
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Leads Overview
                                </div>
                                    <SpkDropdown CustomToggleclass="ti-btn ti-btn-light border ti-btn-full ti-btn-sm" Toggletext="Yearly" Icon={true} IconClass="ti ti-chevron-down">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Yearly</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Weekly</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Monthly</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body px-0 pb-2">
                                <div id="Leads-overview"><Spkapexcharts chartOptions={Leadoptions} chartSeries={Leadsseries} type="radar" width={"100%"} height={335} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-12 xxl:col-span-5 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">Sales Performance</div>
                                <SpkDropdown CustomToggleclass="ti-btn ti-btn-light border btn-full ti-btn-sm" Toggletext="Today" Icon={true} IconClass="ti ti-chevron-down">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Weekly</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Monthly</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                 header={[{ title: 'S.No.' }, { title: 'Representative' }, { title: 'Deals Closed' }, { title: 'Leads' }, { title: 'Rate (%)' }]}>
                                    {Salesdata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>{idx.id}</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-xs">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link scroll={false} href="#!" className="font-medium">{idx.repname}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.close}</td>
                                            <td>{idx.leads}</td>
                                            <td>{idx.rate}<i className={`ri-arrow-${idx.icon}-s-fill ms-1 text-${idx.color} align-middle text-lg`}></i></td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-3 --> */}

                {/* <!-- Start::row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Leads Report
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light border btn-full ti-btn-sm" Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link> </li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body active-tab">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                  header={[{ title: 'S.NO' }, { title: 'Lead' }, { title: 'Company Name' }, { title: 'Phone Number' }, { title: 'Status' }, { title: 'Location ' }, { title: 'Date' }, { title: 'Amount' }, { title: 'Action' }]}>
                                    {Leadsdata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                <span className="">0{idx.id}</span>
                                            </td>
                                            <td>
                                                <div className="flex">
                                                    <span className="avatar avatar-sm">
                                                        <img src={idx.src} className="" alt="" />
                                                    </span>
                                                    <div className="flex-1 ms-2">
                                                        <p className="mb-0 text-[14px]">{idx.lead}</p>
                                                        <Link scroll={false} href="#!" className="text-textmuted dark:text-textmuted/50 text-xs">{idx.mail}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.phnnum}</span>
                                            </td>
                                            <td>
                                                <span className="">{idx.cmpname}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <span><i className="ri-map-pin-fill text-textmuted dark:text-textmuted/50 me-1"></i>{idx.location}</span>
                                            </td>
                                            <td>
                                                <span>{idx.date}</span>
                                            </td>
                                            <td>
                                                <span>{idx.amount}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkOverlay customClass="[--placement:top]">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon !rounded-full me-2 ti-btn-soft-primary">
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
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon !rounded-full me-2 ti-btn-soft-info">
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
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon !rounded-full me-2 ti-btn-soft-primary2">
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
                                    <div>Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i></div>
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

export default Crm;