"use client"
import Spkcardscomponent from "@/shared/@spk-reusable-components/dashboards/spk-cards";
import SpkCountrycard from "@/shared/@spk-reusable-components/dashboards/spk-countrycard";
import SpkActivityCard from "@/shared/@spk-reusable-components/dashboards/spk-recentacticvecard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { activityData, Cardsdata, Countrydata, Graph2options, Graph2series, Graph3options, Graph3series, Graph4options, Graph4series, Graph5options, Graph5series, Graphoptions, Graphseries, Latestdata, Overoptions, Overseries, Recentorders, Saleoptions, Saleseries, Sellingdata, Staticoptions, Staticseries } from "@/shared/data/dashboard/salesdata";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface SalesProps {}

const Sales : FC<SalesProps>  = () => {
    const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7); // Default range: Today → Next 7 Days

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
  const [startDate, endDate] = dateRange;

    const [data, allData] = useState(Recentorders);
    const handleRemove = (id: number) => {
        const list = data.filter((idx) => idx.id !== id);
        allData(list)
    }
return (
<Fragment>
             <Seo title="Dashboards-Sales" />   
                 { /* <!-- Start::Row-1 --> */}

        {/* <!-- Start::page-header --> */}
                <div className="flex items-center justify-between page-header-breadcrumb flex-wrap gap-2">
                    <div>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <Link scroll={false} href="#!">
                                    Dashboards
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Sales</li>
                        </ol>
                        <h1 className="page-title font-medium text-lg mb-0">Sales Dashboard</h1>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <div className="form-group">
                            <div className="input-group flex-nowrap">
                                <div className="input-group-text bg-white dark:bg-bodybg border"> <i className="ri-calendar-line"></i> </div>
                                <SpkDatepickr
                                        className="form-control datepicker-input"
                                        placeholderText="Select date range"
                                        startDate={startDate}
                                        endDate={endDate}
                                        selectsRange={true} 
                                        onChange={(update:any) => setDateRange(update)}
                                        />
                            </div>
                        </div>
                        <div className="ti-btn-list">
                            <SpkButton customClass="ti-btn bg-white dark:bg-bodybg border border-defaultborder dark:border-defaultborder/10 btn-wave !my-0 !m-0 !me-[0.55rem]">
                                <i className="ri-filter-3-line align-middle"></i> Filter
                            </SpkButton>
                            <SpkButton variant="primary" customClass="ti-btn btn-wave !border-0 me-0 !m-0">
                                <i className="ri-share-forward-line"></i> Share
                            </SpkButton>
                        </div>
                    </div>
                </div>
                {/* <!-- End::page-header --> */}

               <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {Cardsdata.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 col-span-12" key={idx.id}>
                                     <Spkcardscomponent textbefore={false} textafter={true} cardClass="overflow-hidden main-content-card" headingClass="block mb-1" mainClass="flex items-start justify-between mb-2" 
                                       Icon={true} iconClass={idx.iconClass} card={idx} badgeClass="avatar-md avatar-rounded" dataClass="mb-0" />
                                </div>
                            ))}
                            <div className="xxl:col-span-8 xl:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Sales Overview
                                        </div>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle gap-1"
                                              Toggletext="Sort By" Arrowicon={true}> 
                                                 <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                                 <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li> 
                                                 <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li> 
                                            </SpkDropdown> 
                                    </div>
                                    <div className="box-body">
                                        <div id="sales-overview">
                                            <Spkapexcharts chartOptions={Overoptions} chartSeries={Overseries} type="bar" width={"100%"} height={315} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header pb-0 justify-between">
                                        <div className="box-title">
                                            Order Statistics
                                        </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-sm ti-btn-icon text-textmuted dark:text-textmuted/50 hs-dropdown-toggle ti-dropdown-toggle"
                                            Icon={true} IconClass="fe fe-more-vertical"> 
                                                <li className="ti-dropdown-item"><Link scroll={false} href="#!">Today</Link></li>
                                                <li className="ti-dropdown-item"><Link scroll={false} href="#!">This Week</Link></li>
                                                <li className="ti-dropdown-item"><Link scroll={false} href="#!">Last Week</Link></li> 
                                        </SpkDropdown> 
                                    </div>
                                    <div className="box-body py-4 px-3">
                                        <div className="flex gap-4 mb-3">
                                            <div className="avatar avatar-md bg-primary/10 !w-[3rem]">
                                                <i className="ti ti-trending-up text-[1.25rem] text-primary"></i>
                                            </div>
                                            <div className="flex-auto flex items-start justify-between w-full flex-wrap">
                                                <div>
                                                    <span className="text-[11px] mb-1 block font-medium">TOTAL ORDERS</span> 
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="mb-0 flex items-center">3,736<span className="text-success text-xs ms-2 inline-flex items-center"><i className="ti ti-trending-up align-middle me-1"></i>0.57%</span></h4>
                                                    </div>
                                                </div>
                                                <Link scroll={false} href="#!" className="text-success text-xs decoration-solid">Earnings ?</Link>
                                            </div>
                                        </div>
                                        <div id="orders" className="my-2">
                                             <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="donut" width={"100%"} height={170} />
                                        </div>
                                    </div>
                                    <div className="box-footer border-t border-dashed">
                                        <div className="grid">
                                            <SpkButton variant="outline-primary" customClass="ti-btn ti-btn-wave btn-wave font-medium waves-effect waves-light table-icon">Complete Statistics<i className="ti ti-arrow-narrow-right ms-2 text-[16px] inline-block"></i></SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span12 col-span-12">
                                <div className="box main-dashboard-banner overflow-hidden">
                                    <div className="box-body p-6">
                                        <div className="grid grid-cols-12 justify-between">
                                            <div className="xxl:col-span-7 xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-5 col-span-12">
                                                <h4 className="mb-4 font-medium text-white">Upgrade to get more</h4>
                                                <p className="mb-6 text-white">Maximize sales insights. Optimize performance. Achieve success with pro.</p>
                                                <Link scroll={false} href="#!" className="font-medium text-white decoration-solid underline">Upgrade To Pro<i className="ti ti-arrow-narrow-right"></i></Link>
                                            </div>
                                            <div className="xxl:col-span-4 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7 sm:block hidden text-end my-auto col-span-12">
                                                <img src="../../assets/images/media/media-86.png" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span12 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between pb-1">
                                        <div className="box-title">
                                            Top Selling Categories
                                        </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle ti-btn-sm gap-0"
                                            Toggletext="Sort By" Arrowicon={true}> 
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li> 
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li> 
                                        </SpkDropdown> 
                                    </div>
                                    <div className="box-body p-0">
                                        <div className="p-4 pb-0">
                                            <div className="progress-stacked progress-sm mb-3 flex gap-1">
                                                <div className="progress-bar w-[25%]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                                <div className="progress-bar bg-primarytint1color w-[15%] !rounded-none" role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
                                                <div className="progress-bar bg-primarytint2color !rounded-none w-[15%]" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                                <div className="progress-bar bg-primarytint3color !rounded-none w-[20%]" role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}></div>
                                                <div className="progress-bar !rounded-none !rounded-tr-md !rounded-br-md bg-secondary w-[25%]" role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                            <div className="flex items-center justify-between mb-2">
                                                <div>Overall Sales</div>
                                                <div className="h6 mb-0"><span className="text-success me-2 text-[11px]">2.74%<i className="ti ti-arrow-narrow-up"></i></span>1,25,875</div>
                                            </div>
                                        </div>
                                        <div className="table-responsive top-categories">
                                        <Spktables tableClass="table text-nowrap">
                                            {Sellingdata.map((idx) => (
                                                <tr key={idx.id} className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <td>
                                                        <span className={`font-medium top-category-name ${idx.data}`}>{idx.heading}</span>
                                                    </td>
                                                    <td>
                                                        <span className="font-medium">{idx.price}</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">{idx.percent}% Gross</span>
                                                    </td>
                                                    <td className="!text-end">
                                                        <SpkBadge variant={idx.color1}>{idx.percent1}% <i className={`ti ti-trending-${idx.icon}`}></i></SpkBadge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </Spktables>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
                {/* <!-- End::Row-1 --> */}

                {/* <!-- Start::Row-2 --> */}
                 <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Latest Transactions
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-light btn-wave text-textmuted dark:text-textmuted/50 ti-btn-sm">View All<i className="ti ti-arrow-narrow-right"></i></Link>
                            </div>
                            <div className="box-body p-0 pb-1">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap" header={[{ title: 'Product' }, { title: 'Price' }, { title: 'Status' }]}>
                                    {Latestdata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-sm">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-medium">{idx.product}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-medium">{idx.price}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant={idx.color}>{idx.status}</SpkBadge>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Activity
                                </div>
                                <Link scroll={false} href="#!" className="ti-ti-btn ti-btn-light btn-wave   text-textmuted dark:text-textmuted/50 waves-effect waves-light px-2 py-[0.26rem]">View All</Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none recent-activity-list">
                                    {activityData.map((activity, index) => (
                                        <SpkActivityCard showTime={true} key={index} activityCard={activity} Salesdashboard={true} />
                                    ))}
                                </ul>                 
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Sales Statistics
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-ti-btn ti-btn-light text-textmuted dark:text-textmuted/50 ti-dropdown-toggle gap-0 hs-dropdown-toggle px-2 py-[0.26rem]"
                                     Toggletext="Sort By" Arrowicon={true}> 
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li> 
                                         <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li> 
                                    </SpkDropdown> 
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap gap-2 justify-between flex-auto pb-3">
                                    <div className="py-4 px-6 rounded-sm border border-defaultborder dark:border-defaultborder/10 border-dashed bg-light">
                                        <span>Total Sales</span>
                                        <p className="font-medium text-[14px] mb-0">$3.478B</p>
                                    </div>
                                    <div className="py-4 px-6 rounded-sm border border-defaultborder dark:border-defaultborder/10 border-dashed bg-light">
                                        <span>This Year</span>
                                        <p className="text-success font-medium text-[14px] mb-0">4,25,349</p>
                                    </div>
                                    <div className="py-4 px-6 rounded-sm border border-defaultborder dark:border-defaultborder/10 border-dashed bg-light">
                                        <span>Last Year</span>
                                        <p className="text-danger font-medium text-[14px] mb-0">3,41,622</p>
                                    </div>
                                </div>
                                <div id="sales-statistics">
                                    <Spkapexcharts chartOptions={Saleoptions} chartSeries={Saleseries} type="line" width={"100%"} height={265} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header pb-0 justify-between">
                                <div className="box-title">
                                    Overall Statistics
                                </div>
                                <Link scroll={false} href="#!" className="ti-ti-btn ti-btn-light btn-wave text-textmuted dark:text-textmuted/50 waves-effect waves-light gap-0 px-2 py-[0.26rem]">View All</Link>
                            </div>
                            <div className="box-body">
                                <ul className="ti-list-group activity-feed">
                                    <li className="ti-list-group-item !m-0">
                                        <div className="flex items-center justify-between">
                                            <div className="leading-none">
                                                <p className="mb-2 text-[13px] text-textmuted dark:text-textmuted/50">Total Expenses</p>
                                                <h6 className="font-medium mb-0">$134,032<span className="text-xs text-success ms-2 font-normal inline-block">0.45%<i className="ti ti-trending-up mx-1"></i></span></h6>
                                            </div>
                                            <div className="text-end">
                                                <div id="line-graph1"><Spkapexcharts chartOptions={Graphoptions} chartSeries={Graphseries} type="line" width={100} height={30} /></div>
                                                <Link scroll={false} href="#!" className="text-xs">
                                                    <span>See more</span>
                                                    <span className="table-icon"><i className="ms-1 inline-block ri-arrow-right-line"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !m-0">
                                        <div className="flex items-center justify-between">
                                            <div className="leading-none">
                                                <p className="mb-2 text-[13px] text-textmuted dark:text-textmuted/50">General Leads</p>
                                                <h6 className="font-medium mb-0">74,354<span className="text-xs text-danger ms-2 font-normal inline-block">3.84%<i className="ti ti-trending-down mx-1"></i></span></h6>
                                            </div>
                                            <div className="text-end">
                                                <div id="line-graph2">
                                                    <Spkapexcharts chartOptions={Graph2options} chartSeries={Graph2series} type="line" width={100} height={30} />
                                                </div>
                                                <Link scroll={false} href="#!" className="text-xs">
                                                    <span>See more</span>
                                                    <span className="table-icon"><i className="ms-1 inline-block ri-arrow-right-line"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !m-0">
                                        <div className="flex items-center justify-between">
                                            <div className="leading-none">
                                                <p className="mb-2 text-[13px] text-textmuted dark:text-textmuted/50">Churn Rate</p>
                                                <h6 className="font-medium mb-0">6.02%<span className="text-xs text-success ms-2 font-normal inline-block">0.72%<i className="ti ti-trending-up mx-1"></i></span></h6>
                                            </div>
                                            <div className="text-end">
                                                <div id="line-graph3">
                                                     <Spkapexcharts chartOptions={Graph3options} chartSeries={Graph3series} type="line" width={100} height={30} />
                                                </div>
                                                <Link scroll={false} href="#!" className="text-xs">
                                                    <span>See more</span>
                                                    <span className="table-icon"><i className="ms-1 inline-block ri-arrow-right-line"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !m-0">
                                        <div className="flex items-center justify-between">
                                            <div className="leading-none">
                                                <p className="mb-2 text-[13px] text-textmuted dark:text-textmuted/50">New Users</p>
                                                <h6 className="font-medium mb-0">7,893<span className="text-xs text-success ms-2 font-normal inline-block">11.05%<i className="ti ti-trending-up mx-1"></i></span></h6>
                                            </div>
                                            <div className="text-end">
                                                <div id="line-graph4">
                                                    <Spkapexcharts chartOptions={Graph4options} chartSeries={Graph4series} type="line" width={100} height={30} />
                                                </div>
                                                <Link scroll={false} href="#!" className="text-xs">
                                                    <span>See more</span>
                                                    <span className="table-icon"><i className="ms-1 inline-block ri-arrow-right-line"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !m-0">
                                        <div className="flex items-center justify-between">
                                            <div className="leading-none">
                                                <p className="mb-2 text-[13px] text-textmuted dark:text-textmuted/50">Returning Users</p>
                                                <h6 className="font-medium mb-0">3,258<span className="text-xs text-success ms-2 font-normal inline-block">1.69%<i className="ti ti-trending-up mx-1"></i></span></h6>
                                            </div>
                                            <div className="text-end">
                                                <div id="line-graph5"><Spkapexcharts chartOptions={Graph5options} chartSeries={Graph5series} type="line" width={100} height={30} /></div>
                                                <Link scroll={false} href="#!" className="text-xs">
                                                    <span>See more</span>
                                                    <span className="table-icon"><i className="ms-1 inline-block ri-arrow-right-line"></i></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
                {/* <!-- End::Row-2 --> */}

                {/* <!-- Start::Row-3 --> */}
                 <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-9 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Orders
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-light btn-wave px-2 py-[0.26rem] text-textmuted dark:text-textmuted/50 waves-effect waves-light">View All</Link>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables showCheckbox={true} tableClass="ti-custom-table text-nowrap" Customcheckclass="!text-center flex items-center justify-center" tableRowclass="border !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Customer' }, { title: 'Product' }, { title: 'Quantity', headerClassname:'text-center' }, { title: 'Amount' , headerClassname:'text-center'}, { title: 'Status' }, { title: 'date Ordered' }, { title: 'Actions' }]}>
                                    {data.map((idx) => (
                                        <tr key={idx.id} className="border !border-defaultborder dark:!border-defaultborder/10">
                                            <td className="text-center">
                                                {idx.checked}
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-non">
                                                        <span className="avatar avatar-sm">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium">{idx.class}</span>
                                                        <span className="block text-[11px] text-textmuted dark:text-textmuted/50">{idx.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.product}
                                            </td>
                                            <td className="text-center">
                                                {idx.quantity}
                                            </td>
                                            <td className="text-center">
                                                {idx.amount}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.date}
                                            </td>
                                            <td>
                                                <div className="ti-btn-list">
                                                    <SpkButton variant="soft-success" Size="sm" customClass="ti-btn ti-btn-sm ti-btn-icon ti-btn-soft-success"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn ti-btn-sm ti-btn-icon ti-btn-soft-danger" onClickfunc={() => handleRemove(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Sales By Country
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-light btn-wave px-2 py-[0.26rem] text-textmuted dark:text-textmuted/50 waves-effect waves-light">View All</Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none sales-country-list">
                                    {Countrydata.map((idx) => (
                                        <SpkCountrycard key={idx.id} src={idx.src} states={idx.states} color={idx.color} count={idx.data} now={idx.now} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
                {/* <!-- End::Row-3 --> */}
</Fragment>
);
};

export default Sales;