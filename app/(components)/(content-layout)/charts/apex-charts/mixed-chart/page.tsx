"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import {  Mixedareaoptions, Mixedareaseries, Mixedaxisoptions, Mixedaxisseries, Mixedcolumnoptions, Mixedcolumnseries, Mixedlineoptions, Mixedlineseries } from "@/shared/data/charts/apexcharts/mixedchartsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface MixedChartProps {}

const MixedChart : FC<MixedChartProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title={"Mixed Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Mixed Charts" activepage="Apex Mixed Charts" />

        {/* <!-- Page Header Close --> */}
       {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Line & Column Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="mixed-linecolumn">
                                    <Spkapexcharts chartOptions={Mixedlineoptions} chartSeries={Mixedlineseries} type="line" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Multiple Y-Axis Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="mixed-multiple-y">
                                    <Spkapexcharts chartOptions={Mixedaxisoptions} chartSeries={Mixedaxisseries} type="line" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Line & Area Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="mixed-linearea">
                                    <Spkapexcharts chartOptions={Mixedareaoptions} chartSeries={Mixedareaseries} type="line" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Line,Column & Area Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="mixed-all">
                                    <Spkapexcharts chartOptions={Mixedcolumnoptions} chartSeries={Mixedcolumnseries} type="line" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default MixedChart;