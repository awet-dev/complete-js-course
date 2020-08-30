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

    // select the html element
    const userInputYear = document.getElementById("year").value;

    // listen to the click event and perform some tasks
    document.querySelector("#run").addEventListener("click", () => {

        // create result holder variable
        let result = "";

        // loop in 12 months to check whether the friday is in the 13th of the month in the given year
        for (let i = 0; i <= 11; i++) {
            const day = new Date(userInputYear, i, 13);
            const weekday = day.getDay();
            if (weekday === 5){
                result += `${day.toLocaleString("default", {month: "long"})} \n`;
            }
        }
        alert(result);


    })

})();