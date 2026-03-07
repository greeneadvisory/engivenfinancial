import React, { Fragment } from 'react';
import SpkBadge from '../uielements/spk-badge';

interface SpkDealcardsProps {
    cardClass?: string;
    bodyClass?: string;
    mainClass?: string;
    icon?: string;
    iconColor?: string;
    iconColors?: string;
    iconClass?: string;
    badgeColor?: string;
    badge?: string;
}

const SpkDealcards: React.FC<SpkDealcardsProps> = ({ cardClass, bodyClass, mainClass, icon, iconColor, iconColors, iconClass, badgeColor, badge }) => {
    return (
        <Fragment>
            <div className={`box  ${cardClass}`}>
                <div className={`box-body ${bodyClass}`}>
                    <div className={mainClass}>
                        <div>
                            <h6 className="font-medium lead-discovered">
                                <i className={`${icon} p-1 leading-none text-[0.4375rem] rounded-md bg-${iconColor}/10 text-${iconColor} me-2 align-middle`}></i>{iconClass}</h6>
                        </div>
                        <div className="ms-auto text-center">
                            <SpkBadge variant={badgeColor}>{badge}</SpkBadge>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SpkDealcards;
