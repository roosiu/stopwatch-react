interface props {
  text: string;
  number?: number;
  time: number;
}

const TimerSummary = ({ text, time, number }: props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th colSpan={2}>{text}</th>
          </tr>
          <tr>
            {number && <td>{number}</td>}
            <td>{time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimerSummary;
