"use client"
import React, { FC, Fragment, useState } from "react";
import SunEditorComponent from "@/shared/@spk-reusable-components/spk-packages/editor-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import { Selectdata1, Selectdata2, Selectdata3 } from "@/shared/data/pages/blog/createblogdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface CreateBlogProps {}

const CreateBlog : FC<CreateBlogProps>  = () => {
    const [files, setFiles] = useState<any>([]);
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
            {/* <!-- Start::page-header --> */}
                <Seo title="Pages-Createblog" />

                <Pageheader title="Pages" subtitle="Blog" currentpage="Blog Create" activepage="Blog Create" />

            {/* <!-- End::page-header --> */}
             {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">New Blog</div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="blog-title" className="form-label">Blog Title</label>
                                        <input type="text" className="form-control" id="blog-title" placeholder="Blog Title"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="blog-category" className="form-label">Blog Category</label>
                                        <SpkSelect name="colors" option={Selectdata1} mainClass="basic-multi-select"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select Category"
                                        />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="blog-author-email" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="blog-author-email" placeholder="Enter Email"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="blog-author" className="form-label">Blog Author</label>
                                        <input type="text" className="form-control" id="blog-author" placeholder="Enter Name"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="publish-time" className="form-label">Publish Time</label>
                                        <SpkDatepickr  className="form-control"
                                                            selected={dates["startDate6"]}
                                                            onChange={(date) => handleDateChange("startDate6", date)}  
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            Caption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="blog-tags" className="form-label">Blog Tags</label>
                                        <SpkSelect multi name="colors" option={Selectdata3} mainClass="basic-multi-select"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Selectdata3[0], Selectdata3[3]]}
                                        />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="publish-date" className="form-label">Publish Date</label>
                                        <SpkDatepickr className="form-control flatpickr-input"  placeholderText='Choose date with time' 
                                        selected={dates["publishdate"]}
                                        onChange={(date) => handleDateChange("publishdate", date)}/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="product-status-add" className="form-label">Published Status</label>
                                        <SpkSelect name="colors" option={Selectdata2} mainClass="basic-multi-select"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select Category"
                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12 blog-images-container">
                                        <label htmlFor="blog-author-email" className="form-label">Blog Images</label>
                                        <FilePond
                                            files={files}
                                            onupdatefiles={setFiles}
                                            allowMultiple={true}
                                            maxFiles={3}
                                            server="/api"
                                            name="files" /* sets the file input name, it's filepond by default */
                                            labelIdle='Drag & Drop your file here or click '
                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Blog Content</label>
                                        <div id="blog-content"> <SunEditorComponent height={'200px'} /></div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Blog Type</label>
                                        <div className="flex items-center">
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked/>
                                                <label className="form-check-label" htmlFor="blog-free1">
                                                    Free
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1"/>
                                                <label className="form-check-label" htmlFor="blog-paid1">
                                                    Paid
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="btn-list text-end">
                                    <SpkButton buttontype="button" variant="" customClass="ti-btn bg-primarytint1color text-white">Save As Draft</SpkButton>
                                    <SpkButton buttontype="button" variant="" customClass="ti-btn bg-primary text-white me-0">Post Blog</SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default CreateBlog;