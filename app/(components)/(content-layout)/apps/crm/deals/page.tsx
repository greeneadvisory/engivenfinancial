"use client"
import SpkDealcards from "@/shared/@spk-reusable-components/apps/spk-deals";
import SpkDealsCard from "@/shared/@spk-reusable-components/apps/spk-dealscard";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkDropdown from "@/shared/@spk-reusable-components/uielements/spk-dropdown";
import { Dealsdata, Dealsdata1, Dealsdata2, Dealsdata3, Dealsdata4, Dealsdata5, Dealsdata6 } from "@/shared/data/apps/crm/dealsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";

interface DealsProps {}

const Deals : FC<DealsProps>  = () => {

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        if (date) {
            setStartDate(date);
        }
    };

    const firstContainerRef = useRef<HTMLDivElement>(null);
    const secondContainerRef = useRef<HTMLDivElement>(null);
    const thirdContainerRef = useRef<HTMLDivElement>(null);
    const fourthContainerRef = useRef<HTMLDivElement>(null);
    const fifthContainerRef = useRef<HTMLDivElement>(null);
    const sixthContainerRef = useRef<HTMLDivElement>(null);
    
    // State to control visibility of the "view-more-button"
    const [isViewMoreButtonVisible, setIsViewMoreButtonVisible] = useState(true);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const dragula = require("dragula");
        const containers = [
          firstContainerRef.current,
          secondContainerRef.current,
          thirdContainerRef.current,
          fourthContainerRef.current,
          fifthContainerRef.current,
          sixthContainerRef.current,
        ];
  
        if (firstContainerRef.current && secondContainerRef.current) {
          const drake = dragula(containers);
  
          // Checking if the first container has a specific class
          if (firstContainerRef.current.classList.contains("task-Null")) {
            setIsViewMoreButtonVisible(false);  // Hide the button based on the class
          }
        }
      }
    }, []);
         const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");
         const fileInputRef: any = useRef(null);
         const openFileInput = () => {
             if (fileInputRef.current) {
                 fileInputRef.current.click();
             }
         };
         const handleImageChange = (e: any) => {
            const selectedFile = e.target.files && e.target.files[0];
    
            if (selectedFile) {
                // You can handle the file here, for example, upload it to a server.
                const reader = new FileReader();
                reader.onload = (event: any) => {
                    setSelectedImage(event.target?.result);
                };
                reader.readAsDataURL(selectedFile);
            }
        };
