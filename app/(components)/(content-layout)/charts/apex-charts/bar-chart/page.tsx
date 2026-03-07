"use client"
import React, { FC, Fragment } from "react";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import { Barbasicoptions, Barbasicseries, Barchartoptions, Barchartseries, Bargroupoptions, Bargroupseries, Barimgoptions, Barimgseries, Barlabelseries, Barlableoptions, Barmakeroptions, Barmakerseries, Barpatternoptions, Barpatternseries, Barreverseoptions, Barreverseseries, Barstack1options, Barstackoptions, Barstackseries, Barstck1series } from "@/shared/data/charts/apexcharts/barchartdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";

interface BarChartProps {}

const BarChart : FC<BarChartProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title={"Bar Charts"} />

                <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Bar Charts" activepage="Apex Bar Charts" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Basic Bar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-basic">
                                   <Spkapexcharts chartOptions={Barbasicoptions} chartSeries={Barbasicseries} type="bar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Grouped Bar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-group">
                                    <Spkapexcharts chartOptions={Bargroupoptions} chartSeries={Bargroupseries} type="bar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Stacked Bar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-stacked">
                                    <Spkapexcharts chartOptions={Barstackoptions} chartSeries={Barstackseries} type="bar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">100% Stacked Bar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-full">
                                    <Spkapexcharts chartOptions={Barstack1options} chartSeries={Barstck1series} type="bar" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Bar Chart With Negative Values</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-negative">
                                   <Spkapexcharts chartOptions={Barchartoptions} chartSeries={Barchartseries} type="bar" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Bar Chart With Markers</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-markers">
                                     <Spkapexcharts chartOptions={Barmakeroptions} chartSeries={Barmakerseries} type="bar" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Reversed Bar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-reversed">
                                    <Spkapexcharts chartOptions={Barreverseoptions} chartSeries={Barreverseseries} type="bar" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Bar With Categogry DataLabels</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-categories">
                                    <Spkapexcharts chartOptions={Barlableoptions} chartSeries={Barlabelseries} type="bar" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Patterned Bar Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-pattern">
                                    <Spkapexcharts chartOptions={Barpatternoptions} chartSeries={Barpatternseries} type="bar" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Bar With Image Fill</div>
                            </div>
                            <div className="box-body">
                                <div id="bar-image">
                                     <Spkapexcharts chartOptions={Barimgoptions} chartSeries={Barimgseries} type="bar" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default BarChart;