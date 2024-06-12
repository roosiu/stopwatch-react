interface props {
    time?: string;
}

const Timer = ({time='00:00:0'}: props) => {
    return <div>{time}</div>;
}
export default Timer;