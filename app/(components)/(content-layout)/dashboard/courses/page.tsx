"use client"
import SpkCoursecardcomponent from "@/shared/@spk-reusable-components/dashboards/spk-cousecard";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Coursedata, Courselist, CourseSwiper, Coursetop, Earningsoptions, Earningsseries, Professordata, UpcomingTasks } from "@/shared/data/dashboard/coursesdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface CoursesProps {}

const Courses : FC<CoursesProps>  = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-Courses" />

            <Pageheader title="Dashboards" currentpage="Courses" activepage="Courses" />

        {/* <!-- End::page-header --> */}
       {/* <!-- Start::Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-7 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {Coursedata.map((idx) => (
                                <div className="sm:col-span-6 xl:col-span-3 col-span-12" key={idx.id}>
                                     <SpkCoursecardcomponent cardClass="overflow-hidden" total={idx.total} svgIcon={idx.svgicon} icon={idx.icon} color={idx.color} color1={idx.color1} percent={idx.percent} price={idx.price} inc={idx.inc} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box course-main overflow-hidden cover-image bg-cover bg-primary dark:!bg-primary">
                            <div className="box-body p-6">
                                <div className="grid grid-cols-12 justify-between">
                                    <div className="xl:col-span-8 md:col-span-8 col-span-12 pe-3">
                                        <h5 className="font-medium mb-2 text-white">Welcome Back, Henry &#128075; </h5>
                                        <span className="text-white block mb-2 opacity-70">You've reached 90% of your goal this month! Keep going and boost your skills with courses.</span>
                                        <SpkButton  buttontype="button" customClass="ti-btn bg-primarytint1color text-white btn-w-md !mt-2 !mb-0">View Courses</SpkButton>
                                    </div>
                                    <div className="xl:col-span-3 md:col-span-4 col-span-12 text-end px-3">
                                        <img src="../../assets/images/media/media-81.png" alt="" className="img-fluid banner10-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::Row-1 --> */}

                {/* <!-- Start::Row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Upcoming Tasks
                                </div>
                                <div>
                                    <SpkButton buttontype="button" Size="sm" variant="light" customClass="ti-btn">View All</SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-none mb-0 Upcoming-courses-schedule">
                                    {UpcomingTasks.map((course) => (
                                        <li className="list-item" key={course.id}>
                                            <div className="sm:flex items-center justify-between flex-wrap">
                                                <div className="ms-3 mb-1 mb-sm-0 ps-1 course-schedule">
                                                    <p className="font-medium mb-sm-1 mb-0">{course.title}</p>
                                                    <span className="text-textmuted dark:text-textmuted/50">{course.date}</span>
                                                </div>
                                                <div className="min-w-fit-content flex items-center text-textmuted dark:text-textmuted/50 text-xs">
                                                    <span><i className="fe fe-clock me-1 text-xs"></i></span>
                                                    <span>{course.start}</span>
                                                    <span className="mx-2 text-textmuted dark:text-textmuted/50">-</span>
                                                    <span>{course.end}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Revenue Statistics</div>
                                <div className="flex gap-2">
                                    <div className="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm">Today</div>
                                    <div className="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm">Weakly</div>
                                    <div className="ti-btn ti-btn-light border ti-btn-full ti-btn-sm">Yearly</div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="earning">
                                     <Spkapexcharts chartOptions={Earningsoptions} chartSeries={Earningsseries} type="line" width={"100%"} height={344} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Top Categories
                                </div>
                                <div>
                                    <SpkButton buttontype="button" Size="sm" customClass="ti-btn bg-light">View All</SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="flex flex-col list-group top-categories">
                                    {Coursetop.map((idx) => (
                                        <li className={`p-0 ti-list-group-item ${idx.class} border-0 text-defaulttextcolor`} key={idx.id}>
                                            <Link scroll={false} href="#!" className="w-full">
                                                <div className="flex items-center">
                                                    <span className={`avatar rounded-sm avatar-md bg-${idx.color}/10 !text-${idx.color} p-4`}>
                                                     <i className={`ri-${idx.icon} text-xl leading-none`}></i></span>
                                                    <div className="flex-auto ms-3">
                                                        <p className="text-[14px] font-medium mb-0">{idx.data}</p>
                                                        <p className="text-xs text-textmuted dark:text-textmuted/50 !mb-0">{idx.data1}</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <span className="text-[14px] text-defaulttextcolor font-medium">{idx.data2}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::Row-2 --> */}

                {/* <!-- Start::Row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Top Courses
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-icons ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle" 
                                     Icon={true} IconClass="fe fe-more-vertical">
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <ul className="flex flex-col list-none mb-0 popular-course">
                                    <li className="text-textmuted dark:text-textmuted/50 mb-4">
                                        <div className="sm:flex items-start w-full">
                                            <Link scroll={false} href="#!" className="pe-4 inline-block sm:mb-0 mb-2">
                                            <img src="../../assets/images/media/media-13.jpg" alt="img" className="avatar avatar-xl rounded-2"/>
                                            </Link>
                                            <div className="grow font-medium">
                                                <div className="flex items-center" title="Instructor">
                                                    <Link scroll={false} href="#!" className="pe-2">
                                                    <img src="../../assets/images/faces/1.jpg" alt="img" className="avatar avatar-xs"/>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="grow text-defaulttextcolor op-8">Natasha
                                                    Sil</Link>
                                                    <Link scroll={false} href="#!" className=" block mb-1 font-normal badge bg-primarytint3color/10 text-primarytint3color" title="Category"><i className="ri-price-tag-3-line "></i> UI/UX</Link>
                                                </div>
                                                <Link scroll={false} href="#!" className=" block mb-2 font-medium">
                                                Mastering CSS Pseudo-classes: From Basics to Advanced Techniques.</Link>
                                                <div className="md:flex justify-between items-center">
                                                <div className="min-w-fit text-xs text-textmuted dark:text-textmuted/50 op-8 d-inline-flex">
                                                    <span className="me-2 my-auto">
                                                    <i className="ri-eye-line me-1 inline-block"></i> 
                                                        2,189 Views
                                                    </span> 
                                                </div>
                                                <div className="min-w-fit text-[11px] text-defaulttextcolor d-inline-flex">
                                                    <span>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-half-fill text-warning"></i>(4.2)
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=" text-textmuted dark:text-textmuted/50 mb-4">
                                        <div className="sm:flex items-start w-full">
                                            <Link scroll={false} href="#!" className="pe-4 inline-block sm:mb-0 mb-2">
                                            <img src="../../assets/images/media/media-14.jpg" alt="img" className="avatar avatar-xl rounded-2"/>
                                            </Link>
                                            <div className="grow font-medium">
                                                <div className="flex items-center" title="Instructor">
                                                    <Link scroll={false} href="#!" className="pe-2">
                                                    <img src="../../assets/images/faces/6.jpg" alt="img" className="avatar avatar-xs"/>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="grow text-defaulttextcolor op-8">Catalina Keira
                                                    </Link>
                                                    <Link scroll={false} href="#!" className=" block mb-1 font-normal badge bg-primarytint2color/10 text-primarytint2color" title="Category"><i className="ri-price-tag-3-line "></i> Marketing</Link>
                                                </div>
                                                <Link scroll={false} href="#!" className=" block mb-2 font-medium">
                                                    Marketing Essentials: Understanding its Role in Business Success.</Link>
                                                <div className="md:flex justify-between items-center">
                                                <div className="min-w-fit text-xs text-textmuted dark:text-textmuted/50 op-8 d-inline-flex">
                                                    <span className="me-2 my-auto">
                                                    <i className="ri-eye-line me-1 inline-block"></i> 
                                                    1,116 Views
                                                    </span> 
                                                </div>
                                                <div className="min-w-fit text-[11px] text-defaulttextcolor d-inline-flex">
                                                    <span>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-fill me-1 text-warning"></i>
                                                        <i className="ri-star-half-fill text-warning"></i>(4.3)
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=" text-textmuted dark:text-textmuted/50 mb-2">
                                      <div className="sm:flex items-start w-full">
                                        <Link scroll={false} href="#!" className="pe-4 inline-block sm:mb-0 mb-2">
                                          <img src="../../assets/images/media/media-12.jpg" alt="img" className="avatar avatar-xl rounded-2"/>
                                        </Link>
                                        <div className="grow font-medium">
                                            <div className="flex items-center" title="Instructor">
                                                <Link scroll={false} href="#!" className="pe-2">
                                                <img src="../../assets/images/faces/11.jpg" alt="img" className="avatar avatar-xs"/>
                                                </Link>
                                                <Link scroll={false} href="#!" className="grow text-defaulttextcolor op-8">Telsko 
                                                    William</Link>
                                                <Link scroll={false} href="#!" className=" block mb-1 font-normal badge bg-primarytint1color/10 text-primarytint1color" title="Category"><i className="ri-price-tag-3-line "></i> Python</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className=" block mb-2 font-medium">
                                                Python Mastery: Shallow Copy vs. Deep Copy and Practical Techniques.</Link>
                                            <div className="md:flex justify-between items-center">
                                            <div className="min-w-fit text-xs text-textmuted dark:text-textmuted/50 op-8 d-inline-flex">
                                                <span className="me-2 my-auto">
                                                <i className="ri-eye-line me-1 inline-block"></i> 
                                                2,245 Views
                                                </span> 
                                            </div>
                                            <div className="min-w-fit text-[11px] text-defaulttextcolor d-inline-flex">
                                                <span>
                                                    <i className="ri-star-fill me-1 text-warning"></i>
                                                    <i className="ri-star-fill me-1 text-warning"></i>
                                                    <i className="ri-star-fill me-1 text-warning"></i>
                                                    <i className="ri-star-fill me-1 text-warning"></i>
                                                    <i className="ri-star-half-fill text-warning"></i>(4.2)
                                                </span>
                                            </div>
                                            </div>
                                        </div>
                                      </div>
                                    </li>
                                </ul>
                                <div className="ti-btn ti-btn-soft-primary mt-3 grid"> View All Courses</div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-7 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Latest Courses
                                </div>
                                <div>
                                    <SpkButton  buttontype="button" Size="sm" customClass="ti-btn bg-light">View All</SpkButton>
                                </div>
                            </div>
                            <div className="box-body !pt-1">
                                <SpkSwiperJs className="crypto-swiper swiper-basic mySwiper" slidesPerView={3} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints}
                                    slides={CourseSwiper} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::Row-3 --> */}

                {/* <!-- Start::Row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Course List
                                </div>
                                <div className="flex flex-wrap">
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-light ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle" Toggletext="View All" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                header={[{ title: 'S.No' }, { title: 'Course' }, { title: 'Classes' }, { title: 'Last Updated' }, { title: 'Instructor' }, { title: 'Students' }, { title: 'Actions' }]}>
                                    {Courselist.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                {idx.id}
                                            </td>
                                            <td>
                                                <div className="flex items-center leading-none">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-[14px] font-medium mb-1">{idx.data}</p>
                                                        <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">{idx.data1}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.classes}
                                            </td>
                                            <td>
                                                {idx.update}
                                            </td>
                                            <td>
                                                {idx.instructor}
                                            </td>
                                            <td>
                                                {idx.student}
                                            </td>
                                            <td>
                                                <SpkOverlay customClass="[--placement:top]">
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-2 ti-btn-soft-primary">
                                                        <i
                                                            className="ti ti-eye"></i>
                                                        <span
                                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                            role="tooltip">
                                                        View
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay customClass="[--placement:top]">
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-2 ti-btn-soft-secondary">
                                                        <i
                                                            className="ti ti-pencil"></i>
                                                        <span
                                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                                <SpkOverlay customClass="[--placement:top]">
                                                    <Link scroll={false} aria-label="anchor" href="#!" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-sm !rounded-full me-2 ti-btn-soft-danger">
                                                        <i
                                                        className="ti ti-trash"></i>
                                                        <span
                                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </Link>
                                                </SpkOverlay>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                                <div className="flex flex-wrap items-center mt-3">
                                    <div>
                                        Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="ti-pagination mb-0 flex-wrap">
                                                <li className="page-item disabled">
                                                    <Link scroll={false} className="page-link" href="#!">
                                                        Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item "><Link scroll={false} className="page-link active"
                                                        href="#!">1</Link></li>
                                                <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                                
                                                <li className="page-item">
                                                    <Link scroll={false} className="page-link !text-primary" href="#!">
                                                        next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Top Professors
                                </div>
                                <div>
                                    <SpkButton buttontype="button" Size="sm" customClass="ti-btn bg-light">View All</SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-none courses-instructors mb-0">
                                {Professordata.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="flex">
                                            <div className="flex flex-auto items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block font-medium">{idx.data}</span>
                                                    <span className="text-textmuted dark:text-textmuted/50">{idx.data1}</span>
                                                </div>
                                            </div>
                                            <div className="text-end ms-auto">
                                                <span className="block font-medium">{idx.data2}</span>
                                                <span className="text-textmuted dark:text-textmuted/50">{idx.data3}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::Row-4 --> */}
</Fragment>
);
};

export default Courses;