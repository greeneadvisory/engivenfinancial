import Spkapexcharts from '@/shared/@spk-reusable-components/spk-packages/apexcharts-component';
import React, { Fragment } from 'react';

interface StockCardProps {
    width: string | any;
    height?: string | any;
    stock?: any;
}

const SpkStockCard: React.FC<StockCardProps> = ({ width, height, stock }) => {
    return (
        <Fragment>
              <div className="box overflow-hidden">
                    <div className="box-body">
                        <div className="flex gap-2 flex-wrap items-start justify-between">
                            <div className="flex flex-auto items-center">
                                <div className="me-2">
                                    <span className={`avatar avatar-rounded bg-${stock.color}/10 p-2 avatar-sm`}>
                                        <i className={stock.icon}></i>
                                    </span>
                                </div>
                                <div className="">
                                    <span className="block text-defaulttextcolor text-[14px]">{stock.name}</span>
                                </div>
                            </div>
                            <div className="text-xs text-end">
                                <span className={`block ${stock.changeColor}`}>{stock.change}</span>
                                <span className="block font-medium text-[14px]">{stock.symbol}</span>
                            </div>
                        </div>
                        <div className="flex flex-auto align-items-end gap-2 justify-between">
                            <div className='mb-1'>
                                <span className="block text-textmuted dark:text-textmuted/50">Current Value:</span>
                                <span className="block ms-auto text-[15px] font-medium">{stock.currentValue}
                                   <i className={`ri-arrow-${stock.icon1}-s-fill ${stock.changeColor} leading-none align-middle text-xl ms-1`}></i>
                                </span>
                            </div>
                            <div id="stock-1" className="stock-sparkline-charts">
                                <Spkapexcharts
                                    chartOptions={stock.chartOptions}
                                    chartSeries={stock.chartSeries}
                                    type={stock.type}
                                    width={width}
                                    height={height}
                                />
                            </div>
                        </div>
                    </div>
                </div>
           
        </Fragment>
    );
}

export default SpkStockCard;
