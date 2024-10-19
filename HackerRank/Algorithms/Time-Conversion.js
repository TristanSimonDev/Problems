function Convert(time) {
    // Check if 'time' is a string using typeof
    if (typeof time !== "string") return;

    // Extract hour, period (AM/PM), and the rest of the time
    let beginn = Number(time.slice(0, 2)); // First two characters for the hour
    let ending = time.slice(-2); // Last two characters for AM/PM
    let rest = time.slice(2, -2); // The middle part (minutes and seconds)

    if (ending === "AM") {
        // Convert "12 AM" to "00"
        if (beginn === 12) {
            beginn = 0;
        }
    } else if (ending === "PM") {
        // Convert "1 PM" to "13", "2 PM" to "14", ..., "12 PM" stays "12"
        if (beginn !== 12) {
            beginn += 12;
        }
    }

    // Pad the hour with a leading zero if it's a single digit (for hours like "00" to "09")
    let formattedHour = beginn < 10 ? `0${beginn}` : beginn.toString();

    // Return the full 24-hour formatted time
    return `${formattedHour}${rest}`;
}

/* Input:   07:05:45PM */
/* Output:  19:05:45 */
console.log(Convert("07:05:45PM")); // Output: "19:05:45"
console.log(Convert("12:40:22AM")); // Output: "00:40:22"
console.log(Convert("12:05:45PM")); // Output: "12:05:45"
console.log(Convert("01:30:00AM")); // Output: "01:30:00"
