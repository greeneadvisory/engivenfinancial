"use client"
import React, { FC, Fragment, useEffect, useState } from "react";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Mails, Mails1 } from "@/shared/data/pages/email/mailappdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SunEditorComponent from "@/shared/@spk-reusable-components/spk-packages/editor-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";

interface MailAppProps {}

const MailApp : FC<MailAppProps>  = () => {
    const Selectoption2 = [
        { value: 'jay@gmail.com', label: 'jay@gmail.com' },
        { value: 'kia@gmail.com', label: 'kia@gmail.com' },
        { value: 'don@gmail.com', label: 'don@gmail.com' },
        { value: 'kimo@gmail.com', label: 'kimo@gmail.com' }
    ]

    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleVisibility = () => {
        if (isMobile) {
            setIsVisible((prev) => !prev);
        }
    };

 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Pages-Mailapp" />

                <Pageheader title="Pages" subtitle="Email" currentpage="Mail App" activepage="Mail App" />

            {/* <!-- Page Header Close --> */}
             <div className="main-mail-container custom-mail mb-2 gap-2 flex">
                    <div className="mail-navigation border border-defaultborder dark:border-defaultborder/10" onClick={toggleVisibility} style={{ display: isMobile ? (isVisible ? 'block' : 'none') : 'block', }}>
                        <div
                            className="grid items-top p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                            <SpkButton variant="primary" customClass="ti-btn flex items-center justify-center"
                                Overlay="#mail-Compose">
                                <i className="ri-add-circle-line text-[1rem] align-middle me-1"></i>Compose Mail
                            </SpkButton>
                        </div>
                        <div>
                        <SimpleBar>
                            <ul className="list-none mail-main-nav" id="mail-main-nav">
                                <li className="px-0 pt-0">
                                    <span
                                        className="text-[11px] text-textmuted dark:text-textmuted/50 opacity-70 font-medium">MAILS</span>
                                </li>
                                {Mails.map((idx) => (
                                    <li className={`${idx.class1} mail-type`} key={idx.id}>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className={`ti ti-${idx.icon} align-middle text-[1rem]`}></i>
                                                </span>
                                                <span className="flex-auto text-nowrap">
                                                   {idx.text1}
                                                </span>
                                                <span className={idx.class}>{idx.text2}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                                <li className="px-0">
                                    <span
                                        className="text-[11px] text-textmuted dark:text-textmuted/50 opacity-70 font-medium">LABELS</span>
                                </li>
                                <li>
                                    <Link scroll={false} href="#!">
                                        <div className="flex items-center">
                                            <span className="me-2 leading-none">
                                                <i
                                                    className="ri-circle-fill align-middle text-[10px] font-medium text-primarytint1color"></i>
                                            </span>
                                            <span className="flex-auto text-nowrap">
                                                Mail
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link scroll={false} href="#!">
                                        <div className="flex items-center">
                                            <span className="me-2 leading-none">
                                                <i
                                                    className="ri-circle-fill align-middle text-[10px] font-medium text-primarytint2color"></i>
                                            </span>
                                            <span className="flex-auto text-nowrap">
                                                Home
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link scroll={false} href="#!">
                                        <div className="flex items-center">
                                            <span className="me-2 leading-none">
                                                <i
                                                    className="ri-circle-fill align-middle text-[10px] font-medium text-primary3"></i>
                                            </span>
                                            <span className="flex-auto text-nowrap">
                                                Work
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link scroll={false} href="#!">
                                        <div className="flex items-center">
                                            <span className="me-2 leading-none">
                                                <i
                                                    className="ri-circle-fill align-middle text-[10px] font-medium text-warning"></i>
                                            </span>
                                            <span className="flex-auto text-nowrap">
                                                Friends
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0">
                                    <span
                                        className="text-[11px] text-textmuted dark:text-textmuted/50 opacity-70 font-medium">ONLINE
                                        USERS</span>
                                </li>
                                <li>
                                    <Link scroll={false} href="#!">
                                        <div className="flex items-top  leading-none">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <img src="../../../assets/images/faces/4.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-defaulttextcolor font-medium mb-1">Angelica</p>
                                                <p
                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-0 font-normal">
                                                    Can please send me the file.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link scroll={false} href="#!">
                                        <div className="flex items-top  leading-none">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <img src="../../../assets/images/faces/6.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-defaulttextcolor font-medium mb-1">Rexha</p>
                                                <p
                                                    className="text-xs text-textmuted dark:text-textmuted/50 mb-0 font-normal">
                                                    Waiting for response &#128077;.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0">
                                    <span
                                        className="text-[11px] text-textmuted dark:text-textmuted/50 opacity-70 font-medium">SETTINGS</span>
                                </li>
                                <li>
                                    <Link scroll={false} href="/pages/email/mail-settings">
                                        <div className="flex items-center">
                                            <span className="me-2 leading-none">
                                                <i className="ti ti-settings align-middle text-[14px]"></i>
                                            </span>
                                            <span className="flex-auto text-nowrap">
                                                Settings
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </SimpleBar>
                        </div>
                    </div>
                    <div className="total-mails border border-defaultborder dark:border-defaultborder/10" style={{ display: isMobile ? (isVisible ? 'none' : 'block') : 'block', }}>
                        <div
                            className="p-4 flex items-center border-b border-dashed flex-wrap gap-2 border-defaultborder dark:border-defaultborder/10">
                            <div className="input-group">
                                <input type="text" className="form-control !border-s shadow-none" placeholder="Search Email"
                                    aria-describedby="button-addon"/>
                                <SpkButton variant="primary" customClass="ti-btn !m-0" buttontype="button" Id="button-addon"><i
                                        className="ri-search-line me-1"></i> Search</SpkButton>
                            </div>
                        </div>
                        <div
                            className="px-3 p-2 flex items-center border-b  border-defaultborder dark:border-defaultborder/10 flex-wrap gap-2">
                            <div className="mx-2">
                                <input className="form-check-input check-all" type="checkbox" id="checkAll" 
                                    aria-label="..."/>
                            </div>
                            <div className="flex-auto truncate">
                                <h6 className="font-medium mb-0">All Mails</h6>
                            </div>
                            <div className="flex gap-2">
                                <SpkButton customClass="ti-btn ti-btn-icon bg-light me-1 lg:hidden block total-mails-close" onclickfunc={toggleVisibility}>
                                    <i className="ri-close-line"></i>
                                </SpkButton>
                                <div className="">
                                    <SpkButton Size="sm" variant="soft-primary2"
                                        customClass="ti-btn  btn-wave"
                                        type="button" aria-expanded="false">
                                        <i className="ri-inbox-archive-line me-1"></i> Archive
                                    </SpkButton>
                                    <SpkButton Size="sm" variant="soft-primary2"
                                        customClass="ti-btn  btn-wave"
                                        type="button" aria-expanded="false">
                                        <i className="ri-error-warning-line me-1"></i> Spam
                                    </SpkButton>
                                        <SpkDropdown CustomToggleclass="ti-btn-sm ti-btn-icon ti-btn-soft-primary3 btn-wave ti-dropdown-toggle hs-dropdown-toggle !my-0" Icon={true} IconClass="ti ti-dots-vertical">
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Recent</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Unread</Link></li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Mark All Read</Link>
                                            </li>
                                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Delete All</Link>
                                            </li>
                                        </SpkDropdown>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="mail-messages" id="mail-messages">
                            <ul className="list-none mb-0 mail-messages-container">
                                {Mails1.map((idx) => (
                                    <li key={idx.id} className={idx.bordercls}>
                                        <div className="flex items-top ">
                                            <div className="me-3 mt-1">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel1"
                                                     aria-label="..." defaultChecked={idx.checked === 'defaultChecked'}  />
                                            </div>
                                            <div className="me-1 leading-none">
                                                <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                    <img src={idx.img} alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-auto truncate">
                                                <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                    <p className="mb-1 text-xs font-medium">
                                                       {idx.name} 
                                                       <span className={idx.badge}>{idx.badgetxt}</span>
                                                       <span  className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">
                                                       <span className="me-2"><i className={idx.icon}></i></span>{idx.time}</span>
                                                    </p>
                                                </Link>
                                                <div className="mail-msg mb-0">
                                                    <span className="block mb-0 font-medium truncate w-[75%]">{idx.title}</span>
                                                    <div className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                        {idx.text}
                                                        <SpkButton customClass={`ti-btn p-0 leading-none mail-starred  ${idx.star} border-0 float-end`}>
                                                            <i className="ri-star-fill text-[14px]"></i>
                                                        </SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="active">
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel2"
                                                 aria-label="..." defaultChecked/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <img src="../../../assets/images/faces/12.jpg" alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Priceton Gray <span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">03:18PM</span>
                                                </p>
                                            </Link>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]">Exclusive Offers
                                                    Inside!</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Unlock exclusive deals and discounts inside! Don't miss out on this
                                                    limited-time opportunity to save big on your favorite products and
                                                    services.
                                                    <SpkButton 
                                                        customClass="ti-btn p-0 leading-none mail-starred border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel3"
                                                 aria-label="..."/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span
                                                className="avatar avatar-md me-2 avatar-rounded bg-primary mail-msg-avatar">
                                                CH
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Charlie Edson <SpkBadge variant="warning"
                                                        customClass="ms-2">Promotion</SpkBadge><span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">Yesterday,
                                                        06:45AM</span>
                                                </p>
                                            </Link>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]"> Limited-Time Offer:
                                                    Save on Your Next Trip!</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Unlock exclusive deals and discounts inside! Don't miss out on this
                                                    limited-time opportunity to save big on your favorite products and
                                                    services.
                                                    <SpkButton
                                                        customClass="ti-btn p-0 leading-none mail-starred border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel54"
                                                 aria-label="..." defaultChecked/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <img src="../../../assets/images/faces/7.jpg" alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Isha Bella <SpkBadge variant="primarytint1color"
                                                        customClass="ms-2">Social</SpkBadge><span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">May
                                                        15 2024, 08:16PM</span>
                                                </p>
                                            </Link>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]"> You Have New
                                                    Notifications</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Stay connected with your friends and family. See who's commented on
                                                    your latest post and catch up on messages from loved ones.
                                                    <SpkButton
                                                        customClass="ti-btn p-0 leading-none mail-starred border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel14"
                                                 aria-label="..."/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <img src="../../../assets/images/faces/15.jpg" alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Danny Raj <span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">May
                                                        13 2024, 11:24AM</span>
                                                </p>
                                            </Link>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]">New Connection
                                                    Request</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Expand your professional network with a new connection. Accept the
                                                    request to connect and start networking today to explore new
                                                    opportunities.
                                                    <SpkButton
                                                        customClass="ti-btn p-0 leading-none mail-starred true border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel24"
                                                 aria-label="..."/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span
                                                className="avatar avatar-md me-2 avatar-rounded bg-primarytint2color mail-msg-avatar">
                                                SR
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Spencer Robin <SpkBadge variant='primarytint3color'
                                                        customClass="ms-2">Personal</SpkBadge><span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">May
                                                        18 2024, 11:15PM</span>
                                                </p>
                                            </Link>
                                            <p className="text-xs mb-0"></p>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]">Invitation By Summer
                                                    Soiree Under the Stars!</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Hello, You are cordially invited to join us for an unforgettable
                                                    evening of summer magic at our Summer Soiree Under the Stars!
                                                    <SpkButton
                                                        customClass="ti-btn p-0 leading-none mail-starred true border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel34"
                                                 aria-label="..."/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span
                                                className="avatar avatar-md me-2 avatar-rounded bg-warning mail-msg-avatar">
                                                HJ
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Harry Justin <span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">April
                                                        05 2024, 08:12AM</span>
                                                </p>
                                            </Link>
                                            <p className="text-xs mb-0"></p>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]">New Connection
                                                    Request</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Expand your professional network with a new connection. Accept the
                                                    request to connect and start networking today to explore new
                                                    opportunities.
                                                    <SpkButton
                                                        customClass="ti-btn p-0 leading-none mail-starred border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-top ">
                                        <div className="me-3 mt-1">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel44"
                                                 aria-label="..."/>
                                        </div>
                                        <div className="me-1 leading-none">
                                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <img src="../../../assets/images/faces/13.jpg" alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-auto truncate">
                                            <Link scroll={false} href="#!" data-hs-overlay="#offcanvasRight">
                                                <p className="mb-1 text-xs font-medium">
                                                    Nicolas Noor <span
                                                        className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">March
                                                        20, 08:30PM</span>
                                                </p>
                                            </Link>
                                            <p className="text-xs mb-0"></p>
                                            <div className="mail-msg mb-0">
                                                <span className="block mb-0 font-medium truncate w-[75%]">Claim Your Prize
                                                    Now!</span>
                                                <div
                                                    className="text-xs text-textmuted dark:text-textmuted/50  truncate mail-msg-content !w-[75%]">
                                                    Congratulations! You've won a prize! Click here to claim your reward
                                                    before it's too late and enjoy your well-deserved prize.
                                                    <SpkButton
                                                        customClass="ti-btn p-0 leading-none mail-starred border-0 float-end">
                                                        <i className="ri-star-fill text-[14px]"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </SimpleBar>
                    </div>
                    <div className="mail-recepients border border-defaultborder dark:border-defaultborder/10">
                        <div className="p-4 border-b border-defaultborder dark:border-defaultborder/10">
                            <SpkOverlay>
                                <SpkButton
                                customClass="ti-btn bg-primarytint1color/10 text-primarytint1color ti-btn-icon rounded-full"><i
                                    className="ri-add-line"></i>
                                    <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Add Recipient
                                </span>
                                </SpkButton>
                            </SpkOverlay>
                        </div>
                        <SimpleBar className="p-4 flex flex-col items-center total-mail-recepients" id="mail-recepients">
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/11.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Hadley Kylin
                                        </span>
                                    </span>
                                </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/7.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Iliana Lilly
                                        </span>
                                    </span>
                                </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/4.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Jasmine Della
                                        </span>
                                    </span>
                                </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/8.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Emanuel Rush
                                        </span>
                                    </span>
                                </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                <span className="avatar online avatar-rounded">
                                    <img src="../../../assets/images/faces/3.jpg" alt=""/>
                                    <span
                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        Nyra Tiyana
                                    </span>
                                </span>
                              </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                <span className="avatar online avatar-rounded">
                                    <img src="../../../assets/images/faces/11.jpg" alt=""/>
                                    <span
                                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        Maria Violet
                                    </span>
                                </span>
                              </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/16.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Priceton Gray
                                        </span>
                                    </span>
                                  </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/10.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Charlie Edson
                                        </span>
                                    </span>
                                  </SpkOverlay>
                            </Link>
                            <Link scroll={false} href="#!" className="mail-recepeint-person">
                                <SpkOverlay>
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/15.jpg" alt=""/>
                                        <span
                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            Spencer Robin
                                        </span>
                                    </span>
                                  </SpkOverlay>
                            </Link>
                        </SimpleBar>
                    </div>
            </div>

            {/* <!-- Start::composemail modal --> */}
            <div id="mail-Compose" className="hs-overlay hidden ti-modal">
            <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out lg:!max-w-4xl lg:w-full m-3 lg:!mx-auto">
              <div className="ti-modal-content m-3">
                <div className="ti-modal-header">
                  <h6 className="ti-modal-title">
                    Compose Mail
                  </h6>
                  <SpkButton Buttontype="button" customClass="hs-dropdown-toggle ti-modal-close-btn"
                    Overlay="#mail-Compose">
                    <span className="sr-only">Close</span>
                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                        fill="currentColor" />
                    </svg>
                  </SpkButton>
                </div>
                <div className="ti-modal-body">
                    <div className="grid grid-cols-12 sm:gap-x-6">
                        <div className="xl:col-span-6 col-span-12 mb-2">
                            <label htmlFor="fromMail" className="form-label">From<sup><i
                                        className="ri-star-s-fill text-success text-[8px]"></i></sup></label>
                            <input type="email" className="form-control" id="fromMail"
                                defaultValue="henrymilo2345@gmail.com"/>
                        </div>
                        <div className="xl:col-span-6 col-span-12 mb-2">
                            <label htmlFor="toMail" className="form-label">To<sup><i className="ri-star-s-fill text-success text-[8px]"></i></sup></label>
                             <SpkSelect option={Selectoption2} placeholder='Select' classNameprefix="Select2" mainClass="js-example-basic-multiple w-full" multi={true} searchable={true} defaultvalue={[Selectoption2[0]]}/>
                        </div>
                        <div className="xl:col-span-6 col-span-12 mb-2">
                            <label htmlFor="mailCC"
                                className="form-label text-dark font-medium">Cc</label>
                            <input type="email" className="form-control" id="mailCC"/>
                        </div>
                        <div className="xl:col-span-6 col-span-12 mb-2">
                            <label htmlFor="mailBcc"
                                className="form-label text-dark font-medium">Bcc</label>
                            <input type="email" className="form-control" id="mailBcc"/>
                        </div>
                        <div className="xl:col-span-12 col-span-12 mb-2">
                            <label htmlFor="Subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="Subject"
                                placeholder="Subject"/>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <label className="form-label">Content :</label>
                            <div className="mail-compose">
                                <div id="mail-compose-editor">
                                    <SunEditorComponent height={'200px'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ti-modal-footer">
                    <SpkButton buttontype="button" customClass="ti-btn ti-btn-light" Overlay="#mail-Compose">Cancel</SpkButton>
                    <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white !font-medium">Send</SpkButton>
                </div>
              </div>
            </div>
            </div>
            {/* <!-- End::composemail modal --> */}

        {/* <!-- Start::mail information offcanvas --> */}
        <div className="hs-overlay hidden ti-offcanvas ti-offcanvas-right mail-info-offcanvas" id="offcanvasRight">
            <div className="ti-offcanvas-body !p-0">
                <div className="mails-information">
                    <div className="mail-info-header flex gap-2 items-center">
                        <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                            <img src="../../../assets/images/faces/12.jpg" alt=""/>
                        </span>
                        <div className="flex-auto truncate">
                            <h6 className="mb-0 font-medium">Raiden stevie</h6>
                            <span
                                className="text-textmuted dark:text-textmuted/50 text-[11px]">raidenstevie777@gmail.com</span>
                        </div>
                        <div className="mail-action-icons flex items-center gap-1">
                        <SpkOverlay>
                                    <SpkButton variant="" buttontype="button" customClass="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-outline-light">
                                        <i className="ri-star-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Starred
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                                <SpkOverlay>
                                    <SpkButton variant="" buttontype="button" customClass="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-outline-light">
                                        <i className="ri-inbox-archive-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Archive
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                                <SpkOverlay>
                                    <SpkButton variant="" buttontype="button" customClass="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-outline-light">
                                        <i className="ri-spam-2-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Spam
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                                <SpkOverlay>
                                    <SpkButton variant="" buttontype="button" customClass="hs-tooltip-toggle ti-btn ti-btn-icon me-2 ti-btn-outline-light">
                                        <i className="ri-delete-bin-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Delete
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                                <SpkOverlay>
                                    <SpkButton variant="" buttontype="button" customClass="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-outline-light">
                                        <i className="ri-reply-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Reply
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                            <SpkButton Buttontype="button"
                                customClass="ti-btn ti-btn-icon ti-btn-outline-light !text-defaulttextcolor dark:!text-defaulttextcolor/80 border border-defaultborder dark:border-defaultborder/10 btn-wave"
                                Overlay="#offcanvasRight">
                            <span className="sr-only">Close modal</span>
                            <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                    fill="currentColor"></path>
                            </svg>
                           </SpkButton>
                        </div>
                        <div className="responsive-mail-action-icons">
                                <SpkDropdown Icon={true} Customclass="hidden me-1" Linktag={false}  arialexpand={false} IconClass="ti ti-dots-vertical"
                                    CustomToggleclass="ti-btn ti-btn-icon bg-light btn-wave waves-light waves-effect waves-light">
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i
                                                className="ri-star-line me-1 align-middle inline-block"></i>Starred</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i
                                                className="ri-inbox-archive-line me-1 align-middle inline-block"></i>Archive</Link>
                                    </li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i
                                                className="ri-spam-2-line me-1 align-middle inline-block"></i>Report
                                            Spam</Link></li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i
                                                className="ri-delete-bin-line me-1 align-middle inline-block"></i>Delete</Link>
                                    </li>
                                    <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i
                                                className="ri-reply-line me-1 align-middle inline-block"></i>Reply</Link></li>
                                </SpkDropdown>
                            <SpkButton Buttontype="button"
                            customClass="ti-btn ti-btn-icon ti-btn-light close-button !text-textmuted dark:!text-defaulttextcolor/80 btn-wave"
                            Overlay="#offcanvasRight">
                            <span className="sr-only">Close modal</span>
                            <svg className="w-3 h-3 !fill-textmuted" width="8" height="8" viewBox="0 0 8 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                    fill="currentColor"></path>
                            </svg>
                           </SpkButton>
                        </div>
                    </div>
                    <SimpleBar className="mail-info-body p-4" id="mail-info-body">
                        <div className="sm:flex block items-center justify-between mb-3">
                            <div>
                                <p className="text-xl font-medium mb-0">Strategic Insights Webinar: Navigating Future
                                    Trends.</p>
                            </div>
                            <div className="float-end">
                                <span className="text-xs text-textmuted dark:text-textmuted/50">Oct-22-2024,03:05PM</span>
                            </div>
                        </div>
                        <div className="main-mail-content mb-3">
                            <p className="text-[14px] font-medium mb-3">Greetings Mr Jack &#128400;,</p>
                            <p className="mb-2 text-textmuted dark:text-textmuted/50">We're excited to invite you to our
                                upcoming webinar, "Navigating Future Trends," where industry experts will share
                                strategic insights to help you stay ahead in an ever-evolving landscape. Join us on
                                [Date] at [Time] for an engaging session that promises to provide actionable knowledge
                                and valuable perspectives.</p>
                            <span className="block text-textmuted dark:text-textmuted/50 fw-meidum">Key Highlights :</span>
                            <ul className="text-textmuted dark:text-textmuted/50 my-3">
                                <li className="mb-2">Expert analysis of emerging trends</li>
                                <li className="mb-2">Practical strategies for staying competitive</li>
                                <li className="mb-2">Q&A session for personalized insights</li>
                            </ul>
                            <p className="mb-2 text-textmuted dark:text-textmuted/50">Earth has a diameter of roughly 8,000
                                miles (13,000 kilometers) and is mostly round because gravity generally pulls matter
                                into a ball. But the spin of our home planet causes it to be squashed at its poles and
                                swollen at the equator, making the true shape of the Earth an "oblate spheroid.".</p>
                            <p className="mb-0 mt-4">
                                <span className="block">Best Regards,</span>
                                <span className="block">Raiden stevie</span>
                            </p>
                        </div>
                        <div className="mail-attachments mb-3">
                            <div className="flex justify-between items-center">
                                <div className="mb-2">
                                    <span className="text-[14px] font-medium"><i
                                            className="ri-attachment-2 me-1 align-middle"></i>Attachments (5.8KB):</span>
                                </div>
                                <div className="btn-list">
                                    <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn">Download All</SpkButton>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4">
                                <div className="flex items-center flex-wrap gap-4 border p-2 rounded-md border-defaultborder dark:border-defaultborder/10">
                                    <div className="me-1 leading-none">
                                        <span className="avatar avatar-md bg-primary">
                                            <i className="ri-file-pdf-2-line text-lg"></i>
                                        </span>
                                    </div>
                                    <div className="flex-auto truncate">
                                        <Link scroll={false} href="#!">
                                            <p className="mb-1 text-xs font-medium">
                                                Instructions_file.pdf
                                            </p>
                                        </Link>
                                        <div className="text-xs text-textmuted dark:text-textmuted/50 text-wrap">2.1KB</div>
                                    </div>
                                    <div
                                        className="ms-auto ti-btn ti-btn-sm bg-primarytint1color/10 text-primarytint1color !rounded-full ti-btn-icon">
                                        <i className="ri-download-line"></i>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-4 border p-2 rounded-md border-defaultborder dark:border-defaultborder/10">
                                    <div className="me-1 leading-none">
                                        <span className="avatar avatar-md bg-primary">
                                            <i className="ri-file-pdf-line text-lg"></i>
                                        </span>
                                    </div>
                                    <div className="flex-auto truncate">
                                        <Link scroll={false} href="#!">
                                            <p className="mb-1 text-xs font-medium">
                                                Complete_Folder.doc
                                            </p>
                                        </Link>
                                        <div className="text-xs text-textmuted dark:text-textmuted/50 text-wrap">1.5KB</div>
                                    </div>
                                    <div
                                        className="ms-auto ti-btn ti-btn-sm bg-primarytint1color/10 text-primarytint1color !rounded-full ti-btn-icon">
                                        <i className="ri-download-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mail-images mb-3">
                            <div className="flex justify-between items-center">
                                <div className="mb-2">
                                    <span className="text-[14px] font-medium"><i
                                            className="ri-image-line me-1 align-middle"></i>Images:</span>
                                </div>
                                <div className="btn-list">
                                    <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn">Download All</SpkButton>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4">
                                <Link scroll={false} href="#!">
                                    <span className="avatar avatar-lg shadow-sm">
                                        <img src="../../../assets/images/media/media-74.jpg" alt=""/>
                                    </span>
                                </Link>
                                <Link scroll={false} href="#!">
                                    <span className="avatar avatar-lg shadow-sm">
                                        <img src="../../../assets/images/media/media-75.jpg" alt=""/>
                                    </span>
                                </Link>
                                <Link scroll={false} href="#!">
                                    <span className="avatar avatar-lg shadow-sm">
                                        <img src="../../../assets/images/media/media-77.jpg" alt=""/>
                                    </span>
                                </Link>
                                <Link scroll={false} href="#!">
                                    <span className="avatar avatar-lg bg-primary/10 !text-primary">
                                        5+
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-3">
                            <span className="text-[14px] font-medium"><i
                                    className="ri-reply-all-line me-1 align-middle inline-block"></i>Reply:</span>
                        </div>
                        <div className="mail-reply">
                            <div id="mail-reply-editor">
                                <SunEditorComponent height={'200px'} />
                            </div>
                        </div>
                    </SimpleBar>
                    <div className="mail-info-footer flex flex-wrap gap-2 items-center justify-between">
                        <div>
                                <SpkOverlay>
                                    <SpkButton buttontype="button" variant="soft-primary" customClass="hs-tooltip-toggle ti-btn ti-btn-icon">
                                        <i className="ri-printer-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Print
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                                <SpkOverlay>
                                    <SpkButton buttontype="button" variant="soft-secondary" customClass="hs-tooltip-toggle ti-btn ti-btn-icon">
                                        <i className="ri-mail-open-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Mark as read
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                                <SpkOverlay>
                                    <SpkButton buttontype="button" variant="soft-success" customClass="hs-tooltip-toggle ti-btn ti-btn-icon">
                                        <i className="ri-refresh-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Reload
                                        </span>
                                    </SpkButton>
                                </SpkOverlay>
                        </div>
                        <div>
                            <SpkButton customClass="ti-btn bg-secondary text-white">
                                <i className="ri-share-forward-line me-1 inline-block align-middle"></i>Forward
                            </SpkButton>
                            <SpkButton customClass="ti-btn bg-danger text-white ms-1">
                                <i className="ri-reply-all-line me-1 inline-block align-middle"></i>Reply
                            </SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End::mail information offcanvas --> */}
</Fragment>
);
};

export default MailApp;