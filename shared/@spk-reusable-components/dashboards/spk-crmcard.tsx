import React, { Fragment } from 'react';

interface SpkCrmcardProps {
    cardClass?: string;
    bodyClass?: string;
    color?: string;
    svgIcon?: React.ReactNode;
    title?: string;
    price?: string;
    percent?: string;
    color1?: string;
}

const SpkCrmcard: React.FC<SpkCrmcardProps> = ({ cardClass = '', bodyClass = '', color, svgIcon, title, price, percent, color1 }) => {

    return (
        <Fragment>
            <div className={`box ${cardClass}`}>
                    <div className={`box-body ${bodyClass}`}>
                        <div className="">
                            <div className="flex justify-between mb-2">
                                <div className={`p-2 border border-${color}/10 bg-${color}/10 rounded-full`}>
                                    <span className={`avatar avatar-md avatar-rounded bg-${color} svg-white mb-0`}>
                                            {svgIcon}
                                    </span>
                                </div>
                            </div>
                            <p className="flex-auto text-textmuted dark:text-textmuted/50 text-[14px] mb-0">{title}</p>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <h4 className="mb-0 flex items-center">{price}</h4>
                            <span className={`text-${color1} badge bg-${color1}/10 rounded-full flex items-center text-[11px] me-0 ms-2 mb-0`}>
                            <i className={`ri-arrow-left-${percent?.includes("+")? "up":"down"}-line text-[11px]`}></i>{percent}</span>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
};

export default SpkCrmcard;
