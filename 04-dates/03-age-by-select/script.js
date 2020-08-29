/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Initialize a new birthday instance
    const d = document.querySelector("#dob-day").value;
    const m = document.querySelector("#dob-month").value;
    const y = document.querySelector("#dob-year").value;

    const yearmonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const month = yearmonth[m-1];

    const time = {
        day: d,
        months: month,
        year: y
    };
    document.querySelector("#run").addEventListener("click", function () {
        alert(`User birthday is ${time.day}/${time.months}/${time.year}`);
    })

})();
