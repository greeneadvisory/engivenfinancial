"use client"
import Spkbudgetwidgetcomponent from "@/shared/@spk-reusable-components/reusable-widgets/spk-budget";
import Spkrecentactivitycomponent from "@/shared/@spk-reusable-components/reusable-widgets/spk-recentactivity";
import Spkwidgetcardcomponent from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard";
import Spkwidgetscrad1component from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard1";
import Spkwidgetcard2component from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard2";
import Spkwidgetcard3component from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard3";
import Spkwidgetcard4component from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard4";
import Spkwidgetcard5component from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard5";
import Spkwidgetcard6component from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetcard6";
import Spkwidgetrevenuecomponent from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetrevenue";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import { Budgetdata, Cardsdata, Overviewoptions, Overviewseries, Recentdata, Revenu1data, Revenue1options, Revenue1series, Revenue2options, Revenue2series, Revenuedata, Salesoptions, SalesTseries, Topsaleoptions, Topsaleseries, Transactions, Visitoroptions, Visitorseries, widget3card, WidgetRoptions, WidgetRseries, Wudgetcard1 } from "@/shared/data/widgetsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface WidgetsProps {}

const Widgets : FC<WidgetsProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title={"Widgets"} />

                <Pageheader title="Widgets" currentpage="Widgets" activepage="Widgets" />

            {/* <!-- Page Header Close --> */}
                {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {Cardsdata.map((idx)=>(
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12" key={idx.id}>
                            <Spkwidgetcardcomponent cardClass='overflow-hidden' card={idx} type="area" width={120} height={50}  />
                        </div>
                    ))}
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {Wudgetcard1.map((idx) => (
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12" key={idx.id}>
                                <Spkwidgetscrad1component cardClass={`!border-${idx.color}/50 dark:!border-${idx.color}/50 border overflow-hidden main-content-card`} card={idx} />
                        </div>
                    ))}
                </div>
                {/* <!-- End::row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                {/* <!-- End:: row-3 --> */}

                {/* <!-- Start:: row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Sales Revenue
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="salerevenue">
                                    <Spkapexcharts chartOptions={WidgetRoptions} chartSeries={WidgetRseries} type="bar" width={"100%"} height={322} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header pb-0">
                                <div className="box-title">
                                    Total Sales
                                </div>
                            </div>
                            <div className="box-body p-0 widget-circle-chart">
                                <div id="circlechart">
                                <Spkapexcharts chartOptions={Salesoptions} chartSeries={SalesTseries} type="radialBar" width={"100%"} height={230} />
                                </div>
                            </div>
                            <div className="box-footer p-0 border-t border-block-start-dashed">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-12">
                                        <div className="p-4 ps-[3rem] flex gap-2 pb-0">
                                            <div>
                                                <span className="text-[14px] visit-gender male ms-1">Average Sales</span>
                                                <div className="mt-1">
                                                    <span className="text-xl font-medium">8,777</span>
                                                </div>
                                            </div>
                                            <div
                                                className="text-textmuted dark:text-textmuted/50 text-[13px] text-end ms-auto">
                                                Increased By
                                                <span className="text-success ms-1 inline-block">1.5%<i
                                                        className="ti ti-arrow-narrow-up text-[1rem]"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="p-4 ps-[3rem] flex gap-2">
                                            <div>
                                                <span className="text-[14px] visit-gender female">Average Profit</span>
                                                <div className="mt-1">
                                                    <span className="text-xl font-medium">$12,234</span>
                                                </div>
                                            </div>
                                            <div
                                                className="text-textmuted dark:text-textmuted/50 text-[13px] text-end ms-auto">
                                                Decreased By
                                                <span className="text-danger ms-1 inline-block">0.6%<i
                                                        className="ti ti-arrow-narrow-down text-[1rem]"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                        <Spkwidgetrevenuecomponent cardClass='overflow-hidden' data={Revenuedata} />

                    </div>
                </div>
                {/* <!-- End:: row-4 --> */}

                {/* <!-- Start:: row-5 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {Revenu1data.map((card) => (
                        <div className="xl:col-span-3 col-span-12" key={card.id}>
                             <Spkwidgetcard2component cardClass='overflow-hidden' widgetCard={card} height={100} width={100} />

                        </div>
                    ))}
                </div>
                {/* <!-- End:: row-5 --> */}

                {/* <!-- Start:: row-6 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Sales Revenue
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="salerevenue1">
                                    <Spkapexcharts chartOptions={Revenue1options} chartSeries={Revenue1series} type="line" width={"100%"} height={315} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                        <Spkrecentactivitycomponent Recent={Recentdata} cardTitle='Recent Activity' />
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                        <Spkbudgetwidgetcomponent cardClass='overflow-hidden' Budget={Budgetdata} />

                    </div>
                </div>
                {/* <!-- End:: row-6 --> */}

                {/* <!-- Start:: row-7 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {widget3card.map((idx) => (
                        <div className="xl:col-span-3 col-span-12" key={idx.id}>
                             <Spkwidgetcard3component height={110} width={100} card={idx} />
                        </div>
                    ))}
                </div>
                {/* <!-- End:: row-7 --> */}

                {/* <!-- End:: row-8 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Total Visitors
                                </div>
                            </div>
                            <div className="box-body">

                                <div id="activecustomers">
                                    <Spkapexcharts chartOptions={Visitoroptions} chartSeries={Visitorseries} type="radialBar" width={"100%"} height={227} />
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="grid grid-cols-12 gap-x-6 mt-0">
                                    <div className="col-span-4">
                                        <h6 className="text-primary mb-1 font-medium">45K</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs">Apps</p>
                                    </div>
                                    <div className="col-span-4">
                                        <h6 className="text-primarytint1color mb-1 font-medium">35K</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs">Offline</p>
                                    </div>
                                    <div className="col-span-4">
                                        <h6 className="text-primarytint2color mb-1 font-medium">10K</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs">Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Sales Revenue
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="salerevenue2">
                                      <Spkapexcharts chartOptions={Revenue2options} chartSeries={Revenue2series} type="line" width={"100%"} height={288} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Top Sales
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="top-sales">
                                     <Spkapexcharts chartOptions={Topsaleoptions} chartSeries={Topsaleseries} type="line" width={"100%"} height={290} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-8 --> */}

                {/* <!-- End:: row-9 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 lg:col-span-6 col-span-12">
                         <Spkwidgetcard4component mainClass="online" icon='check-circle-fill ms-2' tooltip='Verified User' Img="../assets/images/faces/9.jpg" name='Daniel David' role='Web Designer' description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan accusant. ' btn1='Follow' btn='Message' />
                    </div>
                    <div className="xxl:col-span-3 lg:col-span-6 col-span-12">
                    <Spkwidgetcard6component cardTitle='Recent Transactions' shop={Transactions} view='View All Transactions' viewcolor='secondary' />
                    </div>
                    <div className="xxl:col-span-3 lg:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header pb-0">
                                <div className="box-title">
                                    Orders Overview
                                </div>
                            </div>
                            <div className="box-body px-0">
                                <div id="recent-orders"> <Spkapexcharts chartOptions={Overviewoptions} chartSeries={Overviewseries} type="radialBar" width={"100%"} height={170} /></div>
                                <div className="p-4 pt-0 pb-1">
                                    <div className="flex-auto flex gap-1 flex-wrap items-start justify-between">
                                        <div>
                                            <span className="text-xs mb-1 block font-medium">TOTAL ORDERS</span>
                                            <div className="flex items-center justify-between">
                                                <h5 className="mb-0 flex items-end">3,736<span
                                                        className="text-success text-xs ms-2 inline-flex items-center"><i
                                                            className="ti ti-trending-up align-middle me-1"></i>0.57%</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div className="avatar avatar-md bg-primary/10 !text-primary">
                                                <i className="ti ti-box text-xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 lg:col-span-6 col-span-12">
                         <Spkwidgetcard5component cardClass='overflow-hidden' heading='Monthly Budget' price1='$35,800' price='$78,985' color='primary' icon='bx-up-arrow-alt' percent='0.27' Inc='Increased' icon1="ti-arrow-narrow-up" color1="success" />
                    </div>
                </div>
                {/* <!-- End:: row-9 --> */}
</Fragment>
);
};

export default Widgets;