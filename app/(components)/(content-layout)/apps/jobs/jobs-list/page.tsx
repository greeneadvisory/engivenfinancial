"use client"
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Tabledata } from "@/shared/data/apps/jobs/joblistdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface JobsListProps {}

const JobsList : FC<JobsListProps>  = () => {
    const [allData, _setallData] = useState(Tabledata)
    const [data, setData] = useState(allData);
    const [selectAll, setSelectAll] = useState(false);
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setData((prevData) =>
            prevData.map((item) => ({
                ...item,
                checked: !selectAll,
            }))
        );
    };

    const handleRemove = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleCheckboxToggle = (id: number) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };
return (
<Fragment>
    {/* <!-- Page Header --> */}
    <Seo title="Jobs-Joblist" />

    <Pageheader title="Apps" subtitle="Jobs" currentpage="Jobs List" activepage="Jobs List" />

    {/* <!-- Page Header Close --> */}
    {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-12 col-span-12">
                <div className="box overflow-hidden">
                    <div className="box-header justify-between">
                        <div className="box-title">
                            All Jobs List
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Link scroll={false} href="/apps/jobs/job-post" className="ti-btn ti-btn-primary !m-0 btn-wave ti-btn-sm">
                                <i className="ri-add-line me-1 align-middle"></i>Post Job
                            </Link> 
                            <div>
                                <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                            </div>
                                <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-primary !m-0 ti-btn-sm btn-wave" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Posted Date</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Status</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Department</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Job Type</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!">Oldest</Link></li>
                                </SpkDropdown>
                        </div>
                    </div>
                    <div className="box-body p-0">
                        <div className="table-responsive">
                        <Spktables checked={selectAll} onChange={handleSelectAll} showCheckbox={true} tableClass="ti-custom-table ti-custom-table-hover text-nowrap" tableRowclass="order-b !border-defaultborder dark:!border-defaultborder/10"
                         Customcheckclass="ps-4" header={[{ title: 'Job Title' }, { title: 'Company' }, { title: 'Department' }, { title: 'Applications' }, { title: 'Posted Date' }, { title: 'Vacancies' }, { title: 'Job Type' }, { title: 'Status' }, { title: 'Expires on' }, { title: 'Action' }]}>
                                    {data.map((idx) => (
                                        <tr key={idx.id} className="joblist-list border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td className="ps-4">
                                                <input className="form-check-input" type="checkbox" defaultValue="" aria-label="..." id={`checkbox-${idx.id}`}
                                                    defaultChecked={idx.checked} onChange={() => handleCheckboxToggle(idx.id)} />
                                            </td>
                                            <td>
                                                <div className="flex">
                                                    <span className="avatar avatar-md border dark:border-defaultborder/10 p-1 bg-light">
                                                        <img src={idx.src1} alt="" />
                                                    </span>
                                                    <div className="ms-2">
                                                        <p className="font-medium mb-0 flex items-center"><Link href="/apps/jobs/job-details">{idx.class}</Link></p>
                                                        <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0">{idx.class1}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                        <img src={idx.src} alt="" />
                                                    </span>
                                                    <Link href="#!"  className="font-medium mb-0">{idx.text1}</Link>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.text3}
                                            </td>
                                            <td>{idx.number}</td>
                                            <td><SpkBadge variant={`${idx.color1}/10`} customClass={`text-${idx.color1}`}><i className="bi bi-clock me-1"></i>{idx.text2}</SpkBadge></td>
                                            <td>{idx.number1}</td>
                                            <td>{idx.data}</td>
                                            <td><SpkBadge variant={`${idx.color}/10`}  customClass={`!rounded-full text-${idx.color}`}>{idx.text}</SpkBadge></td>
                                            <td>
                                                {idx.data1}
                                            </td>
                                            <td>
                                                <Link  scroll={false} href="/apps/jobs/job-details" 
                                                className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary  btn-wave waves-effect waves-light">
                                                    <i className="ri-eye-line"></i>
                                                </Link>
                                                <Link  scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-info btn-wave waves-effect waves-light">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link  scroll={false} href="#!" onClick={() => handleRemove(idx.id)} className="joblist-btn ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary2 btn-wave waves-effect waves-light">
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
                                Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
                            </div>
                            <div className="ms-auto my-2">
                                <nav aria-label="" className="">
                                    <ul className="ti-pagination mb-0 !p-0 justify-end float-end">
                                        <li className="page-item disabled"> <Link href="#!" scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page"> <Link scroll={false} className="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">2</Link> </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">3</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">4</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0" href="#!">5</Link></li>
                                        <li className="page-item"> <Link scroll={false} className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none !border-s-1" href="#!">Next</Link> </li>
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

export default JobsList;