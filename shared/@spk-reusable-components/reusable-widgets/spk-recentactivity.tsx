import React, { Fragment } from 'react'

interface Spkrecentactivitycomponentprops {
    Recent?: any;
    cardTitle?: string;
}
const Spkrecentactivitycomponent: React.FC<Spkrecentactivitycomponentprops> = ({ Recent, cardTitle }) => {
    return (
        <Fragment>
            <div className="box">
                <div className="box-header">
                    <div className="box-title">
                    {cardTitle}
                    </div>
                </div>
                <div className="box-body">
                    <ul className="widgets-task-list mb-0 ps-[2rem]">
                    {Recent.map((idx: any, index:any) => (
                        <li className="" key={index}>
                            <div className=""> <i className={`task-icon bg-${idx.color}`}></i>
                                <h6 className="text-[14px] mb-0">{idx.review}</h6>
                                <div className="grow flex items-center justify-between">
                                    <div className="template-content" dangerouslySetInnerHTML={{ __html: idx.template }} />
                                    <div className="min-w-fit-content ms-2 text-end">
                                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-[11px]">{idx.date}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Spkrecentactivitycomponent