import React, { Fragment } from 'react'

interface Spkwidgetcard5componentprops {
    cardClass?: string;
    heading?: string;
    price?: string;
    price1?: string;
    Inc?: string;
    percent?: string;
    color?: string;
    icon?: string;
    icon1?: string;
    color1?: string;
}
const Spkwidgetcard5component: React.FC<Spkwidgetcard5componentprops> = ({ cardClass, heading, price, price1, Inc, percent, color, icon, icon1, color1 }) => {
    return (
        <Fragment>
             <div className={`box overflow-hidden ${cardClass}`}>
                <div className="widget-card">
                    <div className="flex items-start text-white flex-wrap px-2">
                        <div className="grow text-center">
                            <div className="mt-2 items-center justify-conent-between text-[21px] mb-1">
                                <span>{heading}</span>
                                <span className="min-w-fit-content text-[10px] ms-1 "></span>
                            </div>
                            <div className="flex items-center justify-conent-between">
                                <span
                                    className="grow text-[1.875rem] font-semibold sale-font counter">{price}<span>
                                    </span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="flex items-center gap-2">
                        <div className="grow">
                            <div className="text-[21px] font-medium mb-1">{price1}</div>
                            <div className="grow text-[13px] mb-2">{Inc} By</div>
                            <span className={`text-xs text-${color1}`}><i
                                    className={`ti ${icon1}`}></i>{percent}%</span>
                        </div>
                        <span className={`avatar rounded-full bg-${color}/10 !text-${color} ms-auto`}>
                            <i className={`bx ${icon} text-xl`}></i>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spkwidgetcard5component