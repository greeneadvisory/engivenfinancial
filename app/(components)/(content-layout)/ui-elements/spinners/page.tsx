"use client"
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import { reactspinner1, reactspinner10, reactspinner2, reactspinner3, reactspinner4, reactspinner5, reactspinner6, reactspinner7, reactspinner8, reactspinner9, reusespinner1, reusespinner10, reusespinner2, reusespinner3, reusespinner4, reusespinner5, reusespinner6, reusespinner7, reusespinner8, reusespinner9, spinnerdata10, spinnerdata3, spinnerdata4 } from "@/shared/data/prism/utilities-prism";
import { Buttonspinner, Colorspinner, Growingspinner } from "@/shared/data/ui-elements/spinnersdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Showcode from "@/shared/layouts-components/showcode/showcode";
import React, { FC, Fragment } from "react";

interface SpinnersProps {}

const Spinners : FC<SpinnersProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
                <Seo title="Uielements-Spinners" />

                <Pageheader title="Ui Elements" currentpage="Spinners" activepage="Spinners" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start:: row-1 --> */}
            <div className="grid grid-cols-12  gap-6">
            <div className="xl:col-span-6 col-span-12">
                <Showcode title="Border Spinner" reactCode={reactspinner1} reusableCode={reusespinner1}>
                    <SpkSpinner>
                        <span className="sr-only">Loading...</span>
                    </SpkSpinner>
                </Showcode>
            </div>
            <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Growing Spinner" reactCode={reactspinner2} reusableCode={reusespinner2}>
                        <SpkSpinner customClass="!bg-black dark:!bg-light !animate-ping !border-transparent" Label="loading">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                    </Showcode>
            </div>
        </div>
        {/* <!-- End:: row-1 --> */}

        {/* <!-- Start:: row-2 --> */}
        <div className="grid grid-cols-12  gap-6">
            <div className="xl:col-span-12 col-span-12">
                <Showcode title="Colors" reactCode={reactspinner3} reusableCode={reusespinner3} dataCode={spinnerdata3}>
                    {Colorspinner.map((idx) => (
                    <SpkSpinner key={idx.id} customClass={`text-${idx.color} me-2`}>
                        <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                    ))}
                </Showcode>
            </div>
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title=" Growing spinner " reactCode={reactspinner4} reusableCode={reusespinner4} dataCode={spinnerdata4}>
                        <div className="space-x-6 space-y-4 rtl:space-x-reverse">
                            {Growingspinner.map((idx)=>(
                                <SpkSpinner Label="loading" customClass={`!animate-ping !border-transparent  bg-${idx.color}`} key={idx.id}>
                                    <span className="sr-only">Loading...</span>
                                </SpkSpinner>
                            ))}
                        </div>
                    </Showcode>
             </div>
        </div>
        {/* <!-- End:: row-2 --> */}

        {/* <!-- Start:: row-3 --> */}
        <div className="grid grid-cols-12  gap-6">
            <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Alignment Flex" reactCode={reactspinner5} reusableCode={reusespinner5}>
                        <div className="flex justify-center mb-6">
                            <SpkSpinner>
                                <span className="sr-only">Loading...</span>
                            </SpkSpinner>
                        </div>
                        <div className="flex items-center justify-between">
                            <strong>Loading...</strong>
                            <SpkSpinner>
                                <span className="sr-only">Loading...</span>
                            </SpkSpinner>
                        </div>
                    </Showcode>
            </div>
            <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Alignment Float" reactCode={reactspinner6} reusableCode={reusespinner6}>
                        <div className="clearfix mb-6">
                            <div className="ti-spinner ltr:float-right rtl:float-left" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="clearfix">
                            <div className="ti-spinner ltr:float-left rtl:float-right" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </Showcode>
            </div>
        </div>
        {/* <!-- End:: row-3 --> */}

        {/* <!-- Start:: row-4 --> */}
        <div className="grid grid-cols-12  gap-6">
            <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Alignment Text Center" reactCode={reactspinner7} reusableCode={reusespinner7}> 
                        <div className="text-center">
                            <SpkSpinner>
                                <span className="sr-only">Loading...</span>
                            </SpkSpinner>
                        </div>
                    </Showcode>
                    <Showcode title="Spinner Sizes" reactCode={reactspinner8} reusableCode={reusespinner8} customCardBodyClass="flex items-center">
                        <SpkSpinner customClass="!w-[1rem] !h-[1rem] me-6">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                        <SpkSpinner customClass="!w-[1rem] !h-[1rem] me-6">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                        <SpkSpinner customClass="!w-[1rem] !h-[1rem] !bg-black dark:!bg-white !animate-ping !border-transparent me-6">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                        <SpkSpinner customClass="me-6 w-12 h-12">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                        <SpkSpinner customClass="!bg-black dark:!bg-white !animate-ping !border-transparent w-8 h-8">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                    </Showcode>
            </div>
            <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Alignment Margin" reactCode={reactspinner9} reusableCode={reusespinner9}>
                         <SpkSpinner customClass="m-[3rem]">
                            <span className="sr-only">Loading...</span>
                        </SpkSpinner>
                    </Showcode>
            </div>
        </div>
        {/* <!-- End:: row-4 --> */}

        {/* <!-- Start:: row-5 --> */}
        <div className="grid grid-cols-12  gap-6">
            <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Buttons" reactCode={reactspinner10} reusableCode={reusespinner10} dataCode={spinnerdata10}>
                        <div className='flex flex-wrap gap-x-2'>
                            {Buttonspinner.map((idx) => (
                                <div key={idx.id}>
                                    <SpkButton buttontype="button" variant={idx.color} disabled="disabled"  customClass="ti-btn ti-btn-disabled ti-btn me-2" >
                                        <SpkSpinner Label="loading" customClass="text-white">
                                            <span className="sr-only">Loading...</span>
                                        </SpkSpinner>
                                   </SpkButton>
                                   <SpkButton buttontype="button" variant={idx.color} disabled="disabled"  customClass="ti-btn ti-btn-disabled ti-btn me-2" >
                                            <SpkSpinner Label="loading" customClass="text-white"></SpkSpinner>
                                                <span>Loading...</span>
                                    </SpkButton>
                                </div>
                            ))}
                        </div>
                    </Showcode>
            </div>
        </div>
        {/* <!-- End:: row-5 --> */}
</Fragment>
);
};

export default Spinners;