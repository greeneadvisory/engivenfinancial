import React, { Fragment } from 'react';
import SpkBadge from '../uielements/spk-badge';
import SpkOverlay from '../uielements/spk-overlay';
import Link from 'next/link';

interface SpkProductsProps {
  onclick?: () => void;
  cartClick?: () => void;
  detailsClick?: () => void;
  shoBadge?: boolean;
  card?: any;
  badge?: string;
  idx?: any;
}

const SpkProducts: React.FC<SpkProductsProps> = ({ onclick, cartClick, detailsClick, shoBadge = false, card, badge, idx }) => {
  return (
    <Fragment>
        <div className="box card-style-2">
              <div className="box-body p-0">
                  <div className="top-left-badge">
                      {shoBadge && badge && (
                         <div className={`badge bg-${card.badgeColor} d-inline-flex gap-1 leading-none items-center text-white mb-1`}>
                            <div className="badge-icon"><i className="ti ti-bolt"></i></div>
                            <div className="badge-text">{card.badge}</div>
                        </div>
                      )}
                      <SpkBadge variant={card.color} className={`inline-block`}>{card.discount1}  Off</SpkBadge>
                  </div>
                  <div className="card-img-top border-b border-dashed dark:border-defaultborder/10">
                      <div className="btns-container-1 items-center gap-1">
                          <SpkOverlay customClass="[--placement:top]">
                              <Link scroll={false} href="#!" className="ti-btn ti-btn-icon bg-primary text-white rounded-full">
                                  <i className="bx bx-search"></i>
                                  <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip">
                                  Quick View
                                  </span>
                              </Link>
                          </SpkOverlay>
                          <SpkOverlay customClass="[--placement:top]">
                              <Link scroll={false} href="/apps/ecommerce/wishlist" className="ti-btn ti-btn-icon bg-primarytint1color text-white rounded-full" onClick={onclick}>
                                  <i className="bx bx-heart align-center"></i>
                                  <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip">
                                  Add To Wishlist
                                  </span>
                              </Link>
                          </SpkOverlay>
                          <SpkOverlay customClass="[--placement:top]">
                              <Link scroll={false} href="#!" className="ti-btn ti-btn-icon bg-info text-white rounded-full">
                                  <i className="bx bx-adjust"></i>
                                  <span
                                      className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                      role="tooltip">
                                  Compare
                                  </span>
                              </Link>
                          </SpkOverlay>
                      </div>
                      <div className="img-box-2 p-2">
                          <img src={card.productpicture} alt="img" className="scale-img img-fluid w-full bg-primary/10  rounded"/> 
                      </div>
                      <SpkOverlay customClass="[--placement:top] btn-style-1">
                          <Link scroll={false} href="/apps/ecommerce/cart" className="ti-btn bg-primary text-white rounded-full ti-btn-icon" title="Add to Cart" onClick={cartClick}>
                              <i className="bx bxs-cart-add text-lg"></i>
                              <span
                                  className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                  role="tooltip">
                              Add To Cart
                              </span>
                          </Link>
                      </SpkOverlay>
                  </div>
                  <div className="p-4">
                      <h6 className="mb-1 font-semibold text-[1rem]"><Link scroll={false} href={idx} onClick={detailsClick}> {card.title}</Link></h6>
                      <div className="flex align-items-end justify-between flex-wrap">
                          <div className="grow">
                              <div className="flex items-baseline text-[11px]">
                                  <div className="min-w-fit-content">
                                      <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                      <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                      <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                      <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                  </div>
                                  <p className="mb-1 ms-1 min-w-fit-content text-textmuted dark:text-textmuted/50">
                                      <span>{card.rating}</span>
                                      <span> Ratings</span>
                                  </p>
                              </div>
                              <Link scroll={false} href="#!" className="text-primarytint1color text-[13px] font-semibold">{card.status}</Link>
                          </div>
                          <div className="min-w-fit-content">
                              <h5 className="font-semibold text-primary mb-0">{card.price}</h5>
                              <span className="text-[13px] ms-2 text-textmuted dark:text-textmuted/50 line-through">{card.discount}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
     
    </Fragment>
  );
};

export default SpkProducts;
