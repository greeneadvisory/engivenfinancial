"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Ordertable } from "@/shared/data/apps/ecommerce/ordersdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface OrdersProps {}

const Orders : FC<OrdersProps>  = () => {
    const [order, setOrder] = useState(Ordertable);
    const handleRemove = (id: number) => {
        const List = order.filter((idx) => idx.id !== id);
        setOrder(List);
    }
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Orders" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Orders" activepage="Orders" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
        <div className="box">
            <div className="box-header justify-between">
                <div className="box-title">
                    All Orders List
                </div>
                <div className="flex gap-4 items-center flex-wrap">
                        <SpkDropdown Customclass="ti-btn-group  p-0 border-0" CustomToggleclass="ti-btn ti-btn-outline-light border !m-0 !border-defaultborder dark:!border-defaultborder/10 ti-dropdown-toggle hs-dropdown-toggle gap-0"
                             iconPosition="before" Toggletext="Sort By" Icon={true} IconClass="ti ti-sort-descending-2 me-1" Arrowicon={true}>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Created Date</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Status</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Orders</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Product Name</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Oldest</Link></li>
                        </SpkDropdown>
                    <div className="custom-form-group grow">
                        <input type="text" className="form-control !pe-[7rem]" placeholder="Search Orders.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <Link scroll={false} href="#!" className="text-textmuted dark:text-textmuted/50 custom-form-btn"><i className="ti ti-search"></i></Link>
                    </div> 
                </div>
            </div>
            <div className="box-body p-0">
                <div className="table-responsive">
                    <Spktables tableClass="ti-custom-table ti-custom-table-hover text-nowrap" 
                       header={[{ title: 'Order Id' }, { title: 'Product' }, { title: 'Customer' }, { title: 'Mobile Number' }, { title: 'Ordered Date' }, { title: 'Status' }, { title: 'Payment Mode' }, { title: 'Cost' }, { title: 'Action' }]}>
                        {order.map((idx) => (
                            <tr className="order-list border-b !border-defaultborder dark:!border-defaultborder/10" key={idx.id}>
                                <td>{idx.orderid}</td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src={idx.src} className="w-100 h-100" alt="..." /></span>
                                        <div className="ms-2">
                                            <p className="font-semibold mb-0 flex items-center"><Link scroll={false} href="/apps/ecommerce/order-details">{idx.product}</Link></p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <img src={idx.src1} alt="" />
                                        </span>{idx.cusromer}
                                    </div>
                                </td>
                                <td>{idx.mobile}</td>
                                <td>
                                    {idx.date}
                                </td>
                                <td><SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge></td>
                                <td>{idx.payment}</td>
                                <td className="font-semibold">{idx.cost}</td>
                                <td>
                                    <Link scroll={false} href="/apps/ecommerce/order-details" className="ti-btn ti-btn-sm ti-btn-soft-primary btn-wave waves-effect waves-light !mb-0 me-2">
                                        <i className="ri-eye-line"></i>
                                    </Link>
                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-sm ti-btn-soft-info btn-wave waves-effect waves-light !mb-0 me-2">
                                        <i className="ri-download-line"></i>
                                    </Link>
                                    <Link scroll={false} href="#!" onClick={() => handleRemove(idx.id)} className="order-delete-btn ti-btn ti-btn-sm ti-btn-soft-primary2 btn-wave waves-effect waves-light !mb-0">
                                        <i className="ri-delete-bin-line"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </Spktables>
                </div>
            </div>
            <div className="box-footer">
                <div className="flex items-center flex-wrap overflow-auto">
                    <div className="mb-2 mb-sm-0">
                        Showing <b>1</b> to <b>10</b> entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                    </div>
                    <div className="ms-auto my-2">
                        <nav aria-label="" className="">
                            <ul className="ti-pagination mb-0 !p-0 justify-end float-end">
                                <li className="page-item disabled"> <Link scroll={false} href="#!" className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</Link>
                                </li>
                                <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] active !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">1</Link></li>
                                <li className="page-item " aria-current="page"> <Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">2</Link> </li>
                                <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">3</Link></li>
                                <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">4</Link></li>
                                <li className="page-item"> <Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none" href="#!">Next</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default Orders;