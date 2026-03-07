import  { Fragment } from 'react'
import SpkBadge from '../uielements/spk-badge'
import SpkButton from '../uielements/spk-button';
import SpkOverlay from '../uielements/spk-overlay';

interface Pricing {
    planType?: string;
    landing?: boolean;
    card: any;
}
const SpkPricingcards:React.FC<Pricing>= ({ planType, landing = false, card }) => {
  return (
    <Fragment>
          <div className={`box pricing-card  ${card.Customclass}`}>
                {card.Ribbon ?
                    <div className="pricing-table-item-icon">
                        <i className="fe fe-zap me-2"></i> Popular
                    </div>
                : ""}
                <div className={`box-body border-b border-dashed border-white/10 ${card.Mainclass} ${landing ? "!p-4" : "!p-4"}`}>
                    <h6 className={`font-medium mb-1 ${card.Customh6class}`}>{card.Title}</h6>
                    <h2 className={`font-semibold block ${card.Customh2class} ${card.Mainclass} ${landing ? "mb-1" : "mb-3"}`}>{planType == "monthly" ? card.price : card.yearPrice}
                        <span className="text-xs font-medium ms-1 opacity-80"> /  {planType == "monthly" ? "Month" : "Annum"}</span></h2>
                    <span className={`opacity-70 block ${card.descriptionclass} text-[11px]`}>{card.description}</span>
                </div>
                <div className={`box-body ${landing ? "!p-4" : "!p-4"}${card.Custombodyclass}`}>
                    <ul className="list-none pricing-body">
                        {card.features.map((item: any, index: any) => (
                            <li key={index}>
                                <div className="flex items-center custom-pricing">
                                    <span className="avatar avatar-xs svg-success">
                                        <i className={`ti ti-circle-arrow-right-filled opacity-80 text-lg ${card.arrowClass}`}></i>
                                    </span>
                                    <span className="ms-2 my-auto flex-auto">
                                        {item.Listitem}
                                    </span>
                                    {item.badge ? 
                                    <SpkBadge variant={item.badgecolor} customClass={`rounded-full ${item.badgetxtcolor}`}>{item.badgetxt}</SpkBadge>
                                    :  <span className={`text-xs font-medium ${card.Customclass === "hover !bg-primary" ? "opacity-50" : "text-textmuted dark:text-textmuted/50"}`}>{planType == "monthly" ? item.days : item.yeardays}</span>}
                                    {item.icon === true ?
                                        <SpkOverlay>
                                        <span className={`bg-${item.iconclass}/10 !text-${item.iconclass} px-1 py-[0.1rem] leading-none rounded-full`}>
                                            <i className="ri-information-2-line"></i>
                                            <span
                                                className="hs-tooltip-content max-w-[200px]  ti-main-tooltip-content !border-black py-3 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Provide essential insights and data analysis to help you track the performance.
                                            </span>
                                        </span>
                                    </SpkOverlay> 
                                        : ""}
                                </div>
                            </li>
                        ))}
                     
                    </ul>
                </div>
                <div className={`box-footer border-t border-dashed border-white/10 ${card.Customfooterclass} ${landing ? "p-4" : "p-3"}`}>
                    <SpkButton buttontype="button" variant={card.buttonClass} Size="lg" customClass={`ti-btn grid w-full btn-wave ${card.custombuttoncolor}`}>
                        <span className="ms-4 me-4">Get Started!</span>
                    </SpkButton>
                </div>
            </div>
        
    </Fragment>
  )
}

export default SpkPricingcards