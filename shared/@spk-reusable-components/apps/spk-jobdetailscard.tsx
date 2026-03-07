import React from 'react';
import SpkOverlay from '../uielements/spk-overlay';
import Link from 'next/link';
import SpkBadge from '../uielements/spk-badge';

interface SpkJobdetailsProps {
    image?: string;
    title?: string;
    company?: string;
    location?: string;
    experience?: string;
    salary?: string;
    color?: string;
    icon?: string;
    cardClass?: string;
    avatarSize?: string;
    Imagetag?: boolean;
    mainClass?: string;
}

const SpkJobdetails: React.FC<SpkJobdetailsProps> = ({ cardClass, avatarSize = 'md', image, title, company, location, experience, salary, color, icon, Imagetag = false, mainClass }) => {
    return (
      <div className={`box ${cardClass}`}>
      <div className="box-body">
          <div className={mainClass}>
              <div>
                        {Imagetag ? <span className={`avatar avatar-${avatarSize} avatar-rounded border dark:border-defaultborder/10  border-defaultborder p-1 me-2`}>
                            <img src={image} alt={title} />
                        </span>
                            :
                            <span className={`avatar avatar-${avatarSize} avatar-rounded bg-${color}-transparent border dark:border-white/10`}>
                                <i className={icon}></i>
                            </span>
                        }
                    </div>
              <div className="ms-1 grow !w-[75%] truncate">
                  <h6 className="font-medium mb-0 flex items-center truncate !w-[75%]"><Link scroll={false} href="#!" className="truncate">{title}</Link></h6>
                  <Link scroll={false} href="#!" className="text-xs text-textmuted dark:text-textmuted/50"><i className="bi bi-building"></i>{company}</Link>
              </div>
              <div className="ms-auto flex gap-1 ">
                  <SpkOverlay customClass="[--placement:top]">
                      <Link scroll={false} href="#!" className="avatar avatar-sm avatar-rounded bg-primarytint1color/10 !text-primarytint1color">
                          <i className="bi bi-heart"></i>
                          <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              Add to wishlist
                          </span>
                      </Link>
                  </SpkOverlay>
                  <SpkOverlay customClass="[--placement:top]">
                      <Link scroll={false} href="#!" className="avatar avatar-sm avatar-rounded bg-warning/10 !text-warning">
                          <i className="bi bi-star-fill"></i>
                          <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                              role="tooltip">
                              Featured Jobs
                          </span>
                      </Link>
                  </SpkOverlay>
              </div>
          </div>
          <div className="mb-3">
              <div className="popular-tags mb-3 flex gap-1 flex-wrap xxl:flex-nowrap">
                  <SpkBadge variant="info/10" customClass="rounded-full text-info"><i className="bi bi-geo-alt me-1"></i> {location}</SpkBadge>
                  <SpkBadge variant="primarytint2color/10" customClass="rounded-full text-primarytint2color"><i className="bi bi-mortarboard me-1"></i> {experience}</SpkBadge>
              </div>
              <h6 className="font-medium mb-0">{salary}</h6>
          </div>
          <Link scroll={false} href="#!" className="font-medium ti-btn ti-btn-sm bg-primary text-white grid text-nowrap">
              Apply Now
          </Link>
      </div>                                                    
  </div>
    );
};

export default SpkJobdetails;
