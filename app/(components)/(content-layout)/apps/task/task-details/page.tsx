"use client"
import SpkprojectTimeline from "@/shared/@spk-reusable-components/apps/spk-projecttimeline";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { timelineData } from "@/shared/data/apps/task/taskdetailsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface TaskDetailsProps {}

const TaskDetails : FC<TaskDetailsProps>  = () => {
return (
<Fragment>
                {/* <!-- Page Header --> */}
                    <Seo title="Tasks-taskdetails" />

                    <Pageheader title="Apps" subtitle="Task" currentpage="Task Details" activepage="Task Details" />

                {/* <!-- Page Header Close --> */}
                {/* <!-- Start::row-1 --> */}
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-3 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header">
                                    <div className="box-title">
                                        Task Information
                                    </div>
                                </div>
                                <div className="box-body p-0">
                                    <div className="p-4 flex gap-4 border-b bg-light border-defaultborder dark:border-defaultborder/10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="assign" id="assign1" defaultChecked/>
                                            <label className="form-check-label" htmlFor="assign1">
                                                Assign Lead
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="assign" id="assign2"/>
                                            <label className="form-check-label" htmlFor="assign2">
                                                Assign Member
                                            </label>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <Spktables tableClass="table text-nowrap">
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Task ID :</span></td>
                                                    <td>SPK - 456</td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Task Tags :</span></td>
                                                    <td>
                                                        <SpkBadge variant="info/10" customClass="text-info">Marketing</SpkBadge>
                                                        <SpkBadge variant="" customClass="ti-btn-soft-primary3 ms-1">Campaign</SpkBadge>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Project Name :</span></td>
                                                    <td>
                                                        New Product Launch Strategy
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <span className="font-medium">Assigned By :</span>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2 leading-none">
                                                                <span className="avatar avatar-xs avatar-rounded">
                                                                    <img src="../../../assets/images/faces/11.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <span className="block text-[14px] font-medium">Emily Watson</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td>
                                                        <span className="font-medium">Progress :</span>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="progress progress-sm progress-animate flex-auto me-2" role="progressbar" aria-valuenow={45} 
                                                               aria-valuemin={0} aria-valuemax={100}>
                                                                <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: "45%" }}></div>
                                                            </div>
                                                            <div className="text-textmuted dark:text-textmuted/50 text-[11px]">45%</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Project Status :</span></td>
                                                    <td>
                                                        <span className="font-medium text-secondary">Inprogress</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Project Priority :</span></td>
                                                    <td>
                                                        <SpkBadge variant="danger/10" customClass="text-danger"><i className="ri-circle-fill text-[8px] me-1"></i> High</SpkBadge>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Start Date :</span></td>
                                                    <td>
                                                        13, June 2024
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">End Date :</span></td>
                                                    <td>
                                                        31, Dec 2024
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Assigned To :</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked -space-x-3">
                                                            <SpkOverlay>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/2.jpg" alt="img"/>
                                                                    <span
                                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                                                        role="tooltip">
                                                                        John
                                                                    </span>
                                                                </span>
                                                            </SpkOverlay>
                                                            <SpkOverlay>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/8.jpg" alt="img"/>
                                                                    <span
                                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                                                        role="tooltip">
                                                                        Emily
                                                                    </span>
                                                                </span>
                                                            </SpkOverlay>
                                                            <SpkOverlay>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/5.jpg" alt="img"/>
                                                                    <span
                                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                                                        role="tooltip">
                                                                        Liam
                                                                    </span>
                                                                </span>
                                                            </SpkOverlay>
                                                            <SpkOverlay>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/10.jpg" alt="img"/>
                                                                    <span
                                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                                                        role="tooltip">
                                                                        Sophia
                                                                    </span>
                                                                </span>
                                                            </SpkOverlay>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                    <td><span className="font-medium">Last Updated Date :</span></td>
                                                    <td>
                                                        <span className="text-primarytint1color font-medium">18, June 2024 </span>
                                                        <span className="text-primarytint1color font-medium"> 10:30 </span>
                                                    </td>
                                                </tr>
                                        </Spktables>
                                    </div>
                                </div>                            
                            </div>
                            <div className="box overflow-hidden">
                                <div className="box-header">
                                    <div className="box-title">
                                        Attachments list
                                    </div>
                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary ms-auto ti-btn-sm mt-1"> View More</Link>
                                </div>
                                <div className="box-body p-0">
                                    <ul className="ti-list-group list-group-flush !border-t-0">
                                        <li className="ti-list-group-item">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src="../../../assets/images/media/file-manager/1.png" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <Link scroll={false} href="#!"><span className="block font-medium">Full Project</span></Link>
                                                    <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">0.45MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton buttontype="button" Label="button" Size="sm" variant="soft-info" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                    <SpkButton buttontype="button" Label="button" Size="sm" variant="soft-danger" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ti-list-group-item">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src="../../../assets/images/media/file-manager/3.png" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <Link scroll={false} href="#!"><span className="block font-medium">assets.zip</span></Link>
                                                    <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">0.99MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Label="button" buttontype="button" variant="soft-info"  Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                    <SpkButton Label="button" buttontype="button" variant="soft-danger"  Size="sm" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ti-list-group-item">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src="../../../assets/images/media/file-manager/1.png" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <Link scroll={false} href="#!"><span className="block font-medium">image-1.png</span></Link>
                                                    <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">245KB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Label="button" buttontype="button" variant="soft-info"  Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                    <SpkButton Label="button" buttontype="button" variant="soft-danger"  Size="sm" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ti-list-group-item">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src="../../../assets/images/media/file-manager/3.png" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <Link scroll={false} href="#!"><span className="block font-medium">documentation.zip</span></Link>
                                                    <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">2MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton buttontype="button" Label="button" Size="sm" variant="soft-info" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                    <SpkButton buttontype="button" Label="button" Size="sm" variant="soft-danger" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="ti-list-group-item">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src="../../../assets/images/media/file-manager/3.png" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <Link scroll={false} href="#!"><span className="block font-medium">landing.zip</span></Link>
                                                    <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">3.46MB</span>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Label="button" buttontype="button" variant="soft-info"  Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                    <SpkButton Label="button" buttontype="button" variant="soft-danger"  Size="sm" customClass="ti-btn ti-btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-9 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between items-center">
                                    <div className="box-title">Task Details</div>
                                    <div className="btn-list">
                                        <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white ti-btn-sm btn-wave me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</SpkButton>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex gap-2 mb-4 items-center flex-wrap">
                                        <div className="text-[15px] font-medium">Task Title :</div>
                                        <h5 className="font-medium mb-0">
                                            Develop New Website Features <SpkBadge variant="" customClass="ti-btn-soft-primary1 text-[10px] font-medium"># created on 12 June, 2024</SpkBadge>
                                        </h5>
                                    </div>
                                    <div className="text-[15px] font-medium mb-2">Task Description :</div>
                                    <p className="text-textmuted dark:text-textmuted/50 mb-4">Enhance existing website features to improve user engagement and streamline user experience. Implement new functionalities to support business growth and adaptability.</p>
                                    <div className="grid grid-cols-12 sm:gap-x-6 mb-4">
                                        <div className="xl:col-span-6 col-span-12">
                                            <div className="text-[15px] font-medium mb-2">Key tasks :</div>
                                            <ul className="task-details-key-tasks mb-0 ps-8">
                                                <li>Review current website features and identify areas for improvement.</li>
                                                <li>Brainstorm and develop ideas for new website functionalities.</li>
                                                <li>Design wireframes and prototypes for new features.</li>
                                                <li>Implement front-end and back-end development for new functionalities.</li>
                                                <li>Perform comprehensive testing and debugging.</li>
                                                <li>Launch and monitor performance of new website features.</li>
                                            </ul>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-[15px] font-medium">Sub Tasks :</div>
                                                <Link scroll={false} href="#!" className="ti-btn bg-info/10 text-info btn-wave ti-btn-sm waves-effect waves-light">See More</Link>
                                            </div>
                                            <ul className="ti-list-group mb-0">
                                                <li className="ti-list-group-item">
                                                    <div className="flex items-center">
                                                        <div className="me-2"><i className="ri-link text-[15px] text-secondary leading-none p-1 bg-secondary/10 !rounded-full"></i></div>
                                                        <div className="font-medium">Research latest web development trends.</div>
                                                    </div>
                                                </li>
                                                <li className="ti-list-group-item">
                                                    <div className="flex items-center">
                                                        <div className="me-2"><i className="ri-link text-[15px] text-secondary leading-none p-1 bg-secondary/10 !rounded-full"></i></div>
                                                        <div className="font-medium">Create technical specifications document.</div>
                                                    </div>
                                                </li>
                                                <li className="ti-list-group-item">
                                                    <div className="flex items-center">
                                                        <div className="me-2"><i className="ri-link text-[15px] text-secondary leading-none p-1 bg-secondary/10 !rounded-full"></i></div>
                                                        <div className="font-medium">Optimize website for mobile responsiveness.</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-[15px] font-medium mb-2">Uploads :</div>
                                    <div className="flex gap-2 mb-0 flex-wrap">
                                        <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                            <img src="../../../assets/images/media/media-37.jpg" alt="File 1"/>
                                        </Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                            <img src="../../../assets/images/media/media-38.jpg" alt="File 2"/>
                                        </Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                            <img src="../../../assets/images/media/media-39.jpg" alt="File 3"/>
                                        </Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                            <img src="../../../assets/images/media/media-40.jpg" alt="File 4"/>
                                        </Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                            <img src="../../../assets/images/media/media-41.jpg" alt="File 5"/>
                                        </Link>
                                        <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl bg-primary text-white">
                                            +2
                                        </Link>
                                    </div>
                                </div>                            
                            </div>
                            <div className="box">
                                <div className="box-header justify-between">
                                    <ul className="nav nav-tabs tab-style-8 scaleX profile-settings-tab gap-2 flex mt-2" id="myTab4" role="tablist">
                                        <li className="nav-item flex-auto" role="presentation">
                                            <SpkButton customClass="nav-link ti-btn-soft-primary px-4 active rounded-md" Tab="#task-activity-pane">Task Activity</SpkButton>
                                        </li>
                                        <li className="nav-item flex-auto" role="presentation">
                                            <SpkButton customClass="nav-link ti-btn-soft-primary px-4 rounded-md" Tab="#task-comments-tab-pane">Comments</SpkButton>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box-body tab-content">
                                    <div className="tab-pane show active overflow-hidden p-0 border-0" id="task-activity-pane" role="tabpanel">
                                        <ul className="list-none profile-timeline mb-3">
                                            {timelineData.map((item, index) => (
                                                <SpkprojectTimeline
                                                    key={index}
                                                    avatar={item.avatar}
                                                    title={item.title}
                                                    description={item.description}
                                                    timestamp={item.timestamp}
                                                    media={item.media}
                                                    SpanContent="S"
                                                    sharedWith={item.sharedWith}
                                                    color={item.color}
                                                    Textafter={true}
                                                    avatartext={true}
                                                />
                                            ))}
                                           
                                        </ul>
                                        <div className="p-4 mt-2 bg-light rounded">
                                            <div className="sm:flex items-center leading-none">
                                                <div className="sm:me-4 mb-2 sm:mb-0">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto me-sm-2">
                                                    <div className="inline-flex input-group">
                                                        <input type="text" className="form-control shadow-none border !border-e-0" placeholder="Post Anything" aria-label="Recipient's username with two button addons"/>
                                                        <SpkButton buttontype="button" Label="button" variant="outline-light" customClass="ti-btn !m-0 btn-wave !border-e-0"><i className="bi bi-emoji-smile"></i></SpkButton>
                                                        <SpkButton buttontype="button" Label="button" variant="outline-light" customClass="ti-btn !m-0 btn-wave !border-e-0"><i className="bi bi-paperclip"></i></SpkButton>
                                                        <SpkButton buttontype="button" Label="button" variant="outline-light" customClass="ti-btn !m-0 btn-wave !border-e-0"><i className="bi bi-camera"></i></SpkButton>
                                                        <SpkButton customClass="ti-btn bg-primary !m-0 text-white btn-wave !border-e-0" buttontype="button">Post</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane overflow-hidden hidden p-0 border-0" id="task-comments-tab-pane" role="tabpanel">
                                        <ul className="ti-list-group">
                                            <li className="ti-list-group-item">
                                                <div className="flex items-start gap-4 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/1.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-auto w-50">
                                                        <span className="font-medium block mb-1">Mary Cateline</span>
                                                        <span className="block mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</span>
                                                        <div className="btn-list">
                                                            <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn btn-wave waves-effect waves-light">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                            <SpkButton variant="soft-primary1" Size="sm" customClass="ti-btn btn-wave waves-effect waves-light">View Details<i className="ri-eye-line ms-1"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i></SpkButton>
                                                        <SpkButton variant="soft-primary3" Size="sm" customClass="ti-btn ti-btn-icon btn-wave waves-effect waves-light"><i className="ri-thumb-down-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="flex items-start gap-4 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-auto w-50">
                                                        <span className="font-medium block mb-1">Monte vin</span>
                                                        <span className="block mb-3">Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</span>
                                                        <div className="btn-list">
                                                            <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn  btn-wave waves-effect waves-light">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                            <SpkButton variant="soft-primary1" Size="sm" customClass="ti-btn btn-wave waves-effect waves-light">View Details<i className="ri-eye-line ms-1"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn ti-btn-icon btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i></SpkButton>
                                                        <SpkButton variant="soft-primary3" Size="sm" customClass="ti-btn ti-btn-icon btn-wave waves-effect waves-light"><i className="ri-thumb-down-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default TaskDetails;