"use client"
import SpkCardNft from "@/shared/@spk-reusable-components/dashboards/spk-nftcards";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Featuredata, Hotdata, Nftoptions, Nftseries, Sellerdata, Topdata } from "@/shared/data/dashboard/nftdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface NftProps {}

const Nft : FC<NftProps>  = () => {
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Dashboards-Nft" />

                <Pageheader title="Dashboards" currentpage="NFT" activepage="NFT" />

            {/* <!-- End::page-header --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-7 col-span-12">
                        <div className="box nft-banner-card overflow-hidden">
                            <div className="box-body p-[2rem]">
                                <div className="grid grid-cols-12 sm:gap-x-6 items-center mx-0">
                                    <div className="xl:col-span-7 col-span-12">
                                        <h4 className="font-semibold text-white leading-none mb-3">
                                            Your Gateway to the World of NFTs: Explore, Buy, and Sell
                                        </h4>
                                        <p className="text-white op-8 mb-6">Dive into the limitless possibilities of NFTs. Explore, invest, and showcase your unique digital assets.</p>
                                        <SpkButton customClass="ti-btn bg-primary text-white btn-wave me-2 waves-effect waves-light">Explore Now</SpkButton>
                                        <SpkButton customClass="ti-btn bg-primarytint1color text-white btn-wave waves-effect waves-light">Learn More</SpkButton>
                                    </div>
                                    <div className="xl:col-span-5 col-span-12 flex justify-end items-center">
                                        <img src="../../assets/images/nft-images/1.jpg" className="img-fluid nft-main-banner-image shadow-lg p-4 me-2" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box flex-row">
                            <div className="box-body bg-light m-2 rounded-sm">
                                <div className="flex flex-wrap items-center gap-4 flex-xl-nowrap"> 
                                    <div> 
                                        <span className="avatar avatar-md bg-primary svg-white"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path><circle cx="16" cy="12" r="1.5"></circle>
                                            </svg> 
                                        </span> 
                                    </div>
                                    <div> 
                                        <p className="mb-0 ">Your Balance</p>
                                        <h5 className="font-semibold mb-0">$28,546.96<span className="text-textmuted dark:text-textmuted/50 text-xs font-normal ms-1"> Increased By <span className="text-success align-center text-[11px] ms-1 font-medium">0.14% <i className="ti ti-arrow-narrow-up text-[14px]"></i></span></span> </h5> 
                                    </div> 
                                    <div className="ms-auto">
                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-primary-gradient">View Transactions</Link>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-3 md:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="text-center">
                                            <div className="icon leading-none">
                                                <span className="avatar avatar-md shadow-sm bg-primary/10 !text-primary border-primary/25 border-2 avatar-rounded">
                                                    <i className="ri-vidicon-line text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <h5 className="mb-1">256</h5>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0">Assets</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 md:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="text-center">
                                            <div className="icon leading-none">
                                                <span className="avatar avatar-md shadow-sm bg-primarytint1color/10 !text-primarytint1color border-primarytint1color/25 border-2 avatar-rounded">
                                                    <i className="bi bi-people text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <h5 className="mb-1">1,543</h5>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0">Followers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 md:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="text-center">
                                            <div className="icon leading-none">
                                                <span className="avatar avatar-md shadow-sm bg-primarytint2color/10 !text-primarytint2color border-primarytint2color/25 border-2 avatar-rounded">
                                                    <i className="bi bi-heart text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <h5 className="mb-1">12,345</h5>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0">Likes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 md:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="text-center">
                                            <div className="icon leading-none">
                                                <span className="avatar avatar-md shadow-sm bg-primarytint3color/10 !text-primarytint3color border-primarytint3color/25 border-2 avatar-rounded">
                                                    <i className="bi bi-currency-dollar text-[17px] leading-none"></i>
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <h5 className="mb-1">$2.5k</h5>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0">Bidding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start::row-2 -->    */}
                <div className="mb-4 flex items-center justify-between">
                    <h6 className="mb-0">&#128293; Hot Bids :</h6>
                    <div>
                        <SpkButton variant="soft-primary" Size="sm" buttontype="button" customClass="ti-btn">View All</SpkButton>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    {Hotdata.map((idx) => (
                        <div className="xxl:col-span-2 xl:col-span-4 md:col-span-6 col-span-12" key={idx.id}>
                             <SpkCardNft imgSrc={idx.src1} svgIcon={idx.svgIcon} avatarSrc={idx.src} auctionTime={" 07hrs : 33m : 45s "} title={idx.header} rating={"1.43k"} clientName={idx.ename} mail={idx.mail} currentBid={idx.bid} />
                        </div>
                    ))}
                </div>
                {/* <!-- End::row-2 --> */}

                {/* <!-- Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Featured Creators
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn-light ti-btn ti-btn-sm !text-textmuted dark:text-textmuted/50" Toggletext="View All" Arrowicon={true}>
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <ul className="ti-list-group list-group-flush mb-0 !border-t-0 !rounded-none">
                                    {Featuredata.map((idx) => (
                                        <li className="ti-list-group-item flex gap-1 flex-wrap" key={idx.id}>
                                            <Link scroll={false} href="#!">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-md">
                                                                <img src={idx.src} alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium mb-0">{idx.data}</p>
                                                            <span className="text-textmuted dark:text-textmuted/50 text-xs">{idx.data1}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="ms-auto my-auto">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <div className="avatar-list-stacked">
                                                            <span className="avatar avatar-sm bg-primarytint1color/10 border border-primarytint1color border-opacity-10 avatar-rounded">
                                                                <img src={idx.src1} alt="" className="p-1 !rounded-full" />
                                                            </span>
                                                            {idx.data2}
                                                        </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary ti-btn-sm "><i className="ri-add-line align-middle"></i>Follow</Link>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between flex-wrap">
                                <div className="box-title">
                                    Total Statistics
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm ti-btn-outline-light" Icon={true} IconClass="fe fe-more-vertical" >
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Month</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Year</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <div className="sm:flex flex-wrap justify-evenly flex-auto gap-4 p-4 border-b border-block-end-dashed bg-light dark:border-defaultborder/10">
                                    <div className="m-1 flex gap-4 justify-between items-end">
                                        <div>
                                            <div>Growth <SpkBadge variant="success">0.14%</SpkBadge></div>
                                            <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">NFTs sold</p>
                                        </div>
                                        <h6 className="mb-0">$500K</h6>
                                    </div>
                                    <div className="m-1 flex gap-4 justify-between items-end">
                                        <div>
                                            <div>Market <SpkBadge variant="success">0.14%</SpkBadge></div>
                                            <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">NFT marketplaces</p>
                                        </div>
                                        <h6 className="mb-0">$100k</h6>
                                    </div>
                                    <div className="m-1 flex gap-4 justify-between items-end">
                                        <div>
                                            <div>Bid <SpkBadge variant="danger">0.14%</SpkBadge></div>
                                            <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Highest bid</p>
                                        </div>
                                        <h6 className="mb-0">$5,000</h6>
                                    </div>
                                </div>
                                <div id="nft-statistics" className="p-4 pb-0"><Spkapexcharts chartOptions={Nftoptions} chartSeries={Nftseries} type="line" width={"100%"} height={290} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Activities
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn-light ti-btn ti-btn-sm !text-textmuted dark:text-textmuted/50" Toggletext="View All" Arrowicon={true}>
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li className="border-b border-defaultborder dark:border-defaultborder/10"><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <ul className="ti-list-group list-group-flush mb-0 !border-t-0 !rounded-none">
                                    <li className="ti-list-group-item">
                                        <Link scroll={false} href="#!">
                                            <div className="flex flex-wrap items-center justify-between flex-xl-nowrap">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/nft-images/2.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-0">Auction started For <span className="text-primary">Luminous Petal</span></p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">Monisteris (@monisteris547)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mt-1 ms-1">5 mins ago</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <Link scroll={false} href="#!">
                                            <div className="flex flex-wrap items-center justify-between flex-xl-nowrap">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/nft-images/3.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-0">Bid placed on <span className="text-primary">Radium Radiance</span><span className="text-textmuted dark:text-textmuted/50"> #isther457</span></p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">Isther (@isther457)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mt-1 ms-1">2 Days ago</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <Link scroll={false} href="#!">
                                            <div className="flex flex-wrap items-center justify-between flex-xl-nowrap">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/nft-images/4.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-0">Artwork sold to <span className="text-primary">@Lanisis</span></p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">Rokonis (@rokonis658)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mt-1 ms-1">3 Days ago</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <Link scroll={false} href="#!">
                                            <div className="flex flex-wrap items-center justify-between flex-xl-nowrap">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/nft-images/7.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-0">New Arrivals form New one <span className="text-primarytint1color">@kanith</span></p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">Kanith (@kanith6589)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mt-1 ms-1">3 Days ago</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <Link scroll={false} href="#!">
                                            <div className="flex flex-wrap items-center justify-between flex-xl-nowrap">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/nft-images/5.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-0">New artwork uploaded <span className="text-primary">@fister124</span></p>
                                                        <span className="text-textmuted dark:text-textmuted/50 text-xs">Simon(@simon145)</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mt-1 ms-1">5 Days ago</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <Link scroll={false} href="#!">
                                            <div className="flex flex-wrap items-center justify-between flex-xl-nowrap">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../assets/images/nft-images/6.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium mb-0">New collection created.
                                                        </p>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-textmuted dark:text-textmuted/50 text-xs align-middle">Joviskin (@joviskin124)</span>
                                                            <span className="avatar avatar-xs bg-primarytint1color/10 border border-primarytint1color/10">
                                                                <img src="../../assets/images/nft-images/11.jpg" alt="" className="!rounded-sm"/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-textmuted dark:text-textmuted/50 text-xs mt-1 ms-1">5 Days ago</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-3 --> */}

                {/* <!-- Start::row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-8 xl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Top Collections:
                                </div>
                                <div className="flex">
                                    <div className="me-3">
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn bg-primary text-white ti-btn-sm !m-0" Arrowicon={true} Toggletext="Sort By" >
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Popular</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Relevant</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap nft-table ti-custom-table-hover" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                header={[{ title: 'Rank' }, { title: 'Collection' }, { title: 'Volume' }, { title: '24h %' }, { title: 'Owners' }, { title: '7d %' }, { title: 'Floor Price' }, { title: 'Items' }]}>
                                    {Topdata.map((idx) => (
                                        <tr className="border-b border-defaultborder dark:border-defaultborder/10" key={idx.id}>
                                            <td><span className="font-medium text-primary">{idx.rank}</span></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 font-semibold"><Link scroll={false} href="#!" title="nft_name">{idx.collection}</Link></p>
                                                        <Link scroll={false} href="#!" className="text-xs text-textmuted dark:text-textmuted/50 font-normal" title="creator_name">{idx.mail}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold"><Link scroll={false} href="#!" title="nft_name">{idx.volume}</Link></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`text-${idx.color}`}><i className={`ti ti-trending-${idx.color.includes("success")? "up":"down"} me-1 align-middle inline-block`}></i>{idx.data}%</span>
                                            </td>
                                            <td>{idx.owners}</td>
                                            <td><span className={`text-${idx.color1}`}><i className={`ti ti-trending-${idx.color1.includes("success")? "up":"down"} me-1 align-middle inline-block`}></i>{idx.data1}%</span></td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 font-semibold"><Link scroll={false} href="#!" title="nft_name">{idx.price}</Link></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.item}</td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                                <div className="flex items-center flex-wrap mt-3">
                                    <div>
                                        Showing 4 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
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
                    <div className="xxl:col-span-4 xl:col-span-4 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between !pb-0">
                                <div className="box-title">
                                    <i className="ri-star-fill text-warning me-2"></i>Best Seller
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-light ti-btn-sm !text-textmuted dark:text-textmuted/50">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body !p-0">
                                <ul className="ti-list-group list-group-flush !rounded-none !border-t-0">
                                    {Sellerdata.map((idx) => (
                                        <li className="ti-list-group-item pt-0" key={idx.id}>
                                            <Link scroll={false} href="#!">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-md">
                                                                <img src={idx.src} alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium mb-0">{idx.data}</p>
                                                            <span className="text-textmuted dark:text-textmuted/50 text-xs d-inline-flex">{idx.data1}<span className="text-primary leading-none text-[1rem] ms-1 d-inline-flex"><i className="ti ti-discount-check-filled "></i></span></span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="text-xs text-textmuted dark:text-textmuted/50">99.9k Bidders</span>
                                                        <p className="font-semibold mb-0 bid-amt align-middle text-[14px] flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="65" viewBox="0 0 40 65">
                                                                <g fill="none" fillRule="evenodd">
                                                                <g fillRule="nonzero" transform="translate(-227 -93)">
                                                                    <g transform="translate(227 93)"><g>
                                                                    <path fill="#8A92B2" d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z"></path>
                                                                    <path fill="#454A75" d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z"></path>
                                                                    <path fill="#8A92B2" d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z"></path><path fill="gray" d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z"></path>
                                                                    <path fill="#62688F" d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z"></path>
                                                                    <path fill="#62688F" d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z"></path></g></g></g>
                                                                </g>
                                                            </svg>
                                                            0.05ETH <span className="text-[11px] text-textmuted dark:text-textmuted/50 font-normal ms-1 d-inline-flex">: Price</span>
                                                        </p>
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
                {/* <!-- End::row-4 --> */}
</Fragment>
);
};

export default Nft;