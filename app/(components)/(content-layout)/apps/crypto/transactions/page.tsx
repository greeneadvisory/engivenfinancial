"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Historydata } from "@/shared/data/apps/crypto/transactiondata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface TransactionsProps {}

const Transactions : FC<TransactionsProps>  = () => {
    const [transaction, setTransaction] = useState(Historydata);
    const handleRemove = (id: number) => {
        const list = transaction.filter((idx) => idx.id !== id)
        setTransaction(list);
    }

return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Crypto-Transaction" />

        <Pageheader title="Apps" subtitle="Crypto" currentpage="Transactions" activepage="Transactions" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Transaction History
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-primary !m-0 ti-btn-sm btn-wave waves-effect waves-light"  
                                         Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Week</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Month</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">This Year</Link></li>
                                        </SpkDropdown>
                                    <SpkButton Size="sm" customClass="ti-btn bg-secondary text-white btn-wave !m-0">View All</SpkButton>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table ti-custom-table-head" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                header={[{ title: 'Cryptocurrency' }, { title: 'Date & Time' }, { title: 'Transaction ID' }, { title: 'Type' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Recipient Address' }, { title: 'Actions' }]}>
                                    {transaction.map((idx) => (
                                        <tr key={idx.id} className="border-b !border-defaultborder dark:!border-defaultborder/10">

                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                    <div className="font-medium">{idx.name}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>{idx.date}</span>
                                            </td>
                                            <td>
                                                <span>{idx.txn}</span>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className={`text-${idx.bg1} font-medium`}>{idx.type}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="">{idx.amount}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.bg}/10`} customClass={`text-${idx.bg}`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td className="custom-tablelist">
                                                <span className="text-textmuted dark:text-textmuted/50">{idx.recipoent}</span>
                                            </td>
                                            <td>
                                                <SpkOverlay customClass="me-2">
                                                    <SpkButton variant="soft-info" Size="sm" customClass="ti-btn !m-0 ti-btn-icon hs-tooltip-toggle me-1"><i className="ri-download-2-line"></i>
                                                        <span
                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                        role="tooltip">
                                                            Download
                                                    </span>
                                                    </SpkButton>
                                                </SpkOverlay>
                                                <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn !m-0 ti-btn-icon ms-1 transactions-delete" onclickfunc={() => handleRemove(idx.id)}>
                                                    <i className="ri-delete-bin-5-line"></i></SpkButton>  
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>  
                            <div className="box-footer sm:justify-end justify-center flex">
                                <nav aria-label="..." className="me-4">
                                    <ul className="ti-pagination">
                                        <li className="page-item disabled">
                                            <Link scroll={false} href="#!" className="page-link px-3 py-[0.375rem] !border-e-0">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0"
                                                href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page">
                                            <Link scroll={false} className="page-link active px-3 py-[0.375rem] !border-e-0"
                                            href="#!">2</Link>
                                            </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0"
                                                href="#!">3</Link></li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                        </li>
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

export default Transactions;