"use client"
import Spkcardscomponent from "@/shared/@spk-reusable-components/dashboards/spk-cards";
import SpkActivityCard from "@/shared/@spk-reusable-components/dashboards/spk-ecommerceactivity";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Ecommercecard, Newlydata, Orderoptions, Orderseries, Payment, Recentactivity, Reportoptions, Reportseries, tableData, TopSellingdata, Visitoroptions, Visitorseries } from "@/shared/data/dashboard/ecommercedata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface EcommerceProps {}

const Ecommerce : FC<EcommerceProps>  = () => {
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Dashboards-Ecommerce" />

                <Pageheader title="Dashboards" currentpage="Ecommerce" activepage="Ecommerce" />
            {/* <!-- End::page-header --> */}
          {/* <!-- Start: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-3 col-span-12">
                                {Ecommercecard.map((idx) => (
                                    <Spkcardscomponent textbefore={false} textafter={true} key={idx.id} svgIcon={idx.svgIcon} cardClass='overflow-hidden main-content-card' 
                                     headingClass='flex-auto text-[13px]' mainClass='flex justify-between' card={idx} badgeClass="md" dataClass="text-[23px] mb-0" />
                                ))}
                            </div>
                            <div className="xl:col-span-9 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">Sales Report</div>
                                        <div className="flex gap-2">
                                            <div className="ti-btn ti-btn-sm ti-btn-outline-light">Today</div>
                                            <div className="ti-btn ti-btn-sm ti-btn-outline-light">Weakly</div>
                                            <div className="ti-btn ti-btn-sm ti-btn-light">Yearly</div>
                                        </div>
                                    </div>
                                    <div className="box-body pb-2">
                                        <div id="sales-report">
                                            <Spkapexcharts chartOptions={Reportoptions} chartSeries={Reportseries} type="line" width={"100%"} height={397} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-8 xl:col-span-7 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between">
                                        <div className="box-title">Recent Orders</div>
                                        <Link scroll={false} href="#!"
                                            className="ti-btn ti-btn-outline-light border ti-btn-sm flex items-center !text-textmuted dark:text-textmuted/50">
                                            View All
                                        </Link>
                                    </div>
                                    <div className="box-body p-0 pt-1">
                                        <div className="table-responsive">
                                        <Spktables tableClass='ti-custom-table ti-custom-table-head ti-custom-table-hover' tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                         header={[{ title: 'Order ID' }, { title: 'Customer' }, { title: 'Date' }, { title: 'Amount' }, { title: 'Status' }]} >
                                            {tableData.map((row, index) => (
                                                <tr key={index}  className="border-b  !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <Link scroll={false} href="#!" className="text-primary">
                                                            {row.id}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2 leading-none">
                                                                <span className="avatar avatar-sm">
                                                                    <img src={row.imageSrc} alt={row.name} />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="#!" className="text-[14px] font-medium">
                                                                    {row.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="block text-textmuted dark:text-textmuted/50">{row.date}</span>
                                                    </td>
                                                    <td>
                                                        <span className="block mb-1">{row.amount}</span>
                                                    </td>
                                                    <td>
                                                        <SpkBadge variant={`${row.color}/10`} customClass={`text-${row.color}`}>
                                                            {row.status}
                                                        </SpkBadge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </Spktables>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-4 xl:col-span-5 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">Total Orders
                                        </div>
                                            <SpkDropdown Toggletext="View All" Arrowicon={true} CustomToggleclass="ti-btn ti-btn-outline-light border flex items-center !text-textmuted dark:text-textmuted/50 ti-dropdown-toggle ti-btn-sm hs-dropdown-toggle"
                                                Menulabel="dropdownMenuButton1">
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Yearly</Link>
                                                </li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Monthly
                                                    </Link>
                                                </li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Weakly</Link>
                                                </li>
                                            </SpkDropdown>
                                    </div>
                                    <div className="box-body">
                                        <div
                                            className="flex justify-between items-center text-center bg-light p-4 rounded-sm order-content">
                                            <div>
                                                <p className="mb-1">Total Orders</p>
                                                <h4 className="text-primary mb-0">12,500</h4>
                                            </div>
                                            <div>
                                                <p className="mb-1 text-center">Overall Growth from Last Year</p>
                                                <h5 className="text-success mb-0 text-center">+15%</h5>
                                            </div>
                                        </div>
                                        <div id="total-orders">
                                             <Spkapexcharts chartOptions={Orderoptions} chartSeries={Orderseries} type="radialBar" width={"100%"} height={290} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xxl:col-span-5  col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between flex-wrap pb-0">
                                        <div className="box-title">
                                            New Visitors
                                        </div>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-outline-light ti-btn-icons ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle !mb-0"
                                              Icon={true} IconClass="fe fe-more-vertical">
                                                <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item"
                                                        href="#!">Today</Link></li>
                                                <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item"
                                                        href="#!">This Week</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link>
                                                </li>
                                            </SpkDropdown>
                                    </div>
                                    <div className="box-body !pb-0">
                                        <div className="grid grid-cols-12 sm:gap-x-6 align-items-end mx-0">
                                            <div className="col-span-5">
                                                <h3 className="font-medium mb-0">5,642</h3>
                                                <div><i
                                                        className="ri-checkbox-blank-circle-fill text-primary leading-none align-middle text-[10px]"></i>
                                                    Total New Visitors</div>
                                            </div>
                                            <div className="col-span-7">
                                                <div className="font-medium">Percentage of New Visitors</div>
                                                <div className="text-textmuted dark:text-textmuted/50 text-xs">Last 30 Days:
                                                    Increased By <span className="text-success font-medium">42.5%<i
                                                            className="ti ti-arrow-narrow-up text-[16px]"></i></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body p-0">
                                        <div id="websitedesign">
                                            <Spkapexcharts chartOptions={Visitoroptions} chartSeries={Visitorseries} type="bar" width={"100%"} height={190} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-3 md:col-span-6 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Payment Methods
                                        </div>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-outline-light ti-btn-icons ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle !mb-0"
                                             Icon={true} IconClass="fe fe-more-vertical">
                                                <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item"
                                                        href="#!">Today</Link></li>
                                                <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item"
                                                        href="#!">This Week</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link>
                                                </li>
                                            </SpkDropdown>
                                    </div>
                                    <div className="box-body p-0">
                                        <ul className="ti-list-group list-group-flush !rounded-none !border-t-0">
                                            {Payment.map((idx) => (
                                                <li className="ti-list-group-item flex justify-between items-center" key={idx.id}>
                                                    <div>
                                                        <i className={`${idx.icon} p-1 bg-${idx.color}/10 text-${idx.color} color-transparent leading-none me-2 text-[22px] rounded-sm`}></i>
                                                       {idx.title}
                                                    </div>
                                                    <SpkBadge variant="primary" customClass="leading-none rounded-full">{idx.percent}</SpkBadge>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between pb-3">
                                        <div className="box-title">
                                            Traffic Sources
                                        </div>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-sm !text-textmuted dark:text-textmuted/50 !mb-0"
                                             Toggletext="View All" Arrowicon={true}>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link>
                                                </li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link>
                                                </li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link>
                                                </li>
                                            </SpkDropdown>
                                    </div>
                                    <div className="box-body p-0">
                                        <div className="table-responsive">
                                            <Spktables tableClass='ti-custom-table ti-custom-table-head ti-custom-table-hover' header={[{ title: 'Browser' }, { title: 'Traffic' }, { title: 'Sessions' }]} >
                                                    <tr
                                                        className="border-b  !border-defaultborder dark:!border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className="avatar  avatar-sm p-2 bg-primarytint3color/10 !text-primarytint3color me-2">
                                                                    <i className="ri-chrome-line text-lg"></i>
                                                                </span>
                                                                <div className="font-medium">Chrome</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primarytint3color"
                                                                    role="progressbar" style={{width: "78%"}}
                                                                    aria-valuenow={78} aria-valuemin={0}
                                                                    aria-valuemax={100}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>15,248<i
                                                                    className="ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"></i></span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        className="border-b  !border-defaultborder dark:!border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className="avatar avatar-sm p-2 bg-primarytint2color/10 !text-primarytint2color me-2">
                                                                    <i className="ri-safari-line text-lg"></i>
                                                                </span>
                                                                <div className="font-medium">Safari</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primarytint2color"
                                                                    role="progressbar" style={{width: "56%"}}
                                                                    aria-valuenow={56} aria-valuemin={0}
                                                                    aria-valuemax={100}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>22,945<i
                                                                    className="ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"></i></span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        className="border-b  !border-defaultborder dark:!border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className="avatar avatar-sm p-2 bg-primarytint1color/10 !text-primarytint1color me-2">
                                                                    <i className="ri-opera-line text-lg"></i>
                                                                </span>
                                                                <div className="font-medium">Opera</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primarytint1color"
                                                                    role="progressbar" style={{width: "62%"}}
                                                                    aria-valuenow={62} aria-valuemin={0}
                                                                    aria-valuemax={100}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>32,453<i
                                                                    className="ri-arrow-down-s-fill ms-1 text-danger align-middle text-lg"></i></span>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b  !border-defaultborder dark:!border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <span
                                                                    className="avatar  avatar-sm p-2 bg-secondary/10 !text-secondary me-2">
                                                                    <i className="ri-edge-fill text-lg"></i>
                                                                </span>
                                                                <div className="font-medium">Edge</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                                    role="progressbar" style={{width: "45%"}}
                                                                    aria-valuenow={45} aria-valuemin={0}
                                                                    aria-valuemax={100}>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>9,886<i
                                                                    className="ri-arrow-up-s-fill ms-1 text-success align-middle text-lg"></i></span>
                                                        </td>
                                                    </tr>
                                            </Spktables>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box offer-card">
                            <div className="box-body p-6">
                                <div className="flex align-items-end gap-2">
                                    <div className="offer-card-details">
                                        <div className="offer-item">
                                            <img src="../../assets/images/media/media-90.png" alt="Product Image"
                                                className="img-fluid offer-item-img"/>
                                            <div className="avatar avatar-xl">
                                                <img src="../../assets/images/ecommerce/png/17.png" alt="Product Image"
                                                    className="img-fluid"/>
                                            </div>
                                            <div className="product-info">
                                                <h4 className="mb-2 font-medium text-white">Today's Sale</h4>
                                                <span className="mb-1 text-success font-semibold text-xs">Up to 20% Off
                                                    on</span>
                                                <span className="mb-3 text-white h6"> HeadPhones</span>
                                            </div>
                                            <span className="text-white">Price: $9.99</span>
                                            <span className="text-white ps-2">Discount: 20%</span>
                                        </div>
                                        <SpkButton customClass="ti-btn text-white bg-primarytint1color mt-6 shadow">Add to
                                            Cart</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Top-Selling Products</div>
                                <Link scroll={false} href="#!"
                                    className="ti-btn ti-btn-outline-light border flex items-center text-textmuted dark:text-textmuted/50 text-xs px-2 py-[0.26rem]">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none mb-0 topselling-products-list" id="product-list">
                                    {TopSellingdata.map((idx) => (
                                        <li className="" key={idx.id}>
                                            <div className="flex items-center flex-wrap">
                                                <div className="me-3 leading-none">
                                                    <span className="avatar avatar-lg bg-gray-200 dark:bg-light">
                                                        <img src={idx.src} alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="text-[14px] block mb-0 font-medium">{idx.header}</span>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs">{idx.data}</span>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 text-[14px] font-medium">{idx.price}</p>
                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 text-[14px]">{idx.sales}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header justify-between pb-0">
                                <div className="box-title"> Recent Activity </div>
                                    <SpkDropdown Linktag={true} Linkclass="text-xs text-textmuted dark:text-textmuted/50 bg-light rounded ti-btn ti-btn-sm ti-btn-light"
                                      Toggletext="View All" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <ul className="list-none mb-0 ecommerce-recent-activity">
                                {Recentactivity.map((activity) => (
                                    <li className="ecommerce-recent-activity-content" key={activity.Id}>
                                        <SpkActivityCard productactivity={activity} />
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Newly Added Products
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div> <input className="form-control form-control-sm" type="text"
                                            placeholder="Search Here" aria-label=".form-control-sm example"/> </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-primary ti-btn-sm !m-0 btn-wave waves-effect waves-light"
                                         Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                  header={[{ title: 'Product Id' }, { title: 'Product Name' }, { title: 'Category' }, { title: '% Discount' }, { title: 'Price' }, { title: 'Status' }, { title: 'Added Date' }, { title: 'Actions' }]}>
                                    {Newlydata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                <span className="font-medium">{idx.product}</span>
                                            </td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md bg-light">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="text-[14px]">{idx.prdtname}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-medium">{idx.category}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary" customClass="leading-none">{idx.discount}%</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.price}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <span className="font-medium">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkOverlay customClass="[--placement:top]">
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-soft-secondary">
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
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-soft-info">
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
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-soft-primary2">
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
                                                <li className="page-item"><Link scroll={false} className="page-link"
                                                        href="#!">2</Link></li>

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
                {/* <!-- End:: row-2 --> */}
</Fragment>
);
};

export default Ecommerce;