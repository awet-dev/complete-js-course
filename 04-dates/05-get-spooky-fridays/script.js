/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let userInput = parseInt(document.getElementById("year").value);
    document.querySelector("#run").addEventListener("click", () => {
        let event = new Date(`August 19, ${userInput}`);
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = weekdays[event.getDay()];
        let yearmonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        yearmonth.forEach(function () {
            if (((event.getDay()) === 13) && (day === "Friday")) {
                console.log(event.getMonth(), event.getDay(), userInput);
            }
        })
    });

    // your code here


})();
