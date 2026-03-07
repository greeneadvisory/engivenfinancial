"use client"
import { radio1, radio10, radio11, radio12, radio13, radio14, radio15, radio16, radio17, radio18, radio19, radio2,  radio3, radio4, radio5, radio6, radio7, radio8, radio9 } from "@/shared/data/prism/forms-prism";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Showcode from "@/shared/layouts-components/showcode/showcode";
import React, { FC, Fragment, useState } from "react";

interface ChecksRadiosProps {}

const ChecksRadios : FC<ChecksRadiosProps>  = () => {
 
       const [toggles, setToggles] = useState<{ [key: string]: string }>({});

       const toggle = (toggleKey: string) => {
         setToggles((prevState) => ({
           ...prevState,
           [toggleKey]: prevState[toggleKey] === 'on' ? 'off' : 'on',
         }));
       };
return (
<Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-Check&radios" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Checks & Radios" activepage="Checks & Radios" />

            {/* <!-- Page Header Close --> */}
          {/* <!-- Start:: row-1 --> */}
                 <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Radios" reactCode={radio1}>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" defaultChecked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Disabled" reactCode={radio2}>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                        id="flexRadioDisabled" disabled/>
                                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                                        Disabled radio
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input opacity-[0.6]" type="radio" name="flexRadioDisabled"
                                        id="flexRadioCheckedDisabled" defaultChecked disabled/>
                                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                                        Disabled checked radio
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Radio Sizes" reactCode={radio3} customCardBodyClass="sm:flex items-center justify-between custom-checkbox">
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="radio" name="Radio" id="Radio-sm"/>
                                    <label className="form-check-label" htmlFor="Radio-sm">
                                        default
                                    </label>
                                </div>  
                                <div className="form-check flex items-center gap-2 form-check-md">
                                    <input className="form-check-input" type="radio" name="Radio" id="Radio-md"/>
                                    <label className="form-check-label" htmlFor="Radio-md">
                                        Medium
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2 form-check-lg">
                                    <input className="form-check-input" type="radio" name="Radio" id="Radio-lg" defaultChecked/>
                                    <label className="form-check-label" htmlFor="Radio-lg">
                                        Large
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Checks" reactCode={radio4}>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                        defaultChecked/>
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Disabled" reactCode={radio5}>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled"
                                        disabled/>
                                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                                        Disabled checkbox
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input opacity-[0.6]" type="checkbox" value=""
                                        id="flexCheckCheckedDisabled" defaultChecked disabled/>
                                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                        Disabled checked checkbox
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Checkbox Sizes" reactCode={radio6} customCardBodyClass="sm:flex items-center justify-between custom-checkbox">
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-sm" defaultChecked/>
                                    <label className="form-check-label" htmlFor="checkebox-sm">
                                        Default
                                    </label>
                                </div>
                                <div className="form-check  form-check-md flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-md" defaultChecked/>
                                    <label className="form-check-label" htmlFor="checkebox-md">
                                        Medium
                                    </label>
                                </div>
                                <div className="form-check form-check-lg flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="checkebox-lg" defaultChecked/>
                                    <label className="form-check-label" htmlFor="checkebox-lg">
                                        Large
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                 <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Default (stacked)" reactCode={radio7}>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"
                                        disabled/>
                                    <label className="form-check-label" htmlFor="defaultCheck2">
                                        Disabled checkbox
                                    </label>
                                </div>
                                <div className="form-check flex items-center gap-2">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                        id="exampleRadios1" value="option1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                        id="exampleRadios3" value="option3" disabled/>
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        Disabled radio
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Switches" reactCode={radio8} customCardBodyClass="flex flex-col gap-y-4">
                                  <div className="flex items-center mb-2">
                                    <input type="checkbox" id="hs-basic-with-description-checked" className="ti-switch" defaultChecked/>
                                    <label htmlFor="hs-basic-with-description-checked" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Checked</label>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <input type="checkbox" id="hs-basic-with-description-unchecked" className="ti-switch"/>
                                    <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Unchecked</label>
                                  </div>
                                  <div className="flex items-center">
                                    <label className="text-sm text-gray-500 ltr:mr-3 rtl:ml-3 dark:text-white/70">On</label>
                                    <input type="checkbox" id="hs-basic-with-description" className="ti-switch"/>
                                    <label className="text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Off</label>
                                  </div>
                            </Showcode>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                 <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Inline" reactCode={radio9} customCardBodyClass="sm:flex gap-6">
                              <div className="flex gap-4"> 
                                    <div className="form-check form-check-inline flex items-center">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                            value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline flex items-center">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                                    </div>
                                    <div className="form-check form-check-inline flex items-center">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                            value="option3" disabled/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                                    </div>
                               </div>
                               <div className="flex gap-4">
                                    <div className="form-check form-check-inline flex items-center">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                    </div>
                                    <div className="form-check form-check-inline flex items-center">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                    </div>
                                    <div className="form-check form-check-inline flex items-center">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio3" value="option3" disabled/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                                    </div>
                               </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Reverse" reactCode={radio10}>
                                <div className="form-check form-check-reverse mb-4">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="reverseCheck1"/>
                                    <label className="form-check-label" htmlFor="reverseCheck1">
                                        Reverse checkbox
                                    </label>
                                </div>
                                <div className="form-check form-check-reverse mb-4">
                                    <input className="form-check-input" type="checkbox" value=""
                                        id="reverseCheck2" disabled/>
                                    <label className="form-check-label" htmlFor="reverseCheck2">
                                        Disabled reverse checkbox
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}

                   {/* <!-- Start:: row-4 --> */}
                   <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <Showcode title="Toggle Switch-1 Sizes" customCardClass="" customCardBodyClass="flex flex-col" reactCode={radio11}>
                                <div className="flex items-center flex-wrap mb-4">
                                    <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                                    <div className={`toggle  toggle-sm mb-0 ${toggles['togglesm'] === 'on' || !toggles['togglesm'] ? 'on' : ''}`} onClick={() => toggle('togglesm')}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap mb-4">
                                    <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>
                                    <div className={`toggle mb-0  toggle-secondary ${toggles['default'] === 'on' || !toggles['default'] ? 'on' : ''}`} onClick={() => toggle('default')}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                                    <div className={`toggle toggle-lg mb-0  toggle-success ${toggles['large'] === 'on' || !toggles['large'] ? 'on' : ''}`} onClick={() => toggle('large')}>
                                        <span></span>
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 ">
                            <Showcode title="Toggle Switch-2 Sizes" customCardClass="" customCardBodyClass="" reactCode={radio12}>
                                <div className="flex items-center flex-wrap mb-4">
                                    <div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                                    <div className="custom-toggle-switch toggle-sm ms-2">
                                        <input id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                        <label htmlFor="size-sm" className="label-primary sm:flex block sm:mt-0 mt-3"></label>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap mb-4">
                                    <div className=""><p className="text-muted m-0">Default toggle switch</p></div>
                                    <div className="custom-toggle-switch toggle-md ms-2">
                                        <input id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                        <label htmlFor="size-default" className="label-secondary mb-1 sm:flex block sm:mt-0 mt-3"></label>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap mb-4">
                                    <div className=""><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                                    <div className="custom-toggle-switch toggle-lg ms-2 mb-3">
                                        <input id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                        <label htmlFor="size-lg" className="label-success sm:flex block sm:mt-0 mt-3"></label>
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                </div>
                {/* <!-- End:: row-4 --> */}

                {/* <!-- Start:: row-5 --> */}

                <div className="grid xxl:grid-cols-5 xl:grid-cols-3 grid-cols-1 gap-x-6">
                    <div className="col-auto">
                            <Showcode title="Colored Checkboxes" customCardClass="" customCardBodyClass="" reactCode={radio13}>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="primaryChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="primaryChecked">
                                        Primary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-secondary" type="checkbox" value="" id="secondaryChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="secondaryChecked">
                                        Secondary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-warning" type="checkbox" value="" id="warningChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="warningChecked">
                                        Warning
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-info" type="checkbox" value="" id="infoChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="infoChecked">
                                        Info
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="successChecked">
                                        Success
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-danger" type="checkbox" value="" id="dangerChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="dangerChecked">
                                        Danger
                                    </label>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input form-checked-dark  dark:checked:!bg-white/50" type="checkbox" value="" id="darkChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="darkChecked">
                                        Dark
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="col-auto">
                            <Showcode title="Outline Checkboxes" customCardClass="" customCardBodyClass="" reactCode={radio14}>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline" type="checkbox" value="" id="primaryoutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="primaryoutlineChecked">
                                        Primary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-secondary" type="checkbox" value="" id="secondaryoutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="secondaryoutlineChecked">
                                        Secondary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-warning" type="checkbox" value="" id="warningoutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="warningoutlineChecked">
                                        Warning
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-info" type="checkbox" value="" id="infooutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="infooutlineChecked">
                                        Info
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-success" type="checkbox" value="" id="successoutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="successoutlineChecked">
                                        Success
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-danger" type="checkbox" value="" id="dangeroutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="dangeroutlineChecked">
                                        Danger
                                    </label>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input form-checked-outline form-checked-dark" type="checkbox" value="" id="darkoutlineChecked" defaultChecked/>
                                    <label className="form-check-label" htmlFor="darkoutlineChecked">
                                        Dark
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="col-auto">
                            <Showcode title="Colored Radios" customCardClass="" customCardBodyClass="" reactCode={radio15}>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="primaryRadio" id="primaryRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="primaryRadio">
                                        Primary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-secondary" type="radio" name="secondaryRadio" id="secondaryRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="secondaryRadio">
                                        Secondary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-warning" type="radio" name="warningRadio" id="warningRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="warningRadio">
                                        Warning
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-info" type="radio" name="InfoRadio" id="InfoRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="InfoRadio">
                                        Info
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-success" type="radio" name="successRadio" id="successRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="successRadio">
                                        Success
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-danger" type="radio" name="dangerRadio" id="dangerRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="dangerRadio">
                                        Danger
                                    </label>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input form-checked-dark dark:checked:!bg-white/50" type="radio" name="darkRadio" id="darkRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="darkRadio">
                                        Dark
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="col-auto">
                            <Showcode title="Outline Radios" customCardClass="" customCardBodyClass="" reactCode={radio16}>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline" type="radio" name="primaryoutlineRadio" id="primaryoutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="primaryoutlineRadio">
                                        Primary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-secondary" type="radio" name="secondaryoutlineRadio" id="secondaryoutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="secondaryoutlineRadio">
                                        Secondary
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-warning" type="radio" name="warningoutlineRadio" id="warningoutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="warningoutlineRadio">
                                        Warning
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-info" type="radio" name="InfooutlineRadio" id="InfooutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="InfooutlineRadio">
                                        Info
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-success" type="radio" name="successoutlineRadio" id="successoutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="successoutlineRadio">
                                        Success
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input form-checked-outline form-checked-danger" type="radio" name="dangeroutlineRadio" id="dangeroutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="dangeroutlineRadio">
                                        Danger
                                    </label>
                                </div>
                                <div className="form-check mb-0">
                                    <input className="form-check-input form-checked-outline form-checked-dark" type="radio" name="darkoutlineRadio" id="darkoutlineRadio" defaultChecked/>
                                    <label className="form-check-label" htmlFor="darkoutlineRadio">
                                        Dark
                                    </label>
                                </div>
                            </Showcode>
                    </div>
                    <div className="col-auto">
                            <Showcode title="Switches Colors" customCardClass="" customCardBodyClass="" reactCode={radio17}>
                                <div className="form-check form-switch mb-2">
                                    <input type="checkbox" id="hs-xs-solid-switch1" className="ti-switch ti-switch-custom" defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch1">Primary</label>
                                </div>
                                <div className="form-check form-switch mb-2">
                                    <input type="checkbox" id="hs-xs-solid-switch2" className="ti-switch ti-switch-custom secondary" defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch2">Secondary</label>
                                </div>
                                <div className="form-check form-switch mb-2">
                                    <input type="checkbox" id="hs-xs-solid-switch3" className="ti-switch ti-switch-custom warning" defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch3">Warning</label>
                                </div>
                                <div className="form-check form-switch mb-2">
                                    <input type="checkbox" id="hs-xs-solid-switch4" className="ti-switch ti-switch-custom info" defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch4">Info</label>
                                </div>
                                <div className="form-check form-switch mb-2">
                                    <input type="checkbox" id="hs-xs-solid-switch5" className="ti-switch ti-switch-custom success" defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch5">Success</label>
                                </div>
                                <div className="form-check form-switch mb-2">
                                    <input type="checkbox" id="hs-xs-solid-switch6" className="ti-switch ti-switch-custom danger" defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch6">Danger</label>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input type="checkbox" id="hs-xs-solid-switch7" className="ti-switch ti-switch-custom dark " defaultChecked/>
                                    <label className="form-check-label" htmlFor="hs-xs-solid-switch7">Dark</label>
                                </div>
                            </Showcode>
                    </div>
                </div>

                {/* <!-- End:: row-5 --> */}


                {/* <!-- Start:: row-6 --> */}
                 <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12  lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Toggle Switches Style-1" customCardClass="" customCardBodyClass="" reactCode={radio18}>
                                <div className="grid grid-cols-12 gap-y-1">
                                    <div className="xl:col-span-4 col-span-12">
                                            <div className={`toggle  ${toggles['switch'] === 'on' || !toggles['switch']? 'on' : ''}`} onClick={() => toggle('switch')}>
                                                <span></span>
                                            </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle mb-3  toggle-secondary ${toggles['secondary'] === 'on' || !toggles['secondary']? 'on' : ''}`} onClick={() => toggle('secondary')}>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle mb-3  toggle-warning ${toggles['warning'] === 'on' || !toggles['warning']? 'on' : ''}`} onClick={() => toggle('warning')} >
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle mb-3  toggle-info ${toggles['info'] === 'on' || !toggles['info']? 'on' : ''}`} onClick={() => toggle('info')}  >
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle mb-3  toggle-success ${toggles['success'] === 'on' || !toggles['success']? 'on' : ''}`} onClick={() => toggle('success')} >
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle mb-3  toggle-danger ${toggles['danger'] === 'on' || !toggles['danger']? 'on' : ''}`} onClick={() => toggle('danger')}>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle mb-3  toggle-light ${toggles['light'] === 'on' || !toggles['light']? 'on' : ''}`} onClick={() => toggle('light')} >
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className={`toggle ms-sm-2  toggle-dark ${toggles['dark'] === 'on' || !toggles['dark']? 'on' : ''}`} onClick={() => toggle('dark')}>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12  lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Toggle Switches Style-2" customCardClass="" customCardBodyClass="" reactCode={radio19}>
                                <div className="grid grid-cols-12 gap-y-1">
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchPrimary" className="label-primary"></label><span className="ms-3">Primary</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchSecondary" className="label-secondary"></label><span className="ms-3">Secondary</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchWarning" className="label-warning"></label><span className="ms-3">Warning</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchInfo" className="label-info"></label><span className="ms-3">Info</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchSuccess" className="label-success"></label><span className="ms-3">Success</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchDanger" className="label-danger"></label><span className="ms-3">Danger</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchLight" className="label-light"></label><span className="ms-3">Light</span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <div className="custom-toggle-switch flex items-center mb-4">
                                            <input id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked/>
                                            <label htmlFor="toggleswitchDark" className="label-dark"></label><span className="ms-3">Dark</span>
                                        </div>
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                </div>
                {/* <!-- End:: row-6 --> */}

</Fragment>
);
};

export default ChecksRadios;