"use client"
import React, { FC, Fragment } from "react";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { buttondata1, buttondata12, buttondata13, buttondata14, buttondata15, buttondata16, buttondata17, buttondata18, buttondata19, buttondata20, buttondata21, buttondata3, buttondata5, buttondata7, reactbuttons1, reactbuttons10, reactbuttons11, reactbuttons12, reactbuttons13, reactbuttons14, reactbuttons15, reactbuttons16, reactbuttons17, reactbuttons18, reactbuttons19, reactbuttons2, reactbuttons20, reactbuttons21, reactbuttons22, reactbuttons3, reactbuttons4, reactbuttons5, reactbuttons6, reactbuttons7, reactbuttons8, reactbuttons9, reusebuttons1, reusebuttons10, reusebuttons11, reusebuttons12, reusebuttons13, reusebuttons14, reusebuttons15, reusebuttons16, reusebuttons17, reusebuttons18, reusebuttons19, reusebuttons2, reusebuttons20, reusebuttons21, reusebuttons22, reusebuttons3, reusebuttons4, reusebuttons5, reusebuttons6, reusebuttons7, reusebuttons8, reusebuttons9 } from "@/shared/data/prism/ui-elements-prism";
import { Buttonwidths, Custombuttons, Defaultbutton, Differentcolored, Differentshadows, Disabledanchortags, ghostbuttons, gradientbuttons, IconButtons, Labelbuttons, Lightbuttons, Loadingbuttons, outlinebuttons, Sizes, SocialButtons } from "@/shared/data/ui-elements/buttonsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Showcode from "@/shared/layouts-components/showcode/showcode";
import Link from "next/link";

interface ButtonsProps {}

