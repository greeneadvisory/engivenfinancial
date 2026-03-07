"use client"
import SpkprojectTimeline from "@/shared/@spk-reusable-components/apps/spk-projecttimeline";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { timelineData } from "@/shared/data/apps/projects/projectoverviewdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
interface ProjectOverviewProps {}

const ProjectOverview : FC<ProjectOverviewProps>  = () => {
    interface TaskType {
        id:string;
        task:string;
        status:string;
        date:string;
        color:string;
        check:string | any ;
      }
    const tasks:TaskType[] = [
        { id: "1", task: 'Implement responsive design', status: 'Not Started', date: '17-Jan-2024', color: "primarytint2color", check: true },
        { id: "2", task: 'Fix login authentication issue', status: 'Completed', date: '17-Jan-2024', color: "success", check: "" },
        { id: "3", task: 'Optimize database queries', status: 'Not Started', date: '18-Feb-2024', color: "primarytint2color", check: "" },
        { id: "4", task: 'Integrate third-party API', status: 'Pending', date: '19-Feb-2024', color: "warning", check: true },
        { id: "5", task: 'Create user documentation', status: 'Not Started', date: '21-Feb-2024', color: "primarytint2color", check: true },
        { id: "6", task: 'Deploy to staging environment', status: 'In Progress', date: '24-Feb-2024', color: "primarytint1color", check: "" },
        { id: "8", task: 'Conduct security audit', status: 'Not Started', date: '27-Feb-2024', color: "primarytint2color", check: true },
    ]

    const [sortList, setSortList] = useState(tasks);
    const [selectAll, setSelectAll] = useState(false);
    const tableRef = useRef(null);


    const handleSelectAll = (e:any) => {
        setSelectAll(e.target.checked);
        setSortList((prevList) =>
            prevList.map((item) => ({
                ...item,
                check: e.target.checked,
            }))
        );
    };

    const handleCheckboxToggle = (id:any) => {
        setSortList((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, check: !item.check } : item
            )
        );
    };

