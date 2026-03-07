"use client"
import Spksocialmediacardscomponent from "@/shared/@spk-reusable-components/dashboards/spk-socialmediacard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Audoptions, Audseries, Deviceoptions, Deviceseries, Performancedata, Socialcards, Suggestiondata } from "@/shared/data/dashboard/socialmedia";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface SocialMediaProps {}

const SocialMedia : FC<SocialMediaProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
        <Seo title="Dashboards-Socialmedia" />

        <Pageheader title="Dashboards" currentpage="Social Media" activepage="Social Media" />

        {/* <!-- End::page-header --> */}
         {/* <!-- Start::Row-1 --> */}
				<div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                             {Socialcards.map((idx) => (
                                <div className="xl:col-span-4 col-span-12" key={idx.id}>
                                    <Spksocialmediacardscomponent cardClass={idx.class} color1={idx.color1} app={idx.apps} data={idx.data} followers={idx.followers} percent={idx.percent} icon={idx.icon} color={idx.color} />
                                </div>
                             ))}
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title"> 
                                    Follow On Device
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body p-0">
                                <div className="grid grid-cols-12 p-4 pt-2">
                                    <div className="xl:col-span-6 col-span-12 px-0">
                                        <div id="follow-on-device"><Spkapexcharts chartOptions={Deviceoptions} chartSeries={Deviceseries} type="donut" width={"100%"} height={155} /></div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <ul className="ti-list-group list-group-flush border border-t mt-3">
                                            <li className="ti-list-group-item">
                                                <div className="flex items-start justify-between">
                                                    <div className="session-type leading-none mobile">
                                                        <div className="font-medium mb-0">Mobile</div>
                                                        <span className="text-xs text-textmuted dark:text-textmuted/50 leading-[1.2rem]">Increased By<span className="text-success text-xs ms-1 font-medium inline-block">1.67%</span></span>
                                                    </div>
                                                    <div className="leading-none text-end">
                                                        <span className="block text-xs text-textmuted dark:text-textmuted/50 mb-1">Total</span>
                                                        <span className="block font-semibold mb-0">1,754</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="flex items-start justify-between">
                                                    <div className="session-type leading-none tablet">
                                                        <div className="font-medium mb-0">Tablet</div>
                                                        <span className="text-xs text-textmuted dark:text-textmuted/50 leading-[1.2rem]">Increased By<span className="text-success text-xs ms-1 font-medium inline-block">0.46%</span></span>
                                                    </div>
                                                    <div className="leading-none text-end">
                                                        <span className="block text-xs text-textmuted dark:text-textmuted/50 mb-1">Total</span>
                                                        <span className="block font-semibold mb-0">1,234</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="flex items-start justify-between">
                                                    <div className="session-type desktop leading-none">
                                                        <div className="font-medium mb-0">Desktop</div>
                                                        <span className="text-xs text-textmuted dark:text-textmuted/50 leading-[1.2rem]">Decresed By<span className="text-danger text-xs ms-1 font-medium inline-block">3.43%</span></span>
                                                    </div>
                                                    <div className="leading-none text-end">
                                                        <span className="block text-xs text-textmuted dark:text-textmuted/50 mb-1">Total</span>
                                                        <span className="block font-semibold mb-0">878</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				{/* <!-- End::Row-1 -->

				<!-- Start::Row-2 --> */}
				<div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Suggestions
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none personal-favourite mb-0">
                                    {Suggestiondata.map((idx) => (
                                        <li key={idx.id}>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm">
                                                        <img src={idx.src} alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="font-medium block mb-0">{idx.data}</span>
                                                    <span className="text-textmuted dark:text-textmuted/50 block text-xs">{idx.data1}</span>
                                                </div>
                                                <div className="ms-auto">
                                                    <SpkButton Label="buton" buttontype="button" Size="sm" customClass="ti-btn ti-btn-icon bg-primary text-white"><i className="ri-user-add-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between flex-wrap">
                                <div className="box-title">
                                    Audience Statistics
                                </div>
                                <div className="flex gap-2">
                                    <div className="ti-btn ti-btn-outline-light ti-btn-full ti-btn-sm">Today</div>
                                    <div className="ti-btn ti-btn-outline-light ti-btn-full ti-btn-sm">Weakly</div>
                                    <div className="ti-btn bg-light ti-btn-full ti-btn-sm">Yearly</div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="audience" className=""><Spkapexcharts chartOptions={Audoptions} chartSeries={Audseries} type="line" width={"100%"} height={330} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Requests
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none personal-favourite mb-0">
                                    {Suggestiondata.map((idx) => (
                                        <li key={idx.id}>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm">
                                                        <img src={idx.src}   alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto truncate">
                                                    <span className="font-medium block mb-0">{idx.data}</span>
                                                    <span className="text-textmuted dark:text-textmuted/50 block text-xs w-75 truncate">want's to add you as a friend </span>
                                                </div>
                                                <div className="flex text-nowrap ms-auto">
                                                    <SpkButton variant="" Size="sm" Label="buton" buttontype="button" customClass="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-success me-2">
                                                        <i className="ri-check-line"></i>
                                                    </SpkButton>
                                                    <SpkButton variant="" Size="sm" Label="buton" buttontype="button" customClass="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-danger me-0">
                                                        <i className="ri-close-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
				</div>
				{/* <!-- End::Row-2 -->

				<!-- Start::Row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Social Media Performance
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here"/>
                                    </div>
                                    <div className="ti-dropdown hs-dropdown">
                                        <Link scroll={false} href="#!" className="ti-btn bg-primary text-white ti-btn-sm !m-0 btn-wave waves-effect waves-light" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> 
                                        </Link>
                                        <ul className="ti-dropdown-menu hs-dropdown-menu hidden" role="menu">
                                            <li><a className="ti-dropdown-item" href="#!">New</a></li>
                                            <li><a className="ti-dropdown-item" href="#!">Popular</a></li>
                                            <li><a className="ti-dropdown-item" href="#!">Relevant</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                 header={[{ title: 'Date' }, { title: 'Platform' }, { title: 'Likes' }, { title: 'Comments' }, { title: 'Shares' }, { title: 'Impressions' },
                                   { title: 'Engaged (%)' }, { title: 'Followers' }, { title: 'Following' }]}>
                                    {Performancedata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                {idx.date}
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <span className={`avatar avatar-sm bg-${idx.color}/10 !text-${idx.color} `}>
                                                        <i className={`ri-${idx.icon} text-[1rem]`}></i>
                                                    </span>
                                                    <span className="font-medium">{idx.platform}</span>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.likes}
                                            </td>
                                            <td>
                                                {idx.comments}
                                            </td>
                                            <td>
                                                {idx.shares}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color1}/10`} customClass={`text-${idx.color1}`}>{idx.impressions}</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.engaged}%
                                            </td>
                                            <td>
                                                {idx.followers}
                                            </td>
                                            <td>
                                                {idx.following}
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer border-t-0"> 
                                <div className="flex items-center flex-wrap"> 
                                    <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="ti-pagination mb-0 flex-wrap">
                                                <li className="page-item disabled">
                                                    <Link scroll={false} className="page-link" href="#!">
                                                        Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item "><a className="page-link active"
                                                        href="#!">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                                
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
				{/* <!-- End::Row-3 --> */}
</Fragment>
);
};

export default SocialMedia;