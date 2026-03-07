"use client"
import SpkProducts from "@/shared/@spk-reusable-components/apps/spk-products";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import LabeledTwoThumbs1 from "@/shared/data/apps/jobs/searchcandidatedate";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import { addToCart, addToWishlist, setSelectedItem } from "@/shared/redux/action";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProductsProps {}

const Products : FC<ProductsProps>  = () => {
    const dispatch = useDispatch();
    const local_varaiable = useSelector((state: any) => state);
    const cart = useSelector((state: any) => state.cart);
    const products = useSelector((state: any) => state.products);


    const handleItemClick = (item: any) => {
        dispatch(setSelectedItem(item));
    };

    const handleAddToWishlist = (item: any) => {
        dispatch(addToWishlist(item));
    };

    const allIds = [...cart.map((item: { id: any; }) => item.id), ...products.map((item: { id: any; }) => item.id)];
    const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

    const handleAddToCart = (item: any) => {
        dispatch(addToCart({ ...item, id: nextId }));
    };

    const [allData, _setallData] = useState(products);

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
return (
<Fragment>
            {/* <!-- Page Header --> */}
                    <Seo title="Ecommerce-Products" />

                    <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products" activepage="Products" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start:: Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body px-4 py-3">
                                <div className="grid grid-cols-12 gap-x-6 items-center gap-y-2">
                                    <div className="sm:col-span-8 col-span-12">
                                        <div className="flex">
                                            <h6 className="mb-0">
                                                Total <span className="font-semibold text-primarytint1color">6678 Items</span> Available</h6> 
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4 col-span-12 sm:text-end text-start">
                                            <SpkDropdown Customclass="ti-btn-group !p-0 !border-0" CustomToggleclass="ti-btn ti-btn-outline-light border border-defaultborder dark:border-defaultborder/10 ti-dropdown-toggle hs-dropdown-toggle gap-0"
                                                 iconPosition="before" Toggletext="Sort By" Icon={true} IconClass="ti ti-sort-descending-2" Arrowicon={true}>
                                                <li><a className="ti-dropdown-item" href="#!">Date Published</a></li>
                                                <li><a className="ti-dropdown-item" href="#!">Most Relevant</a></li>
                                                <li><a className="ti-dropdown-item" href="#!">Price Low to High</a></li>
                                                <li><a className="ti-dropdown-item" href="#!">Price High to Low</a></li>
                                            </SpkDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-9 col-span-12">                             
                        <div className="grid grid-cols-12 gap-x-6">
                            {allData.map((idx: any) => (
                                <div className="xxl:col-span-3 lg:col-span-6 xl:col-span-4 sm:col-span-6 col-span-12" key={idx.id}>
                                     <SpkProducts idx={`/apps/ecommerce/product-details?id=${idx.id}`} onclick={() => handleAddToWishlist(idx)} cartClick={() => handleAddToCart(idx)} detailsClick={() => handleItemClick(idx)} card={idx}  badge={idx.badge} shoBadge={true} />
                                </div>
                            ))}
                            <div className="md:col-span-12 col-span-12">
                                {/* <!-- Start::pagination --> */}
                                <nav aria-label="" className="">
                                    <ul className="ti-pagination mb-6 !p-0 justify-end float-end">
                                        <li className="page-item disabled"> <Link href="#!" scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page"> <Link scroll={false} className="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">2</Link> </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">3</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">4</Link></li>
                                        <li className="page-item"> <Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none" href="#!">Next</Link> </li>
                                    </ul>
                                </nav>
                                {/* <!-- End::pagination --> */}
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-12">
                        <div className="box products-navigation-card">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Filter
                                </div>
                                <div className="ms-auto">
                                    <Link scroll={false} href="#!" className="underline font-medium text-primarytint2color">Clear All</Link>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Categories</h6>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-1" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-1">
                                                Electronics <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(2,712)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-2"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-2">
                                                Clothing & Apparel <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(536)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-3" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-3">
                                                Kitchen <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(18,289)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-4" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-4">
                                                Health & Beauty <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(3,453)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-5"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-5">
                                                Sports <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(7,165)</span>
                                            </label>
                                        </div>
                                        <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                                        id="hs-show-hide-categories-heading"
                                        aria-labelledby="hs-show-hide-categories">
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-41" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-41">
                                                Games <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(5,964)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="c-51"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="c-51">
                                               Food & Grocery <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(2,123)</span>
                                            </label>
                                        </div>
                                    </div>
                                    <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle"
                                        id="hs-show-hide-categories"
                                        data-hs-collapse="#hs-show-hide-categories-heading"
                                        href="#category-more" role="button">MORE
                                    </Link>
                                </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Price Range</h6>
                                    <div className="py-3 pb-0">
                                        <div id="nonlinear"></div>
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Discount</h6>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="q-1"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="q-1">
                                                0% - 20%  <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(245)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="q-2" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="q-2">
                                                20% - 40% <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(987)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="q-3"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="q-3">
                                                40% - 60% <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(123)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="q-4" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="q-4">
                                                60% - 80% <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(987)</span>
                                            </label>
                                        </div>
                                        <div className="form-check p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="q-5"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="q-5">
                                                80% - 90% <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(5,222)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Brand</h6>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="j-1" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="j-1">
                                                Ruby <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(663)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="j-2" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="j-2">
                                                Hadlirams <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(2,514)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="j-3" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="j-3">
                                                Xioami <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(781)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="j-4"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="j-4">
                                                Samsung <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(20)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-0 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="j-5"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="j-5">
                                                Tommy & Hilfigure <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(1,112)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="font-semibold mb-0">Sizes</h6>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="e-1" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="e-1">
                                                Extra Small (XS) <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(574)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="e-2"/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="e-2">
                                                Small (SM) <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(1,474)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="e-3" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="e-3">
                                                Medium (MD) <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(12,245)</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-2 p-0">
                                            <input className="form-check-input float-end" type="checkbox" value="" id="e-4" defaultChecked/>
                                            <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="e-4">
                                                Large (L) <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(877)</span>
                                            </label>
                                        </div>
                                        <div className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden"
                                                id="hs-show-hide-location-heading"
                                                aria-labelledby="hs-show-hide-location">
                                                <div className="form-check mb-2 p-0">
                                                    <input className="form-check-input float-end" type="checkbox" value="" id="e-31" defaultChecked/>
                                                    <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="e-31">
                                                        XXL <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(147)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check mb-2 p-0">
                                                    <input className="form-check-input float-end" type="checkbox" value="" id="e-41" defaultChecked/>
                                                    <label className="form-check-label text-wrap pe-3 !ps-0" htmlFor="e-41">
                                                        XXXL <span className="text-[11px] font-normal text-textmuted dark:text-textmuted/50">(324)</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <Link scroll={false} className="ecommerce-more-link hs-collapse-toggle" id="hs-show-hide-location"
                                                data-hs-collapse="#hs-show-hide-location-heading" href="#sizes-more"
                                                role="button">MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* <!-- End:: Row-1 --> */}
</Fragment>
);
};
export default Products;