"use client"
import SpkKanbanboard from "@/shared/@spk-reusable-components/apps/spk-kanbanboard";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Taskdata1, Taskdata2, Taskdata4, Taskdata5, Tasksdata } from "@/shared/data/apps/task/kanbanboarddata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { FilePond } from "react-filepond";
import SimpleBar from "simplebar-react";

interface KanbanBoardProps {}

const KanbanBoard : FC<KanbanBoardProps>  = () => {
    const [files, setFiles] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const windowElement = window;

            if (leftContainerRef.current && rightContainerRef.current) {
                const containers = [
                    leftContainerRef.current,
                    rightContainerRef.current,
                    topContainerRef.current,
                    bottomContainerRef.current,
                    lastContainerRef.current
                ];
                const drake = dragula(containers);
            
            }

            OnDivChange();
        }
    }, []);

    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
    ];

    const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
            const element: any = elementId.current;
            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("hidden");
            } else {
                element?.classList.remove("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("hidden");
            }
        });
    };


    const Option1 = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'A - Z', label: 'A - Z' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Type', label: 'Type' },
    ];
    const Option2 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' }
    ];
    const Option3 = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Authentication', label: 'Authentication' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Development', label: 'Development' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Product', label: 'Product' },
        { value: 'UI/UX', label: 'UI/UX' },
    ];
