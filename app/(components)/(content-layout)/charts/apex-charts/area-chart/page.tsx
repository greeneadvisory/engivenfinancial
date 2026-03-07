"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import {Areabasicoptions, Areabasicseries, Areagithuboptions, Areagithubseries, Areanulloptions, Areanullseries, Areasplineoptions, Areasplineseries, Areastackoptions, Areastackseries, Areatimeoptions, Areatimeseries, Areavalueoptions, Areavalueseries, Dateoptions, Dateseries, optionsYears, seriesYears } from "@/shared/data/charts/apexcharts/areachartdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface AreaChartProps {}

const AreaChart : FC<AreaChartProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title={"Area Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Area Charts" activepage="Apex Area Charts" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Basic Area Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="area-basic">
                                    <Spkapexcharts chartOptions={Areabasicoptions} chartSeries={Areabasicseries} type="area" width={"100%"} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Spline Area Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="area-spline">
                                    <Spkapexcharts chartOptions={Areasplineoptions} chartSeries={Areasplineseries} type="area" width={"100%"} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Area Chart With Negative Values</div>
                            </div>
                            <div className="box-body">
                                <div id="area-negative">
                                    <Spkapexcharts chartOptions={Areavalueoptions} chartSeries={Areavalueseries} type="area" width={"100%"} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Selection-Github Style Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="chart-months">
                                        <Spkapexcharts chartOptions={Areagithuboptions} chartSeries={Areagithubseries} type="area" width={"100%"} height={130} />
                                </div>
                                <div className="github-style flex items-center">
                                    <div className="me-2">
                                        <img className="userimg rounded" src="../../../assets/images/faces/1.jpg"
                                            data-hovercard-user-id="634573" alt="" width="38" height="38"/>
                                    </div>
                                    <div className="userdetails leading-none">
                                        <a className="username font-medium text-[14px]">coder</a>
                                        <span className="cmeta block mt-1">
                                            <span className="commits"></span> commits
                                        </span>
                                    </div>
                                </div>
                                <div id="chart-years">
                                     <Spkapexcharts chartOptions={optionsYears} chartSeries={seriesYears} type="area" width={"100%"} height={140} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Stacked Area Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="area-stacked">
                                     <Spkapexcharts chartOptions={Areastackoptions} chartSeries={Areastackseries} type="area" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Irregular Time Series Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="area-irregular">
                                   <Spkapexcharts chartOptions={Areatimeoptions} chartSeries={Areatimeseries} type="area" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Area Chart With Null Values</div>
                            </div>
                            <div className="box-body">
                                <div id="area-null">
                                         <Spkapexcharts chartOptions={Areanulloptions} chartSeries={Areanullseries} type="area" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header flex">
                                <div className="box-title">Area Chart-Datetime X-Axis Chart</div>
                                <div className="btn-group ms-auto">
                                    <SpkButton Size="sm" variant="primary"  Id="one_month"  onclickfunc={()=>Dateoptions.updateData('one_month')} customClass={` ti-btn ${(Dateoptions.selection==='one_month' ? 'active' : '')}`}>1M</SpkButton>
                                    <SpkButton Size="sm" variant="primary"  Id="six_months"  onclickfunc={()=>Dateoptions.updateData('six_months')} customClass={` ti-btn ${(Dateoptions.selection==='six_months' ? 'active' : '')}`}>6M</SpkButton>
                                    <SpkButton Size="sm" variant="primary"  Id="one_year" onclickfunc={()=>Dateoptions.updateData('one_year')} customClass={` ti-btn ${(Dateoptions.selection==='one_year' ? 'active' : '')}`}>1Y</SpkButton>
                                    <SpkButton Size="sm" variant="primary"  Id="all"  onclickfunc={()=>Dateoptions.updateData('ytd')} customClass={` ti-btn ${(Dateoptions.selection==='ytd' ? 'active' : '')}`}>ALL</SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="area-datetime">
                                    <Spkapexcharts chartOptions={Dateoptions} chartSeries={Dateseries} type='area' height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default AreaChart;