import React, { Fragment } from 'react'

interface SpksocialmediacardscomponentProps {
    cardClass?: string;
    data?: string;
    app?: string;
    followers?: string;
    percent?: string;
    icon?: string;
    color?: string;
    color1?: string;
}

const Spksocialmediacardscomponent: React.FC<SpksocialmediacardscomponentProps> = ({ cardClass, data, app, followers, percent, icon, color, color1 }) => {

    return (
        <Fragment>
              <div className={`box social-cards ${cardClass} `}>
                <div className="box-body flex-auto">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div>
                            <p className={`flex-auto text-[15px] font-medium mb-1 text-${color1}`}>{app}</p>
                            <p className="mb-2 text-2xl font-medium">{data}</p>
                            <div className="flex-between">
                                <span className="text-textmuted dark:text-textmuted/50 text-xs">{followers}</span>
                                <span className={`text-${color} inline-block`}><i className={`bi bi-arrow-${icon}-right me-1 text-[10px]`}></i>1.5%</span>
                            </div>
                        </div>
                        <div className="align-self-center ms-auto">
                           
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spksocialmediacardscomponent