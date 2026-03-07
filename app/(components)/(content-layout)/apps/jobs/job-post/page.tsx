"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import { Data1, Data10, Data11, Data12, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9 } from "@/shared/data/apps/jobs/jobpostdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useState } from "react";

interface JobPostProps {}

const JobPost : FC<JobPostProps>  = () => {
    const [startDate, setStartDate] = useState<Date | any>();
    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };
    
return (
<Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Jobs-Jobpost" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Post Job" activepage="Post Job" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Post New Job
                                </div>                       
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4"> 
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="job-title" className="form-label">Job Title</label>
                                        <input type="text" className="form-control" id="job-title" placeholder="Job Title" defaultValue="UI/UX Developer"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Job Category</label> 
                                        <SpkSelect name="colors" option={Data1  } mainClass="basic-multi-select custom-products" classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                        />
                                    </div> 
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Working Experience</label> 
                                        <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select custom-products" classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                          />
                                    </div> 
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Job Type</label> 
                                        <SpkSelect name="colors" option={Data12} mainClass="basic-multi-select custom-products" classNameprefix="Select2" defaultvalue={[Data12[0]]}
                                           />
                                    </div> 
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="form-label">Priority</label> 
                                        <SpkSelect option={Data3} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select custom-products"
                                        placeholder="" defaultvalue={[Data3[0]]} />
                                    </div>  
                                    <div className="xl:col-span-6 col-span-12"> 
                                        <label className="form-label">Vacancies</label> 
                                        <SpkSelect name="colors" option={Data4} mainClass="basic-multi-select custom-products" classNameprefix="Select2" defaultvalue={[Data4[0]]}
                                        />
                                    </div> 
                                    <div className="xl:col-span-6 col-span-12"> 
                                        <label className="form-label">Salary</label> 
                                        <SpkSelect option={Data5} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select custom-products" placeholder="" defaultvalue={[Data5[0]]} />
                                    </div> 
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="skills" className="form-label">Skills :</label>
                                        <SpkSelect multi name="colors" option={Data6} mainClass="basic-multi-select custom-products" classNameprefix="Select2"
                                        defaultvalue={[Data6[0], Data6[1], Data6[2]]} />
                                    </div>      
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="job-deadline" className="form-label">Job Deadline</label>
                                        <SpkDatepickr className="form-control flatpickr-input" placeholderText='Job Deadline'  selected={startDate} onChange={handleDateChange} />
                                    </div>  
                                    <div className="xl:col-span-6 col-span-12"> 
                                        <label className="form-label">Gender Requirement</label> 
                                            <SpkSelect name="colors" option={Data7} mainClass="basic-multi-select custom-products" classNameprefix="Select2"
                                            defaultvalue={[Data7[0]]} />
                                    </div>                                      
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="language" className="form-label">Languages :</label>
                                        <SpkSelect multi name="colors" option={Data8} mainClass="choices__item choices__item--selectable custom-products" classNameprefix="Select2"
                                        defaultvalue={[Data8[0], Data8[3]]} />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="qualification" className="form-label">Qualification :</label>
                                            <SpkSelect multi name="colors" option={Data9} mainClass="basic-multi-select custom-products" classNameprefix="Select2"
                                            defaultvalue={[Data9[0], Data9[2], Data9[3]]} />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="job-description" className="form-label">Job Description :</label>
                                        <textarea className="form-control" id="job-description" rows={4} defaultValue="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer text-end">
                                <a href="#!" className="ti-btn ti-btn-primary btn-wave waves-effect waves-light">
                                    <i className="bi bi-plus-circle"></i> Post Job
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Assign To Employer</div>
                            </div>
                            <div className="box-body">
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Employer Name</label> 
                                    <SpkSelect name="colors" option={Data10} mainClass="basic-multi-select custom-products" classNameprefix="Select2" defaultvalue={[Data10[0]]}/>
                                </div>                                 
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Company Details</div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12  gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="Company-Name" className="form-label">Company Name</label> 
                                        <input type="text" className="form-control" id="Company-Name" placeholder="Company Name" defaultValue="Tech Innovators Ltd."/>
                                    </div>                                 
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="Company-Website" className="form-label">Company Website</label> 
                                        <input type="text" className="form-control" id="Company-Website" placeholder="Company Website" defaultValue="http//www.techinnovatorltd.com"/>
                                    </div>  
                                    <div className="xl:col-span-12 col-span-12"> 
                                        <label className="form-label">Country</label> 
                                        <SpkSelect name="colors" option={Data11} mainClass="basic-multi-select custom-products" classNameprefix="Select2" defaultvalue={[Data11[0]]}/>
                                    </div> 
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="Company-Address" className="form-label">Address</label> 
                                        <input type="text" className="form-control" id="Company-Address" placeholder="Company Address" defaultValue="USA"/>
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

export default JobPost;