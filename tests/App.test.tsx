import { render, RenderResult } from "@testing-library/react";
import App from '../src/App';
import "@testing-library/jest-dom";

describe("Stopwatch App", () => {
    let getByText: RenderResult["getByText"];
    let getByRole: RenderResult["getByRole"];

    beforeEach(() => {
        const utils: RenderResult = render(<App />);
        getByText = utils.getByText;
        getByRole = utils.getByRole;
    });

    it("should render", () => {
        expect(getByText("Stopwatch - react")).toBeInTheDocument();
    });

    it("should render start button", () => {
        const startButton = getByRole('button', { name: /start/i });
        expect(startButton).toBeInTheDocument();
    });

    it('should render lap button', () => {
        const lapButton = getByRole('button', { name: /lap/i });
        expect(lapButton).toBeInTheDocument();
    });

    it('should render reset button', () => {
        const resetButton = getByRole('button', { name: /reset/i });
        expect(resetButton).toBeInTheDocument();
    });

    it('should render stop button', () => {
        const stopButton = getByRole('button', { name: /stop/i });
        expect(stopButton).toBeInTheDocument();
    });
});

