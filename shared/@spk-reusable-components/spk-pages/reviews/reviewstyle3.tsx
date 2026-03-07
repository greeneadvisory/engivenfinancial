
import Link from 'next/link';
import React, { Fragment } from 'react';
import SpkOverlay from '../../uielements/spk-overlay';


interface Review {
    quote?: string;
    rating: number;
    imgSrc: string;
    name: string;
    email: string;
    Navigate: string;
}

interface ReviewSlidesProps {
    review: Review;
}


const ReviewSlidescard: React.FC<ReviewSlidesProps> = ({ review }) => (
    <Fragment>
           <div className="box border mb-0 border-defaultborder dark:border-defaultborder/10">
                <div className="box-body">
                    <div>
                        <span className=""><sup>
                            <i className="bi bi-quote text-[2.5rem] me-1 text-primary"></i></sup>
                            Customer service at this company is
                            outstanding. They were quick to respond to my inquiry and
                            resolved my issue within hours. --
                            <SpkOverlay>
                                <Link scroll={false} href={review.Navigate}
                                    className="font-semibold hs-tooltip-toggle text-[11px]">Read
                                    More
                                    <span
                                        className="hs-tooltip-content  ti-main-tooltip-content  max-w-[200px] py-1 px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        customer service at this company is outstanding. They were
                                        quick
                                        to respond to my inquiry and resolved my issue within hours.
                                    </span>
                                </Link>
                            </SpkOverlay>
                        </span>
                    </div>
                    <div className="flex items-center flex-wrap text-end  justify-end">
                        <div className="text-warning block me-1 text-[10px]">
                            {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                                <i key={i} className="ri-star-fill me-1"></i>
                            ))}
                             {review.rating % 1 ? <i className="ri-star-half-line"></i> : null}
                        </div>
                        <span>{review.rating}</span>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="flex items-center flex-wrap">
                        <span className="avatar !rounded-full me-2">
                            <img src={review.imgSrc}  alt=""
                                className="img-fluid !rounded-full border-primary border-2" />
                        </span>
                        <div>
                            <p className="mb-0 font-semibold">{review.name}</p>
                            <p className="mb-0 text-[11px] font-normal op-8">
                              {review.email}</p>
                        </div>
                        <div className="ms-auto text-xs font-semibold op-8 text-end">
                            <div
                                className="ti-btn ti-btn-sm ti-btn-icon !rounded-full ti-btn-soft-primary ">
                                <i className="ri-twitter-x-line"></i>
                            </div>
                            <div
                                className="ti-btn ti-btn-sm ti-btn-icon !rounded-full ti-btn-soft-primary1">
                                <i className="ri-share-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
    </Fragment>
);

export default ReviewSlidescard;
