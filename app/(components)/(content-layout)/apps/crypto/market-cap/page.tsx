"use client"
import SpkMarketcap from "@/shared/@spk-reusable-components/apps/spk-marketcap";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { cryptoData, Marketdata } from "@/shared/data/apps/crypto/marcketcapdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface MarketCapProps {}

const MarketCap : FC<MarketCapProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Crypto-Marketcap" />

            <Pageheader title="Apps" subtitle="Crypto" currentpage="MarketCap" activepage="MarketCap" />

        {/* <!-- Page Header Close --> */}
        
        {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {Marketdata.map((idx) => (
                        <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-12 col-span-12" key={idx.id}>
                             <SpkMarketcap cardClass="" mainClass="sm:flex flex-wrap" className="sm:flex items-center" classNames="sm:flex items-center mb-3"
                              classData="me-2" showPriceInfo={true} displaySection="chart1" charts={idx.chartOptions} series={idx.chartSeries} type="area" height={40} width={163} obj={idx} />
                        </div>
                    ))}
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start::row-2  --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Crypto MarketCap
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linktag={false} CustomToggleclass="ti-btn ti-btn-primary !m-0 ti-btn-sm btn-wave waves-effect waves-light" Toggletext="Sort By"  Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Market Cap</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Price</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Trading Volume</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Price Change (24h)</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Rank</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">All-Time High (ATH)</Link></li>
                                        </SpkDropdown>
                                    <div>
                                        <SpkButton variant="secondary" customClass="ti-btn !m-0 ti-btn-sm btn-wave waves-effect waves-light">View All</SpkButton>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10" header={[{ title: '' }, { title: '#' }, { title: 'Crypto Name' }, { title: 'MarketCap' }, { title: 'last 1Week' }, { title: '1h Change' }, { title: "Price (USD)" }, { title: '24h Change' }, { title: 'Volume (24h)' }, { title: 'Circulating Supply' }, { title: 'Trade' }]}>
                                    {cryptoData.map((crypto, index) => (
                                        <tr key={index} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td className="text-center">
                                                <Link scroll={false} href="#!">
                                                    <i className="ri-star-line text-[1rem] text-textmuted dark:text-textmuted/50"></i>
                                                </Link>
                                            </td>
                                            <td>{crypto.id}</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={crypto.avatar} alt={crypto.name} />
                                                        </span>
                                                    </div>
                                                    <div className="font-medium">
                                                        <Link scroll={false} href="#!">{crypto.name}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-medium">{crypto.marketCap}</span>
                                            </td>
                                            <td>
                                                <div id={crypto.chartId}><Spkapexcharts chartOptions={crypto.chart} chartSeries={crypto.series} type="bar" width={163} height={30} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`text-${crypto.color} font-medium`}>
                                                    <i className={`ti ti-arrow-narrow-${crypto.color.includes("success")? "up":"down"} text-[15px] font-medium`}></i>
                                                    {crypto.priceChange24h}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="font-medium">
                                                    <Link scroll={false} href="#!">{crypto.price}</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`text-${crypto.color1} font-medium`}>
                                                    <i className={`ti ti-arrow-narrow-${crypto.icon} text-[15px] font-medium`}></i>
                                                    {crypto.count}
                                                </span>
                                            </td>
                                            <td>
                                                <Link scroll={false} href="#!">
                                                    <span className="block font-medium">{crypto.volume}</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-medium">{crypto.supply}</span>
                                                    {crypto.supplyProgress}
                                                </Link>
                                            </td>
                                            <td>
                                                <SpkButton variant="soft-success" Size="sm" customClass="ti-btn" buttontype="button">Trade</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer flex sm:justify-end justify-center">
                                <nav aria-label="..." className="me-4">
                                    <ul className="ti-pagination">
                                        <li className="page-item disabled">
                                            <Link href="#!" scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0"
                                                href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page">
                                            <Link scroll={false} className="page-link active px-3 py-[0.375rem] !border-e-0"
                                                href="#!">2</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0"
                                            href="#!">3</Link></li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-2  --> */}
</Fragment>
);
};

export default MarketCap;