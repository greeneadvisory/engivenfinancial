"use client"
import SpkNftcards from "@/shared/@spk-reusable-components/apps/spk-nftcards";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Marketplacedata } from "@/shared/data/apps/nft/marketplacedata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface LiveAcuationProps {}

const LiveAcuation : FC<LiveAcuationProps>  = () => {
    const Liveacuation = Marketplacedata.slice(0, 6);
return (
<Fragment>
    {/* <!-- Start::page-header --> */}
        <Seo title="Nft-Liveacuation" />

        <Pageheader title="Apps" subtitle="NFT" currentpage="Live Auction" activepage="Live Auction" />

    {/* <!-- End::page-header --> */}
    {/* <!-- Start::row-1 -->    */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-2 xl:col-span-4 col-span-12">
                <div className="box products-navigation-card">
                    <div className="box-header justify-between">
                        <div className="box-title">
                            Filter
                        </div>
                        <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn btn-wave">Clear All</SpkButton>
                    </div>
                    <div className="box-body p-0">
                        <div className="p-4 border-b border-default-border dark:border-defaultborder/10">
                            <div className="font-medium mb-0">Creator Verification</div>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Verified-Creator" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="Verified-Creator">
                                        Verified
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">13</SpkBadge>
                                </div>
                                <div className="form-check mb-0 flex flex-nowrap">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Non-Verified-Creator"/>
                                    <label className="form-check-label !ps-0" htmlFor="Non-Verified-Creator">
                                        Non-Verified
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end ms-auto">67</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-default-border dark:border-defaultborder/10">
                            <div className="font-medium mb-0">NFT Type</div>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Art" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="NFT-Art">
                                        Art
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">45</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Graphic"/>
                                    <label className="form-check-label !ps-0" htmlFor="NFT-Graphic">
                                        Graphic
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">30</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Music"/>
                                    <label className="form-check-label !ps-0" htmlFor="NFT-Music">
                                        Music
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">15</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Fashion"/>
                                    <label className="form-check-label !ps-0" htmlFor="NFT-Fashion">
                                        Fashion
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">19</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Trending"/>
                                    <label className="form-check-label !ps-0" htmlFor="NFT-Trending">
                                        Trending
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">19</SpkBadge>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="NFT-Games"/>
                                    <label className="form-check-label !ps-0" htmlFor="NFT-Games">
                                        Games
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">45</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-default-border dark:border-defaultborder/10">
                            <div className="font-medium mb-0">Price Range</div>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-Under-1ETH" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-Under-1ETH">
                                        Under 1 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">55</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-1-3ETH"/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-1-3ETH">
                                        1 - 3 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">34</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-3-5ETH"/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-3-5ETH">
                                        3 - 5 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">34</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-5-7ETH"/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-5-7ETH">
                                        5 - 7 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">12</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-7-8ETH"/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-7-8ETH">
                                        7 - 8 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">12</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-10-15ETH"/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-10-15ETH">
                                        10 - 15 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">12</SpkBadge>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Price-Above-15ETH"/>
                                    <label className="form-check-label !ps-0" htmlFor="Price-Above-15ETH">
                                        Above 15 ETH
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">7</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-default-border dark:border-defaultborder/10">
                            <div className="font-medium mb-0">Token Standard</div>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="ERC-721"/>
                                    <label className="form-check-label !ps-0" htmlFor="ERC-721">
                                        ERC-721
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">50</SpkBadge>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="ERC-1155"/>
                                    <label className="form-check-label !ps-0" htmlFor="ERC-1155">
                                        ERC-1155
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">25</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-default-border dark:border-defaultborder/10">
                            <div className="font-medium mb-0">Auction Status</div>
                            <div className="px-0 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Status-Active" defaultChecked/>
                                    <label className="form-check-label !ps-0" htmlFor="Status-Active">
                                        Active
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">89</SpkBadge>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Status-OnHold"/>
                                    <label className="form-check-label !ps-0" htmlFor="Status-OnHold">
                                        On Hold
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">05</SpkBadge>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Status-Ended"/>
                                    <label className="form-check-label !ps-0" htmlFor="Status-Ended">
                                        Ended
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">25</SpkBadge>
                                </div>
                            </div>
                        </div>  
                        <div className="p-4 border-b border-default-border dark:border-defaultborder/10">
                            <div className="font-medium mb-0">Ownership Status</div>
                            <div className="px-0 py-3 pb-1">
                                <div className="form-check mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Owned"/>
                                    <label className="form-check-label !ps-0" htmlFor="Owned">
                                        Owned
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">40</SpkBadge>
                                </div>
                                <div className="form-check mb-1">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Not-Owned"/>
                                    <label className="form-check-label !ps-0" htmlFor="Not-Owned">
                                        Not Owned
                                    </label>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor float-end">60</SpkBadge>
                                </div>
                            </div>
                        </div>                                
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-7 xl:col-span-8 col-span-12">
                <div className="box">
                    <div className="box-body">
                        <div className="flex items-center justify-between mb-4">
                            <h6 className="font-medium mb-0">Categories</h6>
                            <div className="flex gap-2 items-center">
                                <Link scroll={false} href="#!" className="categories-arrow left bg-primary/10 dark:!bg-primary/10">
                                    <i className="ri-arrow-left-s-line !text-primary"></i>
                                </Link>
                                <Link scroll={false} href="#!" className="categories-arrow right bg-primary dark:!bg-primary text-white">
                                    <i className="ri-arrow-right-s-line !text-white"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                            <div className="nft-tag nft-tag-primary active">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ri-earth-line text-lg align-middle"></i></span>
                                <span className="nft-tag-text">All Items</span>
                            </div>
                            <div className="nft-tag nft-tag-primary1">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ri-fire-line text-lg align-middle"></i></span>
                                <span className="nft-tag-text">New Trends</span>
                            </div>
                            <div className="nft-tag nft-tag-primary2">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ri-robot-2-line text-lg align-middle"></i></span>
                                <span className="nft-tag-text">Virtual</span>
                            </div>
                            <div className="nft-tag nft-tag-primary3">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ri-camera-line text-lg align-middle"></i></span>
                                <span className="nft-tag-text">Photography</span>
                            </div>
                            <div className="nft-tag nft-tag-secondary">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ri-palette-line text-lg align-middle"></i></span>
                                <span className="nft-tag-text">Art Work</span>
                            </div>
                            <div className="nft-tag nft-tag-success">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ri-gift-line text-lg align-middle"></i></span>
                                <span className="nft-tag-text">Others</span>
                            </div>                            
                        </div>
                        <h6 className="font-medium mb-3">Live Auction:</h6>
                        <div className="grid grid-cols-12 sm:gap-x-6">
                            {Liveacuation.map((idx) => (
                                <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={idx.id}>
                                     <SpkNftcards cardClass="border dark:border-white/10" imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} />
                                </div>
                            ))}
                           
                        </div>
                        <div className="flex justify-end">
                            <nav aria-label="Page navigation" className="pagination-style-4">
                                <ul className="ti-pagination mb-0">
                                    <li className="page-item disabled">
                                        <Link scroll={false} className="page-link" href="#!">
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item "><Link scroll={false} className="page-link active"
                                            href="#!">1</Link></li>
                                    <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                    <li className="page-item">
                                        <Link scroll={false} aria-label="anchor" className="page-link" href="#!">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link scroll={false} className="page-link" href="#!">16</Link>
                                    </li>
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
            <div className="xxl:col-span-3 lg:col-span-12 col-span-12">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header !pb-0 justify-between">
                                <div className="box-title">
                                    Top NFT Creators
                                </div>
                                <div>
                                    <SpkButton  variant="soft-primary" Size="sm" customClass="ti-btn btn-wave">View All</SpkButton>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group list-group-flush !border-t-0 !rounded-none">
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/nft-images/2.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="items-center">
                                                    <p className="mb-0 font-medium">Emily Watson<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">@emilywatson</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block font-medium text-success">+21.10ETH</span>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-[11px]">25 NFT's</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/nft-images/18.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="items-center">
                                                    <p className="mb-0 font-medium">Daniel Green<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">@danielgreen</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block font-medium text-success">+18.75ETH</span>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-[11px]">20 NFT's</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/nft-images/8.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="items-center">
                                                    <p className="mb-0 font-medium">Sophia Cruz<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">@sophiacruz</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block font-medium text-success">+15.90ETH</span>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-[11px]">18 NFT's</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/nft-images/11.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="items-center">
                                                    <p className="mb-0 font-medium">Oliver Bennett<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">@oliverbennett</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block font-medium text-success">+14.25ETH</span>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-[11px]">16 NFT's</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/nft-images/17.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="items-center">
                                                    <p className="mb-0 font-medium">Isabella Par<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">@isabella</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block font-medium text-success">+12.80ETH</span>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-[11px]">14 NFT's</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <div className="flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <img src="../../../assets/images/nft-images/31.png" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="items-center">
                                                    <p className="mb-0 font-medium">Liam Cooper<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">@liamcooper</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="block font-medium text-success">+10.55ETH</span>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-[11px]">12 NFT's</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header !pb-0 justify-between">
                                <div className="box-title">
                                    Latest NFT Transactions
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="p-2 text-xs text-textmuted dark:text-textmuted/50"  Toggletext="Today" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group list-group-flush !border-t-0 !rounded-none">
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap flex-xxl-nowrap">
                                            <span className="avatar avatar-lg leading-none">
                                                <img src="../../../assets/images/nft-images/31.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex items-center gap-2 justify-between"><Link scroll={false} href="#!" className="font-medium">Galactic Treasures</Link><span className="text-[10px] text-textmuted dark:text-textmuted/50 inline-block ms-auto">24 mins ago</span></div>
                                                <div className="text-xs">Sold to <Link scroll={false} className="underline" href="#!">Mitchell</Link> for <span className="text-success font-medium text-xs">0.57ETH</span>.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap flex-xxl-nowrap">
                                            <span className="avatar avatar-lg leading-none">
                                                <img src="../../../assets/images/nft-images/25.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex items-center gap-2 justify-between"><span className="font-medium">Galactic Treasures</span><span className="text-[10px] text-textmuted dark:text-textmuted/50 inline-block ms-auto">16 mins ago</span></div>
                                                <div className="text-xs">Started following <span className="font-medium">Mark Zuckerberg</span>.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap flex-xxl-nowrap">
                                            <span className="avatar avatar-lg leading-none">
                                                <img src="../../../assets/images/nft-images/21.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex items-center gap-2 justify-between"><span className="font-medium">Digital Cosmos</span><span className="text-[10px] text-textmuted dark:text-textmuted/50 inline-block ms-auto">5 mins ago</span></div>
                                                <div className="text-xs">Showed interest in purchasing <Link scroll={false} href="#!" className="text-xs text-warning font-medium">Digital Cosmos</Link>.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap flex-xxl-nowrap">
                                            <span className="avatar avatar-lg leading-none">
                                                <img src="../../../assets/images/nft-images/26.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex items-center gap-2 justify-between"><span className="font-medium">Digital Cosmos</span><span className="text-[10px] text-textmuted dark:text-textmuted/50 inline-block ms-auto">16 mins ago</span></div>
                                                <div className="text-xs">Purchased from <Link scroll={false} href="#!" className="underline">CyberCanvas</Link> for <span className="font-medium text-xs text-pink">1.345ETH</span>.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap flex-xxl-nowrap">
                                            <span className="avatar avatar-lg leading-none">
                                                <img src="../../../assets/images/nft-images/21.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex items-center gap-2 justify-between"><Link scroll={false} href="#!" className="font-medium">Cosmic Odyssey</Link><span className="text-[10px] text-textmuted dark:text-textmuted/50 inline-block ms-auto">30 mins ago</span></div>
                                                <div className="text-xs">Listed <span className="font-medium">Cosmic Odyssey</span> for auction.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap flex-xxl-nowrap">
                                            <span className="avatar avatar-lg leading-none">
                                                <img src="../../../assets/images/nft-images/31.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex items-center gap-2 justify-between"><span className="font-medium">Galactic Treasures</span><span className="text-[10px] text-textmuted dark:text-textmuted/50 inline-block ms-auto">1 hour ago</span></div>
                                                <div className="text-xs">Gifted to <Link scroll={false} href="#!" className="underline">Alice</Link> as a token of appreciation.</div>
                                            </div>
                                        </div>
                                    </li>                                       
                                </ul>
                                <div className="p-4 pt-2 text-center">
                                    <Link scroll={false} href="#!" className="text-center text-primary underline">View All NFT Transactions</Link>
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

export default LiveAcuation;