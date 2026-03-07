"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Listviewassigneddata, Prioritydata, Statusdata } from "@/shared/data/apps/task/listviewdata";
import { Task } from "@/shared/data/pages/todolistdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
interface TodolistProps {}

const Todolist : FC<TodolistProps>  = () => {
    const [sortList, setSortList] = useState(Task);

  
    //datepicker
    
    const [dates, setDates] = useState<{ [key: string]: Date | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
      setDates((prevDates) => ({
        ...prevDates,
        [key]: date,
      }));
    };

    const [selectAll, setSelectAll] = useState(false);
    const tableRef = useRef(null);

    const handleRemove = (id: number) => {
        setSortList((prevList) => prevList.filter((item) => item.id !== id));
    };

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
                <Seo title="Pages-Todolist" />

                <Pageheader title="Pages" currentpage="To Do List" activepage="To Do List" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-3 col-span-12">
                            <div className="box">
                                <div className="box-header gap-4 items-center pb-3 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                    <span className="avatar avatar-md bg-primary avatar-rounded"><i className="ri-file-list-3-line text-[1rem]"></i></span>
                                    <div className="box-title">
                                        To Do List
                                        <span className="text-textmuted dark:text-textmuted/50 block text-xs"> Create new list</span>
                                    </div>
                                    <SpkButton customClass="ti-btn ms-auto !rounded-full" variant="soft-primary1" Size="sm">
                                        <i className="ri-add-line"></i>Add New List
                                    </SpkButton>
                                </div>
                                <div className="box-body p-0">
                                    <div className="p-4 task-navigation border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                        <ul className="list-none task-main-nav mb-0">
                                            <li className="px-0 pt-0">
                                                <span className="text-[11px] text-textmuted dark:text-textmuted/50 opacity-70 font-medium">General</span>
                                            </li>
                                            <li className="active">
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-checkbox-multiple-line align-middle text-[14px]"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            All Tasks
                                                        </span>
                                                        <SpkBadge variant="info/10" customClass="text-info rounded-full">167</SpkBadge>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-checkbox-circle-line align-middle text-[14px] text-primary"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            Completed
                                                        </span>
                                                        <SpkBadge variant="primarytint1color/10" customClass="text-primarytint1color rounded-full">12</SpkBadge>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-calendar-line align-middle text-[14px] text-primary"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            Today
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-star-line text-primary align-middle text-[14px]"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            Starred
                                                        </span>
                                                        <SpkBadge variant="primarytint3color/10" customClass="text-primarytint3color rounded-full">04</SpkBadge>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-user-line text-primary align-middle text-[14px]"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            Personal
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-briefcase-line text-primary align-middle text-[14px]"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            Work
                                                        </span>
                                                        <SpkBadge variant="primarytint1color/10" customClass="text-primarytint1color rounded-full">03</SpkBadge>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-center">
                                                        <span className="me-2 leading-none">
                                                            <i className="ri-delete-bin-5-line text-primary align-middle text-[14px]"></i>
                                                        </span>
                                                        <span className="flex-auto text-nowrap">
                                                            Trash
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="list-none task-main-nav mb-0">
                                            <li className="px-0 pt-2 flex justify-between gap-2 items-center">
                                                <span className="text-[11px] text-textmuted dark:text-textmuted/50 opacity-70 font-medium">Work Space</span>
                                            </li>
                                            <li>
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <div><input className="form-check-input" type="checkbox" value="" aria-label="..."/></div>
                                                    <div>
                                                        <Link scroll={false} href="#!">
                                                            <span className="font-medium"> Project testing ...</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <div><input className="form-check-input" type="checkbox" value="" aria-label="..."/></div>
                                                    <div>
                                                        <Link scroll={false} href="#!">
                                                            <span className="font-medium">Bug Fixes and Issue Tracking..</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <div><input className="form-check-input" type="checkbox" value="" aria-label="..."/></div>
                                                    <div>
                                                        <Link scroll={false} href="#!">
                                                            <span className="font-medium">New Feature Development...</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center flex-wrap gap-2">
                                                    <div><input className="form-check-input" type="checkbox" value="" aria-label="..."/></div>
                                                    <div>
                                                        <Link scroll={false} href="#!">
                                                            <span className="font-medium">Admin Template review...</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-between m-4 p-4 bg-primary/10 rounded-md border border-defaultborder dark:border-defaultborder/10 overflow-hidden todo-list-card">
                                        <div>
                                            <div className="text-[15px] font-medium !text-primary">Today Completed</div>
                                            <div className="mb-4 text-[15px] font-medium !text-primary">Tasks</div>
                                            <h4 className="mb-0">3/28 Tasks</h4>
                                        </div>
                                        <div className="">
                                            <img src="../../assets/images/media/media-66.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-9 col-span-12">
                           <div className="box">
                                <div className="box-header justify-between pb-3 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                    <div className="grow"> 
                                        <input className="form-control w-full" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
                                    </div> 
                                    <div className="flex flex-wrap gap-2"> 
                                        <SpkDropdown className="ti-dropdown hs-dropdown" Linktag={true} Linkclass="ti-btn bg-light btn-wave py-1 px-2"  Toggletext="Sort By" Arrowicon={true}> 
                                                <li><Link className="ti-dropdown-item" href="#!">New</Link></li> 
                                                <li><Link className="ti-dropdown-item" href="#!">Popular</Link></li> 
                                                <li><Link className="ti-dropdown-item" href="#!">Relevant</Link></li> 
                                        </SpkDropdown> 
                                    </div>
                                    <SpkButton variant="primary" Size="sm" customClass="ti-btn ms-auto !m-0" Overlay="#addtask">
                                        <i className="ri-add-circle-line"></i> Add New Task
                                    </SpkButton>
                                </div>
                                <div className="box-body p-0 relative" id="todo-content">
                                    <div>
                                        <div className="table-responsive">
                                        <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10" checked={selectAll} onChange={handleSelectAll} showCheckbox={true} Bodytag={false} header={[
                                            { title: '', headerClassname: 'todolist-handle-drag' },
                                            { title: 'Task Title' },
                                            { title: 'Status' },
                                            { title: 'Dead Line' },
                                            { title: 'Priority' },
                                            { title: 'Assigner' },
                                            { title: 'Progress', headerClassname: 'todolist-progress' },
                                            { title: 'Action', headerClassname: 'text-end' }
                                        ]}>
                                            <ReactSortable
                                                list={sortList}
                                                setList={setSortList}
                                                handle=".todo-handle"
                                                animation={150}
                                                tag="tbody"
                                                id="todo-drag"
                                            >
                                                {sortList.map((idx, index) => (
                                                    <tr ref={tableRef} className="todo-box border-b !border-defaultborder dark:!border-defaultborder/10" key={index}>
                                                        <td className="task-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                defaultChecked={idx.check}
                                                                onChange={() => handleCheckboxToggle(idx.id)}
                                                                className="form-check-input"
                                                            />
                                                        </td>
                                                        <td>
                                                            <SpkButton variant="" Size="sm" customClass="ti-btn ti-btn-icon  btn-wave bg-light todo-handle !mb-0">: :</SpkButton>
                                                        </td>
                                                        <td>
                                                            <span className="font-medium">{idx.title}</span>
                                                        </td>
                                                        <td>
                                                            <span className={`font-medium text-${idx.color}`}>
                                                                <i className="ri-circle-line  font-semibold text-[0.4375rem] me-2 leading-none align-middle"></i>{idx.status}
                                                            </span>
                                                        </td>
                                                        <td>{idx.dueDate}</td>
                                                        <td>
                                                            <SpkBadge variant={`${idx.color1}/10`} customClass={`text-${idx.color1}`}>{idx.priority}</SpkBadge>
                                                        </td>
                                                        <td className="text-center flex gap-2 flex-wrap items-center font-medium">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={idx.assignee} alt="" />
                                                            </span>
                                                            {idx.name}
                                                        </td>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="progress progress-animate progress-xs w-full" role="progressbar" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                                                        <div className={`progress-bar progress-bar-striped progress-bar-animated !bg-${idx.color2}`} style={{ width: `${idx.progress}%` }}></div>
                                                                    </div>
                                                                    <div className="ms-2">{idx.data}%</div>
                                                            </div>
                                                        </td>
                                                        <td className="text-end">
                                                            <div className="flex gap-2">
                                                                <Link href="#!" className="ti-btn ti-btn-icon ti-btn-sm bg-info/10 text-info !mb-0 btn-wave waves-effect waves-light">
                                                                    <i className="ri-edit-line"></i>
                                                                </Link>
                                                                <Link href="#!" onClick={() => handleRemove(idx.id)} className="todo-btn ti-btn ti-btn-sm ti-btn-icon ti-btn-soft-danger !mb-0 btn-wave waves-effect waves-light">
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
                                <div className="box-footer"> 
                                    <div className="flex items-center justify-between flex-wrap gap-2"> 
                                        <div> Showing 10 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i> </div>
                                        <div> 
                                            <nav aria-label="Page navigation" className="pagination-style-4">
                                                <ul className="ti-pagination mb-0 flex-wrap">
                                                    <li className="page-item disabled">
                                                        <Link scroll={false} className="page-link" href="#!">
                                                            Prev
                                                        </Link>
                                                    </li>
                                                    <li className="page-item ">
                                                     <Link scroll={false} className="page-link active" href="#!">1</Link>
                                                     </li>
                                                    <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
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
                    {/* <!-- Start::add tasks --> */}
                    <div id="addtask" className="hs-overlay hidden ti-modal">
                        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                        <div className="ti-modal-content">
                            <div className="ti-modal-header">
                                <h6 className="modal-title text-[1rem] font-semibold" id="staticBackdropLabel2">Create Task
                                </h6>
                            <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#addtask">
                                <span className="sr-only">Close</span>
                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                </svg>
                            </SpkButton>
                            </div>
                            <div className="ti-modal-body">
                                <div className="grid grid-cols-12 gap-x-5 gy-2">
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Task Name</label>
                                        <input type="text" className="form-control" id="task-name" placeholder="Task Name"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Assigned To</label>
                                        <SpkSelect multi name="state" option={Listviewassigneddata} mainClass="js-example-placeholder-multiple w-full js-states"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Listviewassigneddata[0]]}
                                        />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Assigned Date</label>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                                <SpkDatepickr className="form-control flatpickr-input" placeholderText='Choose date with time'  selected={dates["Assigned"]}
                                                onChange={(date) => handleDateChange("Assigned", date)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Target Date</label>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i></div>
                                                <SpkDatepickr className="form-control flatpickr-input" placeholderText='Choose date with time'  selected={dates["Target"]}
                                                onChange={(date) => handleDateChange("Target", date)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Status</label>
                                            <SpkSelect name="state" option={Statusdata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                            />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Priority</label>
                                        <SpkSelect name="state" option={Prioritydata} mainClass="js-example-placeholder-multiple w-full js-states"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="ti-modal-footer">
                            <SpkButton  buttontype="button" variant="secondary" customClass="hs-dropdown-toggle ti-btn" Overlay="#addtask">
                                Cancel
                            </SpkButton>
                            <Link scroll={false} className="ti-btn ti-btn-primary" href="#!">
                                Create
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <!-- End::add tasks --> */}
</Fragment>
);
};

export default Todolist;