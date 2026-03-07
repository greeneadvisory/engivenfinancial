"use client"
import SpkAccordions from "@/shared/@spk-reusable-components/advanced-ui/spk-accordions";
import SpkSwiperJs from "@/shared/@spk-reusable-components/spk-packages/spk-swiperjs";
import SpkPricingcards from "@/shared/@spk-reusable-components/spk-pages/spk-pricingcards";
import Spkimagecapcards from "@/shared/@spk-reusable-components/uielements/cards/spkimagecapcards";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Landingaccordion, Landingaccordion1, Landingtestimonials } from "@/shared/data/landing/landingdata";
import { servicecards } from "@/shared/data/pages/landingdata";
import { pricingsdata } from "@/shared/data/pages/pricingdata";
import Seo from "@/shared/layouts-components/seo/seo";
import { ThemeChanger } from "@/shared/redux/action";
import store from "@/shared/redux/store";
import Link from "next/link";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";


interface LandingProps { }

const Landing: FC<LandingProps> = () => {
    const dispatch = useDispatch<any>();

    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState();
            dispatch(ThemeChanger({ ...theme, "toggled": "open", "dataNavLayout": "horizontal" }));

        }
    }
    useEffect(() => {

        const theme = store.getState();
        dispatch(ThemeChanger({

            ...theme,
            "dataNavStyle": "menu-click",
            "dataNavLayout": "horizontal",
            "dataHeaderStyles": "",
            "dataMenuStyles":"light",
            "dataWidth": '',
            "dataVerticalStyle": "",
            "bodyBg": "",
            "bgImg": "",
            "darkBg": "",
            "inputBorder": "",
            "lightRgb": "",
            "formControlBg": "",
            "gray": "",
                                         

        }));

        return () => {
            dispatch(ThemeChanger({
                ...theme,
                "dataNavStyle": "",
                "dataVerticalStyle": "",
                "dataMenuStyles":"dark",
                "dataNavLayout": `${localStorage.xintralayout == "horizontal" ? "horizontal" : "vertical"}`,
                "bodyBg": "",
                "bgImg": "",
                "darkBg": "",
                "inputBorder": "",
                "lightRgb": "",
                "formControlBg": "",
                "gray": "",


            }));
        };
    }, [dispatch]);
    // 


    const [isSticky, setIsSticky] = useState(false);

    const [activeLink, setActiveLink] = useState<string>(''); // State to track the active link
    const sectionsRef: any = {
        home: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        team: useRef<HTMLDivElement>(null),
        pricing: useRef<HTMLDivElement>(null),
        faqs: useRef<HTMLDivElement>(null),
        testimonials: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    // Handle the click event for smooth scrolling
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = sectionsRef[targetId]?.current;
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 64, // Adjust to your desired offset
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 30);

            const scrollPos = window.scrollY + 73; // Adjust to your scroll offset
            let active = '';

            // Check which section is in view
            Object.keys(sectionsRef).forEach((key) => {
                const ref = sectionsRef[key as keyof typeof sectionsRef];
                const section = ref.current;
                if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    active = key;
                }
            });

            setActiveLink(active); // Update active link state
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        function handleResize() {

            if (window.innerWidth <= 992) {
                const theme = store.getState();
                dispatch(ThemeChanger({ ...theme, "toggled": "close", "dataNavLayout": "horizontal" }));
            } else {
                const theme = store.getState();
                dispatch(ThemeChanger({ ...theme, "toggled": "open", "dataNavLayout": "horizontal" }));
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
    const overlayRef = useRef<HTMLElement | null>(null);
    function menuClose() {
        const theme = store.getState();
        if (window.innerWidth <= 992) {
            dispatch(ThemeChanger({ ...theme, toggled: "close" }));
        }
        if (overlayRef.current) {
            overlayRef.current.classList.remove("active");
        }
    }


    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <Fragment>
            <Seo title="Landing" />
            {/* <!-- Start::Header --> */}
            <header className="app-header" id="header">

                {/* <!-- Start::main-header-container --> */}
                <div className="main-header-container container-fluid">

                    {/* <!-- Start::header-content-left --> */}
                    <div className="header-content-left">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link scroll={false} href="/dashboard/sales" className="header-logo">
                                    <img src="../assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                                    <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            {/* <!-- Start::header-link --> */}
                            <Link scroll={false} aria-label="anchor" href="#!" className="sidemenu-toggle header-link" onClick={() => toggleNavigation()}>
                                <span className="open-toggle">
                                    <i className="ri-menu-3-line text-xl"></i>
                                </span>
                            </Link>
                            {/* <!-- End::header-link --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-left --> */}

                    {/* <!-- Start::header-content-right --> */}
                    <div className="header-content-right">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element items-center">
                            {/* <!-- Start::header-link|switcher-icon --> */}
                            <div className="ti-btn-list lg:hidden flex">
                                <Link scroll={false} href="/authentication/sign-up/basic" className="ti-btn ti-btn-soft-primary1">
                                    Sign Up
                                </Link>
                                <Link scroll={false} aria-label="anchor" href="#!"
                                    className="ti-btn m-0 p-2 px-3 ti-btn-primary ti-btn-icon  btn-wave"
                                    data-hs-overlay="#hs-overlay-switcher"><i
                                        className="ri-settings-3-line animate-spin-slow"></i></Link>
                            </div>
                            {/* <!-- End::header-link|switcher-icon --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-right --> */}

                </div>
                {/* <!-- End::main-header-container --> */}

            </header>
            {/* <!-- End::Header --> */}

            {/* <!-- Start::app-sidebar --> */}
            <div id="responsive-overlay" onClick={() => menuClose()}></div>
            <aside className={`app-sidebar ${isSticky ? "sticky-pin" : ""}`} id="sidebar">

                <div className="container-xl px-2">
                    {/* <!-- Start::main-sidebar --> */}
                    <div className="main-sidebar shadow-none">

                        {/* <!-- Start::nav --> */}
                        <nav className="main-menu-container nav nav-pills sub-open">
                            <div className="landing-logo-container">
                                <div className="horizontal-logo">
                                    <Link scroll={false} href="/dashboard/sales" className="header-logo">
                                        <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo"
                                            className="desktop-logo" />
                                        <img src="../assets/images/brand-logos/desktop-white.png" alt="logo"
                                            className="desktop-white" />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg></div>
                            <ul className="main-menu">
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} className={`side-menu__item ${activeLink === 'home' ? 'active' : ''}`} href="#home" onClick={(e) => handleClick(e, 'home')}>
                                        <span className="side-menu__label">Home</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} href="#about" className={`side-menu__item ${activeLink === 'about' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'about')}>
                                        <span className="side-menu__label">About</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} href="#team" className={`side-menu__item ${activeLink === 'team' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'team')}>
                                        <span className="side-menu__label">Team</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} href="#pricing" className={`side-menu__item ${activeLink === 'pricing' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'pricing')}>
                                        <span className="side-menu__label">Pricing</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} href="#faqs" className={`side-menu__item ${activeLink === 'faqs' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'faqs')}>
                                        <span className="side-menu__label">FAQ's</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} href="#testimonials" className={`side-menu__item ${activeLink === 'testimonials' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'testimonials')}>
                                        <span className="side-menu__label">Testimonials</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}
                                {/* <!-- Start::slide --> */}
                                <li className="slide">
                                    <Link scroll={false} href="#contact" className={`side-menu__item ${activeLink === 'contact' ? 'active' : ''}`} onClick={(e) => handleClick(e, 'contact')}>
                                        <span className="side-menu__label">Contact Us</span>
                                    </Link>
                                </li>
                                {/* <!-- End::slide --> */}

                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg></div>
                            <div className="lg:flex hidden">
                                <div className="ti-btn-list ti-btn-sm lg:flex hidden mt-lg-2 mt-xl-0 mt-0">
                                    <Link scroll={false} href="/authentication/sign-up/basic" className="ti-btn btn-wave bg-primarytint1color text-white">
                                        Sign Up
                                    </Link>
                                    <Link scroll={false} aria-label="anchor" href="#!"
                                        className="ti-btn m-0 p-2 px-3 ti-btn-primary ti-btn-icon btn-wave !font-medium"
                                        data-hs-overlay="#hs-overlay-switcher"><i
                                            className="ri-settings-3-line animate-spin-slow"></i></Link>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End::nav --> */}

                    </div>
                    {/* <!-- End::main-sidebar --> */}
                </div>

            </aside>
            {/* <!-- End::app-sidebar --> */}

            {/* <!-- Start::main-content --> */}
            <div className="main-content !p-0 landing-main dark:text-defaulttextcolor/70"
            >
                {/* <!-- Start::Home Content --> */}
                <div className="landing-banner" id="home" ref={sectionsRef.home}>
                    <section className="section">
                        <div className="container main-banner-container">
                            <div className="grid grid-cols-12 !sm:gap-x-6 pt-3">
                                <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-8 col-span-12">
                                    <div className="pt-lg-5 pb-4">
                                        <div className="mb-3">
                                            <h6 className="font-medium text-white opacity-90">Optimized and Accessible</h6>
                                        </div>
                                        <p className="landing-banner-heading mb-3 !text-white">Refined Design, Elevated User
                                            Experience:
                                            Explore <span className="font-semibold text-warning">Xintra</span> Template.</p>
                                        <div className="text-base mb-[3rem] text-white opacity-70">An intutive Nextjs template
                                            designed for efficiency, featuring a clean and modern interface that simplifies
                                            management tasks and enhances productivity.
                                        </div>
                                        <div className="flex items-center flex-wrap gap-2">
                                            <Link scroll={false} href="/dashboard/sales" className="m-1 ti-btn ti-btn-lg bg-white/10 text-white">
                                                View Demos
                                                <i className="ri-eye-line ms-2 align-middle"></i>
                                            </Link>
                                            <Link scroll={false} href="/dashboard/sales"
                                                className="m-1 ti-btn ti-btn-lg bg-primarytint1color text-white btn-wave waves-effect waves-light">
                                                Discover More
                                                <i className="ri-arrow-right-line ms-2 align-middle"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-4 col-span-12 my-auto">
                                    <div
                                        className="text-end landing-main-image landing-heading-img flex justify-end mb-[2.5rem]">
                                        <img src="../assets/images/media/landing/1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <!-- End::Home Content --> */}

                {/* <!-- Start:: Section-2 --> */}
                <section className="section" id="about" ref={sectionsRef.about}>
                    <div className="container relative">
                        <div className="text-center">
                            <p className="text-xs font-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">GLANCE</span>
                            </p>
                            <h4 className="!font-semibold mb-1 mt-4">Why you choose us ?</h4>
                            <div className="">
                                <div className="xl:col-span-7 col-span-12">
                                    <p className="text-textmuted dark:text-textmuted/50 text-[14px] mb-[3rem] font-normal">Our
                                        mission is to support you in achieving
                                        your goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-4 col-span-12">
                                <div
                                    className="box landing-card border shadow-none text-center border-defaultborder dark:border-defaultborder/10">
                                    <div className="box-body !p-[2rem]">
                                        <div className="mb-4">
                                            <span
                                                className="avatar avatar-lg bg-primary/10 svg-primary avatar-rounded border-4 border-primary/50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    fill="#000000" viewBox="0 0 256 256">
                                                    <path
                                                        d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <h6 className="font-semibold">Responsive and Accessible</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-4">Lorem ipsum dolor sit, amet
                                            consectetur adipisicing
                                            elitipsum dolor sit, amet consectetur</p>
                                        <Link scroll={false} href="#!"
                                            className="font-medium ti-btn ti-btn-sm ti-btn-primary">Read More<i
                                                className="ti ti-arrow-narrow-right text-base align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div
                                    className="box landing-card border shadow-none text-center border-defaultborder dark:border-defaultborder/10">
                                    <div className="box-body !p-[2rem]">
                                        <div className="mb-4">
                                            <span
                                                className="avatar avatar-lg bg-primarytint1color/10 svg-primarytint1color avatar-rounded border-4 border-primarytint1color/50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    fill="#000000" viewBox="0 0 256 256">
                                                    <path
                                                        d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <h6 className="font-semibold">Continuous Updates and Support</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-4">Lorem ipsum dolor sit, amet
                                            consectetur adipisicing
                                            elitipsum dolor sit, amet consectetur</p>
                                        <Link scroll={false} href="#!"
                                            className="font-medium ti-btn ti-btn-sm ti-btn-primary">Read More<i
                                                className="ti ti-arrow-narrow-right  text-base align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div
                                    className="box landing-card border shadow-none text-center border-defaultborder dark:border-defaultborder/10">
                                    <div className="box-body !p-[2rem]">
                                        <div className="mb-4">
                                            <span
                                                className="avatar avatar-lg bg-primarytint2color/10 svg-primarytint2color avatar-rounded border-4 border-primarytint2color/50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    fill="#000000" viewBox="0 0 256 256">
                                                    <path
                                                        d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <h6 className="font-semibold">Design and Customization</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-4">Lorem ipsum dolor sit, amet
                                            consectetur adipisicing
                                            elitipsum dolor sit, amet consectetur</p>
                                        <Link scroll={false} href="#!"
                                            className="font-medium ti-btn ti-btn-sm ti-btn-primary">Read More<i
                                                className="ti ti-arrow-narrow-right  text-base align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-2 --> */}

                {/* <!-- Start:: Section-3 --> */}
                <section className="section section-bg" id="expectations" >
                    <div className="container">
                        <div className="grid grid-cols-12 !sm:gap-x-6 mx-0">
                            <div className="xl:col-span-5 col-span-12">
                                <div className="home-proving-image">
                                    <img src="../assets/images/media/landing/2.png" alt=""
                                        className="img-fluid] about-image hidden xl:block" />
                                </div>
                                <div className="proving-pattern-1"></div>
                            </div>
                            <div className="xl:col-span-7 col-span-12 my-auto">
                                <div className="heading-section text-start mb-4">
                                    <p className="text-xs font-medium text-start text-success mb-1"><span
                                        className="landing-section-heading text-primary">ABOUT US</span>
                                    </p>
                                    <h4 className="mt-3 !font-semibold mb-2">Our Commitment!</h4>
                                    <div className="heading-description text-[14px]">Welcome to Xintra, our commitment is more
                                        than a statement; it's the cornerstone of everything we do.We are dedicated to
                                        design, ensuring that every interaction, project, and outcome reflects.</div>
                                </div>
                                <div className="grid grid-cols-12 !sm:gap-x-6 gap-y-3 mb-0">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i className="ri-focus-2-fill align-middle text-primary inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="text-[14px]">
                                                    <strong>Years of Experience and Reputation:</strong> We bring 4+ years
                                                    of experience, backed by a solid reputation for excellence.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i
                                                    className="ri-focus-2-fill align-middle text-primarytint1color inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="text-[14px]">
                                                    <strong>Professional Team:</strong> Our team consists of experienced and
                                                    professional individuals dedicated to delivering top-notch service.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i
                                                    className="ri-focus-2-fill align-middle text-primarytint2color inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="text-[14px]">
                                                    <strong>Client-Centric Approach:</strong> We understand that every
                                                    client is unique, so we tailor our services to meet your specific needs
                                                    and preferences.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="flex items-top">
                                            <div className="me-2 home-prove-svg">
                                                <i className="ri-focus-2-fill align-middle text-primarytint3color inline-block"></i>
                                            </div>
                                            <div>
                                                <span className="text-[14px]">
                                                    <strong>24/7 Support:</strong> We provide round-the-clock support, 365
                                                    days a year, ensuring that assistance is always available when you need
                                                    it most.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-3 --> */}

                {/* <!-- Start:: Section-4 --> */}
                <section className="section" id="services" >
                    <div className="container">
                        <div className="text-center">
                            <p className="text-xs font-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">SERVICES</span>
                            </p>
                            <h4 className="!font-semibold mt-3 mb-2">What You Get</h4>
                            <div className="">
                                <div className="">
                                    <p className="text-textmuted dark:text-textmuted/50 text-[14px] mb-5 font-normal">Nemo enim
                                        ipsam voluptatem quia voluptas sit
                                        aspernatur</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            {servicecards.map((idx) => (
                                <div className="xl:col-span-3 col-span-12" key={idx.id}>
                                    <Spkimagecapcards Customclass="landing-card" Custombodyclass="text-center !p-[2rem]">
                                        <div className="mb-4">
                                            <div
                                                className="p-2 border inline-block border-primary/20 bg-primary/10 rounded-full">
                                                <span className={`avatar avatar-lg avatar-rounded bg-${idx.bgColor} svg-white`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                        fill="#000000" viewBox="0 0 256 256">
                                                        <path
                                                            d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <h6 className="!font-semibold mb-2">{idx.title}</h6>
                                        <p className="text-textmuted dark:text-textmuted/50 mb-0">{idx.description}</p>
                                    </Spkimagecapcards>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-4 --> */}

                {/* <!-- Start:: Section-5 --> */}
                <section className="section landing-Features" id="features" >
                    <div className="container text-center">
                        <div className=" justify-center">
                            <div className="">
                                <div className="heading-section text-center mb-0">
                                    <p className="text-xs font-medium text-success mb-1"><span
                                        className="landing-section-heading landing-section-heading-dark text-white">FEATURES</span>
                                    </p>
                                    <h4 className="text-white text-center mt-3 font-medium">Our Features</h4>
                                    <div className="text-[14px] text-white text-center opacity-80 mb-4">Ullamco ea commodo.Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br />
                                        laudantium, totam rem aperiam.perspiciatis unde omnis.</div>
                                </div>
                            </div>
                            <div className="my-auto">
                                <div
                                    className="flex items-center justify-center trusted-companies sub-card-companies flex-wrap mb-3 mb-xl-0 gap-4">
                                    <div className="trust-img"><img src="../assets/images/media/landing/web/1.png" alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src="../assets/images/media/landing/web/2.png" alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src="../assets/images/media/landing/web/4.png" alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src="../assets/images/media/landing/web/5.png" alt="img"
                                        className="border-0 shadow-sm" /></div>
                                    <div className="trust-img"><img src="../assets/images/media/landing/web/6.png" alt="img"
                                        className="border-0 shadow-sm" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-5 --> */}

                {/* <!-- Start:: Section-6 --> */}
                <section className="section custom-landing" id="team" ref={sectionsRef.team}>
                    <div className="container">
                        <div className="text-center">
                            <p className="text-xs font-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">OUR TEAM</span>
                            </p>
                            <h4 className="!font-semibold mt-3 mb-2">The people who make our organization Successful</h4>
                            <div className="">
                                <div className="">
                                    <p className="text-textmuted dark:text-textmuted/50 text-[14px] mb-5 font-normal">Our team
                                        is made up of real people who are
                                        passionate about what they do.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                                <div className="box team-member text-center">
                                    <div className="team-bg-shape primary"></div>
                                    <div className="box-body !p-6">
                                        <div className="mb-4 leading-none flex gap-2 justify-center">
                                            <span className="avatar avatar-xl avatar-rounded bg-primary">
                                                <img src="../assets/images/faces/1.jpg" className="card-img" alt="..." />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p className="mb-2 text-[11px] badge leading-none bg-primary font-medium">Director
                                            </p>
                                            <h6 className="mb-3 font-semibold">Hadley Kylin</h6>
                                            <p className="text-textmuted dark:text-textmuted/50 text-xs">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since</p>
                                            <div className="flex justify-center mt-4">
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary  btn-wave ti-btn-sm waves-effect waves-light"><i
                                                        className="ri-twitter-x-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary1 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-facebook-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary2 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-instagram-line"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary3 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-linkedin-fill"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                                <div className="box team-member text-center">
                                    <div className="team-bg-shape teal"></div>
                                    <div className="box-body !p-6">
                                        <div className="mb-4 leading-none flex gap-2 justify-center">
                                            <span className="avatar avatar-xl avatar-rounded bg-teal">
                                                <img src="../assets/images/faces/8.jpg" className="card-img" alt="..." />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p className="mb-2 text-[11px] badge leading-none bg-primarytint1color font-medium">
                                                Board Director</p>
                                            <h6 className="mb-3 font-semibold">Owen Foster</h6>
                                            <p className="text-textmuted dark:text-textmuted/50 text-xs">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since</p>
                                            <div className="flex justify-center mt-4">
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary  btn-wave ti-btn-sm waves-effect waves-light"><i
                                                        className="ri-twitter-x-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary1 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-facebook-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary2 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-instagram-line"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary3 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-linkedin-fill"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                                <div className="box team-member text-center">
                                    <div className="team-bg-shape success"></div>
                                    <div className="box-body !p-6">
                                        <div className="mb-4 leading-none flex gap-2 justify-center">
                                            <span className="avatar avatar-xl avatar-rounded bg-success">
                                                <img src="../assets/images/faces/11.jpg" className="card-img" alt="..." />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p className="mb-2 text-[11px] badge leading-none bg-primarytint2color font-medium">
                                                Creative Director</p>
                                            <h6 className="mb-3 font-semibold">Stephen Roy</h6>
                                            <p className="text-textmuted dark:text-textmuted/50 text-xs">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since</p>
                                            <div className="flex justify-center mt-4">
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary  btn-wave ti-btn-sm waves-effect waves-light"><i
                                                        className="ri-twitter-x-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary1 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-facebook-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary2 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-instagram-line"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary3 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-linkedin-fill"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                                <div className="box team-member text-center">
                                    <div className="team-bg-shape orange"></div>
                                    <div className="box-body !p-6">
                                        <div className="mb-4 leading-none flex gap-2 justify-center">
                                            <span className="avatar avatar-xl avatar-rounded bg-orange">
                                                <img src="../assets/images/faces/4.jpg" className="card-img" alt="..." />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p className="mb-2 text-[11px] badge leading-none bg-primarytint3color font-medium">
                                                Board Director</p>
                                            <h6 className="mb-3 font-semibold">Jasmine Della</h6>
                                            <p className="text-textmuted dark:text-textmuted/50 text-xs">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since</p>
                                            <div className="flex justify-center mt-4">
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary  btn-wave ti-btn-sm waves-effect waves-light"><i
                                                        className="ri-twitter-x-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary1 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-facebook-fill"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary2 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-instagram-line"></i></Link>
                                                <Link scroll={false} aria-label="anchor" href="#!"
                                                    className="ti-btn ti-btn-icon ti-btn-soft-primary3 btn-wave ti-btn-sm ms-2 waves-effect waves-light"><i
                                                        className="ri-linkedin-fill"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-6 --> */}

                {/* <!-- Start:: Section-7 --> */}
                <section className="section section-bg" id="pricing" ref={sectionsRef.pricing}>
                    <div className="container">
                        <div className="text-center">
                            <p className="text-xs font-medium text-success mb-1"><span
                                className="landing-section-heading text-primary">PRICING</span>
                            </p>
                            <h4 className="!font-semibold mt-3 mb-2">Plans that flex with your needs.</h4>
                            <div className="">
                                <div className="">
                                    <p className="text-textmuted dark:text-textmuted/50 text-[14px] mb-5 font-normal">Stay agile
                                        with plans that seamlessly adjust to your changing requirements, ensuring you always
                                        have the flexibility you need.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">

                            <div className="xl:col-span-12 col-span-12" id="convertable-pricing">
                                <div className="flex justify-center mb-4">
                                    <div className="switcher-box">
                                        <span className="pricing-time-span">Monthly</span>
                                        <div className="switcher-pricing text-center">
                                            <input type="checkbox" className="pricing-toggle" defaultChecked={!isMonthly}
                                                onChange={handleToggle} />
                                        </div>
                                        <span className="pricing-time-span">Annually <SpkBadge variant="primarytint2color"
                                            className="leading-none">20% off</SpkBadge></span>
                                    </div>
                                </div>
                                <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                                    <div className="grid grid-cols-12">
                                        <div className="xl:col-span-12 lg:col-span-2 col-span-12"></div>
                                        <div className="xl:col-span-12 lg:col-span-8 col-span-12">
                                            <div className="grid grid-cols-12 gap-x-6 items-center justify-center mb-5">
                                                {pricingsdata.map((idx) => (
                                                    <div className="lg:col-span-12 xl:col-span-4 xxl:col-span-4 md:col-span-12 sm:col-span-12 col-span-12" key={idx.id}>
                                                        <SpkPricingcards card={idx} planType="monthly" landing={true} />

                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="xl:col-span-12 lg:col-span-2 col-span-12"></div>
                                    </div>
                                </div>
                                <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                                    <div className="grid grid-cols-12">
                                        <div className="xl:col-span-12 lg:col-span-2 col-span-12"></div>
                                        <div className="xl:col-span-12 lg:col-span-8 col-span-12">
                                            <div className="grid grid-cols-12 !sm:gap-x-6 items-center justify-center mb-5">
                                                {pricingsdata.map((idx) => (
                                                    <div className="lg:col-span-12 xl:col-span-4 xxl:col-span-4 md:col-span-8 sm:col-span-12 col-span-12" key={idx.id}>
                                                        <SpkPricingcards card={idx} landing={true} />
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                        <div className="xl:col-span-12 lg:col-span-2 col-span-12"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-7 --> */}

                {/* <!-- Start:: Section-8 --> */}
                <section className="section" id="faqs" ref={sectionsRef.faqs}>
                    <div className="container text-center">
                        <p className="text-xs font-medium text-success mb-1"><span
                            className="landing-section-heading text-primary">F.A.Q 's</span>
                        </p>
                        <h4 className="!font-semibold mt-3 mb-2">Frequently asked questions ?</h4>
                        <div className="grid grid-cols-12 !sm:gap-x-6 justify-center">
                            <div className="xl:col-span-7 col-span-12">
                                <p className="text-textmuted dark:text-textmuted/50 text-[14px] mb-5 font-normal">We have shared
                                    some of the most frequently asked
                                    questions to help you out.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-6 text-start">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                            id="accordionFAQ1">
                                            <SpkAccordions items={Landingaccordion} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10 hs-accordion-active:bg-primary/10    dark:hs-accordion-active:border hs-accordion-active:border-transparent dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <div className="accordion accordion-customicon1 accordion-primary accordions-items-seperate"
                                            id="accordionFAQ2">
                                            <SpkAccordions items={Landingaccordion1} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-active:!text-primary hs-accordion-active:border dark:border-defaultborder/10 hs-accordion-active:bg-primary/10    dark:hs-accordion-active:border hs-accordion-active:border-transparent dark:border-defaultborder/10-white/10 justify-between inline-flex items-center w-full font-semibold text-start text-[0.85rem] transition py-3 px-4 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-8 --> */}

                {/* <!-- Start:: Section-9 --> */}
                <section className="section landing-Features py-4" id="testimonials" ref={sectionsRef.testimonials}>
                    <div className="container reviews-container">
                        <div className="grid grid-cols-12 !sm:gap-x-6 justify-center pb-3">
                            <div className="xl:col-span-1 col-span-12"></div>
                            <div className="xl:col-span-10 col-span-12">
                                <div className="text-center mb-0 mt-4 heading-section">
                                    <p className="text-xs font-medium text-success mb-1"><span
                                        className="landing-section-heading landing-section-heading-dark text-white">TESTIMONALS</span>
                                    </p>
                                    <h4 className="mt-3 text-white mb-1">Discover What People Are Saying About Us</h4>
                                    <div className="text-[14px] text-white mb-4 opacity-80"> Customer reviews, social media and
                                        testimonials to discover how is our products or services.</div>
                                </div>
                                <SpkSwiperJs className="mySwiper pagination-dynamic testimonialSwiperService" slides={Landingtestimonials} spaceBetween={30} centeredSlides={false} breakpoint={breakpoints}
                                    slidesPerView={3} autoplay={true} pagination={true} />
                            </div>
                            <div className="xl:col-span-1 col-span-12"></div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-9 --> */}

                {/* <!-- Start:: Section-10 --> */}
                <section className="section" id="contact" ref={sectionsRef.contact}>
                    <div className="container text-center">
                        <p className="text-xs font-medium text-success mb-1"><span
                            className="landing-section-heading text-primary">CONTACT US</span>
                        </p>
                        <h4 className="!font-semibold mt-3 mb-2">Need Help? Find Your Answers Here!</h4>
                        <div className="grid grid-cols-12 gap-x-6 justify-center">
                            <div className="xl:col-span-9 col-span-12">
                                <p className="text-textmuted dark:text-textmuted/50 text-[14px] mb-5 font-normal"> Explore Our
                                    Comprehensive Support Resources! Get answers to your queries and find solutions.</p>
                            </div>
                        </div>
                        <div className="box-body p-0">
                            <div className="box contactus-form contactus-form-left overflow-hidden">
                                <div className="box-body text-start px-xl-5 px-4 py-5">
                                    <div className="grid grid-cols-12 gap-x-6 gap-y-3 pt-0">
                                        <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                                            <div className="mb-3">
                                                <i className="ri-map-pin-fill me-2 text-primary"></i> D.No: 1352/A-12, Street,
                                                Hyderabad.
                                            </div>
                                            <div className="mb-3">
                                                <i className="ri-phone-fill text-primary"></i> +122 1234 32422
                                            </div>
                                            <div className="mb-4">
                                                <i className="ri-mail-fill text-primary"></i> carolinahanna424@example.com
                                            </div><iframe allowFullScreen height="190" className="w-full"
                                                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin"
                                                style={{ border: "0" }}></iframe>
                                        </div>
                                        <div className="xxl:col-span-8 xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                                            <div className="grid grid-cols-12 !sm:gap-x-6 gap-y-3 text-start">
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label className="form-label" htmlFor="contact-address-firstname">First Name
                                                        :</label> <input className="form-control !bg-light dark:!bg-light"
                                                            id="contact-address-firstname" placeholder="Enter Name" type="text" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label className="form-label" htmlFor="contact-address-email">Email Id :</label>
                                                    <input className="form-control !bg-light dark:!bg-light" id="contact-address-email"
                                                        placeholder="Enter Email Id" type="email" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label className="form-label" htmlFor="contact-mail-message">Message :</label>
                                                    <textarea className="form-control !bg-light dark:!bg-light" id="contact-mail-message"
                                                        rows={3}></textarea>
                                                </div>
                                            </div>
                                            <div className=" mt-4">
                                                <SpkButton variant="primary"
                                                    customClass="ti-btn btn-wave btn-w-lg waves-effect waves-light">Send
                                                    Message</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-10 --> */}

                {/* <!-- Start:: Section-11 --> */}
                <section className="section landing-footer text-white">
                    <div className="container">
                        <div className="grid grid-cols-12 !sm:gap-x-6">
                            <div className="md:col-span-4 sm:col-span-6 col-span-12 md:mb-0 mb-3">
                                <div className="px-4">
                                    <p className="font-medium mb-3"><Link scroll={false} href="/dashboard/sales"><img
                                        src="../assets/images/brand-logos/desktop-dark.png" alt=""
                                        className="landing-footer-logo" /></Link></p>
                                    <p className="mb-2 opacity-60 font-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et magnam,
                                        fuga est mollitia eius, quo illum illo inventore optio aut quas omnis rem. Dolores
                                        accusantium aspernatur minus ea incidunt.
                                    </p>
                                    <p className="mb-0 opacity-60 font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing
                                        elit.
                                        Autem ea esse ad</p>
                                </div>
                            </div>
                            <div className="md:col-span-2 sm:col-span-6 col-span-12">
                                <div className="px-4">
                                    <h6 className="font-medium mb-3 text-white">PAGES</h6>
                                    <ul className="list-none opacity-60 font-normal landing-footer-list">
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Email</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Profile</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Timeline</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Projects</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Contacts</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Portfolio</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:col-span-2 sm:col-span-6 col-span-12">
                                <div className="px-4">
                                    <h6 className="font-medium text-white">INFO</h6>
                                    <ul className="list-none opacity-60 font-normal landing-footer-list">
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Contact US</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">About</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Services</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Blog</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white">Terms &amp;  Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:col-span-4 sm:col-span-6 col-span-12">
                                <div className="px-4">
                                    <h6 className="font-medium text-white">CONTACT</h6>
                                    <ul className="list-none font-normal landing-footer-list">
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white opacity-60"><i
                                                className="ri-home-4-line me-1 align-middle"></i> New York, NY 10012, US</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white opacity-60"><i
                                                className="ri-mail-line me-1 align-middle"></i> info@fmail.com</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white opacity-60"><i
                                                className="ri-phone-line me-1 align-middle"></i> +(555)-1920 1831</Link>
                                        </li>
                                        <li>
                                            <Link scroll={false} href="#!" className="text-white opacity-60"><i
                                                className="ri-printer-line me-1 align-middle"></i> +(123) 1293 123</Link>
                                        </li>
                                        <li className="mt-3">
                                            <p className="mb-2 font-medium opacity-80">FOLLOW US ON :</p>
                                            <div className="mb-0">
                                                <div className="ti-btn-list">
                                                    <SpkButton variant="soft-primary" Size="sm"
                                                        customClass="ti-btn ti-btn-icon  btn-wave waves-effect waves-light">
                                                        <i className="ri-facebook-line font-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton variant="soft-primary1" Size="sm"
                                                        customClass="ti-btn ti-btn-icon text-primarytint1color btn-wave waves-effect waves-light">
                                                        <i className="ri-twitter-x-line font-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton variant="soft-primary2" Size="sm"
                                                        customClass="ti-btn ti-btn-icon text-primarytint2color btn-wave waves-effect waves-light">
                                                        <i className="ri-instagram-line font-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton variant="soft-primary3" Size="sm"
                                                        customClass="ti-btn ti-btn-icon  text-primarytint3color btn-wave waves-effect waves-light">
                                                        <i className="ri-github-line font-bold"></i>
                                                    </SpkButton>
                                                    <SpkButton variant="soft-info" Size="sm"
                                                        customClass="ti-btn ti-btn-icon btn-wave waves-effect waves-light">
                                                        <i className="ri-youtube-line font-bold"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End:: Section-11 --> */}
                <div className="text-center landing-main-footer py-3">
                    <span className="text-textmuted dark:text-textmuted/50 text-[15px]"> Copyright © <span id="year">2026</span><Link scroll={false}
                        href="#!" className="text-primary font-medium"> <u>Engiven</u></Link>. All rights  reserved
                    </span>
                </div>
            </div>
            {/* <!-- End::main-content --> */}
        </Fragment>
    );
};

export default Landing