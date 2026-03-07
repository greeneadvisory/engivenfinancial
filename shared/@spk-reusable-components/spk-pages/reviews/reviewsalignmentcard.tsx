
import React, { Fragment } from 'react';

interface ReviewAlignmentProps {
    review: any;
}


const ReviewsAlignmentCard: React.FC<ReviewAlignmentProps> = ({ review }) => (
    <Fragment>
          <div className="box border relative border-defaultborder dark:border-defaultborder/10">
                <div className="box-body text-center">
                    <div>
                        <img src={review.imgSrc} alt="img"
                            className="mx-auto text-center avatar avatar-xl !rounded-full border-[3px] border border-primary mb-2 bg-primary"/>
                    </div>
                    <div className="">
                        <div className="mb-0 font-semibold text-[14px]">Victoria Red</div>
                        <div className="mb-2 text-warning text-[11px]">
                            {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                                <i key={i} className="lh-1 ri-star-fill me-1"></i>
                            ))}
                            {review.rating % 1 ? <i className="leading-none ri-star-half-line"></i> : null}
                            
                        </div>
                        <i className="bx bxs-quote-right fs-2 me-1 text-primary"></i>
                        <p className="text-[14px] mt-2 mb-1 px-3">
                             "{review.quote}"
                        </p>
                    </div>
                </div>
            </div>
      
    </Fragment>
);

export default ReviewsAlignmentCard;
