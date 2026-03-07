import React from 'react';
import Spkapexcharts from '../spk-packages/apexcharts-component';

interface SpkCard1ComponentProps {

    width?: string | number;
    height?: string | number;
    card?: any;
}

const SpkCard1Component: React.FC<SpkCard1ComponentProps> = ({ width, height, card }) => {

    return (
        <div className="box overflow-hidden">
            <div className="box-body pb-0 pe-0">
                <div className="mb-4">
                    <div className="flex justify-between flex-wrap">
                        <span className={`avatar avatar-rounded bg-${card.color} svg-white`}>
                            <i className={`bx ${card.Icon} text-[22px]`}></i>
                        </span>
                        <span className="font-medium text-[13px] text-textmuted dark:text-textmuted/50 pe-3">{card.title}</span>
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <div className="pb-3">
                        <span className="text-[20px] font-medium mb-0 flex items-center">{card.value}
                        </span>
                        <div className="text-textmuted dark:text-textmuted/50 text-[13px]">{card.Inc} </div>
                        <span className={`text-${card.Inc.includes("Decreased")? "danger":"success"}`}>{card.percentageChange}%
                            <i className={`ti ti-${card.Icon1} text-[16px]`}></i></span>
                    </div>
                    <div id="chart-21">
                        <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} height={height} width={width} type={card.type} />
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default SpkCard1Component;
