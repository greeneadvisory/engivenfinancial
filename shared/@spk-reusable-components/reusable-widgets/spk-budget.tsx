import React, { Fragment } from 'react'
import SpkBadge from '../uielements/spk-badge';


interface Spkbudgetwidgetcomponentprops {
    Budget?: any;
    cardClass?: string;
}
const Spkbudgetwidgetcomponent: React.FC<Spkbudgetwidgetcomponentprops> = ({ Budget, cardClass }) => {
    return (
        <Fragment>
             <div className={`box ${cardClass}`}>
                <div className="box-body bg-primary m-4 rounded-md">
                    <div className="flex text-white gap-4 items-center flex-wrap">
                        <div className="avatar avatar-rounded avatar-lg bg-white/10 svg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                                viewBox="0 0 256 256">
                                <path
                                    d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[15px] mb-0 op-8">Today Budget</p>
                            <p className="text-lg font-semibold mb-0">$2,78,411</p>
                        </div>
                        <div className="text-white text-[13px] align-self-end ms-auto"><span
                                className="opacity-70">Increased By</span>
                            <SpkBadge variant="success" customClass="align-self-end ms-1 inline-block text-white text-[10px]"><i
                                    className="ri-arrow-right-up-line text-[11px]"></i>0.5</SpkBadge>
                        </div>

                    </div>
                </div>
                <div className="box-body p-0">
                    <ul className="ti-list-group list-group-flush !border-0 !rounded-none !border-t">
                    {Budget.map((item: any) => (
                        <li className="ti-list-group-item !p-[0.84rem]" key={item.id}>
                            <div className="flex items-start gap-4">
                                <div>
                                    <span
                                        className={`avatar avatar-rounded bg-${item.color}/10 !text-${item.color}`}><i
                                            className={`ti ti-${item.icon} text-[22px]`}></i></span>
                                </div>
                                <div className="flex-auto">
                                    <span className="mb-0 font-medium block">{item.total}</span>
                                    <span className="text-textmuted dark:text-textmuted/50 text-xs">{item.avg}r</span>

                                </div>
                                <div className="text-end">
                                    <span className={`text-${item.color} fs-medium text-xl`}>{item.price}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Spkbudgetwidgetcomponent