"use client"
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

interface ProfileSettingProps {}

const ProfileSetting : FC<ProfileSettingProps>  = () => {

    const [success1, setsuccess1] = useState("on");
    const [success2, setsuccess2] = useState("off");
    const [success3, setsuccess3] = useState("off");
    const [success4, setsuccess4] = useState("on");

    interface Languageoptions1 {
        value: string;
        label: string;
    }
    const Languagedata: Languageoptions1[] = [
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Korean', label: 'Korean' },
        { value: 'Us English', label: 'Us English' },
        { value: 'Hindi', label: 'Hindi' },

    ];
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Pages-Profilesettings" />

                <Pageheader title="Pages" currentpage="Profile Settings" activepage="Profile Settings" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="">
                    <div className="max-w-[75%] mx-auto">
                        <div className="box">
                            <ul className="nav nav-tabs tab-style-8 scaleX rounded m-4 profile-settings-tab gap-2 flex flex-wrap" id="myTab4" role="tablist">
                                <li className="nav-item me-1" role="presentation">
                                    <SpkButton variant="" customClass="nav-link  !px-6 text-primary rounded-md bg-primary/10 active" Tab="#account-pane" Role="tab">Account</SpkButton>
                                </li>
                                <li className="nav-item me-1" role="presentation">
                                    <SpkButton variant="" customClass="nav-link  !px-6 text-primary rounded-md bg-primary/10" Tab="#notification-tab-pane" Role="tab">Notification</SpkButton>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <SpkButton variant="" customClass="nav-link  !px-6 text-primary rounded-md bg-primary/10" Tab="#security-tab-pane" Role="tab">Security</SpkButton>
                                </li>
                            </ul>
                            <div className="p-4 border-b border-t border-dashed border-defaultborder dark:border-defaultborder/10 tab-content">
                                <div className="tab-pane show active overflow-hidden p-0 border-0" id="account-pane" role="tabpanel">
                                    <div className="flex justify-between items-center mb-4 flex-wrap gap-1">
                                        <div className="font-semibold block text-[15px]">Account Settings :</div>
                                        <div className="ti-btn ti-btn-primary ti-btn-sm"><i className="ri-loop-left-line leading-none me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                        <div className="xl:col-span-12 col-span-12">
                                            <div className="flex items-start flex-wrap gap-4">
                                                <div>
                                                    <span className="avatar avatar-xxl">
                                                        <img src="../../assets/images/faces/9.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-medium block mb-2">Profile Picture</span>
                                                    <div className="btn-list mb-1">
                                                        <SpkButton variant="primary"  Size="sm" customClass="ti-btn btn-wave me-2"><i className="ri-upload-2-line me-1"></i>Change Image</SpkButton>
                                                        <SpkButton variant="soft-primary1"  Size="sm" customClass="ti-btn btn-wave"><i className="ri-delete-bin-line me-1"></i>Remove</SpkButton>
                                                    </div>
                                                    <span className="block text-xs text-textmuted dark:text-textmuted/50">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="profile-user-name" className="form-label">User Name :</label>
                                            <input type="text" className="form-control" id="profile-user-name"  placeholder="Enter Name"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="profile-email" className="form-label">Email :</label>
                                            <input type="email" className="form-control" id="profile-email"  placeholder="Enter Email"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="profile-designation" className="form-label">Designation :</label>
                                            <input type="text" className="form-control" id="profile-designation"  placeholder="Enter Designation"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="profile-language" className="form-label">Language :</label>
                                            <SpkSelect searchable name="colors" option={Languagedata}
                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languagedata[2]]}
                                            />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="profile-phn-no" className="form-label">Phone No :</label>
                                            <input type="text" className="form-control" id="profile-phn-no"  placeholder="Enter Number"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="website" className="form-label">Website :</label>
                                            <input type="text" className="form-control !bg-light dark:!bg-light" id="website" placeholder="https://" defaultValue="https://www.website.com"/>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="profile-address" className="form-label">Address :</label>
                                            <textarea className="form-control" id="profile-address" rows={3} placeholder="Address"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane overflow-hidden p-0 border-0 hidden" id="notification-tab-pane" role="tabpanel">
                                    <div className="flex justify-between items-center mb-4 flex-wrap gap-1">
                                        <div className="font-semibold block text-[15px]">Notifications Settings:</div>
                                        <div className="ti-btn ti-btn-primary ti-btn-sm"><i className="ri-loop-left-line leading-none me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="grid grid-cols-12 sm:gap-x-6 gx-5 gap-y-3">
                                        <div className="xl:col-span-12 col-span-12">
                                            <p className="text-[14px] mb-1 font-medium">Configure Notifications</p>
                                            <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">Users can tailor their experience to receive alerts for the types of events that matter to them.</p>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <div className="flex items-top justify-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="text-[14px] mb-1 font-medium">Push Notifications</p>
                                                    <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">Alerts sent to the user's mobile device or desktop.</p>
                                                </div>
                                                <div id="push-notifications" className={`toggle mb-0 float-sm-end  toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="flex items-top justify-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="text-[14px] mb-1 font-medium">Email Notifications</p>
                                                    <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">Messages sent to the user's email address.</p>
                                                </div>
                                                <div id="email-notifications" className={`toggle mb-0 float-sm-end  toggle-success ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="flex items-top justify-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="text-[14px] mb-1 font-medium">In-App Notifications</p>
                                                    <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">Alerts that appear within the application interface.</p>
                                                </div>
                                                <div id="in-app-notifications"  className={`toggle mb-0 float-sm-end  toggle-success ${success3}`} onClick={() => { success3 == "on" ? setsuccess3("off") : setsuccess3("on"); }} >
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="flex items-top justify-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="text-[14px] mb-1 font-medium">SMS Notifications</p>
                                                    <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">Text messages sent to the user's mobile phone.</p>
                                                </div>
                                                <div id="sms-notifications" className={`toggle mb-0 float-sm-end  toggle-success ${success4}`} onClick={() => { success4 == "on" ? setsuccess4("off") : setsuccess4("on"); }} >
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane overflow-hidden p-0 border-0 hidden" id="security-tab-pane" role="tabpanel">
                                    <div className="flex justify-between items-center mb-4 flex-wrap gap-1">
                                        <div className="font-semibold block text-[15px]">Security Settings :</div>
                                        <div className="ti-btn ti-btn-primary ti-btn-sm"><i className="ri-loop-left-line leading-none me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="sm:flex block items-top justify-between">
                                        <div className="w-50">
                                            <p className="text-[14px] mb-1 font-medium">Verification</p>
                                            <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">Control how your profile information is verified for security purposes.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="form-check ">
                                                <input className="form-check-input" type="checkbox"  id="email-notifications01" defaultChecked/>
                                                <label className="form-check-label" htmlFor="email-notifications01">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  id="sms-notifications01"/>
                                                <label className="form-check-label" htmlFor="sms-notifications01">
                                                    SMS
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  id="phone-notifications"/>
                                                <label className="form-check-label" htmlFor="phone-notifications">
                                                    Phone
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:flex block items-top justify-between mt-3">
                                        <div className="w-50">
                                            <p className="text-[14px] mb-1 font-medium">Login Verification</p>
                                            <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">This helps protect accounts from unauthorized access, even if a password is compromised.</p>
                                        </div>
                                        <Link scroll={false} href="#!" className="link-primary underline">Set Up Verification</Link>
                                    </div>
                                    <div className="sm:flex block items-top justify-between mt-3">
                                        <div className="w-50">
                                            <p className="text-[14px] mb-1 font-medium">Password Verification</p>
                                            <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50">This additional step helps ensure that the person attempting to modify account details is the legitimate account owner.</p>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="personal-details"/>
                                            <label className="form-check-label" htmlFor="personal-details">
                                                Require Personal Details
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer border-t-0">
                                <div className="btn-list float-end">
                                    <SpkButton customClass="ti-btn bg-primarytint2color text-white btn-wave me-2">Deactivate Account</SpkButton>
                                    <SpkButton variant="primary" customClass="ti-btn btn-wave">Save Changes</SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default ProfileSetting;