"use client"
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import Spktables from "@/shared/@spk-reusable-components/tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Avatars , projects} from "@/shared/data/apps/projects/Projectlistdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface ProjectsListProps {}

const ProjectsList : FC<ProjectsListProps>  = () => {
    const Projectselectdata = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ]
return (
<Fragment>
        {/* <!-- Page Header --> */}
                <Seo title="Projects-Projectlist" />

                <Pageheader title="Apps" subtitle="Projects" currentpage="Projects List" activepage="Projects List" />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-body p-4">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex flex-wrap gap-1 project-list-main">
                                        <Link scroll={false} href="/apps/projects/create-project" className="ti-btn bg-primary text-white !me-2 !m-0"><i className="ri-add-line me-1 font-medium align-middle"></i>New Project</Link>
                                        <SpkSelect name="colors" option={Projectselectdata} mainClass="basic-multi-select custom-products"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Projectselectdata[0]]}
                                        />
                                    </div>
                                    <div className="avatar-list-stacked">
                                        {Avatars.map((idx) => (
                                            <span className="avatar avatar-sm avatar-rounded" key={idx.id}>
                                                <img src={idx.src} alt="img"/>
                                            </span>
                                        ))}
                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +8
                                        </Link>
                                    </div>
                                    <div className="flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search"/>
                                        <SpkButton customClass="ti-btn bg-light !m-0" buttontype="submit">Search</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-1 --> */}

                {/* <!-- Start::row-2 --> */}

                <div className="row">
                    <div className="col-xl-12">
                        <div className="box overflow-hidden">
                            <div className="box-body p-0">
                                <div className="table-responsive">
                                <Spktables tableClass="ti-custom-table text-nowrap" tableRowclass="border-b !border-defaultborder dark:!border-defaultborder/10" header={[{ title: 'Project Name' }, { title: 'Description' }, { title: 'Team' }, { title: 'Assigned Date' }, { title: 'Due Date' }, { title: 'Status' }, { title: 'Priority' }, { title: 'Actions' }]}>
                                    {projects.map((project, index) => (
                                        <tr key={index} className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className={`avatar avatar-rounded p-1 bg-${project.color1}/10`}>
                                                            <img src={`../../../assets/images/company-logos/${project.logo}`} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="font-medium text-[14px] block truncate project-list-title">
                                                            {project.title}
                                                        </Link>
                                                        <span className="text-textmuted dark:text-textmuted/50 block text-xs">
                                                            Total <span className="font-medium text-defaulttextcolor">{project.tasksCompleted}</span> tasks completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-textmuted dark:text-textmuted/50 mb-0 project-list-description">{project.description}</p>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {project.avatars.map((avatar, idx) => (
                                                        <span key={idx} className="avatar avatar-sm avatar-rounded">
                                                            <img src={`../../../assets/images/faces/${avatar}`} alt="" />
                                                        </span>
                                                    ))}
                                                    <Link scroll={false} className=" avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +{project.count}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>{project.startDate}</td>
                                            <td>{project.endDate}</td>
                                            <td>
                                                <div>
                                                    <div className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={project.progress} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar bg-primary" style={{ width: `${project.progress}%` }}></div>
                                                    </div>
                                                    <div className="mt-1"><span className="text-primary font-medium">{project.progress}%</span> Completed</div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${project.color}/10`} customClass={`text-${project.color}`}>{project.priority}</SpkBadge>
                                            </td>
                                            <td>
                                                <SpkDropdown Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm bg-light" Icon={true} IconClass="fe fe-more-vertical">
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-block"></i>View</Link></li>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-block"></i>Edit</Link></li>
                                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-block"></i>Delete</Link></li>
                                                </SpkDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </Spktables>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::row-2 --> */}
                <nav aria-label="Page navigation" className="mb-4">
                    <ul className="ti-pagination justify-end">
                        <li className="page-item disabled">
                            <Link scroll={false} href="#!" className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0">Previous</Link>
                        </li>
                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0" href="#!">1</Link></li>
                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"  href="#!">2</Link></li>
                        <li className="page-item"><Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem] !border-e-0"  href="#!">3</Link></li>
                        <li className="page-item">
                            <Link scroll={false} className="page-link !bg-white dark:!bg-bodybg px-3 py-[0.375rem]" href="#!">Next</Link>
                        </li>
                    </ul>
                </nav>
</Fragment>
);
};

export default ProjectsList;