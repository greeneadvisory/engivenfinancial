"use client"
import React, { FC, Fragment, useState } from "react";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import CreatableSelect from 'react-select/creatable';
import SunEditorComponent from "@/shared/@spk-reusable-components/spk-packages/editor-component";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Multipleselectdata, Multipleselectdata1, multiselectdata } from "@/shared/data/apps/projects/createprojectdata";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface CreateProjectProps {}

const CreateProject : FC<CreateProjectProps>  = () => {
    
    const [isSearchable] = useState(true);

    const components = {
        DropdownIndicator: null,
    };
 

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value1, setValue1] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    const defaultContent = ` <div id="project-descriptioin-editor">
    <p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.</p>
    <p><br/></p>
    <ol>
        <li className="ql-size-normal">Ensure data security and compliance with relevant regulations.</li>
        <li className="">Train staff on the enhanced system within two weeks of deployment.</li>
        <li className="">Implement a scalable solution to accommodate future growth.</li>
        <li className="">Decrease the time required for inventory audits by 50%.</li>
        <li className="">Achieve a 10% reduction in excess inventory costs.</li>
    </ol>`;

const [files, setFiles] = useState<any>([]);

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
            <Seo title="Projects-Createproject" />

            <Pageheader title="Apps" subtitle="Projects" currentpage="Create Project" activepage="Create Project" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Create Project
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label" className="form-label">Project Name :</label>
                                    <input type="text" className="form-control" id="input-label" placeholder="Enter Project Name"/>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label11" className="form-label">Project Manager :</label>
                                    <input type="text" className="form-control" id="input-label11" placeholder="Project Manager Name"/>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label1" className="form-label">Client / Stakeholder :</label>
                                    <input type="text" className="form-control" id="input-label1" placeholder="Enter Client Name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Project Description :</label>
                                     <SunEditorComponent height={'200px'} defaulContent={defaultContent} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Start Date :</label>
                                    <div className="form-group">
                                        <div className="input-group custom-input-pickr">
                                            <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control flatpickr-input"   Timeinput="Time:"
                                                dateFormat="yy/MM/dd h:mm aa"
                                                placeholderText='Choose date with time'
                                                showTimeInput  selected={dates["Startdate"]}
                                                onChange={(date) => handleDateChange("Startdate", date)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">End Date :</label>
                                    <div className="form-group">
                                        <div className="input-group custom-input-pickr">
                                            <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control flatpickr-input"   Timeinput="Time:"
                                                dateFormat="yy/MM/dd h:mm aa"
                                                placeholderText='Choose date with time'
                                                showTimeInput  selected={dates["Enddate"]}
                                                onChange={(date) => handleDateChange("Enddate", date)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Status :</label>
                                        <SpkSelect searchable={isSearchable} name="colors" option={Multipleselectdata1} mainClass="default basic-multi-select" id="choices-multiple-default"
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Multipleselectdata1[1]]}
                                        />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Priority :</label>
                                    <SpkSelect searchable={isSearchable} name="colors" option={Multipleselectdata} mainClass="default basic-multi-select" id="choices-multiple-default"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Multipleselectdata[0]]}
                                    />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Assigned To</label>
                                    <SpkSelect multi name="colors" option={multiselectdata} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Tags</label>
                                    <CreatableSelect
                                        className="tags-data"
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue1([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value1}
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Attachments</label>
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
                            </div>
                        </div>
                        <div className="box-footer">
                            <SpkButton variant="primary" customClass="ti-btn btn-wave ms-auto float-end">Create Project</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default CreateProject;