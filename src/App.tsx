import {
    CaretRightOutlined,
    ClearOutlined,
    CloseCircleOutlined,
    StepForwardOutlined,
} from "@ant-design/icons";
import Timer from "./components/Timer.tsx";
import TimerSummary from "./components/TimeSummary.tsx";
import {useEffect, useState, useRef} from "react";

function App() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [lapTimes, setLapTimes] = useState<number[]>([]);

    useEffect(() => {
        if (start) {
            intervalRef.current = setInterval(() => {
                setTime((c) => c + 1);
            }, 100);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [start]);

    const handleStartClick = () => {
        setStart(true);
    };

    const handleLapClick = () => {
        setLapTimes([...lapTimes, time]);
        setTime(0);
    };

    const handleStopClick = () => {
        handleLapClick();
        setStart(false);
    };

    const handleResetClick = () => {
        setTime(0);
        setStart(false);
        setLapTimes([]);
    };

    // let formattedTime = time.toString();

    function timeFormatter(time: number) { //TODO return format 00:00:00
        if (time >= 10) return time.toString().slice(0, -1) + ":" + time.toString().slice(-1);
        return time.toString()
    }

    const totalTime = lapTimes.reduce((acc, curr) => acc + curr, time);

    return (
        <>
            <div className="title">Stopwatch - react</div>
            <div className="timers">
                <Timer time={timeFormatter(time)}/>
            </div>
            <div className="summary">
                {
                    lapTimes.map((lapTime, index) => (
                        <TimerSummary
                            key={index}
                            text={"Lap"}
                            time={timeFormatter(lapTime)}
                            number={index + 1}
                        />
                    ))
                }
                <TimerSummary text={"Full Time"} time={timeFormatter(totalTime)}/>
            </div>
            <div className="buttons-section">
                <button onClick={handleStartClick}>
                    <CaretRightOutlined/> Start
                </button>
                <button onClick={handleLapClick}>
                    <StepForwardOutlined/> Lap
                </button>
                <button onClick={handleStopClick}>
                    <CloseCircleOutlined/> Stop
                </button>
                <button onClick={handleResetClick}>
                    <ClearOutlined/> Reset
                </button>
            </div>
        </>
    );
}

export default App;
