"use client"
import SpkWalletcard from "@/shared/@spk-reusable-components/apps/spk-walletcard";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { wallets } from "@/shared/data/apps/crypto/walletdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface WalletProps {}

const Wallet : FC<WalletProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Crypto-Wallet" />

        <Pageheader title="Apps" subtitle="Crypto" currentpage="Wallet" activepage="Wallet" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    BTC Wallet Address
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center flex-wrap justify-between gap-4 mb-3">
                                    <div className="flex-auto">
                                        <label htmlFor="btc-wallet-address1" className="form-label">Wallet Address</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control !border-s" id="btc-wallet-address1" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder"/>
                                            <SpkButton  variant="primary" customClass="ti-btn !m-0">Copy</SpkButton>
                                        </div>    
                                    </div> 
                                    <div>
                                        <span className="avatar avatar-xxl border border-defaultborder dark:border-defaultborder/10">
                                            <img src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt=""/>
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-x-6 p-2 py-3 bg-light mx-0 gap-y-2 rounded-sm">
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-success/10 !text-success">
                                                        <i className="ti ti-arrow-narrow-down text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Received</span>
                                                    <span className="block font-medium">6.2834 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">BTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-danger/10 !text-danger">
                                                        <i className="ti ti-arrow-narrow-up text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Sent</span>
                                                    <span className="block font-medium">2.7382 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">BTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-secondary/10 !text-secondary">
                                                        <i className="ti ti-wallet text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Wallet</span>
                                                    <span className="block font-medium">12.5232 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">BTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer text-center grid">
                                <SpkButton  variant="primary" customClass="ti-btn  !m-0 btn-w-lg btn-wave waves-effect waves-light">Connect</SpkButton>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    ETH Wallet Address
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center flex-wrap justify-between gap-4 mb-3">
                                    <div className="flex-auto">
                                        <label htmlFor="btc-wallet-address2" className="form-label">Wallet Address</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control !border-s" id="btc-wallet-address2" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder"/>
                                            <SpkButton  variant="primary" customClass="ti-btn !m-0">Copy</SpkButton>
                                        </div>    
                                    </div> 
                                    <div>
                                        <span className="avatar avatar-xxl border border-defaultborder dark:border-defaultborder/10">
                                            <img src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt=""/>
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-x-6 p-2 py-3 bg-light mx-0 gap-y-2 rounded-sm">
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-success/10 !text-success">
                                                        <i className="ti ti-arrow-narrow-down text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Received</span>
                                                    <span className="block font-medium">6.2834 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">ETH</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-danger/10 !text-danger">
                                                        <i className="ti ti-arrow-narrow-up text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Sent</span>
                                                    <span className="block font-medium">2.7382 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">ETH</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-secondary/10 !text-secondary">
                                                        <i className="ti ti-wallet text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Wallet</span>
                                                    <span className="block font-medium">12.5232 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">ETH</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer text-center grid">
                                <SpkButton  variant="primary" customClass="ti-btn !m-0 btn-w-lg btn-wave waves-effect waves-light">Connect</SpkButton>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    LTC Wallet Address
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center flex-wrap justify-between gap-4 mb-3">
                                    <div className="flex-auto">
                                        <label htmlFor="btc-wallet-address3" className="form-label">Wallet Address</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control !border-s" id="btc-wallet-address3" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder"/>
                                            <SpkButton  variant="primary" customClass="ti-btn !m-0">Copy</SpkButton>
                                        </div>    
                                    </div> 
                                    <div>
                                        <span className="avatar avatar-xxl border border-defaultborder dark:border-defaultborder/10">
                                            <img src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt=""/>
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-x-6 p-2 py-3 bg-light mx-0 gap-y-2 rounded-sm">
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-success/10 !text-success">
                                                        <i className="ti ti-arrow-narrow-down text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Received</span>
                                                    <span className="block font-medium">6.2834 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-danger/10 !text-danger">
                                                        <i className="ti ti-arrow-narrow-up text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Sent</span>
                                                    <span className="block font-medium">2.7382 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-4 md:col-span-3 sm:col-span-6 col-span-12">
                                        <div>
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md bg-secondary/10 !text-secondary">
                                                        <i className="ti ti-wallet text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50">Wallet</span>
                                                    <span className="block font-medium">12.5232 <span className="text-xs text-textmuted dark:text-textmuted/50 font-normal">LTC</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer text-center grid">
                                <SpkButton  variant="primary" customClass="ti-btn !m-0 btn-w-lg btn-wave waves-effect waves-light">Connect</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!--Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {wallets.map((idx) => (
                        <div className="xxl:col-span-3 lg:col-span-6 col-span-12" key={idx.id}>
                            <SpkWalletcard title={idx.title} img={idx.imgSrc} name={idx.currency} price1={idx.available} priceInUSD={idx.data} data={idx.data1} />
                        </div>
                    ))}
                </div>
                {/* <!--End::row-2 --> */}
</Fragment>
);
};

export default Wallet;