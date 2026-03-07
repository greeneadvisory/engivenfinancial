import React, { Fragment } from 'react';
import SpkOverlay from '../uielements/spk-overlay';
import Link from 'next/link';
import SpkBadge from '../uielements/spk-badge';

interface SpkJobCompanyProps {
    obj: any;
}

const SpkJobcompany: React.FC<SpkJobCompanyProps> = ({
    obj

}) => {
    return (
        <Fragment>
               <div className="box">
                    <div className="box-body">
                        <div className="float-end">
                            <SpkOverlay customClass="ti-main-tooltip [--placement:top]">
                                <Link scroll={false} href="#!" className="avatar avatar-rounded bg-primary/10 !text-primary avatar-sm">
                                    <i className="bi bi-heart"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Add to Wishlist
                                    </span>
                                </Link>
                            </SpkOverlay>
                        </div>
                        <div className="flex items-center flex-wrap gap-2">
                            <span className="avatar avatar-xl bg-light shadow-sm border border-primary/10 p-4 avatar-rounded">
                                <img src={obj.logo} alt={obj.name}/>
                            </span>
                            <div className="ms-2">
                                <h6 className="font-medium mb-0 flex items-center"><Link scroll={false} href={obj.link}>TechGurus Ltd.
                                    <SpkOverlay>
                                        <span className="text-secondary text-[13px]">
                                            <i className="ri-verified-badge-fill"></i>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Verified company
                                            </span>
                                        </span>
                                    </SpkOverlay></Link></h6>
                                <div className="flex gap-2 mb-2">
                                    <Link scroll={false} href={obj.iconLink}><i className="ri-map-pin-2-line text-info"></i> {obj.location} </Link>
                                    <p className="mb-0 text-textmuted dark:text-textmuted/50">{obj.establishmentYear}</p>
                                </div> 
                                <div className="flex items-center text-xs text-textmuted dark:text-textmuted/50">
                                    <p className="text-xs mb-0">Ratings : </p>
                                    <div className="min-w-fit-content ms-2">
                                    {obj.ratings}
                                    </div>
                                    <Link scroll={false} href={obj.ratingLink} className="ms-1 min-w-fit-content text-textmuted dark:text-textmuted/50">
                                        <span>({obj.ratingCount})</span>
                                        <span>Ratings</span>
                                    </Link>
                                </div>
                            </div>                                            
                        </div>
                    </div>
                    <div className="box-footer">
                        <div className="flex items-center flex-wrap gap-2">
                            <div className="grow flex items-center flex-wrap gap-1">
                                <SpkOverlay customClass="[--placement:top]">
                                    <SpkBadge variant="primarytint1color/10"  customClass="badge-md text-[11px] rounded-full text-primarytint1color me-1">
                                        <i className="bi bi-people me-1"></i>No. of Emp : {obj.employees}
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            No of employees
                                        </span>
                                    </SpkBadge>
                                </SpkOverlay>
                                <SpkBadge variant="info/10" customClass="badge-md text-[11px] rounded-full text-info"><i className="bi bi-briefcase me-1"></i>Vacancies :{obj.vacancies}</SpkBadge>
                            </div>
                            <Link scroll={false} href={obj.viewLink} className="ti-btn-sm ti-btn btn-wave ti-btn-primary">
                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                            </Link>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
};

export default SpkJobcompany;
