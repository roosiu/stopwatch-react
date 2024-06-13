/**
 * Converts a time value in milliseconds to a formatted string in the format "MM:SS:mmm".
 *
 * @param {number} time - The time value in milliseconds.
 * @returns {string} The formatted time string.
 */
const timeFormatter = (time: number): string => {
    const milliseconds = time % 10;
    const seconds = Math.floor((time / 10) % 60);
    const minutes = Math.floor((time / 600) % 60);


    /**
     * Converts a number to a string, padding with leading zeros if necessary.
     *
     * @param {number} value - The number to convert to a string.
     * @param {boolean} [pad=false] - If true, the resulting string will be padded with leading zeros to ensure it has a length of 2.
     * @returns {string} The string representation of the number, possibly padded with leading zeros.
     */
    const stringify = (value: number, pad: boolean = false): string => {
        let result = value.toString();
        if (pad) {
            result = result.padStart(2, '0');
        }
        return result;
    }

    return `${stringify(minutes, true)}:${stringify(seconds, true)}:${milliseconds}0`;
}

export default timeFormatter;