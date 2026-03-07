
import SpkProducts from "@/shared/@spk-reusable-components/apps/spk-products";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import Link from "next/link";

const reviews = [
    {
        name: "Phillip John",
        rating: 4.3,
        title: "Powerful Performance, Stunning Display!",
        description: "The TechPro X15 Elite - 2024 Edition is a powerhouse! The 4K UHD touchscreen display is stunning.",
        images: [
            "../../../assets/images/ecommerce/png/34.png",
            "../../../assets/images/ecommerce/png/33.png",
        ],
    },
    {
        name: "Henry Milo",
        rating: 4.3,
        title: "Sleek Design, Fast Delivery, Hassle-Free Returns!",
        description: "The TechPro X15 Elite - 2024 Edition impresses with its sleek design and fast delivery.",
        images: [
            "../../../assets/images/ecommerce/png/33.png",
        ],
    },
];

export const ReviewSwiper = reviews.map((review, index) => (
    <div key={index}>
        <div className="box border dark:border-defaultborder/10 shadow-none mb-0">
                <div className="box-body">
                    <div className="sm:flex block items-center mb-3">
                        <div className="flex flex-auto items-center">
                            <span className="avatar avatar-sm avatar-rounded me-2">
                                <img src="../../../assets/images/faces/1.jpg" alt=""/>
                            </span>
                            <p className="mb-0 text-[14px] leading-none font-semibold">{review.name}
                                <span className="mb-0 text-xs font-normal ms-1">
                                    <i className="ri-star-s-fill text-warning leading-none text-[10px] me-1 font-normal align-middle"></i>{review.rating}
                                </span>
                            </p>
                        </div>
                        <div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                            <SpkBadge variant="success">Verified Purchase</SpkBadge>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="font-semibold mb-1">{review.title}</p>
                        <p className="mb-0 text-[11px]">{review.description} </p>
                    </div>
                    <div className="product-images ps-0">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="products-review-images flex">
                                    {review.images.map((image, imgIndex) => (
                                            <Link scroll={false} href="#!" key={imgIndex}>
                                                <img src={image} alt="" />
                                            </Link>
                                        ))}
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12 flex align-items-end sm:justify-end mt-sm-0 mt-2">
                                <SpkButton Size="sm" customClass="ti-btn bg-light me-2">Report abuse</SpkButton>
                                <SpkButton Size="sm" customClass="ti-btn ti-btn-icon bg-primary/10 text-primary  me-2">
                                    <i className="ri-thumb-up-line"></i>
                                </SpkButton>
                                <SpkButton Size="sm" customClass="ti-btn ti-btn-icon bg-primary/10 text-primary ">
                                    <i className="ri-thumb-down-line"></i>
                                </SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
))

interface Products {
    id: number;
    title: string;
    price: string;
    discount: string;
    productpicture: string;
    color1: string;
    rating: number;
    status: string;
    trending: boolean | string;
    color: string;
    discount1: string;
    badge?: string;
    badgeColor?: string;
}
const products: Products[] = [
    {
        id: 1,
        title: "Lightweight Sneakers",
        price: "$771",
        discount: "$880",
        productpicture: "../../../assets/images/ecommerce/png/28.png",
        color: "primarytint3color",
        rating: 874,
        status: "Stealth Series",
        trending: true,
        color1: "info",
        discount1: '12%',
        badge: 'Trending',
        badgeColor: 'info'
    },
    {
        id: 2,
        title: "Trendy Sunglasses",
        price: "$251",
        discount: "$399",
        productpicture: "../../../assets/images/ecommerce/png/11.png",
        color: "primarytint1color",
        rating: 514,
        status: "Crystal Clear",
        trending: '',
        color1: "",
        discount1: '10%'
    },
    {
        id: 3,
        title: "Wireless Headphones",
        price: "$251",
        discount: "$399",
        productpicture: "../../../assets/images/ecommerce/png/30.png",
        color: "primarytint2color",
        rating: 142,
        status: "SoundWave",
        trending: '',
        color1: "",
        discount1: '21%'
    },
    {
        id: 4,
        title: "Wireless Earbuds",
        price: "$314",
        discount: "$547",
        productpicture: "../../../assets/images/ecommerce/png/31.png",
        color: "success",
        rating: 211,
        status: "AirPods Max",
        trending: '',
        color1: "",
        discount1: '60%'
    },
    {
        id: 5,
        title: "Kids' Party Wear Frock",
        price: "$236",
        discount: "$267",
        productpicture: "../../../assets/images/ecommerce/png/12.png",
        color: "info",
        rating: 231,
        status: "Twinkle Twirl",
        trending: '',
        color1: "",
        discount1: '15%'
    },
    {
        id: 6,
        title: "Ladies' Slim Bag",
        price: "$124",
        discount: "$105",
        productpicture: "../../../assets/images/ecommerce/png/29.png",
        color: "primarytint1color",
        rating: 110,
        status: "Sleek Elegance",
        trending: '',
        color1: "",
        discount1: '24%'
    },
    {
        id: 7,
        title: "Advanced Smartwatch",
        price: "$354",
        discount: "$455",
        productpicture: "../../../assets/images/ecommerce/png/23.png",
        color: "warning",
        rating: 225,
        status: "SmartSync 2024",
        trending: '',
        color1: "",
        discount1: '15%',
        badge: 'Trending',
        badgeColor: 'danger'
    },
];

export const RelatedSwiper = products.map((idx: any) => (
    <SpkProducts
        shoBadge={true}
        badge={idx.badge}
        idx={{ id: String(idx.id) }}
        card={idx}
    />
));



interface Product {
    name: string;
    imageSrc: string;
    rating: number;
    reviews: string;
    price: number;
    originalPrice: number;
}

export const Producrdetailsdata: Product[] = [
    {
        name: "Ladies' Slim Bag",
        imageSrc: "../../../assets/images/ecommerce/png/29.png",
        rating: 4.3,
        reviews: '16k',
        price: 1099,
        originalPrice: 1759,
    },
    {
        name: "Wireless Headphones",
        imageSrc: "../../../assets/images/ecommerce/png/30.png",
        rating: 4.3,
        reviews: '5k',
        price: 799,
        originalPrice: 1299,
    },
    {
        name: "Wireless Earbuds",
        imageSrc: "../../../assets/images/ecommerce/png/31.png",
        rating: 4.3,
        reviews: '2k',
        price: 1499,
        originalPrice: 2599,
    },
    {
        name: "Voluptatem Alarm Clock",
        imageSrc: "../../../assets/images/ecommerce/png/32.png",
        rating: 4.3,
        reviews: '12k',
        price: 2299,
        originalPrice: 3299,
    },
    {
        name: "Lightweight Sneakers",
        imageSrc: "../../../assets/images/ecommerce/png/28.png",
        rating: 4.3,
        reviews: '12k',
        price: 899,
        originalPrice: 1299,
    },
];
