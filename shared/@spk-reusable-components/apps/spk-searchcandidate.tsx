import Link from 'next/link';
import React, { Fragment } from 'react';
import SpkOverlay from '../uielements/spk-overlay';
import SpkBadge from '../uielements/spk-badge';
interface SpkSearchCandidateProps {
    cardClass?: string;
    bodyClass?: string;
    object?: any;
    badge2?: string;
}

const SpkSearchcandidate: React.FC<SpkSearchCandidateProps> = ({ cardClass, bodyClass, object, badge2 }) => {

    return (
        <Fragment>
            <div className={`box shadow-none border dark:border-defaultborder/10  border-defaultborder ${cardClass}`}>
                <div className={`box-body ${bodyClass}`}>
                    <div className="float-end">
                        <SpkOverlay customClass="[--placement:top]">
                            <Link scroll={false} href="#!" className={`avatar avatar-rounded avatar-sm bg-${object.avatarColor}/10 !text-${object.avatarColor}`}>
                                <span><i
                                        className="ri-download-cloud-line text-[14px]"></i></span>
                                <span
                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                    role="tooltip">
                                    Download CV
                                </span>
                            </Link>
                        </SpkOverlay>
                        <SpkOverlay customClass="[--placement:top]">
                            <Link scroll={false} href="#!"
                                className={`avatar avatar-rounded ms-1 avatar-sm bg-${object.avatarColor1}/10 !text-${object.avatarColor1}`}>
                                <span><i className="ri-heart-line text-[14px]"></i></span>
                                <span
                                    className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                    role="tooltip">
                                    Add to Wishlist
                                </span>
                            </Link>
                        </SpkOverlay>
                    </div>
                    <div className="flex mb-3 items-center flex-wrap gap-2 xxl:flex-nowrap">
                        <div>
                            <span className="avatar avatar-lg avatar-rounded">
                                <img src={object.image}
                                    alt="Profile Picture"/>
                            </span>
                        </div>
                        <div>
                            <h6 className="font-medium mb-1 flex items-center">
                                <Link scroll={false} href="/apps/jobs/candidate-details"> {object.name} 
                                <SpkOverlay>
                                <span className="text-primary text-[13px] ms-1">
                                    <i className="ri-verified-badge-fill"></i>
                                    <span
                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        Verified candidate
                                    </span>
                                </span>
                            </SpkOverlay></Link></h6>
                            <div className="flex gap-2 flex-wrap">
                                <Link scroll={false} href="#!">{object.jobTitle}</Link>
                                <p
                                    className="mb-0 text-xs text-textmuted dark:text-textmuted/50">
                                    <i className="ri-map-pin-line text-[11px]"></i> {object.location}
                                </p>
                            </div>
                            <div
                                className="flex items-center text-xs text-textmuted dark:text-textmuted/50 flex-wrap">
                                <p className="text-xs mb-0">Ratings : </p>
                                <div className="min-w-fit-content ms-2">
                                    {object.ratings}
                                </div>
                                <Link scroll={false} href="#!"
                                    className="ms-1 min-w-fit-content text-textmuted dark:text-textmuted/50">
                                    <span>({object.ratingCount})</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="popular-tags mb-4 flex gap-2 flex-wrap">
                        <Link scroll={false} href="#!"
                            className="badge rounded-full text-[11px] border border-primary/10 text-primary"><i
                                className="ri-file-text-line me-1"></i> {object.badge}</Link>
                        <Link scroll={false} href="#!"
                            className="badge rounded-full text-[11px] border border-primarytint1color/10 text-primarytint1color"><i
                                className="ri-remote-control-line me-1"></i>{object.badge1}</Link>
                        {badge2 && (
                            <><SpkBadge key="badge3" customClass="rounded-full text-[11px] border border-info/10 text-info">
                                <i className="ri-time-line me-1"></i> {badge2}
                            </SpkBadge>
                            <SpkBadge key="badge4" customClass="rounded-full text-[11px] border border-primarytint2color/10 text-primarytint2color">
                                <i className="ri-time-fill me-1"></i> {object.badge3}
                            </SpkBadge></>
                        )}
                    </div>
                    <div className="flex items-center flex-wrap gap-4 xxl:flex-nowrap">
                        <div>
                            <p className="mb-1 grow"><span
                                    className="text-textmuted dark:text-textmuted/50">Annual Pay
                                    :</span> <span className="font-medium"> {object.annualPay}</span> -
                                <span className="font-medium">{object.annualPay1}</span>
                            </p>
                            <p className="mb-0"><span
                                    className="text-textmuted dark:text-textmuted/50"> Languages
                                    :</span> <span className="font-medium"> {object.languages}
                                </span></p>
                        </div>
                        <div className="ms-auto">
                            <div className="ti-btn ti-btn-primary">View Profile<i
                                    className="ri-arrow-right-line"></i></div>
                        </div>
                    </div>
                </div>
            </div>
           
        </Fragment>
    );
}

export default SpkSearchcandidate;
