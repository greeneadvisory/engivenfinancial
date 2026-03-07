"use client";
import SpkAccordions from "@/shared/@spk-reusable-components/advanced-ui/spk-accordions";
import { Activebordered, Alwaysopendata, Arrowbasicstretched, Arrowstretched, Basicaccordion, Basiccustomaccordion, Basicwithiconaccordion, Borderedaccordion, colored, Customaccaordion, Leftalignedicons, Nestingarrow, NoArrowdata, Primarysoftcolor, Secondarysoftcolor, Solidprimary, Solidsecondary, Successcolored, Witharrow } from "@/shared/data/adavanec-ui/accordionsdata";
import { data1, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data2, data3, data4, data5, data6, data7, data8, data9, reactaccordion1, reactaccordion10, reactaccordion11, reactaccordion12, reactaccordion13, reactaccordion14, reactaccordion15, reactaccordion16, reactaccordion17, reactaccordion18, reactaccordion19, reactaccordion2, reactaccordion3, reactaccordion4, reactaccordion5, reactaccordion6, reactaccordion7, reactaccordion8, reactaccordion9, reuseaccordion1, reuseaccordion10, reuseaccordion11, reuseaccordion12, reuseaccordion13, reuseaccordion14, reuseaccordion15, reuseaccordion16, reuseaccordion17, reuseaccordion18, reuseaccordion19, reuseaccordion2, reuseaccordion3, reuseaccordion4, reuseaccordion5, reuseaccordion6, reuseaccordion7, reuseaccordion8, reuseaccordion9 } from "@/shared/data/prism/advanced-ui-prism";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Showcode from "@/shared/layouts-components/showcode/showcode";
import React, { FC, Fragment } from "react";

interface AccordionsCollapseProps { }

