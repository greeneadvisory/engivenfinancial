"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Marketdata, Portoptions, Portseries, Srockdata, Stockareaoptions, Stockareaseries, Stockoptions, Stockseries, StockSlides, Transactiondata, Visioptions, Visiseries, Wishlistdata } from "@/shared/data/dashboard/stocksdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface StocksProps {}

const Stocks : FC<StocksProps>  = () => {
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
            slidesPerView: 4,
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
            <Seo title="Dashboards-Stocks" />

            <Pageheader title="Dashboards" currentpage="Stocks" activepage="Stocks" />
            {/* <!-- End::page-header --> */}
           {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                            <SpkSwiperJs slides={StockSlides} className="swiper-basic swiper-initialized swiper-horizontal swiper-backface-hidden mySwiper" slidesPerView={3}
                                spaceBetween={20}
                                freemode={true}
                                autoplay={true}
                                breakpoint={breakpoints} />
                    </div>
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">Stock Market Value</div>
                                <div className="flex gap-2">
                                    <div className="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm">Today</div>
                                    <div className="ti-btn ti-btn-outline-light border ti-btn-full ti-btn-sm">Weakly</div>
                                    <div className="ti-btn bg-light border ti-btn-full ti-btn-sm">Yearly</div>
                                </div>
                            </div>
                            <div className="box-body !pb-2">
                                <div className="sm:flex align-items-end  p-4 bg-light gap-5 flex-wrap rounded-md">
                                    <div className="min-w-fit-content me-3">
                                        <p className="mb-1">Total Investment</p>
                                        <h4 className="font-medium mb-0">$15,874.50<SpkBadge variant="success" customClass=" ms-2 text-[0.5625rem]"><i className="ti ti-trending-up me-1"></i>0.32%</SpkBadge></h4>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <p className="mb-1">Market Cap</p>
                                        <h4 className="font-medium mb-0">$124,784.23<SpkBadge variant="danger" customClass="ms-2 text-[0.5625rem]"><i className="ti ti-trending-down me-1"></i>0.12%</SpkBadge></h4>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <p className="mb-1 text-xs text-textmuted dark:text-textmuted/50">
                                            <span className="text-success custom-stocks"> +124.25</span>
                                            <i className="mdi mdi-circle-small"></i>
                                            <span> Yesterday</span>
                                        </p>
                                        <p className="mb-0 text-[11px] text-textmuted dark:text-textmuted/50">
                                            <span> Jun 16, 2022</span>
                                            <i className="mdi mdi-circle-small"></i>
                                            <span> 10:45 AM</span>
                                            <i className="mdi mdi-circle-small"></i>
                                            <span> UTC +5:30</span>
                                        </p>
                                    </div>
                                    <div className="flex-1 sm:text-end mt-2 mt-sm-0 ms-auto">
                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-w-lg ti-btn-soft-primary1"><i className="ti ti-plus me-1"></i>Compare</Link>
                                    </div>
                                </div>
                                <div id="stockCap-area">
                                    <Spkapexcharts chartOptions={Stockareaoptions} chartSeries={Stockareaseries} type="area" width={"100%"} height={165} />
                                </div>
                                <div id="stockCap">
                                    <Spkapexcharts chartOptions={Stockoptions} chartSeries={Stockseries} type="bar" width={"100%"} height={165} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    My Watchlist
                                </div>
                                <SpkButton button="button" Size="sm" customClass="ti-btn bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" >
                                    {Wishlistdata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <span className={`avatar avatar-md p-2 avatar-rounded border border-${idx.color}/10 bg-${idx.color}/10 `}>
                                                        <img src={idx.src} alt="" className={idx.invert} />
                                                    </span>
                                                    <div>
                                                        <Link scroll={false} href="#!" className="font-medium">{idx.head}</Link>
                                                        <span className="block text-textmuted dark:text-textmuted/50 text-xs">{idx.subhead}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-auto">
                                                        <div id="apple-change">
                                                            <Spkapexcharts chartOptions={idx.chart} chartSeries={idx.series} type="line" width={50} height={30} />
                                                        </div>
                                                    </div>
                                                    <div className="flex-auto ms-auto">
                                                        <p className="mb-0"> ${idx.price}</p>
                                                        <p className={`text-${idx.color1} mb-0`}>{idx.percent}%</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 lg:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <h6 className="box-title">Statistics</h6>
                                <SpkButton buttontype="button" Size='sm' customClass="ti-btn bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                            </div>
                            <div className="box-body">
                                <div id="portfolio" className=""><Spkapexcharts chartOptions={Portoptions} chartSeries={Portseries} type="donut" width={"100%"} height={245} /></div>
                            </div>
                            <div className="box-footer p-4 my-2">
                                <div className="flex justify-between gap-x-6">
                                    <div className="p-0">
                                        <div className="text-center"> 
                                            <i className="ri-circle-fill p-1 leading-none text-[0.4375rem] rounded-md ti-btn-soft-primary"></i>
                                            <span className="text-textmuted dark:text-textmuted/50 text-xs mb-1 rounded-dot dot-primary inline-block ms-2">Stocks
                                            </span>
                                            <div><span className="text-[1rem] font-medium">1,624</span> </div>
                                        </div>
                                    </div>
                                    <div className="p-0">
                                        <div className="text-center"> 
                                            <i className="ri-circle-fill p-1 leading-none text-[0.4375rem] rounded-md ti-btn-soft-primary1"></i>
                                            <span className="text-textmuted dark:text-textmuted/50 text-xs mb-1 rounded-dot dot-secondary inline-block ms-2">Funds
                                            </span>
                                            <div><span className="text-[1rem] font-medium">1,267</span></div>
                                        </div>
                                    </div>
                                    <div className="p-0">
                                        <div className="text-center"> 
                                            <i className="ri-circle-fill p-1 leading-none text-[0.4375rem] rounded-md bg-primarytint2color/10 text-primarytint2color"></i>
                                            <span className="text-textmuted dark:text-textmuted/50 text-xs mb-1 rounded-dot dot-success inline-block ms-2">Bond
                                            </span>
                                            <div><span className="text-[1rem] font-medium">1,153</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 lg:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header  justify-between">
                                <div className="box-title">My Stocks</div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm text-textmuted dark:text-textmuted/50"
                                        Toggletext="All Stocks" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"> All Stocks</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Wishlist</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Stocks</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Crypto</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">ETFs</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Bonds</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head ti-custom-table-hover" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                   header={[{ title: 'Stock' }, { title: 'Quantity' }, { title: 'Stock Price' }, { title: 'Change' }, { title: 'Total Value' }, { title: 'Actions' }]}>
                                    {Srockdata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex gap-2">
                                                    <span className={`avatar !rounded-full avatar-sm bg-${idx.color}/10 !text-${idx.color}`}>
                                                        <i className={`ri-${idx.icon1} text-[1rem]`}></i>
                                                    </span>
                                                    <div className="flex-auto">
                                                        <div>{idx.stock}</div>
                                                        <div className="text-textmuted dark:text-textmuted/50">{idx.stock1}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.qnty}</td>
                                            <td className="font-medium">{idx.price}</td>
                                            <td><span className={`text-${idx.color1}`}>{idx.chnage}</span></td>
                                            <td>{idx.total}</td>
                                            <td className="btn-list">
                                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm ti-btn-soft-primary me-2">Buy</Link>
                                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm ti-btn-soft-primary1">Sell</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <h6 className="box-title">Growth Analysis</h6>
                                <SpkButton buttontype="button" Size="sm" customClass="ti-btn bg-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                            </div>
                            <div className="box-body pb-1">
                                <div className="p-4 bg-light rounded-md text-defaulttextcolor rounded border flex items-center justify-between border-dashed dark:border-defaultborder/10">
                                    <div>
                                        <span className="block mb-1">Tesla, Inc (TSLA)</span>
                                        <h5 className="font-semibold leading-none mb-0">$ 17,782.00</h5>
                                    </div>
                                    <SpkBadge variant="success" customClass="font-semibold float-end leading-none ms-2">0.64%<i className="ri-arrow-up-s-line ms-1"></i></SpkBadge>
                                </div>
                                <div id="visitors-report">
                                    <Spkapexcharts chartOptions={Visioptions} chartSeries={Visiseries} type="line" width={"100%"} height={267} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Transaction History
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle" Toggletext="All" Arrowicon={true}>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Buy</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Sell</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head ti-custom-table-hover" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Date' }, { title: 'Stock' }, { title: 'Shares' }, { title: 'Type' }, { title: 'Price' }, { title: 'Change' }]}>
                                    {Transactiondata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>{idx.date}</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <span className={`avatar avatar-sm p-1 avatar-rounded border border-${idx.color}/10 bg-${idx.color1}/10 !text-${idx.color1}`}>
                                                        {idx.src}
                                                    </span>
                                                    <div>
                                                        <Link href="#!" className="font-medium">{idx.stock}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{idx.shares}</td>
                                            <td><SpkBadge variant={`${idx.color2}/10`} customClass={`!text-${idx.color2}`}>{idx.type}</SpkBadge></td>
                                            <td>
                                                <div className="font-medium">{idx.price}</div>
                                                <div className="text-textmuted dark:text-textmuted/50">Value: {idx.value}</div>
                                            </td>
                                            <td><span className={`text-${idx.color3}`}><i className="fas fa-arrow-up"></i> {idx.change}</span></td>
                                        </tr>
                                    ))}

                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Market Movers
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm" Arrowicon={true} Toggletext="All">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Buy</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Sell</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body !p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Symbol' }, { title: 'Company Name' }, { title: 'Change' }, { title: 'Price' }, { title: '% Change' }, { title: 'Volume' }]}>
                                    {Marketdata.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>{idx.symbol}</td>
                                            <td>{idx.cmnyname}</td>
                                            <td><span className={`text-${idx.color}`}>{idx.change}</span></td>
                                            <td className="font-medium text-[14px]">{idx.price}</td>
                                            <td><span className={`text-${idx.color}`}>{idx.change1}</span></td>
                                            <td>{idx.volume}</td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}
</Fragment>
);
};

export default Stocks;