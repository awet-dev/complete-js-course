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

    // your code here
    document.querySelector("#run").addEventListener("click", () => {
        let userInput = parseInt(document.getElementById("year").value);
        const now = new Date();
        let fullYear = now.setFullYear(userInput);
        alert(fullYear);
        let yearmonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        yearmonth.forEach(($month) => {
            // check if 13th of each month is friday
            if (fullYear.getDate[13] === "friday") {
                alert(`${fullYear.getFullYear} ${fullYear.getDate}`)
            }
        })
    })

})();
