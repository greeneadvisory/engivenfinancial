"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { MasterData } from "@/shared/data/apps/ecommerce/productsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import { addToWishlist, removeFromCart } from "@/shared/redux/action";
import Link from "next/link";
import React, { FC, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

interface CartProps {}

const Cart : FC<CartProps>  = () => {
    const dispatch = useDispatch();
    const reduxCart = useSelector((state: any) => state.cart);
    const [localCart, setLocalCart] = useState(MasterData);
    const card = [...localCart, ...reduxCart];

    useEffect(() => {
        setLocalCart(localCart.filter((item) => !reduxCart.some((reduxItem: { id: number; }) => reduxItem.id === item.id)));
    }, [reduxCart]);

    const handleClick = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id: number) => {
        setLocalCart(localCart.filter((item: any) => item.id !== id));
        dispatch(removeFromCart(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };

    const handleAddToWishlist = (item: any) => {
        dispatch(addToWishlist(item));
    };


    function dec(el: any) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }

    const isEmpty = card.length === 0;
return (
<Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Cart" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Cart" activepage="Cart " />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start:: Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-9 col-span-12">
                        <div className="box" id="cart-container-delete">
                            <div className="box-header">
                                <div className="box-title">
                                    Cart Items
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive">
                                {isEmpty ? (
                                    <div className="text-center">
                                        <img src="../../../assets/images/ecommerce/png/13.png" alt='' />
                                        <h6>Your Shopping Cart is Empty</h6>
                                        <p>Add Some items to make me happy 😃</p>
                                    </div>
                                ) : (
                                    <Spktables tableClass="table table-bordered whitespace-nowrap min-w-full"  tableRowclass="border border-solid dark:!border-defaultborder/10 !border-defaultborder"
                                     header={[{ title: 'Product Name' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Total' }, { title: 'Action' },]}>
                                        {card.map((idx: any) => (
                                            <tr key={idx.id} className="border border-solid dark:!border-defaultborder/10 !border-defaultborder ">
                                                <td className="cart-items01">
                                                    <div className="flex items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xxl bg-light">
                                                                <img src={idx.productpicture} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-auto">
                                                            <div className="mb-1 text-[14px] font-semibold">
                                                                <Link scroll={false} href="#!">{idx.title}</Link>
                                                            </div>
                                                            <div className="flex gap-4 flex-wrap mb-1 items-center">
                                                                <div>
                                                                    <span className="me-1 d-inline-flex">Size:</span><span className="font-medium text-textmuted dark:text-textmuted/50">{idx.size}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="me-1 d-inline-flex">Color:</span><span className="font-medium text-textmuted dark:text-textmuted/50">{idx.color}</span>
                                                                </div>
                                                            </div>
                                                            <SpkBadge variant={`${idx.stockColor}/10`} customClass={`text-${idx.stockColor}`}>{idx.stock}</SpkBadge>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold text-[14px]">
                                                        {idx.price}
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="flex items-center flex-nowrap gap-1 rounded-full cart-input-group">
                                                        <SpkButton onclickfunc={dec} butttontype="button" Label="button"
                                                            customClass="ti-btn ti-btn-icon btn-wave ti-btn-sm  !rounded-full bg-primary/10 text-primary border product-quantity-minus1 border-end-0 waves-effect waves-light"><i
                                                                className="ri-subtract-line"></i></SpkButton>
                                                        <input type="number" className="form-control form-control-sm !rounded-full text-center p-0"
                                                            aria-label="quantity" defaultValue="1"/>
                                                        <SpkButton onclickfunc={inc} butttontype="button" Label="button"
                                                            customClass="ti-btn ti-btn-icon btn-wave ti-btn-sm  !rounded-full bg-primary/10 text-primary border product-quantity-plus1 border-start-0 waves-effect waves-light"><i
                                                                className="ri-add-line"></i></SpkButton>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-[14px] font-semibold">
                                                        $554
                                                    </div>
                                                </td>
                                                <td>
                                                <div className="flex items-center">
                                                        <SpkOverlay>
                                                            <Link scroll={false} href="/apps/ecommerce/wishlist" className="ti-btn ti-btn-icon bg-primary text-white ti-btn-sm me-1 hs-tooltip-toggle" onClick={() => handleAddToWishlist(idx)}>
                                                                <i className="ri-heart-line"></i>
                                                                <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm hidden" role="tooltip" 
                                                                >
                                                                    Add To Wishlist
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                        <SpkOverlay customClass="ltr:[--placement:left] rtl:[--placement:right]">
                                                            <Link scroll={false} href="#!" onClick={() => handleClick(idx.id)} className="hs-tooltip-toggle ti-btn ti-btn-icon bg-primarytint2color text-white ti-btn-sm btn-delete waves-effect waves-light">
                                                                <i className="ri-delete-bin-line"></i>
                                                                <span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip"                                                                 >
                                                                    Remove From cart
                                                                </span>
                                                            </Link>
                                                        </SpkOverlay>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </Spktables>
                                )}
                                </div>
                            </div>
                        </div>
                        <div className="box !hidden" id="cart-empty-cart">
                            <div className="box-header">
                                <div className="box-title">
                                    Empty Cart
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="cart-empty text-center">
                                    <span className="svg-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="!inline-flex" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z"/><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z"/><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z"/><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z"/></svg>
                                    </span>
                                    <h3 className="font-bold mb-1">Your Cart is Empty</h3>
                                    <h5 className="mb-3">Add some items to make me happy :)</h5>
                                    <Link scroll={false} href="/apps/ecommerce/products" className="ti-btn bg-primary text-white btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-12">	
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Order Summary
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="p-4 border-b border-defaultborder dark:border-defaultborder/10 border-dashed">
                                    <label htmlFor="promo-code" className="font-medium mb-0">Have a Promo Code?</label>
                                    <div className="text-[11px] text-textmuted dark:text-textmuted/50 mb-3">Apply Your Promo Code for an Instant Discount!</div>
                                    <div className="input-group mb-0">
                                        <input type="text" className="form-control form-control-sm !border-s" id="promo-code" name="promo-code" placeholder="Enter Promo Code" aria-label="Enter Promo Code" aria-describedby="coupons"/>
                                        <SpkButton variant="primary" customClass="ti-btn !m-0" buttontype="button" Id="coupons">Apply</SpkButton>
                                    </div>
                                </div>
                                <div className="p-4 pb-2">
                                    <p className="mb-2 font-semibold">Delivery:</p>
                                    <ul className="nav nav-tabs tab-style-8 scaleX rounded cart-summary-nav gap-2 flex" role="tablist">
                                        <li className="nav-item grow me-0" role="presentation">
                                            <SpkButton customClass="nav-link w-full active" Tab="#freeshipping-pane"  Role="tab">Free Shipping</SpkButton>
                                        </li>
                                        <li className="nav-item grow" role="presentation">
                                            <SpkButton customClass="nav-link w-full" Tab="#expressshipping-tab-pane" Role="tab">Express Shipping</SpkButton>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4 border-b border-defaultborder dark:border-defaultborder/10 border-dashed">
                                    <div className="overflow-hidden p-0 border-0" id="freeshipping-pane" role="tabpanel">
                                        <div className="text-xs text-textmuted dark:text-textmuted/50 mb-3"><i className="ri-information-fill"></i> Delivered Within 7 Days</div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Sub Total</div>
                                            <div className="font-medium text-[14px]">$2,547</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Discount</div>
                                            <div className="font-medium text-[14px] text-success">20% - $124</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Delivery Charges</div>
                                            <div className="font-medium text-[14px] text-danger">- $0</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Service Tax (18%)</div>
                                            <div className="font-medium text-[14px]">- $12</div>
                                        </div>
                                        <div className="flex items-center justify-between h5">
                                            <div className="text-[1rem]">Total :</div>
                                            <div className="font-semibold"> $2,254</div>
                                        </div>
                                        <div className="grid">
                                            <Link scroll={false} href="/apps/ecommerce/checkout" className="ti-btn bg-primary text-white text-center btn-wave mb-1">Proceed To Checkout</Link>
                                            <Link scroll={false} href="/apps/ecommerce/products" className="ti-btn ti-btn-soft-primary1 text-center btn-wave">Continue Shopping</Link>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden p-0 border-0 hidden" id="expressshipping-tab-pane" role="tabpanel">
                                        <div className="text-xs text-textmuted dark:text-textmuted/50 mb-3"><i className="ri-information-fill"></i> Delivered by Tomorrow</div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Sub Total</div>
                                            <div className="font-medium text-[14px]">$2,547</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Discount</div>
                                            <div className="font-medium text-[14px] text-success">20% - $124</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Delivery Charges</div>
                                            <div className="font-medium text-[14px] text-danger">- $15</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="text-textmuted dark:text-textmuted/50">Service Tax (18%)</div>
                                            <div className="font-medium text-[14px]">- $12</div>
                                        </div>
                                        <div className="flex items-center justify-between h5">
                                            <div className="text-[1rem]">Total :</div>
                                            <div className="font-semibold"> $2,546</div>
                                        </div>
                                        <div className="grid">
                                            <Link scroll={false} href="/apps/ecommerce/checkout" className="ti-btn bg-primary text-white btn-wave mb-2">Proceed To Checkout</Link>
                                            <Link scroll={false} href="/apps/ecommerce/products" className="ti-btn ti-btn-soft-primary1 btn-wave">Continue Shopping</Link>
                                        </div>
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

export default Cart;