import { Fragment, useState } from "react";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/spk-packages/spk-lightbox-component";


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string

    const slidedata = [
        { src: "../../../assets/images/media/media-48.jpg" },
        { src: "../../../assets/images/media/media-49.jpg" },
        { src: "../../../assets/images/media/media-50.jpg" },
        { src: "../../../assets/images/media/media-51.jpg" },
        { src: "../../../assets/images/media/media-52.jpg" },
        { src: "../../../assets/images/media/media-53.jpg" },
        { src: "../../../assets/images/media/media-54.jpg" },
        { src: "../../../assets/images/media/media-55.jpg" },
        { src: "../../../assets/images/media/media-56.jpg" }

    ]
    return (
        <Fragment>
              <div className="grid grid-cols-12 gap-x-4 gap-y-3">
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-48.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-49.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-50.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-51.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-52.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-53.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-54.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-55.jpg" alt="image" />
                        </Link>
                    </div>
                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-6">
                        <Link scroll={false} href="#!" className="glightbox box mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-56.jpg" alt="image" />
                        </Link>
                    </div>
                </div>
            <Lightboxcomponent
                close={() => setOpen(false)} 
                zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} 
                open={open}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                slides={slidedata} index={0} />

        </Fragment>
    );
};



