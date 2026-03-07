"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Balanceoptions, Balanceseries, Coindata, Cryptooptions, Cryptoseries, CryptoSwiper, Currencydata, Marketdata, Profiledata, Transactiondata } from "@/shared/data/dashboard/cryptodata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface CryptoProps {}

const Crypto : FC<CryptoProps>  = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-Crypto" />

            <Pageheader title="Dashboards" currentpage="Crypto" activepage="Crypto" />

        {/* <!-- End::page-header --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                         <SpkSwiperJs slides={CryptoSwiper} className="crypto-swiper swiper-basic mySwiper" slidesPerView={3} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints} />
                    </div>
                </div>
                {/* <!-- End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title flex-auto">
                                    Crypto Analysis
                                </div>
                                <div className="inline-flex rounded-sm"> 
                                    <SpkButton buttontype="button" variant=""
                                        customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] bg-primary btn-wave text-white waves-effect waves-light">1D</SpkButton>
                                    <SpkButton buttontype="button" variant="soft-primary"
                                        customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">1W</SpkButton>
                                    <SpkButton buttontype="button" variant="soft-primary"
                                        customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">1M</SpkButton>
                                    <SpkButton buttontype="button" variant="soft-primary"
                                        customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave !rounded-s-none waves-effect waves-light">1Y</SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap p-4 bg-light rounded-md mb-3 items-center">
                                    <div className="me-3">
                                            <SpkDropdown Customclass="ms-2 btn-group" iconPosition="before" Toggletext="Bitcoin" CustomToggleclass="ti-btn bg-primary text-white dropdown-toggle !mb-0" Arrowicon={true}
                                               Imageclass=" avatar avatar-xs avatar-rounded me-2 align-middle" Imagetag={true} Image="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg">
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><span
                                                            className="avatar avatar-xs avatar-rounded me-2 align-middle"><img
                                                                src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg"
                                                                alt=""/></span>Etherium</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><span
                                                            className="avatar avatar-xs avatar-rounded me-2 align-middle"><img
                                                                src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg"
                                                                alt=""/></span>Tether</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><span
                                                            className="avatar avatar-xs avatar-rounded me-2 align-middle"><img
                                                                src="../../assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg"
                                                                alt=""/></span>XRP</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><span
                                                            className="avatar avatar-xs avatar-rounded me-2 align-middle"><img
                                                                src="../../assets/images/crypto-currencies/crypto-icons/tron-trx-logo.svg"
                                                                alt=""/></span>TRON</Link></li>
                                            </SpkDropdown>
                                    </div>
                                    <div className="flex flex-wrap sm:justify-evenly flex-auto">
                                        <div className="m-sm-0 m-2">
                                            <span>Symbol</span>
                                            <p className="mb-0">BTC</p>
                                        </div>
                                        <div className="m-sm-0 m-2">
                                            <span>Price Benchmark</span>
                                            <p className="mb-0">136.00%</p>
                                        </div>
                                        <div className="m-sm-0 m-2">
                                            <span>Price (USD)</span>
                                            <p className="text-success mb-0">$54,564.60</p>
                                        </div>
                                        <div className="m-sm-0 m-2">
                                            <span>Change (24H)</span>
                                            <p className="text-danger mb-0">-0.14%</p>
                                        </div>
                                        <div className="m-sm-0 m-2">
                                            <span>Market Cap</span>
                                            <p className="mb-0">$1.32T</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="crypto-analysis"><Spkapexcharts chartOptions={Cryptooptions} chartSeries={Cryptoseries} type="candlestick" width={"100%"} height={360} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-body p-0">
                                <div className="p-4 m-2 rounded-sm bg-primary text-white bg-crypto-balance">
                                    <div className="flex items-center gap-2 justify-between">
                                        <div>
                                            <div className="mb-1 opacity-90">Total Balance</div>
                                            <h4 className="text-white mb-1 font-medium me-2">$262,933.05 USD</h4>
                                            <span className="opacity-70 text-xs">Increased by </span>
                                            <SpkBadge variant="success" Customclass="bg-success mt-2 text-white p-1 text-end ms-1"><i
                                                    className="ti ti-trending-up me-2"></i>12.2%</SpkBadge>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <div className="avatar avatar-lg bg-primarytint1color shadow">
                                                <i className="ri-bank-line !text-[1.5rem] leading-none"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid grid-cols-12 gap-x-6 border-t border-dashed border-defaultborder g-0 dark:border-defaultborder/10">
                                    <div className="xl:col-span-6 col-span-12 border-e border-dashed border-defaultborder dark:border-defaultborder/10">
                                        <div className="p-4">
                                            <div className="flex items-center justify-center gap-4">
                                                <span className="avatar avatar-md bg-primarytint2color">
                                                    <i className="ri-arrow-left-down-fill text-xl"></i>
                                                </span>
                                                <div>
                                                    <div className="font-medium text-textmuted dark:text-textmuted/50">
                                                        Deposit</div>
                                                    <h5 className="mb-0">$1,654 USD</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="p-4">
                                            <div className="flex items-center justify-center gap-4">
                                                <span className="avatar avatar-md bg-primarytint3color">
                                                    <i className="ri-arrow-right-up-fill text-xl"></i>
                                                </span>
                                                <div>
                                                    <div className="font-medium text-textmuted dark:text-textmuted/50">
                                                        Withdraw</div>
                                                    <h5 className="mb-0">$654 USD</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">Currency Converter</div>
                                    <SpkDropdown CustomToggleclass="ti-btn ti-btn-sm ti-btn-light border flex items-center" Toggletext="View All"
                                        Menulabel="dropdownMenuButton1" Icon={true} IconClass="bx bx-caret-down text-[15px]">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Yearly</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Monthly</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Weakly</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body">
                                <div className="flex gap-2 items-center buy-crypto">
                                    <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                        <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                            aria-label="crypto buy select" placeholder="Enter"/>
                                             <SpkSelect name="state" option={Coindata} mainClass="js-example-placeholder-multiple js-states meter-select" defaultvalue={[Coindata[0]]}
                                                menuplacement='auto' classNameprefix="Select2" searchable
                                            />
                                    </div>
                                    <div className="text-center">
                                        <Link scroll={false} aria-label="anchor" href="#!"
                                            className="ti-btn bg-secondary text-white ti-btn-icon ti-btn-sm !my-0 !rounded-full"><i
                                                className="ti ti-arrows-exchange text-[1.1875rem] align-middle"></i></Link>
                                    </div>
                                    <div className="input-group mb-4 flex flex-nowrap mt-2 crypto-input">
                                        <input type="text" className="form-control form-control-sm !border-s !border-e-0 crypto-buy-sell-input"
                                            aria-label="crypto buy select" placeholder="25,784.00"/>
                                             <SpkSelect name="state" option={Currencydata} mainClass="js-example-placeholder-multiple js-states meter-select" defaultvalue={[Currencydata[0]]}
                                                menuplacement='auto' classNameprefix="Select2" searchable
                                            />
                                    </div>
                                </div>
                                <div className="bg-light p-4 rounded-sm mt-2">
                                    <div className="pb-1"><span className="text-defaulttextcolor">Transaction Fee</span><span
                                            className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px] inline-block float-end">$3.04</span>
                                    </div>
                                    <div className="text-[14px] py-1"><span className="text-defaulttextcolor">Other
                                            Charges</span><span
                                            className="text-textmuted dark:text-textmuted/50 ms-2 text-[14px] inline-block float-end">$6.55</span>
                                    </div>
                                    <div className="font-semibold text-[14px] pt-1">Total: <span
                                            className="text-[14px] inline-block float-end">$25,784.00</span></div>
                                </div>
                                <div className=" mt-2 pt-1 flex gap-1">
                                    <SpkButton buttontype="button" customClass="ti-btn bg-primarytint1color/10 !text-primarytint1color me-1 flex-auto">History<i
                                            className="ms-2 ti ti-arrow-narrow-right align-middle"></i></SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white flex-auto">Convert<i
                                            className="ms-2 ti ti-arrow-narrow-right align-middle"></i></SpkButton>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Market Cap
                                </div>
                                <Link scroll={false} href="#!"
                                    className="ti-btn ti-btn-light btn-wave ti-btn-sm text-textmuted dark:text-textmuted/50 waves-effect waves-light">View
                                    All<i className="ti ti-arrow-narrow-right align-middle"></i></Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none market-cap-list mb-1">
                                    {Marketdata.map((idx) => (
                                        <li  key={idx.id}>
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <span className={`avatar bg-${idx.color1}/10 avatar-rounded svg-${idx.color1}`}>
                                                       {idx.src}
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="font-semibold block mb-1">{idx.data}</span>
                                                    <div
                                                        className="flex items-center text-textmuted dark:text-textmuted/50 gap-2 leading-none text-[13px]">
                                                        <span className="block">{idx.data1}</span>
                                                        <div className="vr"></div>
                                                        <span>{idx.data2}</span>
                                                    </div>
                                                </div>
                                                <div className="text-end ms-auto">
                                                    <span className="block h6 mb-1 font-semibold">{idx.price}</span>
                                                    <div
                                                        className={`flex items-center text-${idx.color} gap-2 leading-none text-[13px]`}>
                                                        <span className="block">{idx.price1}</span>
                                                        <div className="vr"></div>
                                                        <span><i className={`ti ti-arrow-narrow-${idx.icon}`}></i>{idx.percent}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">Assets Overview</div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-sm ti-btn-light" Icon={true} IconClass="fe fe-more-vertical"
                                        data-popper-placement="bottom-start">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Today </Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">This week</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <div id="balanceAnalysis" className=""><Spkapexcharts chartOptions={Balanceoptions} chartSeries={Balanceseries} type="radialBar" width={"100%"} height={240} /></div>
                                <div className="border-t border-dashed p-4 border-defaultborder dark:border-defaultborder/10">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="avatar avatar-md bg-primary">
                                            <i className="ri-wallet-3-line text-xl"></i>
                                        </span>
                                        <div>
                                            <div className="font-medium text-textmuted dark:text-textmuted/50 opacity-70">
                                                Funding</div>
                                            <h5 className="mb-0">$54,784 USD</h5>
                                        </div>
                                        <div className="ms-auto">
                                            <div className="text-success font-medium"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>1.05%</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-4 pt-1 mb-1">
                                        <span className="avatar avatar-md bg-primarytint1color">
                                            <i className="ri-arrow-up-down-line text-xl"></i>
                                        </span>
                                        <div>
                                            <div className="font-medium text-textmuted dark:text-textmuted/50 opacity-70">
                                                Trading</div>
                                            <h5 className="mb-0">$23,489 USD</h5>
                                        </div>
                                        <div className="ms-auto">
                                            <div className="text-danger font-medium"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>1.05%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">Transaction History</div>
                                <Link scroll={false} href="#!"
                                    className="text-textmuted dark:text-textmuted/50 underline link-offset-2">View All</Link>
                            </div>
                            <div className="box-body !p-0 pt-2">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                  header={[{ title: 'Cryptocurrency' }, { title: 'Action' }, { title: 'Date & Time' }, { title: 'Change' }]}>
                                    {Transactiondata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className={`avatar avatar-rounded avatar-md p-2 bg-${idx.color1} `}>
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-auto">
                                                        <span className="block font-medium">{idx.crypto}</span>
                                                        <span className="block text-textmuted dark:text-textmuted/50">{idx.currency}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.action}</td>
                                            <td className="text-nowrap">{idx.date}</td>
                                            <td>
                                                <span className={`text-${idx.color}`}>{idx.change}<i className={`ri-arrow-${idx.icon}-line text-xs leading-none ms-1 text-${idx.color} `}></i></span>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}

                {/* <!-- Start:: row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">My Portfolio</div>
                                <div className="inline-flex rounded-sm"> 
                                    <SpkButton buttontype="button" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] bg-primary btn-wave text-white waves-effect waves-light">1D</SpkButton>
                                    <SpkButton buttontype="button" variant="soft-primary" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">1W</SpkButton>
                                    <SpkButton buttontype="button" variant="soft-primary" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave waves-effect waves-light">1M</SpkButton>
                                    <SpkButton buttontype="button" variant="soft-primary" customClass="ti-btn-group !border-0 !text-[0.8rem] !py-[0.45rem] !px-[0.75rem] btn-wave !rounded-s-none waves-effect waves-light">1Y</SpkButton>
                                </div>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap ti-custom-table-hover" tableRowclass="border-b border-defaultborder dark:border-defaultborder/10"
                                  header={[{ title: '#' }, { title: 'Coin' }, { title: 'Price' }, { title: 'Price Graph' }, { title: '24h Volume' }, { title: '24h Change' }, { title: 'Market Cap' }, { title: 'Actions' }]} >
                                    {Profiledata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                {idx.id}
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="text-[14px]">{idx.coin}</div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.price}
                                            </td>
                                            <td>
                                                <div id="bitcoin-change"><Spkapexcharts chartOptions={idx.chart} chartSeries={[idx.series]} type="line" width={120} height={20} />
                                                </div>
                                            </td>
                                            <td>
                                                {idx.volume}
                                            </td>
                                            <td>
                                                <span className={`text-${idx.color}`}><i className={`ri-arrow-${idx.icon}-s-fill me-1 fs-15 align-middle`}></i>{idx.chnage}%</span>
                                            </td>
                                            <td>
                                                {idx.cap}
                                            </td>
                                            <td>
                                                <div className="btn-grp">
                                                    <SpkButton buttontype="button" variant="soft-primary" Size="sm"  customClass="ti-btn me-2 !mb-0">Buy</SpkButton>
                                                    <SpkButton buttontype="button" variant="soft-primary1" Size="sm" customClass="ti-btn  !mb-0">Trade</SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        Showing 6 Entries <i className="bi bi-arrow-right ms-2"></i>
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
                                                <li className="page-item"><Link scroll={false} className="page-link"
                                                        href="#!">2</Link></li>

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
                {/* <!-- End:: row-4 --> */}
</Fragment>
);
};

export default Crypto;