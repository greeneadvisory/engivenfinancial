import React, { useState } from 'react';

interface TimelineStepProps {
    date: string;
    title: string;
    content: string;
    imageSrc: string;
    bgClass: string;
    Customclass: string;
    borderclass: string;
}

const SpkTimelineStep: React.FC<TimelineStepProps> = ({ date, title,borderclass, content, imageSrc, Customclass, bgClass, }) => {


    return (
        <>
        <div className="timeline-step">
            <div className="timeline-content">
                <div className="inner-circle"></div>
                <div className={`box mb-0 border ${borderclass} !bg-${bgClass}/10  ${Customclass}`}>
                    <div className="box-body">
                        <span className="avatar avatar-sm avatar-rounded">
                            <img src={imageSrc} alt="" />
                        </span>
                        <p className="font-medium mt-1 mb-1">{date}</p>
                        <p className="mb-1 font-semibold">{title}: <span className="text-textmuted dark:text-textmuted/50 font-normal mb-0 mb-lg-0">{content}</span>  </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SpkTimelineStep;
