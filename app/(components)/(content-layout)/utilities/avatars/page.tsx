"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatardata2, avatardata3, avatardata4, avatardata5, avatardata6, avatardata7, avatardata8, avatardata9  } from "@/shared/data/prism/utilities-prism";
import { Avataricon, Avatarinitial, Avatarnumber, Avataroffline, Avataronline, Avatarsize, Avatarstack } from "@/shared/data/utilities/avatarsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Showcode from "@/shared/layouts-components/showcode/showcode";
import Link from "next/link";
import React, { FC, Fragment } from "react";

interface AvatarsProps {}

const Avatars : FC<AvatarsProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title={"Avatars"} />

                <Pageheader title="Utilities" currentpage="Avatars" activepage="Avatars" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                        <Showcode title="Avatars" reactCode={avatar1}  customCardBodyClass="py-4">
                            <span className="avatar me-2 avatar-radius-0">
                                <img src="../../assets/images/faces/1.jpg" alt="img"/>
                            </span>
                            <span className="avatar me-2">
                                <img src="../../assets/images/faces/2.jpg" alt="img"/>
                            </span>
                            <span className="avatar me-2 avatar-rounded">
                                <img src="../../assets/images/faces/3.jpg" alt="img"/>
                            </span>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                    <Showcode title="Avatar With Icons <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'> Avatar contains icons to perform respective action.</p>" 
                        reactCode={avatar2} dataCode={avatardata2}  customCardBodyClass="">
                            {Avataricon.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={idx.id}>
                                <img src={idx.src} alt="img" />
                                <Link aria-label="anchor" scroll={false} href="#!"  className={`badge bg-${idx.color} rounded-full text-white avatar-badge`}><i className={`fe ${idx.icon} text-[.5rem]`}></i></Link>
                            </span>
                            ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                        <Showcode title="Avatar Sizes <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'>
                                    Avatars of different sizes  </p>" reactCode={avatar3} dataCode={avatardata3}  customCardBodyClass="">
                                {Avatarsize.map((idx)=>(
                                    <span className={`avatar avatar-${idx.class} me-2`} key={idx.id}>
                                        <img src={idx.src}  alt="img"/>
                                    </span>
                                ))}
                        </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                    <Showcode title="Avatar With Online Status Indicators <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'>  avatars having online status indicator. </p>" 
                        reactCode={avatar4} dataCode={avatardata4}  customCardBodyClass="">
                        {Avataronline.map((idx) => (
                        <span className={`avatar avatar-${idx.class} me-2 online avatar-rounded`} key={idx.id}>
                            <img src={idx.src} alt="img" />
                        </span>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                        <Showcode title=" Avatar With Ofline Status Indicators <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'> avatars having a offline status indicator. </p>"
                            reactCode={avatar5} dataCode={avatardata5} customCardBodyClass="">
                            {Avataroffline.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 offline avatar-rounded`} key={idx.id}>
                                <img src={idx.src} alt="img" />
                            </span>
                            ))}
                        </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                    <Showcode title=" Avatars With Number Badges <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'>Avatar numbers indicates the no. of unread notififactions/messages.</p>"
                        reactCode={avatar6} dataCode={avatardata6}  customCardBodyClass="">
                            {Avatarnumber.map((idx) => (
                            <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={idx.id}>
                                <img src={idx.src} alt="img" />
                                <SpkBadge variant={idx.color} customClass={`rounded-full text-white avatar-badge`}>{idx.number}</SpkBadge>
                            </span>
                            ))}
                    </Showcode>
                </div>
            </div>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-3 --> */}
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                        <Showcode title="Stacked Avatars <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'> Group of avatars stacked together.</p>"
                            reactCode={avatar7} dataCode={avatardata7}  customCardBodyClass="">
                                <div className="avatar-list-stacked">
                                    {Avatarstack.map((idx)=>(
                                    <span className="avatar" key={idx.id}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                    ))}
                                    <Link className="avatar bg-primary text-white"scroll={false} href="#!" >
                                        +8
                                    </Link>
                                </div>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                    <Showcode title="Rounded Stacked Avatars <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'> Group of avatars stacked together.</p>" reactCode={avatar8} dataCode={avatardata8}   customCardBodyClass="">
                        <div className="avatar-list-stacked">
                            {Avatarstack.map((idx)=>(
                                <span className="avatar avatar-rounded" key={idx.id}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                            <Link className="avatar bg-primary avatar-rounded text-white" href="#!" scroll={false} >
                                +8
                            </Link>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 lg:col-span-6 md:col-span-12 col-sm-12 col-span-12">
                        <Showcode title="Avatar With Initials   <p class='subtitle text-textmuted dark:text-textmuted/50 text-xs font-normal'>
                            Avatar contains intials when user profile doesn't exist.</p> " reactCode={avatar9} dataCode={avatardata9} customCardBodyClass="">
                                {Avatarinitial.map((idx)=>(
                                    <span className={`avatar avatar-${idx.class} text-white m-2 bg-${idx.color}`} key={idx.id}>
                                    {idx.data1}
                                    </span>
                                ))}
                        </Showcode>
                </div>
            </div>
            {/* <!-- End::row-3 --> */}
</Fragment>
);
};

export default Avatars;