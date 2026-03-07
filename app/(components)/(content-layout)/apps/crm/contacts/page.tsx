"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Data, Data1, Loopingdata } from "@/shared/data/apps/crm/contactsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useRef, useState } from "react";

interface ContactsProps {}

const Contacts : FC<ContactsProps>  = () => {
    const fileInputRef: any = useRef(null);
    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");

    const [startDate, setStartDate] = useState(new Date());

    //Delete function
    const [manageInvoiceData, setManageInvoiceData] = useState([...Loopingdata]);
    const handleDelete = (idToRemove: string) => {
        const updatedInvoiceData = manageInvoiceData.filter((item) => item.id !== idToRemove);
        setManageInvoiceData(updatedInvoiceData);
    };
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e: any) => {

        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    //Datepicker function
    const handleDateChange = (date: any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    const [areAllChecked, setAreAllChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});
    
    // Handle "Select All" checkbox
    const handleHeaderCheckboxChange = (e: any) => {
        const isChecked = e.target.checked;
        setAreAllChecked(isChecked);
    
        // Update all checkboxes based on "Select All"
        const updatedCheckboxes: { [key: string]: boolean } = {};
        manageInvoiceData.forEach((item) => {
            updatedCheckboxes[item.id] = isChecked;
        });
        setCheckboxes(updatedCheckboxes);
    };
    
    // Handle individual row checkbox
    const handleRowCheckboxChange = (e: any, id: string) => {
        const isChecked = e.target.checked;
    
        // Update the specific checkbox
        setCheckboxes((prev) => ({
            ...prev,
            [id]: isChecked,
        }));
    
        // Update "Select All" state
        const allChecked = manageInvoiceData.every((item) => checkboxes[item.id] || (item.id === id && isChecked));
        setAreAllChecked(allChecked);
    };
return (
<Fragment>
        {/* <!-- Start::page-header --> */}
        <Seo title="Crm-Contacts" />

        <Pageheader title="Apps" subtitle="CRM" currentpage="Contacts" activepage="Contacts" />

        {/* <!-- End::page-header --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header flex items-center justify-between flex-wrap gap-4">
                                <div className="box-title">
                                    Contacts<SpkBadge variant="primary" customClass="rounded ms-2 text-xs align-middle">28</SpkBadge>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <SpkButton customClass="ti-btn ti-btn-primary ti-btn-sm" Overlay="#create-contact"><i
                                            className="ri-add-line me-1 font-medium align-middle"></i>Create
                                        Contact</SpkButton>
                                    <SpkButton customClass="ti-btn ti-btn-soft-success ti-btn-sm">Export As CSV</SpkButton>
                                        <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave" Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Date Added</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables showCheckbox={true} checked={areAllChecked}
                                    onChange={handleHeaderCheckboxChange} tableClass="ti-custom-table ti-custom-table-head ti-custom-table-hover"  tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                    header={[{ title: 'Contact Name' }, { title: 'Email' }, { title: 'Company' }, { title: 'Lead Score' }, { title: 'Priority' }, { title: 'Phone' }, { title: 'Tags' }, { title: 'Lead Source' }, { title: 'Actions' }]}>
                                    {manageInvoiceData.map((idx , index) => (
                                        <tr className="crm-contact contacts-list border-b !border-defaultborder dark:!border-defaultborder/10" key={index}>
                                            <td>
                                                <input className="form-check-input" type="checkbox" id={`checkbox-${idx.id}`} value="" onChange={(e) => handleRowCheckboxChange(e, idx.id)}
                                                  defaultChecked={checkboxes[idx.id] || false}   aria-label="..."/>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.src1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link scroll={false} href="#!" data-bs-toggle="offcanvas" data-hs-overlay="#offcanvasExample"><span
                                                                    className="block font-medium">{idx.name}</span></Link>
                                                            <SpkOverlay>
                                                                <span
                                                                    className="block text-textmuted dark:text-textmuted/50 text-[11px]">
                                                                    <i
                                                                        className="ri-account-circle-line me-1 text-[13px] align-middle"></i>
                                                                   {idx.time}
                                                                    <span
                                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-primary !border-primary !text-xs !font-medium !text-white shadow-sm "
                                                                        role="tooltip">
                                                                        Last Contacted
                                                                    </span>
                                                                </span>
                                                            </SpkOverlay>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="block mb-1"><i className="ri-mail-line me-2 align-middle text-[14px] text-textmuted dark:text-textmuted/50"></i>{idx.mail}</span>
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
                                                {idx.score}
                                            </td>
                                            <td> <SpkBadge variant={`${idx.color}/10`} customClass={`text-${idx.color}`}>{idx.pry}</SpkBadge> </td>
                                            <td>
                                                <div>
                                                    <span className="block"><i className="ri-phone-line me-2 align-middle text-[14px] text-textmuted dark:text-textmuted/50"></i>{idx.cell}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary/10" customClass="text-primary">{idx.text2}</SpkBadge>

                                            </td>
                                            <td>
                                                {idx.text3}
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link href="#!" scroll={false} data-bs-toggle="offcanvas" data-hs-overlay="#offcanvasExample" className="ti-btn ti-btn-sm ti-btn-soft-primary ti-btn-icon">
                                                             <i className="ri-eye-line"></i></Link>
                                                    <SpkButton  variant="soft-info" Size="sm" customClass="ti-btn ti-btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton  variant="soft-primary2" Size="sm" customClass="ti-btn ti-btn-icon contact-delete" onclickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer border-t-0">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        Showing 8 Entries <i className="bi bi-arrow-right ms-2 font-medium"></i>
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

                {/* <!-- Start:: Contact Details Offcanvas --> */}
                <div className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabIndex={-1} id="offcanvasExample"
                    aria-labelledby="offcanvasExample">
                    <div className="ti-offcanvas-body !p-0">
                        <SpkButton buttontype="button"
                        customClass="ti-btn  btn-wave flex-shrink-0 p-0 m-4 float-end transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white text-textmuted dark:text-textmuted/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                        Overlay="#offcanvasExample"> 
                        <span className="sr-only">Close modal</span>
                        <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                fill="currentColor"></path>
                        </svg>
                    </SpkButton>
                        <div
                            className="sm:flex items-top p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10 main-profile-cover">
                            <span className="avatar avatar-xxl avatar-rounded me-3">
                                <img src="../../../assets/images/faces/11.jpg" alt=""/>
                            </span>
                            <div className="flex-auto main-profile-info">
                                <div className="flex items-center justify-between">
                                    <h6 className="font-medium mb-1">Ethan Thompson 
                                        <SpkBadge variant="success/10" customClass="text-success text-[10px] ms-1 inline-block"><i
                                                className="ri-circle-fill text-[8px] text-success me-1 "></i> New
                                            Lead</SpkBadge>
                                    </h6>
                                </div>
                                <p className="mb-2 text-textmuted dark:text-textmuted/50 text-xs">Chief Financial Officer
                                    (CFO)</p>
                                <div className="flex gap-2 text-[15px] mt-1">
                                    <Link scroll={false} href="#!"
                                        className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary1"><i
                                            className="ri-phone-line"></i></Link>
                                    <Link scroll={false} href="#!"
                                        className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary2"><i
                                            className="ri-mail-line"></i></Link>
                                    <Link scroll={false} href="#!"
                                        className="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-primary3"><i
                                            className="ri-message-line"></i></Link>
                                        <SpkDropdown Custommenuclass="dropdown-menu-end" Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm !rounded-full ti-btn-soft-secondary"
                                          Icon={true} IconClass="ri-more-fill">
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Size </Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Deals</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Status</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex mt-3 gap-4 p-1 py-0 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                            <div className="p-2 text-center flex-auto">
                                <i
                                    className="ri-shake-hands-line p-2 text-xl !rounded-full leading-none text-white shadow-sm bg-primary"></i>
                                <p className="font-semibold text-xl text-shadow mb-0 mt-2">253</p>
                                <p className="mb-0 text-textmuted dark:text-textmuted/50">Deals</p>
                            </div>
                            <div className="p-2 text-center flex-auto">
                                <i
                                    className="ri-money-dollar-circle-line p-2 text-xl !rounded-full leading-none text-white shadow-sm bg-primary"></i>
                                <p className="font-semibold text-xl text-shadow mb-0 mt-2">$12k</p>
                                <p className="mb-0 text-textmuted dark:text-textmuted/50">Contributions</p>
                            </div>
                            <div className="p-2 text-center flex-auto">
                                <i
                                    className="ri-thumb-up-line p-2 text-xl !rounded-full leading-none text-white shadow-sm bg-primary"></i>
                                <p className="font-semibold text-xl text-shadow mb-0 mt-2">$17k</p>
                                <p className="mb-0 text-textmuted dark:text-textmuted/50">Comitted</p>
                            </div>
                        </div>
                        <div className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                            <div className="mb-0">
                                <p className="text-[15px] mb-2 font-medium">Professional Bio :</p>
                                <p className="text-textmuted dark:text-textmuted/50 mb-0">
                                    I am <b className="text-defaulttextcolor">Ethan Thompson,</b> hereby declaring that I am
                                    the founder and managing director of the prestigious company named Thompson
                                    Enterprises, and I serve as the Chief Financial Officer (CFO) of the company.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                            <p className="text-[14px] mb-2 font-medium">Contact Information :</p>
                            <div className="">
                                <div className="flex items-center mb-2">
                                    <div className="me-2">
                                        <span
                                            className="avatar avatar-sm avatar-rounded bg-primarytint1color/10 !text-primarytint1color">
                                            <i className="ri-mail-line align-middle text-[14px]"></i>
                                        </span>
                                    </div>
                                    <div>
                                        ethanthompson@example.com
                                        <SpkOverlay>
                                            <span
                                                className="text-textmuted dark:text-textmuted/50 leading-none !rounded-full ms-1">
                                                <i className="ri-file-copy-fill"></i>
                                                <span
                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                    role="tooltip">
                                                    Copy
                                                </span>
                                            </span>
                                        </SpkOverlay>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="me-2">
                                        <span
                                            className="avatar avatar-sm avatar-rounded bg-primarytint2color/10 !text-primarytint2color">
                                            <i className="ri-phone-line align-middle text-[14px]"></i>
                                        </span>
                                    </div>
                                    <div>
                                        +(333) 555-1234
                                    </div>
                                </div>
                                <div className="flex items-center mb-0">
                                    <div className="me-2">
                                        <span
                                            className="avatar avatar-sm avatar-rounded bg-primarytint3color/10 !text-primarytint3color">
                                            <i className="ri-map-pin-line align-middle text-[14px]"></i>
                                        </span>
                                    </div>
                                    <div>
                                        1234 Elm Street, Apt 101, Springfield, IL, 62701, USA
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center flex-wrap gap-4">
                            <p className="text-[14px] mb-0 font-medium">Priority:</p>
                            <SpkBadge variant="success/10" customClass="text-success"><i
                                    className="ri-circle-fill leading-none align-middle text-[0.5625rem] me-1"></i> Low
                                Priority</SpkBadge>
                        </div>
                        <div
                            className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center flex-wrap gap-4">
                            <p className="text-[14px] mb-0 font-medium">Created Date:</p>
                            <div>25-May-2024</div>
                        </div>
                        <div
                            className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center flex-wrap gap-4">
                            <p className="text-[14px] mb-0 font-medium">Lead Source:</p>
                            <div><i
                                    className="ri-instagram-line bg-danger/10 !text-danger p-1 leading-none align-middle text-[15px] me-1 rounded-sm"></i>
                                Instagram</div>
                        </div>
                        <div
                            className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center flex-wrap gap-4">
                            <p className="text-[14px] mb-0 font-medium">Social Networks :</p>
                            <div className="btn-list mb-0">
                                <SpkButton variant="soft-primary"
                                    customClass="ti-btn ti-btn-sm ti-btn-icon  btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-facebook-line font-medium"></i>
                                </SpkButton>
                                <SpkButton variant="soft-secondary"
                                    customClass="ti-btn ti-btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-twitter-x-line font-medium"></i>
                                </SpkButton>
                                <SpkButton variant="soft-primary2"
                                    customClass="ti-btn ti-btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-instagram-line font-medium"></i>
                                </SpkButton>
                                <SpkButton variant="soft-success"
                                    customClass="ti-btn ti-btn-sm ti-btn-icon  btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-github-line font-medium"></i>
                                </SpkButton>
                                <SpkButton variant="soft-danger"
                                    customClass="ti-btn ti-btn-sm ti-btn-icon btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-youtube-line font-medium"></i>
                                </SpkButton>
                            </div>
                        </div>
                        <div
                            className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center flex-wrap gap-4">
                            <p className="text-[14px] mb-0 me-4 font-medium">Tags :</p>
                            <div>
                                <SpkBadge variant="primary/10" customClass="text-primary me-2">New Lead</SpkBadge>
                                <SpkBadge variant="primary/10" customClass="text-primary">Others</SpkBadge>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-[14px] mb-2 font-medium">Relationship Manager :
                                <Link scroll={false} className="bg-primarytint1color/10 !text-primarytint1color text-xs p-1 pe-2 rounded mb-0 float-end"
                                    href="#!"><i className="ri-add-line me-1 align-middle"></i>Add
                                    Manager</Link>
                            </p>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src="../../../assets/images/faces/2.jpg" alt="img"/>
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src="../../../assets/images/faces/8.jpg" alt="img"/>
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src="../../../assets/images/faces/2.jpg" alt="img"/>
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src="../../../assets/images/faces/10.jpg" alt="img"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: Contact Details Offcanvas --> */}

                {/* <!-- Start:: Create Contact --> */}
                <div id="create-contact" className="hs-overlay hidden ti-modal">
                    <div
                        className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center justify-center">
                        <div className="max-h-full overflow-hidden ti-modal-content">
                            <div className="ti-modal-header">
                                <h6 className="modal-title text-[1rem] font-semiboldmodal-title" id="staticBackdropLabel3">
                                    Create Contact
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
                                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="mb-0 text-center">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src={selectedImage || ''}  alt="" id="profile-img"/>
                                                <SpkBadge variant="primary" onclickfun={openFileInput}
                                                    customClass="rounded-full  avatar-badge !border-primary p-1">
                                                    <input type="file" name="photo" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}
                                                        className="absolute w-full h-full opacity-0" id="profile-change"/>
                                                    <i className="fe fe-camera text-[0.75rem]"></i>
                                                </SpkBadge>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="deal-title" className="form-label">Deal Title</label>
                                        <input type="text" className="form-control" id="deal-title"
                                            placeholder="Deal Title"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="contact-lead-score" className="form-label">Lead Score</label>
                                        <input type="number" className="form-control" id="contact-lead-score"
                                            placeholder="Lead Score"/>
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
                                        <label className="form-label">Lead Source</label>
                                        <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                        />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Last Contacted</label>
                                        <div className="form-group">
                                            <div className="input-group custom-input-pickr">
                                                <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i
                                                        className="ri-calendar-line"></i> </div>
                                                    <SpkDatepickr className="form-control flatpickr-input"   selected={startDate} onChange={handleDateChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Tags</label>
                                        <SpkSelect multi name="colors" option={Data} mainClass="basic-multi-select"
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
                                <Link scroll={false} className="ti-btn ti-btn-primary" href="#!">
                                    Create Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: Create Contact --> */}
</Fragment>
);
};

export default Contacts;