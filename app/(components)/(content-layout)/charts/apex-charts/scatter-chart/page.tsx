"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import { Scatterboptions, Scatterbseries, Scatterdateoptions, Scatterdateseries, Scatterfilloptions, Scatterfillseries } from "@/shared/data/charts/apexcharts/scatterchartdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface ScatterChartProps {}

const ScatterChart : FC<ScatterChartProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title={"Scatter Charts"} />

                <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Scatter Charts" activepage="Apex Scatter Charts" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Basic Scatter Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="scatter-basic">
                                    <Spkapexcharts chartOptions={Scatterboptions} chartSeries={Scatterbseries} type="scatter" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Datetime Scatter Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="scatter-datetime">
                                     <Spkapexcharts chartOptions={Scatterdateoptions} chartSeries={Scatterdateseries} type="scatter" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Image Fill Scatter Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="scatter-image">
                                    <Spkapexcharts chartOptions={Scatterfilloptions} chartSeries={Scatterfillseries} type="scatter" width={"100%"} height={320} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default ScatterChart;