import Link from 'next/link';
import React, { Fragment } from 'react';

interface ProductActivity {
    IconSize?: string;
    Iconclass?: string;
    ImageClass?: string;
    Icon?: string;
    Title?: string;
    Desc?: string;
    ChildContent?: React.ReactNode;
    Duration?: string;
    DurationClass?: string;
    img?: string[];     
}

interface SpkActivityCardProps {
    productactivity?: ProductActivity;
    Ecommercedashboard?: boolean;
}

const SpkActivityCard: React.FC<SpkActivityCardProps> = ({ productactivity, Ecommercedashboard }) => {
    const imgSrc = productactivity?.img; 
    return (
        <Fragment>
            <div className="flex items-top">
               <div className='me-3'>
                <span className={`${productactivity?.IconSize} ${productactivity?.Iconclass} avatar avatar-rounded`}>
                        <i className={productactivity?.Icon}></i>
                    </span>
               </div>
            <div className={Ecommercedashboard=== true? "truncate":"activity-content"}>
                <span className="block font-medium">
                    {productactivity?.Title ? (
                        <span dangerouslySetInnerHTML={{ __html: productactivity.Title }} />
                    ) : (
                        ''
                    )}
                </span>
                <span className={`block text-xs text-textmuted dark:text-textmuted/50 ${!productactivity?.ChildContent ? 'pb-0' : 'pb-2'}`}>
                    {productactivity?.Desc ? (
                        <span dangerouslySetInnerHTML={{ __html: productactivity.Desc }} />
                    ) : (
                        ''
                    )}
                </span>
                {imgSrc && imgSrc.length > 0 && imgSrc.map((src, index) => (
                        <Link scroll={false} href="#!" key={index} className={`${productactivity.ImageClass} avatar avatar-sm bg-gray-200 me-1`}>
                            <img src={src} alt={`Activity Image ${index}`} />
                        </Link>
                    ))}
                {productactivity?.ChildContent && (
                    <div dangerouslySetInnerHTML={{ __html: String(productactivity.ChildContent) }} />
                )}
            </div>
                {Ecommercedashboard ?  <div className="flex-auto text-end">
                    <span className={productactivity?.DurationClass}>{productactivity?.Duration}</span>
                </div>
                :
                        
                 <span className="text-textmuted dark:text-textmuted/50 ms-auto text-xs flex-shrink-0">{productactivity?.Duration}</span>
            }
            </div>
        </Fragment>
    );
};

export default SpkActivityCard;
