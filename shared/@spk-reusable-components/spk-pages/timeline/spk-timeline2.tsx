import React from 'react';
import SpkBadge from '../../uielements/spk-badge';
import Link from 'next/link';

interface NotificationProps {
    date: string;
    time: string;
    avatarSrc: string;
    title: string;
    description: string;
    badgeContent: string;
    badgeClass: string;
    isEnd?: boolean;
    End?: boolean;
    Start?: boolean;
    Navigate: string
    bordercolor: string
}

const Notification: React.FC<NotificationProps> = ({ date, time, End, Start, avatarSrc,bordercolor, Navigate, title, description, badgeContent, badgeClass, isEnd }) => {
    return (
      <>
        <li>
        <div className="grid grid-cols-12 sm:gap-x-6">
            {Start ?
                <div className="xl:col-span-6 col-span-12">
                    <div className={`notification-time flex items-center gap-2 ${isEnd ? 'content-end' : ''}`}>
                        <span className="date">{date}</span>
                        <span className="time">{time}</span>
                    </div>
                    <div className="notification-icon">
                        <Link href={Navigate} className={badgeClass}></Link>
                    </div>
                </div>
           :''}
            <div className="xl:col-span-6 col-span-12">
                <div className={`notification-body border ${isEnd ? 'notification-body-end' : ''} ${bordercolor}`}>
                    <div className="flex items-start gap-4 flex-wrap">
                        <div>
                            <span className="avatar avatar-lg online">
                                <img src={avatarSrc} alt="" />
                            </span>
                        </div>
                        <div className="flex-auto sm:!w-[50%]">
                            <h5 className="mb-1 text-[15px] font-medium text-dark">{title} </h5>
                            <p className="mb-0 text-textmuted dark:text-textmuted/50">{description}</p>
                        </div>
                        <div>
                            <SpkBadge variant={`${badgeClass}/10`}  customClass={`!text-${badgeClass}`}>
                                    {badgeContent}
                            </SpkBadge>
                        </div>
                    </div>
                </div>
            </div>
            {End ?
            <div className="xl:col-span-6 col-span-12">
                <div className={`notification-time flex items-center gap-2 ${isEnd ? 'content-end' : ''}`}>
                    <span className="date">{date}</span>
                    <span className="time">{time}</span>
                </div>
                <div className="notification-icon">
                    <Link href={Navigate} className={badgeClass}></Link>
                </div>
            </div>
            :""}
        </div>
     </li>
    
      </>
    );
};

export default Notification;
