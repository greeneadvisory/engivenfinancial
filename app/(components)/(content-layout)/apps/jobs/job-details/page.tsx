"use client"
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { JobsSwiper } from "@/shared/data/apps/jobs/jobdetailsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface JobDetailsProps {}

const JobDetails : FC<JobDetailsProps>  = () => {
    const breakpoints = {
        350: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }

return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Jobs-Jobdetails" />

        <Pageheader title="Apps" subtitle="Jobs" currentpage="Job Details" activepage="Job Details" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-9 col-span-12">
                <div className="box !bg-primary/10 dark:!bg-primary/10">
                    <div className="box-body">
                        <div className="box overflow-hidden job-info-banner">
                        </div>
                        <div className="box job-info-data mb-2">
                            <div className="box-body">
                                <div className="flex flex-wrap items-top justify-between gap-2">
                                    <div>
                                        <div className="flex flex-wrap gap-2">
                                            <div>
                                                <span className="avatar avatar-lg border p-1 dark:border-defaultborder/10">
                                                    <img src="../../../assets/images/media/jobs/2.png" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-0 flex items-center"><Link scroll={false} href="#!" className="">Frontend Developer</Link></h5>
                                                <Link scroll={false} href="#!" className="text-xs text-textmuted dark:text-textmuted/50"><i className="bi bi-building"></i> Spruko Technologies PRIVATE LIMITED</Link>
                                                <div className="flex mt-3">
                                                    <div>
                                                        <p className="mb-1"><i className="bi bi-geo-alt me-1"></i>Bangalore, Karnataka</p>
                                                        <p><i className="bi bi-briefcase me-1"></i>2 - 4 Yrs Exp.</p>
                                                    </div>
                                                    <div className="ms-4">
                                                        <p className="mb-1"><i className="bi bi-coin me-1"></i><span className="font-medium">25,000 - 35,000</span> / per month (+incentives)</p>
                                                        <p><i className="bi bi-mortarboard  me-1"></i>Graduate and Above</p>
                                                    </div>
                                                </div>
                                                <div className="popular-tags mt-3">
                                                    <SpkBadge variant="info/10" customClass="rounded-full text-info me-1"><i className="bi bi-clock me-1"></i>Full Time</SpkBadge>
                                                    <SpkBadge variant="primarytint2color/10" customClass="rounded-full text-primarytint2color"><i className="bi bi-briefcase me-1"></i>8 Openings</SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <SpkOverlay>
                                            <Link scroll={false} href="#!" className="!rounded-full ti-btn ti-btn-icon ti-btn-soft-primary btn-wave ti-btn-sm">
                                                <i className="ri-bookmark-line"></i>
                                                <span
                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                    role="tooltip">
                                                        Save
                                                </span>
                                            </Link>
                                        </SpkOverlay>
                                        <div className="flex gap-1 items-center  mt-4 pt-3">
                                            <SpkOverlay>
                                                <i className="bi bi-info-circle text-info">
                                                    <span
                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                        role="tooltip">
                                                        20 Days Left
                                                    </span>
                                                </i>
                                            </SpkOverlay>
                                            <p className="mb-0"> <span className="font-medium">20 days left </span> to apply for this job</p>
                                        </div>
                                        <div className="btn-list mt-3">
                                            <Link scroll={false} href="#!" className="ti-btn mb-0 me-2 bg-primary text-white"> Apply Now</Link>
                                            <Link scroll={false} href="#!" className="ti-btn mb-0 ti-btn-icon ti-btn-soft-primary1 btn-wave">
                                                <i className="ri-heart-line"></i>
                                            </Link>
                                            <Link scroll={false} href="#!" className="ti-btn mb-0 ti-btn-icon ti-btn-soft-primary2 btn-wave">
                                                <i className="ri-share-line"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-body">
                        <h6 className="font-medium mb-3">Job Description</h6>
                        <p className="opacity-90 mb-4">We are seeking a skilled Frontend Developer to join our dynamic team. In this role, you will be responsible for implementing visual elements that users see and interact with in web applications. You will work closely with designers and backend developers to bridge the gap between graphical design and technical implementation, ensuring an optimized and responsive user experience.</p>
                        <p className="mb-4 opacity-90">As a Frontend Developer, you will use your expertise in HTML, CSS, and JavaScript frameworks to translate UI/UX design wireframes into high-quality code. You will collaborate with cross-functional teams to deliver scalable and maintainable frontend solutions that meet business objectives and user needs.</p>
                        
                        <h6 className="font-medium">Key Responsibilities</h6>
                        <ol className="ti-list-group border-0 ps-5 list-decimal mb-3">
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Develop responsive web pages and web applications based on provided designs and specifications.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Collaborate with UX/UI designers and backend developers to deliver seamless user interfaces.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Optimize application performance and ensure cross-browser compatibility.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Implement front-end components and libraries using modern frameworks such as React, Angular, or Vue.js.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Conduct thorough testing of user interfaces to identify and fix UI issues and bugs.</li>
                        </ol>
                        <h6 className="font-medium">Requirements</h6>
                        <ul className="ti-list-group border-0 ps-5 list-decimal mb-3">
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Bachelor's degree in Computer Science, Engineering, or a related field, or equivalent practical experience.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Proven experience as a Frontend Developer or similar role, with a strong portfolio demonstrating frontend development skills.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Proficiency in HTML5, CSS3, JavaScript, and frontend frameworks/libraries (e.g., React, Angular, Vue.js).</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Experience with version control systems (e.g., Git) and modern development workflows.</li>
                            <li className="ti-list-group-item !border-0 !py-1 !ps-0">Understanding of responsive design principles and mobile-first approach.</li>
                        </ul>
                    </div>  
                </div>
                <div className="box border shadow-none !bg-primary/10 border-primary/10">
                    <div className="box-body">
                        <div className="grid grid-cols-12 gap-x-6 items-center">
                            <div className="lg:col-span-6 col-span-12">
                                <h5 className="font-medium mb-3"><i className="ri-briefcase-line me-2 p-2 bg-primary text-white text-[15px] leading-none align-middle rounded-full"></i>Explore Job Opportunities</h5>
                                <span className="text-textmuted dark:text-textmuted/50 mb-0 text-[14px]">Find exciting job opportunities that match your skills and interests. Join us to make a difference!</span>
                            </div>
                            <div className="lg:col-span-6 col-span-12 sm:text-end">
                                <Link scroll={false} href="#!" className="ti-btn bg-primary text-white ti-btn-lg" role="button">
                                    <i className="ri-share-line me-2 align-middle inline-block"></i>Sign up Now
                                </Link>
                            </div>
                        </div>
                    </div>                            
                </div>  
            </div>
            <div className="xxl:col-span-3 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Job Highlights</div>
                    </div>
                    <div className="box-body">
                        <div className="mb-3 text-[14px] flex items-center">
                            <span className="avatar avatar-sm border dark:border-defaultborder/10 border-defaultborder leading-none avatar-rounded me-2 bg-info/10 !text-info">
                                <i className="ri-map-pin-line"></i>
                            </span>
                            <span className="text-textmuted dark:text-textmuted/50">Work Location</span>
                            <span className="ms-auto font-medium">
                                Bangalore
                            </span>
                        </div>
                        <div className="mb-3 flex items-center">
                            <span className="avatar avatar-sm border dark:border-defaultborder/10 border-defaultborder  leading-none avatar-rounded me-2 bg-danger/10 !text-danger">
                                <i className="ri-time-line"></i>
                            </span>
                            <span className="text-textmuted dark:text-textmuted/50">Flexible Hours</span>
                            <span className="ms-auto font-medium">
                                9:00AM -6:00PM
                            </span>
                            
                        </div>
                        <div className="mb-3 flex items-center">
                            <span className="avatar avatar-sm border dark:border-defaultborder/10 border-defaultborder leading-none avatar-rounded me-2 bg-success/10 !text-success">
                                <i className="ri-cash-line"></i>
                            </span>
                            <span className="text-textmuted dark:text-textmuted/50">Competitive Salary</span>
                            <span className="ms-auto font-medium">
                                35,000 +
                            </span>
                            
                        </div>
                        <div className="mb-0 flex items-center">
                            <span className="avatar avatar-sm border dark:border-defaultborder/10 border-defaultborder leading-none avatar-rounded me-2 bg-primarytint2color/10 !text-primarytint2color">
                                <i className="ri-award-line"></i>
                            </span>
                            <span className="text-textmuted dark:text-textmuted/50">Employee Benefits</span>
                            <span className="ms-auto font-medium">
                                Award
                            </span>
                            
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <h6 className="font-medium mb-3">Related Jobs</h6>
                    <SpkSwiperJs slides={JobsSwiper} direction={'vertical'} slidesPerView={2} spaceBetween={5} breakpoint={breakpoints} autoplay={true} className="mySwiper swiper-related-jobs" />
                </div>   
                <div className="box">
                    <div className="box-body">
                        <h6 className="font-medium mb-3">Subscribe to Job Alerts</h6>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control !border-s" placeholder="Your Email Address" aria-label="job-email" aria-describedby="job-subscribe"/>
                            <SpkButton variant="primary" customClass="ti-btn bg-primary text-white !m-0" type="button" id="job-subscribe">Subscribe</SpkButton>
                        </div>
                        <label className="form-check-label">
                            By subscribing, you accept our <Link scroll={false} href="#!" className="text-success"><u>privacy policy</u></Link>.
                        </label>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End::row-1 --> */}
</Fragment>
);
};

export default JobDetails;