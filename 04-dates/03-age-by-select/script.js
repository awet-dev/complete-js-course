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
    let d = document.querySelector("#dob-day").value;
    let m = document.querySelector("#dob-month").value;
    let y = document.querySelector("#dob-year").value;

    let time = {
        day: d,
        month: m,
        year: y
    }
    document.querySelector("#run").addEventListener("click", function () {
        alert(`User birthday is ${time.day}/${time.month}/${time.year}`);
    })

})();
