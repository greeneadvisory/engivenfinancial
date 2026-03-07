import React, { Fragment } from 'react';

interface MedicalCardProps {
    price?: string;
    title?: string;
    percent?: string;
    cardClass?: string;
    bodyClass?: string;
    svgIcon?: React.ReactNode;
    color?: string;
    icon?: string;
}

const SpkMedicalcard: React.FC<MedicalCardProps> = ({ price, title, percent, cardClass, bodyClass, svgIcon, color, icon }) => {
    return (
        <Fragment>
            <div className={`box  ${cardClass}`}>
                <div className={`box-body ${bodyClass}`}>
                    <h5 className="mb-1">{price}</h5>
                    <div className="font-medium opacity-70">{title}
                        <span className={`font-normal ms-1 badge leading-none bg-${color}/10 text-${color} text-[0.5625rem]`}>  {percent}
                            <i className={`ri-arrow-${icon}-s-fill`}></i>
                        </span>
                    </div>
                    {svgIcon}
                </div>
            </div>
          
        </Fragment>
    );
};

export default SpkMedicalcard;
