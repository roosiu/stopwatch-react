import { useState } from "react";

interface props {
  time: number;
}
const Timer = ({ time }: props) => {
  const [minutes, setMinutes] = useState(0);
  if (time > 60) {
    // setMinutes(Math.floor(time / 60));
  }
  return <div>{time}</div>;
};
export default Timer;
