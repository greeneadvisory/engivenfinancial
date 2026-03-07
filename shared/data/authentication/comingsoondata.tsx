
"use client"
import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
        return <AfterComplete />;
    } else {
        return (
            <div className="flex gap-4 flex-wrap mt-4 mb-0 gy-xxl-0 gy-3 justify-center">
                <div>
                    <div className="">
                        <h6 className="mb-1font-medium">Days</h6>
                        <h3 className="mb-0 avatar block bg-primary/10 !text-primary avatar-rounded shadow-sm avatar-xl mt-2 backdrop-blur">{days}</h3>
                    </div>
                </div>
                <div>
                    <div className="">
                        <h6 className="mb-1font-medium">Hours</h6>
                        <h3 className="avatar block bg-primarytint1color/10 !text-primarytint1color avatar-rounded shadow-sm avatar-xl mb-0 mt-2 backdrop-blur">{hours}</h3>
                    </div>
                </div>
                <div>
                    <div className="">
                        <h6 className="mb-1font-medium">Minutes</h6>
                        <h3 className="mb-0 avatar block bg-primarytint2color/10 !text-primarytint2color avatar-rounded shadow-sm avatar-xl mt-2 backdrop-blur">{minutes}</h3>
                    </div>
                </div>
                <div>
                    <div className="">
                        <h6 className="mb-1font-medium">Seconds</h6>
                        <h3 className="mb-0 avatar block bg-primarytint3color/10 !text-primarytint3color avatar-rounded shadow-sm avatar-xl mt-2 backdrop-blur">{seconds}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 19999999999} renderer={rendering} />);
}

