
import Link from 'next/link';
import React from 'react';

interface SpkTimelineProps {
    avatar?: string;
    title?: string | any;
    description?: any;
    timestamp?: string;
    media?: string[];
    sharedWith?: string[];
    desClass?: string;
    SpanContent?: string;
    color?: string
    Textafter?: boolean
    avatartext?: boolean
}

const SpkprojectTimeline: React.FC<SpkTimelineProps> = ({ avatar, title, description, desClass, timestamp,Textafter=false,avatartext=false, media = [], sharedWith = [], SpanContent, color }) => {
    return (
        <li>
            <div>
                <span className="avatar avatar-sm shadow-sm avatar-rounded profile-timeline-avatar">
                    {avatar ? (
                        <img src={avatar} alt="Avatar" />
                    ) : SpanContent ? (
                        <span className={`avatar avatar-sm shadow-sm bg-${color} avatar-rounded profile-timeline-avatar`}>
                            {SpanContent}
                        </span>
                    ) : null}
                </span>
                <div className="mb-2 flex items-start gap-2 flex-wrap">
                    <div>
                        <span className="font-medium" dangerouslySetInnerHTML={{ __html: title }}></span>
                    </div>
                    <span className=" ms-auto bg-light text-textmuted dark:text-textmuted/50 badge">{timestamp}</span>
                </div>
                <p className={`text-textmuted dark:text-textmuted/50 mb-0 ${desClass}`}>{description}</p>
                {media.length > 0 && (
                    <div className=" profile-activity-media mb-0 flex items-center">
                        {media.map((src, index) => (
                            <Link scroll={false} key={index} href="#!">
                                <img src={src} alt={`Media ${index}`} />
                            </Link>
                        ))}
                {Textafter? <span className="text-[11px] text-textmuted dark:text-textmuted/50">512.34KB</span>:""}
                    </div>

                )}
                {sharedWith.length > 0 && (
                    <div className="avatar-list-stacked mt-2">
                        {sharedWith.map((src, index) => (
                            <span key={index} className="avatar avatar-xs avatar-rounded">
                                <img src={src} alt="img" />
                            </span>
                        ))}
                        {avatartext ? "4 People reacted" :""}
                    </div>
                )}
            </div>
        </li>
    );
};

export default SpkprojectTimeline;
