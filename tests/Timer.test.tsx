import {render} from '@testing-library/react';
import Timer from "../src/components/Timer";
import '@testing-library/jest-dom';
import {describe} from "@jest/globals";

describe('TimerComponent', () => {
    const time = '1234';

    it('value is a string', () => {
        expect(typeof time)
            .toBe('string');
    })

    it('renders the given time prop', () => {
        const {getByText} = render(<Timer time={time}/>);
        expect(getByText(time))
           .toBeInTheDocument();
    });

    it('return false', ()=>{

    })




})
