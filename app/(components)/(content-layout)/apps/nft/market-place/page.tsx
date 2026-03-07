"use client"
import SpkNftcards from "@/shared/@spk-reusable-components/apps/spk-nftcards";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Artdata, Gamingdata, Marketplacedata } from "@/shared/data/apps/nft/marketplacedata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface MarketPlaceProps {}

const MarketPlace : FC<MarketPlaceProps>  = () => {
    const nftWithId = Marketplacedata.find(item => item.id === 4);
    const nftWithId6 = Marketplacedata.find(item => item.id === 6);
    const nftWithId2 = Artdata.find(item => item.id === 2);
return (
<Fragment>
                {/* <!-- Page Header --> */}
                    <Seo title="Nft-Marketplace" />

                    <Pageheader title="Apps" subtitle="NFT" currentpage="Market Place" activepage="Market Place" />

                {/* <!-- Page Header Close --> */}
                {/* <!-- Start::row-1 --> */}
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <div>
                                            <ul className="nav nav-tabs nav-tabs-header mb-0 flex flex-wrap" role="tablist">
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link active" role="tab" data-hs-tab="#nft-all">All</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-art">Art</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-gaming">Gaming</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-domain">Domain</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-music">Music</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-realestate">Real Estate</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-sports">Sports</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-fashion">Fashion</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-avatars">Avatars</a>
                                                </li>
                                                <li className="nav-item my-2" role="presentation">
                                                    <a className="nav-link" role="tab" data-hs-tab="#nft-memes">Memes</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex gap-2">
                                            <SpkButton buttontype="button" Size="sm" customClass="ti-btn bg-secondary text-white btn-wave">Filters</SpkButton>
                                                <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm btn-wave ti-btn-primary waves-effect waves-light" Toggletext="Sort By"
                                                    Arrowicon={true} >
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">New Collection</Link></li>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">High - Low</Link></li>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Low - High</Link></li>
                                                </SpkDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End::row-1 --> */}

                    {/* <!-- Start:: row-2 --> */}
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="tab-content">
                                <div className="tab-pane show active p-0 border-0" id="nft-all" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        {Marketplacedata.map((idx, index) => (
                                            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={index}>
                                                <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} />
                                            </div>
                                        ))}
                                        <div className="col-span-12">
                                            <div className="justify-end flex mb-4">
                                                <nav aria-label="Page navigation">
                                                    <ul className="ti-pagination mb-0">
                                                        <li className="page-item disabled"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"
                                                                href="#!">Previous</Link></li>
                                                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"
                                                                href="#!">1</Link></li>
                                                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"
                                                                href="#!">2</Link></li>
                                                                <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"
                                                                    href="#!">3</Link></li>
                                                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"
                                                                href="#!">Next</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-art" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                    {Artdata.map((idx ,index) => (
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={index}>
                                            <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.image} time={idx.timeLeft} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.username} count={idx.currentBid} rating={idx.likes} />
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-gaming" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        {Gamingdata.map((idx, index) => (
                                            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={index}>
                                                <SpkNftcards imgClass="card-img mb-3" imgSrc={idx.imgSrc} time={idx.auctionTime} title={idx.title} imgSrc1={idx.ownerImg} clientName={idx.ownerName} mail={idx.ownerHandle} count={idx.currentBid} rating={idx.likes} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-domain" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc="../../../assets/images/nft-images/15.jpg" time='07hrs : 06m : 15s' title='Surreal Fantasy Art' imgSrc1="../../../assets/images/faces/6.jpg" clientName='Fantasia NFT' mail='@fantasianft13' count=' 0.018ETH' rating='1.8k' />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-music" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc="../../../assets/images/nft-images/16.jpg" time='07hrs : 06m : 15s' title='Vibrant Pixel Art' imgSrc1="../../../assets/images/faces/12.jpg" clientName='PixelPerfect NFT' mail=' @pixelperfectnft74' count=' 0.017ETH' rating='2.5k' />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-realestate" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                        <SpkNftcards imgClass="card-img mb-3" imgSrc="../../../assets/images/nft-images/17.jpg" time='07hrs : 06m : 15s' title='Geometric Dreamscapes' imgSrc1="../../../assets/images/faces/15.jpg" clientName='GeoNFT NFT' mail='@geonft_designs47' count='0.016ETH' rating='2.9k' />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-sports" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                             <SpkNftcards imgClass="card-img mb-3" imgSrc="../../../assets/images/nft-images/18.jpg" time='07hrs : 06m : 15s' title='Vibrant Pixel Art' imgSrc1="../../../assets/images/faces/10.jpg" clientName='PixelPerfect NFT' mail='@pixelperfectnft74' count='0.017ETH' rating='2.5k' />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-fashion" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                    {nftWithId && (
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={nftWithId.id}>
                                             <SpkNftcards
                                                imgSrc={nftWithId.image}
                                                time={nftWithId.auctionTime}
                                                title={nftWithId.title}
                                                imgSrc1={nftWithId.avatar}
                                                clientName={nftWithId.name}
                                                mail={nftWithId.handle}
                                                count={nftWithId.currentBid}
                                                rating={nftWithId.likes} imgClass={"card-img mb-3"} />
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-avatars" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                    {nftWithId6 && (
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12"  key={nftWithId6.id}>
                                             <SpkNftcards
                                                imgClass={"card-img mb-3"}
                                                imgSrc={nftWithId6.image}
                                                time={nftWithId6.auctionTime}
                                                title={nftWithId6.title}
                                                imgSrc1={nftWithId6.avatar}
                                                clientName={nftWithId6.name}
                                                mail={nftWithId6.handle}
                                                count={nftWithId6.currentBid}
                                                rating={nftWithId6.likes}
                                            />
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div className="tab-pane p-0 border-0 hidden" id="nft-memes" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                    {nftWithId2 && (
                                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={nftWithId2.id}>
                                               <SpkNftcards
                                                imgClass={"card-img mb-3"}
                                                imgSrc={nftWithId2.image}
                                                time={nftWithId2.timeLeft}
                                                title={nftWithId2.title}
                                                imgSrc1={nftWithId2.avatar}
                                                clientName={nftWithId2.name}
                                                mail={nftWithId2.username}
                                                count={nftWithId2.currentBid}
                                                rating={nftWithId2.likes}
                                            />
                                        </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <!-- End:: row-2 --> */}
</Fragment>
);
};

export default MarketPlace;