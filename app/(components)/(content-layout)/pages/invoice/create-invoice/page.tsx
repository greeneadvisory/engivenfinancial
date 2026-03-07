"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useReducer, useState } from "react";

interface CreateInvoiceProps {}

const CreateInvoice : FC<CreateInvoiceProps>  = () => {
    
    const initialState = { count1: 1, count2: 1 }

    const reducer = (state: { count1: number; count2: number; }, action: any) => {
        switch (action) {

            case "addition":
                return state = {
                    ...state, count1: state.count1 + 1,

                }
            case "subtraction":
                return {
                    ...state,
                    count1: state.count1 > 0 ? state.count1 - 1 : 0, // Prevent going below zero
                };
            case "addition1":
                return state = {
                    ...state, count2: state.count2 + 1,
                }
            case "subtraction1":
                return {
                    ...state,
                    count2: state.count2 > 0 ? state.count2 - 1 : 0, // Prevent going below zero
                };
            default:
                return state
        }
    }
    // 
    const [count, dispatch] = useReducer(reducer, initialState)


    //datepicker

    const [dates, setDates] = useState<{ [key: string]: Date | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
      setDates((prevDates) => ({
        ...prevDates,
        [key]: date,
      }));
    };


    //Currency select data
    const Currencydata = [
        { value: 'Select Currency', label: 'Select Currency' },
        { value: 'USD - (United States Dollar)', label: 'USD - (United States Dollar)' },
        { value: 'BHD - (Bahraini Dinar)', label: 'BHD - (Bahraini Dinar)' },
        { value: 'KWD - (Kuwaiti Dinar)', label: 'KWD - (Kuwaiti Dinar)' },
        { value: 'CHF - (Swiss Franc)', label: 'CHF - (Swiss Franc)' },
    ]
return (
<Fragment> 
            {/* <!-- Start::page-header --> */}
                <Seo title="Pages-Createinvoice" />

                <Pageheader title="Pages" subtitle="Invoice" currentpage="Create Invoice" activepage="Create Invoice" />

            {/* <!-- End::page-header --> */}
            {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-9 col-span-12">
                        <div className="box">
                            <div className="box-header md:flex block">
                                <div className="h5 mb-0 sm:flex block items-center">
                                    <div>
                                        <span className="text-white text-sm font-semibold leading-none whitespace-nowrap">Engiven Financial</span>
                                    </div>
                                    <div className="sm:ms-2 ms-0 sm:mt-0 mt-2">
                                        <input type="text" className="form-control form-control-light form-control-sm"
                                            placeholder="Invoice Title" defaultValue="INV TITLE"/>
                                    </div>
                                    <div className="mx-2">:</div>
                                    <div className="sm:mt-0 mt-2">
                                        <input type="text" className="form-control form-control-light form-control-sm"
                                            placeholder="Invoice ID" defaultValue="INV ID"/>
                                    </div>
                                </div>
                                <div className="ms-auto md:mt-0 mt-2">
                                    <SpkButton variant="primary"  Size="sm" customClass="ti-btn me-2">Save As PDF<i
                                            className="ri-file-pdf-line ms-1 align-middle inline-block"></i></SpkButton>
                                    <SpkButton variant="soft-primary1"  Size="sm" customClass="ti-btn ti-btn-icon me-2"><i
                                            className="bi bi-plus-lg"></i></SpkButton>
                                    <SpkButton variant="soft-primary2"  Size="sm" customClass="ti-btn ti-btn-icon me-2"><i
                                            className="bi bi-download"></i></SpkButton>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="grid grid-cols-12 sm:gap-x-6">
                                            <div
                                                className="xl:col-span-4 lg:col-span-4 md:col-span-5 sm:col-span-12 col-span-12">
                                                <p className="dw-semibold mb-2">
                                                    Billing From :
                                                </p>
                                                <div className="grid grid-cols-12 gap-y-2">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="Company-Name" placeholder="Company Name"
                                                            defaultValue="SPRUKO TECHNOLOGIES"/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12 leading-none">
                                                        <textarea className="form-control form-control-light"
                                                            id="company-address" placeholder="Enter Address"
                                                            rows={5}></textarea>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="company-mail" placeholder="Company Email" defaultValue=""/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="company-phone" placeholder="Phone Number" defaultValue=""/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <textarea className="form-control form-control-light"
                                                            id="invoice-subject" placeholder="Subject"
                                                            rows={5}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="xl:col-span-4 lg:col-span-4 md:col-span-2 sm:col-span-12 col-span-12">
                                            </div>
                                            <div
                                                className="xl:col-span-4 lg:col-span-4 md:col-span-5 sm:col-span-12 col-span-12">
                                                <p className="dw-semibold mb-2">
                                                    Billing To :
                                                </p>
                                                <div className="grid grid-cols-12  gap-y-2">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="customer-Name" placeholder="Customer Name"
                                                            defaultValue="Henry Milo"/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12 leading-none">
                                                        <textarea className="form-control form-control-light"
                                                            id="customer-address" placeholder="Enter Address"
                                                            rows={3}></textarea>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="customer-mail" placeholder="Customer Email" defaultValue=""/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="customer-phone" placeholder="Phone Number" defaultValue=""/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <input type="text" className="form-control form-control-light"
                                                            id="zip-code" placeholder="Zip Code" defaultValue=""/>
                                                    </div>
                                                    <div
                                                        className="xl:col-span-12 col-span-12 choices-control choices-control-light">
                                                        <p className="dw-semibold mb-2 mt-2">
                                                            Currency :
                                                        </p>
                                                        <SpkSelect name="colors" option={Currencydata} mainClass="basic-multi-select  bg-light"
                                                             menuplacement='auto' classNameprefix="Select2" defaultvalue={[Currencydata[0]]}
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <label  htmlFor="invoice-number" className="form-label">Invoice ID</label>
                                        <input type="text" className="form-control form-control-light" id="invoice-number"
                                            placeholder="Inv No" defaultValue="#SHG148756965"/>
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <label  htmlFor="invoice-date-issued" className="form-label">Date Issued</label>
                                        <SpkDatepickr className="form-control flatpickr-input custom-flatpickr" placeholderText='Choose date with time'   selected={dates["dateissues"]}
                                                onChange={(date) => handleDateChange("dateissues", date)} />
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <label  htmlFor="invoice-date-due" className="form-label">Due Date</label>
                                        <SpkDatepickr className="form-control flatpickr-input custom-flatpickr" placeholderText='Choose date with time'   selected={dates["duedate"]}
                                                onChange={(date) => handleDateChange("duedate", date)} />
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <label  htmlFor="invoice-due-amount" className="form-label">Due Amount</label>
                                        <input type="text" className="form-control form-control-light"
                                            id="invoice-due-amount" placeholder="Enter Amount" defaultValue="$24,784.54"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="table-responsive">
                                            <table
                                                className="ti-custom-table ti-custom-table-head mt-3 border border-defaultborder dark:border-defaultborder/10">
                                                <thead>
                                                    <tr
                                                        className="border-b border-defaultborder dark:border-defaultborder/10">
                                                        <th>PRODUCT NAME</th>
                                                        <th>DESCRIPTION</th>
                                                        <th>QUANTITY</th>
                                                        <th>PRICE PER UNIT</th>
                                                        <th>TOTAL</th>
                                                        <th>ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                        <td>
                                                            <input type="text" className="form-control form-control-light"
                                                                placeholder="Enter Product Name"/>
                                                        </td>
                                                        <td>
                                                            <textarea rows={1} className="form-control form-control-light"
                                                                placeholder="Enter Description"></textarea>
                                                        </td>
                                                        <td className="invoice-quantity-container">
                                                            <div
                                                                className="input-group border p-0 border-defaultborder dark:border-defaultborder/10 rounded-md flex-nowrap">
                                                                <SpkButton variant="primary" customClass="ti-btn ti-btn-icon !m-0 input-group-text flex-auto product-quantity-minus" onclickfunc={() => dispatch('subtraction')}>
                                                                    <i className="ri-subtract-line"></i>
                                                                </SpkButton>
                                                                <input type="text"
                                                                    className="form-control form-control-sm border-0 text-center"
                                                                    aria-label="quantity" id="product-quantity4" key={count.count1} defaultValue={count.count1}
                                                                    />
                                                                <SpkButton variant="primary" customClass="ti-btn ti-btn-icon !m-0 input-group-text flex-auto product-quantity-plus" onclickfunc={() => dispatch('addition')}>
                                                                    <i className="ri-add-line"></i>
                                                                </SpkButton>
                                                            </div>
                                                        </td>
                                                        <td><input className="form-control form-control-light"
                                                                placeholder="" type="text" defaultValue="$84.00"/></td>
                                                        <td><input className="form-control form-control-light"
                                                                placeholder="" type="text" defaultValue="$251.00"/></td>
                                                        <td>
                                                            <SpkButton Size="sm" variant="soft-danger" customClass="ti-btn ti-btn-icon">
                                                                <i className="ri-delete-bin-5-line"></i></SpkButton>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                        <td>
                                                            <input type="text" className="form-control form-control-light"
                                                                placeholder="Enter Product Name"/>
                                                        </td>
                                                        <td>
                                                            <textarea rows={1} className="form-control form-control-light"
                                                                placeholder="Enter Description"></textarea>
                                                        </td>
                                                        <td className="invoice-quantity-container">
                                                            <div
                                                                className="input-group border p-0 border-defaultborder dark:border-defaultborder/10 rounded-md flex-nowrap">
                                                                <SpkButton variant="primary" customClass="ti-btn ti-btn-icon !m-0  input-group-text flex-auto product-quantity-minus" onclickfunc={() => dispatch('subtraction1')}>
                                                                    <i className="ri-subtract-line"></i></SpkButton>
                                                                <input type="text"
                                                                    className="form-control form-control-sm border-0 text-center"
                                                                    aria-label="quantity" id="product-quantity-4" key={count.count2}
                                                                    defaultValue={count.count2}/>
                                                                <SpkButton variant="primary" customClass="ti-btn ti-btn-icon !m-0  input-group-text flex-auto product-quantity-plus" onclickfunc={() => dispatch('addition1')}>
                                                                    <i className="ri-add-line"></i></SpkButton>
                                                            </div>
                                                        </td>
                                                        <td><input className="form-control form-control-light"
                                                                placeholder="Enter Amount" type="text"/></td>
                                                        <td><input className="form-control form-control-light"
                                                                placeholder="Enter Amount" type="text"/></td>
                                                        <td>
                                                            <SpkButton variant="soft-danger" Size="sm" customClass="ti-btn ti-btn-icon">
                                                               <i className="ri-delete-bin-5-line"></i></SpkButton>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                        <td colSpan={6} className="border-b-0"><a className="ti-btn bg-light"
                                                                href="#!"><i className="bi bi-plus-lg"></i>
                                                                Add Product</a></td>
                                                    </tr>
                                                    <tr
                                                        className="border-b !border-defaultborder dark:!border-defaultborder/10">
                                                        <td colSpan={4}></td>
                                                        <td colSpan={2}>
                                                            <table
                                                                className="table table-sm text-nowrap mb-0 table-borderless">
                                                                <tbody>
                                                                    <tr className="border-b !border-transparent">
                                                                        <th scope="row">
                                                                            <div className="font-medium">Sub Total :</div>
                                                                        </th>
                                                                        <td>
                                                                            <input type="text"
                                                                                className="form-control form-control-light invoice-amount-input !w-auto"
                                                                                placeholder="Enter Amount"
                                                                                defaultValue="$2519.89"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b !border-transparent">
                                                                        <th scope="row">
                                                                            <div className="font-medium">Avail Discount :
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <input type="text"
                                                                                className="form-control form-control-light invoice-amount-input !w-auto"
                                                                                placeholder="Enter Amount"
                                                                                defaultValue="$15.58"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b !border-transparent">
                                                                        <th scope="row">
                                                                            <div className="font-medium">Coupon Discount
                                                                                <span className="text-success">(3.5%)</span>
                                                                                :</div>
                                                                        </th>
                                                                        <td>
                                                                            <input type="text"
                                                                                className="form-control form-control-light invoice-amount-input !w-auto"
                                                                                placeholder="Enter Amount"
                                                                                defaultValue="$112.00"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b !border-transparent">
                                                                        <th scope="row">
                                                                            <div className="font-medium">Vat <span
                                                                                    className="text-danger">(7.5%)</span> :
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <input type="text"
                                                                                className="form-control form-control-light invoice-amount-input !w-auto"
                                                                                placeholder="Enter Amount"
                                                                                defaultValue="$214.00"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b !border-transparent">
                                                                        <th scope="row">
                                                                            <div className="font-medium">Due Till Date :
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <input type="text"
                                                                                className="form-control form-control-light invoice-amount-input !w-auto"
                                                                                placeholder="Enter Amount"
                                                                                defaultValue="$2.00"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="border-b !border-transparent">
                                                                        <th scope="row">
                                                                            <div className="text-[14px] font-medium">Total :
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <input type="text"
                                                                                className="form-control form-control-light invoice-amount-input !w-auto"
                                                                                placeholder="Enter Amount"
                                                                                defaultValue="$2,106.68"/>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div>
                                            <label htmlFor="invoice-note" className="form-label">Note:</label>
                                            <textarea className="form-control form-control-light !pt-3" id="invoice-note" defaultValue="If you're not satisfied with the product, you can return the unused item within 10 days of the delivery date. For refund options, please visit the official website and review the available refund policies."
                                                rows={5}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer flex items-center justify-between gap-2">
                                <SpkButton variant="soft-primary1" customClass="ti-btn"><i
                                        className="ri-eye-line me-1 align-middle inline-block"></i>Preview</SpkButton>
                                <SpkButton variant="primary" customClass="ti-btn">Send Invoice <i
                                        className="ri-send-plane-2-line ms-1 align-middle inline-block"></i></SpkButton>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Mode Of Payment
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 gap-y-4">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="btn-group inline-flex" role="group"
                                            aria-label="Basic radio toggle button group"> 
                                            <input type="radio"
                                                className="btn-check opacity-0 absolute" name="strap-material" id="strap1"
                                                /> 
                                            <label
                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex !py-2 !px-3 ti-btn-outline-primary z-0 !rounded-e-none !border-e-0 sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                htmlFor="strap1">
                                             UPI
                                           </label>
                                            <input type="radio"
                                                className="btn-check  opacity-0 absolute" name="strap-material" id="strap3" defaultChecked/>
                                            <label
                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex !py-2 text-primary !px-3 ti-btn-outline-primary !rounded-s-none z-0  sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                htmlFor="strap3">
                                             Credit/Debit Card
                                            </label> 
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <input type="text" className="form-control form-control-light"
                                            id="invoice-payment-cardname" placeholder="Card Number"
                                            defaultValue="1323 3213 4546 XXXX"/>
                                        <label htmlFor="invoice-payment-cardname" className="form-label mb-0"><a
                                                className="text-textmuted dark:text-textmuted/50 text-[11px]"
                                                href="#!">Enter valid card number <sup
                                                    className="text-xs text-danger align-middle"> *</sup></a></label>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <input type="text" className="form-control form-control-light"
                                            placeholder="Card Holder Name"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <input type="password" className="form-control form-control-light mb-2"
                                            placeholder="Enter OTP"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="alert bg-primarytint2color/10 !text-primarytint2color !border-primarytint2color/10 !text-[0.812rem]"
                                            role="alert">
                                            Please Make sure to pay the invoice bill within 120 days.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 -->  */}
</Fragment>
);
};

export default CreateInvoice;