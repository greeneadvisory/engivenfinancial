"use client"
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { CountrySelect, } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css"; 
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import dynamic from "next/dynamic";
import { ComponentType } from 'react';

type ListBoxProps = {
  options: any;
  onChange: (newValue: any) => void;
  selected: any;
};

const ListBox: ComponentType<ListBoxProps> = dynamic(() => import("react-listbox"), { ssr: false });
import { Tagifyselectdata } from "@/shared/data/forms/formadvancedata";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";

interface TagifySettings {
    maxTags: number;
    placeholder: string;
    dropdown: {
      enabled: number;
    };
  }
interface FormAdvancedProps {}

const FormAdvanced : FC<FormAdvancedProps>  = () => {


    const [value, setValue] = useState<any>()
    const [value1, setValue1] = useState<any>()
    const [countryid, setCountryid] = useState(0);

   
    const [selected, setSelected] = useState<any>([1,2]);
    const options: any = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' },
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' },
        { value: 'seven', label: 'Seven' },
        { value: 'eight', label: 'Eight' },
        { value: 'nine', label: 'Nine' },
        { value: 'ten', label: 'Ten' },
    ];

    const options1:any = [
        { label: 'One', value:" 1" },
        { label: 'Two', value:" 2" },
        { label: 'Three', value: "3" },
      ];
      // You can also pass the array of preselected options;
      const [select, setSelect] = useState<any>([1,2]);

/*Tagify*/
        const [tags, setTags] = useState<string>("tag2, tag2");

        // Function to handle tag changes
        const handleChange = (e: CustomEvent<{ value: string }>) => {
        setTags(e.detail.value); // e.detail.value contains the tags in JSON format
        console.log("Tags:", e.detail.value);
        };

        // Tagify settings
        const tagifySettings: TagifySettings = {
        maxTags: 10, // Limit number of tags
        placeholder: "Add tags here...", // Placeholder text
        dropdown: {
            enabled: 0, // No dropdown by default
        },
        }; 
        const [tags1, setTags1] = useState<string>("CSS, HTML, JavaScript");

        // Function to handle tag changes
        const handleChange1 = (e: CustomEvent<{ value: string }>) => {
          setTags1(e.detail.value); // e.detail.value contains the tags in JSON format
          console.log("Tags:", e.detail.value);
        };
      
        // Tagify settings
        const tagifySettings1: TagifySettings = {
          maxTags: 10, // Limit number of tags
          placeholder: "Add more tags...", // Placeholder text
          dropdown: {
            enabled: 0, // No dropdown by default
          },
        };

        const [tags2, setTags2] = useState<string>("tag1, tag2, tag3, tag4, tag5, tag6");

        // Function to handle tag changes
        const handleChange2 = (e: CustomEvent<{ value: string }>) => {
          setTags2(e.detail.value); // e.detail.value contains the tags in JSON format
          console.log("Tags:", e.detail.value);
        };
      
        // Tagify settings
        const tagifySettings2: TagifySettings = {
          maxTags: 10, // Limit number of tags
          placeholder: "Add more tags...", // Placeholder text
          dropdown: {
            enabled: 0, // No dropdown by default
          },
        };
      
return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Forms-Formadvanced" />

        <Pageheader title="Forms" currentpage="Form Advanced" activepage="Form Advanced" />

        {/* <!-- Page Header Close --> */}
        
        {/* <!-- Start:: row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    TAGIFY JS
                                </div>
                            </div>
                            <div className="box-body basic-tagify">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4">
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="ti-form-label block">Basic Tagify</label>
                                        <Tags
                                        value={tags} // Default tags
                                        settings={tagifySettings} // Tagify settings
                                        onChange={handleChange} // Handle changes
                                        />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="ti-form-label block">Tagify With Custom Suggestions</label>
                                            <Tags
                                                value={tags1} // Default tags (CSS, HTML, JavaScript)
                                                settings={tagifySettings1} // Tagify settings
                                                onChange={(e:CustomEvent) => handleChange1(e as CustomEvent<{ value: string }>)}
                                            />
                                        
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="ti-form-label block">Diasbled User Input</label>
                                        <input name='tags-disabled-user-input' placeholder='Select tags from the list' className="form-control"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label className="ti-form-label block">Drag & Sort</label>
                                        <Tags
                                            value={tags2} // Default tags (tag1, tag2, tag3, tag4, tag5, tag6)
                                            settings={tagifySettings2} // Tagify settings
                                            onChange={(e:CustomEvent) => handleChange2(e as CustomEvent<{ value: string }>)}
                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="ti-form-label block">Tagify Single-Value Select</label>
                                        <SpkSelect name="colors" option={Tagifyselectdata} mainClass="default basic-multi-select" id="choices-multiple-default" menuplacement='auto' classNameprefix="Select2" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    TELEPHONE INPUT
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                    <div className="xl:col-span-3 col-span-12">
                                        <label htmlFor="phone" className="ti-form-label block">Basic Telephone Input</label>
                                        <PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="phone-only-countries" className="ti-form-label block">Telephone Input With  Default Country</label>
                                        <PhoneInput placeholder="Enter phone number" defaultCountry="US" value={value1} onChange={setValue1} />
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="phone-existing-number" className="ti-form-label block">Input With Only Countries</label>
                                        <CountrySelect onChange={(e: any) => { setCountryid(e.id); }} placeHolder="Select Country" className="border-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">AUTO COMPLETE</div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4">
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="autoComplete" className="ti-form-label">Search Results Of Food & Drinks Combo</label>
                                        <input type="search" className="form-control" id="autoComplete" placeholder="Placeholder" spellCheck="false" autoComplete="off" autoCapitalize="off"/>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="autoComplete-color" className="ti-form-label">Advanced Search Results For Colors</label>
                                        <input type="search" className="form-control" id="autoComplete-color" spellCheck="false" autoComplete="off" autoCapitalize="off"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-4 --> */}
                <div className="grid grid-cols-12 sm:gap-x-6 gap-x-1">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">DUAL LIST BOX</div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-6">
                                    <div className="xl:col-span-6 col-span-12">
                                        <h6>Select by class :</h6>
                                        <ListBox options={options} onChange={(newValue: any) => setSelected(newValue)} selected={selected} />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <h6>Add options and add eventListeners :</h6>
                                        <ListBox options={options1} onChange={(newValue: any) => setSelect(newValue)} selected={select} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-4 --> */}
</Fragment>
);
};

export default FormAdvanced;