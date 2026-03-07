"use client"
import Spkcardscomponent from "@/shared/@spk-reusable-components/dashboards/spk-cards";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Listviewassigneddata, Listviewdata, Prioritydata, Statusdata, taskData } from "@/shared/data/apps/task/listviewdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface ListViewProps {}

const ListView : FC<ListViewProps>  = () => {
      
    const [allData, _setallData] = useState(Listviewdata)
    const [data, setData] = useState(allData);
    const [selectAll, setSelectAll] = useState(false);
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setData((prevData) =>
            prevData.map((item) => ({
                ...item,
                isChecked: !selectAll,
            }))
        );
    };

    const handleRemove = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const handleCheckboxToggle = (id: number) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    //datepicker

    const [dates, setDates] = useState<{ [key: string]: Date | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
      setDates((prevDates) => ({
        ...prevDates,
        [key]: date,
      }));
    };

return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Tasks-listview" />

            <Pageheader title="Apps" subtitle="Task" currentpage="Task List View" activepage="Task List View" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {taskData.map((task) => (
                        <div className="xxl:col-span-3 col-span-12" key={task.id}>
                            <Spkcardscomponent textbefore={false} textafter={true} cardClass="overflow-hidden main-content-card" dataClass="mb-0" mainClass="flex items-start justify-between mb-2" badgeClass="rounded" card={task} Icon={true} iconClass={task.Icon} />
                        </div>
                    ))}
                </div>
                {/* <!--End::row-1 --> */}

                 {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Total Tasks
                                </div>
                                <div className="flex">
                                    <SpkButton Size="sm" customClass="ti-btn bg-primary text-white btn-wave waves-light" Overlay="#create-task"><i className="ri-add-line font-medium align-middle"></i> Create Task</SpkButton>
                                    {/* <!-- Start::add task modal --> */}
                                    <div className="hs-overlay hidden ti-modal" id="create-task" tabIndex={-1} aria-hidden="true">
                                        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                                            <div className="ti-modal-content">
                                                <div className="ti-modal-header">
                                                    <h6 className="ti-modal-title">Add Task</h6>
                                                    <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-task">
                                                        <span className="sr-only">Close</span>
                                                        <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                                        </svg>
                                                      </SpkButton>
                                                </div>
                                                <div className="ti-modal-body">
                                                    <div className="grid grid-cols-12 gap-x-6 gap-y-2">
                                                        <div className="xl:col-span-6 col-span-12">
                                                            <label htmlFor="task-name" className="form-label">Task Name</label>
                                                            <input type="text" className="form-control" id="task-name" placeholder="Task Name"/>
                                                        </div>
                                                        <div className="xl:col-span-6 col-span-12">
                                                            <label htmlFor="task-id" className="form-label">Task ID</label>
                                                            <input type="text" className="form-control" id="task-id" placeholder="Task ID"/>
                                                        </div>
                                                        <div className="xl:col-span-6 col-span-12">
                                                            <label className="form-label">Assigned Date</label>
                                                            <div className="form-group">
                                                                <div className="input-group flex-nowrap">
                                                                    <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                                                    <SpkDatepickr className="form-control flatpickr-input" placeholderText='Choose date with time'   selected={dates["assigneddate"]}
                                                                        onChange={(date) => handleDateChange("assigneddate", date)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="xl:col-span-6 col-span-12">
                                                            <label className="form-label">Due Date</label>
                                                            <div className="form-group">
                                                                <div className="input-group flex-nowrap">
                                                                    <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                                                    <SpkDatepickr className="form-control flatpickr-input" placeholderText='Choose date with time'   selected={dates["duedate"]}
                                                                    onChange={(date) => handleDateChange("duedate", date)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="xl:col-span-6 col-span-12">
                                                            <label className="form-label">Status</label>
                                                            <SpkSelect name="state" option={Statusdata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Statusdata[0]]}
                                                            />
                                                        </div>
                                                        <div className="xl:col-span-6 col-span-12">
                                                            <label className="form-label">Priority</label>
                                                            <SpkSelect name="state" option={Prioritydata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Prioritydata[0]]}
                                                                />
                                                        </div>
                                                        <div className="xl:col-span-12 col-span-12">
                                                            <label className="form-label">Assigned To</label>
                                                            <SpkSelect multi name="state" option={Listviewassigneddata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                                menuplacement='auto' classNameprefix="Select2"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ti-modal-footer">
                                                    <SpkButton buttontype="button" customClass="hs-dropdown-toggle ti-btn  btn-wave ti-btn-light" Overlay="#create-task">
                                                        Cancel
                                                        </SpkButton>
                                                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white">Add Task</SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End::add task modal --> */}
                                        <SpkDropdown Customclass="ms-2" Icon={true} IconClass="ti ti-dots-vertical" CustomToggleclass="ti-btn ti-btn-icon bg-secondary/10 text-secondary ti-btn-sm btn-wave waves-light ti-dropdown-toggle hs-dropdown-toggle" >
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">New Tasks</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Pending Tasks</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Completed Tasks</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Inprogress Tasks</Link></li>
                                        </SpkDropdown>
                                </div>
                            </div>
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap" showCheckbox={true} checked={selectAll} onChange={handleSelectAll}  tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10"
                                  header={[{ title: 'Task' }, { title: 'Task ID' }, { title: 'Assigned Date' }, { title: 'Status' }, { title: 'Due Date' },
                                   { title: 'Priority' }, { title: 'Assigned To' }, { title: 'Action' }, { title: 'Status Update' }]}>
                                    {data.map((task, index) => (
                                        <tr className="task-list border-b !border-defaultborder dark:!border-defaultborder/10" key={index}>
                                            <td className="task-checkbox">
                                            <input type="checkbox" defaultChecked={task.isChecked} onChange={() => handleCheckboxToggle(task.id)} className="form-check-input"/>
                                            </td>
                                            <td>
                                                <span className="font-medium">{task.title}</span>
                                            </td>
                                            <td>
                                                <span className="font-medium">{task.code}</span>
                                            </td>
                                            <td>{task.startDate}</td>
                                            <td>
                                                <span className={`font-medium text-${task.color}`}>
                                                    {task.status}
                                                </span>
                                            </td>
                                            <td>{task.dueDate}</td>
                                            <td>
                                                <span className={`badge bg-${task.color1}/10 text-${task.color1}`}>
                                                    {task.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {task.avatars.map((avatar: any, idx: React.Key | null | undefined) => (
                                                        <span key={idx} className="avatar avatar-sm avatar-rounded">
                                                            <img src={`../../../assets/images/faces/${avatar}`} alt="img" />
                                                        </span>
                                                    ))}
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                        +{task.count}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn ti-btn-icon">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                    <SpkButton variant="soft-danger" onClickfunc={() => handleRemove(task.id)} Size="sm"
                                                      customClass="ti-btn ti-btn-icon ms-1 task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${task.color2}/10  text-${task.color2}`}>
                                                    {task.reviewStatus}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                            <div className="box-footer">
                                <nav aria-label="..." className="me-4 sm:mb-0 mb-2">
                                    <ul className="ti-pagination justify-end">
                                        <li className="page-item disabled">
                                            <Link scroll={false} href="#!" className="page-link px-3 py-[0.375rem] !border-e-0">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0"
                                                href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page">
                                            <Link scroll={false} className="page-link active px-3 py-[0.375rem] !border-e-0"
                                                href="#!">2</Link>
                                        </li>
                                        <li className="page-item " aria-current="page">
                                            <Link scroll={false} className="page-link px-3 py-[0.375rem] !border-e-0"
                                                href="#!">3</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-2 --> */}
</Fragment>
);
};

export default ListView;