"use client"
import React, { FC, Fragment } from "react";

import dynamic from "next/dynamic";
const LineChart1 = dynamic(() => import('@/shared/data/charts/apexcharts/linechartsdata1'), { ssr: false });

interface LineChartProps {}

const LineChart : FC<LineChartProps>  = () => {
return (
<Fragment>
        
      {/* <!-- Start::row-1 --> */}
                    <LineChart1 />
        {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default LineChart;