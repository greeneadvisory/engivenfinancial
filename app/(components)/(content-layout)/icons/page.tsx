"use client"
import SpkOverlay from "@/shared/@spk-reusable-components/uielements/spk-overlay";
import { Bootstrapicons, Boxicons, Feathericons, LineAwesomeicons, Remixiconsdata, Tablericons } from "@/shared/data/iconsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface IconsProps {}

const Icons : FC<IconsProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title={"Icons"} />

                <Pageheader title="Icons" currentpage="Icons" activepage="Icons" />

            {/* <!-- Page Header Close --> */}
           {/* <!-- Start::row-1 --> */}
               <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bootstrap Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://icons.getbootstrap.com/" target="_blank" className="text-primary">click here</a>.</p>
                            <p className="mb-4"><code>&lt;i className="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                    {Bootstrapicons.map((idx)=>(
                                        <SpkOverlay customClass="icons-list-item" as="li" key={idx.id}>

                                            <i className={`hs-tooltip-toggle  bi bi-${idx.text}`}></i>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                bi bi-{idx.text}
                                            </span>
                                        </SpkOverlay>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Remix Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://remixicon.com/" target="_blank" className="text-primary">click here</a>.</p>
                            <p className="mb-4"><code>&lt;i className="ri-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                            {Remixiconsdata.map((idx)=>(
                                     <SpkOverlay customClass="icons-list-item" as="li" key={idx.id}>
                                        <i className={`hs-tooltip-toggle ri ri-${idx.text}`}></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            ri ri-{idx.text}
                                        </span>
                                    </SpkOverlay>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Feather Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://feathericons.com/" target="_blank" className="text-primary">click here</a>.</p>
                            <p className="mb-4"><code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                    {Feathericons.map((idx)=>(
                                        <SpkOverlay customClass="icons-list-item" as="li" key={idx.id}>
                                            <i className={`hs-tooltip-toggle fe fe-${idx.text}`}></i>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                fe fe-{idx.text}
                                            </span>
                                        </SpkOverlay>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Tabler Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://tabler-icons.io/" target="_blank" className="text-primary">click here</a>.</p>
                            <p className="mb-4"><code>&lt;i className="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                            {Tablericons.map((idx)=>(
                                    <SpkOverlay customClass="icons-list-item" as="li" key={idx.id}>
                                            <i className={`hs-tooltip-toggle ti ti-${idx.text}`}></i>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                ti ti-{idx.text}
                                            </span>
                                    </SpkOverlay>
                                ))} 
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line Awesome Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://icons8.com/line-awesome" target="_blank" className="text-primary">click here</a>.</p>
                            <p className="mb-4"><code>&lt;i className="las la-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                {LineAwesomeicons.map((idx)=>(
                                    <SpkOverlay customClass="icons-list-item" as="li" key={idx.id}>
                                        <i className={`hs-tooltip-toggle las la-${idx.text}`}></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                            role="tooltip">
                                            las la-{idx.text}
                                        </span>
                                    </SpkOverlay>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Boxicons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://boxicons.com/" target="_blank" className="text-primary">click here</a>.</p>
                            <p className="mb-4"><code>&lt;i className="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                    {Boxicons.map((idx)=>(
                                            <SpkOverlay customClass="icons-list-item" as="li" key={idx.id}>
                                            <i className={`hs-tooltip-toggle bx bx-${idx.text}`}></i>
                                            <span
                                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                bx bx-{idx.text}
                                            </span>
                                        </SpkOverlay>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default Icons;