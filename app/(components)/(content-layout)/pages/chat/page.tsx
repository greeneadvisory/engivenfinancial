"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Chat1, Chat2, Chat3 } from "@/shared/data/pages/chatdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import EmojiPicker from 'emoji-picker-react';

interface ChatProps {}

const Chat : FC<ChatProps>  = () => {
    const [activeUser, setActiveUser] = useState({
        name: 'Kerina Cherish',
        image: '../../assets/images/faces/6.jpg',
        status: 'online',
    });

    const handleChatClick = (user: any) => {
        setActiveUser({
            name: user.heading,
            image: user.src,
            status: user.status,
        });
    };


    const chartWrapperRef = useRef<HTMLDivElement | null>(null); // Create a reference to the chart wrapper

    const toggleChat = () => {
      chartWrapperRef.current?.classList.add("responsive-chat-open");
    };
  
    const toggleChat1 = () => {
      chartWrapperRef.current?.classList.remove("responsive-chat-open");
    };

    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);
    
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Pages-Chat" />

                <Pageheader title="Pages" currentpage="Chat" activepage="Chat" />

            {/* <!-- Page Header Close --> */}
             <div ref={chartWrapperRef} className="main-chart-wrapper lg:gap-2 gap-0 mb-2 lg:flex" onClick={() => setShowPicker(false)}>
                    <div className="chat-info border border-defaultborder dark:border-defaultborder/10">
                        <div className="chat-search p-4 border-b border-defaultborder dark:border-defaultborder/10"> 
                            <div className="input-group"> 
                                <input type="text" className="form-control !border-s border-defaultborder dark:border-defaultborder/10" placeholder="Search Chat" aria-describedby="button-addon01"/> 
                                <SpkButton Label="button" customClass="ti-btn ti-btn-soft-primary !m-0" buttontype="button" Id="button-addon01">
                                    <i className="ri-search-line"></i>
                                </SpkButton> 
                            </div> 
                        </div>
                        <nav className="flex rtl:space-x-reverse p-4 border-b border-defaultborder dark:border-defaultborder/10 flex-wrap sm:flex-nowrap gap-2" aria-label="Tabs" role="tablist">
                            <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white flex-grow sm:flex-grow-0 bg-primary/10 py-2 px-[1.35rem] inline-flex items-center gap-2 text-sm font-medium text-center text-primary rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" Id="users-tab" Tab="#users-tab1" Controls="users-tab1">
                                Recent
                                <span className="!text-[0.63rem] py-[0.3rem] px-2 leading-none bg-primarytint1color !text-white rounded-full float-end shadow-sm">1</span>
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white flex-grow sm:flex-grow-0 py-2 px-[1.35rem] inline-flex items-center gap-2 bg-primary/10 text-sm font-medium text-center text-primary rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" Id="groups-tab" Tab="#groups-tab-pane" Controls="groups-tab-pane">
                                Groups
                                <span className="!text-[0.63rem] py-[0.3rem] px-2 leading-none bg-primarytint3color !text-white rounded-full float-end shadow-sm">2</span>
                            </SpkButton>
                            <SpkButton buttontype="button" customClass="hs-tab-active:bg-primary hs-tab-active:text-white flex-grow sm:flex-grow-0 py-2 px-[1.35rem] inline-flex items-center gap-2 bg-primary/10 text-sm font-medium text-center text-primary rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" Id="contacts-tab" Tab="#contacts-tab-pane" Controls="contacts-tab-pane">
                                Contacts
                            </SpkButton>
                          </nav>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane show active border-0 chat-users-tab" id="users-tab1" role="tabpanel" aria-labelledby="users-tab">
                                <SimpleBar className="list-none mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                                    <li className="pb-0">
                                        <p className="text-textmuted dark:text-textmuted/50 text-[11px] font-medium mb-2 opacity-70">ACTIVE CHATS</p>
                                    </li>
                                    {Chat1.map((idx: any, index: any) => (
                                    <li className={`checkforactive ${activeUser.name === idx.heading ? 'active' : 'chat-inactive'} ${idx.activeclass}`} key={index} onClick={() => handleChatClick(idx)}>
                                        <Link scroll={false} href="#!" >
                                            <div className="flex items-top">
                                                <div className="me-1 leading-none">
                                                    <span className={`avatar avatar-md ${idx.status} me-2`}>
                                                        <img  src={idx.src} alt="img"/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto" onClick={toggleChat}> 
                                                    <p className="mb-0 font-medium">
                                                      {idx.heading}
                                                    <span  className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">{idx.time}</span>
                                                    </p>
                                                    <p className="text-xs mb-0">
                                                        <span className="chat-msg truncate">{idx.description} &#128522;</span>
                                                            {idx.badge}
                                                         {idx.Icon === true ? <span className="chat-read-icon float-end align-middle"><i className="ri-check-double-fill"></i></span>
                                                                : ""
                                                            }
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    ))}
                                    <li className="pb-0">
                                        <p className="text-textmuted dark:text-textmuted/50 text-[11px] font-medium mb-2 opacity-70">ALL CHATS</p>
                                    </li>
                                    {Chat2.map((idx) => (
                                    <li className={`chat-item ${activeUser?.name === idx.heading ? 'active' : ''}`} key={idx.id}
                                        onClick={() => handleChatClick(idx)}>
                                        <Link scroll={false} href="#!" >
                                            <div className="flex items-top">
                                                <div className="me-1 leading-none">
                                                    <span className={`avatar avatar-md ${idx.status} me-2`} >
                                                        <img  src={idx.src} alt="img"/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto" onClick={toggleChat}>
                                                    <p className="mb-0 font-medium">
                                                    {idx.heading} <span
                                                            className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">{idx.time}</span>
                                                    </p>
                                                    <p className="text-xs mb-0">
                                                        <span className="chat-msg truncate">{idx.description}&#127916;</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    ))}
                                </SimpleBar>
                            </div>
                            <SimpleBar className="tab-pane border-0 chat-groups-tab hidden"  id="groups-tab-pane" role="tabpanel" aria-labelledby="groups-tab">
                           
                                <ul className="list-none mb-0 mt-2 ">
                                    <li className="pb-0">
                                        <p className="text-textmuted dark:text-textmuted/50 text-[11px] font-medium mb-1 opacity-70">MY CHAT GROUPS</p>
                                    </li>
                                    <li>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="mb-0 font-medium"><i className="ri-checkbox-blank-circle-fill leading-none text-primary me-1 text-[8px] align-middle"></i>Huge Rocks </p>
                                                <p className="mb-0"><SpkBadge variant="primarytint3color/10" customClass="text-primarytint3color">4
                                                        Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/10.jpg" alt="img"/>
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-white avatar-rounded"
                                                    href="#!">
                                                    +19
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="mb-0 font-medium"><i className="ri-checkbox-blank-circle-fill leading-none text-primarytint2color me-1 text-[8px] align-middle"></i>Creative Group </p>
                                                <p className="mb-0"><SpkBadge variant="primarytint2color/10" customClass="text-primarytint2color">32
                                                        Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/7.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/3.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/9.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/12.jpg" alt="img"/>
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-white avatar-rounded"
                                                    href="#!">
                                                    +123
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="mb-0 font-medium"><i className="ri-checkbox-blank-circle-fill leading-none text-primary3 me-1 text-[8px] align-middle"></i>Anyside Spriritual</p>
                                                <p className="mb-0"><SpkBadge variant="primarytint1color/10" customClass="text-primarytint1color">3
                                                        Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/4.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/13.jpg" alt="img"/>
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-white avatar-rounded"
                                                    href="#!">
                                                    +15
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="mb-0 font-medium"><i className="ri-checkbox-blank-circle-fill leading-none text-secondary me-1 text-[8px] align-middle"></i>Fun Time</p>
                                                <p className="mb-0"><SpkBadge variant="secondary/10" customClass="text-secondary">5
                                                        Online</SpkBadge></p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/7.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/14.jpg" alt="img"/>
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-white avatar-rounded"
                                                    href="#!">
                                                    +28
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="mb-0 font-medium"><i className="ri-checkbox-blank-circle-fill leading-none text-warning me-1 text-[8px] align-middle"></i>Latest News</p>
                                                <p className="mb-0"><SpkBadge variant="warning/10" customClass="text-warning">2 Online</SpkBadge>
                                                </p>
                                            </div>
                                            <div className="avatar-list-stacked my-auto">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/5.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/6.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/12.jpg" alt="img"/>
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/3.jpg" alt="img"/>
                                                </span>
                                                <a className="avatar avatar-sm bg-primary text-white avatar-rounded"
                                                    href="#!">
                                                    +53
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="list-none mb-0 mt-2 ">
                                 
                                        <li className="pb-0">
                                            <p className="text-textmuted dark:text-textmuted/50 text-[11px] font-medium mb-1 opacity-70">GROUP CHATS</p>
                                        </li>
                                        {Chat3.map((idx) => (
                                            <li className="checkforactive" key={idx.id}>
                                                <Link scroll={false} href="#!">
                                                    <div className="flex items-top">
                                                        <div className="me-1 leading-none">
                                                            <span className={`avatar avatar-md ${idx.status} me-2`}>
                                                                <img src={idx.src} alt="img"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-auto" onClick={toggleChat}>
                                                            <p className="mb-0 font-medium" >
                                                                {idx.heading} &#128525; <span
                                                                    className="float-end text-textmuted dark:text-textmuted/50 font-normal text-[11px]">{idx.time}</span>
                                                            </p>
                                                            <p className={`text-xs mb-0 ${idx.class}`}>
                                                                <span className={`chat-msg truncate`}>{idx.description}</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                                    {idx.badge}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </SimpleBar>
                            <div className="tab-pane border-0 chat-contacts-tab hidden" id="contacts-tab-pane" role="tabpanel" aria-labelledby="contacts-tab">
                                 <SimpleBar>
                                    <ul className="list-none mb-0 chat-contacts-tab">
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">A</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Ava Taylor
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/12.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Alice Angel
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">B</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/14.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Blessy diamond
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">D</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm bg-primary">
                                                        C
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Catalina Keira
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">D</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/7.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Danny Raj
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">G</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/15.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Gatin Leo
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">L</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm bg-primary">
                                                    M
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Monte Christ
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/2.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Thomas Lie
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">N</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/10.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Nelson Gold
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="text-defaulttextcolor font-semibold">V</span>
                                        </li>   
                                        <li>    
                                            <div className="flex items-center gap-4">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/faces/16.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <span className="block font-semibold">
                                                        Victoria Gracie
                                                    </span>
                                                </div>
                                                <SpkDropdown Customclass="hs-dropdown [--placement:bottom-right] rtl:[--placement:bottom-left]" Linktag={true}
                                                   Linkclass="ti-btn ti-btn-icon ti-btn-sm ti-btn-outline-light"  Icon={true} IconClass="ri-more-2-fill"
                                                    Menulabel="dropdownMenuButton1">
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-message-2-line me-2"></i>Chat</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-live-line me-2"></i>Video Call</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-edit-line me-2"></i>Edit</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-spam-2-line me-2"></i>Block</Link></li> 
                                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Link></li> 
                                                </SpkDropdown>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                    <div className="main-chat-area border border-defaultborder dark:border-defaultborder/10">
                        <div className="flex items-center border-b border-defaultborder dark:border-defaultborder/10 main-chat-head flex-wrap">
                            <span className="avatar avatar-md online chatstatusperson me-2 leading-none">
                                    <img className="chatimageperson" src={activeUser.image} alt="img"/>
                                </span>
                            <div className="flex-auto">
                                <p className="mb-0 font-medium text-[14px] leading-none">
                                    <a href="#!" data-hs-overlay="#offcanvasRight" className="chatnameperson responsive-userinfo-open">{activeUser.name}</a>
                                </p>
                                <p className="text-textmuted dark:text-textmuted/50 mb-0 chatpersonstatus">online</p>
                            </div>
                            <div className="flex flex-wrap rightIcons items-center gap-2">
                                <SpkButton Label="button" buttontype="button" variant="soft-primary1" customClass="ti-btn ti-btn-icon  my-0  ti-btn-sm">
                                    <i className="ti ti-phone"></i>
                                </SpkButton>
                                <SpkButton Label="button" buttontype="button" variant="soft-primary2" customClass="ti-btn ti-btn-icon my-0 ti-btn-sm hidden sm:block">
                                    <i className="ti ti-video"></i>
                                </SpkButton>
                                <SpkButton Label="button" buttontype="button" variant="outline-light" customClass="ti-btn ti-btn-icon responsive-userinfo-open ti-btn-sm">
                                    <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                                </SpkButton>
                                    <SpkDropdown CustomToggleclass="ti-btn-icon ti-dropdown-toggle ti-btn-soft-primary2 btn-wave waves-light ti-btn-sm waves-effect waves-light" Icon={true} IconClass="ti ti-dots-vertical"
                                        Menulabel="dropdownMenuButton1">
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-user-3-line me-1"></i>Profile</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-format-clear me-1"></i>Clear Chat</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-user-unfollow-line me-1"></i>Delete User</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-user-forbid-line me-1"></i>Block User</Link></li>
                                        <li><Link scroll={false} className="ti-dropdown-item" href="#!"><i className="ri-error-warning-line me-1"></i>Report</Link></li>
                                    </SpkDropdown>
                                <SpkButton Label="button" buttontype="button" customClass="ti-btn ti-btn-icon ti-btn-soft-danger my-0 responsive-chat-close ti-btn-sm" onclickfunc={toggleChat1}>
                                    <i className="ri-close-line"></i>
                                </SpkButton>
                            </div>
                        </div>
                        <SimpleBar className="chat-content" id="main-chat-content">
                            <ul className="list-none">
                                <li className="chat-day-label">
                                    <span>Today</span>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online chatstatusperson">
                                                <img className="chatimageperson" src={activeUser.image} alt="img"/>
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Hey!&#128522; How are you? What have you been up to lately?</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info">
                                                <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">10:20PM</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-end">
                                    <div className="chat-list-inner">
                                        <div className="me-3">
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Oh, hey! &#128516; I'm doing pretty well, thanks! Just been catching up on some reading and enjoying the nice weather. How about you?</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info">
                                                <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                            className="ri-check-double-line"></i></span>11:50PM</span> You
                                            </span>
                                        </div>
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online">
                                                <img src="../../assets/images/faces/15.jpg" alt="img"/>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online chatstatusperson">
                                                <img className="chatimageperson" src={activeUser.image} alt="img"/>
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">That sounds lovely! I've been keeping busy with work, but I'm looking forward to the weekend. Thinking of heading out for a hike if the weather holds up.</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info">
                                                <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:51PM</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-end">
                                    <div className="chat-list-inner">
                                        <div className="me-3">
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Nice! Hiking sounds like a great way to unwind. Which trail are you thinking of exploring?</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info">
                                                <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                            className="ri-check-double-line"></i></span>11:52PM</span> You
                                            </span>
                                        </div>
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online">
                                                <img src="../../assets/images/faces/15.jpg" alt="img"/>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online chatstatusperson">
                                                <img className="chatimageperson" src={activeUser.image} alt="img"/>
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">I'm thinking of checking out the one up at Pine Ridge. It's got some amazing views of the valley. Would you be interested in joining?</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info">
                                                <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:55PM</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-end">
                                    <div className="chat-list-inner">
                                        <div className="me-3">
                                            <div className="main-chat-msg">
                                                <div className="">
                                                    <p className="mb-0">That sounds fantastic! I'd like to come along. Let me know what time you're planning to head out, and I'll make sure to pack some snacks for the trail.</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info">
                                                <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                            className="ri-check-double-line"></i></span>11:52PM</span> You
                                            </span>
                                        </div>
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online">
                                                <img src="../../assets/images/faces/15.jpg" alt="img"/>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online">
                                                <img className="chatimageperson" src={activeUser.image} alt="img"/>
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">okay. &#128516;</p>
                                                </div>
                                            </div>
                                            <span className="chatting-user-info chatnameperson">
                                                {activeUser.name} <span className="msg-sent-time">11:45PM</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </SimpleBar>
                        <div className="chat-footer !border-defaultborder dark:!border-defaultborder/10">
                            <Link scroll={false} aria-label="anchor" className="ti-btn bg-primarytint1color/10 text-primarytint1color me-2 ti-btn-icon btn-send" href="#!">
                                <i className="ri-attachment-2"></i>
                            </Link>
                            <Link scroll={false} aria-label="anchor" className="ti-btn ti-btn-icon me-2 bg-primarytint2color text-white emoji-picker" href="#!"  onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation(); // Prevent the click from bubbling to parent
                                setShowPicker((prev) => !prev);
                                }}>
                                <i className="ri-emotion-line"></i>
                            </Link>
                            {showPicker && (
                                <div
                                ref={pickerRef}
                                style={{
                                    position: "absolute",
                                    zIndex: 1000,
                                    bottom: "3.5rem",
                                }}
                                onClick={(e) => e.stopPropagation()} // Prevent the picker itself from closing when clicked
                                >
                                <EmojiPicker />
                                </div>
                            )}
                            <input className="form-control chat-message-space" placeholder="Type your message here..." type="text"/>
                            <Link scroll={false} aria-label="anchor" className="ti-btn ti-btn-primary ms-2 ti-btn-icon btn-send" href="#!">
                                <i className="ri-send-plane-2-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
</Fragment>
);
};

export default Chat;