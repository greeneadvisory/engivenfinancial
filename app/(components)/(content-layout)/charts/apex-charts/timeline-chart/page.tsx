"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import { Timeadvanceoptions, Timeadvanceseries, Timecoloroptions, Timecolorseries, Timedumbeloptions, Timedumbelseries, Timegroupoptions, Timegroupseries, Timelineoptions, Timelineseries, Timemultioptions, Timemultiseries } from "@/shared/data/charts/apexcharts/timelinechartdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface TimelineChartProps {}

const TimelineChart : FC<TimelineChartProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title={"Timeline Charts"} />

                <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Timeline Charts" activepage="Apex Timeline Charts" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Basic TImeline Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="timeline-basic">
                                    <Spkapexcharts chartOptions={Timelineoptions} chartSeries={Timelineseries} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Multiple Colored TImeline Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="timeline-colors">
                                     <Spkapexcharts chartOptions={Timecoloroptions} chartSeries={Timecolorseries} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Multi Series Timeline Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="timeline-multi">
                                    <Spkapexcharts chartOptions={Timemultioptions} chartSeries={Timemultiseries} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Advanced Timeline Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="timeline-advanced">
                                    <Spkapexcharts chartOptions={Timeadvanceoptions} chartSeries={Timeadvanceseries} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Timeline-Grouped Rows</div>
                            </div>
                            <div className="box-body">
                                <div id="timeline-grouped">
                                    <Spkapexcharts chartOptions={Timegroupoptions} chartSeries={Timegroupseries} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Dumbbell Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="dumbbell-chart">
                                    <Spkapexcharts chartOptions={Timedumbeloptions} chartSeries={Timedumbelseries} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default TimelineChart;