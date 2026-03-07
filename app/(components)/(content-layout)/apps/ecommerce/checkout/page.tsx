"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface CheckoutProps {}

const Checkout : FC<CheckoutProps>  = () => {

    const [key, setKey] = useState("first");

    const handleNext = () => {
      switch (key) {
        case "first":
          setKey("second");
          break;
        case "second":
          setKey("third");
          break;
        case "third":
          setKey("fourth");
          break;
        default:
          break;
      }
    };
  
    const handlePrevious = () => {
      switch (key) {
        case "second":
          setKey("first");
          break;
        case "third":
          setKey("second");
          break;
        case "fourth":
          setKey("third");
          break;
        default:
          break;
      }
    };
return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Ecommerce-Checkout" />

        <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Checkout" activepage="Checkout " />

        {/* <!-- Page Header Close --> */}
           {/* <!-- Start:: Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box">
                            <div className="box-body product-checkout">
                                <ul  className="nav nav-tabs tab-style-8 scaleX md:flex block justify-around border border-dashed dark:border-defaultborder/10 border-b-0 bg-light rounded-top" id="myTab1">
                                    <li key="first" className="nav-item" role="presentation">
                                        <SpkButton customClass={`nav-link !p-4 ${key === "first" ? "active" : ""} md:w-auto w-full`}  onclickfunc={() => setKey("first")} buttontype="button" >
                                            <i className="ri-truck-line me-2 align-middle"></i>Shipping</SpkButton>
                                    </li>
                                    <li key="second" className="nav-item" role="presentation">
                                        <SpkButton customClass={`nav-link !p-4 ${key === 'second' ? 'active' : ''} md:w-auto w-full`}  onclickfunc={() => setKey("second")} buttontype="button" >
                                            <i className="ri-user-3-line me-2 align-middle"></i>Personal Details</SpkButton>
                                    </li>
                                    <li key="third" className="nav-item" role="presentation">
                                        <SpkButton customClass={`nav-link !p-4 ${key === "third" ? "active" : ""} md:w-auto w-full`} onclickfunc={() => setKey("third")}   buttontype="button" >
                                            <i className="ri-bank-card-line me-2 align-middle"></i>Payment</SpkButton>
                                    </li>
                                    <li key="fourth" className="nav-item" role="presentation">
                                        <SpkButton customClass={`nav-link !p-4 ${key === "fourth" ? "active" : ""} md:w-auto w-full`} onclickfunc={() => setKey("fourth")} buttontype="button" >
                                            <i className="ri-checkbox-circle-line me-2 align-middle"></i>Complete Order</SpkButton>
                                    </li>
                                </ul>
                                <div className="tab-content border border-dashed dark:border-defaultborder/10" id="myTabContent">
                                    {key === "first" && (
                                        <div className="tab-pane fade border-0 p-0"   id="order-tab-pane" aria-labelledby="order-tab" role="tabpanel"
                                        tabIndex={0}>
                                            <div className="p-4">
                                                <p className="mb-1 font-semibold text-textmuted dark:text-textmuted/50 op-5 text-xl">01</p>
                                                <p className="text-[15px] font-semibold mb-3">Shipping Methods :</p>
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 mb-4">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <div className="form-check shipping-method-container mb-0">
                                                            <input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input mt-1" defaultChecked/>
                                                            <div className="form-check-label">
                                                                <div className="sm:flex items-center justify-between">
                                                                    <div className="me-2">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../../assets/images/ecommerce/png/21.png" alt=""/>
                                                                        </span>
                                                                    </div>
                                                                    <div className="shipping-partner-details sm:me-[3rem] me-0">
                                                                        <p className="mb-0 font-semibold">UPS</p>
                                                                        <p className="text-textmuted dark:text-textmuted/50 text-[11px] mb-0">Delivered By 11,May 2024</p>
                                                                    </div>
                                                                    <div className="font-semibold sm:me-[3rem] me-0">
                                                                        $9.99
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <div className="form-check shipping-method-container mb-0">
                                                            <input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input mt-1"/>
                                                            <div className="form-check-label">
                                                                <div className="sm:flex items-center justify-between">
                                                                    <div className="me-2">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../../assets/images/ecommerce/png/22.png" alt=""/>
                                                                        </span>
                                                                    </div>
                                                                    <div className="shipping-partner-details sm:me-[3rem] me-0">
                                                                        <p className="mb-0 font-semibold">USPS</p>
                                                                        <p className="text-textmuted dark:text-textmuted/50 text-[11px] mb-0">Delivered By 22,Nov 2022</p>
                                                                    </div>
                                                                    <div className="font-semibold sm:me-[3rem] me-0">
                                                                        $10.49
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-[15px] font-semibold sm:flex block items-center justify-between mb-3">
                                                    <div>Shipping Address :</div>
                                                    <div className="mt-sm-0 mt-2">
                                                        <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-btn ti-btn-sm btn-wave ti-btn-primary" Overlay="#hs-extralarge-modal">
                                                            <i className="ri-add-line me-1 align-middle text-[14px] font-semibold"></i>Add New Address
                                                        </SpkButton>
                                                        <div id="hs-extralarge-modal" className="hs-overlay hidden ti-modal">
                                                            <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out lg:!max-w-4xl lg:w-full m-3 lg:!mx-auto">
                                                            <div className="ti-modal-content">
                                                                <div className="ti-modal-header">
                                                                <h6 className="ti-modal-title">
                                                                    New Address
                                                                </h6>
                                                                <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn"
                                                                    Overlay="#hs-extralarge-modal">
                                                                    <span className="sr-only">Close</span>
                                                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                                                        fill="currentColor" />
                                                                    </svg>
                                                                </SpkButton>
                                                                </div>
                                                                <div className="ti-modal-body">
                                                                    <div className="grid grid-cols-12 gap-x-6 gap-y-3">
                                                                        <div className="xl:col-span-6 col-span-12">
                                                                            <label htmlFor="fullname-new" className="form-label">Full Name</label>
                                                                            <input type="text" className="form-control" id="fullname-new" placeholder="Full Name"/>
                                                                        </div>
                                                                        <div className="xl:col-span-6 col-span-12">
                                                                            <label htmlFor="email-new" className="form-label">Email</label>
                                                                            <input type="email" className="form-control" id="email-new" placeholder="email"/>
                                                                        </div>
                                                                        <div className="xl:col-span-6 col-span-12">
                                                                            <label htmlFor="phonenumber-new" className="form-label">Phone Number</label>
                                                                            <input type="number" className="form-control" id="phonenumber-new" placeholder="Phone"/>
                                                                        </div>
                                                                        <div className="xl:col-span-6 col-span-12">
                                                                            <label htmlFor="address-new" className="form-label">Address</label>
                                                                            <input type="text" className="form-control" id="address-new" placeholder="Address"/>
                                                                        </div>
                                                                        <div className="xl:col-span-12 col-span-12">
                                                                            <div className="grid grid-cols-12 gap-x-6">
                                                                                <div className="xl:col-span-3 col-span-12">
                                                                                    <label htmlFor="pincode-new" className="form-label">Pincode</label>
                                                                                    <input type="number" className="form-control" id="pincode-new" placeholder="Pincode"/>
                                                                                </div>
                                                                                <div className="xl:col-span-3 col-span-12">
                                                                                    <label htmlFor="city-new" className="form-label">City</label>
                                                                                    <input type="text" className="form-control" id="city-new" placeholder="City"/>
                                                                                </div>
                                                                                <div className="xl:col-span-3 col-span-12">
                                                                                    <label htmlFor="state-new" className="form-label">State</label>
                                                                                    <input type="text" className="form-control" id="state-new" placeholder="State"/>
                                                                                </div>
                                                                                <div className="xl:col-span-3 col-span-12">
                                                                                    <label htmlFor="country-new" className="form-label">Country</label>
                                                                                    <input type="text" className="form-control" id="country-new" placeholder="Country"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ti-modal-footer">
                                                                    <SpkButton buttontype="button" customClass="ti-btn bg-light text-dark" Overlay="#hs-extralarge-modal">Close</SpkButton>
                                                                    <SpkButton buttontype="button" customClass="ti-btn bg-success text-white">Save
                                                                        Address</SpkButton>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 sm:gap-x-6">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <div className="box card-style-6 border border-defaultborder dark:border-defaultborder/10 shadow-none mb-xl-0">
                                                            <div className="box-body p-4">
                                                                <div className="flex gap-2">
                                                                    <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked/>
                                                                    <label className="form-check-label cursor-pointer" htmlFor="address1">Set as Default</label>
                                                                </div>
                                                                <div className="flex items-center justify-between mb-3">
                                                                    <div className="grow">
                                                                        <h6 className="text-[1rem] mb-0 font-semibold">My Home Address</h6>
                                                                    </div>
                                                                    <Link  href="#!" scroll={false} className="ti-btn bg-primary text-white ti-btn-sm"><i className="ri-edit-2-line"></i> Change</Link>
                                                                </div>
                                                                <h6 className="mb-1">Victoria Gracie</h6>
                                                                <p className="mb-1 fw-500 text-[13px]">victoriagracie@jinno.mail</p>
                                                                <p className="mb-2 fw-500 text-[13px]">+05-554-874113</p>
                                                                <p className="mb-0">
                                                                    H.No: 48A-1B/C451, Smart Avenue,Coolin Street,
                                                                    Opp. NG Super Mart, 57016, Canada
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <div className="box card-style-6 border dark:border-defaultborder/10 shadow-none mb-0">
                                                            <div className="box-body p-4">
                                                                <div className="flex gap-2">
                                                                    <input className="form-check-input" type="radio" id="address2" name="default-address"/>
                                                                    <label className="form-check-label cursor-pointer" htmlFor="address2">Set as Default</label>
                                                                </div>
                                                                <div className="flex items-center justify-between mb-3">
                                                                    <div className="grow">
                                                                        <div className="flex items-center gap-2 card-style-6-avatar">
                                                                            <h6 className="text-[1rem] mb-0 font-semibold">Work Place Address</h6>
                                                                        </div>
                                                                    </div>
                                                                    <Link  href="#!" scroll={false} className="ti-btn bg-primary text-white ti-btn-sm"><i className="ri-edit-2-line"></i> Change</Link>
                                                                </div>
                                                                <h6 className="mb-1">Victoria Gracie</h6>
                                                                <p className="mb-1 fw-500 text-[13px]">victoriagracie@jinno.mail</p>
                                                                <p className="mb-2 fw-500 text-[13px]">+05-554-874113</p>
                                                                <p className="mb-0">
                                                                    Sunset Plaza, 5th Floor, Suite No: 502, Ocean Avenue,, Seaview Heights, Sunnydale, CA 90210, United States
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-end">
                                                    <SpkButton buttontype="button" customClass="ti-btn ti-btn-soft-success" onclickfunc={handleNext} Id="personal-details-trigger">
                                                        Personal Details<i className="ri-user-3-line ms-2 align-middle inline-block"></i></SpkButton>
                                            </div>
                                        </div>
                                    )}
                                    {key === "second" && (
                                        <div className="tab-pane fade border-0 p-0 "  id="confirm-tab-pane" aria-labelledby="confirmed-tab" role="tabpanel"
                                            tabIndex={0}>
                                            <div className="p-4">
                                                <p className="mb-1 font-semibold text-textmuted dark:text-textmuted/50 op-5 text-xl">02</p>
                                                <div className="text-[15px] font-semibold sm:flex block items-center justify-between mb-3">
                                                    <div>Personal Details :</div>
                                                </div>
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="firstname-personal" className="form-label">First Name</label>
                                                        <input type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Victoria "/>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="lastname-personal" className="form-label">Last Name</label>
                                                        <input type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Gracie"/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="email-personal" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="email-personal" placeholder="victoriagracie@jinno.mail" defaultValue=""/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="phoneno-personal" className="form-label">Phone no</label>
                                                        <input type="text" className="form-control" id="phoneno-personal" placeholder="554-874113" defaultValue=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                    className="px-4 py-3 border-top border-block-start-dashed sm:flex justify-between">
                                                    <SpkButton buttontype="button" variant="soft-danger" customClass="ti-btn  m-1" onclickfunc={handlePrevious}
                                                        id="back-shipping-trigger"><i
                                                            className="ri-truck-line me-2 align-middle inline-block"></i>Back To 
                                                        Shipping</SpkButton> <SpkButton buttontype="button" variant="soft-success" onclickfunc={handleNext}
                                                        customClass="ti-btn  m-1" id="payment-trigger">Continue
                                                        To
                                                        Payment<i
                                                            className="bi bi-credit-card-2-front align-middle ms-2 inline-block"></i></SpkButton>
                                                </div>
                                        </div>
                                    )}
                                    {key === "third" && (
                                        <div className="tab-pane fade border-0 p-0 " id="shipped-tab-pane"
                                        aria-labelledby="shipped-tab" role="tabpanel" tabIndex={0}>
                                            <div className="p-4">
                                                <p className="mb-1 font-semibold text-textmuted dark:text-textmuted/50 op-5 text-xl">03</p>
                                                <div className="grid grid-cols-12 sm:gap-x-6">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <div className="text-[15px] font-semibold sm:flex block items-center justify-between mb-3">
                                                            <div>Payment Details :</div>
                                                        </div>
                                                        <div className="mb-3 sm:flex block gap-4" role="group" aria-label="Basic radio toggle button group">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions3" defaultValue="Paymentoptions3" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="Paymentoptions3">Credit/Debit Card</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions1" defaultValue="Paymentoptions1"/>
                                                                <label className="form-check-label" htmlFor="Paymentoptions1">C.O.D (Cash on delivery)</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions2" defaultValue="Paymentoptions2"/>
                                                                <label className="form-check-label" htmlFor="Paymentoptions2">UPI Payment</label>
                                                            </div>                                                        
                                                        </div>
                                                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 mb-3">
                                                            <div className="xl:col-span-12 col-span-12">
                                                                <label htmlFor="payment-card-number" className="form-label">Card Number</label>
                                                                <input type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX"/>
                                                            </div>
                                                            <div className="xl:col-span-12 col-span-12">
                                                                <label htmlFor="payment-card-name" className="form-label">Name On Card</label>
                                                                <input type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR"/>
                                                            </div>
                                                            <div className="xl:col-span-4 col-span-12">
                                                                <label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</label>
                                                                <input type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024"/>
                                                            </div>
                                                            <div className="xl:col-span-4 col-span-12">
                                                                <label htmlFor="payment-cvv" className="form-label">CVV</label>
                                                                <input type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341"/>
                                                            </div>
                                                            <div className="xl:col-span-4 col-span-12">
                                                                <label htmlFor="payment-security" className="form-label">O.T.P</label>
                                                                <input type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467"/>
                                                                <label htmlFor="payment-security" className="form-label mt-1 mb-0 text-danger text-[11px]"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                                            </div>
                                                            <div className="xl:col-span-12 col-span-12">
                                                                <div className="form-check">
                                                                    <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked/>
                                                                    <label className="form-check-label" htmlFor="payment-card-save">
                                                                        Save this card
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-[15px] font-semibold sm:flex block items-center justify-between mb-3">
                                                            <div>Saved Cards :</div>
                                                        </div>
                                                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                                            <div className="xl:col-span-6 col-span-12">
                                                                <div className="form-check payment-card-container mb-0">
                                                                    <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked/>
                                                                    <div className="form-check-label">
                                                                    <div className="sm:flex block items-center justify-between">
                                                                        <div className="me-2 leading-none">
                                                                            <span className="avatar avatar-md">
                                                                                <img src="../../../assets/images/ecommerce/png/26.png" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="saved-card-details">
                                                                            <p className="mb-0 font-semibold">XXXX - XXXX - XXXX - 7646</p>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="xl:col-span-6 col-span-12">
                                                                <div className="form-check payment-card-container mb-0">
                                                                    <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input"/>
                                                                    <div className="form-check-label">
                                                                    <div className="sm:flex block items-center justify-between">
                                                                        <div className="me-2 leading-none">
                                                                            <span className="avatar avatar-md">
                                                                                <img src="../../../assets/images/ecommerce/png/27.png" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="saved-card-details">
                                                                            <p className="mb-0 font-semibold">XXXX - XXXX - XXXX - 9556</p>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                    className="px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex justify-between">
                                                    <SpkButton buttontype="button" customClass="ti-btn m-1" variant="soft-danger" onclickfunc={handlePrevious}
                                                        id="back-personal-trigger"><i
                                                            className="ri-user-3-line me-2 align-middle inline-block"></i>Back
                                                        To Personal Info</SpkButton> <SpkButton buttontype="button" variant="soft-success" onclickfunc={handleNext}
                                                        customClass="ti-btn m-1"
                                                        id="continue-payment-trigger">Continue Payment<i
                                                            className="bi bi-credit-card-2-front align-middle ms-2 inline-block"></i></SpkButton>
                                                </div>
                                        </div>
                                    )}
                                     {key === "fourth" && (
                                        <div className="tab-pane fade border-0 p-0 " id="delivery-tab-pane"
                                        aria-labelledby="delivered-tab" role="tabpanel" tabIndex={0}>
                                            <div className="p-4 checkout-payment-success my-3">
                                                <div className="mb-4">
                                                    <h5 className="text-success font-semibold">Payment Successful...</h5>
                                                </div>
                                                <div className="mb-4 flex justify-center">
                                                    <img src="../../../assets/images/ecommerce/png/24.png" alt=""/>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="mb-1 text-[14px]">You can track your order with Order Id <b>SPK#1FR</b> from <Link scroll={false} className="text-primarytint1color" href="#!"><u>Track Order</u></Link></p>
                                                    <p className="text-textmuted dark:text-textmuted/50">Thankyou for shopping with us.</p>
                                                </div>
                                                <Link scroll={false} href="/apps/ecommerce/products" className="ti-btn bg-primary text-white">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
                                            </div>
                                        </div>
                                     )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title me-1">Order Summary</div><SpkBadge variant="primary/10" customClass="text-primary rounded-full">02</SpkBadge>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group mb-0 border-0 rounded-0">
                                    <li className="ti-list-group-item p-4 border-t-0">
                                        <div className="flex items-center flex-wrap">
                                            <span className="avatar avatar-lg bg-light me-2">
                                                <img src="../../../assets/images/ecommerce/png/9.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <p className="mb-0 font-semibold">Versatile Hoodie</p>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Quantity : 2  <SpkBadge variant="success/10" customClass="text-success mx-3">30% Off</SpkBadge></p>
                                            </div>
                                            <div className="ms-auto">
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-close-line text-[1rem] text-textmuted dark:text-textmuted/50"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 text-[14px] font-semibold">$189<span className="ms-1 text-textmuted dark:text-textmuted/50 text-[11px] inline-block font-normal"><s>$329</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item p-4  border-b border-block-end-dashed">
                                        <div className="flex items-center flex-wrap">
                                            <span className="avatar avatar-lg bg-light me-2">
                                                <img src="../../../assets/images/ecommerce/png/7.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <p className="mb-0 font-semibold">Leather Hand Bag</p>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Quantity : 1  <SpkBadge variant="success/10" customClass="text-success mx-3">10% Off</SpkBadge></p>
                                            </div>
                                            <div className="ms-auto">
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-close-line text-[1rem] text-textmuted dark:text-textmuted/50"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 text-[14px] font-semibold">$187<span className="ms-1 text-textmuted dark:text-textmuted/50 text-[11px] inline-block font-normal"><s>$139</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="text-xs font-semibold bg-primary/10 text-primary badge badge-md rounded">SPRUKO25</div>
                                        <div className="text-success">COUPON APPLIED</div>
                                    </div>
                                </div>
                                <div className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-textmuted dark:text-textmuted/50">Sub Total</div>
                                        <div className="font-semibold text-[14px]">$318</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-textmuted dark:text-textmuted/50">Discount</div>
                                        <div className="font-semibold text-[14px] text-success">10% - $31.8</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-textmuted dark:text-textmuted/50">Delivery Charges</div>
                                        <div className="font-semibold text-[14px] text-danger">- $29</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-textmuted dark:text-textmuted/50">Service Tax (18%)</div>
                                        <div className="font-semibold text-[14px]">- $45.29</div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[15px]">Total :</div>
                                        <div className="font-semibold text-[1rem] text-dark"> $1,387</div>
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

export default Checkout;