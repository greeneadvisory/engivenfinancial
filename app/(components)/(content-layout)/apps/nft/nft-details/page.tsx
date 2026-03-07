"use client"
import SpkNftcards from "@/shared/@spk-reusable-components/apps/spk-nftcards";
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Marketplacedata } from "@/shared/data/apps/nft/marketplacedata";
import { NftItems, NftSwiper, Productsdata, Swiperdata } from "@/shared/data/apps/nft/nftdetailsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface NftDetailsProps {}

const NftDetails : FC<NftDetailsProps>  = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const threeNFTs = Marketplacedata.slice(0, 4);
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Nft-Nftdetails" />

                <Pageheader title="Apps" subtitle="NFT" currentpage="NFT Details" activepage="NFT Details" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="box overflow-hidden">
                    <div className="box-body">
                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                            <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                                <SpkSwiperJs slides={Swiperdata} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                className="mySwiper swiper-preview-details bg-light product-details-page" />
                                <SpkSwiperJs slides={Swiperdata} onswiper={setThumbsSwiper} autoplay={true} spaceBetween={10} slidesPerView={4} freemode={true} watchslide={true}
                                    className="swiper swiper-view-details mt-2" />
                            </div>
                            <div className="xxl:col-span-8 xl:col-span-12 col-span-12">
                                <div className="box shadow-none border border-defaultborder dark:border-defaultborder/10 mb-0">
                                    <div className="box-body">
                                        <div className="grid grid-cols-12 sm:gap-x-6">
                                            <div className="xl:col-span-12 col-span-12 mt-xxl-0 mt-0">
                                                <div className="flex gap-2 items-center justify-between mb-3 flex-wrap">
                                                    <div>
                                                        <p className="text-lg font-medium mb-0">Vibrant Symphony - NFT Digital Art</p>
                                                        <span className="mb-0 font-medium text-[15px]">Digital Art NFT
                                                            <SpkOverlay>
                                                            <span className="text-primary">
                                                                <i className="ri-checkbox-circle-fill"></i>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Verified
                                                                </span>
                                                            </span>
                                                        </SpkOverlay> </span> 
                                                    </div>
                                                    <p className="text-lg text-end ms-auto mb-0">
                                                        <i className="ri-heart-3-fill text-danger align-middle"></i>
                                                        <span className="font-medium text-textmuted dark:text-textmuted/50"><a className="text-info text-[14px]" href="#!"> (2.4k Likes)</a></span>
                                                    </p>
                                                </div>
                                                <div className="mb-3">
                                                    <p className="text-[15px] font-medium mb-1">Description :</p>
                                                    <p className="text-textmuted dark:text-textmuted/50 mb-0">
                                                        "Vibrant Symphony" is a mesmerizing NFT artwork created by a renowned digital artist. This unique piece takes viewers on a journey through a vivid and ethereal world, where vibrant colors blend seamlessly with abstract forms. The artwork is a digital representation of the artist's imagination, combining elements of surrealism and futuristic aesthetics.
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-12 sm:gap-x-6 justify-center">
                                                    <div className="xxl:col-span-12 col-span-12">
                                                        <div className="ecommerce-assurance bg-light">
                                                            <div className="flex justify-between gap-2 items-center flex-wrap">
                                                                <div>
                                                                    <p className="text-[14px] font-medium mb-2">Highest Bid :</p>
                                                                    <div className="avatar avatar-sm avatar-rounded p-1 bg-primary/10 me-3 border border-primary/10">
                                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt=""/>
                                                                    </div>
                                                                    <h4 className="mb-2 inline-block text-success">   2.9ETH</h4>
                                                                    <p className="text-textmuted dark:text-textmuted/50 mb-0 text-xs"> Highest Bid By <span className="text-primary font-medium">@abstract65</span></p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-[14px] font-medium mb-2">Blockchain :</p>
                                                                    <div className="flex gap-1 items-center">
                                                                        <div className="avatar avatar-sm avatar-rounded p-1 bg-primary/10 me-2 border border-primary/10">
                                                                            <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt=""/>
                                                                        </div>
                                                                        <h6 className="mb-0">  Ethereum</h6>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className="text-[14px] font-medium mb-2">Sales Ends in :</p>
                                                                    <p className="nft-details-auction-time bg-primarytint2color px-3 py-1 text-white rounded-full mb-0 shadow-sm"><i className="ri-time-line"></i> 07hrs : 33m : 45s</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-x-6 mt-4">
                                                    <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 mt-xxl-0 mt-3">
                                                        <p className="mb-2 text-[15px] font-medium">Collection:</p>
                                                        <div className="flex items-center font-medium">
                                                            <span className="avatar avatar-sm avatar-rounded leading-none me-1"><img src="../../../assets/images/nft-images/2.jpg" alt=""/></span>
                                                            Digital Art NFT
                                                        </div>
                                                    </div>
                                                    <div className="xxl:col-span-2 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 mt-xxl-0 mt-3">
                                                        <p className="mb-2 text-[15px] font-medium">Owned By:</p>
                                                        <div className="flex items-center font-medium">
                                                            <span className="avatar avatar-sm avatar-rounded leading-none me-1"><img src="../../../assets/images/faces/9.jpg" alt=""/></span>
                                                            Henry Milo
                                                        </div>
                                                    </div>
                                                    <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 mt-xxl-0 mt-3">
                                                        <p className="mb-2 text-[15px] font-medium">Published :</p>
                                                        <span className="block font-medium">24, Jul 2024 - 12:45PM</span>
                                                    </div>
                                                    <div className="xxl:col-span-4 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                                                        <p className="mb-2 text-[15px] font-medium">Price:
                                                            <span className="ms-3 badge bg-primarytint1color/10 text-primarytint1color">30% Off</span>
                                                        </p>
                                                        <p className="mb-0">
                                                            <span className="h3">
                                                                <span className="avatar avatar-sm avatar-rounded p-1 bg-primary/10 me-2 border border-primary/10">
                                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt=""/></span>2.299<sup className="text-[14px]">.00</sup></span>
                                                                <span className="mb-0 text-textmuted dark:text-textmuted/50 text-xs"><s> ETH2,599.00</s>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 sm:gap-x-6 mt-4">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <div className="flex gap-1 mb-2 xl:mb-0">
                                                            <SpkButton variant="primary" Size="lg" customClass="ti-btn  mb-0 btn-wave flex-auto me-1">Place a bid</SpkButton>
                                                            <SpkButton variant="soft-secondary" Size="lg" customClass="ti-btn mb-0 btn-wave flex-auto">Buy Now</SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-3 col-span-12"></div>
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <div className="flex gap-2 justify-end flex-wrap">
                                                            <p className="text-xs bg-primary/10 badge text-primary rounded-full text-end mb-0">
                                                                <i className="ri-eye-line text-primary me-2 align-middle"></i>
                                                                <span className="font-medium"><Link scroll={false} href="#!"></Link>3.5k Views</span>
                                                            </p>
                                                            <p className="text-xs bg-primary/10 badge text-primary rounded-full text-end mb-0">
                                                                <i className="ri-share-line text-primary me-2 align-middle"></i>
                                                                <span className="font-medium"><Link scroll={false} href="#!"></Link>Share</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!--Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 sm:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Product Details :</div>
                                <Link scroll={false} href="#!" className="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50 ms-auto">
                                    View More
                                </Link>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap">
                                    {Productsdata.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row" className="font-medium">
                                                {item.label}
                                            </th>
                                            <td>
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Key Features :
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50 ms-auto">
                                    View More
                                </Link>
                            </div>
                            <div className="box-body">
                                <ul className="mb-0 list-none">
                                    <li className="mb-4">
                                        <span className="font-medium">NFT Title:</span> "Vibrant Symphony"
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-medium">Edition:</span> Limited edition of 25
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-medium">Tags:</span> #digitalart, #sunset, #mystical, #dreamscape
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-medium">Creation Date:</span> July 1, 2024
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-medium">Average Rating:</span> 4.8/5
                                    </li>
                                    <li className="mb-4">
                                        <span className="font-medium">Dimensions:</span> 3000x2000 pixels
                                    </li>
                                    <li className="mb-1">
                                        <span className="font-medium">Exhibition History:</span> Digital Art Expo 2024 - Gallery XYZ, New York City
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Reviews & Ratings
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50 ms-auto">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12">
                                    <div className="xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                                        <div className="flex items-center mb-5">
                                            <div className="me-2 leading-none">
                                                <i className="ri-star-fill fs-26 text-warning"></i>
                                            </div>
                                            <div className="leading-none">
                                                <p className="mb-0 font-medium">4.5 out of 5<span className="mb-0 text-textmuted dark:text-textmuted/50 text-[11px] font-normal"> Based on (2.1k) ratings</span></p>
                                            </div>
                                        </div>
                                        <SpkSwiperJs slides={NftSwiper} className="crypto-swiper swiper-basic" spaceBetween={30} centeredSlides={true} autoplay={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-2 --> */}

                {/* <!--Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 sm:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Popular NFT's :
                                </div>
                            </div>
                            <div className="box-body pt-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap border border-defaultborder dark:border-defaultborder/10" >
                                    {NftItems.map((item, index) => (
                                        <tr key={index} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-top">
                                                        <div className="avatar me-2">
                                                            <img src={item.imageSrc} alt={item.name} />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <p className="mb-1 text-[14px] font-medium similar-product-name truncate">
                                                                {item.name}
                                                            </p>
                                                            <p className="mb-0">
                                                                <SpkBadge variant="success" customClass="text-white">{item.badgeCount}<i className="ri-heart-3-fill align-middle ms-1"></i></SpkBadge>
                                                                <span className="text-textmuted dark:text-textmuted/50 ms-1">({item.followers})</span>
                                                            </p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="mb-0 text-[1rem] font-medium">
                                                                <span className="avatar avatar-xs avatar-rounded p-1">
                                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="Ethereum" />
                                                                </span>
                                                                {item.price}
                                                            </p>
                                                            <p className="mb-0 text-textmuted dark:text-textmuted/50">
                                                                <s>
                                                                    <span className="avatar avatar-xs avatar-rounded p-1">
                                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="Ethereum" />
                                                                    </span>
                                                                    {item.originalPrice}
                                                                </s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                        <td className="grid">
                                            <SpkButton variant="soft-secondary" customClass="ti-btn">View All NFT's</SpkButton>
                                        </td>
                                    </tr>
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="flex gap-1 items-center justify-between mb-3">
                            <h6 className="font-medium mb-0">Explore More NFT's:</h6>
                            <Link scroll={false} href="#!" className="ti-btn bg-primary/10 text-primary  ti-btn-sm ms-auto">
                                View More
                            </Link>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            {threeNFTs.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={idx.id}>
                                     <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <!--End::row-3 --> */}
</Fragment>
);
};

export default NftDetails;