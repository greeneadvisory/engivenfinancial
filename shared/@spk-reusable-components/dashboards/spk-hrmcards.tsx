import React, { Fragment } from 'react';
import Spkapexcharts from '../spk-packages/apexcharts-component';

interface SpkHrmcardProps {
    title?: string;
    price?: string;
    percent?: string;
    data?: string;
    color?: string;
    chartOptions?: any;
    chartSeries?: any;
    cardClass?: string;
    icon?: string;
    type?: string;
    width?: string;
    height?: number;
}

const SpkHrmcard: React.FC<SpkHrmcardProps> = ({ title, price, percent, data, color, chartOptions, chartSeries, cardClass = '', icon, type, height, width }) => {

    return (
        <Fragment>

            <div className={`box ${cardClass}`}>
                <div className="m-4 bg-light rounded-sm border border-defaultborder dark:border-defaultborder/10">
                    <div className="box-body pb-0 mb-0">
                        <div className="flex items-center w-full justify-between gap-1">
                            <div>
                                <p className="mb-1 text-textmuted dark:text-textmuted/50 font-medium">{title}</p>
                                <h4 className="mb-0 font-medium">{price}</h4>
                            </div>
                            <div className="ms-auto text-end">
                                <span className={`badge bg-${color}  rounded-full items-center text-[11px] inline-flex`}>
                                    <i className={`ri-arrow-left-${icon}-line text-[11px] me-1`}></i>{percent}</span>
                                <div className="text-textmuted dark:text-textmuted/50 text-xs mt-1">{data}</div>
                            </div>
                        </div>
                    </div>
                    <div id="employees">
                         <Spkapexcharts chartOptions={chartOptions} chartSeries={chartSeries} type={type} width={width} height={height}/>
                    </div>
                </div>
            </div>
           
        </Fragment>
    );
};

export default SpkHrmcard;
