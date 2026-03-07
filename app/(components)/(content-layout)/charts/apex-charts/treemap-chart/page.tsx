"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import { Treebasicoptions, Treebasicseries, Treecoloroptions, Treecolorseries, Treedisoptions, Treedisseries, Treemultioptions, Treemultiseries  } from "@/shared/data/charts/apexcharts/treemapdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface TreemapChartProps {}

const TreemapChart : FC<TreemapChartProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Treemap Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Treemap Charts" activepage="Apex Treemap Charts" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Basic Treemap Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="treemap-basic">
                                    <Spkapexcharts chartOptions={Treebasicoptions} chartSeries={Treebasicseries} type="treemap" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Multi Dimensional Treemap Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="treemap-multi">
                                     <Spkapexcharts chartOptions={Treemultioptions} chartSeries={Treemultiseries} type="treemap" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Distributed Treemap Chart</div>
                            </div>
                            <div className="box-body">
                                <div id="treemap-distributed">
                                    <Spkapexcharts chartOptions={Treedisoptions} chartSeries={Treedisseries} type="treemap" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Treemap with color ranges</div>
                            </div>
                            <div className="box-body">
                                <div id="treemap-colorranges">
                                    <Spkapexcharts chartOptions={Treecoloroptions} chartSeries={Treecolorseries} type="treemap" width={"100%"} height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default TreemapChart;