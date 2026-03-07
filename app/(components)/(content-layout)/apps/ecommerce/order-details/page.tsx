"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Orderdetailsdata } from "@/shared/data/apps/ecommerce/orderdetailsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface OrderDetailsProps {}

const OrderDetails : FC<OrderDetailsProps>  = () => {
    const print = () => {
        window.print();
    };
return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Ecommerce-Orderdetails" />

        <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Order Details" activepage="Order Details" />

        {/* <!-- Page Header Close --> */}
        <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-8 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header flex justify-between">
                                    <div className="box-title">
                                        Order No - <span className="text-primary">#SPK-7832</span>
                                    </div>
                                    <div>
                                        <SpkBadge variant="primary/10" customClass="text-primary">
                                            Estimated delivery : 30,Nov 2023
                                        </SpkBadge>
                                    </div>
                                </div>
                                <div className="box-body p-0">
                                    <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap"  tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                    header={[{ title: 'Item' }, { title: 'Tracking ID' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Total Price' }]} >
                                        {Orderdetailsdata.map((product, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xl bg-primary/10">
                                                                <img src={product.image} alt={product.name} />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="mb-1 text-[14px] font-medium">
                                                                <Link scroll={false} href="#!" >{product.name}</Link>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1 inline-block">Size:</span><span className="text-textmuted dark:text-textmuted/50">{product.size}</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1 inline-block">Color:</span><span className="text-textmuted dark:text-textmuted/50">{product.color} {product.badge}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><Link scroll={false} href="#!" className="text-primary">{product.sku}</Link></td>
                                                <td><span className="text-[15px] font-semibold">${product.price}</span></td>
                                                <td>{product.quantity}</td>
                                                <td>${product.total}</td>
                                            </tr>
                                        ))}
                                </Spktables>
                                    </div>
                                </div>
                                <div className="box-footer flex items-center justify-between gap-2 flex-wrap">
                                    <SpkButton variant="" customClass="ti-btn bg-primary/10 text-primary btn-wave !m-0" onclickfunc={print}><i className="ri-printer-line me-1 align-middle inline-block"></i>Print</SpkButton>
                                    <SpkButton variant="" customClass="ti-btn bg-primary text-white btn-wave !m-0"><i className="ri-share-forward-line me-1 align-middle inline-block"></i>Share Details</SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Order tracking
                                        </div>
                                        <div>
                                            ID : <Link scroll={false} href="#!" className="text-primary font-semibold">#245879</Link>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="custom-form-group mb-3">
                                            <input type="text" className="form-control form-control-md" placeholder="Enter your order ID" aria-label="Order ID"/>
                                            <SpkButton variant="" customClass="ti-btn bg-primary text-white ti-btn-sm border-0 custom-form-btn" buttontype="button">Track Order</SpkButton>
                                        </div>
                                        <p className="mb-4">
                                            <span className="font-medium me-2 text-[14px]">Status :</span>
                                            <span className="bg-success/10 text-success text-[11px] badge">Shipping</span>
                                        </p>
                                        <div className="order-track mt-1">
                                            <div className="hs-accordion-group">
                                            <div className="hs-accordion accordion active" id="order-heading-one">
                                                <Link scroll={false} href="#!" className="hs-accordion-toggle group items-center gap-x-3 w-full font-semibold text-start transition"
                                                aria-controls="order-collapse-one">
                                                <div className="flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-primary/10 bg-primary/10">
                                                            <img src="../../../assets/images/ecommerce/png/18.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow flex items-center justify-between">
                                                        <p className="font-medium mb-0 text-[0.875rem]">Order Placed</p>
                                                        <span className="font-normal text-secondary">May, 15</span>
                                                    </div>
                                                </div>
                                                </Link>
                                                <div id="order-collapse-one" className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="order-heading-one">
                                                <div className="accordion-body !pt-0 !ps-[3rem]">
                                                    <div className="">
                                                        <p className="mb-0">Order placed successfully by <Link scroll={false} href="#!" className="font-semibold text-primary">Austin Ninus</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="hs-accordion accordion active" id="order-heading-two">
                                                <Link scroll={false} href="#!" className="hs-accordion-toggle group items-center gap-x-3 w-full font-semibold text-start transition"
                                                aria-controls="order-collapse-two">
                                                <div className="flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-primarytint1color/10 bg-primarytint1color/10">
                                                            <img src="../../../assets/images/ecommerce/png/8.png" alt=""/>
                                                    </span>
                                                    </div>
                                                    <div className="flex-grow flex items-center justify-between">
                                                        <p className="font-medium mb-0 text-[0.875rem]">Picked</p>
                                                        <span className="font-normal">May 15, 21:08</span>
                                                    </div>
                                                </div>
                                                </Link>
                                                <div id="order-collapse-two"
                                                className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                                aria-labelledby="order-heading-two">
                                                <div className="accordion-body !pt-0 !ps-[3rem]">
                                                    <div className="">
                                                        <p className="mb-0">Your order has been collected by <span className="font-weight-semibold">Suguna Enterprises.</span></p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hs-accordion accordion active" id="order-heading-three">
                                                <Link scroll={false} href="#!" className="hs-accordion-toggle group items-center gap-x-3 w-full font-semibold text-start transition" aria-controls="order-collapse-three">
                                                <div className="flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-info/10 bg-info/10">
                                                            <img src="../../../assets/images/ecommerce/png/19.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow flex items-center justify-between">
                                                        <p className="font-medium mb-0 text-[0.875rem]">Shipping</p>
                                                        <span className="font-normal">May 15, 21:08</span>
                                                    </div>
                                                </div>
                                                </Link>
                                                <div id="order-collapse-three"
                                                className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                                aria-labelledby="order-heading-three">
                                                <div className="accordion-body !pt-0 !ps-[3rem]">
                                                    <p className="mb-0">Order<span className="font-weight-semibold"> picked </span> and en route to location.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="hs-accordion accordion" id="order-heading-four">
                                                <Link scroll={false} href="#!" className="hs-accordion-toggle group inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
                                                <div className="flex mb-2 flex-grow">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-secondary/10 bg-secondary/10">
                                                            <img src="../../../assets/images/ecommerce/png/25.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow flex items-center justify-between">
                                                        <p className="font-medium mb-0 text-[0.875rem]">Out For Delivery</p>
                                                        <span className="text-[0.75rem] !font-normal text-[#8c9097] dark:text-white/50">May 15, 15:10 (expected)</span>
                                                    </div>
                                                </div>
                                                </Link>
                                                <div id="order-collapse-four"
                                                className="space-y-3 hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300"
                                                aria-labelledby="order-heading-four">
                                                <div className="accordion-body !pt-0 !ps-[3rem]">
                                                    <div className="mb-1"> <p className="mb-0">Your order is out for delivery</p><span className="text-muted fs-12">May 15, 2022, 15:36</span> </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="hs-accordion accordion" id="order-heading-five">
                                                <Link scroll={false} href="#!" className="hs-accordion-toggle group inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
                                                <div className="flex mb-0 flex-grow">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm avatar-rounded track-order-icon backdrop-blur border border-primarytint2color/10 bg-primarytint2color/10">
                                                            <img src="../../../assets/images/ecommerce/png/20.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow flex items-center justify-between">
                                                        <p className="font-semibold mb-0 text-[0.875rem]">Delivered</p>
                                                        <span className="text-[0.75rem] !font-normal text-[#8c9097] dark:text-white/50">Nov 03, 18:42</span>
                                                    </div>
                                                </div>
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box overflow-hidden">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Order Summary
                                        </div>
                                        <div>
                                            ID : <Link scroll={false} href="#!" className="text-primary font-semibold">#245879</Link>
                                        </div>
                                    </div>
                                    <div className="box-body p-0 table-responsive">
                                        <Spktables tableClass="ti-custom-table text-nowrap">
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="font-semibold">Total Items :</div>
                                                    </td>
                                                    <td>
                                                        06
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="font-semibold">Applied Coupon :</div>
                                                    </td>
                                                    <td>
                                                        <SpkBadge variant="success/10" customClass="text-success">SP0578A</SpkBadge>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="font-semibold">Delivery Fees :</div>
                                                    </td>
                                                    <td>
                                                        <span className="text-danger">+$29</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="font-semibold">Sub Total :</div>
                                                    </td>
                                                    <td>
                                                        <span className="text-[14px] font-medium">$3,799</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <div className="font-semibold">Total Price :</div>
                                                    </td>
                                                    <td>
                                                        <span className="text-xl font-semibold">$3,129</span>
                                                    </td>
                                                </tr>
                                        </Spktables>
                                    </div>
                                </div>
                            </div>
        </div>
</Fragment>
);
};

export default OrderDetails;