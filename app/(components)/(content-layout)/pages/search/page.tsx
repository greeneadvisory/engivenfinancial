"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { LightboxGallery } from "@/shared/data/pages/searchdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface SearchProps {}

const Search : FC<SearchProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Pages-Search" />

                <Pageheader title="Pages" currentpage="Search" activepage="Search" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body p-0">
                                <div className="p-4 border-b border-defaultborder dark:border-defaultborder/10">
                                    <div className="flex mb-3 search-result-input gap-2">
                                        <input type="text"
                                            className="form-control form-control-lg !border-s !ps-[2rem] !bg-light dark:!bg-light !rounded-full"
                                            placeholder="Search Here ..." aria-label="Search Here ..."
                                            aria-describedby="button-addon1"/>
                                        <span
                                            className="absolute start-[28px] top-[31px] text-textmuted dark:text-textmuted/50 leading-none search-result-icon"><i
                                                className="ri-search-line"></i></span>
                                        <SpkButton variant="primary"
                                            customClass="ti-btn btn-wave min-w-[6.975rem] !m-0 !rounded-full"
                                            buttontype="button" Id="button-addon1"> Search</SpkButton>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Designs
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Template
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Dashboard
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Admin
                                            Templates <Link scroll={false} href="#!"><i
                                                    className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">
                                            Templates <Link scroll={false} href="#!"><i
                                                    className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Admin
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Hosting
                                            Templates <Link scroll={false} href="#!"><i
                                                    className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Hosting
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Bootstrap
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <SpkBadge variant="light"
                                            customClass="border font-medium border-defaultborder dark:border-defaultborder/10 text-defaulttextcolor rounded-full">Sales
                                            <Link scroll={false} href="#!"><i className="ri-close-line ms-1"></i></Link></SpkBadge>
                                        <div className="ms-auto">
                                            <Link scroll={false} href="#!"
                                                className="text-primary underline font-medium mx-2"> Clear All </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex gap-2 justify-between flex-wrap items-center">
                                    <div className="text-textmuted dark:text-textmuted/50">Total of 55,142 results were
                                        found.</div>
                                    <div className="ms-auto flex gap-2 flex-wrap">
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm min-w-[8.125rem] bg-light text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle"
                                              Arrowicon={true} Toggletext="Sort By">
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Alphabets</Link>
                                                </li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">First
                                                        Word</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Numeric</Link>
                                                </li>
                                            </SpkDropdown>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm min-w-[8.125rem] ti-btn-primary ti-dropdown-toggle hs-dropdown-toggle"
                                              Arrowicon={true} Toggletext="Filter By">
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Alphabets</Link>
                                                </li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">First
                                                        Word</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Numeric</Link>
                                                </li>
                                            </SpkDropdown>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs tab-style-6 p-0 search-tab md:gap-2 gap-5 flex bg-transparent flex-wrap pb-5 px-3"
                                    role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <Link href="#!" scroll={false} className="nav-link active font-medium rounded-md" role="tab"
                                            data-hs-tab="#search-all"><i className="ri-search-line me-2"></i>All</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link href="#!" scroll={false} className="nav-link font-medium rounded-md" role="tab"
                                            data-hs-tab="#search-images"><i className="ri-image-line me-2"></i>Images</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link href="#!" scroll={false} className="nav-link font-medium rounded-md" role="tab"
                                            data-hs-tab="#search-books"><i className="ri-book-line me-2"></i>Books</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link href="#!" scroll={false} className="nav-link font-medium rounded-md" role="tab"
                                            data-hs-tab="#search-news"><i className="ri-newspaper-line me-2"></i>News</Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link href="#!" scroll={false} className="nav-link font-medium rounded-md" role="tab"
                                            data-hs-tab="#search-videos"><i className="ri-live-line me-2"></i>Videos</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="tab-content">
                            <div className="tab-pane p-0 border-0 show active" id="search-all" role="tabpanel">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="block font-medium"><a
                                                                    href="#!">Beginner</a></span>
                                                            <Link scroll={false} href="#!"
                                                                className="text-primarytint1color">
                                                                http://www.beginnerpackage.com</Link>
                                                        </div>
                                                    </div>
                                                        <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext='View' Arrowicon={true}>
                                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                                    href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                                    href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                                    href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="font-semibold mb-1"><a href="#!"
                                                            className="searched-item-main-link">Introduction to Web
                                                            Development</a></h6>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Learn the
                                                        basics of web development, including HTML, CSS, and
                                                        JavaScript.</span>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary/10" customClass="text-primary text-xs">Shop Now</SpkBadge>
                                                    <SpkBadge variant="primary/10" customClass="text-primary text-xs">Top 10
                                                        Picks</SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="block font-medium"><a
                                                                    href="#!">Responsive
                                                                    Design</a></span>
                                                            <Link scroll={false} href="#!"
                                                                className="text-primarytint1color">http://www.responsivedesigns.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext='View' Arrowicon={true}>
                                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                                    href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                                    href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item"
                                                                    href="#!">Year</Link></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="font-semibold mb-1"><a href="#!"
                                                            className="searched-item-main-link">Best Practices for
                                                            Responsive Web Design</a></h6>
                                                    <span className="block text-textmuted dark:text-textmuted/50"> Explore
                                                        the latest techniques and tools for creating responsive
                                                        websites..</span>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <SpkBadge variant="primary/10" 
                                                        customClass="text-primary text-xs">Browse
                                                        Recipes</SpkBadge>
                                                    <SpkBadge variant="primary/10"
                                                        customClass="text-primary text-xs">Nutrition
                                                        Tips</SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="block font-medium"><a
                                                                    href="#!">JavaScript,
                                                                    Frameworks</a></span>
                                                            <Link scroll={false} href="#!"
                                                                className="text-primarytint1color">http://www.javaScriptDevlops.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext='View' Arrowicon={true}>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Week</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Day</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Year</Link></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="font-semibold mb-1"><a href="#!"
                                                            className="searched-item-main-link">Advanced JavaScript
                                                            Frameworks</a></h6>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Dive deep
                                                        into popular JavaScript frameworks like React, Angular, and
                                                        Vue.js..</span>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Explore
                                                        Destinations</SpkBadge>
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Travel
                                                        Guides</SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="block font-medium"><a
                                                                    href="#!">CSS, Layouts</a></span>
                                                            <Link scroll={false} href="#!"
                                                                className="text-primarytint1color">http://www.layoutscss.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext='View' Arrowicon={true}>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Week</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Day</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Year</Link></li>
                                                    </SpkDropdown>
                                                </div>
                                                <h6 className="font-semibold mb-1"><a href="#!"
                                                        className="searched-item-main-link">CSS Flexbox Tutorial: </a><span
                                                        className="text-textmuted dark:text-textmuted/50 font-normal text-[13px]">
                                                         Master the CSS Flexbox layout model, get Videos from the
                                                        link.</span></h6>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Explore
                                                        Destinations</SpkBadge>
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Travel
                                                        Guides</SpkBadge>
                                                    <div className="ms-auto">
                                                        <span className="avatar avatar-lg flex-shrink-0 ms-auto me-1"> <img
                                                                src="../../assets/images/media/media-15.jpg "
                                                                alt=""/></span>
                                                        <span className="avatar avatar-lg flex-shrink-0 ms-auto"> <img
                                                                src="../../assets/images/media/media-16.jpg "
                                                                alt=""/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="block font-medium"><a
                                                                    href="#!">Frontend Development,
                                                                    Debugging</a></span>
                                                            <Link scroll={false} href="#!"
                                                                className="text-primarytint1color">http://www.frontenddevelopment.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext='View' Arrowicon={true}>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Week</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Day</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Year</Link></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="font-semibold mb-1"><a href="#!"
                                                            className="searched-item-main-link">Debugging Tips for Frontend
                                                            Developers</a></h6>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Discover
                                                        effective strategies for debugging frontend code and
                                                        troubleshooting common issues.</span>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Shop Now</SpkBadge>
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Trend
                                                        Alerts</SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start justify-between flex-wrap gap-1 mb-3">
                                                    <div>
                                                        <div className="">
                                                            <span className="block font-medium"><a
                                                                    href="#!"> Backend
                                                                    Development</a></span>
                                                            <Link scroll={false} href="#!"
                                                                className="text-primarytint1color">http://www.backenddevlops.com</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext='View' Arrowicon={true}>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Week</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Day</Link></li>
                                                        <li><Link scroll={false} className="ti-dropdown-item"
                                                                href="#!">Year</Link></li>
                                                    </SpkDropdown>
                                                </div>
                                                <div className="mb-3">
                                                    <h6 className="font-semibold mb-1"><a href="#!"
                                                            className="searched-item-main-link">Introduction to Backend
                                                            Development</a></h6>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Get
                                                        started with backend development using Node.js, Python, and
                                                        other server-side technologies.</span>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Explore
                                                        Books</SpkBadge>
                                                    <SpkBadge  variant="primary/10"
                                                        customClass="text-primary text-xs">Author
                                                        Interviews</SpkBadge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation" className="pagination-style-4 mb-4">
                                    <ul className="ti-pagination mb-0 flex-wrap justify-center">
                                        <li className="page-item disabled">
                                            <a className="page-link bg-white dark:!bg-bodybg" href="#!">
                                                Prev
                                            </a>
                                        </li>
                                        <li className="page-item "><a className="page-link bg-white dark:!bg-bodybg active"
                                                href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link bg-white dark:!bg-bodybg" href="#!">2</a></li>
                                        <li className="page-item">
                                            <a aria-label="anchor" className="page-link bg-white dark:!bg-bodybg" href="#!">
                                                <i className="bi bi-three-dots"></i>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link bg-white dark:!bg-bodybg" href="#!">16</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:!bg-bodybg !text-primary" href="#!">
                                                next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="search-images" role="tabpanel">
                                <div className="box">
                                    <div className="box-body pb-0">
                                         <LightboxGallery/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="search-books" role="tabpanel">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start flex-wrap gap-4 justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span
                                                                className="avatar avatar-xl border border-defaultborder dark:border-defaultborder/10">
                                                                <img src="../../assets/images/media/books/6.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span
                                                                    className="text-textmuted dark:text-textmuted/50">Published
                                                                    On</span> - <span className="font-medium mb-0">May 10,
                                                                    1902</span></div>
                                                            <h6 className="font-medium my-1 flex items-center"><a
                                                                    href="#!"> Whispers in the Wind</a>
                                                            </h6>
                                                            <span
                                                                className="block text-textmuted dark:text-textmuted/50">Set
                                                                in the Scottish Highlands, this tale follows the
                                                                forbidden love between a Highland.</span>
                                                        </div>
                                                    </div>
                                                    <div className="ti-btn-list">
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint1color/10  !me-0 text-primarytint1color">
                                                            <i
                                                                    className="ri-heart-3-line align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add to favourite
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-0">
                                                            <i
                                                            className="ri-share-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Featured Book
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-3">
                                                    <div className="popular-tags flex gap-1 flex-wrap">
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full  text-primary">Classic</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full  text-primary">Historical</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full  text-primary">Adventure</SpkBadge>
                                                    </div>
                                                    <Link scroll={false} href="#!"><span
                                                            className="font-semibold">Author:</span> <i>Emma Harper</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start flex-wrap gap-4 justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span
                                                                className="avatar avatar-xl border border-defaultborder dark:border-defaultborder/10">
                                                                <img src="../../assets/images/media/books/3.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span
                                                                    className="text-textmuted dark:text-textmuted/50">Published
                                                                    On</span> - <span className="font-medium mb-0">Jun 08,
                                                                    1994</span></div>
                                                            <h6 className="font-medium my-1 flex items-center"><a
                                                                    href="#!"> The Quantum Enigma</a>
                                                            </h6>
                                                            <span className="block text-textmuted dark:text-textmuted/50">A
                                                                brilliant physicist stumbles upon a groundbreaking
                                                                quantum discovery, but soon finds..</span>
                                                        </div>
                                                    </div>
                                                    <div className="ti-btn-list">
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint1color/10  !me-0 text-primarytint1color">
                                                            <i
                                                                    className="ri-heart-3-line align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add to favourite
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-0">
                                                            <i
                                                            className="ri-share-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Featured Book
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-3">
                                                    <div className="popular-tags flex gap-1 flex-wrap">
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">
                                                            Science Fiction</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Mystery</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Thriller</SpkBadge>
                                                    </div>
                                                    <Link scroll={false} href="#!"><span
                                                            className="font-semibold">Author:</span> <i>Dr. James
                                                            Holloway</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start flex-wrap gap-4 justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span
                                                                className="avatar avatar-xl border border-defaultborder dark:border-defaultborder/10">
                                                                <img src="../../assets/images/media/books/1.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span
                                                                    className="text-textmuted dark:text-textmuted/50">Published
                                                                    On</span> - <span className="font-medium mb-0">Apr 15,
                                                                    2010</span></div>
                                                            <h6 className="font-medium my-1 flex items-center"><a
                                                                    href="#!"> Echoes of Eternity</a>
                                                            </h6>
                                                            <span className="block text-textmuted dark:text-textmuted/50">In
                                                                a world where magic is fading, a young mage must embark
                                                                on a perilous..</span>
                                                        </div>
                                                    </div>
                                                    <div className="ti-btn-list">
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint1color/10  !me-0 text-primarytint1color">
                                                            <i
                                                                    className="ri-heart-3-line align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add to favourite
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-0">
                                                            <i
                                                            className="ri-share-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Featured Book
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-3">
                                                    <div className="popular-tags flex gap-1 flex-wrap">
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">
                                                            Epic</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Fantasy</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Adventure</SpkBadge>
                                                    </div>
                                                    <Link scroll={false} href="#!"><span
                                                            className="font-semibold">Author:</span> <i>Sophia
                                                            Turner</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start flex-wrap gap-4 justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span
                                                                className="avatar avatar-xl border border-defaultborder dark:border-defaultborder/10">
                                                                <img src="../../assets/images/media/books/2.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span
                                                                    className="text-textmuted dark:text-textmuted/50">Published
                                                                    On</span> - <span className="font-medium mb-0">Oct 22,
                                                                    1889</span></div>
                                                            <h6 className="font-medium my-1 flex items-center"><a
                                                                    href="#!"> Culinary Alchemy</a>
                                                            </h6>
                                                            <span
                                                                className="block text-textmuted dark:text-textmuted/50">Discover
                                                                the secrets of transforming simple ingredients
                                                                into..</span>
                                                        </div>
                                                    </div>
                                                    <div className="ti-btn-list">
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint1color/10  !me-0 text-primarytint1color">
                                                            <i
                                                                    className="ri-heart-3-line align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add to favourite
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-0">
                                                            <i
                                                            className="ri-share-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Featured Book
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-3">
                                                    <div className="popular-tags flex gap-1 flex-wrap">
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">
                                                            Cooking</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Non-fiction</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Self-help</SpkBadge>
                                                    </div>
                                                    <Link scroll={false} href="#!"><span
                                                            className="font-semibold">Author:</span> <i>Gordon
                                                            Meyers</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start flex-wrap gap-4 justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span
                                                                className="avatar avatar-xl border border-defaultborder dark:border-defaultborder/10">
                                                                <img src="../../assets/images/media/books/4.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span
                                                                    className="text-textmuted dark:text-textmuted/50">Published
                                                                    On</span> - <span className="font-medium mb-0">Jan 06,
                                                                    1999</span></div>
                                                            <h6 className="font-medium my-1 flex items-center"><a
                                                                    href="#!"> Shadows of the Mind</a>
                                                            </h6>
                                                            <span className="block text-textmuted dark:text-textmuted/50">A
                                                                forensic psychologist with a dark past is drawn into a
                                                                series..</span>
                                                        </div>
                                                    </div>
                                                    <div className="ti-btn-list">
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint1color/10  !me-0 text-primarytint1color">
                                                            <i
                                                                    className="ri-heart-3-line align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add to favourite
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-0">
                                                            <i
                                                            className="ri-share-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Featured Book
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-3">
                                                    <div className="popular-tags flex gap-1 flex-wrap">
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full  text-primary">
                                                            Psychological Thriller</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full  text-primary">Crime</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full  text-primary">Suspense</SpkBadge>
                                                    </div>
                                                    <Link scroll={false} href="#!"><span
                                                            className="font-semibold">Author:</span> <i> Dr. Lisa
                                                            Bennett</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="flex items-start flex-wrap gap-4 justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span
                                                                className="avatar avatar-xl border border-defaultborder dark:border-defaultborder/10">
                                                                <img src="../../assets/images/media/books/5.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <div><span
                                                                    className="text-textmuted dark:text-textmuted/50">Published
                                                                    On</span> - <span className="font-medium mb-0">Feb 16,
                                                                    2003</span></div>
                                                            <h6 className="font-medium my-1 flex items-center"><a
                                                                    href="#!"> The Last Garden</a></h6>
                                                            <span className="block text-textmuted dark:text-textmuted/50">In
                                                                a future where Earth’s ecosystems are collapsing, a
                                                                group..</span>
                                                        </div>
                                                    </div>
                                                    <div className="ti-btn-list">
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint1color/10  !me-0 text-primarytint1color">
                                                            <i
                                                                    className="ri-heart-3-line align-middle"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Add to favourite
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="!me-0">
                                                            <Link scroll={false} href="#!"
                                                            className="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-0">
                                                            <i
                                                            className="ri-share-line"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Featured Book
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between mt-3">
                                                    <div className="popular-tags flex gap-1 flex-wrap">
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Dystopian</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Environmental</SpkBadge>
                                                        <SpkBadge variant="primary/10"
                                                            customClass="rounded-full text-primary">Drama</SpkBadge>
                                                    </div>
                                                    <Link scroll={false} href="#!"><span
                                                            className="font-semibold">Author:</span> <i> Marcus Reed</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12 mb-4 flex justify-center">
                                        <SpkButton buttontype="button" customClass="ti-btn bg-info/10 text-info ti-btn-loader"> <span
                                                className="me-2">Loading</span> <span className="loading"><i
                                                    className="ri-loader-4-line text-[1rem] animate-spin"></i></span>
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="search-news" role="tabpanel">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Quantum Physicists Break New Ground</h6>
                                                    <div className="mb-1"><i
                                                            className="ri-calendar-line p-1 me-1 bg-primary/10 text-primary !rounded-full leading-none mb-1"></i>
                                                        10,Mar 2024 - 3:15PM</div>
                                                    <div><i
                                                            className="ri-map-pin-line text-primarytint1color p-1 me-1 bg-primarytint1color/10 !rounded-full leading-none"></i>
                                                        Quantum Research Facility, Geneva</div>
                                                </div>
                                                <span className="text-textmuted dark:text-textmuted/50">
                                                    In a groundbreaking experiment, quantum physicists have detected a
                                                    previously unknown subatomic particle, challenging.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Stunning Images from NASA's Perseverance Rover
                                                    </h6>
                                                    <div><i
                                                            className="ri-calendar-line p-1 me-1 bg-primary/10 text-primary !rounded-full leading-none mb-1"></i>
                                                        8,Apr 2024 - 9:00AM</div>
                                                    <div><i
                                                            className="ri-map-pin-line text-primarytint1color p-1 me-1 bg-primarytint1color/10 !rounded-full leading-none"></i>
                                                        Jezero Crater, Mars</div>
                                                </div>
                                                <span className="text-textmuted dark:text-textmuted/50">
                                                    NASA's Perseverance rover has captured breathtaking images of the
                                                    Martian landscape, revealing tantalizing clues about the planet's
                                                    geology.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Breakthrough in Cancer Research</h6>
                                                    <div className="mb-1"><i
                                                            className="ri-calendar-line p-1 me-1 bg-primary/10 text-primary !rounded-full leading-none mb-1"></i>
                                                        5,May 2024 - 1:45PM</div>
                                                    <div><i
                                                            className="ri-map-pin-line text-primarytint1color p-1 me-1 bg-primarytint1color/10 !rounded-full leading-none"></i>
                                                        Genetech Laboratories</div>
                                                </div>
                                                <span className="text-textmuted dark:text-textmuted/50">
                                                    Researchers have made a significant breakthrough in cancer treatment
                                                    with the development of a novel therapy that targets
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Chef Julia Rodriguez Launches Global Initiative
                                                    </h6>
                                                    <div className="mb-1"><i
                                                            className="ri-calendar-line p-1 me-1 bg-primary/10 text-primary !rounded-full leading-none mb-1"></i>
                                                        5,Jun 2024 - 11:30AM</div>
                                                    <div><i
                                                            className="ri-map-pin-line text-primarytint1color p-1 me-1 bg-primarytint1color/10 !rounded-full leading-none"></i>
                                                        20 countries</div>
                                                </div>
                                                <span className="text-textmuted dark:text-textmuted/50">
                                                    Renowned chef and humanitarian, Chef Julia Rodriguez, has launched a
                                                    global initiative to combat
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Historic Peace Agreement Signed</h6>
                                                    <div className="mb-1"><i
                                                            className="ri-calendar-line p-1 me-1 bg-primary/10 text-primary !rounded-full leading-none mb-1"></i>
                                                        22,Jul 2024 - 4:20PM</div>
                                                    <div><i
                                                            className="ri-map-pin-line text-primarytint1color p-1 me-1 bg-primarytint1color/10 !rounded-full leading-none"></i>
                                                        United Nations</div>
                                                </div>
                                                <span className="text-textmuted dark:text-textmuted/50">
                                                    In a historic move, long-time rival nations have signed a landmark
                                                    peace agreement.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="mb-2">
                                                    <h6 className="mb-3"> Breakthrough in Renewable Energy</h6>
                                                    <div className="mb-1"><i
                                                            className="ri-calendar-line p-1 me-1 bg-primary/10 text-primary !rounded-full leading-none mb-1"></i>
                                                        8,Aug 2024 - 10:00AM</div>
                                                    <div><i
                                                            className="ri-map-pin-line text-primarytint1color p-1 me-1 bg-primarytint1color/10 !rounded-full leading-none"></i>
                                                        SolarTech Innovations</div>
                                                </div>
                                                <span className="text-textmuted dark:text-textmuted/50">
                                                    Scientists have achieved a major breakthrough in renewable energy
                                                    with the development
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation" className="pagination-style-4 mb-4">
                                    <ul className="ti-pagination mb-0 flex-wrap justify-center">
                                        <li className="page-item disabled">
                                            <a className="page-link bg-white dark:!bg-bodybg" href="#!">
                                                Prev
                                            </a>
                                        </li>
                                        <li className="page-item "><a className="page-link bg-white dark:!bg-bodybg active"
                                                href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link bg-white dark:!bg-bodybg" href="#!">2</a></li>
                                        <li className="page-item">
                                            <a aria-label="anchor" className="page-link bg-white dark:!bg-bodybg" href="#!">
                                                <i className="bi bi-three-dots"></i>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link bg-white dark:!bg-bodybg" href="#!">16</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link bg-white dark:!bg-bodybg !text-primary" href="#!">
                                                next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="tab-pane border-0 p-0 hidden" id="search-videos" role="tabpanel">
                                <div className="box">
                                    <div className="box-body pb-1">
                                        <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                                                <div className="ratio aspect-video">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0"
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="figure-caption text-[13px] font-medium text-defaulttextcolor truncate">
                                                            Valex - Bootstrap 5 Admin & Dashboard HTML Template</div>
                                                    </div>
                                                    <a href="https://www.spruko.com/demo/valex/" target="_blank"
                                                        className="text-xs link-primary underline text-break">https://www.spruko.com/demo/valex/</a>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                                                <div className="ratio  aspect-video">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy"
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="figure-caption text-[13px] font-medium text-defaulttextcolor truncate">
                                                            Azea - Admin & Dashboard Bootstrap 5 HTML5 Template</div>
                                                    </div>
                                                    <a href="https://spruko.com/demo/azea/" target="_blank"
                                                        className="text-xs link-primary underline text-break">https://spruko.com/demo/azea/</a>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                                                <div className="ratio  aspect-video">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5"
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="figure-caption text-[13px] font-medium text-defaulttextcolor truncate">
                                                            XYNTRA - HTML Installation & Usage process</div>
                                                    </div>
                                                    <a href="https://spruko.com/demo/xyntra/" target="_blank"
                                                        className="text-xs link-primary underline text-break">https://spruko.com/demo/xyntra/</a>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                                                <div className="ratio  aspect-video">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius"
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="figure-caption text-[13px] font-medium text-defaulttextcolor truncate">
                                                            Sash - Admin and Dashboard Multipurpose HTML Advanced
                                                            Template</div>
                                                    </div>
                                                    <a href="https://spruko.com/demo/sash/" target="_blank"
                                                        className="text-xs link-primary underline text-break">https://spruko.com/demo/sash/</a>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                                                <div className="ratio  aspect-video">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5"
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="figure-caption text-[13px] font-medium text-defaulttextcolor truncate">
                                                            Xyntra - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                    </div>
                                                    <a href="https://spruko.com/demo/xyntra/" target="_blank"
                                                        className="text-xs link-primary underline text-break">https://spruko.com/demo/xyntra/</a>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12">
                                                <div className="ratio  aspect-video">
                                                    <iframe
                                                        src="https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y"
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center gap-1">
                                                        <div
                                                            className="figure-caption text-[13px] font-medium text-defaulttextcolor truncate">
                                                            Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                    </div>
                                                    <a href="https://spruko.com/demo/zanex/" target="_blank"
                                                        className="text-xs link-primary underline text-break">https://spruko.com/demo/zanex/</a>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12 flex justify-center my-3">
                                                <SpkButton buttontype="button" customClass="ti-btn bg-info/10 text-info ti-btn-loader">
                                                    <span className="me-2">Loading</span> <span className="loading"><i
                                                            className="ri-loader-4-line text-[1rem] animate-spin"></i></span>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}
</Fragment>
);
};

export default Search;