"use client"
import { Accessdata, Fileoptions, Filesdata, Fileseries, Filesloopdata, Folderdata } from "@/shared/data/pages/filemanagerdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Spkimagecapcards from "@/shared/@spk-reusable-components/uielements/cards/spkimagecapcards";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import Spkapexcharts from "@/shared/@spk-reusable-components/spk-packages/apexcharts-component";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
interface FileManagerProps {}

const FileManager : FC<FileManagerProps>  = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [files, setFiles] = useState<any>([]);

    const FooterContent = (
        <tr className="">
            <td colSpan={5}>
                <nav aria-label="Page navigation">
                    <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                    </nav>
                </nav>
            </td>
        </tr>
    );
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Pages-Filemanager" />

            <Pageheader title="Pages" currentpage="File Manager" activepage="File Manager" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div
                                        className="flex p-4 flex-wrap gap-2 items-center justify-between border-b border-defaultborder dark:border-defaultborder/10">
                                        <div className="flex-auto">
                                            <h6 className="font-medium mb-0">File Manager</h6>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-3 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                        <span className="avatar avatar-xl online">
                                            <img src="../../assets/images/faces/9.jpg" alt=""/>
                                        </span>
                                        <div className="main-profile-info">
                                            <h6 className="font-semibold mb-1">Daniel David </h6>
                                            <p className="text-textmuted dark:text-textmuted/50 text-[11px] mb-2">Web
                                                Designer</p>
                                            <p className="mb-0">danieldavid@mail.com </p>
                                        </div>
                                    </div>
                                    <div className="box-body !pt-0 !p-3">
                                        <ul className="list-none files-main-nav" id="files-main-nav">
                                            <li className="px-0 pt-0">
                                                <span className="text-xs text-textmuted dark:text-textmuted/50">My
                                                    Files</span>
                                            </li>
                                            {Filesloopdata.map((idx) => (
                                                <li className={idx.class1} key={idx.id}>
                                                    <Link scroll={false} href="#!">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <i className={`ri-${idx.icon} text-[1rem]`}></i>
                                                            </div>
                                                            <span className="flex-auto text-nowrap">
                                                                {idx.text1}
                                                            </span>
                                                            <span className={idx.class}>{idx.text2}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li className="px-0 pt-0">
                                                <span className="text-xs text-textmuted dark:text-textmuted/50">Most
                                                    Recent</span>
                                            </li>
                                            <li>
                                                <div className="flex items-center gap-2">
                                                    <div className="me-0">
                                                        <span className="avatar avatar-md bg-primary/10 !text-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 256 256">
                                                                <rect width="256" height="256" fill="none" />
                                                                <path
                                                                    d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z"
                                                                    opacity="0.2" />
                                                                <polyline points="112 175.67 144 160 144 216 112 199.18"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                                <rect x="40" y="160" width="72" height="56" rx="8"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                                <polygon points="152 32 152 88 208 88 152 32"
                                                                    opacity="0.2" />
                                                                <polyline points="152 32 152 88 208 88" fill="none"
                                                                    stroke="currentColor" strokeLinecap="round"
                                                                    strokeLinejoin="round" strokeWidth="16" />
                                                                <path
                                                                    d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a href="#!" data-hs-overlay="#offcanvasRight"
                                                            aria-controls="offcanvasRight">VID-14512223-AKP823.mp4</a>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <span
                                                            className="font-medium text-textmuted dark:text-textmuted/50">1.2KB</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center gap-2">
                                                    <div className="me-0">
                                                        <span
                                                            className="avatar avatar-md bg-primarytint1color/10 !text-primarytint1color">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 256 256">
                                                                <rect width="256" height="256" fill="none" />
                                                                <path
                                                                    d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z"
                                                                    opacity="0.2" />
                                                                <polyline points="112 175.67 144 160 144 216 112 199.18"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                                <rect x="40" y="160" width="72" height="56" rx="8"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                                <polygon points="152 32 152 88 208 88 152 32"
                                                                    opacity="0.2" />
                                                                <polyline points="152 32 152 88 208 88" fill="none"
                                                                    stroke="currentColor" strokeLinecap="round"
                                                                    strokeLinejoin="round" strokeWidth="16" />
                                                                <path
                                                                    d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a href="#!" data-hs-overlay="#offcanvasRight"
                                                            aria-controls="offcanvasRight">AUD-14512223-AKP823.mp3</a>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <span
                                                            className="font-medium text-textmuted dark:text-textmuted/50">25GB</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center gap-2">
                                                    <div className="me-0">
                                                        <span
                                                            className="avatar avatar-md bg-primarytint2color/10 !text-primarytint2color">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 256 256">
                                                                <rect width="256" height="256" fill="none" />
                                                                <path
                                                                    d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z"
                                                                    opacity="0.2" />
                                                                <polyline points="112 175.67 144 160 144 216 112 199.18"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                                <rect x="40" y="160" width="72" height="56" rx="8"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                                <polygon points="152 32 152 88 208 88 152 32"
                                                                    opacity="0.2" />
                                                                <polyline points="152 32 152 88 208 88" fill="none"
                                                                    stroke="currentColor" strokeLinecap="round"
                                                                    strokeLinejoin="round" strokeWidth="16" />
                                                                <path
                                                                    d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
                                                                    fill="none" stroke="currentColor"
                                                                    strokeLinecap="round" strokeLinejoin="round"
                                                                    strokeWidth="16" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a href="#!" data-hs-overlay="#offcanvasRight"
                                                            aria-controls="offcanvasRight">VID-14211110-AKP823.mp4</a>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <span
                                                            className="font-medium text-textmuted dark:text-textmuted/50">36GB</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="px-0 pt-3">
                                                <span className="text-xs text-textmuted dark:text-textmuted/50">Upload
                                                    File</span>
                                            </li>
                                            <li
                                                className="!p-4 border border-dashed border-defaultborder dark:border-defaultborder/10">
                                                <label className="form-label">Drop File here :</label>
                                                <FilePond className="multiple-filepond custom-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body p-0">
                                <div className="file-manager-folders">
                                    <div
                                        className="flex p-4 flex-wrap gap-2 items-center justify-between border-b border-defaultborder dark:border-defaultborder/10">
                                        <div className="flex-auto">
                                            <h6 className="font-medium mb-0">All Folders</h6>
                                        </div>
                                        <div className="flex gap-2 lg:nowrap flex-wrap justify-content-sm-end sm:w-[80%]">
                                            <div className="input-group sm:!w-[50%]">
                                                <input type="text" className="form-control !border-s"
                                                    placeholder="Search File" aria-describedby="button-addon01"/>
                                                <SpkButton variant="soft-primary" customClass="ti-btn !m-0" buttontype="button"
                                                    Id="button-addon01"><i className="ri-search-line"></i></SpkButton>
                                            </div>
                                            <SpkButton variant="primary"
                                                customClass="ti-btn !m-0 btn-w-md flex items-center justify-center btn-wave waves-light text-nowrap"
                                                Overlay="#create-folder">
                                                <i className="ri-add-circle-line align-middle"></i>Create Folder
                                            </SpkButton>
                                            <div id="create-folder"
                                                className="hs-overlay hidden size-full rounded-md fixed top-0 start-0 overflow-x-hidden overflow-y-auto pointer-events-none ti-modal">
                                                <div
                                                    className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                                                    <div className="ti-modal-content flex-grow">
                                                        <div className="ti-modal-header">
                                                            <h6 className="modal-title text-[1rem] font-semibold"
                                                                id="staticBackdropLabel1">Modal title
                                                            </h6>
                                                            <SpkButton buttontype="button"
                                                                customClass="hs-dropdown-toggle ti-modal-close-btn"
                                                                Overlay="#create-folder">
                                                                <span className="sr-only">Close</span>
                                                                <svg className="w-3.5 h-3.5" width="8" height="8"
                                                                    viewBox="0 0 8 8" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                                                        fill="currentColor" />
                                                                </svg>
                                                            </SpkButton>
                                                        </div>
                                                        <div className="ti-modal-body">
                                                            <label htmlFor="create-folder1" className="form-label">Folder
                                                                Name</label>
                                                            <input type="text" className="form-control" id="create-folder1"
                                                                placeholder="Folder Name"/>
                                                        </div>
                                                        <div className="ti-modal-footer">
                                                            <SpkButton buttontype="button" Size="sm" variant="light"  customClass="hs-dropdown-toggle ti-btn" Overlay="#create-folder">
                                                                <i className="ri-close-fill"></i>
                                                            </SpkButton>
                                                            <Link scroll={false} className="ti-btn ti-btn-success ti-btn-sm"
                                                                href="#!">
                                                                Create File
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <SpkButton variant="soft-primary1"
                                                customClass="ti-btn !m-0  btn-w-md flex items-center justify-center btn-wave waves-light"
                                                Overlay="#create-file">
                                                <i className="ri-add-circle-line align-middle"></i>Create File
                                            </SpkButton>
                                            <div id="create-file"
                                                className="hs-overlay hidden size-full rounded-md fixed top-0 start-0 overflow-x-hidden overflow-y-auto pointer-events-none ti-modal">
                                                <div
                                                    className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                                                    <div className="ti-modal-content flex-grow">
                                                        <div className="ti-modal-header">
                                                            <h6 className="modal-title text-[1rem] font-semibold"
                                                                id="staticBackdropLabel2">Modal title
                                                            </h6>
                                                            <SpkButton buttontype="button"
                                                                customClass="hs-dropdown-toggle ti-modal-close-btn"
                                                                Overlay="#create-file">
                                                                <span className="sr-only">Close</span>
                                                                <svg className="w-3.5 h-3.5" width="8" height="8"
                                                                    viewBox="0 0 8 8" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                                                        fill="currentColor" />
                                                                </svg>
                                                            </SpkButton>
                                                        </div>
                                                        <div className="ti-modal-body">
                                                            <label htmlFor="create-file1" className="form-label">File
                                                                Name</label>
                                                            <input type="text" className="form-control" id="create-file1"
                                                                placeholder="File Name"/>
                                                        </div>
                                                        <div className="ti-modal-footer">
                                                            <SpkButton buttontype="button" Size="sm" variant="light" customClass="hs-dropdown-toggle ti-btn" Overlay="#create-file">
                                                                <i className="ri-close-fill"></i>
                                                            </SpkButton>
                                                            <Link className="ti-btn ti-btn-success ti-btn-sm"
                                                                href="#!">
                                                                Create File
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 file-folders-container">
                                        <div className="flex mb-4 items-center justify-between">
                                            <p className="mb-0 font-medium text-[14px]">Quick Access</p>
                                            <a href="#!"
                                                className="text-xs text-textmuted dark:text-textmuted/50 font-medium"> View
                                                All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                                        </div>
                                        <div className="grid grid-cols-12 sm:gap-x-6 mb-3">
                                            {Accessdata.map((idx) => (
                                                <div  className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={idx.id}>
                                                    <Spkimagecapcards Customclass="border dark:border-white/10 border-defaultborder !shadow-none">
                                                            <div className="flex items-center gap-4 flex-wrap">
                                                                <div className={`main-card-icon  ${idx.color}`}>
                                                                    <div
                                                                        className={`avatar avatar-md bg-${idx.color}/10 border border-${idx.color}/10`}>
                                                                        <div
                                                                            className={`avatar avatar-sm !text-${idx.color}`}>
                                                                            <i className={`ti ti-${idx.icon} text-2xl`}></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-auto">
                                                                    <Link scroll={false} href="#!"
                                                                        className="block font-medium">{idx.title}</Link>
                                                                    <span className="text-xs text-textmuted dark:text-textmuted/50">{idx.percentage}</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="font-medium">{idx.files}</span>
                                                                    <span
                                                                        className="block text-xs text-textmuted dark:text-textmuted/50">{idx.storage}</span>
                                                                </div>
                                                            </div>
                                                    </Spkimagecapcards>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex mb-4 items-center justify-between">
                                            <p className="mb-0 font-medium text-[14px]">Folders</p>
                                            <Link scroll={false} href="#!"
                                                className="text-xs text-textmuted dark:text-textmuted/50 font-medium"> View
                                                All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                        </div>
                                        <div className="grid grid-cols-12 sm:gap-x-6 mb-2">
                                         {Folderdata.map((idx) => (
                                            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={idx.id}>
                                                <div className="box !shadow-none border border-defaultborder dark:border-defaultborder/10">
                                                    <div className="box-body">
                                                        <div
                                                            className="mb-6 folder-svg-container flex flex-wrap justify-between items-top">
                                                            <div className="avatar">
                                                                <img src="../../assets/images/media/file-manager/1.png"
                                                                    alt="" className="img-fluid"/>
                                                            </div>
                                                            <div>
                                                            <SpkDropdown Linktag={true} Icon={true} IconClass="ri-more-fill font-semibold text-textmuted dark:text-textmuted/50" >
                                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Delete</Link></li>
                                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Rename</Link></li>
                                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Hide Folder</Link></li>
                                                            </SpkDropdown>
                                                            </div>
                                                        </div>
                                                        <p className="text-[14px] font-medium mb-1 leading-none">
                                                            <Link scroll={false} href="#!">{idx.text1}</Link>
                                                        </p>
                                                        <div className="flex items-center justify-between flex-wrap">
                                                            <div>
                                                                <span className="text-textmuted dark:text-textmuted/50 text-xs">
                                                                    {idx.text2}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="text-defaulttextcolor font-medium">
                                                                    {idx.text3}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                          
                                        </div>
                                        <div className="flex mb-4 items-center justify-between">
                                            <p className="mb-0 font-medium text-[14px]">Recent Files</p>
                                            <a href="#!"
                                                className="text-xs text-textmuted dark:text-textmuted/50 font-medium"> View
                                                All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                                        </div>
                                        <div className="grid grid-cols-12 gap-x-6">
                                            <div className="xl:col-span-12 col-span-12">
                                                <div
                                                    className="table-responsive border border-defaultborder dark:border-defaultborder/10 border-b-0">
                                                    <Spktables tBodyClass="files-list" tableClass="ti-custom-table ti-custom-table-head ti-custom-table-hover" header={[{ title: 'File Name' }, { title: 'Category' }, { title: 'Size' }, { title: 'Date Modified' }, { title: 'Action' }]}
                                                      tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                        {Filesdata.map((file, index) => (
                                                            <tr key={index} className={file.mainClass}>
                                                                <th scope="row">
                                                                    <div className="flex items-center">
                                                                        <div className="me-0">
                                                                            <span className={`avatar avatar-md  !text-${file.iconClass} !svg-${file.iconClass}`}>
                                                                                {file.path}
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <Link scroll={false} href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                                                {file.name}
                                                                            </Link>
                                                                        </div>
                                                                    </div>

                                                                </th>
                                                                <td>{file.type}</td>
                                                                <td>{file.size}</td>
                                                                <td>{file.date}</td>
                                                                <td>
                                                                    <div className="hstack gap-2 text-[15px] custom-btn">
                                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary2">
                                                                            <i className="ri-eye-line"></i>
                                                                        </Link>
                                                                        <Link scroll={false} href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary3">
                                                                            <i className="ri-delete-bin-line"></i>
                                                                        </Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </Spktables>
                                                    <nav aria-label="Page navigation"
                                                        className="pagination-style-2 border-y px-4 py-3 border-t-0 flex justify-end border-defaultborder dark:border-defaultborder/10">
                                                        <ul className="ti-pagination mb-0 flex-wrap">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#!">
                                                                    Prev
                                                                </a>
                                                            </li>
                                                            <li className="page-item "><a className="page-link active"
                                                                    href="#!">1</a></li>
                                                            <li className="page-item"><a className="page-link"
                                                                    href="#!">2</a></li>
                                                            <li className="page-item">
                                                                <a className="page-link !text-primary"
                                                                    href="#!">
                                                                    next
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <span className="avatar avatar-md bg-secondary/10 !text-secondary">
                                            <i className="ri-hard-drive-2-fill text-[1rem]"></i>
                                        </span>
                                    </div>
                                    <div className="flex-auto">
                                        <div className=" mb-3"> All Folders
                                            <p className="mb-0"><span className="font-bold text-[14px]">68.12GB</span> Used</p>
                                            <p className="text-[11px] text-textmuted dark:text-textmuted/50 mb-0">21.35GB
                                                free space</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="file-manager-storage">
                                    <Spkapexcharts chartOptions={Fileoptions} chartSeries={Fileseries} type="donut" width={"100%"} height={230} />
                                </div>
                            </div>
                            <div className="box-footer p-0">
                                <div className="m-3 mb-0">
                                    <span className="text-xs text-textmuted dark:text-textmuted/50">Storage Details</span>
                                </div>
                                <ul className="ti-list-group list-group-flush !border-0">
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center gap-4">
                                            <div className="main-card-icon primary">
                                                <div className="avatar avatar-lg bg-primary/10 border border-primary/10">
                                                    <div className="avatar avatar-sm !text-primary">
                                                        <i className="ti ti-photo text-xl"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-auto">
                                                <span className="font-medium">Media</span>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs block">3,145
                                                    files</span>
                                            </div>
                                            <div>
                                                <span className="font-medium text-primary mb-0 text-[14px]">45GB</span>
                                            </div>
                                        </div>
                                        <div className="progress progress-md p-1 bg-primary/10 mt-3" role="progressbar"
                                            aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                                style={{ width: "90%" }}></div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center gap-4">
                                            <div className="main-card-icon primary1">
                                                <div
                                                    className="avatar avatar-lg bg-primarytint1color/10 border border-primarytint1color/10">
                                                    <div className="avatar avatar-sm !text-primarytint1color">
                                                        <i className="ti ti-download text-xl"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-auto">
                                                <span className="font-medium">Downloads</span>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs block">568
                                                    files</span>
                                            </div>
                                            <div>
                                                <span
                                                    className="font-medium text-primarytint1color mb-0 text-[14px]">66GB</span>
                                            </div>
                                        </div>
                                        <div className="progress progress-md p-1 bg-primarytint1color/10 mt-3"
                                            role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped bg-primarytint1color progress-bar-animated"
                                                style={{ width: "86%" }}></div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center gap-4">
                                            <div className="main-card-icon primary2">
                                                <div
                                                    className="avatar avatar-lg bg-primarytint2color/10 border border-primarytint2color/10">
                                                    <div className="avatar avatar-sm !text-primarytint2color">
                                                        <i className="ti ti-layout-grid text-xl"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-auto">
                                                <span className="font-medium">Apps</span>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs block">74
                                                    files</span>
                                            </div>
                                            <div>
                                                <span
                                                    className="font-medium text-primarytint2color mb-0 text-[14px]">55GB</span>
                                            </div>
                                        </div>
                                        <div className="progress progress-md p-1 bg-primarytint2color/10 mt-3"
                                            role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped bg-primarytint2color progress-bar-animated"
                                                style={{ width: "75%" }}></div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center gap-4">
                                            <div className="main-card-icon primary3">
                                                <div
                                                    className="avatar avatar-lg bg-primarytint3color/10 border border-primarytint3color/10">
                                                    <div className="avatar avatar-sm !text-primarytint3color">
                                                        <i className="ti ti-file-description text-xl"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-auto">
                                                <span className="font-medium">Documents</span>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs block">1,441
                                                    files</span>
                                            </div>
                                            <div>
                                                <span className="font-medium text-primary3 mb-0 text-[14px]">34GB </span>
                                            </div>
                                        </div>
                                        <div className="progress progress-md p-1 bg-primarytint3color/10 mt-3"
                                            role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                            <div className="progress-bar progress-bar-striped bg-primarytint3color progress-bar-animated"
                                                style={{ width: "80%" }}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <div className="filemanager-upgrade-storage w-full text-center">
                                    <span className="block mb-3 pb-1 bg-primarytint1color/10 rounded-2"> <img
                                            src="../../assets/images/media/file-manager/2.png" alt="" className="!inline-flex"/>
                                    </span>
                                    <span className="text-[1rem] font-semibold text-defaulttextcolor">Get more storage with
                                        Pro.</span>
                                    <span className="block text-textmuted dark:text-textmuted/50 mt-2">Upgrade now for
                                        increased storage space and enhanced functionality.</span>
                                    <div className="mt-4 grid"> 
                                        <SpkButton variant="primary" Size="lg" customClass="ti-btn btn-wave waves-effect waves-light">Upgrade Now</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}
</Fragment>
);
};

export default FileManager;