const Buttons : FC<ButtonsProps>  = () => {
return (
<Fragment>
        {/* <!-- Page Header --> */}
            <Seo title="Uielements-Buttons" />

            <Pageheader title="Ui Elements" currentpage="Buttons" activepage="Buttons" />

        {/* <!-- Page Header Close --> */}
        {/* <!--ROW-START--> */}
                <div className="grid grid-cols-12 gap-x-6 custom-buttons">
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Default Buttons" reactCode={reactbuttons1}  reusableCode={reusebuttons1} dataCode={buttondata1}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    <SpkButton buttontype="button" customClass="ti-btn !me-0 " variant="primary">Primary</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn" variant="secondary">Secondary</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn" variant="success">Success</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn" variant="danger">Danger</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn" variant="warning">Warning</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn" variant="info">Info</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn" variant="light">Light</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn ti-btn-dark" variant="">Dark</SpkButton>
                                    <SpkButton buttontype="button" customClass="ti-btn ti-btn-link" variant="">Link</SpkButton>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Rounded Buttons" reactCode={reactbuttons2}  reusableCode={reusebuttons2}  dataCode={buttondata1}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {Defaultbutton.map((idx) => (
                                        <SpkButton  buttontype="button"  customClass={`ti-btn !me-0 !rounded-full ti-btn-wave ${idx.color1}`} variant={idx.color}  key={idx.id} >
                                            {idx.class}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Light Buttons" reactCode={reactbuttons3}  reusableCode={reusebuttons3}  dataCode={buttondata3}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {Lightbuttons.map((idx) => (
                                        <SpkButton  buttontype="button" customClass={`ti-btn !me-0 ${idx.color}`}  variant=""  key={idx.id}   >
                                                {idx.class}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Light Rounded Buttons" reactCode={reactbuttons4}  reusableCode={reusebuttons4}  dataCode={buttondata3}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                        {Lightbuttons.map((idx) => (
                                            <SpkButton  buttontype="button"  variant="" customClass={`ti-btn !me-0 !rounded-full ti-btn-wave ${idx.color} `}  key={idx.id} >
                                                {idx.class}
                                            </SpkButton>
                                        ))}
                                    </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Outline Buttons" reactCode={reactbuttons5}  reusableCode={reusebuttons5}  dataCode={buttondata5}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {outlinebuttons.map((idx) => (
                                        <SpkButton buttontype="button"  variant={`outline-${idx.color}`}  customClass={`ti-btn !me-0 ${idx.color1}`}  key={idx.id} >
                                            {idx.class}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Rounded Outline Buttons" reactCode={reactbuttons6}  reusableCode={reusebuttons6}  dataCode={buttondata5}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {outlinebuttons.map((idx) => (
                                        <SpkButton  buttontype="button"  variant={`outline-${idx.color}`}  customClass={`ti-btn !me-0 !rounded-full ti-btn-wave ${idx.color1}`}  key={idx.id} >
                                            {idx.class}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Gradient Buttons" reactCode={reactbuttons7}  reusableCode={reusebuttons7}  dataCode={buttondata7}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {gradientbuttons.map((idx) => (
                                        <SpkButton  buttontype="button"  variant=""  customClass={`ti-btn !me-0 ti-btn-wave ${idx.color}`}  key={idx.id} >
                                            {idx.class}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Rounded Gradient Buttons" reactCode={reactbuttons8}  reusableCode={reusebuttons8}  dataCode={buttondata7}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {gradientbuttons.map((idx) => (
                                        <SpkButton  buttontype="button"  variant=""  customClass={`ti-btn !me-0 !rounded-full ti-btn-wave ${idx.color}`}  key={idx.id} >
                                            {idx.class}
                                    </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Ghost Buttons" reactCode={reactbuttons9}  reusableCode={reusebuttons9}  dataCode={buttondata7}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {ghostbuttons.map((idx) => (
                                        <SpkButton buttontype="button"  variant="" customClass={`ti-btn !me-0 ${idx.color}`}  key={idx.id} >
                                            {idx.class}
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                                <Showcode title="Rounded Ghost Buttons" reactCode={reactbuttons10}  reusableCode={reusebuttons10}  dataCode={buttondata7}>
                                    <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                            {ghostbuttons.map((idx) => (
                                                <SpkButton buttontype="button"  variant=""  customClass={`!rounded-full !me-0 ti-btn ${idx.color}`}  key={idx.id} >
                                                    {idx.class}
                                                </SpkButton>
                                            ))}
                                    </div>
                                </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                             <Showcode title="Button Tags" reactCode={reactbuttons11}  reusableCode={reusebuttons11}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    <a className="ti-btn ti-btn-primary btn-wave  !me-0" href="#!">Link</a>
                                    <SpkButton  variant="secondary" customClass="ti-btn btn-wave  " type="submit">Button</SpkButton>
                                    <input className="ti-btn ti-btn-info" type="button" value="Input"/>
                                    <input className="ti-btn ti-btn-warning" type="button" value="Submit"/>
                                    <input className="ti-btn ti-btn-success" type="button" value="Reset"/>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Disable State With anchor Tags" reactCode={reactbuttons12}  reusableCode={reusebuttons12}  dataCode={buttondata12}>
                                <div className="ti-btn-list sm:flex">
                                    <div className="mb-4">
                                        {Disabledanchortags.map((idx)=>(
                                            <SpkButton  key={idx.id}  buttontype="button"  variant={idx.color} disabled={true}  customClass="ti-btn " >
                                                {idx.title}
                                            </SpkButton>
                                        ))}
                                    </div>

                                    <div>
                                        
                                        <Link href="#!" scroll={false} className="ti-btn ti-btn-primary ti-btn-disabled" aria-disabled="true">Primary
                                            link</Link>
                                        <Link href="#!" scroll={false} className="ti-btn ti-btn-secondary ti-btn-disabled" aria-disabled="true">Link</Link>
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Loading Buttons" reactCode={reactbuttons13}  reusableCode={reusebuttons13}  dataCode={buttondata13}>
                                <div className="ti-btn-list md:flex flex-wrap">
                                        {Loadingbuttons.map((idx)=>(
                                            <SpkButton  key={idx.id}  buttontype="button" variant={idx.color}  customClass={idx.customcls} >
                                                {idx.htmltext}
                                            </SpkButton>
                                        ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Icon Buttons" reactCode={reactbuttons14}  reusableCode={reusebuttons14}  dataCode={buttondata14}>
                                <div className="ti-btn-list md:flex block gap-x-6 ">
                                    <div className="md:mb-0 mb-2 flex gap-x-2">
                                            {IconButtons.slice(0, 4).map((idx)=>(
                                                <SpkButton  key={idx.id} 
                                                    buttontype="button" variant={idx.color}  customClass={idx.customcls}>
                                                    {idx.htmltext}
                                                </SpkButton>
                                            ))}
                                    </div>
                                    <div className="md:mb-0 mb-2 flex gap-x-2">
                                            {IconButtons.slice(4, 8).map((idx)=>(
                                                <SpkButton  key={idx.id}   buttontype="button" variant={idx.color}  customClass={idx.customcls} >
                                                        {idx.htmltext}
                                                </SpkButton>
                                            ))}
                                    </div>
                                    <div className=" flex gap-x-2">
                                        {IconButtons.slice(8, 12).map((idx)=>(
                                            <SpkButton key={idx.id} buttontype="button" variant={idx.color}  customClass={idx.customcls}>
                                                    {idx.htmltext}
                                            </SpkButton>
                                        ))}
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Social Buttons" reactCode={reactbuttons15}  reusableCode={reusebuttons15}  dataCode={buttondata15}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                        {SocialButtons.map((idx)=>(
                                            <SpkButton key={idx.id}  buttontype="button" variant={idx.color}  customClass="ti-btn ti-btn-icon !me-0" >
                                                {idx.icon}
                                            </SpkButton>
                                        ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-12 col-span-12">
                                    <Showcode title="Sizes" reactCode={reactbuttons16}  reusableCode={reusebuttons16}  dataCode={buttondata16}>
                                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                            {Sizes.map((idx)=>(
                                                <SpkButton  key={idx.id}   buttontype="button" variant={idx.color}  customClass={idx.customcls} size={idx.size} >
                                                    {idx.titletxt}
                                                </SpkButton>
                                            ))}
                                        </div>
                                    </Showcode>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="xl:col-span-12 col-span-12">
                                    <Showcode title="Button Widths" reactCode={reactbuttons17}  reusableCode={reusebuttons17}  dataCode={buttondata17}>
                                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                            {Buttonwidths.map((idx)=>(
                                                <SpkButton  key={idx.id}  buttontype="button" size={idx.size}  variant={idx.color} customClass="ti-btn !me-0" >
                                                    {idx.title}
                                                </SpkButton>
                                            ))}
                                        </div>
                                    </Showcode>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Buttons With Different Shadows" reactCode={reactbuttons18}  reusableCode={reusebuttons18}  dataCode={buttondata18}>
                                <div className="ti-btn-list flex">
                                    <div className="me-[3rem]">
                                        {Differentshadows.slice(0, 3).map((idx)=>(
                                            <SpkButton key={idx.id}  buttontype="button"  variant={idx.color} customClass={idx.customcls}>
                                                    Button
                                            </SpkButton>
                                        ))}
                                    </div>
                                    <div className="">
                                        {Differentshadows.slice(3 ,6).map((idx)=>(
                                                <SpkButton key={idx.id}  buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                                    Button
                                            </SpkButton>
                                        ))}
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Different Colored Buttons With Shadows" reactCode={reactbuttons19}  reusableCode={reusebuttons19}  dataCode={buttondata19}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {Differentcolored.map((idx)=>(
                                        <SpkButton key={idx.id}  buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                            Button
                                        </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Label Buttons" reactCode={reactbuttons20}  reusableCode={reusebuttons20}  dataCode={buttondata20}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    {Labelbuttons.map((idx)=>(
                                            <SpkButton  key={idx.id}  buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                            {idx.title}{idx.icon}
                                            </SpkButton>
                                    ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Custom Buttons" reactCode={reactbuttons21}  reusableCode={reusebuttons21}  dataCode={buttondata21}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    <SpkButton    buttontype="button"  variant="info" customClass="ti-btn custom-button label-ti-btn !me-0 !rounded-full" >
                                        <span className="custom-ti-btn-icons"><i className="ri-twitter-x-line text-info"></i></span>
                                        Twitter
                                    </SpkButton>
                                    {Custombuttons.map((idx)=>(
                                        <SpkButton  key={idx.id}   buttontype="button"  variant={idx.color} customClass={idx.customcls} >
                                            {idx.title}
                                        </SpkButton>
                                        ))}
                                </div>
                            </Showcode>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Block Buttons" reactCode={reactbuttons22}  reusableCode={reusebuttons22}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    <div className="grid  gap-2 mb-6">
                                        <SpkButton  buttontype="button"  variant="primary" customClass="ti-btn me-1" >
                                            Button
                                        </SpkButton>
                                        <SpkButton  buttontype="button"  variant="secondary" customClass="ti-btn " >
                                            Button
                                        </SpkButton>
                                    </div>
                                    <div className="grid gap-2 md:block">
                                        <SpkButton  buttontype="button"  variant="info" customClass="ti-btn " >
                                            Button
                                        </SpkButton>
                                        <SpkButton  buttontype="button"  variant="success" customClass="ti-btn " >
                                            Button
                                        </SpkButton>
                                    </div>
                                    <div className="grid !mx-auto gap-2 w-[50%]">
                                        <SpkButton  buttontype="button"  variant="danger" customClass="ti-btn " >
                                            Button
                                        </SpkButton>
                                        <SpkButton  buttontype="button"  variant="warning" customClass="ti-btn " >
                                            Button
                                        </SpkButton>
                                    </div>
                                    <div className="grid gap-2 md:flex md:justify-end">
                                        <SpkButton  buttontype="button"  variant="teal" customClass="ti-btn md:me-2" >
                                            Button
                                        </SpkButton>
                                        <SpkButton  buttontype="button"  variant="purple" customClass="ti-btn " >
                                            Button
                                        </SpkButton> 
                                    </div>
                                </div>
                            </Showcode>
                    </div>
                </div>
                {/* <!--ROW-END--> */}
</Fragment>
);
};

export default Buttons;