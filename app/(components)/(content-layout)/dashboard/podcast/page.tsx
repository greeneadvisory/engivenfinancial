"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Categoriesdata, Recentlydata } from "@/shared/data/dashboard/podcastdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface PodcastProps {}

const Podcast : FC<PodcastProps>  = () => {
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-Podcast" />

            <Pageheader title="Dashboards" currentpage="Podcast" activepage="Podcast" />

        {/* <!-- End::page-header --> */}
          {/* <!-- Start Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box overflow-hidden podcast-banner !rounded-[0.75rem]">
                            <div className="box-body !p-12">
                                <div className="grid grid-cols-12 sm:gap-x-6">
                                    <div className="xl:col-span-8 col-span-12 my-auto pe-3">
                                        <h5 className="font-semibold text-white mb-2 leading-[1.5rem]">
                                            Mastering Music Distribution for Your Podcast
                                        </h5>
                                        <span className="block text-white op-8 fw-meidum mb-4 pb-1">Unlock the potential of various music distribution channels to amplify your podcast’s sound. Embrace new possibilities.</span>
                                        <div className="ti-btn-list">
                                            <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white"><i className="ri-headphone-line me-2"></i> Listen Now</SpkButton>
                                            <SpkButton buttontype="button" customClass="ti-btn bg-primarytint1color text-white"><i className="ri-headphone-line me-2"></i> 18.5k Playlist</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Popular Artists
                                </div>
                                <SpkButton customClass="ti-btn bg-primary text-white ti-btn-sm" buttontype="button">View All</SpkButton>
                            </div>
                            <div className="box-body">
                                <div className="list-none podcast-recently-played-list grid grid-cols-12 sm:gap-x-6">
                                    <div className="xl:col-span-3 sm:col-span-6 col-span-12 mb-3 xl:mb-0">
                                        <div className="bg-light items-center gap-2 p-4 text-center rounded-sm">
                                            <div className="leading-none mb-3">
                                                <span className="avatar avatar-xxl avatar-rounded">
                                                    <img src="../../assets/images/podcast/1.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="font-semibold">Technos Talk</Link>
                                                <span className="block text-[13px] text-textmuted dark:text-textmuted/50">John Samitrin</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 sm:col-span-6 col-span-12 mb-3 xl:mb-0">
                                        <div className="bg-light items-center gap-2 p-4 text-center rounded-sm">
                                            <div className="leading-none mb-3">
                                                <span className="avatar avatar-xxl avatar-rounded">
                                                    <img src="../../assets/images/podcast/2.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="font-semibold">Science Explorers</Link>
                                                <span className="block text-[13px] text-textmuted dark:text-textmuted/50">Emily Johnson</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 sm:col-span-6 col-span-12 mb-3 xl:mb-0">
                                        <div className="bg-light items-center gap-2 p-4 text-center rounded-sm">
                                            <div className="leading-none mb-3">
                                                <span className="avatar avatar-xxl avatar-rounded">
                                                    <img src="../../assets/images/podcast/3.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="font-semibold">Business Insights</Link>
                                                <span className="block text-[13px] text-textmuted dark:text-textmuted/50">David Williams</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                        <div className="bg-light items-center gap-2 p-4 text-center rounded-sm">
                                            <div className="leading-none mb-3">
                                                <span className="avatar avatar-xxl avatar-rounded">
                                                    <img src="../../assets/images/podcast/4.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="font-semibold break-words">Entertainment</Link>
                                                <span className="block text-[13px] text-textmuted dark:text-textmuted/50">Michael Brown</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				{/* <!-- End::Row-1 --> */}

				{/* <!-- Start::Row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Categories
                                </div>
                                <SpkButton customClass="ti-btn bg-primary text-white ti-btn-sm" buttontype="button">View All</SpkButton>
                            </div>
                            <div className="box-body">
                                <div className="grid xxl:grid-cols-8 xl:grid-cols-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6 personal-favourite-contacts mb-0 gap-2">
                                    {Categoriesdata.map((idx) => (
                                        <div className="col-span-1" key={idx.id}>
                                            <div className="flex items-center bg-light rounded-sm p-2 flex-wrap align-items-center gap-2">
                                                <div className="me-2">
                                                    <span className={`avatar avatar-lg bg-${idx.color}/10 !text-${idx.color} p-2`}>
                                                        <i className={`ri-${idx.icon} text-lg leading-none`}></i>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="font-semibold block mb-0 break-words text-break">{idx.data}</span>
                                                    <span className="text-textmuted dark:text-textmuted/50 block text-xs mb-0">{idx.data1}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				{/* <!-- End::Row-2 --> */}

				{/* <!-- Start::Row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Most Popular 
                                </div>
                                <SpkButton customClass="ti-btn bg-light ti-btn-sm" buttontype="button">View All</SpkButton>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4 mb-3">
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="flex items-center p-4 bg-light rounded-sm flex-wrap gap-2 sm:flex-nowrap">
                                            <img src="../../assets/images/podcast/6.jpg" alt="img" className="avatar avatar-xxl me-2"/>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <Link scroll={false} href="#!"><h6 className="font-semibold mb-0">Foodie Adventures</h6></Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">By Chef Mia Johnson</span>
                                                    </div>
                                                        <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-btn-icon" Icon={true} 
                                                           IconClass="ri-more-2-fill text-textmuted dark:text-textmuted/50">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="flex align-items-end justify-between gap-2 flex-wrap">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-primary text-white">
                                                        <i className="ri-play-fill me-1"></i> Listen Now
                                                    </SpkButton>
                                                    <div className="flex items-center gap-4 leading-none">
                                                        <span className="flex items-center gap-2 text-textmuted dark:text-textmuted/50 font-medium leading-none"><i className="ri-volume-up-line leading-none align-middle text-[14px]"></i>75.3k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="flex items-center p-4 bg-light rounded-sm flex-wrap gap-2 sm:flex-nowrap">
                                            <img src="../../assets/images/podcast/7.jpg" alt="img" className="avatar avatar-xxl me-2"/>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between mb-4 flex-wrap">
                                                    <div>
                                                        <Link scroll={false} href="#!"><h6 className="font-semibold mb-0"> Environmental Insights</h6></Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">By Dr. David Green</span>
                                                    </div>
                                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-btn-icon" Icon={true} 
                                                           IconClass="ri-more-2-fill text-textmuted dark:text-textmuted/50">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="flex align-items-end justify-between gap-2 flex-wrap">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-primary text-white">
                                                        <i className="ri-play-fill me-1"></i> Listen Now
                                                    </SpkButton>
                                                    <div className="flex items-center gap-4 leading-none">
                                                        <span className="flex items-center gap-2 text-textmuted dark:text-textmuted/50 font-medium leading-none"><i className="ri-volume-up-line leading-none align-middle text-[14px]"></i>75.3k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="flex items-center p-4 bg-light rounded-sm flex-wrap gap-2 sm:flex-nowrap">
                                            <img src="../../assets/images/podcast/7.jpg" alt="img" className="avatar avatar-xxl me-2"/>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <Link scroll={false} href="#!"><h6 className="font-semibold mb-0">Travel Tales</h6></Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">By Wanderlost Explorers</span>
                                                    </div>
                                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-btn-icon" Icon={true} 
                                                           IconClass="ri-more-2-fill text-textmuted dark:text-textmuted/50">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="flex align-items-end justify-between gap-2 flex-wrap">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-primary text-white">
                                                        <i className="ri-play-fill me-1"></i> Listen Now
                                                    </SpkButton>
                                                    <div className="flex items-center gap-4 leading-none">
                                                        <span className="flex items-center gap-2 text-textmuted dark:text-textmuted/50 font-medium leading-none"><i className="ri-volume-up-line leading-none align-middle text-[14px]"></i>75.3k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="grid grid-cols-12 xl:gap-x-6 gap-y-4 mb-0">
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="flex items-center p-4 bg-light rounded-sm flex-wrap gap-2 sm:flex-nowrap">
                                            <img src="../../assets/images/podcast/9.jpg" alt="img" className="avatar avatar-xxl me-2"/>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <Link scroll={false} href="#!"><h6 className="font-semibold mb-0">True Crime Files</h6></Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">By Detective John Smith</span>
                                                    </div>
                                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-btn-icon" Icon={true} 
                                                           IconClass="ri-more-2-fill text-textmuted dark:text-textmuted/50">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="flex align-items-end justify-between gap-2 flex-wrap">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-primary text-white">
                                                        <i className="ri-play-fill me-1"></i> Listen Now
                                                    </SpkButton>
                                                    <div className="flex items-center gap-4 leading-none">
                                                        <span className="flex items-center gap-2 text-textmuted dark:text-textmuted/50 font-medium leading-none"><i className="ri-volume-up-line leading-none align-middle text-[14px]"></i>75.3k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="flex items-center p-4 bg-light rounded-sm flex-wrap gap-2 sm:flex-nowrap">
                                            <img src="../../assets/images/podcast/8.jpg" alt="img" className="avatar avatar-xxl me-2"/>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <Link scroll={false} href="#!"><h6 className="font-semibold mb-0">Science Explained</h6></Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">Dr. Michael Lee</span>
                                                    </div>
                                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-btn-icon" Icon={true} 
                                                           IconClass="ri-more-2-fill text-textmuted dark:text-textmuted/50">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="flex align-items-end justify-between gap-2 flex-wrap">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-primary text-white">
                                                        <i className="ri-play-fill me-1"></i> Listen Now
                                                    </SpkButton>
                                                    <div className="flex items-center gap-4 leading-none">
                                                        <span className="flex items-center gap-2 text-textmuted dark:text-textmuted/50 font-medium leading-none"><i className="ri-volume-up-line leading-none align-middle text-[14px]"></i>75.3k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="flex items-center p-4 bg-light rounded-sm flex-wrap gap-2 sm:flex-nowrap">
                                            <img src="../../assets/images/podcast/8.jpg" alt="img" className="avatar avatar-xxl me-2"/>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <Link scroll={false} href="#!"><h6 className="font-semibold mb-0">Business Buzz</h6></Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">By  Emily Davis</span>
                                                    </div>
                                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-btn-icon" Icon={true} 
                                                           IconClass="ri-more-2-fill text-textmuted dark:text-textmuted/50">
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Week</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Day</Link></li>
                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Year</Link></li>
                                                        </SpkDropdown>
                                                </div>
                                                <div className="flex align-items-end justify-between gap-2 flex-wrap">
                                                    <SpkButton Label="button" buttontype="button" Size="sm" customClass="ti-btn bg-primary text-white">
                                                        <i className="ri-play-fill me-1"></i> Listen Now
                                                    </SpkButton>
                                                    <div className="flex items-center gap-4 leading-none">
                                                        <span className="flex items-center gap-2 text-textmuted dark:text-textmuted/50 font-medium leading-none"><i className="ri-volume-up-line leading-none align-middle text-[14px]"></i>75.3k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden bg-playing-image">
                            <div className="box-body p-6">
                                <div className="text-center mb-6">
                                    <span className="mb-5 podcast-playing-now">
                                        <img src="../../assets/images/podcast/1.jpg" alt="" className="w-full !rounded-full shadow-sm"/>
                                    </span>
                                    <Link scroll={false} href="#!"><h6 className="font-semibold mb-1 text-white">Mindful Living</h6></Link>
                                    <span className="text-white op-8 text-xs">By Wanderlost Explorers</span>
                                </div>
                                <div className="flex gap-4 items-center mb-6 pb-6">
                                    <div className="text-xs text-white">12.25</div>
                                    <div className="progress progress-xs progress-custom progress-animate podcast-playing-progress" role="progressbar" aria-valuenow={50} 
                                     aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar bg-primary" style={{ width: "50%" }}>
                                        </div>
                                    </div>
                                    <div className="text-xs text-white">23.45</div>
                                </div>
                                <div className="flex items-center justify-between flex-wrap gap-2 leading-none px-6 py-4 bg-black-transparent rounded-full">
                                    <Link scroll={false} aria-label="anchor" href="#!">
                                        <i className="ri-repeat-2-line text-xl text-white"></i>
                                    </Link>
                                    <Link scroll={false} aria-label="anchor" href="#!">
                                        <i className="ri-skip-back-line text-xl text-white"></i>
                                    </Link>
                                    <Link scroll={false} aria-label="anchor" href="#!">
                                        <i className="ri-pause-line text-xl text-white"></i>
                                    </Link>
                                    <Link scroll={false} aria-label="anchor" href="#!">
                                        <i className="ri-skip-forward-line text-xl text-white"></i>
                                    </Link>
                                    <Link scroll={false} aria-label="anchor" href="#!">
                                        <i className="ri-shuffle-line text-xl text-white"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				{/* <!-- End::Row-3 --> */}

				{/* <!-- Start::Row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recently Played
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn bg-primary !m-0 text-white ti-btn-sm btn-wave waves-effect waves-light"
                                         Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                header={[{ title: 'Podcast Name' }, { title: 'duration' }, { title: 'Category' }, { title: 'Latest Episode' }, { title: 'Average Duration' }, { title: 'Favourites' }, { title: 'Action' }]}>
                                    {Recentlydata.map((idx) => (
                                        <tr className="border-b !border-defaultborder dark:!border-defaultborder/10" key={idx.id}>
                                            <td>
                                                <div className="flex gap-2">
                                                    <span className="avatar avatar-md"><img src={idx.src} className="" alt="..." /></span>
                                                    <div>
                                                        <Link scroll={false} href="#!" className="font-semibold mb-0 flex items-center">{idx.podcast}</Link>
                                                        <span className="text-xs block text-textmuted dark:text-textmuted/50">{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.duration}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.category}</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.latest}
                                            </td>
                                            <td>
                                                {idx.avg}
                                            </td>
                                            <td>
                                                <Link scroll={false} aria-label="anchor" href="#!">
                                                    <i className={`ri-heart-fill text-[1rem] leading-none text-${idx.color1} dark:text-${idx.color1} me-2`}></i>{idx.favourite}
                                                </Link>
                                            </td>
                                            <td>
                                                <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm bg-light ti-btn-icon" Icon={true} IconClass='fe fe-more-vertical !text-[0.813rem]'>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link></li>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap">
                                    <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i> </div>
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
                </div>
				{/* <!-- End::Row-4 --> */}
</Fragment>
);
};

export default Podcast;