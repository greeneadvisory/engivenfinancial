import Link from 'next/link'
import React, { Fragment } from 'react'

interface Spkwidgetcard6componentprops {
    cardTitle?: string;
    shop?: any;
    viewcolor?: string;
    view?: string;
}

const Spkwidgetcard6component: React.FC<Spkwidgetcard6componentprops> = ({ cardTitle, shop, viewcolor, view }) => {
    return (
        <Fragment>
            <div className="box">
                <div className="box-header">
                    <div className="box-title">
                    {cardTitle}
                    </div>
                </div>
                <div className="box-body">
                    <ul className="list-none mb-3">
                        {shop.map((idx: any, index:any) => (
                            <li className="mb-3" key={index}>
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="leading-none">
                                        <span
                                            className={`avatar  avatar-md avatar-rounded p-1 bg-${idx.color} border border-defaultborder dark:border-defaultborder/10`}>
                                            <i className={`fe ${idx.icon}`}></i>
                                        </span>
                                    </div>
                                    <div className="flex-auto leading-none">
                                        <span className="font-medium mb-2 block text-[14px]">{idx.shop}</span>
                                        <span className="block text-textmuted dark:text-textmuted/50 text-xs">{idx.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`text-[11px] text-${idx.percolor}`}><i
                                                className={`ti ti-arrow-narrow-${idx.icon1}`}></i>{idx.percent}%</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center">
                        <Link scroll={false} href="#!" className={`text-${viewcolor} font-medium underline`}> {view}</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spkwidgetcard6component