return (
<Fragment>
        {/* <!-- Page Header --> */}
                <Seo title="Projects-Overview" />

                <Pageheader title="Apps" subtitle="Projects" currentpage="Projects Overview" activepage="Projects Overview" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Project Details
                                </div> 
                                <div>
                                    <Link scroll={false} href="/apps/projects/create-project" className="ti-btn ti-btn-sm bg-primary text-white btn-wave"><i className="ri-add-line align-middle me-1 font-medium"></i>Create Project</Link>
                                    <Link scroll={false} href="#!" className="ti-btn ti-btn-sm bg-primarytint1color text-white btn-wave"><i className="ri-share-line align-middle font-medium me-1"></i>Share</Link>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center mb-4 gap-2 flex-wrap">
                                    <span className="avatar avatar-lg me-1 bg-gradient-to-br from-primary to-secondary"><i className="ri-stack-line text-2xl leading-none"></i></span>
                                    <div>
                                        <h6 className="font-medium mb-2 task-title">
                                             Customer Feedback Dashboard Development
                                        </h6>
                                        <SpkBadge variant="success/10" customClass="text-success"> In progress</SpkBadge>
                                        <span className="text-textmuted dark:text-textmuted/50 text-xs"><i className="ri-circle-fill text-success mx-2 text-[0.5625rem]"></i>Last Updated 1 Day Ago</span>
                                    </div>
                                    <div className="ms-auto align-self-start">
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-primary ti-dropdown-toggle hs-dropdown-toggle" Icon={true} IconClass="fe fe-more-vertical">
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-block"></i>View</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-block"></i>Edit</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-block"></i>Delete</Link></li>
                                            </SpkDropdown>
                                    </div>
                                </div>
                                <div className="text-[15px] font-medium mb-2">Project Description :</div>
                                <p className="text-textmuted dark:text-textmuted/50 mb-4">The Customer Feedback Dashboard Development project aims to create a comprehensive dashboard that aggregates and visualizes customer feedback data. This will enable our team to gain actionable insights and improve customer satisfaction.</p>
                                <div className="flex gap-5 mb-4 flex-wrap">
                                    <div className="flex items-center gap-2 me-3">
                                        <span className="avatar avatar-md avatar-rounded me-1 bg-primarytint1color/10 !text-primarytint1color"><i className="ri-calendar-event-line text-lg leading-none align-middle"></i></span>
                                        <div>
                                            <div className="font-medium mb-0 task-title">
                                                Start Date
                                            </div>
                                            <span className="text-xs text-textmuted dark:text-textmuted/50">28 August, 2024</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 me-3">
                                        <span className="avatar avatar-md avatar-rounded me-1 bg-primarytint2color/10 !text-primarytint2color"><i className="ri-time-line text-lg leading-none align-middle"></i></span>
                                        <div>
                                            <div className="font-medium mb-0 task-title">
                                                End Date
                                            </div>
                                            <span className="text-xs text-textmuted dark:text-textmuted/50">30 Oct, 2024</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="avatar avatar-md p-1 avatar-rounded me-1 bg-primary/10"><img src="../../../assets/images/faces/11.jpg" alt=""/></span>
                                        <div>
                                            <span className="block text-[14px] font-medium">Amith Catzem</span>
                                            <span className="text-xs text-textmuted dark:text-textmuted/50">Project Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="grid grid-cols-12 sm:gap-x-6">
                                        <div className="xl:col-span-6 col-span-12">
                                            <div className="text-[15px] font-medium mb-2">Key tasks :</div>
                                            <ul className="task-details-key-tasks mb-0 ps-8">
                                                <li>Design and implement a user-friendly dashboard interface.</li>
                                                <li>Integrate data sources and APIs to fetch customer feedback data.</li>
                                                <li>Develop interactive data visualizations for easy interpretation.</li>
                                                <li>Implement filters and sorting functionalities for data analysis.</li>
                                                <li>Create user authentication and access control features.</li>
                                                <li>Perform usability testing and iterate based on feedback.</li>
                                            </ul>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-[15px] font-medium">Sub Tasks :</div>
                                                <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-wave ti-btn-sm waves-effect waves-light">See More</Link>
                                            </div>
                                            <ul className="ti-list-group">
                                                <li className="ti-list-group-item">
                                                    <div className="flex items-center">
                                                        <div className="me-2"><i className="ri-link text-[15px] text-secondary leading-none p-1 bg-secondary/10 rounded-full"></i></div>
                                                        <div className="font-medium">Research latest web development trends.</div>
                                                    </div>
                                                </li>
                                                <li className="ti-list-group-item">
                                                    <div className="flex items-center">
                                                        <div className="me-2"><i className="ri-link text-[15px] text-secondary leading-none p-1 bg-secondary/10 rounded-full"></i></div>
                                                        <div className="font-medium">Create technical specifications document.</div>
                                                    </div>
                                                </li>
                                                <li className="ti-list-group-item">
                                                    <div className="flex items-center">
                                                        <div className="me-2"><i className="ri-link text-[15px] text-secondary leading-none p-1 bg-secondary/10 rounded-full"></i></div>
                                                        <div className="font-medium">Optimize website for mobile responsiveness.</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[15px] font-medium mb-2">Skills :</div>
                                <div className="flex gap-2 flex-wrap">
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">UI/UX Design</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">Data Integration</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">Data Visualization</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">Front-End Development</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">Authentication Systems</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">Usability Testing</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">Agile Methodology</SpkBadge>
                                    <SpkBadge variant="light" customClass="text-defaulttextcolor font-medium dark:text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10">API Development</SpkBadge>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                    <div className="flex gap-4 items-center">
                                        <span className="text-xs">Assigned To :</span>
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
                                            <SpkOverlay>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="img"/>
                                                    <span
                                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-primary !text-xs !font-medium !text-white shadow-sm "
                                                        role="tooltip">
                                                        Charlotte
                                                    </span>
                                                </span>
                                            </SpkOverlay>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <span className="text-xs">Status:</span>
                                        <span className="block"><SpkBadge variant="info">On going</SpkBadge></span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <span className="text-xs">Priority:</span>
                                        <span className="block text-[14px] font-medium"><SpkBadge variant="primarytint3color">Medium</SpkBadge></span>
                                    </div>
                                </div>
                            </div>                            
                        </div>  
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">To Do Tasks</div>
                                <div className="ti-btn ti-btn-sm ti-btn-soft-primary btn-wave"><i className="ri-add-line align-middle me-1 font-medium"></i>Add Task</div>
                            </div>
                            <div className="box-body p-0 relative" id="todo-content">
                                <div>
                                    <div className="table-responsive">
                                    <Spktables Bodytag={false} checked={selectAll} onChange={handleSelectAll}
                                            showCheckbox={true} tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                            tableClass="ti-custom-table text-nowrap"
                                            header={[
                                                { title: '', headerClassname:'todolist-handle-drag' },
                                                { title: 'Task Title' },
                                                { title: 'Status' },
                                                { title: 'End Date' },
                                                { title: 'Action' },
                                            ]}
                                        >
                                            <ReactSortable
                                                list={sortList}
                                                setList={setSortList}
                                                handle=".todo-handle"
                                                animation={150}
                                                tag="tbody"  
                                                id="todo-drag"
                                                
                                            >
                                                {sortList.map((item, index) => (
                                                    <tr className="todo-box border-b !border-defaultborder dark:!border-defaultborder/10" ref={tableRef} key={index} data-id={item.id}>
                                                        <td> <input
                                                            type="checkbox"
                                                            defaultChecked={item.check}
                                                            onChange={() => handleCheckboxToggle(item.id)}
                                                            className="form-check-input"
                                                        /></td>
                                                        <td>
                                                            <SpkButton
                                                                variant="light"
                                                                Size="sm"
                                                                customClass="ti-btn ti-btn-icon btn-wave  todo-handle"
                                                            >
                                                                : :
                                                            </SpkButton>
                                                        </td>
                                                        <td>
                                                            <span className="font-medium">{item.task}</span>
                                                        </td>
                                                        <td>
                                                            <span
                                                                className={`font-medium text-${item.color}`}
                                                            >
                                                                <i className="ri-circle-line font-semibold text-[0.4375rem] me-2 leading-none align-middle"></i>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td>{item.date}</td>
                                                        <td className="text-end">
                                                            <div className="flex gap-2">
                                                                <Link scroll={false} href="#!"
                                                                    className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-info btn-wave">
                                                                    <i className="ri-edit-line"></i>
                                                                </Link>
                                                                <Link scroll={false} href="#!"
                                                                    className="ti-btn ti-btn-icon ti-btn-sm ti-btn-soft-danger btn-wave">
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </ReactSortable>
                                        </Spktables>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 col-span-12">
                        <div className="box justify-between">
                            <div className="box-header">
                                <div className="box-title">Project Discussions</div>
                            </div>
                            <div className="box-body">
                                <ul className="list-none profile-timeline">
                                        {timelineData.map((item, index) => (
                                            <SpkprojectTimeline
                                                key={index}
                                                avatar={item.avatar}
                                                title={item.title}
                                                desClass={item.desClass}
                                                description={item.description}
                                                timestamp={item.timestamp}
                                                media={item.media || []}
                                                sharedWith={item.sharedWith || []}
                                                SpanContent={item.data}
                                                color={item.color}
                                            />
                                        ))}
                                </ul>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center leading-none">
                                    <div className="sm:me-2 mb-2 sm:mb-0 p-1 rounded-full bg-primary/10 inline-block">
                                        <img src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-sm avatar-rounded"/>
                                    </div>
                                    <div className="flex-auto">
                                        <div className="input-group flex-nowrap">
                                            <input type="text" className="form-control w-sm-50 border !border-s border-defaultborder dark:border-defaultborder/10 shadow-none" placeholder="Share your thoughts" aria-label="Recipient's username with two button addons"/>
                                            <SpkButton variant="soft-primary" customClass="ti-btn !m-0" className="ti-btn ti-btn-soft-primary !m-0 btn-wave waves-effect waves-light" type="button"><i className="bi bi-emoji-smile"></i></SpkButton>
                                            <SpkButton variant="soft-primary" customClass="ti-btn !m-0" className="ti-btn ti-btn-soft-primary !m-0 btn-wave waves-effect waves-light" type="button"><i className="bi bi-paperclip"></i></SpkButton>
                                            <SpkButton variant="soft-primary" customClass="ti-btn !m-0" className="ti-btn ti-btn-soft-primary !m-0 btn-wave waves-effect waves-light" type="button"><i className="bi bi-camera"></i></SpkButton>
                                            <SpkButton variant="primary" customClass="ti-btn !m-0" className="ti-btn bg-primary !m-0 text-white btn-wave waves-effect waves-light text-nowrap" type="button">Post</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box overflow-hidden">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Project Documents
                                </div>
                                    <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-full ti-btn-sm ti-dropdown-toggle hs-dropdown-toggle" 
                                        Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Download</Link>
                                        </li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Import</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!">Export</Link></li>
                                    </SpkDropdown>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group list-group-flush !rounded-none">
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center flex-wrap gap-2">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light leading-none">
                                                <img src="../../../assets/images/media/file-manager/1.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <Link scroll={false} href="#!"><span className="block font-medium">Project Proposal.pdf</span></Link>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">1.2MB</span>
                                            </div>
                                            <div className="ms-auto">
                                                <SpkButton variant="soft-info" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center flex-wrap gap-2">
                                            <span className="avatar avatar-rounded bg-light leading-none">
                                                <img src="../../../assets/images/media/file-manager/3.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <Link scroll={false} href="#!"><span className="block font-medium">Contracts.docx</span></Link>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">1.5MB</span>
                                            </div>
                                            <div className="ms-auto">
                                                <SpkButton variant="soft-info" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center flex-wrap gap-2">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light leading-none">
                                                <img src="../../../assets/images/media/file-manager/1.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <Link scroll={false} href="#!"><span className="block font-medium">Meeting Notes.txt</span></Link>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">256KB</span>
                                            </div>
                                            <div className="ms-auto">
                                                <SpkButton variant="soft-info" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="ti-list-group-item">
                                        <div className="flex items-center flex-wrap gap-2">
                                            <span className="avatar avatar-rounded bg-light leading-none">
                                                <img src="../../../assets/images/media/file-manager/3.png" alt=""/>
                                            </span>
                                            <div className="flex-auto">
                                                <Link scroll={false} href="#!"><span className="block font-medium">User Manual.pdf</span></Link>
                                                <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">1.8MB</span>
                                            </div>
                                            <div className="ms-auto">
                                                <SpkButton variant="soft-info" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn ti-btn-icon btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default ProjectOverview;