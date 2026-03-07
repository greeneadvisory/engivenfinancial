import React, { Fragment } from 'react'
import Spkapexcharts from '../spk-packages/apexcharts-component';

interface SpkProjectscardcomponentProps {
    cardClass?: string;
    width?: number | string;
    height?: number | string;
    project?: any;
}

const SpkProjectscardcomponent: React.FC<SpkProjectscardcomponentProps> = ({ cardClass, width, height, project }) => {

    return (

        <Fragment>
             <div className={`box ${cardClass} `}>
                <div className="box-body">
                    <div className="mb-5 flex items-start justify-between">
                        <span className={`avatar avatar-sm bg-${project.color} svg-white`}>
                            <i className={`ri-${project.icon} text-[1rem]`}></i>
                        </span>
                        <span className={`badge leading-none bg-${project.color1}/10 text-${project.color1}`}>{project.badge}</span>
                    </div>
                    <div className="flex align-items-end justify-between flex-wrap">
                        <div className="flex-shrink-0 leading-none">
                            <div className="text-textmuted dark:text-textmuted/50 mb-2">{project.projects}</div>
                            <h4 className="mb-0 text-xl font-medium">{project.data}</h4>
                        </div>
                        <div id="Projects-2" className="flex-shrink-0 text-end ms-auto">
                            <Spkapexcharts chartOptions={project.chartoptions} chartSeries={project.chartseries} type={project.type} width={width} height={height} />
                        </div>
                    </div>
                </div>
            </div>
           
        </Fragment>
    )
}

export default SpkProjectscardcomponent;