import {render} from "@testing-library/react";
import Timer from "../src/components/Timer";
import "@testing-library/jest-dom";
import {describe} from "@jest/globals";
import timeFormatter from "../src/utils/timeFormatter";

describe("TimerComponent", () => {
    const time = timeFormatter(1234);

    it("value not null", () => {
        expect(time).not.toBe(null);
    })

    test("value is a string", () => {
        expect(typeof time).toBe("string");
    });

    it("should return 00:00:0 if props are not provided", () => {
        const {getByText} = render(<Timer/>);
        expect(getByText("00:00:0")).toBeInTheDocument();
    })
    it("renders the given time prop", () => {
        const {getByText} = render(<Timer time={time}/>);
        expect(getByText(time)).toBeInTheDocument();
    });

});
