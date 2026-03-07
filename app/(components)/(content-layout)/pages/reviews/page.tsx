"use client"
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import { Review4Slides, Review5Slides, ReviewSlides, ReviewsStyledata, Reviewstyle1data } from "@/shared/data/pages/reviewsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface ReviewsProps {}

const Reviews : FC<ReviewsProps>  = () => {
    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    };
    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }

    const breakpoints2 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
    const breakpoints4 = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    };
return (
<Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Reviews" />

            <Pageheader title="Pages" currentpage="Reviews" activepage="Reviews" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <h6 className="mb-3">Reviews Style 1 :</h6>
                        <SpkSwiperJs slides={Reviewstyle1data} breakpoint={breakpoints} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService1" autoplay={true} />
                    </div>
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Reviews Style 2 :
                                </div>
                            </div>
                            <div className="box-body pb-0 custom-review">
                                 <SpkSwiperJs slides={ReviewsStyledata} breakpoint={breakpoints4} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService1" autoplay={true} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <h6 className="mb-3">Reviews Style 3 :</h6>
                            <SpkSwiperJs slides={ReviewSlides} breakpoint={breakpoints1} slidesPerView={3} spaceBetween={30} pagination={true} className="pagination-dynamic testimonialSwiperService swiper-initialized swiper-horizontal swiper-backface-hidden" autoplay={true} />
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start::row-2 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <h6 className="mb-3">Reviews Style 4 :</h6>
                            <SpkSwiperJs slides={Review4Slides} breakpoint={breakpoints2} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService2" autoplay={true} />
                    </div>
                </div>
                {/* <!-- End::row-2 --> */}

                {/* <!-- Start::row-3 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <h6 className="mb-3">Reviews Style 5 :</h6>
                            <SpkSwiperJs slides={Review5Slides}
                            breakpoint={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                }
                            }}
                            slidesPerView={2}
                            spaceBetween={5}
                            loop={true}
                            centeredSlides={true}
                            initialSlide={2}
                            pagination={{
                                clickable: true,
                                renderBullet: (index: any, className: any) => {
                                    return `<div class="${className} swiper-pagination-bullet" key=${index}>
                                    <img src="../../assets/images/faces/${index + 1}.jpg" alt="Testimonial ${index + 1}" />
                                </div>`;
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className="swiper testimonialSwiper01 pagination-dynamic swiper-pagination-custom"
                        />
                    </div>
                </div>
                {/* <!-- End::row-3 --> */}
</Fragment>
);
};

export default Reviews;