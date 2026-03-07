import React, { Fragment } from 'react'
import SpkOverlay from '../uielements/spk-overlay';


interface Spkwidgetcard4componentprops {
    cardClass?: string;
    Img?: string;
    name?: string;
    role?: string;
    description?: string;
    btn?: string;
    btn1?: string;
    mainClass?: string;
    icon?: string;
    tooltip?: string | any;
}

const Spkwidgetcard4component: React.FC<Spkwidgetcard4componentprops> = ({ cardClass, mainClass, Img, name, role, description, btn, btn1, icon, tooltip }) => {

    return (
        <Fragment>
            <div className={`box ${cardClass}`}>
                <div className="box-body">
                    <div className="text-center">
                        <div className="mb-2">
                            <span className={`avatar avatar-xl avatar-rounded ${mainClass}`}>
                                <img src={Img} alt=""/>
                            </span>
                        </div>
                        <div className="main-profile-info">
                            <h6 className="font-semibold mb-1">{name}
                                <SpkOverlay>
                                    <span className="text-primarytint2color text-[14px]">
                                        <i className={`bi bi-${icon}`}></i>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content !border-black py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            {tooltip}
                                        </span>
                                    </span>
                                </SpkOverlay>
                            </h6>
                                <p className="text-textmuted dark:text-textmuted/50 mb-2">{role}</p>
                                <p className="mb-2">{description} </p>
                        </div>
                        <div className="flex gap-1 justify-center mb-2 items-center">
                            <i
                                className="ri-facebook-line text-primary border rounded-full align-middle leading-none p-2 border-primary/25 me-1 inline-block text-[17px] bg-primary/10"></i>
                            <i
                                className="ri-twitter-x-line text-primarytint1color border rounded-full align-middle leading-none p-2 border-primarytint1color/25 me-1 inline-block text-[17px] bg-primarytint1color/10"></i>
                            <i
                                className="ri-linkedin-line text-primarytint2color border rounded-full align-middle leading-none p-2 border-primarytint2color/25 me-1 inline-block text-[17px] bg-primarytint2color/10"></i>
                            <i
                                className="ri-github-line text-primarytint3color border rounded-full align-middle leading-none p-2 border-primarytint3color/25 me-1 inline-block text-[17px] bg-primarytint3color/10"></i>
                        </div>
                        <div className="flex gap-2 mb-0 flex-wrap flex-xxl-nowrap">
                            <div className="ti-btn ti-btn-primary ti-btn-sm mb-0 flex-auto">
                            {btn}
                            </div>
                            <div className="ti-btn ti-btn-secondary ti-btn-sm mb-0 flex-auto">
                            {btn1}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spkwidgetcard4component;