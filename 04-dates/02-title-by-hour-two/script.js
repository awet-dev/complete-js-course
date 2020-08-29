/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select the html element
    const target = document.getElementById("target");

    // create date object
    const now = new Date();

    // check if it is daytime or nighttime and also its minutes
    if (now.getHours() < 17) {
        target.innerHTML = "Hello";
    } else if (now.getHours() === 17 && now.getMinutes() < 30) {
        target.innerHTML = "Hello!";
    } else {
        target.innerHTML = "Good Evening!"
    }


})();
