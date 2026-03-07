import React from 'react';
import SpkDropdown from '../uielements/spk-dropdown';
import Link from 'next/link';

interface SpkDealsCardProps {
    img?: string;
    title?: string;
    date?: string;
    subtitle?: string;
    amount?: string;
    company?: string;
    cardClass?: string;
    bodyClass?: string;
    Amounttext?: string;
}

const SpkDealsCard: React.FC<SpkDealsCardProps> = ({ img, title, date, subtitle, amount, company, cardClass, bodyClass, Amounttext }) => {
    return (
        <div className={`box ${cardClass}`}>
            <div className={`box-body ${bodyClass}`}>
                <div className="flex items-center gap-2 mb-3"> 
                    <div className="flex items-center gap-1 flex-wrap">
                        <div className="leading-none">
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={img} alt=""/>
                            </span>
                        </div>
                        <div>
                            <div className="">{title}</div>
                            <div className="text-textmuted dark:text-textmuted/50 text-[10px]">{date}</div>
                        </div>
                    </div>
                        <SpkDropdown Customclass="ms-auto" Linktag={true} Linkclass="ti-btn bg-light ti-btn-icons ti-btn-sm text-textmuted dark:text-textmuted/50 ti-dropdown-toggle hs-dropdown-toggle" 
                            Icon={true} IconClass="fe fe-more-vertical">
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Edit</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">Delete</Link></li>
                            <li><Link scroll={false} className="ti-dropdown-item" href="#!">View Details</Link></li>
                        </SpkDropdown>
                </div>
                <p className="font-medium mb-1 text-[14px]">{subtitle}</p>
                <p className="font-medium mb-4"><span className="text-textmuted dark:text-textmuted/50 font-normal">{Amounttext}:</span> {amount}</p>
                <div className="deal-description">
                    <div className="">
                        <Link scroll={false} href="#!" className="company-name">{company}</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SpkDealsCard;
