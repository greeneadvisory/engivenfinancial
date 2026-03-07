import React, { Fragment } from 'react';
import SpkBadge from '../uielements/spk-badge';
import Spkapexcharts from '../spk-packages/apexcharts-component';

interface Spkwidgetcard3Props {
    cardClass?: string;
    id?: string;
    type?: string;
    width?: number;
    height?: number;
    card?: any;
}

const Spkwidgetcard3component: React.FC<Spkwidgetcard3Props> = ({ cardClass, id, width, height, card }) => {
    return (
        <Fragment>
             <div className={`box ${cardClass}`}>
                    <div className="box-body">
                        <div className="flex align-items-end justify-between text-end gap-2">
                            <div>
                                <div id={id}>
                                <Spkapexcharts chartOptions={card.chartoptions} chartSeries={card.chartseries} type={card.type} width={width} height={height} />
                                </div>
                            </div>
                            <div className="text-end ms-auto">
                                <span className={`avatar avatar-sm bg-${card.color} mb-2`}>
                                    <i className={`ri-${card.icon} text-[1rem]`}></i>
                                </span>
                                <div
                                    className="flex-auto text-textmuted dark:text-textmuted/50 mt-2 text-[14px] mb-1">
                                    {card.total}</div>
                                <div className="h4 font-medium mb-0 flex items-center flex-wrap gap-2">4 {card.price} <SpkBadge variant="success/10" 
                                        customClass="!text-success text-[10px]"><i
                                            className={`ri-arrow-left-${card.icon1}-line`}></i>{card.percent}%</SpkBadge></div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
};

export default Spkwidgetcard3component;
