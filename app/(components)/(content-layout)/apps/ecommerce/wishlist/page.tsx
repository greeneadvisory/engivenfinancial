"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { MasterData } from "@/shared/data/apps/ecommerce/productsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import { addToCart, removeFromWishlist, setSelectedItem } from "@/shared/redux/action";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

interface WishlistProps {}

const Wishlist : FC<WishlistProps>  = () => {
    const reduxWishlist = useSelector((state: any) => state.wishlist);
    const [localWishlist, setLocalWishlist] = useState(MasterData);
    const Wishlistdata = [...localWishlist, ...reduxWishlist];

    const cart = useSelector((state: any) => state.cart);
    const products = useSelector((state: any) => state.products);


    const dispatch = useDispatch();

    const handleClick = (id: string) => {
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
                console.log("delete")
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    
    const handleDelete = (id: string) => {
        setLocalWishlist(localWishlist.filter((item: { id: any; }) => item.id !== id));
        dispatch(removeFromWishlist(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };

    const handleItemClick = (
        item: any) => {
        dispatch(setSelectedItem(item));
    };

    const allIds = [...cart.map((item: { id: any; }) => item.id), ...products.map((item: { id: any; }) => item.id)];
    const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

    const handleAddToCart = (item: any) => {
        dispatch(addToCart({ ...item, id: nextId }));
    };
return (
<Fragment>
    
        {/* <!-- Page Header --> */}
        <Seo title="Ecommerce-Wishlist" />

        <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Wishlist" activepage="Wishlist" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 sm:gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    My Wishlists
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linktag={true} Toggletext="Sort By" Linkclass="ti-btn bg-primary !m-0 text-white ti-btn-sm btn-wave waves-effect waves-light" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body box-body m-3 bg-light p-2 rounded mt-2">
                                <div className="flex items-center justify-between flex-wrap gap-2 ps-2">
                                    <p className="mb-0 text-[15px]">Adding<span className="text-primarytint1color font-semibold"> 12 items</span> in your wishlist</p>
                                    <Link scroll={false} href="/apps/ecommerce/checkout" className="ti-btn bg-secondary/10 text-secondary">Checkout All <i className="ti ti-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!--start::row-2 --> */}
                <div className="grid grid-cols-12 sm:gap-x-6">
                    {Wishlistdata.map((idx) => (
                    <div className="lg:col-span-6 col-span-12" key={idx.id}>
                        <div className={`box card-style-3 ${idx.class1}`}>
                            <div className="box-body p-4">
                                <div className="grid grid-cols-12 sm:gap-x-6">
                                    <div className="md:col-span-2 col-span-12">
                                        <div className="bg-primary/10 rounded-md mb-3 mb-md-0">
                                            <Link scroll={false} href="#!">
                                                <img src={idx.productpicture} alt="img" className="img-fluid w-full"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="md:col-span-10 col-span-12">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="grow">
                                                <h6 className="text-[14px] mb-0 font-medium"><Link scroll={false} href={`/apps/ecommerce/product-details?id=${idx.id}`}>{idx.title}</Link></h6>
                                                <div className={`min-w-fit-content mb-1 text-[13px] font-medium text-${idx.stockColor}`}>{idx.stock}</div>
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <h6 className="text-[22px] mb-0">{idx.price}</h6>
                                                    <span className="text-xs text-textmuted dark:text-textmuted/50 text-decoration-line-through opacity-70">{idx.discount}</span>
                                                    <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color} ms-2`}>{idx.discount1} Off</SpkBadge>
                                                </div>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn-delete ti-btn ti-btn-soft-primary1 ti-btn-icon" onClick={() => handleClick(idx.id)}><i className="ri-delete-bin-line"></i></Link>
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <Link scroll={false} href="/apps/ecommerce/cart" className="ti-btn bg-primary text-white btn-w-md !m-0" onClick={() => handleAddToCart(idx)}><i className="ri-shopping-cart-line me-1"></i> Add Cart</Link>
                                            <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-w-md !m-0"><i className="ri-bookmark-line me-1"></i> Save for Later</Link>
                                            <div className="flex items-baseline text-[13px] ms-auto">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star"></i></span>
                                                </div>
                                                <p className="mb-0 ms-1 min-w-fit-content text-textmuted dark:text-textmuted/50">
                                                    <span> ({idx.rating}) </span>
                                                    <span> Ratings</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className="xl:col-span-12 col-span-12">
                        <div className="flex items-center flex-wrap overflow-auto p-4 bg-white dark:bg-bodybg mb-3 rounded-md">
                            <div className="mb-2 mb-sm-0">
                                Showing <b>1</b> to <b>6 </b> entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                            </div>
                            <div className="sm:ms-auto">
                                <nav aria-label="...">
                                    <ul className="ti-pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link px-3 py-[0.375rem] !border-e-0">Previous</span>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link active px-3 py-[0.375rem] !border-e-0"
                                                href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page">
                                            <span className="page-link px-3 py-[0.375rem] !border-e-0">2</span>
                                        </li>
                                        <li className="page-item " aria-current="page">
                                            <span className="page-link px-3 py-[0.375rem] !border-e-0">3</span>
                                        </li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-2 --> */}
</Fragment>
);
};

export default Wishlist;