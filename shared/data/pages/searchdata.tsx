import { Fragment, useState } from "react";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/spk-packages/spk-lightbox-component";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString();
    const slidedata = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" }
    ]
    return (
        <Fragment>
          <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-40.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/6.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    Beginner</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Beginner In.co</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-41.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/2.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    Responsive</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Responsive Design</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-42.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/4.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    JavaScript</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                JavaScript Devlops</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}> 
                        <img src="../../assets/images/media/media-43.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/5.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    Layoutscss</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Layout SCSS</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-44.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/6.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    frontend</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Frontend Development.co</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-45.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/7.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    backenddevlops</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Backend Solutions</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-46.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/8.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    Frontend Dev</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Project innovations.in</div>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                    <Link scroll={false} href="#!"
                        className="glightbox search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                        <img src="../../assets/images/media/media-60.jpg" alt="image"/>
                        <div className="p-4 text-center bg-light">
                            <div className="flex items-center gap-1 justify-center mb-1">
                                <div className="avatar avatar-xs">
                                    <img src="../../assets/images/company-logos/9.png" alt=""/>
                                </div>
                                <div
                                    className="figure-caption text-[14px] font-medium text-defaulttextcolor">
                                    Flawless</div>
                            </div>
                            <div className="text-xs text-textmuted dark:text-textmuted/50">
                                Masters In.co</div>
                        </div>
                    </Link>
                </div>
                <div className="xl:col-span-12 col-span-12 mb-4 text-center">
                    <SpkButton  customClass="ti-btn bg-info/10 text-info ti-btn-loader mx-auto">
                        <span className="me-2">Loading</span>
                        <span className="loading"><i
                                className="ri-loader-4-line text-[1rem]"></i></span>
                    </SpkButton>
                </div>
        </div>
            <Lightboxcomponent
                close={() => setOpen(false)} 
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} 
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata}
            />

        </Fragment>
    );
};



