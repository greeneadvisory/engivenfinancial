import React, { Fragment } from 'react';
import Spkapexcharts from '../spk-packages/apexcharts-component';

interface CryptoCardProps {
    type?: string;
    width?: number | string;
    height?: number | string;
    object?: any;
}

const SpkCryptocard: React.FC<CryptoCardProps> = ({ width, height, object }) => {

    return (
        <Fragment>
            <div className="box">
                <div className="box-body">
                    <div className="flex items-center gap-2 justify-between flex-wrap">
                        <div className="flex items-start gap-2">
                            <div
                                className="leading-none avatar avatar-sm p-1 bg-light avatar-rounded">
                                <img src={object.imgSrc}
                                    alt={object.name} className="w-auto xrp-logo"/>
                            </div>
                            <div>
                                <h5 className="mb-0">{object.value} 
                                <span className="text-textmuted dark:text-textmuted/50 font-medium text-[13px]">{object.symbol}</span></h5>
                                <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">
                                {object.name}</p>
                            </div>
                        </div>
                        <div id={`${object.symbol}-marketcap`}>
                            <Spkapexcharts
                                chartOptions={object.chartOptions}
                                chartSeries={object.chartSeries}
                                type={object.type}
                                width={width}
                                height={height}
                            />
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-2 justify-between mt-3 bg-light px-2 p-1 rounded-md">
                        <p className="mb-0 font-medium text-textmuted dark:text-textmuted/50 py-1">
                        {object.price}</p>
                        <div className={`text-${object.chnageColor} inline-flex items-center`}><i className={`ti ti-trending-${object.changeType} me-1`}></i>+0.57%
                        </div>
                    </div>
                </div>
            </div>
          
        </Fragment>
    );
};

export default SpkCryptocard;