const AccordionsCollapse: FC<AccordionsCollapseProps> = () => {
  return (
    <Fragment>
      <Seo title="Accordions-Collapse" />
      <Pageheader title="Advanced Ui" currentpage="Accordions" activepage="Accordions" />

      {/* <!-- Start:: row-1 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Basic Accordion" customCardClass="custom-box" reactCode={reactaccordion1} reusableCode={reuseaccordion1} dataCode={data1}>
            <SpkAccordions items={Basicaccordion} SvgIcon={true} Titletext="after" Toggleclass="hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Always Open" customCardClass="custom-box" reactCode={reactaccordion2} reusableCode={reuseaccordion2} dataCode={data2}>
            <SpkAccordions Alwaysopen={true} items={Alwaysopendata} SvgIcon={true} Titletext="after" Toggleclass="hs-accordion-toggle hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Nested" customCardClass="custom-box" reactCode={reactaccordion3} reusableCode={reuseaccordion3} dataCode={data3}>
            <SpkAccordions items={Nestingarrow} SvgIcon={true} Titletext="after" Toggleclass="hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="No arrow" customCardClass="custom-box" reactCode={reactaccordion4} reusableCode={reuseaccordion4} dataCode={data4}>
            <SpkAccordions items={NoArrowdata} Titletext="after" Toggleclass="hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="With arrow" customCardClass="custom-box" reactCode={reactaccordion5} reusableCode={reuseaccordion5} dataCode={data5} >
            <SpkAccordions items={Witharrow} SvgIcon={true} Titletext="after" Toggleclass="hs-accordion-active:text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="With title and arrow stretched" customCardClass="custom-box" reactCode={reactaccordion6} reusableCode={reuseaccordion6} dataCode={data6}>
            <SpkAccordions items={Arrowstretched} SvgIcon={true} Titletext="before" Toggleclass="hs-accordion-active:text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Bordered" customCardClass="custom-box" reactCode={reactaccordion7} reusableCode={reuseaccordion7} dataCode={data7}>
            <SpkAccordions items={Borderedaccordion} SvgIcon={true} Titletext="after" Toggleclass="hs-accordion-toggle dark:bg-bodybg dark:border-white/10 rounded-md hs-accordion-active:text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Active Content Bordered" customCardClass="custom-box" reactCode={reactaccordion8} reusableCode={reuseaccordion8} dataCode={data8}>
            <SpkAccordions items={Activebordered} SvgIcon={true} Titletext="before" Toggleclass="hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" />
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-1 --> */}

      {/* <!-- Start:: row-2 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Basic Custom Accordion" customCardClass="custom-box" reactCode={reactaccordion9} reusableCode={reuseaccordion9} dataCode={data9}>
            <SpkAccordions items={Basiccustomaccordion} Titletext="before" Toggleclass="accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Basic Accordion With Icon" customCardClass="custom-box" reactCode={reactaccordion10} reusableCode={reuseaccordion10} dataCode={data10}>
            <SpkAccordions items={Basicwithiconaccordion} Titletext="after" SvgIcon={true} Toggleclass="accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-2 --> */}

      {/* <!-- Start:: row-3 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-12 col-span-12">
          <Showcode title="Accordion Arrow Streched" customCardClass="custom-box" reactCode={reactaccordion11} reusableCode={reuseaccordion11} dataCode={data11}>
            <SpkAccordions items={Arrowbasicstretched} Titletext="before" SvgIcon={true} Toggleclass="accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-3 --> */}

      {/* <!-- Start:: row-4 --> */}
      <h6 className="mb-3 !text-defaulttextcolor">Light Colors:</h6>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Primary Soft Color" customCardClass="custom-box" reactCode={reactaccordion12} reusableCode={reuseaccordion12} dataCode={data12}>
            <SpkAccordions items={Primarysoftcolor} Titletext="before" SvgIcon={true} Toggleclass="hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Secondary Soft Color" customCardClass="custom-box" reactCode={reactaccordion13} reusableCode={reuseaccordion13} dataCode={data13}>
            <SpkAccordions items={Secondarysoftcolor} Titletext="before" SvgIcon={true} Toggleclass="hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-4 --> */}

      {/* <!-- Start:: row-5 --> */}
      <h6 className="mb-3 !text-defaulttextcolor">Solid Colors:</h6>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Primary" customCardClass="custom-box" reactCode={reactaccordion14} reusableCode={reuseaccordion14} dataCode={data14}>
            <SpkAccordions items={Solidprimary} Titletext="before" SvgIcon={true} Toggleclass="hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Secondary" customCardClass="custom-box" reactCode={reactaccordion15} reusableCode={reuseaccordion15} dataCode={data15}>
            <SpkAccordions items={Solidsecondary} Titletext="before" SvgIcon={true} Toggleclass="hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80" />
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-5 --> */}

      {/* <!-- Start:: row-6 --> */}
      <h6 className="mb-3 !text-defaulttextcolor">Colored Borders:</h6>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Primary" customCardClass="custom-box" reactCode={reactaccordion16} reusableCode={reuseaccordion16} dataCode={data16}>
            <div className="accordion accordion-border-primary accordions-items-seperate" id="accordionprimaryborderExample">
              <SpkAccordions items={colored} Titletext="before" SvgIcon={true} Toggleclass="accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between  gap-x-3 w-full font-semibold text-start  transition" />
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Success" customCardClass="custom-box" reactCode={reactaccordion17} reusableCode={reuseaccordion17} dataCode={data17}>
            <div className="accordion accordion-border-success accordions-items-seperate" id="accordionsuccessborderExample">
              <SpkAccordions items={Successcolored} Titletext="before" SvgIcon={true} Toggleclass="accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition" />
            </div>
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-6 --> */}

      {/* <!-- Start:: row-7 --> */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Left Aligned Icons" customCardClass="custom-box" reactCode={reactaccordion18} reusableCode={reuseaccordion18} dataCode={data18}>
            <div className="accordion accordionicon-left accordions-items-seperate" id="accordioniconLeftExample">
              <SpkAccordions items={Leftalignedicons} Titletext="after" SvgIcon={true} Toggleclass="accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition" />
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Custom Accordion" customCardClass="custom-box" reactCode={reactaccordion19} reusableCode={reuseaccordion19} dataCode={data19}>
            <div className="accordion customized-accordion accordions-items-seperate" id="customizedAccordion">
              <SpkAccordions items={Customaccaordion} Titletext="before" SvgIcon={true} Toggleclass="accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition" />
            </div>
          </Showcode>
        </div>
      </div>
      {/* <!-- End:: row-7 --> */}
    </Fragment>
  );
};

export default AccordionsCollapse;
