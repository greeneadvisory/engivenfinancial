import React, { Fragment } from 'react';
import Spkapexcharts from '../spk-packages/apexcharts-component';

interface Spkwidgetcard2componentProps {
    cardClass?: string;
    width?: number;
    height?: number;
    widgetCard?: any;
}

const Spkwidgetcard2component: React.FC<Spkwidgetcard2componentProps> = ({ cardClass, width, height, widgetCard }) => {
    return (
        <Fragment>
        <div className={`box ${cardClass}`}>
            <div className="box-body">
                <div className=" flex items-center justify-conent-between">
                    <div className="flex-auto">
                        <div className="flex justify-between mb-3">
                            <span className={`avatar avatar-rounded avatar-md bg-${widgetCard.color} svg-white`}>
                                 {widgetCard.svgIcon}
                            </span>
                        </div>
                        <p className="flex-auto text-textmuted dark:text-textmuted/50 text-[14px] mb-0">{widgetCard.total}</p>
                    </div>
                    <div id="chart-10" className=""><Spkapexcharts chartOptions={widgetCard.chartoptions} chartSeries={widgetCard.chartseries} type={widgetCard.type} width={width} height={height} /></div>
                </div>
                <div className="flex align-items-end justify-between">
                    <div className="text-2xl font-medium mb-0 flex items-center">{widgetCard.price}
                    </div>
                    <div className="text-textmuted dark:text-textmuted/50 text-[13px] text-end ms-auto">
                    {widgetCard.inc} By <span className={`text-${widgetCard.color1}`}>{widgetCard.percent}%<i
                                className={`ti ti-arrow-narrow-${widgetCard.icon} fs-16`}></i>
                        </span></div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Spkwidgetcard2component;
