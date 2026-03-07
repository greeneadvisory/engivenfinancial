import Link from 'next/link';
import React, { Fragment } from 'react';
import SpkBadge from '../uielements/spk-badge';

interface SpkNftCardProps {
    imgSrc?: string;
    imgSrc1?: string;
    time?: number | string;
    title?: string;
    rating?: number | string;
    clientName?: string;
    mail?: any;
    count?: number | string;
    imgClass?: string;
    cardClass?: string;
}

const SpkNftcards: React.FC<SpkNftCardProps> = ({ imgSrc, imgSrc1, time, title, rating, clientName, mail, count, 
    imgClass,
     cardClass }) => {
    return (
        <Fragment>
            <div className={`box ${cardClass} `}>
                        <div className="box-body">
                            <Link scroll={false} href="#!" className="stretched-link"></Link>
                            <div className="relative overflow-hidden rounded">
                                <img src={imgSrc} className={`card-img mb-3 ${imgClass}`} alt={title}/>
                                <p className="mb-0 text-white bg-primarytint2color nft-auction-time">{time}
                                </p>
                            </div>
                            <div>
                                <div className="flex items-start gap-2">
                                    <p className="text-[15px] mb-2 font-semibold">{title}</p>
                                    <div className="ms-auto">
                                        <SpkBadge variant="danger/10" customClass="!text-danger">
                                        <i className="ri-heart-fill me-1 text-danger align-middle inline-block"></i>{rating}
                                        </SpkBadge>
                                    </div>
                                </div>
                                <div className="flex mb-3 items-center flex-wrap gap-2">
                                    <div className="leading-none">
                                        <span className="avatar avatar-rounded avatar-md">
                                            <img src={imgSrc1} alt={clientName}/>
                                        </span>
                                    </div>
                                    <div className="flex-auto">
                                        <p className="mb-0 font-medium">{clientName} </p>
                                        <p className="text-xs text-textmuted dark:text-textmuted/50 mb-0 leading-none">-
                                        {mail}</p>

                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <p className="mb-0 font-medium">Current Bid :</p>
                                    <h6 className="font-semibold mb-0 bid-amt align-middle flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="65"
                                            viewBox="0 0 40 65">
                                            <g fill="none" fillRule="evenodd">
                                                <g fillRule="nonzero" transform="translate(-227 -93)">
                                                    <g transform="translate(227 93)">
                                                        <g>
                                                            <path fill="#8A92B2"
                                                                d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z">
                                                            </path>
                                                            <path fill="#454A75"
                                                                d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z">
                                                            </path>
                                                            <path fill="#8A92B2"
                                                                d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z">
                                                            </path>
                                                            <path fill="gray"
                                                                d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z">
                                                            </path>
                                                            <path fill="#62688F"
                                                                d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z">
                                                            </path>
                                                            <path fill="#62688F"
                                                                d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z">
                                                            </path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        {count}
                                    </h6>
                                </div>
                                <div className="grid">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary mb-md-0">Place Bid</Link>
                                </div>
                            </div>
                        </div>
                    </div>

          
        </Fragment>
    );
};

export default SpkNftcards;
