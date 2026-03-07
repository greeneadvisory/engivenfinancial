"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import { ProductList } from "@/shared/data/apps/ecommerce/productlistdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface ProductsListProps {}

const ProductsList : FC<ProductsListProps>  = () => {
    const [allData, setAllData] = useState<any>(ProductList);
    const handleRemove = (id: number) => {
        const newList = allData.filter((item: { id: number; }) => item.id !== id);
        setAllData(newList);
    };

    const [selectedItems, setSelectedItems] = useState<any>([]);

    const handleCheckboxClick = (id: string) => {
        setSelectedItems((prevSelected: string[]) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item: string) => item !== id)
                : [...prevSelected, id]
        );
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(allData.map((idx: { id: any; }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Ecommerce-Productlist" />

                <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products List" activepage="Products List" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
                <div className="row">   
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Products List
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive overflow-auto table-bordered-default">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10" showCheckbox={true} 
                                 onChange={handleSelectAll} checked={selectedItems.length === allData.length} header={[{ title: 'Product' }, { title: 'Category' }, { title: 'Price' }, { title: 'Stock' }, { title: 'Status' }, { title: 'Seller' }, { title: 'Published' }, { title: 'Action' }]}>
                                    {allData.map((idx: any) => (
                                        <tr className="product-list border-b !border-defaultborder dark:!border-defaultborder/10" key={idx.id}>
                                            <td className="product-checkbox">
                                                <input className="form-check-input check-all" type="checkbox" id="all-products" defaultValue=""
                                                    aria-label="..."
                                                    onChange={() => handleCheckboxClick(idx.id)}
                                                    defaultChecked={selectedItems.includes(idx.id)} />
                                            </td>
                                            <td>
                                                <div className="flex">
                                                    <span className="avatar avatar-md avatar-square bg-light"><img src={idx.pdctsrc} className="w-full h-full" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="font-semibold mb-0 flex items-center"><Link scroll={false} href="#!"> {idx.PdctName}</Link></p>
                                                        <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">{idx.subname}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{idx.category}</span>
                                            </td>
                                            <td>{idx.price}</td>
                                            <td>{idx.stock}</td>
                                            <td><SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.status}</SpkBadge></td>
                                            <td>
                                                <div className="flex items-center font-semibold">
                                                    <span className="avatar avatar-sm p-1 bg-light me-2 avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                    <Link scroll={false} href="#!">{idx.Seller}</Link>
                                                </div>
                                            </td>
                                            <td>{idx.date}</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link scroll={false} href="/apps/ecommerce/edit-products" className="ti-btn btn-wave  ti-btn-sm ti-btn-soft-primary waves-effect waves-light"><i className="ri-edit-line"></i></Link>
                                                    <Link scroll={false} href="#!" onClick={() => handleRemove(idx.id)} className="ti-btn btn-wave product-btn ti-btn-sm ti-btn-soft-danger waves-effect waves-light"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap overflow-auto">
                                    <div className="mt-2">
                                        Showing <b>1</b> to <b>5</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                    </div>
                                    <div className="ms-auto my-2">
                                        <nav aria-label="" className="">
                                            <ul className="ti-pagination mb-0 !p-0 justify-end float-end">
                                                <li className="page-item disabled"> <a className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">1</a></li>
                                                <li className="page-item " aria-current="page"> <a className="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">2</a> </li>
                                                <li className="page-item"><a className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">3</a></li>
                                                <li className="page-item"><a className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">4</a></li>
                                                <li className="page-item"><a className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">5</a></li>
                                                <li className="page-item"> <a className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none !border-s-0" href="#!">Next</a> </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default ProductsList;