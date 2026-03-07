import React from 'react';
import SpkBadge from '../uielements/spk-badge';
import Link from 'next/link';

interface SpkCardNftProps {
    imgSrc?: string;
    avatarSrc?: string;
    auctionTime?: string;
    title?: string;
    rating?: number | string;
    clientName?: string;
    mail?: string;
    currentBid?: number | string;
    svgIcon?: string | any;
}

const SpkCardNft: React.FC<SpkCardNftProps> = ({ imgSrc, avatarSrc, auctionTime, title, rating, clientName, mail, currentBid, svgIcon }) => {

    return (
        <div className="box overflow-hidden">
            <div className="mb-0 text-white bg-primarytint2color nft-auction-time">
            {auctionTime}
            </div>
            <div className="relative">
                <img src={imgSrc} className="card-img-top nft-img1" alt={title} />
                <SpkBadge customClass="nft-like-badge text-white"><i className="ri-heart-fill me-1 text-danger align-middle inline-block"></i>{rating}</SpkBadge>
            </div>
            <div className="box-body nft-body">
                <p className="text-[15px] mb-2 font-semibold">{title}</p>
                <div className="flex mb-3 items-center flex-wrap gap-2">
                    <div className="leading-none">
                        <span className="avatar avatar-rounded avatar-xs">
                            <img src={avatarSrc} alt={clientName}/>
                        </span>
                    </div>
                    <div className="flex-auto">
                        <p className="mb-0 text-xs font-medium">{clientName} </p>
                        <p className="text-[11px] op-8 mb-0 leading-none">{mail}</p>
                        
                    </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p className="mb-0">Current Bid :</p>
                    <h6 className="font-semibold mb-0 bid-amt align-middle flex items-center gap-2">
                        {svgIcon}
                        {currentBid}
                    </h6>
                </div>
                <div className="grid">
                    <Link scroll={false} href="#!" className="ti-btn bg-primary text-white mb-md-0 mb-0">Place Bid</Link>
                </div>
            </div>
         </div>

       
    );
};

export default SpkCardNft;
