"use client"
import SpkMarketcap from "@/shared/@spk-reusable-components/apps/spk-marketcap";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Cryptocurrencies, Options1, Options2 } from "@/shared/data/apps/crypto/currencydata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface CurrencyExchangeProps {}

const CurrencyExchange : FC<CurrencyExchangeProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Crypto-Currencyexchange" />

        <Pageheader title="Apps" subtitle="Crypto" currentpage="Currency Exchange" activepage="Currency Exchange" />

        {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box currency-exchange-card">
                            <div className="box-body p-5 flex items-center justify-center z-[1]">
                                <div className="container">
                                    <h3 className="text-white text-center">Buy and Sell Coins without additional fees</h3>
                                    <span className="block text-[1rem] text-white text-center op-8 mb-4">
                                        Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC crypto-currency..
                                    </span>
                                    <div className="p-4 mb-4 rounded currency-exchange-area">
                                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                            <div className="xxl:col-span-3 col-span-12">
                                                <input type="text" className="form-control" defaultValue="0.0453" placeholder="Enter Amount"/>
                                            </div>
                                            <div className="xxl:col-span-2 col-span-12">
                                                <div>
                                                <SpkSelect name="colors" option={Options1}
                                                    placeholder="Bitcoin" classNameprefix='Select2' mainClass="multi-select"
                                                    defaultvalue={[Options1[0]]} menuplacement='auto' />
                                                </div>
                                            </div>
                                            <div className="xxl:col-span-2 col-span-12 text-center">
                                                <Link scroll={false}  aria-label="anchor" href="#!" className="ti-btn bg-primarytint1color !text-white ti-btn-icon ti-btn-sm my-2 !rounded-full"><i className="ti ti-arrows-exchange text-[1.1875rem] align-middle"></i></Link>
                                            </div>
                                            <div className="xxl:col-span-3 col-span-12">
                                                <input type="text" className="form-control" defaultValue="1350.93" placeholder="Exchange Amount"/>
                                            </div>
                                            <div className="xxl:col-span-2 col-span-12">
                                                <SpkSelect name="colors" option={Options2} mainClass="basic-multi-select "
                                                defaultvalue={[Options2[0]]} menuplacement='auto' classNameprefix="Select2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <SpkButton variant="success" customClass="ti-btn  btn-wave">Exchange Now</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6 justify-center">
                    {Cryptocurrencies.map((idx) => (
                        <div className="xxl:col-span-4 col-span-12" key={idx.id}>
                             <SpkMarketcap cardClass="custom-card overflow-hidden" mainClass="flex align-items-end justify-between flex-wrap"
                                classNames="flex items-center gap-2 mb-3" classData="leading-none" showChangeInfo={true} charts={idx.chartoption} series={idx.chartseries}
                                 displaySection="chart2" height={45} width={230} type="area" obj={idx} />
                        </div>
                    ))}
                    <div className="xl:col-span-12 col-span-12">
                        <div className="text-center my-4"> 
                           <SpkButton variant="soft-primary" customClass="ti-btn !border !border-primary opacity-60" type="button" disabled> 
                                <span className="ti-spinner  !w-[1rem] !h-[1rem] align-middle" role="status" aria-hidden="true"></span> Loading... 
                          </SpkButton> 
                        </div>
                    </div>
                </div>
            {/* <!-- End:: row-2 --> */}
</Fragment>
);
};

export default CurrencyExchange;