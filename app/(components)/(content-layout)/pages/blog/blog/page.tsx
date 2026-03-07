"use client"
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Categoriesdata, Featuredblogdata, Relatedblogdata } from "@/shared/data/pages/blog/blogdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, Fragment } from "react";

interface BolgProps {}

const Bolg : FC<BolgProps>  = () => {
    const router = useRouter();

     const Carouseldata = [
        <div><img src="../../../assets/images/media/blog/1.jpg" className="block w-full" alt="" /></div>,
        <div><img src="../../../assets/images/media/blog/3.jpg" className="block w-full" alt="" /></div>,
        <div><img src="../../../assets/images/media/blog/2.jpg" className="block w-full" alt="" /></div>,
    ];
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Pages-Blog" />

                <Pageheader title="Pages" subtitle="Blog" currentpage="Blog" activepage="Blog" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body p-0">
                                <div  className="stretched-link"
                                role="button"
                                onClick={() => router.push("/pages/blog/blog-details")}
                                style={{ cursor: "pointer" }}>
                                </div>
                                    <SpkSwiperJs slides={Carouseldata} mainClass="blog-carousel" spaceBetween={30} autoplay={true} className="mySwiper swiper-basic" />
                                <div className="p-4">
                                    <h5 className="font-semibold"><Link scroll={false} href="/pages/blog/blog-details">Melodic Mastery: A Deep Dive into Music Notes</Link></h5>
                                    <p className="mb-3">Exploring the intricate symbols and structures that form the foundation of every melody.</p>
                                    <p className="mb-3">As musicologist Charles Seeger notes, “Music is a system of communication involving structured sounds produced by members of a community that communicate with other members”</p>
                                    <p className="mb-3">“Music” is one of the most difficult terms to define, partially because beliefs about music have changed dramatically over time just in Western culture alone.<Link scroll={false} href="#!" className="font-medium text-primary ms-2 align-middle text-xs text-Augoration-underline inline-block">Read More</Link></p>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="avatar avatar-md avatar-rounded me-2">
                                                <img src="../../../assets/images/faces/11.jpg" alt=""/>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-medium">Justin Roy</p>
                                                <p className="text-textmuted dark:text-textmuted/50 text-xs mb-0">26,Mar 2024 - 15:37</p>
                                            </div>
                                        </div>
                                        <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                            <i className="ri-heart-line text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xxl:col-span-7 col-span-12">
                                <div className="box">
                                    <div className="grid grid-cols-12 gap-x-0">
                                        <div className="xxl:col-span-8 md:col-span-10 sm:col-span-10 col-span-12">
                                            <div className="box-body">
                                                <h5 className="font-semibold">
                                                    <Link scroll={false} href="#!">Listening: Finding Happiness in Music</Link>
                                                </h5>
                                                <span className="block mb-3">
                                                    Different genres and melodies can evoke joy, reduce stress, and create lasting memories. <Link scroll={false} href="#!" className="font-medium text-primary ms-2 align-middle text-xs text-Augoration-underline inline-block">
                                                        Read More
                                                    </Link>
                                                </span>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start flex-wrap">
                                                        <div className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="" className=""/>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 font-medium">Nicolas Noor</p>
                                                            <div className="text-textmuted dark:text-textmuted/50 text-xs mb-0">20,Aug 2024 - 16:32</div>
                                                        </div>
                                                    </div>
                                                    <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                                        <i className="ri-heart-line text-danger"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-4 md:col-span-2 sm:col-span-2 col-span-12">
                                            <img src="../../../assets/images/media/blog/4.jpg" className="img-fluid !rounded-tr-md !rounded-br-md h-full w-full" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="grid grid-cols-12 gap-x-6 g-0 justify-center">
                                        <div className="sm:col-span-12 col-span-12">
                                            <div className="box-body">
                                                <h5 className="font-semibold">
                                                    <Link scroll={false} href="#!">Music for the Soul: Enhancing Your Life Through Sound</Link>
                                                </h5>
                                                <span className="block mb-3">
                                                    Learn how to create sacred spaces for musical reflection, find solace in times of hardship, and cultivate mindfulness through. <Link scroll={false} href="#!" className="font-medium text-primary ms-2 align-middle text-xs text-Augoration-underline inline-block">
                                                        Read More
                                                    </Link>
                                                </span>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/8.jpg" alt=""/>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 font-medium">Sissera William</p>
                                                            <div className="text-textmuted dark:text-textmuted/50 text-xs mb-0">25,Aug 2024 - 04:25</div>
                                                        </div>
                                                    </div>
                                                    <div className="avatar avatar-sm bg-danger/10 avatar-rounded ms-auto">
                                                        <i className="ri-heart-fill text-danger"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-12 col-span-12 text-center">
                                            <div className="box-body pt-1">
                                                <img src="../../../assets/images/media/blog/9.jpg" className="img-fluid rounded-md w-full" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-5 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Categories :
                                        </div>
                                        <Link scroll={false} href="#!" className="ti-btn bg-light btn-wave ti-btn-sm text-textmuted dark:text-textmuted/50 waves-effect waves-light">All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                                    </div>
                                    <div className="box-body p-0">
                                        <ul className="ti-list-group list-group-flush list-style !border-0">
                                            {Categoriesdata.map((idx) => (
                                                <li className="ti-list-group-item" key={idx.id}>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium"><i className={`ri-${idx.icon} text-[14px] p-1 rounded-md me-2 inline-block align-middle leading-none bg-${idx.color}/10 text-${idx.color}`}></i>{idx.title}</span>
                                                        <SpkBadge variant="primary/10" customClass="text-primary">{idx.text}</SpkBadge>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="box overflow-hidden">
                                    <div className="box-header flex items-center justify-between">
                                        <div className="box-title">
                                            Related Blogs:
                                        </div>
                                        <div>
                                            <SpkBadge variant="primary/10" customClass="text-primary rounded-full">15</SpkBadge>
                                        </div>
                                    </div>
                                    <div className="box-body p-0">
                                        <ul className="ti-list-group list-group-flush !border-t-0 !rounded-none">
                                            {Relatedblogdata.map((idx) => (
                                                <li className="ti-list-group-item border-b-0" key={idx.id}>
                                                    <div className="flex flew-wrap truncate items-center gap-2">
                                                        <span className="avatar avatar-xl flex-shrink-0 me-1">
                                                            <img src={idx.src} className="img-fluid" alt="..."/>
                                                        </span>
                                                        <div className="flex-auto text-wrap">
                                                            <Link scroll={false} href="#!" className="text-[14px] font-medium mb-0">Jack Diamond</Link>
                                                            <p className="mb-1 popular-blog-content truncate text-textmuted dark:text-textmuted/50">
                                                                To generate....
                                                            </p>
                                                            <span className="text-textmuted dark:text-textmuted/50 text-[10px]">25,Mar 2024 - 22:30</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="p-4 pt-2 mt-1">
                                            <SpkButton variant="primary" customClass="ti-btn mx-auto ti-btn-loader text-center justify-center w-full">
                                                <span className="me-2">Load More</span>
                                                <span className="loading"><i className="ri-loader-4-line text-[1rem]"></i></span>
                                            </SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}

                 {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 lg:col-span-12 md:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header flex items-center justify-between">
                                <div className="box-title">
                                    Featured Blogs
                                </div>
                                <div>
                                    <SpkBadge variant="primary/10" customClass="text-primary">23 Blogs</SpkBadge>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group list-group-flush !rounded-none !border-t-0">
                                    {Featuredblogdata.map((idx) => (
                                        <li className={`ti-list-group-item ${idx.class}`} key={idx.id}>
                                            <div className="flex flex-wrap items-center gap-4">
                                                <span className="avatar avatar-lg">
                                                    <img src={idx.src} className="img-fluid" alt="..."/>
                                                </span>
                                                <div className="flex-auto">
                                                    <Link scroll={false} href="#!" className="text-[14px] font-medium mb-1">{idx.title}</Link>
                                                    <p className="mb-0 mt-1 popular-blog-content truncate">
                                                         {idx.text}
                                                    </p>
                                                    
                                                </div>
                                                <div>
                                                    <SpkButton variant="" Size="sm" customClass="ti-btn ti-btn-icon bg-light rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-4 pt-2">
                                    <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn mx-auto  ti-btn-loader text-center justify-center w-full !mb-0">
                                        <span className="me-2">Load More</span>
                                        <span className="loading"><i className="ri-loader-4-line text-[1rem]"></i></span>
                                    </SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-8 lg:col-span-12 md:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div className="box">
                                        <Link scroll={false} href="#!" className="p-4 pb-0 rounded-5">
                                            <img src="../../../assets/images/media/blog/15.jpg" className="rounded-3 card-img-top" alt="..."/>
                                        </Link>
                                    <div className="box-body">
                                        <Link scroll={false} href="/pages/blog/blog-details" className="h5 font-semibold mb-2 block lh-base">Beats to Bliss</Link>
                                        <p className="mb-4">Experiencing the Euphoria of Music<Link scroll={false} href="#!" className="font-medium text-primary ms-2 align-middle text-xs text-Augoration-underline inline-block">Read More ?</Link></p>
                                        <div className="flex flex-wrap items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="../../../assets/images/faces/11.jpg" alt=""/>
                                                </div>
                                                <div>
                                                    <p className="mb-0 font-medium">Tilly</p>
                                                    <span className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">19,Apr 2024 - 15:45</span>
                                                </div>
                                            </div>
                                            <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                                <i className="ri-heart-line text-danger"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div className="box">
                                        <Link scroll={false} href="#!" className="p-4 pb-0 rounded-5">
                                            <img src="../../../assets/images/media/blog/8.jpg" className="rounded-3 card-img-top" alt="..."/>
                                        </Link>
                                    <div className="box-body">
                                        <Link scroll={false} href="/pages/blog/blog-details" className="h5 font-semibold mb-2 block lh-base">The Pleasure of Harmony: Unlocking the Joy of Music</Link>
                                        <p className="mb-4">Exploring the world of 3D images doesn't have to be limited to consumption – you can also become the creator! With accessible.<Link scroll={false} href="#!" className="font-medium text-primary align-middle text-xs text-Augoration-underline inline-block">Read More ?</Link></p>
                                        <div className="flex flex-wrap items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="../../../assets/images/faces/6.jpg" alt=""/>
                                                </div>
                                                <div>
                                                    <p className="mb-0 font-medium">Tilly</p>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mb-0">19,Apr 2024 - 15:45</span>
                                                </div>
                                            </div>
                                            <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                                <i className="ri-heart-line text-danger"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-body">
                                        <Link scroll={false} href="/pages/blog/blog-details" className="h5 font-semibold mb-2 block lh-base">Tuning into Happiness: How Music Lifts Our Spirits</Link>
                                        <p className="mb-3">Explore the remarkable ability of music to evoke joy, uplift our moods, and nourish our souls. This blog delves into the science behind. <Link scroll={false} href="#!" className="font-medium text-primarytint1color ms-2 align-middle text-xs text-Augoration-underline">Read More ?</Link></p>
                                        <div className="flex flex-wrap items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="avatar avatar-md avatar-rounded me-2">
                                                    <img src="../../../assets/images/faces/16.jpg" alt=""/>
                                                </div>
                                                <div>
                                                    <p className="mb-0 font-medium">Henry Milo</p>
                                                    <span className="text-textmuted  dark:text-textmuted/50 text-xs mb-0">31,Mar 2024 - 20:13</span>
                                                </div>
                                            </div>
                                            <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                                <i className="ri-heart-line text-danger"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <Link scroll={false} href="#!" className="p-4 pt-0 rounded-5">
                                        <img src="../../../assets/images/media/blog/9.jpg" className="rounded-md card-img-bottom" alt="..."/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-2 --> */}
                
                {/* <!--Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/12.jpg" className="card-img-top" alt="..."/>
                            </Link>
                            <div className="box-body">
                                <Link scroll={false} href="/pages/blog/blog-details" className="h5 font-semibold mb-2 block lh-base">Understanding Music Notes</Link>
                                <p className="mb-3">Through detailed explanations, visual aids, and practical examples reduce stress, and create lasting memories...<Link scroll={false} href="#!" className="font-medium text-primary ms-2 align-middle text-xs text-Augoration-underline inline-block">Read More ?</Link></p>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="avatar avatar-md avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/4.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-medium">Rosalie </p>
                                            <span className="text-textmuted dark:text-textmuted/50 text-xs mb-0">26,Mar 2024 - 15:37</span>
                                        </div>
                                    </div>
                                    <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                        <i className="ri-heart-line text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/10.jpg" className="card-img-top" alt="..."/>
                            </Link>
                            <div className="box-body">
                                <Link scroll={false} href="/pages/blog/blog-details" className="h5 font-semibold mb-2 block leading-[1.5rem]">Enhancing Your Life Through The Sound</Link>
                                <p className="mb-3">Join us on a journey of discovery as we unravel the mysteries of music note..<Link scroll={false} href="#!" className="font-medium text-primarytint2color ms-2 align-middle text-xs text-Augoration-underline inline-block">Read More ?</Link></p>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="avatar avatar-md avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/12.jpg" alt=""/>
                                        </div>
                                        <div className="">
                                            <p className="mb-0 font-medium">Emanuel </p>
                                            <span className="text-textmuted dark:text-textmuted/50 text-xs mb-0">26,Mar 2024 - 15:37</span>
                                        </div>
                                    </div>
                                    <div className="avatar avatar-sm bg-danger/10 avatar-rounded">
                                        <i className="ri-heart-line text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body">
                                <Link scroll={false} href="/pages/blog/blog-details" className="font-semibold h5 mb-2 block lh-base">Mastering the Art of The Music Notation</Link>
                                <p className="mb-3">Discover how these seemingly simple marks on a page translate into the beautiful sounds.<Link scroll={false} href="#!" className="font-medium text-primary3 ms-2 align-middle text-xs text-Augoration-underline inline-block">Read More ?</Link></p>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="avatar avatar-sm avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/2.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-medium">Jacob 
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs mb-0 ms-1 font-normal">- 06,Mar 2024 - 15:37</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="avatar avatar-sm bg-danger/10 avatar-rounded  custom-avatar">
                                        <i className="ri-heart-line text-danger"></i>
                                    </div>
                                </div>
                            </div>
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/13.jpg" className="card-img-bottom" alt="..."/>
                            </Link>
                        </div>
                    </div>  
                    <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body">
                                <Link scroll={false} href="/pages/blog/blog-details" className="font-semibold h5 mb-2 block lh-base">How to Truly Enjoy Your Favorite Tunes?</Link>
                                <p className="mb-3">Through insightful articles, personal anecdotes, and expert advice, "Music for the Soul"..<Link scroll={false} href="#!" className="font-medium text-primarytint2color ms-2 align-middle text-xs text-Augoration-underline inline-block">Read More ?</Link></p>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="avatar avatar-sm avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/14.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-medium">Flora
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs mb-0 font-normal">- 26,Mar 2024 - 15:37</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="avatar avatar-sm bg-danger/10 avatar-rounded  custom-avatar">
                                        <i className="ri-heart-line text-danger"></i>
                                    </div>
                                </div>
                            </div>
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/11.jpg" className="card-img-bottom" alt="..."/>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-3 --> */}
</Fragment>
);
};

export default Bolg;