
import React, { Fragment } from 'react';

interface Testimonial {
    image: string;
    name: string;
    role: string;
    content: string;
    rating: number | string;
    bgClass: string;
    quotecolor: string;
}

interface ReviewCardProps {
    testimonial: Testimonial;
}

const getBadgeClass = (() => {
    const count: any = {};

    return (rating: string | number) => {
        if (!count[rating]) count[rating] = 0;
        const classes: any = {
            4.5: ["bg-primarytint2color", "bg-primarytint3color"],
            4.3: ["bg-primary", "bg-danger"],
            4.1: ["bg-primary", "bg-info"],
            3.8: ["bg-primarytint1color", "bg-light"],
        };

        const classArray = classes[rating] || ["bg-default"];

        const classToReturn = classArray[count[rating] % classArray.length];

        count[rating]++;

        return classToReturn;
    };
})();

const ReviewCard: React.FC<ReviewCardProps> = ({ testimonial }) => (
    <Fragment>
           <div className="box overflow-hidden">
                <div
                    className={`p-4 text-center items-center justify-content-start gap-2 border-b border-dashed border-defaultborder dark:border-defaultborder/10 ${testimonial.bgClass}`}>
                    <img src={testimonial.image} alt="img"
                        className="mb-2 mx-auto text-center avatar avatar-xl !rounded-full shadow-sm"/>
                    <div className="grow">
                        <p className="mb-0 font-semibold h6">{testimonial.name}</p>
                        <span
                            className="font-normal text-textmuted dark:text-textmuted/50 text-xs">{testimonial.role}</span>
                    </div>
                </div>
                <div className="box-body">
                    <div className="mb-0">
                        "{testimonial.content}".<i
                            className="op-4 text-[11px] font-medium">--- {testimonial.name}</i>
                    </div>
                    <div className={`badge !rounded-full float-end ${getBadgeClass(testimonial.rating)}  `}> {testimonial.rating}
                        <i className="ri-star-fill text-warning"></i>
                    </div>
                    <i
                        className={`bx bxs-quote-alt-right review-quote !text-${testimonial.quotecolor}/50`}></i>
                </div>
            </div>
      
    </Fragment>
);

export default ReviewCard;
