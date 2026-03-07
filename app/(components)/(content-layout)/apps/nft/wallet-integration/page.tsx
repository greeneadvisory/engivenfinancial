"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface WalletIntegrationProps {}

const WalletIntegration : FC<WalletIntegrationProps>  = () => {
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
                <Seo title="Nft-Walletintegration" />

                <Pageheader title="Apps" subtitle="NFT" currentpage="Wallet Integration" activepage="Wallet Integration" />

            {/* <!-- End::page-header --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 sm:gap-x-6 justify-center">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden bg-gradient-to-r from-primary to-secondary nft-wallet-card">
                            <div className="box-body text-center">
                                <div className="font-medium mb-2 text-white opacity-70">
                                    Wallet Balance
                                </div>
                                <h5 className="font-bold text-white">$25,680</h5>
                                <p className="text-textmuted dark:text-textmuted/50 mb-0 text-white opacity-70">Available
                                    Balance</p>
                            </div>
                        </div>
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Wallet Transactions
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="p-2 py-2 bg-light text-xs text-textmuted dark:text-textmuted/50" Toggletext="Last 24 Hours"
                                     Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last 24 Hours</Link>
                                        </li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last 7 Days</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last 30 Days</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group list-group-flush !border-0">
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap">
                                            <div className="leading-none">
                                                <span
                                                    className="avatar avatar-xl bg-primarytint1color/10 !text-primarytint1color">
                                                    <i className="ri-exchange-line text-[25px]"></i>
                                                </span>
                                            </div>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex justify-between gap-1"><span
                                                        className="font-medium">ETH Received</span><span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 ms-auto inline-block">24
                                                        mins ago</span></div>
                                                <div className="text-[13px]">From: <span
                                                        className="text-primary font-medium">@user123</span></div>
                                                <div className="text-[13px]">Amount: <span
                                                        className="text-success font-medium">2.1 ETH</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap">
                                            <div className="leading-none">
                                                <span className="avatar avatar-xl bg-success/10 !text-success">
                                                    <i className="ri-arrow-right-line text-[25px]"></i>
                                                </span>
                                            </div>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex justify-between gap-1"><span
                                                        className="font-medium">ETH Sent</span><span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 ms-auto inline-block">16
                                                        mins ago</span></div>
                                                <div className="text-[13px]">To: <span
                                                        className="text-primary font-medium">@recipient456</span></div>
                                                <div className="text-[13px]">Amount: <span
                                                        className="text-danger font-medium">1.5 ETH</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex gap-4 items-center flex-wrap">
                                            <div className="leading-none">
                                                <span className="avatar avatar-xl bg-info/10 !text-info">
                                                    <i className="ri-coin-line text-[25px]"></i>
                                                </span>
                                            </div>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex justify-between gap-1"><span
                                                        className="font-medium">NFT Purchase</span><span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 ms-auto inline-block">5
                                                        mins ago</span></div>
                                                <div className="text-[13px]">From: <span
                                                        className="text-primary font-medium">@creator789</span></div>
                                                <div className="text-[13px]">Price: <span className="font-medium">$350</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !border-b border-defaultborder dark:border-defaultborder/10">
                                        <div className="flex gap-4 items-center flex-wrap">
                                            <div className="leading-none">
                                                <span
                                                    className="avatar avatar-xl bg-primarytint3color/10 !text-primarytint3color">
                                                    <i className="ri-arrow-left-line text-[25px]"></i>
                                                </span>
                                            </div>
                                            <div className="flex-auto">
                                                <div className="mb-1 flex justify-between gap-1"><span
                                                        className="font-medium">ETH Withdrawal</span><span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 ms-auto inline-block">2
                                                        hours ago</span></div>
                                                <div className="text-[13px]">To: <span
                                                        className="text-primary font-medium">0x34F7Bc...</span></div>
                                                <div className="text-[13px]">Amount: <span
                                                        className="text-danger font-medium">5.0 ETH</span></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-4 text-center">
                                    <Link scroll={false} href="#!" className="text-center text-primary underline">View All
                                        Transactions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header">
                                <div className="box-title">
                                    Choose Network
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group list-group-flush nft-list flex items-center gap-4 flex-row p-4 bg-light/50 flex-wrap !rounded-none">
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg border border-defaultborder dark:border-defaultborder/10 active hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/34.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto hover:!text-white">Etherium</div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg border border-defaultborder dark:border-defaultborder/10 hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/33.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto hover:!text-white">Binance</div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg border border-defaultborder dark:border-defaultborder/10  hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/32.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto hover:!text-white">Solana</div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg border border-defaultborder dark:border-defaultborder/10  hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/28.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto hover:!text-white">Tezos</div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg border border-defaultborder dark:border-defaultborder/10  hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/30.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto hover:!text-white">Avalanche</div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg border border-defaultborder dark:border-defaultborder/10  hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/29.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto hover:!text-white">boxano</div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item !shadow-none !bg-white dark:!bg-bodybg !border border-defaultborder dark:border-defaultborder/10  hover:!bg-primary  hover:!text-white dark:hover:!bg-primary dark:hover:!text-white">
                                        <div className="flex items-center gap-2">
                                            <div> <span className="avatar avatar-rounded avatar-sm bg-light p-1"> <img
                                                        src="../../../assets/images/nft-images/36.png" alt=""/> </span> </div>
                                            <div className="text-[.875rem] font-medium my-auto  hover:!text-white">Menaro</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Connect Wallet
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 justify-center">
                                    <div className="xxl:col-span-6 col-span-12">
                                        <div
                                            className="box nft-wallet !shadow-none border border-defaultborder dark:border-defaultborder/10 active">
                                            <div className="box-body p-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded p-2 bg-light">
                                                            <img src="../../../assets/images/nft-images/22.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-medium mb-0">MetaMask</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!"
                                                        className="text-primary underline ms-auto">Connect</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 col-span-12">
                                        <div
                                            className="box nft-wallet !shadow-none border border-defaultborder dark:border-defaultborder/10">
                                            <div className="box-body p-4">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded p-2 bg-light">
                                                            <img src="../../../assets/images/nft-images/23.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-medium mb-0">Enjin Wallet</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!"
                                                        className="text-primary underline ms-auto">Connect</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 col-span-12">
                                        <div
                                            className="box nft-wallet !shadow-none border border-defaultborder dark:border-defaultborder/10">
                                            <div className="box-body p-4">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded bg-light">
                                                            <img src="../../../assets/images/nft-images/20.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-medium mb-0">Trust Wallet</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!"
                                                        className="text-primary underline ms-auto">Connect</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 col-span-12">
                                        <div
                                            className="box nft-wallet !shadow-none border border-defaultborder dark:border-defaultborder/10">
                                            <div className="box-body p-4">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded bg-light p-2">
                                                            <img src="../../../assets/images/nft-images/24.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-medium mb-0">Coinbase Wallet</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!"
                                                        className="text-primary underline ms-auto">Connect</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 col-span-12">
                                        <div
                                            className="box nft-wallet !shadow-none border border-defaultborder dark:border-defaultborder/10 xxl:mb-0">
                                            <div className="box-body p-4">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded bg-light p-2">
                                                            <img src="../../../assets/images/nft-images/19.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-medium mb-0">Lido</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!"
                                                        className="text-primary underline ms-auto">Connect</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 col-span-12">
                                        <div
                                            className="box nft-wallet !shadow-none border border-defaultborder dark:border-defaultborder/10 xxl:mb-0">
                                            <div className="box-body p-4">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="flex items-center gap-4">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded bg-light">
                                                            <img src="../../../assets/images/nft-images/27.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="font-medium mb-0">Huobi Wallet</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!"
                                                        className="text-primary underline ms-auto">Connect</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer flex justify-between gap-2">
                                <SpkButton variant="soft-primary" Size="lg" customClass="ti-btn btn-wave">Import More</SpkButton>
                                <SpkButton variant="primary" Size="lg" customClass="ti-btn btn-wave">Add New Wallet</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default WalletIntegration;