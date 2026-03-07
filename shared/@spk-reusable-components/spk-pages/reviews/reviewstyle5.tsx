// ReviewCard.tsx
import React, { Fragment } from 'react';


interface Review {
    quote?: string;  // Text for the tooltip on "Read More" link
    rating: number; // Numeric rating, can be a decimal
    imgSrc: string; // Profile image URL
    name: string;   // Name of the reviewer
    role: string;   // Name of the reviewer
}

interface ReviewStyle5Props {
    review: Review;
}


const ReviewStyle5Card: React.FC<ReviewStyle5Props> = ({ review }) => (
    <Fragment>
         <div className="box mb-2 overflow-hidden">
            <div className="box-body">
                <p className="text-[1rem]">
                    <i className="ri-double-quotes-l text-[2.5rem] leading-none me-3"></i>{review.quote}
                </p>
                <div className="flex justify-end flex-wrap gap-4">
                    <div className="flex">
                        <div className="me-2 my-auto mb-0">
                            <div className="mb-0 leading-none text-xs font-semibold">{review.name}
                                <span className="text-[11px] font-normal ms-2"><i
                                        className="ri-star-fill text-warning text-[0.5625rem] mb-1 align-middle"></i>
                                     {review.rating}</span>
                            </div>
                            <p className="text-xs mb-0 opacity-70">{review.role}</p>
                        </div>
                        <img src={review.imgSrc}  alt="img"
                            className="avatar avatar-md avatar-rounded border border-3 border-primarytint2color"/>
                    </div>
                </div>
            </div>
        </div>
          
    </Fragment>
);

export default ReviewStyle5Card;