return (
<Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Crm-Deals" />

            <Pageheader title="Apps" subtitle="CRM" currentpage="Deals" activepage="Deals" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex items-center flex-wrap gap-2 justify-between">
                                    <div className="flex items-center">
                                        <span className="font-medium text-[1rem] me-2">Deals</span>
                                        <SpkBadge variant="primary" customClass="align-middle">26</SpkBadge>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <SpkButton variant="primary" Size="sm" customClass="ti-btn" Overlay="#create-contact"><i className="ri-add-line me-1 font-medium align-middle"></i>New Deal</SpkButton>
                                        <SpkButton variant="soft-success" Size="sm" customClass="ti-btn">Export As CSV</SpkButton>
                                            <SpkDropdown Linktag={true} Linkclass="ti-btn bg-light ti-btn-sm btn-wave waves-effect waves-light ti-dropdown-toggle hs-dropdown-toggle"
                                              Toggletext="Sort By" Arrowicon={true}>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Newest</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">Date Added</Link></li>
                                                <li><Link scroll={false} className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                            </SpkDropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start::row-2 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    {Dealsdata.map((idx) => (
                        <div className="xxl:col-span-2 md:col-span-4 col-span-12" key={idx.id} >
                            <SpkDealcards  cardClass={`border ${idx.borderClass}`} bodyClass="p-3" mainClass="flex items-top flex-wrap justify-between" icon={idx.iconClass} iconClass={idx.title} iconColor={idx.color} badge={idx.badgeText} badgeColor={idx.color} iconColors={idx.color} />
                        </div>
                    ))}
                </div>
                {/* <!-- End::row-2 --> */}

                {/* <!-- Start::row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-2 col-span-12 firstdrag task-Null" id="leads-discovered"  ref={firstContainerRef}>
                        {Dealsdata1.map((idx) => (
                            <SpkDealsCard key={idx.id} cardClass="" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                        ))}
                    </div>
                    <div className="xxl:col-span-2 col-span-12" id="leads-qualified"  ref={secondContainerRef}>
                        {Dealsdata2.map((idx) => (
                            <SpkDealsCard key={idx.id} cardClass="" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                        ))}
                    </div>
                    <div className="xxl:col-span-2 col-span-12" id="contact-initiated"  ref={thirdContainerRef}>
                         {Dealsdata3.map((idx) => (
                            <SpkDealsCard key={idx.id} cardClass="" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                        ))}
                    </div>
                    <div className="xxl:col-span-2 col-span-12" id="needs-identified" ref={fourthContainerRef}>                        
                        {Dealsdata4.map((idx) => (
                            <SpkDealsCard key={idx.id} cardClass="" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                        ))}
                    </div>
                    <div className="xxl:col-span-2 col-span-12" id="negotiation" ref={fifthContainerRef}>
                          {Dealsdata5.map((idx) => (
                            <SpkDealsCard key={idx.id} cardClass="" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                        ))}
                    </div>
                    <div className="xxl:col-span-2 col-span-12" id="deal-finalized" ref={sixthContainerRef}>
                        {Dealsdata6.map((idx) => (
                            <SpkDealsCard key={idx.id} cardClass="" img={idx.avatar} Amounttext={idx.Amounttext} title={idx.name} date={idx.date} subtitle={idx.company} amount={idx.amount} company={idx.clientName} />
                        ))}
                    </div>
                </div>
                {/* <!-- End::row-3 --> */}

                {/* <!-- Start:: New Deal --> */}
                <div id="create-contact" className="hs-overlay hidden ti-modal">
                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                        <div className="max-h-full overflow-hidden ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semiboldmodal-title" id="staticBackdropLabel3">New Deal
                            </h6>
                            <SpkButton variant="" customClass="hs-dropdown-toggle ti-modal-close-btn" Overlay="#create-contact">
                            <span className="sr-only">Close</span>
                            <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                            </svg>
                            </SpkButton>
                        </div>
                        <div className="ti-modal-body overflow-y-auto">
                            <div className="grid grid-cols-12 gap-x-6 gap-y-3">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded">
                                            <img src={selectedImage || ''} alt="" id="profile-img"/>
                                            <SpkBadge variant="primary" customClass="rounded-full avatar-badge" onclickfun={openFileInput}>
                                                <input type="file" name="photo" className="absolute w-full h-full opacity-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}/>
                                                <i className="fe fe-camera"></i>
                                            </SpkBadge>
                                        </span>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-name" className="form-label">Contact Name</label>
                                    <input type="text" className="form-control" id="deal-name" placeholder="Contact Name"/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-lead-score" className="form-label">Deal Value</label>
                                    <input type="number" className="form-control" id="deal-lead-score" placeholder="Deal Value"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="company-name" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" id="company-name" placeholder="Company Name"/>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Last Contacted</label>
                                    <div className="input-group flex-nowrap">
                                        <div className="input-group-text text-textmuted dark:text-textmuted/50"> <i className="ri-calendar-line"></i> </div>
                                       
                                        <SpkDatepickr className="form-control flatpickr-input"   selected={startDate} onChange={handleDateChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <SpkButton variant="soft-secondary"  customClass="hs-dropdown-toggle ti-btn" Overlay="#create-contact">
                            Cancel
                            </SpkButton>
                            <Link scroll={false} className="ti-btn ti-btn-primary" href="#!">
                            Create Deal
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                {/* <!-- End:: New Deal --> */}
</Fragment>
);
};

export default Deals;