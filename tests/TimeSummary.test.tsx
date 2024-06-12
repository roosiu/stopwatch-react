import {describe} from "@jest/globals";
import {render} from "@testing-library/react";
import TimerSummary from "../src/components/TimeSummary";
import "@testing-library/jest-dom";

describe("TimerSummary", () => {
    const text = "Lap";
    const time = "1234";
    const number = 1;

    it('should return text', () => {
        const {getByText} = render(<TimerSummary text={text} time={time} number={number}/>);
        expect(getByText(text)).toBeInTheDocument();
    });

    it('should return time', () => {
        const {getByText} = render(<TimerSummary text={text} time={time} number={number}/>);
        expect(getByText(time)).toBeInTheDocument();
    });

    it('should return number', () => {
        const {getByText} = render(<TimerSummary text={text} time={time} number={number}/>);
        expect(getByText(number)).toBeInTheDocument();
    });

})