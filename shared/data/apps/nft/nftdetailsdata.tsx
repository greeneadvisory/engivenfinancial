
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Link from "next/link";
import { Key } from "react";

export const Swiperdata = [
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/2.jpg" alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/3.jpg" alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/4.jpg" alt="img" />
    </div>,
    <div className="image-container">
        <img className="img-fluid" src="../../../assets/images/nft-images/5.jpg" alt="img" />
    </div>
];

interface NftType {
    name: string;
    date: string;
    rating: number;
    title: string;
    description: string;
    avatar: string;
    images: string | any;
}
const nftReviews: NftType[] = [
    {
        name: "Christopher",
        date: "24 Nov, 2024 - 10:54PM",
        rating: 4.1,
        title: "Vibrant Symphony 😊",
        description: "Vibrant Symphony is an extraordinary NFT that immerses you in a world of vivid colors and imaginative landscapes.",
        avatar: "../../../assets/images/faces/15.jpg",
        images: [
            "../../../assets/images/nft-images/13.jpg",
            "../../../assets/images/nft-images/15.jpg"
        ]
    },
    {
        name: "Sarah Johnson",
        date: "30 Apr, 2024 - 03:22PM",
        rating: 3.7,
        title: "Enchanting Dreamscape",
        description: "Enchanting Dreamscape offers a surreal journey through dream-like imagery and subtle symbolism.",
        avatar: "../../../assets/images/faces/10.jpg",
        images: [
            "../../../assets/images/nft-images/6.jpg",
            "../../../assets/images/nft-images/7.jpg"
        ]
    },
    {
        name: "Emily Brown",
        date: "15 May, 2024 - 09:15AM",
        rating: 3.8,
        title: "Oceanic Serenity 🌊",
        description: "Oceanic Serenity captivates with its tranquil underwater scenes and ethereal marine life.",
        avatar: "../../../assets/images/faces/12.jpg",
        images: [
            "../../../assets/images/nft-images/6.jpg",
            "../../../assets/images/nft-images/3.jpg"
        ]
    },
];

export const NftSwiper = nftReviews.map((review, index) => (
    <div key={index}>
        <div className="border border-defaultborder dark:border-defaultborder/10 rounded-md p-4">
            <div className="sm:flex block items-top mb-4">
                <div className="flex flex-auto">
                    <div className="me-2">
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={review.avatar} alt={review.name}/>
                        </span>
                    </div>
                    <div className="leading-none me-2">
                        <p className="mb-1 font-medium text-[14px]">{review.name} <span className="text-success"></span></p>
                        <div className="mb-1">
                            <span className="text-[11px] text-textmuted dark:text-textmuted/50">
                            {review.date}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mb-1 ms-auto text-end">
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`ri-star-${i < Math.floor(review.rating) ? 'fill' : (i < review.rating ? 'half-fill' : 'line')} align-middle text-warning align-middle me-1`}
                        ></i>
                    ))}
                    <span className="align-middle">{review.rating}</span>
                </div>
            </div>
            <div className="ps-sm-4 ps-0 mb-3">
                <p className="font-medium mb-1 ps-2">{review.title}&#128525;</p>
                <p className="mb-0 text-xs text-textmuted dark:text-textmuted/50 ps-2">{review.description}</p>
            </div>                                            
            <div className="product-images ps-sm-4 ps-0">
                <div className="flex justify-between flex-wrap items-center">
                    <div>
                        <div className="">
                            {review.images.map((img: string | undefined, imgIndex: Key | null | undefined) => (
                                <Link scroll={false} key={imgIndex} href="#!" className="avatar avatar-sm me-1">
                                    <img src={img} alt="" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                        <SpkButton customClass="ti-btn ti-btn-sm ti-btn-soft-primary text-primary me-2">Report abuse</SpkButton>
                        <SpkButton customClass="ti-btn ti-btn-sm ti-btn-icon bg-primarytint2color/10 text-primarytint2color me-2">
                            <i className="ri-thumb-up-line"></i>
                        </SpkButton>
                        <SpkButton customClass="ti-btn ti-btn-sm ti-btn-icon bg-primarytint3color/10 text-primarytint3color">
                            <i className="ri-thumb-down-line"></i>
                        </SpkButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
))


export const Productsdata = [
    { label: 'Artist Name', value: 'Henry Milo' },
    { label: 'Royalty', value: '10% royalty paid to the artist on secondary sales' },
    { label: 'Total Bids', value: '32' },
    { label: 'Current Owner', value: 'Nikki Jones' },
    { label: 'NFT Type', value: 'Digital art work' },
];

interface NFTItem {
    imageSrc: string;
    name: string;
    badgeCount: string;
    followers: number;
    price: string;
    originalPrice: string;
}

export const NftItems: NFTItem[] = [
    {
        imageSrc: "../../../assets/images/nft-images/16.jpg",
        name: "Digital Dreamscapes",
        badgeCount: "18.5k",
        followers: 18512,
        price: "2.299 ETH",
        originalPrice: "3.299 ETH",
    },
    {
        imageSrc: "../../../assets/images/nft-images/18.jpg",
        name: "Galactic Gardens",
        badgeCount: "4.2k",
        followers: 4356,
        price: "1.899 ETH",
        originalPrice: "2.799 ETH",
    },
    {
        imageSrc: "../../../assets/images/nft-images/10.jpg",
        name: "Pixelated Paradise",
        badgeCount: "9.1k",
        followers: 9153,
        price: "3.599 ETH",
        originalPrice: "5.499 ETH",
    },
    {
        imageSrc: "../../../assets/images/nft-images/11.jpg",
        name: "Vibrant Voyages",
        badgeCount: "15.7k",
        followers: 15789,
        price: "6.499 ETH",
        originalPrice: "9.999 ETH",
    }
];
