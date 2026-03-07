import React, { Fragment } from 'react'
import SpkButton from '../uielements/spk-button';
import Link from 'next/link';
import SpkDropdown from '../uielements/spk-dropdown';

interface Profilecard {
    Imgsrc?: string;
    Name?: string;
    Mail?: string;
    Role?: string;
    Color?: string;
    Navigate: string;
}

const SpkProfilefriendscard: React.FC<Profilecard> = ({ Imgsrc, Name, Mail, Role, Color, Navigate }) => {
    return (
        <Fragment>
             <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                <div className="box shadow-none border border-defaultborder dark:border-defaultborder/10">
                    <div className="box-body">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="avatar avatar-xl avatar-rounded flex-shrink-0">
                                <img src={Imgsrc} alt=""/>
                            </span>
                            <div className="truncate">
                                <Link scroll={false} href={Navigate} className="mb-0 font-semibold">{Name}</Link>
                                <p className="w-75 truncate text-xs opacity-70 mb-1 text-textmuted dark:text-textmuted/50">{Mail}</p>
                                <span className={`badge bg-${Color}/10 text-${Color}`}>{Role}</span>
                            </div>
                                <SpkDropdown Linktag={true} Customclass="ms-auto" Linkclass="ti-btn bg-secondary/10 text-secondary ti-btn-icon ti-btn-sm btn-wave ti-dropdown-toggle hs-dropdown-toggle"
                                   Icon={true} IconClass="ri-more-2-fill"> 
                                    <li><a className="ti-dropdown-item" href="#!">Message</a></li> 
                                    <li><a className="ti-dropdown-item" href="#!">Block</a></li> 
                                    <li><a className="ti-dropdown-item" href="#!">Remove</a></li> 
                                </SpkDropdown> 
                        </div>
                    </div>
                    <div className="box-footer text-center p-4">
                        <div className="flex gap-2 flex-wrap justify-center">
                            <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn btn-wave me-0">View Profile</SpkButton>
                            <SpkButton variant="" Size="sm" customClass="ti-btn bg-light btn-wave me-0">Unfollow</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
         
        </Fragment>
    )
}

export default SpkProfilefriendscard