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

    // Initialize a new birthday instance
    const day = document.querySelector("#dob-day").value;
    const monthNumber = document.querySelector("#dob-month").value;
    const year = document.querySelector("#dob-year").value;

    // create months of the year
    const yearmonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // convert the number month to text form
    const month = yearmonth[monthNumber-1];

    document.querySelector("#run").addEventListener("click", function () {
        alert(`User birthday is ${day}/${month}/${year}`);
    })

})();
