
"use client";
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from 'next/link';
import { Lightboxcomponent } from '@/shared/@spk-reusable-components/spk-packages/spk-lightbox-component';

export const Profilelist = () => {

    const [open, setOpen] = useState(false);
    const profileslides = [
        { src: "../../assets/images/media/media-40.jpg" },
        { src: "../../assets/images/media/media-41.jpg" },
        { src: "../../assets/images/media/media-42.jpg" },
        { src: "../../assets/images/media/media-43.jpg" },
        { src: "../../assets/images/media/media-44.jpg" },
        { src: "../../assets/images/media/media-45.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-60.jpg" },
        { src: "../../assets/images/media/media-26.jpg" },
        { src: "../../assets/images/media/media-32.jpg" },
        { src: "../../assets/images/media/media-30.jpg" },
        { src: "../../assets/images/media/media-31.jpg" },
        { src: "../../assets/images/media/media-46.jpg" },
        { src: "../../assets/images/media/media-59.jpg" },
        { src: "../../assets/images/media/media-61.jpg" },
        { src: "../../assets/images/media/media-42.jpg" }
    ]

    return (
        <>
                   <div className="grid grid-cols-12 sm:gap-x-6">
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-40.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-41.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-42.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-43.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-44.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-45.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-46.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-60.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-26.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12">
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1" onClick={() => setOpen(true)}>
                                <img src="../../assets/images/media/media-32.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12" onClick={() => setOpen(true)}>
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1">
                                <img src="../../assets/images/media/media-30.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12" onClick={() => setOpen(true)}>
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1">
                                <img src="../../assets/images/media/media-31.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12" onClick={() => setOpen(true)}>
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1">
                                <img src="../../assets/images/media/media-46.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12" onClick={() => setOpen(true)}>
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1">
                                <img src="../../assets/images/media/media-59.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12" onClick={() => setOpen(true)}>
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1">
                                <img src="../../assets/images/media/media-61.jpg" alt="image" />
                            </Link>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12" onClick={() => setOpen(true)}>
                            <Link scroll={false} href="#!" className="glightbox box" data-gallery="gallery1">
                                <img src="../../assets/images/media/media-42.jpg" alt="image" />
                            </Link>
                        </div>
                    </div>
            <Lightboxcomponent
                close={() => setOpen(false)} // Close function
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={profileslides}
            />
        </>
    );
};

/////
export const Profilecarddata = [
    { id: 1, src: "../../assets/images/faces/2.jpg", name: 'Della Jasmine', mail: "dellajasmine117@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 2, src: "../../assets/images/faces/15.jpg", name: 'Danny Raj', mail: "dannyraj658@gmail.com", role: 'UI Designer', color: 'success' },
    { id: 3, src: "../../assets/images/faces/5.jpg", name: 'Catalina Keira', mail: "catalinakeira023@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 4, src: "../../assets/images/faces/11.jpg", name: 'Priceton Gray', mail: "pricetongray451@gmail.com", role: 'Team Manager', color: 'warning' },
    { id: 5, src: "../../assets/images/faces/7.jpg", name: 'Sarah Ruth', mail: "sarahruth45@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 6, src: "../../assets/images/faces/12.jpg", name: 'Mahira Hose', mail: "mahirahose9456@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 7, src: "../../assets/images/faces/1.jpg", name: 'Victoria Gracie', mail: "victoriagracie@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 8, src: "../../assets/images/faces/13.jpg", name: 'Amith Gray', mail: "amithgray132@gmail.com", role: 'Product Designer', color: 'info' },
    { id: 9, src: "../../assets/images/faces/6.jpg", name: 'Isha Bella', mail: "ishabella255@gmail.com", role: 'Product Designer', color: 'info' }
]