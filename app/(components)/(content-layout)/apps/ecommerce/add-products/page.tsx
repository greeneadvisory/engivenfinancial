'use client'
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import { Availableselect, Brandselect, Categoryselect, Colorselect, Genderselect, Productselect, Publishselect, Sizeselect } from "@/shared/data/apps/ecommerce/addproductsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useState } from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SunEditorComponent from "@/shared/@spk-reusable-components/spk-packages/editor-component";
import SpkDatepickr from "@/shared/@spk-reusable-components/spk-packages/datepicker-component";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
interface AddProductsProps {}

const AddProducts : FC<AddProductsProps>  = () => {
    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);

 const [dates, setDates] = useState<{ [key: string]: Date | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
      setDates((prevDates) => ({
        ...prevDates,
        [key]: date,
      }));
    };
return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title="Ecommerce-Addproducts" />

        <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Add Product" activepage="Add Product " />

        {/* <!-- Page Header Close --> */}
          {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body add-products">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-5">
                                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                                        <div className="box shadow-none mb-0 border-0">
                                            <div className="box-body p-0">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="product-name-add" className="form-label">Product Name</label>
                                                        <input type="text" className="form-control" id="product-name-add" placeholder="Name"/>
                                                        <label htmlFor="product-name-add" className="form-label mt-1 text-xs font-normal text-textmuted dark:text-textmuted/50 mb-0">*Product Name should not exceed 30 characters</label>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-size-add" className="form-label">Size</label>
                                                        <SpkSelect name="colors" option={Sizeselect} mainClass="basic-multi-select custom-products"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select"  searchable={true}
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-brand-add" className="form-label">Brand</label>
                                                        <SpkSelect name="colors" option={Brandselect} mainClass="basic-multi-select custom-products"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-category-add" className="form-label">Category</label>
                                                        <SpkSelect name="colors" option={Categoryselect} mainClass="basic-multi-select custom-products"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Category"  defaultvalue={[Categoryselect[0]]}
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-gender-add" className="form-label">Gender</label>
                                                        <SpkSelect name="colors" option={Genderselect} mainClass="basic-multi-select custom-products"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12 color-selection">
                                                        <label htmlFor="product-color-add" className="form-label">Colors</label>
                                                        <SpkSelect multi name="colors" option={Colorselect} mainClass="basic-multi-select custom-products"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-cost-add" className="form-label">Enter Cost</label>
                                                        <input type="text" className="form-control" id="product-cost-add" placeholder="Cost"/>
                                                        <label htmlFor="product-cost-add" className="form-label mt-1 text-xs font-normal text-textmuted dark:text-textmuted/50 mb-0">*Mention final price of the product</label>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="product-description-add" className="form-label">Product Description</label>
                                                        <textarea className="form-control" id="product-description-add" rows={3}></textarea>
                                                        <label htmlFor="product-description-add" className="form-label mt-1 text-xs font-normal text-textmuted dark:text-textmuted/50 mb-0">*Description should not exceed 500 letters</label>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-type" className="form-label">Product Type</label>
                                                        <input type="text" className="form-control" id="product-type" placeholder="Type"/>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="product-discount" className="form-label">Item Weight</label>
                                                        <input type="text" className="form-control" id="product-discount1" placeholder="Weight in gms"/>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                        <p className="font-medium mb-2 text-[14px]">Product Images :</p>
                                                        <FilePond className="multiple-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                                        <label className="form-label text-textmuted dark:text-textmuted/50 mt-3 font-normal text-xs">* Minimum of 6 images are need to be uploaded,
                                                            all images should be uniformly maintained, width and height to the container.
                                                        </label>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="product-status-add1" className="form-label">Availability</label>
                                                        <SpkSelect name="colors" option={Availableselect} mainClass="basic-multi-select custom-products" menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12">
                                        <div className="box shadow-none mb-0 border-0">
                                            <div className="box-body p-0">
                                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 gap-y-3">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">Product Features</label>
                                                        <div id="product-features">
                                                            <SunEditorComponent height={'150px'} />
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12 product-documents-container">
                                                        <p className="font-medium mb-2 text-[14px]">Warrenty Documents :</p>
                                                        <FilePond className="multiple-filepond" files={files1} onupdatefiles={setFiles1} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click' />
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <label htmlFor="product-actual-price" className="form-label">Actual Price</label>
                                                        <input type="text" className="form-control" id="product-actual-price" placeholder="Actual Price"/>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <label htmlFor="product-dealer-price" className="form-label">Dealer Price</label>
                                                        <input type="text" className="form-control" id="product-dealer-price" placeholder="Dealer Price"/>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <label htmlFor="product-discount" className="form-label">Discount</label>
                                                        <input type="text" className="form-control" id="product-discount" placeholder="Discount in %"/>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="publish-date" className="form-label">Publish Date</label>
                                                        <SpkDatepickr className="form-control flatpickr-input"   selected={dates["publish"]}
                                                          onChange={(date) => handleDateChange("publish", date)}  />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="publish-time" className="form-label">Publish Time</label>
                                                        <SpkDatepickr  className="form-control"
                                                            selected={dates["startDate6"]}
                                                            onChange={(date) => handleDateChange("startDate6", date)}  
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            Caption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="product-status-add" className="form-label">Published Status</label>
                                                        <SpkSelect name="colors" option={Publishselect} mainClass="basic-multi-select custom-products"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="product-tags" className="form-label">Product Tags</label>
                                                        <SpkSelect multi name="colors" option={Productselect} defaultvalue={[Productselect[3], Productselect[0]]}
                                                            mainClass="basic-multi-select" searchable
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer border-t border-block-start-dashed sm:flex justify-end">
                                <SpkButton customClass="ti-btn bg-primarytint1color text-white me-2 mb-2 mb-sm-0">Add Product<i className="bi bi-plus-lg ms-2"></i></SpkButton>
                                <SpkButton variant="primary" customClass="ti-btn mb-2 mb-sm-0">Save Product<i className="bi bi-download ms-2"></i></SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default AddProducts;