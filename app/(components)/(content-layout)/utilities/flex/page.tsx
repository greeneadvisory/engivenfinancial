"use client"
import { Contentdata, Contentdata1, Contentdata3, Contentdata4 } from "@/shared/data/utilities/flexdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";

interface FlexProps {}

const Flex : FC<FlexProps>  = () => {
return (
<Fragment>
            <Seo title={"Flex"} />

            <Pageheader title="Utilities" currentpage="Flex" activepage="Flex" />
                 {/* <!-- Start:: row-1 --> */}
                   <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Enable flex behaviors
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex p-2">I'm a flexbox container!</div>
                                    </div>
                                    <div className="bd-example flex-container">
                                        <div className="inline-flex p-2">I'm an inline flexbox container!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Direction
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container">
                                        <div className="flex flex-row mb-4">
                                            <div className="p-2">Flex item 1</div>
                                            <div className="p-2">Flex item 2</div>
                                            <div className="p-2">Flex item 3</div>
                                        </div>
                                        <div className="flex flex-row-reverse">
                                            <div className="p-2">Flex item 1</div>
                                            <div className="p-2">Flex item 2</div>
                                            <div className="p-2">Flex item 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End:: row-1 --> */}

                    {/* <!-- Start:: row-2 --> */}
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Direction flex-col and flex-col-reverse
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <p className="mb-4">Direction Column</p>
                                        <div className="flex flex-col mb-4">
                                            <div className="p-2">Flex item 1</div>
                                            <div className="p-2">Flex item 2</div>
                                            <div className="p-2">Flex item 3</div>
                                        </div>
                                        <p className="mb-4">Column Reverse</p>
                                        <div className="flex flex-col-reverse">
                                            <div className="p-2">Flex item 1</div>
                                            <div className="p-2">Flex item 2</div>
                                            <div className="p-2">Flex item 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Justify content
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                    {Contentdata.map((idx) => (
                                        <div className={`flex justify-${idx.class}`} key={idx.id}>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    ))} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Align items
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="bd-example flex-container mb-4">
                                    {Contentdata1.map((idx) => (
                                        <div className={`flex items-${idx.class} h-[100px]`}  key={idx.id}>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Align self
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="bd-example flex-container mb-4">
                                    {Contentdata3.map((idx) => (
                                        <div className={`flex ${idx.class.includes("stretch")?"":"mb-4"} h-[100px]`}  key={idx.id}>
                                            <div className="p-2">Flex item</div>
                                            <div className={`align-self-${idx.class} p-2`}>Aligned flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-3 --> */}

                {/* <!-- Start:: row-4 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="grid gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Align content ( Heads up! This property has no effect on single rows of flex
                                            items.)
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            {Contentdata4.map((idx) => (
                                                <div className={`flex content-${idx.class} flex-wrap h-[200px]`}  key={idx.id}>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                    <div className="p-2">Flex item</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Order
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            <div className="flex flex-nowrap">
                                                <div className="order-3 p-2">First flex item</div>
                                                <div className="order-2 p-2">Second flex item</div>
                                                <div className="order-1 p-2">Third flex item</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                        <div className="grid  gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Fill
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            <div className="flex">
                                                <div className="p-2 flex-grow">Flex item with a lot of content</div>
                                                <div className="p-2 flex-grow">Flex item</div>
                                                <div className="p-2 flex-grow">Flex item</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Grow and shrink
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            <div className="flex mb-4">
                                                <div className="p-2 flex-grow">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Third flex item</div>
                                            </div>
                                            <div className="flex">
                                                <div className="p-2 w-full">Flex item</div>
                                                <div className="p-2 flex-shrink">Flex item</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Auto margins
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            <div className="flex mb-4">
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>

                                            <div className="flex mb-4">
                                                <div className="me-auto p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>

                                            <div className="flex mb-4">
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="ms-auto p-2">Flex item</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Wrap
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            <div className="flex flex-nowrap w-32">
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>
                                            <div className="flex flex-wrap-reverse">
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header">
                                        <div className="box-title">
                                            With items
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="bd-example flex-container mb-4">
                                            <div className="flex items-start flex-col mb-4 h-[200px]">
                                                <div className="mb-auto p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>

                                            <div className="flex items-end flex-col mb-4 h-[200px]">
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="mt-auto p-2">Flex item</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End:: row-4 --> */}
</Fragment>
);
};

export default Flex;