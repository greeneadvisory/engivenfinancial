"use client"
import SpkEcharts from "@/shared/@spk-reusable-components/spk-packages/spk-echart";
import { Backoption, Backseries, Baroption, Barseries, Basicoption, Basicseries, Bubbleoption, Bubbleseries, Candleoption, Candleseries, Doughnutoption, Doughnutseries, Funneloption, Funnelseries, Gaugeoption, Gaugeseries, Graphoption, Graphseries, Heatoption, Heatseries, HoriStackoption, HoriStackseries, Horizontaloption, Horizontalseries, Lineoption, Lineseries, Negativeoption, Negativeseries, Pieoption, Pieseries, Radaroption, Radarseries, Scattoption, Scattseries, Smoothoption, Smoothseries, Stackareaoption, Stackareaseries, Stackoption, Stackseries, Stepoption, Stepseries, Styleoption, Styleseries, Treeoption, Treeseries, Wateroption, Waterseries } from "@/shared/data/charts/echartsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface EchartChartsProps {}

const EchartCharts : FC<EchartChartsProps>  = () => {
return (
<Fragment>
    {/* <!-- Page Header --> */}
        <Seo title={"Echarts"} />

        <Pageheader title="Charts" currentpage="Echart Charts" activepage="Echart Charts" />

    {/* <!-- Page Header Close --> */}
    {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Basic Line Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts  chartOptions={Lineoption} chartSeries={Lineseries} id="echart-basic-line" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Smoothed Line Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Smoothoption} chartSeries={Smoothseries} id="echart-smoothed-line" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Basic Area Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Basicoption} chartSeries={Basicseries} id="echart-area-line" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Stacked Line Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Stackoption} chartSeries={Stackseries} id="echart-stacked-line" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Stacked Area Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Stackareaoption} chartSeries={Stackareaseries} id="echart-stacked-area" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Step Line Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Stepoption} chartSeries={Stepseries} id="echart-step-line" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Basic Bar Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Baroption} chartSeries={Barseries} id="echart-bar-basic" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Bar With Background Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Backoption} chartSeries={Backseries} id="echart-bar-background" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Style For a Single Bar Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Styleoption} chartSeries={Styleseries} id="echart-bar-single" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Water Fall Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Wateroption} chartSeries={Waterseries} id="echart-waterfall" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Bar With Negative Values Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Negativeoption} chartSeries={Negativeseries} id="echart-negative-values" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Horizontal Bar Chart</div>
                    </div>
                    <div className="box-body">
                            <SpkEcharts chartOptions={Horizontaloption} chartSeries={Horizontalseries} id="echart-bar-horizontal" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Horizontal Stacked Bar Chart</div>
                    </div>
                    <div className="box-body">
                            <SpkEcharts chartOptions={HoriStackoption} chartSeries={HoriStackseries} id="echart-stacked-horizontal" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Pie Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Pieoption} chartSeries={Pieseries} id="echart-pie" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Doughnut Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Doughnutoption} chartSeries={Doughnutseries} id="echart-doughnut" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Basic Scatter Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Scattoption} chartSeries={Scattseries} id="echart-scatter" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Bubble Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Bubbleoption} chartSeries={Bubbleseries} id="echart-bubble" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Candlestick Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Candleoption} chartSeries={Candleseries} id="echart-candlestick" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Basic Radar Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Radaroption} chartSeries={Radarseries} id="echart-basic-radar" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Heatmap Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Heatoption} chartSeries={Heatseries} id="echart-heatmap" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Treemap Chart</div>
                    </div>
                    <div className="box-body">
                         <SpkEcharts chartOptions={Treeoption} chartSeries={Treeseries} id="echart-treemap" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Funnel Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Funneloption} chartSeries={Funnelseries} id="echart-funnel" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Basic Gauge Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Gaugeoption} chartSeries={Gaugeseries} id="echart-gauge-basic" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Simple Graph Chart</div>
                    </div>
                    <div className="box-body">
                        <SpkEcharts chartOptions={Graphoption} chartSeries={Graphseries} id="echart-simple-graph" mainClass="echart-charts" />
                    </div>
                </div>
            </div>
        </div>
    {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default EchartCharts;