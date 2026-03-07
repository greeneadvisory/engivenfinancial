import React, { Fragment } from 'react'
import Link from 'next/link';


interface Teamprops {
    Imgsrc?: string;
    Role?: string;
    Title?: string;
    Color?: string;
    CustomBodyclass?: string;
    Imageclass?: string;
    Iconclass?: string;
    Navigate: string;
}


const SpkTeamcards:React.FC<Teamprops> = ({ Imgsrc, Role, Title, Color, CustomBodyclass, Imageclass, Iconclass, Navigate }) => {
  return (
    <Fragment>
      <div className="box team-member text-center">
            <div className="team-bg-shape primary"></div>
            <div className={` box-body ${CustomBodyclass}`}>
                <div className={`${Imageclass} mb-3 leading-none flex gap-2 justify-center`}>
                    <span className={`avatar avatar-xl avatar-rounded bg-${Color}`}>
                        <img src={Imgsrc} className="card-img" alt="..."/>
                    </span>
                </div>
                <div className="">
                    <p className={`mb-2 text-[11px] badge leading-none bg-${Color} font-medium`}>{Role}</p>
                    <h6 className="mb-3 font-semibold">{Title}</h6>
                    <p className="text-textmuted dark:text-textmuted/50 text-xs mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                    <div className={`flex justify-center ${Iconclass}`}>
                        <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-soft-primary btn-wave ti-btn-sm"><i className="ri-twitter-x-fill"></i></Link>
                        <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-soft-primary1 btn-wave ti-btn-sm ms-2"><i className="ri-facebook-fill"></i></Link>
                        <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-soft-primary2 btn-wave ti-btn-sm ms-2"><i className="ri-instagram-line"></i></Link>
                        <Link scroll={false} aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-soft-primary3 btn-wave ti-btn-sm ms-2"><i className="ri-linkedin-fill"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        
    </Fragment>
  )
}

export default SpkTeamcards