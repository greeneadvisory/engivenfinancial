"use client"
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Data, Data1, Data2, Leadsdata } from "@/shared/data/apps/crm/leadsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface LeadsProps {}

const Leads : FC<LeadsProps>  = () => {

    const [leadsloopData, setLeadsloopData] = useState(Leadsdata); // Initialize with your data

    const handleDelete = (id: number) => {
        const updatedData = leadsloopData.filter((idx) => idx.id !== id);
        setLeadsloopData(updatedData);

    };
    const [areAllChecked, setAreAllChecked] = useState(false);
    const handleHeaderCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setAreAllChecked(e.target.checked);

    };

    const [_checkboxes, setCheckboxes] = useState(false);
    const handleRowCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setCheckboxes(e.target.checked)
    };


    //image upload
    const [images1, setImages1] = useState<any>([]);
    const [selectedImage1, setSelectedImage1] = useState(null);

    const handleFileChange1 = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setSelectedImage1(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Crm-Leads" />

            <Pageheader title="Apps" subtitle="CRM" currentpage="Leads" activepage="Leads" />

            {/* <!-- End::page-header --> */}
             {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header flex items-center justify-between flex-wrap gap-4">
                                <div className="box-title">
                                    Leads<SpkBadge variant="primary" customClass="rounded ms-2 text-xs align-middle">28</SpkBadge>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <SpkButton variant="primary" Size="sm" customClass="ti-btn" Overlay="#create-contact"><i
                                            className="ri-add-line me-1 font-medium align-middle"></i>Create Lead</SpkButton>
                                    <SpkButton variant="soft-success" Size="sm" customClass="ti-btn">Export As CSV</SpkButton>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light" Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Date Added</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables showCheckbox={true} checked={areAllChecked} tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10" onChange={handleHeaderCheckboxChange} tableClass="ti-custom-table ti-custom-table-head" header={[{ title: 'Contact Name' }, { title: 'Company' }, { title: 'Email' }, { title: 'Lead Status' }, { title: 'Phone' }, { title: 'Lead Source' }, { title: 'Owner' }, { title: 'Last Contracted' }, { title: 'Actions' }]}>
                                    {leadsloopData.map((idx) => (
                                        <tr className="crm-contact leads-list border-b !border-defaultborder dark:!border-defaultborder/10" key={idx.id}>
                                            <td>
                                                <input type="checkbox" className="form-check-input" id={`checkbox-${idx.id}`} defaultChecked={areAllChecked} onChange={handleRowCheckboxChange} />
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium">{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                            <img src={idx.src2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>{idx.text1}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="block mb-1"><i className="ri-mail-line me-2 align-middle text-[14px] text-textmuted dark:text-textmuted/50 inline-block"></i>{idx.mail}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color2}/10 text-${idx.color2}`}>{idx.badge}</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="block"><i className="ri-phone-line me-2 align-middle text-[14px] text-textmuted dark:text-textmuted/50"></i>{idx.cell}</span>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.text2}
                                            </td>
                                            <td>
                                                 <div className="flex items-center gap-2">
                                                <div className="leading-none"> <span className="avatar avatar-rounded avatar-sm">
                                                    <img src={idx.src3} alt="Avatar" /> </span>
                                                </div>
                                                <div>
                                                    <span className="block font-medium">{idx.owner}</span> </div>
                                            </div>
                                            </td>
                                            <td>{idx.contracted}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-sm ti-btn-soft-primary ti-btn-icon !mb-0"><i
                                                                className="ri-eye-line"></i></Link>
                                                    <SpkButton Size="sm" variant="soft-info" customClass="ti-btn ti-btn-icon !mb-0"><i
                                                            className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn ti-btn-icon contact-delete !mb-0" 
                                                     onclickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </Spktables>
                                 
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        Showing 9 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="ti-pagination mb-0 flex-wrap">
                                                <li className="page-item disabled">
                                                    <Link scroll={false} className="page-link" href="#!">
                                                        Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item "><Link scroll={false} className="page-link active"
                                                        href="#!">1</Link></li>
                                                <li className="page-item"><Link scroll={false} className="page-link"
                                                        href="#!">2</Link></li>
                                                <li className="page-item">
                                                    <Link scroll={false} className="page-link !text-primary" href="#!">
                                                        next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: Create Contact --> */}
                <div id="create-contact" className="hs-overlay hidden ti-modal">
                    <div
                        className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                        <div className="max-h-full w-full overflow-hidden ti-modal-content">
                            <div className="ti-modal-header">
                                <h6 className="modal-title text-[1rem] font-semiboldmodal-title" id="staticBackdropLabel3">
                                    Create Lead
                                </h6>
                                <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn"
                                    Overlay="#create-contact">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                            fill="currentColor" />
                                    </svg>
                                </SpkButton>
                            </div>
                            <div className="ti-modal-body overflow-y-auto">
                                <div className="grid grid-cols-12 gap-x-6 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="mb-0 text-center">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src= {selectedImage1 || "../../../assets/images/faces/9.jpg"} alt="" id="profile-img"/>
                                                <SpkBadge variant="primary" customClass="rounded-full avatar-badge">
                                                    <input type="file" name="photo" onChange={(e: any) => {
                                                            handleFileChange1(e);
                                                            setImages1([...images1, e.target.files[0]]);
                                                        }}
                                                        className="absolute w-full h-full opacity-0" id="profile-change"/>
                                                    <i className="fe fe-camera"></i>
                                                </SpkBadge>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-name" className="form-label">Contact Name</label>
                                        <input type="text" className="form-control" id="contact-name"
                                            placeholder="Contact Name"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-mail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="contact-mail"
                                            placeholder="Enter Email"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-phone" className="form-label">Phone No</label>
                                        <input type="tel" className="form-control" id="contact-phone"
                                            placeholder="Enter Phone Number"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="company-name" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" id="company-name"
                                            placeholder="Company Name"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Lead Status</label>
                                        <SpkSelect name="colors" option={Data2} placeholder="Select Status"
                                            menuplacement='auto' classNameprefix="Select2"
                                        />
                                        </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Lead Source</label>
                                        <SpkSelect name="colors" option={Data1}
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Tags</label>
                                            <SpkSelect multi name="colors" option={Data}
                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select Tag"
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-modal-footer">
                                <SpkButton buttontype="button" variant="soft-secondary" customClass="hs-dropdown-toggle ti-btn"
                                    Overlay="#create-contact">
                                    Cancel
                                </SpkButton>
                                <a className="ti-btn ti-btn-primary" href="#!">
                                    Create Delta
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- End:: Create Contact --> */}
</Fragment>
);
};

export default Leads;