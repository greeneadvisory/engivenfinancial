import React, { Fragment } from 'react';
import Spkapexcharts from '../spk-packages/apexcharts-component';
import SpkBadge from '../uielements/spk-badge';

interface SpkMarketcapProps {
  showPriceInfo?: boolean;
  showChangeInfo?: boolean;
  displaySection?: 'chart1' | 'chart2';
  charts?: any;
  series?: any;
  type?: string;
  width?: number;
  height?: number;
  cardClass?: string;
  mainClass?: string;
  className?: string;
  classNames?: string;
  classData?: string;
  obj?: any;
}

const SpkMarketcap: React.FC<SpkMarketcapProps> = ({ cardClass, mainClass, className, classNames, showPriceInfo, showChangeInfo, displaySection, classData, charts, series, type, width, height, obj }) => {
  return (
    <Fragment>
      <div className={`box ${cardClass}`}>
            <div className="box-body">
                <div className={mainClass}>
                    <div className={className}>
                      <div>
                          <div className={classNames}>
                              <div className={classData}>
                                  <span className="avatar avatar-rounded avatar-md">
                                      <img src={obj.img} alt=""/>
                                  </span>
                              </div>
                              <div>
                                  <h6 className="font-medium mb-0">{obj.title}</h6>
                                  <span className="text-textmuted dark:text-textmuted/50">  {obj.rank}</span>
                              </div>
                          </div>
                          {showPriceInfo && (
                            <div>
                              <div className="mb-1">
                                <span className="text-xl font-medium leading-none text-primary mb-1">{obj.price}</span>
                                <span className="mb-0 text-textmuted dark:text-textmuted/50 ms-2">
                                  <span className="text-textmuted dark:text-textmuted/50">Vol:</span>
                                  <span className={`text-${obj.volumeChange.includes("+")? "success" :"danger"} font-medium`}> {obj.volumeChange}</span>
                                </span>
                              </div>
                              <p className="font-medium mb-0">
                                {obj.amount} <span className="mb-1 font-normal text-[13px] text-textmuted dark:text-textmuted/50">{obj.data}</span>
                              </p>
                            </div>
                          )}
                          {showChangeInfo && (
                              <div className="text-2xl flex items-center font-medium">
                                {obj.changePercent}
                                <span className={`text-xs text-primarytint1color opacity-70 font-normal ms-1`}>
                                  {obj.changeValues}
                                  <i className={`ti ti-arrow-big-${obj.changeValues.includes("+")? "up": "down"}-line ms-1 d-inline-flex`}></i>
                                </span>
                                <SpkBadge customClass={`bg-${obj.changeValues.includes("+")? "success": "danger"} text-[10px] ms-2`}>24H</SpkBadge>
                              </div>
                            )}
                        </div>
                    </div>
                    <div className="text-end ms-auto">
                      {displaySection === 'chart1' && (
                          <div>
                            <div className="mb-4">
                              <p className="tx-14 mb-1 font-semibold text-dark">{obj.marketData}</p>
                              <p className="mb-0 text-[14px]">
                                {obj.price1}
                                <span className={`text-success mb-0 font-weight-normal tx-13`}>
                                  {obj.percent}<span className={`text-${obj.percent.includes("+")? "success" :"danger"}   numberfont`}>{obj.increment}</span>
                                </span>
                              </p>
                            </div>
                            <div id={obj.id}>
                              <Spkapexcharts chartOptions={charts} chartSeries={series} type={type} width={width} height={height} />
                            </div>

                          </div>
                        )}
                        {displaySection === 'chart2' && (
                            <div className="text-end ms-auto">
                              <div className="d-inline-flex">
                                <span className={`text-[15px] text-primary`}>{obj.price2}</span>
                                <span className={`text-success ms-1 inline-block`}>{obj.price3}</span>
                              </div>
                              <div id={obj.id} className="mt-4 w-full">
                                <Spkapexcharts chartOptions={charts} chartSeries={series} type={type} width={width} height={height} />
                              </div>
                            </div>
                          )}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
};

export default SpkMarketcap;
