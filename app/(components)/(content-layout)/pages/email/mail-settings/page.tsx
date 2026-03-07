"use client"
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Accountoptions, Languageoptions, Maximumoptions, MaxLimitoptions } from "@/shared/data/pages/email/mailsettingsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface MailSettingsProps {}

const MailSettings : FC<MailSettingsProps>  = () => {

    const [success1, setsuccess1] = useState("off");
    const [success2, setsuccess2] = useState("on");
    const [success3, setsuccess3] = useState("off");
    const [success4, setsuccess4] = useState("off");
    const [success5, setsuccess5] = useState("off");
    const [success6, setsuccess6] = useState("off");
    const [success7, setsuccess7] = useState("off");
    const [success8, setsuccess8] = useState("on");
    const [success9, setsuccess9] = useState("on");
    const [success10, setsuccess10] = useState("on");
    const [success11, setsuccess11] = useState("on");
    const [success12, setsuccess12] = useState("off");
    const [success13, setsuccess13] = useState("on");
    const [success14, setsuccess14] = useState("on");
    const [success15, setsuccess15] = useState("on");
    const [success16, setsuccess16] = useState("on");
    const [success17, setsuccess17] = useState("on");
    const [success18, setsuccess18] = useState("off");
    const [success19, setsuccess19] = useState("on");
    const [success20, setsuccess20] = useState("on");
    const [success21, setsuccess21] = useState("on");
    const [success22, setsuccess22] = useState("on");
return (
<Fragment>
            {/* { <!-- Start::page-header --> */}
                <Seo title="Pages-Mailsettings" />

                <Pageheader title="Pages" subtitle="Email" currentpage="Mail Settings" activepage="Mail Settings" />

            {/* { <!-- End::page-header -->  */}
            {/* { <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6 mb-5">
                    <div className="xl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <ul className="nav nav-tabs flex-col nav-tabs-header mb-0 mail-settings-tab" role="tablist">
                                    <li className="nav-item me-0">
                                        <a className="nav-link flex items-center w-full active" role="tab"
                                            data-hs-tab="#email-settings"><i
                                                className="ri-mail-line me-2 align-middle text-[14px] leading-none text-primary"></i>Email</a>
                                    </li>
                                    <li className="nav-item me-0">
                                        <a className="nav-link flex items-center w-full" role="tab"
                                            data-hs-tab="#security"><i
                                                className="ri-lock-star-line me-2 align-middle text-[14px] leading-none text-primary"></i>Security</a>
                                    </li>
                                    <li className="nav-item me-0">
                                        <a className="nav-link flex items-center w-full" role="tab"
                                            data-hs-tab="#notification-settings"><i
                                                className="ri-notification-3-line me-2 align-middle text-[14px] leading-none text-primary"></i>Notifications</a>
                                    </li>
                                    <li className="nav-item me-0">
                                        <a className="nav-link flex items-center w-full" role="tab"
                                            data-hs-tab="#account-settings"><i
                                                className="ri-shield-user-line me-2 align-middle text-[14px] leading-none text-primary"></i>Account
                                            Settings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">Social Links</div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12"> <label htmlFor="facebook"
                                            className="form-label">Facebook :</label>
                                        <input type="text" className="form-control !bg-light dark:!bg-light" id="facebook"
                                            placeholder="https://" defaultValue="https://www.facebook.com"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12"> <label htmlFor="Twitter"
                                            className="form-label">Twitter :</label>
                                        <input type="text" className="form-control !bg-light dark:!bg-light" id="Twitter"
                                            placeholder="https://" defaultValue="https://twitter.com"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12"> <label htmlFor="Pinterest"
                                            className="form-label">Pinterest:</label>
                                        <input type="text" className="form-control !bg-light dark:!bg-light" id="Pinterest"
                                            placeholder="https://" defaultValue="https://in.pinterest.com"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12"> <label htmlFor="Linkedin"
                                            className="form-label">Linkedin :</label>
                                        <input type="text" className="form-control !bg-light dark:!bg-light" id="Linkedin"
                                            placeholder="https://" defaultValue="https://www.linkedin.com"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-9 col-span-12">
                        <div className="box">
                            <div className="box-body p-0">
                                <div className="tab-content border-0">
                                    <div className="tab-pane active show p-0" id="email-settings" role="tabpanel">
                                        <ul className="ti-list-group list-group-flush !rounded-none">
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-6 gap-y-2 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Keyboard Shortcuts
                                                            :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="keyboard-enable" id="keyboard-enable1"/>
                                                            <label className="form-check-label" htmlFor="keyboard-enable1">
                                                                Keyboard Shortcuts Enable
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="keyboard-enable" id="keyboard-disable2"
                                                                defaultChecked/>
                                                            <label className="form-check-label" htmlFor="keyboard-disable2">
                                                                Keyboard Shortcuts Disable
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className={`toggle toggle-success mb-0 sm:float-end ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-6 gap-y-2 justify-between">
                                                    <div
                                                        className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Menu View :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Default View
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="flexRadioDefault" id="flexRadioDefault2"
                                                                defaultChecked/>
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Advanced View
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className={`toggle toggle-success mb-0 sm:float-end ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-6 gap-y-2 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Images :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="images-open" id="images-open1"/>
                                                            <label className="form-check-label" htmlFor="images-open1">
                                                                Always Open Images
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="images-open" id="images-hide2" defaultChecked/>
                                                            <label className="form-check-label" htmlFor="images-hide2">
                                                                Ask For Permission
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className={`toggle toggle-success mb-0 sm:float-end ${success3}`} onClick={() => { success3 == "on" ? setsuccess3("off") : setsuccess3("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-6 gap-y-2 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Mail Send Action
                                                            :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                                id="on-keyboard" defaultChecked/>
                                                            <label className="form-check-label" htmlFor="on-keyboard">
                                                                On Keyboard Action
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue=""
                                                                id="on-buttonclick"/>
                                                            <label className="form-check-label" htmlFor="on-buttonclick">
                                                                On Button Click
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="sm:float-end">
                                                            <Link scroll={false} href="#!"
                                                                className="ti-btn ti-btn-outline-success ti-btn-sm">Learn-more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Maximum Mails Per
                                                            Page :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <SpkSelect name="colors" option={Maximumoptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Maximumoptions[0]]}
                                                            />
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className={`toggle toggle-success mb-0 sm:float-end ${success4}`} onClick={() => { success4 == "on" ? setsuccess4("off") : setsuccess4("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-2 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Mail Composer
                                                            :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="flex gap-4 items-center">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                    name="mail-composer" id="mail-composeron1"/>
                                                                <label className="form-check-label" htmlFor="mail-composeron1">
                                                                    Mail Composer On
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                    name="mail-composer" id="mail-composeroff2"
                                                                    defaultChecked/>
                                                                <label className="form-check-label" htmlFor="mail-composeroff2">
                                                                    Mail Composer Off
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                    <div className={`toggle toggle-success mb-0 sm:float-end ${success5}`} onClick={() => { success5 == "on" ? setsuccess5("off") : setsuccess5("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Language :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <label htmlFor="mail-language" className="form-label">Languages
                                                            :</label>
                                                            <SpkSelect multi name="colors" option={Languageoptions}
                                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languageoptions[0]]}
                                                            />
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div id="mail-languages" className={`toggle toggle-success mb-0 sm:float-end ${success6}`} onClick={() => { success6 == "on" ? setsuccess6("off") : setsuccess6("on"); }} >
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-2 justify-between">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[14px] font-medium mb-0">Auto Correct :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="flex gap-4 items-center">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                    name="auto-correct" id="auto-correcton1"/>
                                                                <label className="form-check-label" htmlFor="auto-correcton1">
                                                                    Auto Correct On
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                    name="auto-correct" id="auto-correctoff2"
                                                                    defaultChecked/>
                                                                <label className="form-check-label" htmlFor="auto-correctoff2">
                                                                    Auto Correct Off
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div id="auto-correct" className={`toggle toggle-success mb-0 sm:float-end ${success7}`} onClick={() => { success7 == "on" ? setsuccess7("off") : setsuccess7("on"); }} >
                                                                <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane p-0 hidden" id="security" role="tabpanel">
                                        <ul className="ti-list-group list-group-flush list-none !rounded-none">
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-medium">Logging In</p>
                                                        <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                            Security settings related to logging into our email account
                                                            and taking down account if any mischevious action happended.
                                                        </p>
                                                    </div>
                                                    <div className="xl:col-span-8 col-span-12">
                                                        <div
                                                            className="sm:flex block items-top justify-between mt-sm-0 mt-3">
                                                            <div className="mail-security-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Max Limit for
                                                                    login attempts</p>
                                                                <p
                                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-sm-0 mb-2">
                                                                    Account will freeze for 24hrs while attempt to login
                                                                    with wrong credentials for selected number of times
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <SpkSelect name="colors" option={MaxLimitoptions} mainClass="basic-multi-select"
                                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[MaxLimitoptions[0]]}
                                                                    />
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top justify-between mt-3">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">Account Freeze
                                                                    time management</p>
                                                                <p
                                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-sm-0 mb-2">
                                                                    You can change the time for the account freeze when
                                                                    attempts for </p>
                                                            </div>
                                                            <div>
                                                                <SpkSelect name="colors" option={Accountoptions} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Accountoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-medium">Password Requirements
                                                        </p>
                                                        <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                            Security settings related to password strength.</p>
                                                    </div>
                                                    <div className="xl:col-span-8 col-span-12">
                                                        <div
                                                            className="sm:flex block items-top justify-between mt-sm-0 mt-3 gap-4">
                                                            <div className="mail-security-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Minimum number
                                                                    of characters in the password</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    There should be a minimum number of characters for a
                                                                    password to be validated that shouls be set here.
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="8"/>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top justify-between mt-3">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">Contain A Number
                                                                </p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Password should contain a number.</p>
                                                            </div>
                                                            <div id="password-number" className={`toggle toggle-success mb-0 sm:float-end ${success8}`} onClick={() => { success8 == "on" ? setsuccess8("off") : setsuccess8("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top justify-between mt-3">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">Contain A
                                                                    Special Character</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Password should contain a special Character.</p>
                                                            </div>
                                                            <div id="password-special-character" className={`toggle toggle-success mb-0 sm:float-end ${success9}`} onClick={() => { success9 == "on" ? setsuccess9("off") : setsuccess9("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top justify-between mt-3">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">Atleast One
                                                                    Capital Letter</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Password should contain atleast one capital letter.
                                                                </p>
                                                            </div>
                                                            <div id="password-capital" className={`toggle toggle-success mb-0 sm:float-end ${success10}`} onClick={() => { success10 == "on" ? setsuccess10("off") : setsuccess10("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top justify-between mt-3">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">Maximum Password
                                                                    Length</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Maximum password lenth should be selected here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="16"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-medium">Unknown Chats</p>
                                                        <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                            Security settings related to unknown chats.</p>
                                                    </div>
                                                    <div className="xl:col-span-8 col-span-12 ms-auto">
                                                        <div className="btn-group inline-flex" role="group"
                                                            aria-label="Basic radio toggle button group">
                                                            <input type="radio" className="btn-check opacity-0 absolute"
                                                                name="strap-material" id="strap1" defaultChecked/>
                                                            <label
                                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex ti-btn-outline-light z-0 !rounded-e-none !border-e-0 sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                                htmlFor="strap1">
                                                                Show
                                                            </label>
                                                            <input type="radio" className="btn-check  opacity-0 absolute"
                                                                name="strap-material" id="strap31"/>
                                                            <label
                                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex ti-btn-outline-light !rounded-s-none !text-defaulttextcolor z-0  sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                                htmlFor="strap31">
                                                                Hide
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane p-0 hidden" id="notification-settings" role="tabpanel">
                                        <ul className="ti-list-group list-group-flush list-none !rounded-none">
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-medium">Email Notifications</p>
                                                        <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                            Email notifications are the notifications you will receeive
                                                            when you are offline, you can customize them by enabling or
                                                            disabling them.</p>
                                                    </div>
                                                    <div className="xl:col-span-7 col-span-12">
                                                        <div className="flex items-top justify-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Updates &
                                                                    Features</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Notifications about new updates and their features.
                                                                </p>
                                                            </div>
                                                            <div id="update-features" className={`toggle toggle-success mb-0 sm:float-end ${success11}`} onClick={() => { success11 == "on" ? setsuccess11("off") : setsuccess11("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Early Access</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Users are selected for beta testing of new
                                                                    update,notifications relating or participate in any
                                                                    of paid product promotion.</p>
                                                            </div>
                                                            <div id="early-access" className={`toggle toggle-success mb-0 sm:float-end ${success12}`} onClick={() => { success12 == "on" ? setsuccess12("off") : setsuccess12("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Email Shortcuts
                                                                </p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Shortcut notifications for email.</p>
                                                            </div>
                                                            <div id="email-shortcut" className={`toggle toggle-success mb-0 sm:float-end ${success13}`} onClick={() => { success13 == "on" ? setsuccess13("off") : setsuccess13("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">New Mails</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Notifications related to new mails received.</p>
                                                            </div>
                                                            <div id="new-mails" className={`toggle toggle-success mb-0 sm:float-end ${success14}`} onClick={() => { success14 == "on" ? setsuccess14("off") : setsuccess14("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Mail Chat
                                                                    Messages</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Any of new messages are received will be updated
                                                                    through notifications.</p>
                                                            </div>
                                                            <div id="mail-chat-messages" className={`toggle toggle-success mb-0 sm:float-end ${success15}`} onClick={() => { success15 == "on" ? setsuccess15("off") : setsuccess15("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-list-group-item">
                                                <div className="grid grid-cols-12 gap-x-5 gap-y-3">
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-medium">Push Notifications</p>
                                                        <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                            Push notifications are recieved when you are online, you can
                                                            customize them by enabling or disabling them.</p>
                                                    </div>
                                                    <div className="xl:col-span-7 col-span-12">
                                                        <div className="flex items-top justify-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">New Mails</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Notifications related to new mails received.</p>
                                                            </div>
                                                            <div id="push-new-mails" className={`toggle toggle-success mb-0 sm:float-end ${success16}`} onClick={() => { success16 == "on" ? setsuccess16("off") : setsuccess16("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Mail Chat
                                                                    Messages</p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Any of new messages are received will be updated
                                                                    through notifications.</p>
                                                            </div>
                                                            <div id="push-mail-chat-messages" className={`toggle toggle-success mb-0 sm:float-end ${success17}`} onClick={() => { success17 == "on" ? setsuccess17("off") : setsuccess17("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[14px] mb-1 font-medium">Mail Extensions
                                                                </p>
                                                                <p
                                                                    className="text-xs mb-0 text-textmuted dark:text-textmuted/50">
                                                                    Notifications related to the extensions received by
                                                                    new emails and thier propertied also been displayed.
                                                                </p>
                                                            </div>
                                                            <div id="mail-extensions" className={`toggle toggle-success mb-0 sm:float-end ${success18}`} onClick={() => { success18 == "on" ? setsuccess18("off") : setsuccess18("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane p-0 hidden" id="account-settings" role="tabpanel">
                                        <div className="grid grid-cols-12 gap-x-6 gap-y-3">
                                            <div className="xxl:col-span-7 col-span-12">
                                                <div className="box shadow-none mb-0">
                                                    <div className="box-body">
                                                        <div className="sm:flex block items-top mb-4 justify-between">
                                                            <div className="w-[75%]">
                                                                <p className="text-[14px] mb-1 font-medium">Two Step
                                                                    Verification</p>
                                                                <p
                                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-0">
                                                                    Two-step verification provides enhanced security
                                                                    measures and helps prevent unauthorized access and
                                                                    fraudulent activities.</p>
                                                            </div>
                                                            <div id="two-step-verification" className={`toggle toggle-success mb-0 sm:float-end ${success19}`} onClick={() => { success19 == "on" ? setsuccess19("off") : setsuccess19("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top mb-4 justify-between">
                                                            <div className="mb-sm-0 mb-2 w-[75%]">
                                                                <p className="text-[14px] mb-2 font-medium">Authentication
                                                                </p>
                                                                <div className="btn-group inline-flex" role="group"
                                                                    aria-label="Basic radio toggle button group">
                                                                    <input type="radio"
                                                                        className="btn-check opacity-0 absolute"
                                                                        name="strap-material" id="strap11" defaultChecked/>
                                                                    <label
                                                                        className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex ti-btn-outline-light z-0 !rounded-e-none !border-e-0 sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                                        htmlFor="strap11"><i
                                                                        className="ri-lock-unlock-line me-1 align-middle inline-block"></i>Pin
                                                                    </label> <input type="radio"
                                                                        className="btn-check  opacity-0 absolute"
                                                                        name="strap-material" id="strap2"/> 
                                                                        <label
                                                                        className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex ti-btn-outline-light !text-defaulttextcolor !rounded-none !border-e-0 z-0  sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                                        htmlFor="strap2"><i
                                                                        className="ri-lock-password-line me-1 align-middle inline-block"></i>Password
                                                                    </label>
                                                                     <input type="radio"
                                                                        className="btn-check  opacity-0 absolute"
                                                                        name="strap-material" id="strap3"/> 
                                                                        <label
                                                                        className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex ti-btn-outline-light !rounded-s-none !text-defaulttextcolor z-0  sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                                        htmlFor="strap3"><i
                                                                        className="ri-fingerprint-line me-1 align-middle inline-block"></i>Finger
                                                                    Print
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div id="authentication" className={`toggle toggle-success mb-0 sm:float-end ${success20}`} onClick={() => { success20 == "on" ? setsuccess20("off") : setsuccess20("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top mb-4 justify-between">
                                                            <div className="w-[75%]">
                                                                <p className="text-[14px] mb-1 font-medium">Recovery Mail
                                                                </p>
                                                                <p
                                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-0">
                                                                    In case of forgetting passwords, emails are sent to
                                                                    aana14@gmail.com.</p>
                                                            </div>
                                                            <div id="recovery-mail" className={`toggle toggle-success mb-0 sm:float-end ${success21}`} onClick={() => { success21 == "on" ? setsuccess21("off") : setsuccess21("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-top mb-4 justify-between">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">SMS Recovery</p>
                                                                <p
                                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-0">
                                                                    In case of recovery, SMS messages are sent to
                                                                    9876543xx</p>
                                                            </div>
                                                            <div id="sms-recovery" className={`toggle toggle-success mb-0 sm:float-end ${success22}`} onClick={() => { success22 == "on" ? setsuccess22("off") : setsuccess22("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-top justify-between">
                                                            <div>
                                                                <p className="text-[14px] mb-1 font-medium">Reset Password
                                                                </p>
                                                                <p
                                                                    className="text-xs text-textmuted dark:text-textmuted/50">
                                                                    Password should be min of <b className="text-success">8
                                                                        digits<sup>*</sup></b>,atleast <b
                                                                        className="text-success">One Capital
                                                                        letter<sup>*</sup></b> and <b
                                                                        className="text-success">One Special
                                                                        Character<sup>*</sup></b> included.</p>
                                                                <div className="mb-2">
                                                                    <label htmlFor="current-password"
                                                                        className="form-label">Current Password</label>
                                                                    <input type="text" className="form-control"
                                                                        id="current-password"
                                                                        placeholder="Current Password"/>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="new-password" className="form-label">New
                                                                        Password</label>
                                                                    <input type="text" className="form-control"
                                                                        id="new-password" placeholder="New Password"/>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <label htmlFor="confirm-password"
                                                                        className="form-label">Confirm Password</label>
                                                                    <input type="text" className="form-control"
                                                                        id="confirm-password"
                                                                        placeholder="Confirm Password"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xxl:col-span-5 col-span-12">
                                                <div className="box shadow-none mb-0">
                                                    <div className="box-header justify-between sm:flex block">
                                                        <div className="box-title">Registered Devices</div>
                                                        <div className="mt-sm-0 mt-2">
                                                            <SpkButton variant="primary" Size="sm" customClass="ti-btn ti-btn-sm">Signout from
                                                                all devices</SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="box-body">
                                                        <ul className="ti-list-group">
                                                            <li className="ti-list-group-item">
                                                                <div className="sm:flex block items-top">
                                                                    <div className="leading-none mb-sm-0 mb-2"><i
                                                                            className="bi bi-phone me-2 text-[1rem] align-middle text-textmuted dark:text-textmuted/50"></i>
                                                                    </div>
                                                                    <div className="leading-none flex-auto">
                                                                        <p className="mb-1">
                                                                            <span
                                                                                className="font-medium">Mobile-LG-1023</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span
                                                                                className="text-textmuted dark:text-textmuted/50 text-[11px]">Manchester,
                                                                                UK-Nov 30, 04:45PM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2" Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" Icon={true} IconClass="fe fe-more-vertical">
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item"href="#!">Another action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Somethingelse here</Link></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item">
                                                                <div className="sm:flex block items-top">
                                                                    <div className="leading-none mb-sm-0 mb-2"><i
                                                                            className="bi bi-laptop me-2 text-[1rem] align-middle text-textmuted dark:text-textmuted/50"></i>
                                                                    </div>
                                                                    <div className="leading-none flex-auto">
                                                                        <p className="mb-1">
                                                                            <span
                                                                                className="font-medium">Lenovo-1291203</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span
                                                                                className="text-textmuted dark:text-textmuted/50 text-[11px]">England,
                                                                                UK-Aug 12, 12:25PM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2" Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" Icon={true} IconClass="fe fe-more-vertical">
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item"href="#!">Another action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Somethingelse here</Link></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item">
                                                                <div className="sm:flex block items-top">
                                                                    <div className="leading-none mb-sm-0 mb-2"><i
                                                                            className="bi bi-laptop me-2 text-[1rem] align-middle text-textmuted dark:text-textmuted/50"></i>
                                                                    </div>
                                                                    <div className="leading-none flex-auto">
                                                                        <p className="mb-1">
                                                                            <span
                                                                                className="font-medium">Macbook-Suzika</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span
                                                                                className="text-textmuted dark:text-textmuted/50 text-[11px]">Brightoon,
                                                                                UK-Jul 18, 8:34AM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2" Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" Icon={true} IconClass="fe fe-more-vertical">
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item"href="#!">Another action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Somethingelse here</Link></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item">
                                                                <div className="sm:flex block items-top">
                                                                    <div className="leading-none mb-sm-0 mb-2"><i
                                                                            className="bi bi-pc-display-horizontal me-2 text-[1rem] align-middle text-textmuted dark:text-textmuted/50"></i>
                                                                    </div>
                                                                    <div className="leading-none flex-auto">
                                                                        <p className="mb-1">
                                                                            <span
                                                                                className="font-medium">Apple-Desktop</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span
                                                                                className="text-textmuted dark:text-textmuted/50 text-[11px]">Darlington,
                                                                                UK-Jan 14, 11:14AM</span>
                                                                        </p>
                                                                    </div>
                                                                    <SpkDropdown Customclass="mt-sm-0 mt-2" Linktag={true} Linkclass="ti-btn ti-btn-icon ti-btn-sm bg-light ti-dropdown-toggle hs-dropdown-toggle" Icon={true} IconClass="fe fe-more-vertical">
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item"href="#!">Another action</Link></li>
                                                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Somethingelse here</Link></li>
                                                                    </SpkDropdown>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer border-t-0 flex justify-between gap-2 flex-wrap">
                                <SpkButton variant="soft-primary1" customClass="ti-btn">
                                    Restore Defaults
                                </SpkButton>
                                <div className="ms-auto">
                                    <SpkButton variant="primary" customClass="ti-btn">
                                        Save Changes
                                    </SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* { <!--End::row-1 --> */}
</Fragment>
);
};

export default MailSettings;