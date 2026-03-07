import React, { Fragment } from 'react';

interface SpkSchoolcardProps {
    item?: string;
    price?: string;
    color?: string;
    svgIcon?: React.ReactNode;
    cardClass?: string;
    bodyClass?: string;
}

const SpkSchoolcard: React.FC<SpkSchoolcardProps> = ({ item, price, color, svgIcon, cardClass, bodyClass }) => {
    return (
        <Fragment>
                <div className={`box ${cardClass}`}>
                    <div className={`box-body ${bodyClass}`}>
                        <div className="">
                            <span className="block mb-1">{item}</span>
                            <h5 className="mb-0 font-semibold">{price}</h5>
                        </div>
                        <div className="">
                            <span className={`text-${color}`}>
                                {svgIcon}
                            </span>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default SpkSchoolcard;
