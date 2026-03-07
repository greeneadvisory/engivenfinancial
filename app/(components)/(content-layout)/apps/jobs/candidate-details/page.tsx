"use client"
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import SwiperComponent from "@/shared/data/apps/jobs/candidatedata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface CandidateDetailsProps {}

const CandidateDetails : FC<CandidateDetailsProps>  = () => {
    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        398: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        399: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1434: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }

return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Jobs-Candidatedetails" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Candidate Details" activepage="Candidate Details" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-8 col-span-12">
                    <div className="box job-candidate-details">
                        <div className="candidate-bg-shape primary"></div>
                        <div className="box-body pt-[3rem]">
                            <div className="mb-3 leading-none mt-6">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src="../../../assets/images/faces/1.jpg" className="!rounded-full img-fluid shadow"
                                        alt=""/>
                                </span>
                            </div>
                            <div className="flex gap-2 flex-wrap mb-3">
                                <div className="flex-auto">
                                    <h6 className="mb-1 font-semibold"><Link scroll={false} href="#!"> Samantha
                                            <SpkOverlay>
                                                <span className="text-success text-[1rem]">
                                                    <i className="ri-check-line"></i>
                                                    <span
                                                        className="hs-tooltip-content  ti-main-tooltip-content !border-black py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                        role="tooltip">
                                                        Verified candidate
                                                    </span>
                                                </span>
                                            </SpkOverlay>
                                        </Link></h6>
                                    <p className="mb-0 text-textmuted dark:text-textmuted/50">UI/UX Designer</p>
                                    <div
                                        className="flex flex-wrap gap-2 items-center text-xs text-textmuted dark:text-textmuted/50">
                                        <p className="mb-0">Ratings : </p>
                                        <div className="min-w-fit-content ms-2">
                                            <span className="text-warning"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning"><i className="ri-star-half-fill"></i></span>
                                        </div>
                                        <Link scroll={false} href="#!"
                                            className="ms-1 min-w-fit-content text-textmuted dark:text-textmuted/50">
                                            <span>(245)</span>
                                            <span>Ratings</span>
                                        </Link>
                                    </div>
                                    <div className="flex text-[14px] mt-3 gap-2 flex-wrap">
                                        <div>
                                            <p className="mb-1"><i
                                                    className="ri-map-pin-line me-2 text-textmuted dark:text-textmuted/50"></i>Silicon
                                                Valley, CA</p>
                                            <p className="mb-0"><i
                                                    className="ri-briefcase-line me-2 text-textmuted dark:text-textmuted/50"></i>3
                                                Years Experience</p>
                                        </div>
                                        <div className="sm:ms-3">
                                            <p className="mb-1"><i
                                                    className="ri-currency-line me-2 text-textmuted dark:text-textmuted/50"></i>Annual
                                                Pay : <span className="font-medium">$55,000</span> - <span
                                                    className="font-medium">$80,000</span></p>
                                            <p className="mb-0"><i
                                                    className="ri-graduation-cap-line me-2 text-textmuted dark:text-textmuted/50"></i>Graduate
                                            </p>
                                        </div>
                                        <div className="sm:ms-3">
                                            <p className="mb-1"><i
                                                    className="ri-mail-line me-2 text-textmuted dark:text-textmuted/50"></i>Mail
                                                : <span className="font-medium">samantha@mail.com</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-list ms-auto">
                                    <Link scroll={false} href="#!"
                                        className="ti-btn ti-btn-primary rounded-full btn-wave waves-effect"><i
                                            className="ri-download-cloud-line me-1"></i> Download CV</Link>
                                    <Link scroll={false} href="#!"
                                        className="ti-btn bg-primarytint1color/10 text-primarytint1color rounded-full btn-wave waves-effect waves-light align-middle">
                                        <i className="ri-heart-line leading-none my-auto align-middle"></i> Add to
                                        wishlist
                                    </Link>
                                    <Link scroll={false} href="#!"
                                        className="ti-btn ti-btn-icon bg-secondary/10 text-secondary rounded-full btn-wave waves-effect waves-light align-middle me-0">
                                        <i className="ri-share-line text-lg mb-1 leading-none my-auto align-middle"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center flex-wrap">
                                <h6 className="mb-0">Availability:</h6>
                                <div className="popular-tags flex gap-2 flex-wrap">
                                    <SpkBadge variant="info/10"
                                        customClass="rounded-full text-[11px] text-info"><i
                                            className="ri-remote-control-line me-1"></i>Full Time</SpkBadge>
                                    <SpkBadge variant="danger/10"
                                        customClass="rounded-full text-[11px] text-danger"><i
                                            className="ri-time-line me-1"></i>Immediate Joinee</SpkBadge>
                                    <SpkBadge variant="primary/10"
                                        customClass="rounded-full text-[11px] text-primary"><i
                                            className="ri-calendar-line me-1"></i>Flexible Schedule</SpkBadge>
                                </div>
                                <Link scroll={false} href="#!"
                                    className="ms-auto text-secondary px-2 py-1 rounded-full text-xs bg-secondary/10"><i
                                        className="ri-chat-1-line me-1"></i> Message Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Skills
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="popular-tags flex gap-2 flex-wrap">
                                        <SpkBadge variant="primarytint2color/10"
                                            customClass="rounded-full text-primarytint2color">HTML</SpkBadge>
                                        <SpkBadge variant="primary/10"
                                            customClass="rounded-full text-primary">CSS</SpkBadge>
                                        <SpkBadge variant="info/10"
                                            customClass="rounded-full text-info">Javascript</SpkBadge>
                                        <SpkBadge variant="secondary/10"
                                            customClass="rounded-full text-secondary">Angular</SpkBadge>
                                        <SpkBadge variant="success/10"
                                            customClass="rounded-full text-success">React</SpkBadge>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Languages
                                    </div>
                                </div>
                                <div className="box-body">
                                    <p className="mb-0 text-[14px]"><span className="font-medium me-2">Known :
                                        </span>Hindi(Fluent), English, Spanish(Intermediate), Telugu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Candidate Profile Information
                            </div>
                        </div>
                        <div className="box-body p-0 candidate-edu-timeline">
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <h5 className="font-medium text-[17px] flex items-center gap-2"><span
                                        className="avatar avatar-rounded bg-primary avatar-sm"><i
                                            className="ri-briefcase-4-line text-[13px]"></i></span> Career Objective :
                                </h5>
                                <div className="ms-4 ps-5">
                                    <p className="opacity-90">Passionate and creative UI/UX designer with a strong
                                        portfolio and proven track record in designing intuitive user interfaces.
                                        Committed to delivering high-quality user experiences through user-centric
                                        design principles.</p>
                                    <p className="mb-0 opacity-90">Seeking a challenging role in a dynamic company where
                                        I can contribute my skills in UI/UX design to create innovative and
                                        user-friendly digital products.</p>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <div className="grid grid-cols-12 sm:gap-x-6">
                                    <div className="xl:col-span-7 col-span-12">
                                        <h5 className="font-medium text-[17px] flex items-center gap-2"><span
                                                className="avatar avatar-rounded bg-primary avatar-sm"><i
                                                    className="ri-graduation-cap-line text-[13px]"></i></span> Education
                                            :</h5>
                                        <div className="ms-4 ps-5">
                                            <p className="font-medium text-[14px] mb-0">Bachelor in Computer Science</p>
                                            <div className="flex gap-2 mb-1">
                                                <p className="mb-0">Dwayne University</p>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50"><i
                                                        className="ri-map-pin-line text-xs"></i> Nellore</p>
                                            </div>
                                            <p className="mb-3 text-textmuted dark:text-textmuted/50"> (2020 Mar - 2024
                                                Apr)</p>
                                            <p className="font-medium text-[14px] mb-0">Intermediate (MPC)</p>
                                            <div className="flex gap-2 mb-1">
                                                <p className="mb-0">Sprect College</p>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50"><i
                                                        className="ri-map-pin-line text-xs"></i> Warangal</p>
                                            </div>
                                            <p className="mb-0 text-textmuted dark:text-textmuted/50"> (2017 Mar - 2020
                                                Apr)</p>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-5 col-span-12">
                                        <h5 className="font-medium text-[17px] flex items-center gap-2"><span
                                                className="avatar avatar-rounded bg-primary avatar-sm"><i
                                                    className="ri-graduation-cap-line text-[13px]"></i></span>
                                            Certifications :</h5>
                                        <div className="ms-4 ps-5">
                                            <p className="font-medium text-[14px] mb-0">Web Development (3 Months)</p>
                                            <p className="mb-4">EMC Solutions Pvt Ltd</p>
                                            <p className="font-medium text-[14px] mb-0">Python Development (1 Month)</p>
                                            <p className="mb-0">Dabre Services Pvt Ltd</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <div className="grid grid-cols-12 sm:gap-x-6">
                                    <div className="xl:col-span-7 col-span-12">
                                        <h5 className="font-medium text-[17px] flex items-center gap-2"><span
                                                className="avatar avatar-rounded bg-primary avatar-sm"><i
                                                    className="ri-article-line text-[13px]"></i></span> Publications :
                                        </h5>
                                        <div className="ms-3">
                                            <ol className="ti-list-group !border-0 list-bullets">
                                                <li className="!border-0 py-1"><span className="font-medium">“The Evolution
                                                        of User Experience Design,”</span> UX Design Journal, March
                                                    2023</li>
                                                <li className="!border-0 py-1"><span className="font-medium">“Designing for
                                                        Accessibility in Web Applications,”</span> A11y Matters,
                                                    June 2023</li>
                                                <li className="!border-0 py-1"><span className="font-medium">“Innovations in
                                                        Mobile UI Design,”</span> Mobile Design Magazine, December
                                                    2023</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-5 col-span-12">
                                        <h5 className="font-medium text-[17px] flex items-center gap-2"><span
                                                className="avatar avatar-rounded bg-primary avatar-sm"><i
                                                    className="ri-movie-2-line text-[13px]"></i></span> Activities and
                                            Interests :</h5>
                                        <div className="ms-3">
                                            <ol className="ti-list-group !border-0 list-bullets">
                                                <li className="!border-0 py-1">Active participant in local UI/UX design
                                                    meetups</li>
                                                <li className="!border-0 py-1">Volunteer at community-driven design
                                                    workshops</li>
                                                <li className="!border-0 py-1">Passionate about exploring new design
                                                    trends</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5 className="font-medium text-[17px] mb-4 flex items-center gap-2"><span
                                        className="avatar avatar-rounded bg-primary avatar-sm"><i
                                            className="ri-user-location-line text-[13px]"></i></span> References :</h5>
                                <div className="grid grid-cols-12 sm:gap-x-6 ms-4">
                                    <div className="xl:col-span-7 col-span-12">
                                        <p className="mb-4"><span className="font-medium">Name : </span> Nicole Chiu</p>
                                        <p className="mb-4"><span className="font-medium">Designation : </span> Software Developer</p>
                                        <p className="mb-0"><span className="font-medium mb-0">Company Name : </span>
                                            InnovateZ Solutions</p>
                                    </div>
                                    <div className="xl:col-span-5 col-span-12">
                                        <p className="mb-4"><span className="font-medium">Mobile : </span> +91 7865443679</p>
                                        <p className="mb-4"><span className="font-medium">Email : </span> nchiu@email.com</p>
                                        <p className="mb-0"><span className="font-medium">Location : </span> Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Experience Overview
                            </div>
                        </div>
                        <div className="box-body p-0 candidate-edu-timeline">
                            <div className="p-4">
                                <h5 className="font-medium text-[17px] flex items-center gap-2 mb-3"><span
                                        className="avatar avatar-rounded bg-primary avatar-sm"><i
                                            className="ri-briefcase-4-line text-[13px]"></i></span> Experience :</h5>
                                <div className="ms-4 ps-5">
                                    <p className="font-medium text-[14px] mb-0">UI/UX Designer (2019 Mar - Present)</p>
                                    <div className="flex gap-2">
                                        <p>InnovateZ Solutions</p>
                                        <p className="mb-0 text-xs text-textmuted dark:text-textmuted/50"><i
                                                className="ri-map-pin-line text-xs"></i> Kondapur, Hyderabad</p>
                                    </div>
                                    <p className="font-medium mb-2">Responsibilities :</p>
                                    <ol className="ti-list-group !border-0 list-bullets">
                                        <li className="!border-0 py-1">Lead the design efforts for innovative and
                                            user-friendly interfaces across multiple projects.</li>
                                        <li className="!border-0 py-1">Collaborate with cross-functional teams to
                                            translate business requirements into intuitive designs.</li>
                                        <li className="!border-0 py-1">Conduct user research, usability testing, and
                                            gather feedback to iterate designs.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-header">
                            <div className="box-title">
                                Tools Used
                            </div>
                        </div>
                        <div className="box-body flex flex-wrap gap-2">
                            <span
                                className="avatar me-2 avatar-rounded bg-primary/10 border-primary/[0.25] shadow-sm border p-2">
                                <img src="../../../assets/images/company-logos/1.png" alt=""/>
                            </span>
                            <span
                                className="avatar me-2 avatar-rounded bg-primary/10 border-primary/[0.25] shadow-sm border p-2">
                                <img src="../../../assets/images/company-logos/2.png" alt=""/>
                            </span>
                            <span
                                className="avatar me-2 avatar-rounded bg-primary/10 border-primary/[0.25] shadow-sm border p-2">
                                <img src="../../../assets/images/company-logos/3.png" alt=""/>
                            </span>
                            <span
                                className="avatar me-2 avatar-rounded bg-primary/10 border-primary/[0.25] shadow-sm border p-2">
                                <img src="../../../assets/images/company-logos/4.png" alt=""/>
                            </span>
                            <span
                                className="avatar me-2 avatar-rounded bg-primary/10 border-primary/[0.25] shadow-sm border p-2">
                                <img src="../../../assets/images/company-logos/5.png" alt=""/>
                            </span>
                            <span
                                className="avatar avatar-rounded bg-primary/10 border-primary/[0.25] shadow-sm border p-2">
                                <img src="../../../assets/images/company-logos/6.png" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="mb-3 custom-details">
                        <h6 className="font-medium mb-3">Related Profiles</h6>
                        <SpkSwiperJs direction={'vertical'} slidesPerView={2} spaceBetween={5} breakpoint={breakpoints1} slides={SwiperComponent}
                         autoplay={true} 
                         className="mySwiper swiper-vertical overflow-hidden swiper-related-profiles" />
                    </div>
                    <div className="box overflow-hidden">
                        <div className="box-header">
                            <div className="box-title">
                                Personal Information
                            </div>
                        </div>
                        <div className="box-body p-0">
                            <div className="table-responsive">
                                <Spktables tableClass="table table-responsive">
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Full Name</span>
                                            </td>
                                            <td>: Iliana Lilly</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Email</span>
                                            </td>
                                            <td>: brendra@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">D.O.B</span>
                                            </td>
                                            <td>: 13 Jan 2008</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Gender</span>
                                            </td>
                                            <td>: Female</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Age</span>
                                            </td>
                                            <td>: 35</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Mobile </span>
                                            </td>
                                            <td>: +91 7865343874</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Marital Status </span>
                                            </td>
                                            <td>: Unmarried</td>
                                        </tr>
                                        <tr>
                                            <td className="!w-[50%]">
                                                <span className="font-medium">Address </span>
                                            </td>
                                            <td>: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                                                Bangalore-560016</td>
                                        </tr>
                                </Spktables>
                            </div>
                        </div>
                        <div className="box-footer border-t-0">
                            <div className="flex items-center">
                                <p className="text-[15px] mb-0 me-4 font-medium">Social :</p>
                                <div className="btn-list mb-0">
                                    <SpkButton variant="soft-primary"
                                        customClass="ti-btn btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-facebook-line"></i>
                                    </SpkButton>
                                    <SpkButton variant="soft-secondary"
                                        customClass="ti-btn btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-twitter-x-line"></i>
                                    </SpkButton>
                                    <SpkButton variant="soft-warning"
                                        customClass="ti-btn btn-sm ti-btn-icon text-warning btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-instagram-line"></i>
                                    </SpkButton>
                                    <SpkButton variant="soft-success"
                                        customClass="ti-btn btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-github-line"></i>
                                    </SpkButton>
                                    <SpkButton variant="soft-danger"
                                        customClass="ti-btn btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-youtube-line"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-body">
                            <h6 className="font-medium mb-3">Subscribe to Job Alerts</h6>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control !border-s" placeholder="Your Email Address"
                                    aria-label="job-email" aria-describedby="job-subscribe"/>
                                <SpkButton variant="primary" customClass="ti-btn  !m-0" type="button"
                                    id="job-subscribe">Subscribe</SpkButton>
                            </div>
                            <label className="form-check-label">
                                By subscribing, you accept our <Link scroll={false} href="#!"
                                    className="text-success"><u>privacy policy</u></Link>.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- End::row-1 --> */}
</Fragment>
);
};

export default CandidateDetails;