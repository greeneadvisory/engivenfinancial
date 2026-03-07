import Link from 'next/link';
import React, { Fragment } from 'react';
import SpkOverlay from '../../uielements/spk-overlay';


interface Testimonial {
    image: string;
    name: string;
    stars: number;
    views: number;
    content: string;
    role: string;
    Navigate: string
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const Reviewstyle1Card: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <Fragment>
        <div className="box text-white">
            <div className="box-body">
                <div className="flex justify-between gap-2 items-center mb-3">
                    <span className="avatar !rounded-full">
                        <img src={testimonial.image} alt={testimonial.name}
                            className="img-fluid !rounded-full"/>
                    </span>
                    <div className="text-end">
                        <span className="text-info block ms-1">
                                {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                                    <i key={i} className="ri-star-fill"></i>
                                ))}
                                {testimonial.stars % 1 !== 0 && <i className="ri-star-half-line"></i>}
                        </span>
                        <span className="op-8 block text-xs font-medium">{testimonial.views} views </span>
                    </div>
                </div>
                <p className="text-[14px] mb-4">
                {testimonial.content} --
                    <SpkOverlay>
                        <Link scroll={false} href={testimonial.Navigate} 
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
                </p>
                <div className="flex items-center flex-wrap justify-between gap-4">
                    <div className="flex-auto">
                        <p className="mb-0 font-bold text-[14px] text-primary">{testimonial.name}</p>
                        <p className="mb-0 text-[11px] font-normal op-8">{testimonial.role}</p>
                    </div>
                    <div className="ms-auto text-xs font-semibold op-8 text-end">
                        <div className="ti-btn ti-btn-sm ti-btn-icon ti-btn-soft-primary1">
                            <i className="ri-thumb-up-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </Fragment>
);

export default Reviewstyle1Card;
