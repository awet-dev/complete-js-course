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
    let userInputYear;


    document.querySelector("#run").addEventListener("click", () => {
        userInputYear = document.getElementById("year").value;
        let result = "";
        for (let i = 0; i <= 11; i++){
            let day = new Date(userInputYear, i, 13);
            let weekday = day.getDay();
            if (weekday === 5){
                result += (day.toLocaleString("default", {month: "long"}) + "\n");
            }
        }
        alert(result);


    })

})();