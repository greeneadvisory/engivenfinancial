"use client"
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { Orderlist, TopSellingItems } from "@/shared/data/dashboard/possystemdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

interface PosSystemProps {}

const PosSystem : FC<PosSystemProps>  = () => {
   
    function dec(el: any) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;
        if (Number(unit) === 0) {
            return (false);
        }
        else {
             el.currentTarget.parentElement.querySelector("input").value--
        }
    }

    function inc(el: any) {
        // let unit =
         el.currentTarget.parentElement.querySelector("input").value++
    }

    const Cartdata = [
        { id: 1, src: "../../assets/images/pos-system/17.jpg", heading: "Cappuccino", data: "Coffee" },
        { id: 2, src: "../../assets/images/pos-system/11.jpg", heading: "Frosting", data: "Cupcakes" },
        { id: 3, src: "../../assets/images/pos-system/9.jpg", heading: "Cheeseburger", data: "Burger" },
        { id: 4, src: "../../assets/images/pos-system/16.jpg", heading: "Cheese Pizza", data: "Pizza" },
        { id: 5, src: "../../assets/images/pos-system/10.jpg", heading: "Normal Pizza", data: "Pizza" },
    ]

    const isotope = useRef<Isotope | null>(null); // For Isotope instance
    const grid = useRef<HTMLDivElement | null>(null); // For grid element
    const [activeFilter, setActiveFilter] = useState("*"); // State for active filter
  
    useEffect(() => {
      let Isotope: any; // Declare variable for Isotope
  
      const initializeIsotope = async () => {
        const module = await import("isotope-layout"); // Dynamically import Isotope
        Isotope = module.default;
        if (grid.current) {
          isotope.current = new Isotope(grid.current, {
            itemSelector: ".card-item",
            layoutMode: "fitRows",
          });
        }
      };
  
      initializeIsotope();
  
      // Cleanup on component unmount
      return () => {
        isotope.current?.destroy();
        isotope.current = null;
      };
    }, []);
  
    const handleTabClick = (filter: string) => {
      setActiveFilter(filter); // Update active filter state
      isotope.current?.arrange({ filter }); // Trigger Isotope filtering
    };
  
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Dashboards-Possystem" />

            <Pageheader title="Dashboards" currentpage="POS System" activepage="POS System" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start Row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="flex items-center justify-between mb-3">
                            <h6 className="font-medium mb-0">Categories</h6>
                            <div className="flex gap-2 items-center">
                                <Link href="#!" scroll={false} className="categories-arrow left">
                                    <i className="ri-arrow-left-s-line"></i>
                                </Link>
                                <Link href="#!" scroll={false} className="categories-arrow right">
                                    <i className="ri-arrow-right-s-line"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="grid xxl:grid-cols-7 grid-cols-12 gap-x-6 pos-category" id="filter">
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12"  key="frst" onClick={() => handleTabClick("*")}>
                                <div className={`box  ${activeFilter === "*" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter="*">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md">
                                                    <img src="../../assets/images/pos-system/1.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">All Menu</span>
                                                    <span className="block opacity-70 text-xs">43 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12"  key="sec" onClick={() => handleTabClick(".pizza")} >
                                <div className={`box ${activeFilter === ".pizza" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories"
                                            data-filter=".pizza">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md menu-icon">
                                                    <img src="../../assets/images/pos-system/2.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">Pizza</span>
                                                    <span className="block opacity-70 text-xs">80 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12" key="third" onClick={() => handleTabClick(".burger")}>
                                <div className={`box ${activeFilter === ".burger" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories"
                                            data-filter=".burger">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md menu-icon">
                                                    <img src="../../assets/images/pos-system/3.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">Burger</span>
                                                    <span className="block opacity-70 text-xs">36 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12" key="fourth" onClick={() => handleTabClick(".waffle")}>
                                <div className={`box ${activeFilter === ".waffle" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories"
                                            data-filter=".waffle">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md menu-icon">
                                                    <img src="../../assets/images/pos-system/4.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">Waffle</span>
                                                    <span className="block opacity-70 text-xs">25 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12" key="five" onClick={() => handleTabClick(".icecream")}>
                                <div className={`box ${activeFilter === ".icecream" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories"
                                            data-filter=".icecream">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md menu-icon">
                                                    <img src="../../assets/images/pos-system/5.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">Ice Cream</span>
                                                    <span className="block opacity-70 text-xs">58 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12" key="six" onClick={() => handleTabClick(".coffee")}>
                                <div className={`box ${activeFilter === ".coffee" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories"
                                            data-filter=".coffee">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md menu-icon">
                                                    <img src="../../assets/images/pos-system/6.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">Coffee</span>
                                                    <span className="block opacity-70 text-xs">38 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-auto xl:col-span-4 md:col-span-6 col-span-12" key="seven" onClick={() => handleTabClick(".cupcakes")}>
                                <div className={`box ${activeFilter === ".cupcakes" ? "active" : ""}`}>
                                    <div className="box-body p-4">
                                        <Link scroll={false} href="#!" className="stretched-link categories"
                                            data-filter=".cupcakes">
                                            <div className="flex gap-2 categories-content flex-wrap justify-center">
                                                <span className="avatar avatar-md menu-icon">
                                                    <img src="../../assets/images/pos-system/7.png" alt=""/>
                                                </span>
                                                <div>
                                                    <span className="font-medium">CupCakes</span>
                                                    <span className="block opacity-70 text-xs">38 Items</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="flex items-center justify-between mb-3">
                                    <h6 className="font-medium mb-0">Items List</h6>
                                    <Link scroll={false} href="#viewcart" className="ti-btn ti-btn-primary"  data-hs-overlay="#hs-overlay-example"> View Cart<i className="ti ti-arrow-narrow-right ms-1"></i>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-12 gap-x-6 list-wrapper" ref={grid}>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item burger"
                                        data-category="burger">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/9.jpg" className="card-img-top" alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Classic
                                                        Cheeseburger</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Classic
                                                        Burgers</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$78.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                           Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item icecream"
                                        data-category="icecream">
                                        <div className="box p-4 out-of-stock">
                                            <img src="../../assets/images/pos-system/18.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Coconut
                                                        Almond Fudge</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Specialty
                                                        Flavors</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$29.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item coffee"
                                        data-category="coffee">
                                        <div className="box p-4 out-of-stock">
                                            <img src="../../assets/images/pos-system/17.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!"
                                                        className="font-medium text-[1rem]">Cappuccino</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Espresso
                                                        Beverages</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$7.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item cupcakes"
                                        data-category="cupcakes">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/11.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Frosting
                                                        Choices</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Cupcake
                                                        Creations</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$19.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item cupcakes"
                                        data-category="cupcakes">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/12.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Nutella
                                                        Cupcake</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Specialty
                                                        Cupcakes</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$123.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item pizza"
                                        data-category="pizza">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/16.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!"
                                                        className="font-medium text-[1rem]">Mediterranean</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Specialty
                                                        Pizzas</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$2.79</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                           Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item coffee"
                                        data-category="coffee">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/14.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Cold Brew
                                                        Concentrate</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Cold
                                                        Brews</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$1.29</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item burger"
                                        data-category="burger">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/15.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Blue Cheese
                                                        Burger</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Gourmet
                                                        Burgers</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$24.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item waffle"
                                        data-category="waffle">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/19.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Apple
                                                        Cinnamon Waffle</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Specialty
                                                        Waffles</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$24.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item pizza"
                                        data-category="pizza">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/10.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Pesto
                                                        Delight</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Specialty
                                                        Pizzas</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$24.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item icecream"
                                        data-category="icecream">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/8.jpg" className="card-img-top" alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!" className="font-medium text-[1rem]">Cookie Dough
                                                        Sundae</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Sundae
                                                        Creations</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$24.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12 card-item coffee"
                                        data-category="coffee">
                                        <div className="box p-4">
                                            <img src="../../assets/images/pos-system/13.jpg" className="card-img-top"
                                                alt="..." />
                                            <div className="box-body bg-secondary/10 rounded-bottom">
                                                <div className="mb-3">
                                                    <Link scroll={false} href="#!"
                                                        className="font-medium text-[1rem]">Americano</Link>
                                                    <span
                                                        className="text-xs text-textmuted dark:text-textmuted/50 block">Espresso
                                                        Beverages</span>
                                                </div>
                                                <div className="flex items-center gap-2 justify-between flex-wrap">
                                                    <h5 className="font-medium mb-0">$24.99</h5>
                                                    <div>
                                                        <SpkButton buttontype="button" variant="primary" Size="sm" customClass="ti-btn"
                                                            Overlay="#hs-overlay-example"><i
                                                                className="ri-add-fill me-1"></i>Add To Cart</SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="" className="">
                                    <ul className="ti-pagination mb-6 !p-0 justify-end float-end">
                                        <li className="page-item disabled"> <Link href="#!" scroll={false}
                                                className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !border-e-0 !rounded-tr-none !rounded-br-none">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false}
                                                className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                href="#!">1</Link></li>
                                        <li className="page-item " aria-current="page"> <Link scroll={false}
                                                className="page-link active px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-none !border-e-0"
                                                href="#!">2</Link> </li>
                                        <li className="page-item"> <Link scroll={false}
                                                className="page-link px-3 py-[0.375rem] !text-[1rem] bg-white dark:bg-bodybg !rounded-tl-none !rounded-bl-none !border-s-0"
                                                href="#!">Next</Link> </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box active">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Orders List
                                </div>
                                <SpkBadge variant="primarytint2color/10" customClass="!text-primarytint2color rounded-full">
                                    27 Items
                                </SpkBadge>
                            </div>
                            <div className="box-body p-0">
                                <ul className="ti-list-group mb-0 border-0 rounded-0">
                                    {Orderlist.map((item) => (
                                        <li className="ti-list-group-item border-t-0 border-start-0 border-end-0" key={item.id}>
                                            <div className="flex items-center flex-wrap">
                                                <div className="me-2 leading-none">
                                                    <span className="avatar avatar-lg bg-light">
                                                        <img src={item.imgSrc} alt={item.title}/>
                                                    </span>
                                                </div>
                                                <div className="flex-auto">
                                                    <p className="mb-0 font-medium">{item.title}</p>
                                                    <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Quantity : {item.quantity} <SpkBadge variant="success/10" customClass="!text-success ms-3">{item.discount}</SpkBadge></p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 text-end">
                                                        <Link scroll={false} aria-label="anchor" href="#!">
                                                            <i className="ri-close-line text-[1rem] text-danger"></i>
                                                        </Link>
                                                    </p>
                                                    <h6 className="mb-0 font-medium">{item.price}</h6>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="box-footer border-dashed">
                                <Link scroll={false} href="#!" className="ti-btn ti-btn-soft-primary grid">
                                    View All
                                </Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header justify-between items-center">
                                <div className="box-title">Top Selling Items </div>
                                <Link scroll={false} href="#!"
                                    className="ti-btn ti-btn-soft-primary border flex items-center ti-btn-sm">
                                    View All
                                </Link>
                            </div>
                            <div className="box-body">
                                <ul className="list-none !mb-0" id="product-list">
                                {TopSellingItems.map((item) => (
                                    <li className="mt-4" key={item.id}>
                                        <div className="flex items-center flex-wrap">
                                            <div className="me-3 leading-none">
                                                <span className="avatar avatar-lg bg-gray-200 avatar-rounded">
                                                    <img src={item.image} alt={item.name}/>
                                                </span>
                                            </div>
                                            <div className=" flex-auto">
                                                <span className="block mb-0 font-medium">
                                                    {item.name}
                                                    {item.discount && <SpkBadge variant={`${item.color}/10`} customClass={`!text-${item.color} ms-1 text-[0.5625rem]`}>{item.discount}</SpkBadge>}
                                                </span>
                                                <span className="text-textmuted dark:text-textmuted/50 text-xs">{item.category}</span>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-0 text-[14px] font-medium text-primary">{item.price}</p>
                                                <p className="mb-0 text-textmuted dark:text-textmuted/50">{item.orders}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="box p-4">
                            <div
                                className="text-center flex flex-row items-center  bg-primary/10 p-4 justify-between rounded-sm gap-1 flex-wrap">
                                <div className="pos-card-image ps-1">
                                    <img src="../../assets/images/pos-system/20.png" className="" alt="..." />
                                </div>
                                <SpkButton buttontype="button" variant="primary"
                                    customClass="ti-btn text-nowrap min-w-[8.125rem] me-2 ms-auto">Go
                                    Premium</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End::Row-1 --> */}

                {/* <!-- Start::offcanvas viewcart --> */}
                <div id="hs-overlay-example" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right !z-[105]" tabIndex={-1}>
                    <div className="ti-offcanvas-header">
                        <h6 className="ti-offcanvas-title">
                       Cart <SpkBadge variant="primarytint2color/10" customClass="ms-1 !font-normal !text-primarytint2color rounded-full !text-[0.625rem]">06 Items</SpkBadge>
                        </h6>
                        <SpkButton buttontype="button" customClass="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" Overlay="#hs-overlay-example">
                            <span className="sr-only">Close modal</span>
                            <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path>
                            </svg>
                        </SpkButton>
                    </div>
                    <div className="ti-offcanvas-body !h-[90%] !p-0">
                        <ul className="ti-list-group mb-0 border-0 rounded-0">
                            {Cartdata.map((idx) => (
                                <li className="ti-list-group-item border-t-0 border-start-0 border-end-0" key={idx.id}>
                                    <div className="flex items-start flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-xl bg-light">
                                                <img src={idx.src} alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-auto">
                                            <p className="mb-1 font-medium">{idx.heading}<span
                                                    className="text-[11px] text-textmuted dark:text-textmuted/50"> {idx.data}</span>
                                            </p>

                                            <div className="product-quantity-container order-summ">
                                                <div className="flex flex-nowrap gap-1 border rounded-full p-1 items-center  border-defaultborder dark:border-defaultborder/10">
                                                    <SpkButton buttontype="button" Label="button" onclickfunc={dec} Size="sm" variant="soft-primary"
                                                        customClass="ti-btn ti-btn-icon ti-btn-sm btn-wave !rounded-full !m-0  border border-defaultborder dark:border-defaultborder/10 product-quantity-minus border-end-0"><i
                                                            className="ri-subtract-line"></i></SpkButton>
                                                    <input type="text"
                                                        className="form-control form-control-sm border-0 text-center p-0"
                                                        aria-label="quantity" defaultValue="2"/>
                                                    <SpkButton buttontype="button" Label="button" onclickfunc={inc} Size="sm" variant="soft-primary"
                                                        customClass="ti-btn ti-btn-icon ti-btn-sm btn-wave !rounded-full !m-0  border border-defaultborder dark:border-defaultborder/10 product-quantity-plus border-start-0"><i
                                                            className="ri-add-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-end">
                                                <Link scroll={false} aria-label="anchor" href="#!">
                                                    <i className="ri-close-line text-[1rem] text-danger"></i>
                                                </Link>
                                            </p>
                                            <h6 className="mb-0 font-medium mt-auto">
                                                <SpkBadge variant="success/10" customClass="ms-3 text-[0.5625rem] !text-success">30% Off</SpkBadge> $3.99
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="p-4 border-b border-t border-dashed border-defaultborder dark:border-defaultborder/10">
                            <div className="flex items-center justify-between flex-wrap">
                                <div className="text-xs font-medium bg-primary/10 !text-primary p-1 px-2 rounded-md">SPRUKO1325</div>
                                <div className="text-success">COUPON APPLIED</div>
                            </div>
                        </div>
                        <div className="p-4 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-textmuted dark:text-textmuted/50">Sub Total</div>
                                <div className="font-medium text-[14px]">$318.00</div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-textmuted dark:text-textmuted/50">Discount</div>
                                <div className="font-medium text-[14px]">10% - $31.08</div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-textmuted dark:text-textmuted/50">Delivery Charges</div>
                                <div className="font-medium text-[14px]">- $29.00</div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-textmuted dark:text-textmuted/50">GST (10%)</div>
                                <div className="font-medium text-[14px]">+ $2.00</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-textmuted dark:text-textmuted/50">Service Tax (18%)</div>
                                <div className="font-medium text-[14px]">- $45.29</div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="text-[15px]">Total :</div>
                                <div className="font-semibold text-[1rem] text-dark"> $1,387.00</div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <Link scroll={false} href="#!"
                                    className="ti-btn bg-primarytint1color/10 !text-primarytint1color btn-wave flex-auto waves-effect waves-light">Save For
                                    Later</Link>
                                <Link scroll={false} href="/apps/ecommerce/checkout"
                                    className="ti-btn ti-btn-primary btn-wave flex-auto waves-effect waves-light">Pay Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- End::offcanvas viewcart --> */}
</Fragment>
);
};

export default PosSystem;