import React, { Fragment } from 'react';

interface SpkAnalyticsActiveProps {
    color?: string;
    icon?: string;
    header?: string;
    inc?: string;
    percent?: number | string;
    color1?: string;
    data?: string;
    imgSrc?: string;
    tiIcon? : string
    Liclass? : string
}

const SpkAnalyticsActive: React.FC<SpkAnalyticsActiveProps> = ({ color, icon, header, inc, Liclass, percent, color1, data, imgSrc, tiIcon }) => {
    return (
        <Fragment>
                <li className={Liclass}>
                    <div className="flex items-center gap-2">
                        <div>
                            <span className={`avatar avatar-md avatar-rounded bg-${color}/10 !text-${color}`}>
                                {imgSrc ? (
                                    <img src={imgSrc} alt={header} className="avatar-img" />
                                ) : (
                                    <i className={icon}></i>
                                )}
                            </span>
                        </div>
                        <div className="flex-auto">
                            <span className="block font-medium">{header}</span>
                            <span className="text-[13px] text-textmuted dark:text-textmuted/50">{inc}
                            <span className={`text-${color1} font-medium ms-1 inline-block`}>{percent}% 
                                <i className={`ti ti-arrow-narrow-${tiIcon}`}></i></span></span>
                        </div>
                        <div className="ms-auto">
                            <span className="block text-[15px] mb-0 font-medium">{data}</span>
                        </div>
                    </div>
                </li>

                
        </Fragment>
    );
};

export default SpkAnalyticsActive;
