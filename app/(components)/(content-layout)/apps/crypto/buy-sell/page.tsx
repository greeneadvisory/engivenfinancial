"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Data1, Data2, Staticoptions, Staticseries } from "@/shared/data/apps/crypto/buydata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface BuySellProps {}

const BuySell : FC<BuySellProps>  = () => {
return (
<Fragment>
    {/* <!-- Page Header --> */}
    <Seo title="Crypto-BuySell" />

    <Pageheader title="Apps" subtitle="Crypto" currentpage="Buy & Sell" activepage="Buy & Sell" />

    {/* <!-- Page Header Close --> */}
    {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">
                            Buy Crypto
                        </div>
                    </div>
                    <div className="box-body">
                        <div>
                            <div className="grid grid-cols-12 sm:gap-x-6">
                                <div className="xl:col-span-6 col-span-12">
                                    <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                        <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                            aria-label="crypto buy select" placeholder="Enter"/>
                                         <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select buysell" placeholder="BTC"
                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                            />
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                        <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                            aria-label="crypto buy select" placeholder="Enter"/>
                                        <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select buysell" placeholder="USD"
                                                    menuplacement='auto' classNameprefix="Select2"  defaultvalue={[Data2[0]]}
                                                />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light pt-2 p-4 rounded-md !mb-6">
                                <div className="text-[14px] py-2"><span className="font-medium text-dark">Price:</span><span className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px] inline-block">6.003435</span><span className="text-dark font-medium float-end">BTC</span></div>
                                <div className="text-[14px] py-2"><span className="font-medium text-dark">Amount:</span><span className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px] inline-block">2,34,4543.00</span><span className="text-dark font-medium float-end">LTC</span></div>
                                <div className="font-medium text-[14px] py-2">Total: <span className="text-[14px] inline-block">22.00 BTC</span></div>
                                <div className="text-xs text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                            </div>
                            <label className="font-medium text-xs">SELECT PAYMENT METHOD :</label>
                            <div className="grid grid-cols-12 sm:gap-x-6 gap-2 mt-4">
                                <div className="xl:col-span-4 col-span-12">
                                    <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                                            <label className="form-check-label text-xs" htmlFor="flexRadioDefault1">
                                                Credit / Debit Cards
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label className="form-check-label text-xs" htmlFor="flexRadioDefault2">
                                                Paypal
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                            <label className="form-check-label text-xs" htmlFor="flexRadioDefault3">
                                                Wallet
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-4 pt-1">
                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn btn-wave">BUY</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">
                            Sell Crypto
                        </div>
                    </div>
                    <div className="box-body">
                        <div className="grid grid-cols-12 sm:gap-x-6">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                    <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                        aria-label="crypto buy select" placeholder="Enter"/>
                                     <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select buysell" placeholder="BTC"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                        />
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                    <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                        aria-label="crypto buy select" placeholder="Enter"/>
                                        <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select buysell" placeholder="USD"
                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                                />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 sm:gap-x-6">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="mb-3">
                                    <span className="form-label">Crypto Value :</span>
                                    <div className="relative">
                                        <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm flex items-center justify-between gap-4 mt-1 flex-wrap">
                                            <div className="gap-2 flex items-center">
                                                <div className="leading-none">
                                                    <span className="avatar bg-light p-2">
                                                        <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="font-medium">Bitcoin - BTC</div>
                                            </div>
                                            <div className="text-end ms-auto">
                                                <span className="font-medium block">0.374638535 BTC</span>
                                                <span className="text-textmuted dark:text-textmuted/50">$5,364.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="mb-3">
                                    <span className="form-label">Deposit To :</span>
                                    <div className="relative">
                                        <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm flex items-center gap-2 mt-1">
                                            <div className="leading-none">
                                                <span className="avatar bg-light p-2">
                                                    <i className="ri-bank-line text-info text-xl"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="font-medium block">Banking</span>
                                                <span className="text-textmuted dark:text-textmuted/50">Checking ...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light pt-2 p-4 rounded-md">
                            <div className="text-[14px] py-2">
                                <div className="d-inline-flex">
                                    <span className="font-medium text-dark">Price:</span><span className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px]">6.003435</span>
                                </div>
                                <span className="text-dark font-medium float-end">BTC</span>
                            </div>
                            <div className="text-[14px] py-2">
                                <div className="d-inline-flex">
                                    <span className="font-medium text-dark">Amount:</span><span className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px]">2,34,4543.00</span>
                                </div>
                                <span className="text-dark font-medium float-end">LTC</span>
                            </div>
                            <div className="font-medium text-[14px] py-2">Total: <span className="text-[14px] inline-block">22.00 BTC</span></div>
                            <div className="text-xs text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                        </div>
                        <div className="grid mt-4">
                            <SpkButton buttontype="button" customClass="ti-btn bg-secondary text-white btn-wave">SELL</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End::row-1 --> */}

        {/* <!-- Start:: row-2 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-3 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">
                            Quick Secure Transfer
                        </div>
                    </div>
                    <div className="box-body">
                        <div className="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel">
                            <div className="mb-3">
                                <span className="form-label">Crypto Value :</span>
                                <div className="relative">
                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                    <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm flex items-center justify-between gap-4 mt-1 flex-wrap">
                                        <div className="gap-2 flex items-center">
                                            <div className="leading-none">
                                                <span className="avatar bg-light p-2 avatar-md">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="font-medium">Bitcoin - BTC</div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <span className="font-medium block">0.374638535 BTC</span>
                                            <span className="text-textmuted dark:text-textmuted/50">$5,364.65</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="form-label">Deposit To :</span>
                                <div className="relative">
                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                    <div className="p-2 border border-defaultborder dark:border-defaultborder/10 rounded-sm flex items-center gap-2 mt-1">
                                        <div className="leading-none">
                                            <span className="avatar bg-light avatar-md p-2">
                                                <i className="ri-bank-line text-info text-xl"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-medium block">Banking</span>
                                            <span className="text-textmuted dark:text-textmuted/50">Checking ...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1">
                                <span className="form-label">Amount :</span> 
                            </div>
                            <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                    aria-label="crypto buy select" placeholder="Enter"/>
                                <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select buysell" placeholder="BTC"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                            </div>
                            <div className="p-4 bg-light rounded-md">
                                <div className="text-[14px] pb-1">
                                    <div className="inline-flex">
                                        <span className="font-medium text-dark">Price:</span><span className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px]">6.003435</span>
                                    </div>
                                    <span className="text-dark font-medium float-end">BTC</span>
                                </div>
                                <div className="text-[14px] pt-2">
                                    <div className="inline-flex">
                                        <span className="font-medium text-dark">Amount:</span><span className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px]">2,34,4543.00</span>
                                    </div>
                                    <span className="text-dark font-medium float-end">LTC</span>
                                </div>
                            </div>
                            <div className="grid mt-3">
                                <SpkButton buttontype="button" customClass="ti-btn bg-primarytint2color text-white btn-wave waves-effect waves-light">Transfer</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-9 col-span-12">
                <div className="box">
                    <div className="box-header justify-between">
                        <div className="box-title">
                            Buy & Sell Statistics
                        </div>
                        <div className="inline-flex rounded-sm"> 
                             <SpkButton buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] bg-primary btn-wave text-white waves-effect waves-light">1D</SpkButton>
                            <SpkButton variant="soft-primary" buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">1W</SpkButton>
                            <SpkButton variant="soft-primary" buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">1M</SpkButton>
                            <SpkButton variant="soft-primary" buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">3M</SpkButton>
                            <SpkButton variant="soft-primary" buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">6M</SpkButton>
                            <SpkButton variant="soft-primary" buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave !rounded-s-none waves-effect waves-light">1Y</SpkButton>
                        </div>
                    </div>
                    <div className="box-body xl:!p-0">
                        <div className="grid grid-cols-12 items-center">
                            <div className="xl:col-span-8 col-span-12 pe-0 border-e border-dashed border-defaultborder dark:border-defaultborder/10">
                                <div className="flex flex-wrap items-center border-b border-dashed border-defaultborder dark:border-defaultborder/10 mb-3 p-4 gap-4 justify-between">
                                    <div>
                                        <span className="block mb-1">Total Buy</span>
                                        <span className="block font-medium text-[1rem] text-success">$324.25 USD</span>
                                    </div>
                                    <div>
                                        <span className="block mb-1">Total Sell</span>
                                        <span className="block font-medium text-[1rem] text-danger">$4,235.25 USD</span>
                                    </div>
                                    <div>
                                        <span className="block mb-1">Available Balance</span>
                                        <span className="block font-medium text-[1rem] text-primary">$22,803.92 USD</span>
                                    </div>
                                    <div>
                                        <span className="block mb-1">Total Crypto Asset Value</span>
                                        <span className="block font-medium text-[1rem] text-warning">$4,56,683.00 USD</span>
                                    </div>
                                    <div></div>
                                </div>
                                <div id="buy_sell-statistics" className="px-3">
                                    <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="line" width={"100%"} height={345} />
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12 xl:ps-0">
                                <div className="p-4">
                                    <div className="box bg-light shadow-none dark:!bg-light">
                                        <div className="box-body">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50 mb-2">BTC/USD</span>
                                                    <h5 className="font-medium mb-1">27.53612</h5>
                                                    <span className="text-danger block text-xs mt-1">-0.06%</span>
                                                </div>
                                                <div>
                                                    <span className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt=""/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box bg-light shadow-none dark:!bg-light">
                                        <div className="box-body">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50 mb-2">ETH/USD</span>
                                                    <h5 className="font-medium mb-1">20.6782</h5>
                                                    <span className="text-success block text-xs mt-1">+2.86%</span>
                                                </div>
                                                <div>
                                                    <span className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt=""/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box bg-light shadow-none dark:!bg-light mb-0">
                                        <div className="box-body">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="block text-textmuted dark:text-textmuted/50 mb-2">LTC/USD</span>
                                                    <h5 className="font-medium mb-1">54.2912</h5>
                                                    <span className="text-success block text-xs mt-1">+15.93%</span>
                                                </div>
                                                <div>
                                                    <span className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt=""/>
                                                    </span>
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
    {/* <!-- End:: row-2 --> */}
</Fragment>
);
};

export default BuySell;