"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import { Candaxisoptions, Candaxisseries, Candbasicoptions, Candbasicseries, CandeoptionsBar, Candlineoptions, Candlineseries, CandseriesBar, Candsyncedseries, Candsyncoptions } from "@/shared/data/charts/apexcharts/candlestickdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface CandlestickChartProps {}

const CandlestickChart : FC<CandlestickChartProps>  = () => {
return (
<Fragment>
    {/* <!-- Page Header --> */}
        <Seo title={"Candlesticks Charts"} />

        <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Candlestick Charts" activepage="Apex Candlestick Charts" />

    {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Basic Candlestick Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="candlestick-basic">
                                    <Spkapexcharts chartOptions={Candbasicoptions} chartSeries={Candbasicseries} type="candlestick" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Candlestick Synced With Brush Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="chart-candlestick">
                                     <Spkapexcharts chartOptions={Candsyncoptions} chartSeries={Candsyncedseries} type="candlestick" width={"100%"} height={215} />
                                </div>
                                <div id="chart-bar">
                                    <Spkapexcharts chartOptions={CandeoptionsBar} chartSeries={CandseriesBar} type="bar" width={"100%"} height={120} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Candlestick With Cateory X-axis</div>
                            </div>
                            <div className="box-body">
                                <div id="candlestick-categoryx">
                                    <Spkapexcharts chartOptions={Candaxisoptions} chartSeries={Candaxisseries} type="candlestick" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Candlestick With Line Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="candlestick-line">
                                    <Spkapexcharts chartOptions={Candlineoptions} chartSeries={Candlineseries} type="candlestick" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default CandlestickChart;