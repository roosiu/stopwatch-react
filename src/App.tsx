import {CaretRightOutlined, ClearOutlined, CloseCircleOutlined, StepForwardOutlined} from "@ant-design/icons";
import Timer from "./components/Timer.tsx";

function App() {
  return (
    <>
        <div className="title">
            Stopwatch - react
        </div>
        <div className="timers">
             <Timer/>
        </div>
      <div className="buttons-section">
          <button><CaretRightOutlined /> Start</button>
          <button><StepForwardOutlined /> Lap</button>
          <button><CloseCircleOutlined /> Stop</button>
          <button><ClearOutlined /> Reset</button>
      </div>
    </>
  );
}

export default App;
