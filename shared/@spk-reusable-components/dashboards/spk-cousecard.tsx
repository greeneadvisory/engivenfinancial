import React, { Fragment } from 'react';
interface SpkCoursecardcomponentProps {
    cardClass?: string;
    color?: string;
    svgIcon?: React.ReactNode;
    total?: string;
    price?: string;
    inc?: string;
    percent?: string;
    color1?: string;
    icon?: string;
}

const SpkCoursecardcomponent: React.FC<SpkCoursecardcomponentProps> = ({ cardClass, color, svgIcon, total, price, inc, percent, color1, icon }) => {

    return (
        <Fragment>
             <div className={`box ${cardClass}`}>
                <div className="box-body text-center">
                    <span className={`avatar avatar-md bg-${color}  svg-white avatar-rounded`}>
                            {svgIcon}
                    </span>
                    <p className="mb-1 mt-3 font-medium">{total}</p>
                    <h4 className="font-semibold">{price}</h4>
                    <div className="text-textmuted dark:text-textmuted/50 text-[13px] mt-2">
                         {inc && (
                            <>
                                {inc} By <span className={`mb-0 badge bg-${color1}/10  text-${color1} rounded-full`}>
                                    {percent}
                                    <i className={`ri-arrow-${icon}-line text-[10px] align-middle ms-1`}></i>
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
           
        </Fragment>
    );
}

export default SpkCoursecardcomponent;
