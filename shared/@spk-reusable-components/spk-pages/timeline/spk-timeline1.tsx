import Link from 'next/link';
import React from 'react';

interface TimelineItemProps {
    time: string;
    user: string;
    action: React.ReactNode;
    description: string;
    Navigate: string | URL;
    media: string[];
}

interface TimelineData {
    date: string;
    color: string;
    entries: TimelineItemProps[];
}

const SpkTimeline: React.FC<{ timelineData: TimelineData[] }> = ({ timelineData }) => {
    const TimelineItem: React.FC<TimelineItemProps> = ({ time, user, action, description, media, Navigate }) => {
        return (
            <div className="timeline-right">
                <div className="timeline-content">
                    <p className="timeline-date text-textmuted dark:text-textmuted/50 mb-2">{time}</p>
                    <div className="timeline-box">
                        <p className="mb-2">
                            <b>{user}</b> {action}
                        </p>
                        <p className="mb-2 text-textmuted">{description}</p>
                        <p className="profile-activity-media flex items-center mb-0 flex-wrap">
                            {media.map((src, index) => (
                                <Link key={index} href={Navigate}>
                                    <img src={src} alt="" className="mb-0" />
                                </Link>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="timeline-container">
            {timelineData.map((day, dayIndex) => (
                <React.Fragment key={dayIndex}>
                    <div className="timeline-end">
                        <span className={`p-1 text-[11px] bg-${day.color} text-white backdrop-blur text-center border-${day.color} border-opacity-10 rounded-sm leading-none font-medium`}>
                            {day.date}
                        </span>
                    </div>
                    <div className="timeline-continue">
                        {day.entries.map((item, itemIndex) => (
                            <TimelineItem key={itemIndex} {...item} />
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SpkTimeline;