return (
<Fragment>
            {/* <!-- Page Header --> */}
                    <Seo title="Task-kanbanboard" />

                    <Pageheader title="Apps" subtitle="Task" currentpage="Kanban Board" activepage="Kanban Board" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start:: row-1 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-body p-4">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center flex-wrap gap-2 xxl:flex-nowrap" role="search">
                                        <span className="font-medium text-[15px] text-nowrap flex-nowrap me-2">WorkSpace :</span>
                                        <input className="form-control me-1" type="search" placeholder="Search Tasks" aria-label="Search"/>
                                        <SpkButton variant="soft-secondary" customClass="ti-btn" buttontype="submit">Search</SpkButton>
                                    </div>
                                    <div className="ms-auto flex gap-4 items-center flex-wrap">
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
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/4.jpg" alt="img"/>
                                            </span>
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/13.jpg" alt="img"/>
                                            </span>
                                            <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                +8
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 kanban-board">
                                            <SpkButton customClass="ti-btn bg-primary text-white btn-w-lg !m-0" Overlay="#add-board"><i className="ri-add-line me-1 font-medium align-middle"></i>New Board</SpkButton>
                                            <div className="flex-auto">
                                                <SpkSelect name="colors" option={Option1} mainClass="basic-multi-select custom-products" placeholder="Sort By"
                                                    menuplacement='auto' classNameprefix="Select2"
                                                />
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start::row-2 --> */}
                <div className="TASK-kanban-board">
                    <div className="kanban-tasks-type new">
                        <div className="pe-3 mb-3">
                            <div className="flex justify-between items-center px-3 py-2 bg-primary text-white rounded-md">
                                <span className="block font-medium text-[15px]">NEW </span>
                                <div>
                                   <SpkBadge customClass="badge-task text-white">18</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div id="new-tasks-draggable" data-view-btn="new-tasks" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                                {Tasksdata.map((idx) => (
                                    <SpkKanbanboard key={idx.id} headerClass="justify-between" status={"In Progress"} obj={idx} />
                                ))}
                            </div>
                        </SimpleBar>
                        <div className="flex view-more-button mt-3 gap-2 items-center">
                            <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-wave flex-auto">View More</Link>
                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-soft-secondary border btn-wave flex-auto" data-hs-overlay="#add-task">
                                <i className="ri-add-line align-middle me-1 font-medium"></i>Add Task
                            </Link>
                        </div>
                    </div>
                    <div className="kanban-tasks-type todo">
                        <div className="pe-3 mb-3">
                            <div className="flex justify-between items-center px-3 py-2 bg-primarytint1color text-white rounded-md">
                                <span className="block font-medium text-[15px]">TODO </span>
                                <div>
                                   <SpkBadge customClass="badge-task text-white">12</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="todo-tasks">
                            <div id="todo-tasks-draggable" data-view-btn="todo-tasks" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                                    {Taskdata1.map((idx) => (
                                        <SpkKanbanboard key={idx.id} headerClass="justify-between" status={"In Progress"} obj={idx} />
                                    ))}
                            </div>
                        </SimpleBar>
                        <div className="flex view-more-button mt-3 gap-2 items-center">
                            <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-wave flex-auto">View More</Link>
                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-soft-secondary border btn-wave flex-auto" data-hs-overlay="#add-task">
                                <i className="ri-add-line align-middle me-1 font-medium"></i>Add Task
                            </Link>
                        </div>
                    </div>
                    <div className="kanban-tasks-type in-progress">
                        <div className="pe-3 mb-3">
                            <div className="flex justify-between items-center px-3 py-2 bg-primarytint2color text-white rounded-md">
                                <span className="block font-medium text-[15px]">ON GOING </span>
                                <div>
                                   <SpkBadge customClass="badge-task text-white">26</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="inprogress-tasks">
                            <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks" ref={topContainerRef} onMouseEnter={OnDivChange}>
                                {Taskdata2.map((idx) => (
                                    <SpkKanbanboard key={idx.id} headerClass="justify-between" status={"In Progress"} obj={idx} />

                                ))}
                            </div>
                        </SimpleBar>
                        <div className="flex view-more-button mt-3 gap-2 items-center">
                            <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-wave flex-auto">View More</Link>
                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-soft-secondary border btn-wave flex-auto" data-hs-overlay="#add-task">
                                <i className="ri-add-line align-middle me-1 font-medium"></i>Add Task
                            </Link>
                        </div>
                    </div>
                    <div className="kanban-tasks-type inreview">
                        <div className="pe-3 mb-3">
                            <div className="flex justify-between items-center px-3 py-2 bg-primarytint3color text-white rounded-md">
                                <span className="block font-medium text-[15px]">IN REVIEW </span>
                                <div>
                                   <SpkBadge customClass="badge-task text-white">30</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="inreview-tasks">
                            <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                                {Taskdata5.map((idx) => (
                                    <SpkKanbanboard key={idx.id} headerClass="justify-between" status={"In Progress"} obj={idx} />

                                ))}
                            </div>
                        </SimpleBar>
                        <div className="flex view-more-button mt-3 gap-2 items-center">
                            <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-wave flex-auto">View More</Link>
                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-soft-secondary border btn-wave flex-auto" data-hs-overlay="#add-task">
                                <i className="ri-add-line align-middle me-1 font-medium"></i>Add Task
                            </Link>
                        </div>
                    </div>
                    <div className="kanban-tasks-type completed">
                        <div className="pe-3 mb-3">
                            <div className="flex justify-between items-center px-3 py-2 bg-secondary text-white rounded-md">
                                <span className="block font-medium text-[15px]">COMPLETED </span>
                                <div>
                                   <SpkBadge customClass="badge-task text-white">36</SpkBadge>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="completed-tasks">
                            <div id="completed-tasks-draggable" data-view-btn="completed-tasks" ref={lastContainerRef} onMouseEnter={OnDivChange}>
                                {Taskdata4.map((idx) => (
                                    <SpkKanbanboard key={idx.id} headerClass="justify-between" status={"In Progress"} obj={idx} />

                                ))}
                            </div>
                        </SimpleBar>
                        <div className="flex view-more-button mt-3 gap-2 items-center">
                            <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary btn-wave flex-auto">View More</Link>
                            <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-soft-secondary border btn-wave flex-auto" data-hs-overlay="#add-task">
                                <i className="ri-add-line align-middle me-1 font-medium"></i>Add Task
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-2 --> */}

                {/* <!-- Start::add board modal --> */}
                <div id="add-board" className="hs-overlay hidden ti-modal">
                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                      <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold" id="staticBackdropLabel2">Add Board
                            </h6>
                          <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#add-board">
                            <span className="sr-only">Close</span>
                            <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                            </svg>
                          </SpkButton>
                        </div>
                        <div className="ti-modal-body">
                            <div className="grid grid-cols-12">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="board-title" className="form-label">Task Board Title</label>
                                    <input type="text" className="form-control" id="board-title" placeholder="Board Title"/>
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                          <SpkButton buttontype="button" variant="light" customClass="hs-dropdown-toggle ti-btn  btn-wave" Overlay="#add-board">
                             Cancel
                          </SpkButton>
                          <Link scroll={false} className="ti-btn  btn-wave ti-btn-primary" href="#!">
                            Add Board
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
                {/* <!-- End::add board modal --> */}

                {/* <!-- Start::add task modal --> */}
                <div id="add-task" className="hs-overlay hidden ti-modal">  
                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                      <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Add Task</h6>
                              <SpkButton buttontype="button" customClass="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" Overlay="#add-task">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                              </SpkButton>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="grid grid-cols-12 gap-x-4 gap-y-2">
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Task Name</label>
                                    <input type="text" className="form-control" id="task-name" placeholder="Task Name"/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-id" className="form-label">Task ID</label>
                                    <input type="text" className="form-control" id="task-id" placeholder="Task ID"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="text-area" className="form-label">Task Description</label>
                                    <textarea className="form-control" id="text-area" rows={2} placeholder="Write Description"></textarea>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="text-area" className="form-label">Task Images</label>
                                    <FilePond files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Assigned To</label>
                                    <SpkSelect multi name="colors" option={Option2} menuplacement='auto' classNameprefix="Select2" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Target Date</label>
                                    <div className="form-group">
                                        <div className="input-group custom-task">
                                            <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control flatpickr-input w-full "   Timeinput="Time:"
                                                dateFormat="yy/MM/dd h:mm aa"
                                                placeholderText='Choose date with time'
                                                showTimeInput  selected={startDate} onChange={handleDateChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Tags</label>
                                    <SpkSelect multi name="colors" option={Option3} mainClass="w-full !rounded-md" menuplacement='top' classNameprefix="Select2" />
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton buttontype="button" variant="secondary"
                            customClass="hs-dropdown-toggle ti-btn align-middle"
                            Overlay="#add-task">
                            Close
                          </SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Add Task</SpkButton>
                        </div>
                      </div>
                    </div>
                </div>
              
                {/* <!-- End::add task modal --> */}
</Fragment>
);
};

export default KanbanBoard;