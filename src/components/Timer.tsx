
interface props {
  time: string;
}
const Timer = ({ time }: props) =>
{
  return <div>{time}</div>;
}
export default Timer;