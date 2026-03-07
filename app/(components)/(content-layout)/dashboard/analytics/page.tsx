"use client"
import SpkAnalyticsActive from "@/shared/@spk-reusable-components/dashboards/spk-analyticsactive";
import SpkCard1Component from "@/shared/@spk-reusable-components/dashboards/spk-card1";
import SpkCountrycard from "@/shared/@spk-reusable-components/dashboards/spk-countrycard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Activitydata, AnalayticsCards, Analyticsoptions, Analyticsseries, Countriesdata, Growthoptions, Growthseries, Siteoptions, Siteseries, Toplandingdata, Visitordata } from "@/shared/data/dashboard/analyticsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface AnalyticsProps {}

const Analytics : FC<AnalyticsProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
        <Seo title="Dashboards-Analytics" />

        <Pageheader title="Dashboards" currentpage="Analytics" activepage="Analytics" />
        {/* <!-- End::page-header --> */}
         {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box main-dashboard-banner main-dashboard-banner2 overflow-hidden">
                            <div className="box-body p-6">
                                <div className="grid grid-cols-12 sm:gap-x-6 justify-between">
                                    <div className="xxl:col-span-8 xl:col-span-4 lg:col-span-5 md:col-span-5 sm:col-span-5 col-span-12">
                                        <h4 className="mb-3 font-medium text-white">Upgrade to get more</h4>
                                        <p className="mb-3 text-white text-[11px]">Upgrade Now for Premium Access and Unlock Exclusive Features!</p>
                                        <Link scroll={false} href="#!" className="font-medium text-white underline">Upgrade Now<i className="ti ti-arrow-narrow-right"></i></Link>
                                    </div>
                                    <div className="xxl:col-span-4 xl:col-span-7 lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-12 sm:block hidden text-end my-auto">
                                        <img src="../../assets/images/media/media-91.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {AnalayticsCards.map((analyticsCard) => (
                                <div className="xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={analyticsCard.id}>
                                    <SpkCard1Component key={analyticsCard.id} height="85px" width="100px" card={analyticsCard} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between flex-wrap pb-1">
                                <div className="box-title">
                                    Activity
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-icons ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle"
                                       Icon={true} IconClass="fe fe-more-vertical fs-14">
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <div className="analytics-timeline">
                                    <ul className="list-none analytics-activity mb-0">
                                        {Activitydata.map((idx) => (
                                            <SpkAnalyticsActive key={idx.id} color={idx.color} icon={idx.icon} header={idx.header} Liclass={idx.listclass} inc={idx.inc} color1={idx.color1} percent={idx.percent} data={idx.data} tiIcon={idx.icon1} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Visitor Analytics
                                </div>
                                <div>
                                    <SpkButton buttontype="button" variant="soft-primary" customClass="ti-btn text-xs px-2 py-[0.26rem]"><i className="ri-share-forward-line align-middle inline-block"></i>Export</SpkButton>
                                </div>
                            </div>
                            <div className="box-body pb-0">
                                <div id="audienceMetric">
                                     <Spkapexcharts chartSeries={Analyticsseries} chartOptions={Analyticsoptions} type="area" width="100%" height={385} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Users By Countries
                                </div>
                                <div className="">
                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-light text-textmuted dark:text-textmuted/50 ti-btn-sm">
                                        View All
                                    </Link>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-none mb-0 analytics-visitors-countries">
                                    {Countriesdata.map((idx) => (
                                        <li className={idx.class} key={idx.id}>
                                            <div className="flex items-center gap-2">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xs avatar-rounded text-defaulttextcolor">
                                                        <img src={idx.src} alt=""/>
                                                    </span>
                                                </div>
                                                <div className="ms-1 flex-auto leading-none">
                                                    <span className="text-[14px]">{idx.header}</span>
                                                </div>
                                                <div className={`text-${idx.color} ms-auto`}>{idx.percent}%<i className={`ti ti-arrow-narrow-${idx.icon}`}></i></div>
                                                <div>
                                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium">{idx.data}</SpkBadge>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                
                            </div>
                         </div>
                    </div>
                </div>
                {/* <!--End::row-2 --> */}

                {/* <!-- Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Site Referrals
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-light btn-wave text-textmuted dark:text-textmuted/50 waves-effect ti-btn-sm waves-light">View All</Link>
                            </div>
                            <div className="box-body sm:flex items-center">
                                <div id="referrals-chart" className="p-4 flex-shrink-0 px-0">
                                   <Spkapexcharts chartOptions={Siteoptions} chartSeries={Siteseries} type="donut" width="100%" height={240} />
                                </div>
                                <div className="table-responsive overflow-auto table-bordered-default">
                                    <Spktables tableClass="ti-custom-table custom-table1 text-nowrap" header={[{ title: 'Source' }, { title: 'Total' }, { title: 'Growth' }]}> 
                                        <tr>
                                            <td>Search Engines</td>
                                            <td className="text-center font-medium">300</td>
                                            <td className="text-success">+5.2%</td>
                                        </tr>
                                        <tr>
                                            <td>Social Media</td>
                                            <td className="text-center font-medium">450</td>
                                            <td className="text-success">+10.3%</td>
                                        </tr>
                                        <tr>
                                            <td>Direct</td>
                                            <td className="text-center font-medium">200</td>
                                            <td className="text-success">+2.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Referral Sites</td>
                                            <td className="text-center font-medium">150</td>
                                            <td className="text-danger">-1.2%</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td className="text-center font-medium">100</td>
                                            <td className="text-success">+3.8%</td>
                                        </tr>
                                    </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                            <h5 className="box-title">Top Landing Pages</h5>
                            <Link scroll={false} href="#!" className="ti-btn ti-btn-light btn-wave text-textmuted dark:text-textmuted/50 ti-btn-sm waves-effect waves-light">View All</Link>
                            </div>
                            <div className="box-body">
                                <ul className="top-landing-pages-list">
                                    {Toplandingdata.map((idx) => (
                                         <SpkCountrycard key={idx.id} states={idx.data} count={idx.visit} now={idx.now} color={idx.color} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between pb-0">
                               <div className="box-title">
                                Sales Growth Rate
                               </div>
                                   <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-icons ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle"
                                     Icon={true} IconClass="fe fe-more-vertical">
                                       <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                       <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                       <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                   </SpkDropdown>
                           </div>
                           <div className="box-body pb-1">
                                <div className="flex items-center p-4 bg-light rounded-sm">
                                    <div>
                                        <p className="mb-1 text-[13px]">Comparison: 2024 vs. 2023</p>
                                        <div className="text-textmuted dark:text-textmuted/50 text-xs mb-2">Increased By <span className="text-success"> 2.62%<i className="ti ti-arrow-narrow-up text-[16px]"></i></span></div>
                                        <h5 className="mb-0">20%</h5>
                                    </div>
                                    <div className="ms-auto">
                                        <div className="p-2 bg-primary/10 rounded-full">
                                            <div className="avatar-md avatar bg-primary svg-white avatar-rounded shadow-sm mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="sales-growth" className="mt-1">
                                    <Spkapexcharts chartOptions={Growthoptions} chartSeries={Growthseries} type="line" width="100%" height={170} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* <!--End::row-3 --> */}

                {/* <!-- Start::row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Visitors Statistics
                                </div>
                                <div className="flex flex-wrap">
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-dropdown-toggle hs-dropdown-toggle px-2 py-[0.26rem]"
                                          Toggletext="Sort By" Arrowicon={true} Customclass="my-1">
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap ti-custom-table-hover" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                 header={[{ title: 'Total Visitors' }, { title: 'Sessions Duration' }, { title: 'New Visitors' }, { title: 'Returning Visitors' }, { title: 'Bounce Rate' }, { title: 'Conversion Rate' }, { title: 'Average Session Duration' }, { title: 'Top Referral Sources' }]}>
                                    {Visitordata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td  className={`table-${idx.color}`}>{idx.total}</td>
                                            <td className={`table-${idx.color4}`}>{idx.duration}</td>
                                            <td>{idx.new}</td>
                                            <td className={`table-${idx.color5}`}>{idx.return}</td>
                                            <td className={`table-${idx.color1}`}>{idx.bounce}%</td>
                                            <td className={`table-${idx.color3}`}>{idx.conversion}%</td>
                                            <td className={`table-${idx.color5}`}>{idx.avg}</td>
                                            <td className={`table-${idx.color6}`}>{idx.top}
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
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
                {/* <!--End::row-4 --> */}
</Fragment>
);
};

export default Analytics;