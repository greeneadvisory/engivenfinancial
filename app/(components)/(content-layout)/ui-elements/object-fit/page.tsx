"use client"
import { object1, object10, object11, object12, object13, object14, object15, object2, object3, object4, object5, object6, object7, object8, object9 } from "@/shared/data/prism/utilities-prism";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Showcode from "@/shared/layouts-components/showcode/showcode";
import React, { FC, Fragment } from "react";

interface ObjectFtProps {}

const ObjectFt : FC<ObjectFtProps>  = () => {
return (
<Fragment>
            {/* <!-- Page Header --> */}
                    <Seo title="Uielements-Objectfit" />

                    <Pageheader title="Ui Elements" currentpage="Object Fit" activepage="Object Fit" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
                    <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <Showcode title="Object Fit Contain" reactCode={object1} customCardBodyClass="object-fit-container">
                                    <div className="object-fit-container">
                                        <img src="../../assets/images/media/media-28.jpg"
                                        className="object-contain border dark:border-defaultborder/10 !rounded-md"
                                        alt="..."/>
                                    </div>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <Showcode title="Object Fit Cover" reactCode={object2} customCardBodyClass="object-fit-container">
                                    <div className="object-fit-container">
                                        <img src="../../assets/images/media/media-28.jpg"
                                        className="object-cover border dark:border-defaultborder/10 md:!rounded-md" alt="..."/>
                                    </div>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <Showcode title="Object Fit Fill" reactCode={object3} customCardBodyClass="object-fit-container">
                                    <div className="object-fit-container">
                                        <img src="../../assets/images/media/media-28.jpg"
                                        className="object-fill border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                    </div>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Scale Down" reactCode={object4} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="object-scale-down border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit None" reactCode={object5} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="object-none border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Contain (SM -responsive)" reactCode={object6} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="sm:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                </div>
                             </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Contain (MD -responsive)" reactCode={object7} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="md:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                </div>
                           </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Contain (LG -responsive)" reactCode={object8} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="lg:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Contain (XL -responsive)" reactCode={object9} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="xl:object-contain border dark:border-defaultborder/10 !rounded-md" alt="..." />
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Contain (XXL -responsive)" reactCode={object10} customCardBodyClass="object-fit-container">
                                <div className="object-fit-container">
                                    <img src="../../assets/images/media/media-28.jpg"
                                    className="xxl:object-contain border dark:border-defaultborder/10 !rounded-md"
                                    alt="..." />
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Contain Video" customCardBodyClass="object-fit-container" reactCode={object11}>
                                <div className="object-fit-container">
                                    <video src="../../assets/video/1.mp4"
                                    className="object-contain !rounded-md border dark:border-defaultborder/10"
                                    autoPlay loop muted></video>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <Showcode title="Object Fit Cover Video" customCardBodyClass="object-fit-container" reactCode={object12}>
                                    <div className="object-fit-container">
                                        <video src="../../assets/video/1.mp4"
                                        className="object-cover !rounded-md border dark:border-defaultborder/10"
                                        autoPlay loop muted></video>
                                    </div>
                                </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Fill Video" customCardBodyClass="object-fit-container" reactCode={object13}>
                                <div className="object-fit-container">
                                    <video src="../../assets/video/1.mp4"
                                    className="object-fill !rounded-md border dark:border-defaultborder/10"
                                    autoPlay loop muted></video>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit Scale Video" customCardBodyClass="object-fit-container" reactCode={object14}>
                                <div className="object-fit-container">
                                    <video src="../../assets/video/1.mp4"
                                    className="object-scale-down !rounded-md border dark:border-defaultborder/10"
                                    autoPlay loop muted></video>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <Showcode title="Object Fit None Video" customCardBodyClass="object-fit-container" reactCode={object15}>
                                <div className="object-fit-container">
                                    <video src="../../assets/video/1.mp4"
                                    className="object-none !rounded-md border dark:border-defaultborder/10"
                                    autoPlay loop muted></video>
                                </div>
                            </Showcode>
                    </div>
                    </div>
            {/* <!-- End::row-1 --> */}
</Fragment>
);
};

export default ObjectFt;