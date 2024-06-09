import {
  CaretRightOutlined,
  ClearOutlined,
  CloseCircleOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import Timer from "./components/Timer.tsx";
import TimerSummary from "./components/TimeSummary.tsx";
import { useEffect, useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [number, setNumber] = useState(1);
  const [start, setStart] = useState(false);
  const intervalRef = useRef<number>();

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
    const lapSummary = (
      <TimerSummary text={"Lap"} time={time} number={number} />
    );
    return lapSummary;
  };

  const handleStopClick = () => {
    setStart(false);
  };

  const handleResetClick = () => {
    setTime(0);
    setStart(false); // Make sure to stop the timer when resetting
  };

  return (
    <>
      <div className="title">Stopwatch - react</div>
      <div className="timers">
        <Timer time={time} />
      </div>
      <div className="summary">
        {/* {handleLapClick()} */}
        <TimerSummary text={"Full Time"} time={time} />
      </div>
      <div className="buttons-section">
        <button onClick={handleStartClick}>
          <CaretRightOutlined /> Start
        </button>
        <button onClick={handleLapClick}>
          <StepForwardOutlined /> Lap
        </button>
        <button onClick={handleStopClick}>
          <CloseCircleOutlined /> Stop
        </button>
        <button onClick={handleResetClick}>
          <ClearOutlined /> Reset
        </button>
      </div>
    </>
  );
}

export default App;
