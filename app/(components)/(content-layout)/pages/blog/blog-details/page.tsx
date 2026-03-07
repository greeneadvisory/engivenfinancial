"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { LightboxGallery } from "@/shared/data/pages/blog/blogdetailsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";
import SimpleBar from "simplebar-react";

interface BolgDetailsProps {}

const BolgDetails : FC<BolgDetailsProps>  = () => {
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Pages-Blogdetails" />

                <Pageheader title="Pages" subtitle="Blog" currentpage="Blog Details" activepage="Blog Details" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-9 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <Link scroll={false} href="#!" className="p-4">
                                        <img src="../../../assets/images/media/blog/18.jpg" className="card-img rounded-md blog-details-img" alt="..."/>
                                    </Link>
                                    <div className="box-body p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="h5 font-semibold mb-0">Music for the Soul: Enhancing Your Life Through Sound</p>
                                            <SpkBadge variant="secondary">Music</SpkBadge>
                                        </div>
                                        <div className="sm:flex items-center mb-3">
                                            <div className="flex items-center flex-auto">
                                                <span className="avatar avatar-sm avatar-rounded me-3">
                                                    <img src="../../../assets/images/faces/12.jpg" alt=""/>
                                                </span>
                                                <div>
                                                    <p className="mb-0 font-medium">Herbert Paul</p>
                                                    <div className="text-xs text-textmuted dark:text-textmuted/50 font-normal"><i className="ri-calendar-fill me-2 align-middle leading-none text-primarytint1color"></i>12 Jan 2024 - 06:56</div>
                                                </div>
                                            </div>
                                            <div className="btn-list sm:mt-0 mt-2 flex items-center flex-wrap">
                                                <SpkButton buttontype="button" variant="soft-primary1" Size="sm" customClass="ti-btn btn-wave"><i className="ri-thumb-up-line"></i> Like</SpkButton>
                                                <SpkButton buttontype="button" variant="soft-primary1" Size="sm" customClass="ti-btn btn-wave"><i className="ri-share-line"></i> Share</SpkButton>
                                                <SpkButton buttontype="button" variant="soft-info" Size="sm" customClass="ti-btn btn-wave"><i className="ri-message-square-line"></i> Comment</SpkButton>
                                            </div>
                                        </div>
                                        <p className="mb-4">
                                            Soul-stirring journey to discover the transformative power of music in our lives. This blog is a sanctuary for those seeking solace, inspiration, and healing through the timeless melodies that resonate within us all.
                                        </p>
                                        <p className="mb-4">
                                            From the therapeutic rhythms of drumming circles to the transcendent harmonies of choral singing, <span className="text-[14px] font-medium"> "Music for the Soul" </span> celebrates the diverse ways in which music enriches our lives and nourishes our innermost being.. Whether you're seeking refuge from the stresses of daily life, seeking inspiration for your artistic pursuits, or simply yearning to connect with something greater than yourself.
                                        </p>

                                        <p className="mb-4">Let the melodies of music be your guiding light on the path to self-discovery and spiritual awakening. Enhancing Your Life Through Sound" invites you to explore the profound impact of music on our emotional well-being, spiritual growth, and everyday existence. The transformative power of music to heal, uplift, and inspire us in ways both subtle and profound.</p>
                                        <blockquote className="blockquote custom-blockquote primary mb-4 text-center">
                                            <h6 className="lh-base">"Music for the Soul" offers a gentle reminder of the healing power that resides within every note, every chord, and every melody. </h6>
                                            <footer aria-label="footer1" className="blockquote-footer mt-3 text-primarytint1color mb-0">Someone famous as <cite title="Source Title">- Ayyan Abhi</cite></footer>
                                            <span className="quote-icon"><i className="ri-double-quotes-l"></i></span>
                                        </blockquote>
                                        <p className="mb-0">
                                            Through captivating stories, insightful reflections, and practical tips, we delve into the myriad ways in which music enriches our lives, from its ability to evoke cherished memories to its capacity to elevate our consciousness and connect us to something greater than ourselves. Whether you're seeking solace in times of sorrow, seeking inspiration in moments of doubt, or simply yearning to deepen your connection to the world around you, "Music for the Soul" offers a gentle reminder
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header">
                                        <div className="box-title">
                                            COMMENTS
                                        </div>
                                    </div>
                                    <SimpleBar className="box-body p-0" id="blog-details-comment-list">
                                        <ul className="ti-list-group list-group-flush !rounded-none !border-0" id="blog-details-comment-list">
                                            <li className="ti-list-group-item border-0 border-b">
                                                <div className="flex items-start gap-4">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/3.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-auto sm:w-[50%]">
                                                        <span className="font-medium block mb-1">Mary Cateline</span>
                                                        <span className="block mb-3">This blog captures the essence of why music is such a powerful force in our lives. It's not just about the sounds. Thank you for reminding us of the beauty and magic of music</span>
                                                        <div className="btn-list">
                                                            <SpkButton buttontype="button" Size="sm" variant="soft-primary" customClass="ti-btn btn-wave">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                            <SpkButton buttontype="button" Size="sm" variant="soft-primary1" customClass="ti-btn btn-wave">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Label="button"  buttontype="button" Size="sm" variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-thumb-up-line"></i></SpkButton>
                                                        <SpkButton Label="button"  buttontype="button" Size="sm" variant="soft-primary3" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-thumb-down-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item border-0 border-b">
                                                <div className="flex items-start gap-4 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-auto sm:w-[50%]">
                                                        <span className="font-medium block mb-1">Monte vin</span>
                                                        <span className="block mb-3">Reading your blog is like taking a journey into the heart of music itself. Your passion for the subject shines through in every word!</span>
                                                        <div className="btn-list">
                                                            <SpkButton buttontype="button" Size="sm" variant="soft-primary"  customClass="ti-btn btn-wave">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                            <SpkButton buttontype="button" Size="sm" variant="soft-primary1"  customClass="ti-btn  btn-wave">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Label="button"  buttontype="button" Size="sm" variant="soft-primary2" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-thumb-up-line"></i></SpkButton>
                                                        <SpkButton Label="button"  buttontype="button" Size="sm" variant="soft-primary3" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-thumb-down-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item border-0">
                                                <div className="flex items-start gap-4">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-auto sm:w-[50%]">
                                                        <span className="font-medium block mb-1">Master Sets</span>
                                                        <span className="block mb-3">The importance of carving out moments of stillness in our busy lives to simply listen and be present with the music. It's a powerful reminder that sometimes .</span>
                                                        <div className="btn-list">
                                                            <SpkButton buttontype="button" variant="soft-primary" Size="sm" customClass="ti-btn  btn-wave">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                            <SpkButton buttontype="button" variant="soft-primary1" Size="sm" customClass="ti-btn  btn-wave">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Label="button"  buttontype="button" Size="sm" variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-thumb-up-line"></i></SpkButton>
                                                        <SpkButton Label="button"  buttontype="button" Size="sm" variant="soft-primary3" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-thumb-down-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Leave a Comment
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="blog-first-name" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="blog-first-name" placeholder="Enter Name"/>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <label htmlFor="blog-email" className="form-label">Email ID</label>
                                                <input type="text" className="form-control" id="blog-email" placeholder="Enter Email"/>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="blog-comment" className="form-label">Write Comment</label>
                                                <textarea className="form-control" id="blog-comment" rows={4} placeholder="Write Here......."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="text-end">
                                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn ">Post Comment</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Related Topics
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <ul className="ti-list-group">
                                            <li className="ti-list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="ri-brush-fill text-[14px] p-1 rounded-2 inline-block align-middle leading-none bg-primary/10 text-primary"></i>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium ms-2">Desiging</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primary">13</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="ri-pencil-fill text-[14px] p-1 rounded-md inline-block align-middle leading-none bg-primarytint1color/10 text-primarytint1color"></i>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium ms-2">Modern</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primarytint1color">36</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="ri-microscope-fill text-[14px] p-1 rounded-md inline-block align-middle leading-none bg-primarytint2color/10 text-primarytint2color"></i>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium ms-2">Science</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primarytint2color">15</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="ri-flight-takeoff-fill text-[14px] p-1 rounded-md inline-block align-middle leading-none bg-primarytint3color/10 text-primarytint3color"></i>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium ms-2">Trips</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="primarytint3color">17</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="ri-magic-fill text-[14px] p-1 rounded-md inline-block align-middle leading-none bg-secondary/10 text-secondary"></i>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium ms-2">Beauty</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="secondary">66</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="ri-shirt-fill text-[14px] p-1 rounded-md inline-block align-middle leading-none bg-success/10 text-success"></i>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium ms-2">Styling</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="warning">33</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Recent Posts
                                        </div>
                                        <Link scroll={false} href="#!" className="text-xs text-textmuted dark:text-textmuted/50"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <div className="box-body p-0">
                                        <ul className="ti-list-group list-group-flush">
                                            <li className="ti-list-group-item">
                                                <div className="flex gap-4 flex-wrap items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/14.jpg" className="img-fluid" alt="..."/>
                                                    </span>
                                                    <div className="flex-auto truncate">
                                                        <Link scroll={false} href="#!" className="text-[14px] mb-0 text-primary">Nature</Link>
                                                        <p className="mb-1 popular-blog-content truncate font-medium">
                                                            The Wonders of Nature
                                                        </p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">18 Jan 2024, 15:46</span>
                                                    </div>
                                                    <div>
                                                        <SpkButton buttontype="button" aria-label="button"  Size="sm" customClass="ti-btn ti-btn-icon bg-light rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="flex gap-4 flex-wrap items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/15.jpg" className="img-fluid" alt="..."/>
                                                    </span>
                                                    <div className="flex-auto truncate">
                                                        <Link scroll={false} href="#!" className="text-[14px] mb-0 text-primarytint1color">Tourism</Link>
                                                        <p className="mb-1 popular-blog-content truncate font-medium">
                                                            Embarking on a Tourism
                                                        </p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">20 Feb 2024, 03:03</span>
                                                    </div>
                                                    <div>
                                                        <SpkButton Label="button" buttontype="button" Size="sm" variant="" customClass="ti-btn ti-btn-icon bg-light rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="flex gap-4 flex-wrap items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/16.jpg" className="img-fluid" alt="..."/>
                                                    </span>
                                                    <div className="flex-auto truncate">
                                                        <Link scroll={false} href="#!" className="text-[14px] mb-0 text-primarytint2color">Technology</Link>
                                                        <p className="mb-1 popular-blog-content truncate font-medium">
                                                            Navigating the Digital Frontier
                                                        </p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">05 Feb 2024, 16:23</span>
                                                    </div>
                                                    <div>
                                                        <SpkButton Label="button" buttontype="button" Size="sm" variant="" customClass="ti-btn ti-btn-icon bg-light rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="flex gap-4 flex-wrap items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/17.jpg" className="img-fluid" alt="..."/>
                                                    </span>
                                                    <div className="flex-auto truncate">
                                                        <Link scroll={false} href="#!" className="text-[14px] mb-0 text-primary3">Networking</Link>
                                                        <p className="mb-1 popular-blog-content truncate font-medium">
                                                            More Designing on websites
                                                        </p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">13 Mar 2024, 20:14</span>
                                                    </div>
                                                    <div>
                                                        <SpkButton Label="button" buttontype="button" Size="sm" variant="" customClass="ti-btn ti-btn-icon bg-light rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Gallery
                                        </div>
                                    </div>
                                    <div className="box-body">
                                         <LightboxGallery/>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box !bg-primary/10 dark:!bg-primary/10 border-0 shadow-none">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Our News Letter
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <label className="form-check-label">
                                            Subscribe for Updates on the Latest News &amp;  Posts
                                        </label>
                                        <div className="input-group mt-4">
                                            <input type="text" className="form-control border-0 shadow-none" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe"/>
                                            <SpkButton customClass="ti-btn ti-btn-primary btn-wave !m-0" buttontype="button" id="blog-subscribe">Subscribe</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Popular Tags
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="blog-popular-tags mb-2">
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#artist</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#musician</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#monology</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#promting</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#critisium</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#mentor</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#adventure</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#capturing</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#navigator</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#mountain</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#popsinger</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#lyrists</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#musicnotes</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#multiplecovers</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#facesact</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#language</SpkBadge>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <SpkBadge variant="light" customClass="!text-textmuted dark:text-textmuted/50">#fluency</SpkBadge>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default BolgDetails;