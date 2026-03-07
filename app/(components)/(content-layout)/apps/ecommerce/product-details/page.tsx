"use client"
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/spk-packages/spk-lightbox-component";
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import {  RelatedSwiper, ReviewSwiper } from "@/shared/data/apps/ecommerce/productdetailsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface ProductDetailsProps {}

const ProductDetails : FC<ProductDetailsProps>  = () => {
    function dec(el: any) {
        let inputField = el.currentTarget.parentElement.querySelector("input");
        let unit = Number(inputField.value);
        if (unit <= 1) {
            inputField.value = "0"; // Prevent going below zero
        } else {
            inputField.value = (unit - 1).toString();
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }

    const breakpoints = {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
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
    const [open, setOpen] = useState(false);

return (
<Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Productdetails" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products Details" activepage="Products Details" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start:: Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-5 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <Link scroll={false} href="#!" className="glightbox box border-0 mb-0" data-gallery="gallery1" data-title="Compact Laptop (1/5)" data-type="image" data-draggable="true" onClick={() => setOpen(true)}> 
                                    <div className="ecommerce-gallery flex text-center">
                                        <SpkBadge variant="primarytint2color" customClass="tag-badge">Featured</SpkBadge>
                                        <img src="../../../assets/images/ecommerce/png/1.png" alt="image" className=""/>
                                        <span className="p-4 py-2 rounded-md text-white view-lightbox ">View More Images</span>
                                    </div>
                                </Link>    
                                <div className="grid grid-cols-12 gap-x-6 ad-gallery">
                                    <Lightboxcomponent
                                        close={() => setOpen(false)} // Close function
                                        zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                                        open={open}
                                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                        slides={[
                                            { src: "../../../assets/images/ecommerce/png/2.png" },
                                            { src: "../../../assets/images/ecommerce/png/3.png" },
                                            { src: "../../../assets/images/ecommerce/png/4.png" },
                                            { src: "../../../assets/images/ecommerce/png/5.png" },
                                        ]} index={0} />
                                </div>
                            </div>
                            <div className="box-footer text-center flex gap-2 flex-wrap justify-center">
                                <Link scroll={false} href="/apps/ecommerce/checkout" className="ti-btn bg-primary text-white min-w-[9.375rem] me-2"><i className="bx bx-credit-card text-[1rem] align-middle"></i> Buy Now</Link>
                                <Link scroll={false} href="/apps/ecommerce/cart" className="ti-btn bg-primarytint1color text-white min-w-[9.375rem]"><i className="bx bx-cart-add text-[1rem] align-middle"></i> Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-7 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div>
                                    <p className="text-xl font-semibold mb-4">TechPro X15 Elite - 2024 Edition 15.6" 4K UHD Touchscreen Laptop with Intel i7, 16GB RAM, 1TB SSD, GTX 1650 Ti, Windows 10 Home</p>
                                    <p className="text-[1rem] mb-3">
                                        <i className="bx bxs-star text-warning me-1"></i>
                                        <i className="bx bxs-star text-warning me-1"></i>
                                        <i className="bx bxs-star text-warning me-1"></i>
                                        <i className="bx bxs-star text-warning me-1"></i>
                                        <i className="bx bxs-star-half text-warning"></i>
                                        <span className="font-medium ms-1 text-[13px]">4.6<Link scroll={false} className="text-textmuted dark:text-textmuted/50 ms-2" href="#!">(3.1k Reviews)</Link></span>
                                    </p>
                                    <div className="flex gap-4 items-center mb-3">
                                        <p className="mb-1"><span className="h2 font-semibold">$1,899</span></p>
                                        <div className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">
                                            <p className="mb-0"> <s> $2,599</s></p>
                                            <p className="mb-0 text-info font-medium text-[15px]">Don't Miss Out! Save Up to 42% OFF!</p>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-[15px] font-semibold mb-1">Description :</p>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-0 text-[13px]">
                                            Experience unrivaled performance with the TechPro X15 Elite - 2024 Edition laptop. Featuring a stunning 4K UHD touchscreen display, powerful Intel Core i7 processor, 16GB RAM, and 1TB SSD storage.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 items-center mb-3 justify-between flex-wrap">
                                        <div className="flex gap-4 items-center">
                                            <p className="text-[15px] font-semibold mb-1">RAM :</p>
                                            <div className="ti-btn bg-light">8GB</div>
                                            <div className="ti-btn bg-light">16GB</div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <p className="text-[15px] font-semibold mb-1">SSD Storage :</p>
                                            <div className="ti-btn bg-light">256GB</div>
                                            <div className="ti-btn bg-light">1TB</div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <Link scroll={false} href="#!" className="mb-0 text-primarytint3color font-medium underline"><i className="ri-coupon-2-line me-1 align-middle inline-block"></i>Get a Coupon</Link>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center mb-4 flex-wrap">
                                        <p className="mb-1 text-success py-1 px-2 bg-success/10 rounded-full text-xs"><i className="ri-checkbox-circle-fill me-1 align-middle inline-block"></i> Instock</p>
                                        <p className="mb-1 text-success py-1 px-2 bg-success/10 rounded-full text-xs"><i className="ri-checkbox-circle-fill me-1 align-middle inline-block"></i> Free Shipping</p>
                                        <p className="mb-1 text-success py-1 px-2 bg-success/10 rounded-full text-xs"><i className="ri-checkbox-circle-fill me-1 align-middle inline-block"></i> Easy Return</p>
                                    </div>
                                    <div className="flex gap-5 items-center mb-4">
                                        <div className="flex gap-4 items-center">
                                            <p className="text-[15px] font-semibold mb-1">Quantity :</p>
                                            <div className="product-quantity-container ecommerce-page-quantity">
                                                <div className="flex items-center rounded flex-nowrap gap-1">
                                                    <SpkButton Size="sm" onclickfunc={dec} customClass="ti-btn ti-btn-icon btn-wave !rounded-full bg-primary/10 text-primary  border product-quantity-minus border-end-0 waves-effect waves-light"><i className="ri-subtract-line m-0 text-[1rem] quantity-icon leading-none"></i></SpkButton>
                                                    <input type="text" className="form-control form-control-sm text-center w-full !rounded-full" aria-label="quantity" id="product-quantity" defaultValue="1"/>
                                                    <SpkButton Size="sm" onclickfunc={inc} customClass="ti-btn ti-btn-icon btn-wave !rounded-full bg-primary/10 text-primary  border product-quantity-plus border-end-0 waves-effect waves-light"><i className="ri-add-line m-0 text-[1rem] quantity-icon leading-none"></i></SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <div className="flex gap-4 items-center flex-shrink-0">
                                            <p className="text-[15px] font-semibold mb-0">Colors :</p>
                                            <p className="mb-0 flex items-center">
                                                <Link scroll={false} className="color-1 product-colors flex-shrink-0 selected" href="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link scroll={false} className="color-2 product-colors flex-shrink-0" href="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link scroll={false} className="color-3 product-colors flex-shrink-0" href="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link scroll={false} className="color-4 product-colors flex-shrink-0" href="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link scroll={false} className="color-5 product-colors flex-shrink-0" href="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="ms-auto flex gap-2 flex-wrap">
                                            <Link scroll={false} href="#!" className="bg-primary/10 text-primary ti-btn">
                                                <i className="bx bx-adjust text-[1rem] align-middle"></i> Compare
                                            </Link>
                                            <Link scroll={false} href="/apps/ecommerce/wishlist" className="bg-primary text-white ti-btn">
                                                <i className="bx bx-credit-card text-[15px] align-middle"></i> Add to Wishlist
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <ul className="nav nav-tabs tab-style-8 scaleX profile-settings-tab gap-5 flex mt-2 flex-wrap" id="myTab4" role="tablist">
                                    <li className="nav-item mb-1" role="presentation">
                                        <Link scroll={false} href="#!" className="nav-link bg-primary/10 text-primary px-6 rounded-md" data-hs-tab="#product-details-pane">Product Details</Link>
                                    </li>
                                    <li className="nav-item mb-1" role="presentation">
                                        <Link scroll={false} href="#!" className="nav-link bg-primary/10 text-primary px-6 rounded-md active" data-hs-tab="#key-features-tab-pane">Key Features</Link>
                                    </li>
                                    <li className="nav-item mb-1" role="presentation">
                                        <Link scroll={false} href="#!" className="nav-link bg-primary/10 text-primary px-6 rounded-md custom-features" data-hs-tab="#add-features-tab-pane">Additional Features</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="box-body tab-content !mt-3">
                                <div className="tab-pane overflow-hidden p-0 border-0 hidden" id="product-details-pane" role="tabpanel">
                                    <div className="table-responsive overflow-auto table-bordered-default">
                                            <Spktables tableClass="ti-custom-table text-nowrap">
                                                <tr className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row" className="font-semibold">
                                                        Brand
                                                    </th>
                                                    <td>TechPro</td>
                                                </tr>
                                                <tr className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row" className="font-semibold">
                                                        Model Name
                                                    </th>
                                                    <td>
                                                        X15 Elite - 2024 Edition
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row" className="font-semibold">
                                                        Display
                                                    </th>
                                                    <td>
                                                        15.6" 4K UHD Touchscreen
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row" className="font-semibold">
                                                        Processor
                                                    </th>
                                                    <td>
                                                        Intel Core i7
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row" className="font-semibold">
                                                        Operating System
                                                    </th>
                                                    <td>
                                                        Windows 10 Home
                                                    </td>
                                                </tr>
                                            </Spktables>
                                    </div>
                                </div>
                                <div className="tab-pane show active overflow-hidden p-0 border-0" id="key-features-tab-pane">
                                    <ul className="mb-0 ps-0">
                                        <li className="mb-3"><span className="font-semibold">Display:</span> Stunning 4K UHD resolution with touchscreen capability for immersive visuals and easy navigation.</li>
                                        <li className="mb-3"><span className="font-semibold">Processor:</span> High-performance Intel Core i7 processor for seamless multitasking and powerful computing.</li>
                                        <li className="mb-3"><span className="font-semibold">Memory:</span> 16GB DDR4 RAM ensures smooth performance even with multiple applications running simultaneously.</li>
                                        <li className="mb-3"><span className="font-semibold">Storage:</span> Ample 1TB SSD storage for fast boot-up times, quick file access, and plenty of space for your files and applications.</li>
                                        <li className="mb-3"><span className="font-semibold">Graphics:</span> NVIDIA GeForce GTX 1650 Ti graphics card delivers smooth gaming performance and supports creative applications.</li>
                                        <li className="mb-0"><span className="font-semibold">Operating System:</span> Pre-installed with Windows 10 Home for a familiar and user-friendly computing experience.</li>
                                    </ul>
                                </div>
                                <div className="tab-pane overflow-hidden p-0 border-0 hidden" id="add-features-tab-pane" role="tabpanel">
                                    <ul className="mb-0 ps-0">
                                        <li className="mb-3"><span className="font-semibold">Connectivity:</span> Wi-Fi, Bluetooth, USB ports, HDMI output, and more for easy connectivity to peripherals and accessories.</li>
                                        <li className="mb-3"><span className="font-semibold">Design:</span> Sleek and stylish design with premium materials for durability and aesthetics.</li>
                                        <li className="mb-3"><span className="font-semibold">Battery Life:</span> Long-lasting battery to keep you productive on the go.</li>
                                        <li className="mb-3"><span className="font-semibold">Audio:</span> High-quality audio for immersive entertainment and clear communication.</li>
                                        <li className="mb-3"><span className="font-semibold">Security:</span> Built-in security features to protect your data and privacy.</li>
                                        <li className=""><span className="font-semibold">Warranty:</span> Backed by TechPro's warranty for peace of mind.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Reviews & Ratings
                                </div>
                                <Link scroll={false} href="#!" className="text-[14px] text-center block text-primary font-medium underline ms-auto">
                                    View More Reviews
                                </Link>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 items-center mx-0">
                                    <div className="xxl:col-span-4 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 text-center bg-light rounded p-4 pt-2">
                                        <div className="fs-2">
                                        4.2
                                        </div>
                                        <SpkBadge variant="secondary" customClass="!rounded-full align-middle mb-3"> Very Good</SpkBadge>
                                        <p className="mb-1">
                                            <i className="bx bxs-star text-warning me-1"></i>
                                            <i className="bx bxs-star text-warning me-1"></i>
                                            <i className="bx bxs-star text-warning me-1"></i>
                                            <i className="bx bxs-star text-warning me-1"></i>
                                            <i className="bx bxs-star-half text-warning"></i>
                                        </p>
                                        <div className="font-medium mb-3"><Link scroll={false} className="text-textmuted dark:text-textmuted/50" href="#!">Based on (23,435) ratings</Link></div>
                                        <Link scroll={false} className="ti-btn bg-primary text-white w-full" href="#!">Leave Us a Review</Link>
                                    </div>
                                    <div className="xxl:col-span-8 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 mt-xxl-0 mt-3 pe-0">
                                        <SpkSwiperJs slides={ReviewSwiper} slidesPerView={1} spaceBetween={30} className="swiper swiper-reviews" autoplay={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between !pb-0">
                                <div className="box-title">
                                    Featured Products 
                                </div>
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-primary/10 text-primary ">View All</Link>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                    <Spktables tableClass="ti-custom-table text-nowrap">
                                            <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="flex items-top flex-wrap">
                                                            <div className="similar-products-image me-2">
                                                                <img src="../../../assets/images/ecommerce/png/29.png" alt="" />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <p className="mb-0 text-[14px] font-semibold similar-product-name truncate">Ladies' Slim Bag </p>
                                                                <p className="mb-2">
                                                                    <span>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-half-s-fill me-2 text-warning"></i>
                                                                        4.3
                                                                    </span>
                                                                    <span className="text-textmuted dark:text-textmuted/50 ms-1 text-xs">(16K)</span>
                                                                </p>
                                                                <div className="flex gap-2 items-center">
                                                                    <p className="mb-0 text-lg font-semibold">
                                                                        $1,099
                                                                    </p>
                                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 font-normal">
                                                                        <s>$1,759</s>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto align-self-center">
                                                                <div className="ti-btn bg-primary text-white">Add To Cart</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="flex items-top flex-wrap">
                                                            <div className="similar-products-image me-2">
                                                                <img src="../../../assets/images/ecommerce/png/30.png" alt="" />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <p className="mb-0 text-[14px] font-semibold similar-product-name truncate">Wireless Headphones</p>
                                                                <p className="mb-2">
                                                                    <span>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill  text-warning"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-half-s-fill me-2 text-warning"></i>
                                                                        4.3
                                                                    </span>
                                                                    <span className="text-textmuted dark:text-textmuted/50 ms-1 text-xs">(5k)</span>
                                                                </p>
                                                                <div className="flex gap-2 items-center">
                                                                    <p className="mb-0 text-lg font-semibold">
                                                                        $7,99
                                                                    </p>
                                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 font-normal">
                                                                        <s>$1,299</s>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto align-self-center">
                                                                <div className="ti-btn bg-primary text-white">Add To Cart</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="flex items-top flex-wrap">
                                                            <div className="similar-products-image me-2">
                                                                <img src="../../../assets/images/ecommerce/png/31.png" alt="" />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <p className="mb-0 font-semibold similar-product-name truncate">Wireless Earbuds</p>
                                                                <p className="mb-2">
                                                                    <span>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill  text-warning"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-half-s-fill me-2 text-warning"></i>
                                                                        4.3
                                                                    </span>
                                                                    <span className="text-textmuted dark:text-textmuted/50 ms-1 text-xs">(2k)</span>
                                                                </p>
                                                                <div className="flex gap-2 items-center">
                                                                    <p className="mb-0 text-lg font-semibold">
                                                                        $1,499
                                                                    </p>
                                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 font-normal">
                                                                        <s>$2,599</s>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto align-self-center">
                                                                <div className="ti-btn bg-primary text-white">Add To Cart</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="flex items-top flex-wrap">
                                                            <div className="similar-products-image me-2">
                                                                <img src="../../../assets/images/ecommerce/png/32.png" alt="" />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <p className="mb-0 font-semibold similar-product-name truncate">Voluptatem Alarm Clock </p>
                                                                <p className="mb-2">
                                                                    <span>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill  text-warning"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-half-s-fill me-2 text-warning"></i>
                                                                        4.3
                                                                    </span>
                                                                    <span className="text-textmuted dark:text-textmuted/50 ms-1 text-xs">(12k)</span>
                                                                </p>
                                                                <div className="flex gap-2 items-center">
                                                                    <p className="mb-0 text-lg font-semibold">
                                                                        $2,299
                                                                    </p>
                                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 font-normal">
                                                                        <s>$3,299</s>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto align-self-center">
                                                                <div className="ti-btn bg-primary text-white">Add To Cart</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                <td className="border-b-0">
                                                    <Link scroll={false} href="#!">
                                                        <div className="flex items-top flex-wrap">
                                                            <div className="similar-products-image me-2">
                                                                <img src="../../../assets/images/ecommerce/png/28.png" alt="" />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <p className="mb-0 font-semibold similar-product-name truncate">Lightweight Sneakers</p>
                                                                <p className="mb-2">
                                                                    <span>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill  text-warning"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-s-fill leading-none text-[14px] text-warning me-1"></i>
                                                                        <i className="ri-star-half-s-fill me-2 text-warning"></i>
                                                                        4.3
                                                                    </span>
                                                                    <span className="text-textmuted dark:text-textmuted/50 ms-1 text-xs">(12k)</span>
                                                                </p>
                                                                <div className="flex gap-2 items-center">
                                                                    <p className="mb-0 text-lg font-semibold">
                                                                        $8,99
                                                                    </p>
                                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 font-normal">
                                                                        <s>$1,299</s>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="ms-auto align-self-center">
                                                                <div className="ti-btn bg-primary text-white">Add To Cart</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                    </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: Row-1 --> */}

                {/* <!-- Start:: Row-2 --> */}
                <h5 className="mb-2">Related Products</h5>
                <p className="mb-4">Explore more products similar to this one, dolore magna aliqua.</p>
                <SpkSwiperJs slides={RelatedSwiper} breakpoint={breakpoints} navigation={true} slidesPerView={1} spaceBetween={20} className="swiper swiper-related-products" autoplay={true} />
                {/* <!-- End:: Row-2 --> */}

</Fragment>
);
};

export default ProductDetails;