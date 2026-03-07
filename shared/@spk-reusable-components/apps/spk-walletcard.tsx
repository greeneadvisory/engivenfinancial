import React from 'react';
import SpkButton from '../uielements/spk-button';

interface SpkWalletCardProps {
  title?: string;
  name?: string;
  price1?: string;
  priceInUSD?: string;
  data?: string;
  img?: string;
}

const SpkWalletCard: React.FC<SpkWalletCardProps> = ({ title, name, price1, priceInUSD, data, img }) => {
  return (

<div className="box">
    <div className="box-header">
        <div className="box-title">
        {title}
        </div>
    </div>
    <div className="box-body">
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <div className="leading-none">
                    <span className="avatar avatar-rounded">
                        <img src={img} alt={name}/>
                    </span>
                </div>
                <div>
                    <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">{name}</span>
                    <span className="font-medium text-[15px]">{price1}</span>
                </div>
            </div>
            <div>
                <span className="font-medium">{priceInUSD}</span>
                <span className="block text-textmuted dark:text-textmuted/50 text-xs font-normal">{data}</span>
            </div>
        </div>
    </div>
    <div className="box-footer">
        <div className="flex gap-2 flex-wrap">
            <SpkButton variant="soft-primary" customClass="ti-btn !m-0  btn-w-lg btn-wave flex-auto">Deposit</SpkButton>
            <SpkButton variant="soft-primary1" customClass="ti-btn btn-w-lg btn-wave flex-auto !m-0">Withdraw</SpkButton>
        </div>
    </div>
</div>
   
  );
};

export default SpkWalletCard;
