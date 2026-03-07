import React, { Fragment } from 'react'


interface SpkwidgetrevenuecomponentProps {
    data?: any;
    cardClass?: string;
}

const Spkwidgetrevenuecomponent: React.FC<SpkwidgetrevenuecomponentProps> = ({ data, cardClass }) => {

    return (
        <Fragment>
               <div className={`box overflow-hidden ${cardClass}`}>
                    <div className="box-header">
                        <div className="box-title">
                            Total Revenue
                        </div>
                    </div>
                    <div className="box-body">
                        <div className="flex items-center mb-3 gap-2">
                            <h3 className="font-medium mb-0">$5,874.28</h3>
                            <div className="text-textmuted dark:text-textmuted/50 text-[13px] text-end ms-auto">
                                Increased By
                                <span className="text-success ms-1 inline-block">0.5%<i
                                        className="ti ti-arrow-narrow-up text-[1rem]"></i></span>
                            </div>
                        </div>
                        <div className="progress-stacked progress-lg mb-2 flex">
                            <div className="progress-bar progress-bar-striped w-[30%]" role="progressbar"
                                aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                            <div className="progress-bar progress-bar-striped bg-primarytint1color !rounded-none w-[20%]"
                                role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                            <div className="progress-bar progress-bar-striped bg-primarytint2color !rounded-none w-[23%]"
                                role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                            <div className="progress-bar progress-bar-striped bg-primarytint3color !rounded-s-none !rounded-md w-[27%]"
                                role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer p-0">
                        <ul className="ti-list-group list-group-flush !border-0">
                            {data.map((item: any, index:any) => (
                                <li className="ti-list-group-item" key={index}>
                                    <div className="flex items-center">
                                        <div className="flex-auto items-center">
                                            <div className="flex items-top justify-between">
                                                <div>
                                                    <p className="mb-1 text-textmuted dark:text-textmuted/50 flex items-center">
                                                        <i  className={`ti ti-point-filled text-xl text-${item.color} me-2 bg-${item.color}/10 rounded-full`}></i>{item.revenue}</p>
                                                    <h6 className="mb-0 leading-none font-medium ms-4 ps-1">{item.price}</h6>
                                                </div>
                                                <div
                                                    className="text-textmuted dark:text-textmuted/50 text-[13px] text-end ms-auto">
                                                   {item.inc} By
                                                    <span className={`text-${item.color1} ms-1 inline-block`}>{item.percent}%<i
                                                            className={`ti ti-arrow-narrow-${item.icon} text-[1rem]`}></i>
                                                    </span>
                                                </div>
                                            </div>
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

export default Spkwidgetrevenuecomponent