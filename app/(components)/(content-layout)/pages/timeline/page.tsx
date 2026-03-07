"use client"
import SpkTimeline from "@/shared/@spk-reusable-components/spk-pages/timeline/spk-timeline1";
import Notification from "@/shared/@spk-reusable-components/spk-pages/timeline/spk-timeline2";
import SpkTimelineStep from "@/shared/@spk-reusable-components/spk-pages/timeline/spk-timeline3";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { notifications, steps, timelineData } from "@/shared/data/pages/timelinedata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface TimelineProps {}

const Timeline : FC<TimelineProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                <Seo title="Pages-Timeline" />

                <Pageheader title="Pages" currentpage="Timeline" activepage="Timeline" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start:: row-1 --> */}
                <div className="timeline-1">
                    <div className="max-w-[91.66666667%] mx-auto">
                        <div className="box border border-defaultborder dark:border-defaultborder/10 overflow-hidden">
                            <div className="box-header">
                                <div className="box-title">
                                    Timeline 01
                                </div>
                            </div>
                            <div className="box-body bg-light/[0.75]">
                                <div className="timeline">
                                    <div className="">
                                        <div className="max-w-[91.66666667%] mx-auto ">
                                            <SpkTimeline timelineData={timelineData} />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <div className="timeline-2">
                    <div className="max-w-[91.66666667%] mx-auto">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Timeline 02
                                </div>
                            </div>
                            <div className="grid grid-cols-12 sm:gap-x-6">
                                <div className="lg:col-span-1 col-span-12"></div>
                                <div className="lg:col-span-10 col-span-12">
                                    <ul className="notification px-3">
                                    {notifications.map((notification:any, index) => (
                                        <Notification key={index} {...notification} />
                                    ))}
                                     </ul>
                                </div>
                                <div className="lg:col-span-1 col-span-12"></div>
                            </div>
                             <div className="text-center mb-4">
                                <SpkButton  customClass="ti-btn bg-success/10 text-success ti-btn-loader mx-auto">
                                    <span className="me-2">Loading</span>
                                    <span className="loading"><i className="ri-loader-4-line text-[1rem]"></i></span>
                                </SpkButton>
                             </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-2 --> */}
                
                {/* <!-- Start:: row-3 --> */}
                <div className="timeline-3">
                    <div className="max-w-[91.66666667%] mx-auto">
                        <div className="box">
                            <div className="box-header pb-4">
                                <div className="box-title">Timeline 03</div>
                            </div>
                            <div className="box-body xxl:pt-12 xxl:mt-20">
                                <div className="timeline-steps">
                                    {steps.map((step, index) => (
                                        <SpkTimelineStep key={index} {...step} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}
</Fragment>
);
};

export default Timeline;