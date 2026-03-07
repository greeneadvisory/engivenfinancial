"use client"
import { Marketplacedata } from "@/shared/data/apps/nft/marketplacedata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import SpkSelect from "@/shared/@spk-reusable-components/spk-packages/spk-reactselect";
import SpkNftcards from "@/shared/@spk-reusable-components/apps/spk-nftcards";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
interface CreateNftProps {}

const CreateNft : FC<CreateNftProps>  = () => {
    const CreatNft = Marketplacedata.slice(0, 1);

    const Data1 = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];

return (
<Fragment>
    {/* <!-- Start::page-header --> */}
        <Seo title="Nft-Createnft" />

        <Pageheader title="Apps" subtitle="NFT" currentpage="Create NFT" activepage="Create NFT" />

    {/* <!-- End::page-header --> */}
    {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 sm:gap-x-6">
            <div className="xxl:col-span-9 col-xl-8 col-span-12">
                <div className="box">
                    <div className="box-header">
                        <div className="box-title">Create NFT</div>
                    </div>
                    <div className="box-body">
                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3 justify-between">
                            <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                                <label className="form-label">Upload NFT</label>
                                <div className="create-nft-item bg-light py-3 rounded">
                                <FilePond className="filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                        stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                        styleButtonRemoveItemPosition='center bottom' />
                                </div>
                            </div>
                            <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="input-placeholder" className="form-label">NFT Title</label>
                                        <input type="text" className="form-control" id="input-placeholder"
                                            placeholder="eg:Abstract Digital Art"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="nft-description" className="form-label">NFT Description</label>
                                        <textarea className="form-control" id="nft-description" rows={3}
                                            placeholder="Enter Description"></textarea>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="nft-link" className="form-label">External Link</label>
                                        <input type="text" className="form-control" id="nft-link"
                                            placeholder="External Link Here"/>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="grid grid-cols-12 sm:gap-x-6 gap-y-3">
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="nft-creator-name" className="form-label">Creator Name</label>
                                        <input type="text" className="form-control" id="nft-creator-name"
                                            placeholder="Enter Name"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="nft-price" className="form-label">NFT Price</label>
                                        <input type="text" className="form-control" id="nft-price"
                                            placeholder="Enter Price"/>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="nft-size" className="form-label">NFT Size</label>
                                        <input type="text" className="form-control" id="nft-size"
                                            placeholder="Enter Size"/>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="nft-royality" className="form-label">Royality</label>
                                        <SpkSelect option={Data1} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                                placeholder="Choose Royalities" />
                                    </div>
                                    <div className="xl:col-span-4 col-span-12">
                                        <label htmlFor="nft-property" className="form-label">Property</label>
                                        <input type="text" className="form-control" id="nft-property"
                                            placeholder="Enter Property"/>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label block">Method</label>
                                        <div className="btn-group inline-flex" role="group"
                                            aria-label="Basic radio toggle button group"> <input type="radio"
                                                className="btn-check opacity-0 absolute" name="strap-material"
                                                id="strap1" defaultChecked/> <label
                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary z-0 !rounded-e-none !border-e-0 sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                htmlFor="strap1"><i
                                                    className="ti ti-tag me-1 align-middle text-[0.9375rem] inline-block"></i>Fixed
                                                Price</label> <input type="radio"
                                                className="btn-check  opacity-0 absolute" name="strap-material"
                                                id="strap2"/> <label
                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary !text-defaulttextcolor !rounded-none !border-e-0 z-0  sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                htmlFor="strap2"><i
                                                    className="ti ti-users text-[0.9375rem] me-1 align-middle inline-block"></i>Open
                                                For Bids</label> <input type="radio"
                                                className="btn-check  opacity-0 absolute" name="strap-material"
                                                id="strap3"/> <label
                                                className="!mb-0 ti-btn  btn-wave !m-0 !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary !rounded-s-none !text-defaulttextcolor z-0  sm:text-[0.813rem] text-[0.75rem] waves-effect waves-light"
                                                htmlFor="strap3"><i
                                                    className="ti ti-hourglass-low text-[0.9375rem] me-1 align-middle inline-block"></i>Timed
                                                Auction</label> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer text-end">
                        <a href="#!" className="ti-btn ti-btn-primary btn-wave">Create NFT</a>
                    </div>
                </div>
            </div>
            {CreatNft.map((idx) => (
                <div className="xxl:col-span-3 xl:col-span-4 col-span-12" key={idx.id}>
                    <SpkNftcards imgSrc={idx.image} time={idx.auctionTime} title={idx.title} imgSrc1={idx.avatar} clientName={idx.name} mail={idx.handle} count={idx.currentBid} rating={idx.likes} imgClass="card-img mb-3" />
                
                </div>
             ))}
        </div>
    {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default CreateNft;