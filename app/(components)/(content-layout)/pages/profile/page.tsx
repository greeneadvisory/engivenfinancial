"use client"
import SpkProfilefriendscard from "@/shared/@spk-reusable-components/spk-pages/spkprofilefriendscard";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Profilecarddata, Profilelist } from "@/shared/data/pages/profiledata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";
import CreatableSelect from "react-select/creatable";
interface ProfileProps {}

const Profile : FC<ProfileProps>  = () => {
    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState<any>("");
    const [value, setValue] = useState([
        createOption("Leadership"),
        createOption("Project Management"),
        createOption("Data Analysis"),
        createOption("Marketing Strategy"),
        createOption("Graphic Design"),
        createOption("Content Creation"),
        createOption("Market Research"),
        createOption("Client Relations"),
        createOption("Event Planning"),
        createOption("Budgeting and Finance"),
        createOption("Negotiation Skills"),
        createOption("Team Collaboration"),
        createOption("Adaptability")
    ]);
    const handleKeyDown = (event: any) => {
        if (!inputValue) return;
        switch (event.key) {
            case "Enter":
            case "Tab":
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue("");
                event.preventDefault();
        }
    };
    const [_isSearchable] = useState(true);
return (
<Fragment>
            {/* <!-- Page Header --> */}
                    <Seo title="Pages-Profile" />

                    <Pageheader title="Pages" currentpage="Profile" activepage="Profile" />

            {/* <!-- Page Header Close --> */}
             {/* <!-- Start:: row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box profile-card">
                            <div className="profile-banner-img">
                                <img src="../../assets/images/media/media-3.jpg" className="card-img-top" alt="..."/>
                            </div>
                            <div className="box-body pb-0 relative">
                                <div className="grid grid-cols-12 sm:gap-x-6 profile-content">
                                    <div className="xl:col-span-3 col-span-12">
                                        <div className="box overflow-hidden border border-defaultborder dark:border-defaultborder/10">
                                            <div className="box-body border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                                                <div className="text-center">
                                                    <span className="avatar avatar-xxl avatar-rounded online mb-3">
                                                        <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                    </span>
                                                    <h5 className="font-semibold mb-1">Spencer Robin</h5>
                                                    <span className="block font-medium text-textmuted dark:text-textmuted/50 mb-2">Software Development Manager</span>
                                                    <p className="text-xs mb-0 text-textmuted dark:text-textmuted/50"> <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Hamburg</span> <span><i className="ri-map-pin-line me-1 align-middle"></i>Germany</span> </p>
                                                </div>
                                            </div>
                                            <div className="flex mb-0 flex-wrap gap-4 p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10"> 
                                                <div className="border-dashed rounded text-center flex-auto"> 
                                                    <div className="main-card-icon mb-2 primary1">
                                                        <div className="avatar avatar-sm bg-primarytint1color">
                                                            <i className="text-[15px] ti ti-user-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 justify-center items-end">
                                                        <p className="font-semibold text-xl mb-0">15k</p>
                                                        <p className="mb-1 text-textmuted dark:text-textmuted/50">Followers</p>
                                                    </div>
                                                </div> 
                                                <div className="border-dashed rounded text-center flex-auto"> 
                                                    <div className="main-card-icon mb-2 secondary">
                                                        <div className="avatar avatar-sm bg-secondary">
                                                            <i className="text-[15px] ti ti-user-plus"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 justify-center items-end">
                                                        <p className="font-semibold text-xl mb-0">241</p>
                                                        <p className="mb-1 text-textmuted dark:text-textmuted/50">Following</p>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className="p-4 pb-1 flex flex-wrap justify-between">
                                                <div className="font-medium text-[15px] text-primarytint1color">
                                                    Basic Info :
                                                </div>
                                            </div>
                                            <div className="box-body border-b border-dashed border-defaultborder dark:border-defaultborder/10 p-0">
                                                <ul className="ti-list-group list-group-flush !border-0">
                                                    <li className="ti-list-group-item pt-2 border-0">
                                                        <div><span className="font-medium me-2">Name :</span><span className="text-textmuted dark:text-textmuted/50">Spencer Robin</span></div>
                                                    </li>
                                                    <li className="ti-list-group-item pt-2 border-0">
                                                        <div><span className="font-medium me-2">Designation :</span><span className="text-textmuted dark:text-textmuted/50">Software Development Manager</span></div>
                                                    </li>
                                                    <li className="ti-list-group-item pt-2 border-0">
                                                        <div><span className="font-medium me-2">Email :</span><span className="text-textmuted dark:text-textmuted/50">spencer. robin22@example.com</span></div>
                                                    </li>
                                                    <li className="ti-list-group-item pt-2 border-0">
                                                        <div><span className="font-medium me-2">Phone :</span><span className="text-textmuted dark:text-textmuted/50">+1 (222) 111 - 57840</span></div>
                                                    </li>
                                                    <li className="ti-list-group-item pt-2 border-0">
                                                        <div><span className="font-medium me-2">Experience :</span><span className="text-textmuted dark:text-textmuted/50">10 Years</span></div>
                                                    </li>
                                                    <li className="ti-list-group-item pt-2 border-0">
                                                        <div><span className="font-medium me-2">Age :</span><span className="text-textmuted dark:text-textmuted/50">28</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-4 pb-1 flex flex-wrap justify-between">
                                                <div className="font-medium text-[15px] text-primarytint1color">
                                                    Followers :
                                                </div>
                                                <Link scroll={false} href="#!" className="text-xs text-textmuted dark:text-textmuted/50"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <div className="box-body p-0">
                                                <ul className="ti-list-group list-group-flush !border-0">
                                                    <li className="ti-list-group-item border-0 py-2">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <div className="leading-none">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../assets/images/faces/1.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <span className="font-medium">Iliana Lilly</span>
                                                            </div>
                                                            <div> 
                                                                <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn ti-btn-icon"> <i className="ri-add-line leading-none align-middle"></i> </SpkButton> 
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="ti-list-group-item border-0 py-2">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <div className="leading-none">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../assets/images/faces/14.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <span className="font-medium">Charlie Edson</span>
                                                            </div>
                                                            <div> 
                                                                <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn  ti-btn-icon"> <i className="ri-add-line leading-none align-middle"></i> </SpkButton> 
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="ti-list-group-item border-0 py-2">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <div className="leading-none">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../assets/images/faces/3.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <span className="font-medium">Aurora Reed</span>
                                                            </div>
                                                            <div> 
                                                                <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn  ti-btn-icon "> <i className="ri-add-line leading-none align-middle"></i> </SpkButton> 
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="ti-list-group-item border-0 py-2">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <div className="leading-none">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../assets/images/faces/10.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-auto">
                                                                <span className="font-medium">Spencer Robin</span>
                                                            </div>
                                                            <div> 
                                                                <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn  ti-btn-icon "> <i className="ri-add-line leading-none align-middle"></i> </SpkButton> 
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-9 col-span-12">
                                        <div className="box overflow-hidden border border-defaultborder dark:border-defaultborder/10">
                                            <div className="box-body">
                                                <ul className="nav nav-tabs tab-style-6 mb-3 p-0 flex bg-white dark:bg-bodybg flex-wrap" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <SpkButton customClass="nav-link w-full text-start rounded-md active" Tab="#profile-about-tab-pane" buttontype="button" Role="tab">About</SpkButton>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <SpkButton customClass="nav-link w-full text-start rounded-md" Tab="#edit-profile-tab-pane" buttontype="button" Role="tab">Edit Profile</SpkButton>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <SpkButton customClass="nav-link w-full text-start rounded-md" Tab="#timeline-tab-pane" buttontype="button" Role="tab">Timeline</SpkButton>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <SpkButton customClass="nav-link w-full text-start rounded-md" Tab="#gallery-tab-pane" buttontype="button" Role="tab">Gallery</SpkButton>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <SpkButton customClass="nav-link w-full text-start rounded-md" Tab="#friends-tab-pane" buttontype="button" Role="tab">Friends</SpkButton>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="profile-tabs">
                                                    <div className="tab-pane show active p-0 border-0" id="profile-about-tab-pane" role="tabpanel">
                                                        <ul className="ti-list-group list-group-flush border rounded-3">
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3"><span className="me-1">&#10024;</span>About Info :</span>
                                                                <p className="text-textmuted dark:text-textmuted/50 mb-2">
                                                                    Hello, I'm [Your Name], a dedicated [Your Profession/Interest] based in [Your Location]. I have a genuine passion for [Your Hobbies/Interests] and enjoy delving into the nuances of [Your Industry/Field]. 
                                                                </p>
                                                                <p className="text-textmuted dark:text-textmuted/50 mb-0">
                                                                    Specializing in [Your Specialization/Area of Expertise], I strive to infuse innovation into every project I undertake. With a track record of [Key Achievements] and valuable experiences, I'm committed to continual growth and eagerly anticipate the opportunities that lie ahead.
                                                                </p>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">Contact Info :</span>
                                                                <div className="text-textmuted dark:text-textmuted/50">
                                                                    <p className="mb-3">
                                                                        <span className="avatar avatar-sm avatar-rounded !text-primary p-1 bg-primary/10 me-2">
                                                                            <i className="ri-mail-line align-middle text-[15px]"></i>
                                                                        </span>
                                                                        <span className="font-medium text-defaulttextcolor">Email : </span> spencer. robin22@example.com
                                                                    </p>
                                                                    <p className="mb-3">
                                                                        <span className="avatar avatar-sm avatar-rounded !text-primarytint1color p-1 bg-primarytint1color/10 me-2">
                                                                            <i className="ri-map-pin-line align-middle text-[15px]"></i>
                                                                        </span>
                                                                        <span className="font-medium text-defaulttextcolor">Website : </span> www.yourwebsite.com
                                                                    </p>
                                                                    <p className="mb-3">
                                                                        <span className="avatar avatar-sm avatar-rounded !text-primarytint2color p-1 bg-primarytint2color/10 me-2">
                                                                            <i className="ri-building-line align-middle text-[15px]"></i>
                                                                        </span>
                                                                        <span className="font-medium text-defaulttextcolor">Location : </span> City, Country
                                                                    </p>
                                                                    <p className="mb-0">
                                                                        <span className="avatar avatar-sm avatar-rounded !text-primarytint3color p-1 bg-primarytint3color/10 me-2">
                                                                            <i className="ri-phone-line align-middle text-[15px]"></i>
                                                                        </span>
                                                                        <span className="font-medium text-defaulttextcolor">Phone : </span> +1 (222) 111 - 57840
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">Skills :</span>
                                                                <div className="w-75">
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Leadership</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Project Management</SpkBadge>
                                                                    </Link>    
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Technical Proficiency</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Communication</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Team Building</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Problem-Solving</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Strategic Thinking</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Decision Making</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Adaptability</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Stakeholder Management</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Conflict Resolution</SpkBadge>
                                                                    </Link>
                                                                    <Link scroll={false} href="#!">
                                                                        <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">Continuous Improvement</SpkBadge>
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">Social Media :</span>
                                                                <div className="flex items-center gap-5 flex-wrap">
                                                                    <div className="flex items-center gap-4 me-2 flex-wrap">
                                                                        <div>
                                                                            <span className="avatar avatar-md bg-primary"><i className="ri-github-line text-[1rem]"></i></span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="block font-medium text-primay">Github</span>
                                                                            <span className="text-textmuted dark:text-textmuted/50 font-medium">github.com/spruko</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center gap-4 me-2 flex-wrap">
                                                                        <div>
                                                                            <span className="avatar avatar-md bg-primarytint1color"><i className="ri-twitter-x-line text-[1rem]"></i></span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="block font-medium text-primay1">Twitter</span>
                                                                            <span className="text-textmuted dark:text-textmuted/50 font-medium">twitter.com/spruko.me</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center gap-4 me-2 flex-wrap">
                                                                        <div>
                                                                            <span className="avatar avatar-md bg-primarytint2color"><i className="ri-linkedin-line text-[1rem]"></i></span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="block font-medium text-primay2">Linkedin</span>
                                                                            <span className="text-textmuted dark:text-textmuted/50 font-medium">linkedin.com/in/spruko</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center gap-4 flex-wrap">
                                                                        <div>
                                                                            <span className="avatar avatar-md bg-primarytint3color"><i className="ri-briefcase-line text-[1rem]"></i></span>
                                                                        </div>
                                                                        <div>
                                                                            <span className="block font-medium text-primay3">My Portfolio</span>
                                                                            <span className="text-textmuted dark:text-textmuted/50 font-medium">spruko.com/</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane p-0 border-0 hidden" id="edit-profile-tab-pane" role="tabpanel"
                                                     tabIndex={0}>
                                                        <ul className="ti-list-group list-group-flush border rounded-3">
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">Personal Info :</span>
                                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 items-center">
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">User Name :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Spencer Robin"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">First Name :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Spencer"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Last Name :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Robin"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Designation :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Software Development Manager"/>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">Contact Info :</span>
                                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 items-center">
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Email :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="email" className="form-control" placeholder="Placeholder" defaultValue="spencer. robin22@example.com"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Phone :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="+1 (222) 111 - 57840"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Website :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="www.yourwebsite .com"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Location :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="City, Country"/>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">Social Info :</span>
                                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 items-center">
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Github :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="github.com/spruko"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Twitter :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="twitter.com/spruko.me"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Linkedin :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="linkedin.com/in/spruko"/>
                                                                    </div>
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Portfolio :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <input type="text" className="form-control" placeholder="Placeholder" defaultValue="spruko.com/"/>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">About Info :</span>
                                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 items-center">
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">Biographical Info :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                        <textarea className="form-control" id="text-area" rows={4} defaultValue="Hello, I'm [Your Name], a dedicated [Your Profession/Interest] based in [Your Location]. I have a genuine passion for [Your Hobbies/Interests] and enjoy delving into the nuances of [Your Industry/Field].
                                                                            Specializing in [Your Specialization/Area of Expertise], I strive to infuse innovation into every project I undertake. With a track record of [Key Achievements] and valuable experiences, I'm committed to continual growth and eagerly anticipate the opportunities that lie ahead.">
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="ti-list-group-item p-4">
                                                                <span className="font-medium text-[15px] block mb-3">SKILLS :</span>
                                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 items-center">
                                                                    <div className="xl:col-span-3 col-span-12">
                                                                        <div className="leading-none">
                                                                            <span className="font-medium">skills :</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-9 col-span-12">
                                                                    <CreatableSelect
                                                                            components={components}
                                                                            classNamePrefix='react-select'
                                                                            inputValue={inputValue}
                                                                            isClearable
                                                                            isMulti
                                                                            menuIsOpen={false}
                                                                            onChange={(newValue: any) => {
                                                                                // Ensure newValue is an array (or empty array) of objects
                                                                                if (Array.isArray(newValue)) {
                                                                                    setValue(newValue);
                                                                                } else {
                                                                                    // Handle the case when newValue is not an array
                                                                                    setValue([]);
                                                                                }
                                                                            }}
                                                                            onInputChange={(newValue: any) => setInputValue(newValue)}
                                                                            onKeyDown={handleKeyDown}
                                                                            placeholder="Type something and press enter..."
                                                                            value={value}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane p-0 border-0 hidden" id="timeline-tab-pane" role="tabpanel" 
                                                        tabIndex={0}>
                                                        <ul className="list-none profile-timeline">
                                                            <li>
                                                                <div>
                                                                    <span className="avatar avatar-sm bg-primary/10 avatar-rounded profile-timeline-avatar">
                                                                        <img src="../../assets/images/faces/3.jpg" alt=""/>
                                                                    </span>
                                                                    <div className="flex gap-2 flex-wrap mb-2">
                                                                        <p className="mb-0">
                                                                            <span className="font-semibold">Photos </span>from their recent vacation and writes a caption describing their experience..
                                                                        </p>
                                                                        <span className="text-end ms-auto text-[11px] text-textmuted dark:text-textmuted/50">15,May 2024 - 18:47</span>
                                                                    </div>
                                                                    <p className="profile-activity-media flex mb-3 gap-2 flex-wrap">
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-17.jpg" alt=""/>
                                                                        </Link>    
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-18.jpg" alt=""/>
                                                                        </Link>    
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-19.jpg" alt=""/>
                                                                        </Link>    
                                                                    </p>
                                                                    <div className="flex items-end justify-between gap-2 flex-wrap">
                                                                        <div>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Leadership</SpkBadge>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Solving</SpkBadge>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="btn-list text-end">
                                                                            <SpkButton variant="soft-primary"  Size="sm" customClass="ti-btn btn-wave waves-effect waves-light"><i className="ri-message-3-line"></i> 4</SpkButton>
                                                                            <SpkButton variant="soft-primary1"  Size="sm" customClass="ti-btn  text-primarytint1color btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i> 2</SpkButton>
                                                                            <SpkButton variant="soft-primary2"  Size="sm" customClass="ti-btn  text-primarytint2color btn-wave waves-effect waves-light"><i className="ri-heart-line"></i> 3</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                        <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                                    </span>
                                                                    <div className="flex gap-2 flex-wrap mb-2">
                                                                        <p className="mb-0">
                                                                            Friend comments on the post, expressing admiration for the picturesque location a. <span className="text-primary font-medium underline">#Trip-photos</span>.
                                                                        </p>
                                                                        <span className="text-end ms-auto text-[11px] text-textmuted dark:text-textmuted/50">18,Dec 2024 - 12:16</span>
                                                                    </div>
                                                                    <p className="text-textmuted dark:text-textmuted/50 mb-3">
                                                                        Asking about the user's favorite part of the trip. emporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                                                    </p>
                                                                    <div className="flex items-end justify-between gap-2 flex-wrap">
                                                                        <div>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Leadership</SpkBadge>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Solving</SpkBadge>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="btn-list text-end">
                                                                            <SpkButton Size="sm" variant="soft-primary" customClass="ti-btn btn-wave waves-effect waves-light"><i className="ri-message-3-line"></i> 4</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary1" customClass="ti-btn text-primarytint1color btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i> 2</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn  text-primarytint2color btn-wave waves-effect waves-light"><i className="ri-heart-line"></i> 3</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                        <img src="../../assets/images/faces/4.jpg" alt=""/>
                                                                    </span>
                                                                    <div className="flex gap-2 flex-wrap mb-2">
                                                                        <p className="text-textmuted dark:text-textmuted/50 mb-0">
                                                                            <span className="text-defaulttextcolor"><span className="text-primarytint1color font-medium">Varun Sonu </span> asking for recommendations on places to visit in the vacation destination</span>.
                                                                        </p>
                                                                        <span className="text-end ms-auto text-[11px] text-textmuted dark:text-textmuted/50">26,May 2024 - 12:45</span>
                                                                    </div>
                                                                    <p className="profile-activity-media flex mb-3 gap-2 flex-wrap">
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/file-manager/3.png" alt=""/>
                                                                        </Link>  
                                                                        <span className="text-[11px] text-textmuted dark:text-textmuted/50">432.87KB</span>
                                                                    </p>
                                                                    <div className="flex items-end justify-between gap-2 flex-wrap">
                                                                        <div>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Leadership</SpkBadge>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Solving</SpkBadge>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="btn-list text-end">
                                                                            <SpkButton Size="sm" variant="soft-primary" customClass="ti-btn btn-wave waves-effect waves-light"><i className="ri-message-3-line"></i> 4</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary1" customClass="ti-btn text-primarytint1color btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i> 2</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn text-primarytint2color btn-wave waves-effect waves-light"><i className="ri-heart-line"></i> 3</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <span className="avatar avatar-sm bg-success avatar-rounded profile-timeline-avatar">
                                                                        K
                                                                    </span>
                                                                    <div className="flex gap-2 flex-wrap mb-2">
                                                                        <p className="text-textmuted dark:text-textmuted/50 mb-0">
                                                                            <span className="text-defaulttextcolor">On a trending news topic, offering their perspective and engaging with other group members' <span className="text-primarytint2color font-medium underline">#viewpoints</span></span>.
                                                                        </p>
                                                                        <span className="text-end ms-auto text-[11px] text-textmuted dark:text-textmuted/50">28,May 2024 - 22:09</span>
                                                                    </div>
                                                                    <p className="profile-activity-media flex mb-2">
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-75.jpg" alt=""/>
                                                                        </Link>   
                                                                    </p>
                                                                    <div className="flex items-end justify-between gap-2 flex-wrap">
                                                                        <div>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Leadership</SpkBadge>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Solving</SpkBadge>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="btn-list text-end">
                                                                            <SpkButton Size="sm" variant="soft-primary" customClass="ti-btn btn-wave waves-effect waves-light"><i className="ri-message-3-line"></i> 4</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary1" customClass="ti-btn  text-primarytint1color btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i> 2</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn text-primarytint2color btn-wave waves-effect waves-light"><i className="ri-heart-line"></i> 3</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                        <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                                    </span>
                                                                    <div className="flex gap-2 flex-wrap mb-1">
                                                                        <p className="text-textmuted dark:text-textmuted/50 mb-0">
                                                                            <span className="text-defaulttextcolor">Reminiscing about a memorable trip they took together and suggesting planning another adventure soon. <span className="font-semibold text-primary3 underline">#Europe</span> trip was a landmark in our lifes!</span>.
                                                                        </p>
                                                                        <span className="text-end ms-auto text-[11px] text-textmuted dark:text-textmuted/50">29,May 2024 - 16:42</span>
                                                                    </div>
                                                                    <p className="text-textmuted dark:text-textmuted/50">"Every time, our Europe trip still lies vividly before our eyes."</p>
                                                                    <p className="profile-activity-media flex mb-3 gap-2 flex-wrap">
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-59.jpg" className="m-1" alt=""/>
                                                                        </Link>  
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-60.jpg" className="m-1" alt=""/>
                                                                        </Link>  
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-61.jpg" className="m-1" alt=""/>
                                                                        </Link>  
                                                                    </p>
                                                                    <div className="flex items-end justify-between gap-2 flex-wrap">
                                                                        <div>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Leadership</SpkBadge>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Solving</SpkBadge>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="btn-list text-end">
                                                                            <SpkButton Size="sm" variant="soft-primary" customClass="ti-btn btn-wave waves-effect waves-light"><i className="ri-message-3-line"></i> 4</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary1" customClass="ti-btn  text-primarytint1color btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i> 2</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn  text-primarytint2color btn-wave waves-effect waves-light"><i className="ri-heart-line"></i> 3</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div>
                                                                    <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                        <img src="../../assets/images/media/media-39.jpg" alt=""/>
                                                                    </span>
                                                                    <div className="flex gap-2 flex-wrap mb-1">
                                                                        <p className="mb-1">
                                                                            <span className="font-semibold text-primarytint2color">Invitation</span> to a virtual networking event from a professional connection, expressing interest and RSVPing for attendance.
                                                                        </p>
                                                                        <span className="text-end ms-auto text-[11px] text-textmuted dark:text-textmuted/50">06,Jun 2024 - 08:40</span>
                                                                    </div>
                                                                    <p className="profile-activity-media flex mb-3 gap-2 flex-wrap">
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-26.jpg" alt=""/>
                                                                        </Link>    
                                                                        <Link scroll={false} href="#!">
                                                                            <img src="../../assets/images/media/media-29.jpg" alt=""/>
                                                                        </Link>    
                                                                    </p>
                                                                    <div className="flex items-end justify-between gap-2 flex-wrap">
                                                                        <div>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Leadership</SpkBadge>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!">
                                                                                <SpkBadge variant="light" customClass="text-textmuted dark:text-textmuted/50 m-1 border border-defaultborder dark:border-defaultborder/10">#Solving</SpkBadge>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="btn-list text-end">
                                                                            <SpkButton Size="sm" variant="soft-primary" customClass="ti-btn  btn-wave waves-effect waves-light"><i className="ri-message-3-line"></i> 4</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary1" customClass="ti-btn  text-primarytint1color btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i> 2</SpkButton>
                                                                            <SpkButton Size="sm" variant="soft-primary2" customClass="ti-btn  text-primarytint2color btn-wave waves-effect waves-light"><i className="ri-heart-line"></i> 3</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-pane p-0 border-0 hidden" id="gallery-tab-pane" role="tabpanel"
                                                        tabIndex={0}>
                                                        <Profilelist />
                                                    </div>
                                                    <div className="tab-pane p-0 border-0 hidden" id="friends-tab-pane" role="tabpanel"
                                                       tabIndex={0}>
                                                        <div className="grid grid-cols-12 sm:gap-x-6">
                                                            {Profilecarddata.map((idx) => (
                                                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={idx.id}>
                                                                        <SpkProfilefriendscard Navigate="#!" Imgsrc={idx.src} Name={idx.name} Mail={idx.mail} Color={idx.color} Role={idx.role} />
                                                                    </div>
                                                            ))}
                                                            <div className="xl:col-span-12 col-span-12">
                                                                <div className="text-center">
                                                                    <SpkButton variant='soft-primary' customClass="ti-btn  btn-wave">Show All</SpkButton>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}
</Fragment>
);
};

export default Profile;